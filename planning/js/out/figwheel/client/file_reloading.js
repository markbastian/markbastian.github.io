// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27787_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27787_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27788 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27789 = null;
var count__27790 = (0);
var i__27791 = (0);
while(true){
if((i__27791 < count__27790)){
var n = cljs.core._nth.call(null,chunk__27789,i__27791);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27792 = seq__27788;
var G__27793 = chunk__27789;
var G__27794 = count__27790;
var G__27795 = (i__27791 + (1));
seq__27788 = G__27792;
chunk__27789 = G__27793;
count__27790 = G__27794;
i__27791 = G__27795;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27788);
if(temp__5457__auto__){
var seq__27788__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27788__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__27788__$1);
var G__27796 = cljs.core.chunk_rest.call(null,seq__27788__$1);
var G__27797 = c__4461__auto__;
var G__27798 = cljs.core.count.call(null,c__4461__auto__);
var G__27799 = (0);
seq__27788 = G__27796;
chunk__27789 = G__27797;
count__27790 = G__27798;
i__27791 = G__27799;
continue;
} else {
var n = cljs.core.first.call(null,seq__27788__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27800 = cljs.core.next.call(null,seq__27788__$1);
var G__27801 = null;
var G__27802 = (0);
var G__27803 = (0);
seq__27788 = G__27800;
chunk__27789 = G__27801;
count__27790 = G__27802;
i__27791 = G__27803;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__27804){
var vec__27805 = p__27804;
var _ = cljs.core.nth.call(null,vec__27805,(0),null);
var v = cljs.core.nth.call(null,vec__27805,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__27808){
var vec__27809 = p__27808;
var k = cljs.core.nth.call(null,vec__27809,(0),null);
var v = cljs.core.nth.call(null,vec__27809,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27821_27829 = cljs.core.seq.call(null,deps);
var chunk__27822_27830 = null;
var count__27823_27831 = (0);
var i__27824_27832 = (0);
while(true){
if((i__27824_27832 < count__27823_27831)){
var dep_27833 = cljs.core._nth.call(null,chunk__27822_27830,i__27824_27832);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_27833;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27833));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27833,(depth + (1)),state);
} else {
}


var G__27834 = seq__27821_27829;
var G__27835 = chunk__27822_27830;
var G__27836 = count__27823_27831;
var G__27837 = (i__27824_27832 + (1));
seq__27821_27829 = G__27834;
chunk__27822_27830 = G__27835;
count__27823_27831 = G__27836;
i__27824_27832 = G__27837;
continue;
} else {
var temp__5457__auto___27838 = cljs.core.seq.call(null,seq__27821_27829);
if(temp__5457__auto___27838){
var seq__27821_27839__$1 = temp__5457__auto___27838;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27821_27839__$1)){
var c__4461__auto___27840 = cljs.core.chunk_first.call(null,seq__27821_27839__$1);
var G__27841 = cljs.core.chunk_rest.call(null,seq__27821_27839__$1);
var G__27842 = c__4461__auto___27840;
var G__27843 = cljs.core.count.call(null,c__4461__auto___27840);
var G__27844 = (0);
seq__27821_27829 = G__27841;
chunk__27822_27830 = G__27842;
count__27823_27831 = G__27843;
i__27824_27832 = G__27844;
continue;
} else {
var dep_27845 = cljs.core.first.call(null,seq__27821_27839__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_27845;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27845));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27845,(depth + (1)),state);
} else {
}


var G__27846 = cljs.core.next.call(null,seq__27821_27839__$1);
var G__27847 = null;
var G__27848 = (0);
var G__27849 = (0);
seq__27821_27829 = G__27846;
chunk__27822_27830 = G__27847;
count__27823_27831 = G__27848;
i__27824_27832 = G__27849;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27825){
var vec__27826 = p__27825;
var seq__27827 = cljs.core.seq.call(null,vec__27826);
var first__27828 = cljs.core.first.call(null,seq__27827);
var seq__27827__$1 = cljs.core.next.call(null,seq__27827);
var x = first__27828;
var xs = seq__27827__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27826,seq__27827,first__27828,seq__27827__$1,x,xs,get_deps__$1){
return (function (p1__27812_SHARP_){
return clojure.set.difference.call(null,p1__27812_SHARP_,x);
});})(vec__27826,seq__27827,first__27828,seq__27827__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27850 = cljs.core.seq.call(null,provides);
var chunk__27851 = null;
var count__27852 = (0);
var i__27853 = (0);
while(true){
if((i__27853 < count__27852)){
var prov = cljs.core._nth.call(null,chunk__27851,i__27853);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27854_27862 = cljs.core.seq.call(null,requires);
var chunk__27855_27863 = null;
var count__27856_27864 = (0);
var i__27857_27865 = (0);
while(true){
if((i__27857_27865 < count__27856_27864)){
var req_27866 = cljs.core._nth.call(null,chunk__27855_27863,i__27857_27865);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27866,prov);


var G__27867 = seq__27854_27862;
var G__27868 = chunk__27855_27863;
var G__27869 = count__27856_27864;
var G__27870 = (i__27857_27865 + (1));
seq__27854_27862 = G__27867;
chunk__27855_27863 = G__27868;
count__27856_27864 = G__27869;
i__27857_27865 = G__27870;
continue;
} else {
var temp__5457__auto___27871 = cljs.core.seq.call(null,seq__27854_27862);
if(temp__5457__auto___27871){
var seq__27854_27872__$1 = temp__5457__auto___27871;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27854_27872__$1)){
var c__4461__auto___27873 = cljs.core.chunk_first.call(null,seq__27854_27872__$1);
var G__27874 = cljs.core.chunk_rest.call(null,seq__27854_27872__$1);
var G__27875 = c__4461__auto___27873;
var G__27876 = cljs.core.count.call(null,c__4461__auto___27873);
var G__27877 = (0);
seq__27854_27862 = G__27874;
chunk__27855_27863 = G__27875;
count__27856_27864 = G__27876;
i__27857_27865 = G__27877;
continue;
} else {
var req_27878 = cljs.core.first.call(null,seq__27854_27872__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27878,prov);


var G__27879 = cljs.core.next.call(null,seq__27854_27872__$1);
var G__27880 = null;
var G__27881 = (0);
var G__27882 = (0);
seq__27854_27862 = G__27879;
chunk__27855_27863 = G__27880;
count__27856_27864 = G__27881;
i__27857_27865 = G__27882;
continue;
}
} else {
}
}
break;
}


var G__27883 = seq__27850;
var G__27884 = chunk__27851;
var G__27885 = count__27852;
var G__27886 = (i__27853 + (1));
seq__27850 = G__27883;
chunk__27851 = G__27884;
count__27852 = G__27885;
i__27853 = G__27886;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27850);
if(temp__5457__auto__){
var seq__27850__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27850__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__27850__$1);
var G__27887 = cljs.core.chunk_rest.call(null,seq__27850__$1);
var G__27888 = c__4461__auto__;
var G__27889 = cljs.core.count.call(null,c__4461__auto__);
var G__27890 = (0);
seq__27850 = G__27887;
chunk__27851 = G__27888;
count__27852 = G__27889;
i__27853 = G__27890;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27850__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27858_27891 = cljs.core.seq.call(null,requires);
var chunk__27859_27892 = null;
var count__27860_27893 = (0);
var i__27861_27894 = (0);
while(true){
if((i__27861_27894 < count__27860_27893)){
var req_27895 = cljs.core._nth.call(null,chunk__27859_27892,i__27861_27894);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27895,prov);


var G__27896 = seq__27858_27891;
var G__27897 = chunk__27859_27892;
var G__27898 = count__27860_27893;
var G__27899 = (i__27861_27894 + (1));
seq__27858_27891 = G__27896;
chunk__27859_27892 = G__27897;
count__27860_27893 = G__27898;
i__27861_27894 = G__27899;
continue;
} else {
var temp__5457__auto___27900__$1 = cljs.core.seq.call(null,seq__27858_27891);
if(temp__5457__auto___27900__$1){
var seq__27858_27901__$1 = temp__5457__auto___27900__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27858_27901__$1)){
var c__4461__auto___27902 = cljs.core.chunk_first.call(null,seq__27858_27901__$1);
var G__27903 = cljs.core.chunk_rest.call(null,seq__27858_27901__$1);
var G__27904 = c__4461__auto___27902;
var G__27905 = cljs.core.count.call(null,c__4461__auto___27902);
var G__27906 = (0);
seq__27858_27891 = G__27903;
chunk__27859_27892 = G__27904;
count__27860_27893 = G__27905;
i__27861_27894 = G__27906;
continue;
} else {
var req_27907 = cljs.core.first.call(null,seq__27858_27901__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27907,prov);


var G__27908 = cljs.core.next.call(null,seq__27858_27901__$1);
var G__27909 = null;
var G__27910 = (0);
var G__27911 = (0);
seq__27858_27891 = G__27908;
chunk__27859_27892 = G__27909;
count__27860_27893 = G__27910;
i__27861_27894 = G__27911;
continue;
}
} else {
}
}
break;
}


var G__27912 = cljs.core.next.call(null,seq__27850__$1);
var G__27913 = null;
var G__27914 = (0);
var G__27915 = (0);
seq__27850 = G__27912;
chunk__27851 = G__27913;
count__27852 = G__27914;
i__27853 = G__27915;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27916_27920 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27917_27921 = null;
var count__27918_27922 = (0);
var i__27919_27923 = (0);
while(true){
if((i__27919_27923 < count__27918_27922)){
var ns_27924 = cljs.core._nth.call(null,chunk__27917_27921,i__27919_27923);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27924);


var G__27925 = seq__27916_27920;
var G__27926 = chunk__27917_27921;
var G__27927 = count__27918_27922;
var G__27928 = (i__27919_27923 + (1));
seq__27916_27920 = G__27925;
chunk__27917_27921 = G__27926;
count__27918_27922 = G__27927;
i__27919_27923 = G__27928;
continue;
} else {
var temp__5457__auto___27929 = cljs.core.seq.call(null,seq__27916_27920);
if(temp__5457__auto___27929){
var seq__27916_27930__$1 = temp__5457__auto___27929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27916_27930__$1)){
var c__4461__auto___27931 = cljs.core.chunk_first.call(null,seq__27916_27930__$1);
var G__27932 = cljs.core.chunk_rest.call(null,seq__27916_27930__$1);
var G__27933 = c__4461__auto___27931;
var G__27934 = cljs.core.count.call(null,c__4461__auto___27931);
var G__27935 = (0);
seq__27916_27920 = G__27932;
chunk__27917_27921 = G__27933;
count__27918_27922 = G__27934;
i__27919_27923 = G__27935;
continue;
} else {
var ns_27936 = cljs.core.first.call(null,seq__27916_27930__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27936);


var G__27937 = cljs.core.next.call(null,seq__27916_27930__$1);
var G__27938 = null;
var G__27939 = (0);
var G__27940 = (0);
seq__27916_27920 = G__27937;
chunk__27917_27921 = G__27938;
count__27918_27922 = G__27939;
i__27919_27923 = G__27940;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27941__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27942__i = 0, G__27942__a = new Array(arguments.length -  0);
while (G__27942__i < G__27942__a.length) {G__27942__a[G__27942__i] = arguments[G__27942__i + 0]; ++G__27942__i;}
  args = new cljs.core.IndexedSeq(G__27942__a,0,null);
} 
return G__27941__delegate.call(this,args);};
G__27941.cljs$lang$maxFixedArity = 0;
G__27941.cljs$lang$applyTo = (function (arglist__27943){
var args = cljs.core.seq(arglist__27943);
return G__27941__delegate(args);
});
G__27941.cljs$core$IFn$_invoke$arity$variadic = G__27941__delegate;
return G__27941;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27944_SHARP_,p2__27945_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27944_SHARP_)),p2__27945_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27946_SHARP_,p2__27947_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27946_SHARP_),p2__27947_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27948 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27948.addCallback(((function (G__27948){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27948))
);

G__27948.addErrback(((function (G__27948){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27948))
);

return G__27948;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27949){if((e27949 instanceof Error)){
var e = e27949;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27949;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27950){if((e27950 instanceof Error)){
var e = e27950;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27950;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27951 = cljs.core._EQ_;
var expr__27952 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27951.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27952))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27951.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27952))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27951.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27952))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27951,expr__27952){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27951,expr__27952))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27954,callback){
var map__27955 = p__27954;
var map__27955__$1 = (((((!((map__27955 == null))))?(((((map__27955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27955):map__27955);
var file_msg = map__27955__$1;
var request_url = cljs.core.get.call(null,map__27955__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27955,map__27955__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27955,map__27955__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25780__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto__){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto__){
return (function (state_27993){
var state_val_27994 = (state_27993[(1)]);
if((state_val_27994 === (7))){
var inst_27989 = (state_27993[(2)]);
var state_27993__$1 = state_27993;
var statearr_27995_28021 = state_27993__$1;
(statearr_27995_28021[(2)] = inst_27989);

(statearr_27995_28021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (1))){
var state_27993__$1 = state_27993;
var statearr_27996_28022 = state_27993__$1;
(statearr_27996_28022[(2)] = null);

(statearr_27996_28022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (4))){
var inst_27959 = (state_27993[(7)]);
var inst_27959__$1 = (state_27993[(2)]);
var state_27993__$1 = (function (){var statearr_27997 = state_27993;
(statearr_27997[(7)] = inst_27959__$1);

return statearr_27997;
})();
if(cljs.core.truth_(inst_27959__$1)){
var statearr_27998_28023 = state_27993__$1;
(statearr_27998_28023[(1)] = (5));

} else {
var statearr_27999_28024 = state_27993__$1;
(statearr_27999_28024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (15))){
var inst_27974 = (state_27993[(8)]);
var inst_27972 = (state_27993[(9)]);
var inst_27976 = inst_27974.call(null,inst_27972);
var state_27993__$1 = state_27993;
var statearr_28000_28025 = state_27993__$1;
(statearr_28000_28025[(2)] = inst_27976);

(statearr_28000_28025[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (13))){
var inst_27983 = (state_27993[(2)]);
var state_27993__$1 = state_27993;
var statearr_28001_28026 = state_27993__$1;
(statearr_28001_28026[(2)] = inst_27983);

(statearr_28001_28026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (6))){
var state_27993__$1 = state_27993;
var statearr_28002_28027 = state_27993__$1;
(statearr_28002_28027[(2)] = null);

(statearr_28002_28027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (17))){
var inst_27980 = (state_27993[(2)]);
var state_27993__$1 = state_27993;
var statearr_28003_28028 = state_27993__$1;
(statearr_28003_28028[(2)] = inst_27980);

(statearr_28003_28028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (3))){
var inst_27991 = (state_27993[(2)]);
var state_27993__$1 = state_27993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27993__$1,inst_27991);
} else {
if((state_val_27994 === (12))){
var state_27993__$1 = state_27993;
var statearr_28004_28029 = state_27993__$1;
(statearr_28004_28029[(2)] = null);

(statearr_28004_28029[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (2))){
var state_27993__$1 = state_27993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27993__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27994 === (11))){
var inst_27964 = (state_27993[(10)]);
var inst_27970 = figwheel.client.file_reloading.blocking_load.call(null,inst_27964);
var state_27993__$1 = state_27993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27993__$1,(14),inst_27970);
} else {
if((state_val_27994 === (9))){
var inst_27964 = (state_27993[(10)]);
var state_27993__$1 = state_27993;
if(cljs.core.truth_(inst_27964)){
var statearr_28005_28030 = state_27993__$1;
(statearr_28005_28030[(1)] = (11));

} else {
var statearr_28006_28031 = state_27993__$1;
(statearr_28006_28031[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (5))){
var inst_27965 = (state_27993[(11)]);
var inst_27959 = (state_27993[(7)]);
var inst_27964 = cljs.core.nth.call(null,inst_27959,(0),null);
var inst_27965__$1 = cljs.core.nth.call(null,inst_27959,(1),null);
var state_27993__$1 = (function (){var statearr_28007 = state_27993;
(statearr_28007[(11)] = inst_27965__$1);

(statearr_28007[(10)] = inst_27964);

return statearr_28007;
})();
if(cljs.core.truth_(inst_27965__$1)){
var statearr_28008_28032 = state_27993__$1;
(statearr_28008_28032[(1)] = (8));

} else {
var statearr_28009_28033 = state_27993__$1;
(statearr_28009_28033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (14))){
var inst_27974 = (state_27993[(8)]);
var inst_27964 = (state_27993[(10)]);
var inst_27972 = (state_27993[(2)]);
var inst_27973 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27974__$1 = cljs.core.get.call(null,inst_27973,inst_27964);
var state_27993__$1 = (function (){var statearr_28010 = state_27993;
(statearr_28010[(8)] = inst_27974__$1);

(statearr_28010[(9)] = inst_27972);

return statearr_28010;
})();
if(cljs.core.truth_(inst_27974__$1)){
var statearr_28011_28034 = state_27993__$1;
(statearr_28011_28034[(1)] = (15));

} else {
var statearr_28012_28035 = state_27993__$1;
(statearr_28012_28035[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (16))){
var inst_27972 = (state_27993[(9)]);
var inst_27978 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27972);
var state_27993__$1 = state_27993;
var statearr_28013_28036 = state_27993__$1;
(statearr_28013_28036[(2)] = inst_27978);

(statearr_28013_28036[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (10))){
var inst_27985 = (state_27993[(2)]);
var state_27993__$1 = (function (){var statearr_28014 = state_27993;
(statearr_28014[(12)] = inst_27985);

return statearr_28014;
})();
var statearr_28015_28037 = state_27993__$1;
(statearr_28015_28037[(2)] = null);

(statearr_28015_28037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (8))){
var inst_27965 = (state_27993[(11)]);
var inst_27967 = eval(inst_27965);
var state_27993__$1 = state_27993;
var statearr_28016_28038 = state_27993__$1;
(statearr_28016_28038[(2)] = inst_27967);

(statearr_28016_28038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25780__auto__))
;
return ((function (switch__25685__auto__,c__25780__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25686__auto__ = null;
var figwheel$client$file_reloading$state_machine__25686__auto____0 = (function (){
var statearr_28017 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28017[(0)] = figwheel$client$file_reloading$state_machine__25686__auto__);

(statearr_28017[(1)] = (1));

return statearr_28017;
});
var figwheel$client$file_reloading$state_machine__25686__auto____1 = (function (state_27993){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_27993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e28018){if((e28018 instanceof Object)){
var ex__25689__auto__ = e28018;
var statearr_28019_28039 = state_27993;
(statearr_28019_28039[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28040 = state_27993;
state_27993 = G__28040;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25686__auto__ = function(state_27993){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25686__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25686__auto____1.call(this,state_27993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25686__auto____0;
figwheel$client$file_reloading$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25686__auto____1;
return figwheel$client$file_reloading$state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto__))
})();
var state__25782__auto__ = (function (){var statearr_28020 = f__25781__auto__.call(null);
(statearr_28020[(6)] = c__25780__auto__);

return statearr_28020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto__))
);

return c__25780__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28042 = arguments.length;
switch (G__28042) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28044,callback){
var map__28045 = p__28044;
var map__28045__$1 = (((((!((map__28045 == null))))?(((((map__28045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28045):map__28045);
var file_msg = map__28045__$1;
var namespace = cljs.core.get.call(null,map__28045__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28045,map__28045__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28045,map__28045__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28047){
var map__28048 = p__28047;
var map__28048__$1 = (((((!((map__28048 == null))))?(((((map__28048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28048):map__28048);
var file_msg = map__28048__$1;
var namespace = cljs.core.get.call(null,map__28048__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28050){
var map__28051 = p__28050;
var map__28051__$1 = (((((!((map__28051 == null))))?(((((map__28051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28051):map__28051);
var file_msg = map__28051__$1;
var namespace = cljs.core.get.call(null,map__28051__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28053,callback){
var map__28054 = p__28053;
var map__28054__$1 = (((((!((map__28054 == null))))?(((((map__28054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28054):map__28054);
var file_msg = map__28054__$1;
var request_url = cljs.core.get.call(null,map__28054__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28054__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25780__auto___28104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto___28104,out){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto___28104,out){
return (function (state_28089){
var state_val_28090 = (state_28089[(1)]);
if((state_val_28090 === (1))){
var inst_28063 = cljs.core.seq.call(null,files);
var inst_28064 = cljs.core.first.call(null,inst_28063);
var inst_28065 = cljs.core.next.call(null,inst_28063);
var inst_28066 = files;
var state_28089__$1 = (function (){var statearr_28091 = state_28089;
(statearr_28091[(7)] = inst_28065);

(statearr_28091[(8)] = inst_28066);

(statearr_28091[(9)] = inst_28064);

return statearr_28091;
})();
var statearr_28092_28105 = state_28089__$1;
(statearr_28092_28105[(2)] = null);

(statearr_28092_28105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28090 === (2))){
var inst_28066 = (state_28089[(8)]);
var inst_28072 = (state_28089[(10)]);
var inst_28071 = cljs.core.seq.call(null,inst_28066);
var inst_28072__$1 = cljs.core.first.call(null,inst_28071);
var inst_28073 = cljs.core.next.call(null,inst_28071);
var inst_28074 = (inst_28072__$1 == null);
var inst_28075 = cljs.core.not.call(null,inst_28074);
var state_28089__$1 = (function (){var statearr_28093 = state_28089;
(statearr_28093[(11)] = inst_28073);

(statearr_28093[(10)] = inst_28072__$1);

return statearr_28093;
})();
if(inst_28075){
var statearr_28094_28106 = state_28089__$1;
(statearr_28094_28106[(1)] = (4));

} else {
var statearr_28095_28107 = state_28089__$1;
(statearr_28095_28107[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28090 === (3))){
var inst_28087 = (state_28089[(2)]);
var state_28089__$1 = state_28089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28089__$1,inst_28087);
} else {
if((state_val_28090 === (4))){
var inst_28072 = (state_28089[(10)]);
var inst_28077 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28072);
var state_28089__$1 = state_28089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28089__$1,(7),inst_28077);
} else {
if((state_val_28090 === (5))){
var inst_28083 = cljs.core.async.close_BANG_.call(null,out);
var state_28089__$1 = state_28089;
var statearr_28096_28108 = state_28089__$1;
(statearr_28096_28108[(2)] = inst_28083);

(statearr_28096_28108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28090 === (6))){
var inst_28085 = (state_28089[(2)]);
var state_28089__$1 = state_28089;
var statearr_28097_28109 = state_28089__$1;
(statearr_28097_28109[(2)] = inst_28085);

(statearr_28097_28109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28090 === (7))){
var inst_28073 = (state_28089[(11)]);
var inst_28079 = (state_28089[(2)]);
var inst_28080 = cljs.core.async.put_BANG_.call(null,out,inst_28079);
var inst_28066 = inst_28073;
var state_28089__$1 = (function (){var statearr_28098 = state_28089;
(statearr_28098[(12)] = inst_28080);

(statearr_28098[(8)] = inst_28066);

return statearr_28098;
})();
var statearr_28099_28110 = state_28089__$1;
(statearr_28099_28110[(2)] = null);

(statearr_28099_28110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__25780__auto___28104,out))
;
return ((function (switch__25685__auto__,c__25780__auto___28104,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25686__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25686__auto____0 = (function (){
var statearr_28100 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28100[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25686__auto__);

(statearr_28100[(1)] = (1));

return statearr_28100;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25686__auto____1 = (function (state_28089){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_28089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e28101){if((e28101 instanceof Object)){
var ex__25689__auto__ = e28101;
var statearr_28102_28111 = state_28089;
(statearr_28102_28111[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28112 = state_28089;
state_28089 = G__28112;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25686__auto__ = function(state_28089){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25686__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25686__auto____1.call(this,state_28089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25686__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25686__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto___28104,out))
})();
var state__25782__auto__ = (function (){var statearr_28103 = f__25781__auto__.call(null);
(statearr_28103[(6)] = c__25780__auto___28104);

return statearr_28103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto___28104,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28113,opts){
var map__28114 = p__28113;
var map__28114__$1 = (((((!((map__28114 == null))))?(((((map__28114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28114):map__28114);
var eval_body = cljs.core.get.call(null,map__28114__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28114__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28116){var e = e28116;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28117_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28117_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28118){
var vec__28119 = p__28118;
var k = cljs.core.nth.call(null,vec__28119,(0),null);
var v = cljs.core.nth.call(null,vec__28119,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28122){
var vec__28123 = p__28122;
var k = cljs.core.nth.call(null,vec__28123,(0),null);
var v = cljs.core.nth.call(null,vec__28123,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28129,p__28130){
var map__28131 = p__28129;
var map__28131__$1 = (((((!((map__28131 == null))))?(((((map__28131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28131):map__28131);
var opts = map__28131__$1;
var before_jsload = cljs.core.get.call(null,map__28131__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28131__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28131__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28132 = p__28130;
var map__28132__$1 = (((((!((map__28132 == null))))?(((((map__28132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28132):map__28132);
var msg = map__28132__$1;
var files = cljs.core.get.call(null,map__28132__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28132__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28132__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25780__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28286){
var state_val_28287 = (state_28286[(1)]);
if((state_val_28287 === (7))){
var inst_28147 = (state_28286[(7)]);
var inst_28148 = (state_28286[(8)]);
var inst_28149 = (state_28286[(9)]);
var inst_28146 = (state_28286[(10)]);
var inst_28154 = cljs.core._nth.call(null,inst_28147,inst_28149);
var inst_28155 = figwheel.client.file_reloading.eval_body.call(null,inst_28154,opts);
var inst_28156 = (inst_28149 + (1));
var tmp28288 = inst_28147;
var tmp28289 = inst_28148;
var tmp28290 = inst_28146;
var inst_28146__$1 = tmp28290;
var inst_28147__$1 = tmp28288;
var inst_28148__$1 = tmp28289;
var inst_28149__$1 = inst_28156;
var state_28286__$1 = (function (){var statearr_28291 = state_28286;
(statearr_28291[(7)] = inst_28147__$1);

(statearr_28291[(8)] = inst_28148__$1);

(statearr_28291[(9)] = inst_28149__$1);

(statearr_28291[(10)] = inst_28146__$1);

(statearr_28291[(11)] = inst_28155);

return statearr_28291;
})();
var statearr_28292_28375 = state_28286__$1;
(statearr_28292_28375[(2)] = null);

(statearr_28292_28375[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (20))){
var inst_28189 = (state_28286[(12)]);
var inst_28197 = figwheel.client.file_reloading.sort_files.call(null,inst_28189);
var state_28286__$1 = state_28286;
var statearr_28293_28376 = state_28286__$1;
(statearr_28293_28376[(2)] = inst_28197);

(statearr_28293_28376[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (27))){
var state_28286__$1 = state_28286;
var statearr_28294_28377 = state_28286__$1;
(statearr_28294_28377[(2)] = null);

(statearr_28294_28377[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (1))){
var inst_28138 = (state_28286[(13)]);
var inst_28135 = before_jsload.call(null,files);
var inst_28136 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28137 = (function (){return ((function (inst_28138,inst_28135,inst_28136,state_val_28287,c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28126_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28126_SHARP_);
});
;})(inst_28138,inst_28135,inst_28136,state_val_28287,c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28138__$1 = cljs.core.filter.call(null,inst_28137,files);
var inst_28139 = cljs.core.not_empty.call(null,inst_28138__$1);
var state_28286__$1 = (function (){var statearr_28295 = state_28286;
(statearr_28295[(14)] = inst_28136);

(statearr_28295[(15)] = inst_28135);

(statearr_28295[(13)] = inst_28138__$1);

return statearr_28295;
})();
if(cljs.core.truth_(inst_28139)){
var statearr_28296_28378 = state_28286__$1;
(statearr_28296_28378[(1)] = (2));

} else {
var statearr_28297_28379 = state_28286__$1;
(statearr_28297_28379[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (24))){
var state_28286__$1 = state_28286;
var statearr_28298_28380 = state_28286__$1;
(statearr_28298_28380[(2)] = null);

(statearr_28298_28380[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (39))){
var inst_28239 = (state_28286[(16)]);
var state_28286__$1 = state_28286;
var statearr_28299_28381 = state_28286__$1;
(statearr_28299_28381[(2)] = inst_28239);

(statearr_28299_28381[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (46))){
var inst_28281 = (state_28286[(2)]);
var state_28286__$1 = state_28286;
var statearr_28300_28382 = state_28286__$1;
(statearr_28300_28382[(2)] = inst_28281);

(statearr_28300_28382[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (4))){
var inst_28183 = (state_28286[(2)]);
var inst_28184 = cljs.core.List.EMPTY;
var inst_28185 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28184);
var inst_28186 = (function (){return ((function (inst_28183,inst_28184,inst_28185,state_val_28287,c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28127_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28127_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28127_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28127_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_28183,inst_28184,inst_28185,state_val_28287,c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28187 = cljs.core.filter.call(null,inst_28186,files);
var inst_28188 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28189 = cljs.core.concat.call(null,inst_28187,inst_28188);
var state_28286__$1 = (function (){var statearr_28301 = state_28286;
(statearr_28301[(17)] = inst_28185);

(statearr_28301[(12)] = inst_28189);

(statearr_28301[(18)] = inst_28183);

return statearr_28301;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28302_28383 = state_28286__$1;
(statearr_28302_28383[(1)] = (16));

} else {
var statearr_28303_28384 = state_28286__$1;
(statearr_28303_28384[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (15))){
var inst_28173 = (state_28286[(2)]);
var state_28286__$1 = state_28286;
var statearr_28304_28385 = state_28286__$1;
(statearr_28304_28385[(2)] = inst_28173);

(statearr_28304_28385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (21))){
var inst_28199 = (state_28286[(19)]);
var inst_28199__$1 = (state_28286[(2)]);
var inst_28200 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28199__$1);
var state_28286__$1 = (function (){var statearr_28305 = state_28286;
(statearr_28305[(19)] = inst_28199__$1);

return statearr_28305;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28286__$1,(22),inst_28200);
} else {
if((state_val_28287 === (31))){
var inst_28284 = (state_28286[(2)]);
var state_28286__$1 = state_28286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28286__$1,inst_28284);
} else {
if((state_val_28287 === (32))){
var inst_28239 = (state_28286[(16)]);
var inst_28244 = inst_28239.cljs$lang$protocol_mask$partition0$;
var inst_28245 = (inst_28244 & (64));
var inst_28246 = inst_28239.cljs$core$ISeq$;
var inst_28247 = (cljs.core.PROTOCOL_SENTINEL === inst_28246);
var inst_28248 = ((inst_28245) || (inst_28247));
var state_28286__$1 = state_28286;
if(cljs.core.truth_(inst_28248)){
var statearr_28306_28386 = state_28286__$1;
(statearr_28306_28386[(1)] = (35));

} else {
var statearr_28307_28387 = state_28286__$1;
(statearr_28307_28387[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (40))){
var inst_28261 = (state_28286[(20)]);
var inst_28260 = (state_28286[(2)]);
var inst_28261__$1 = cljs.core.get.call(null,inst_28260,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28262 = cljs.core.get.call(null,inst_28260,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28263 = cljs.core.not_empty.call(null,inst_28261__$1);
var state_28286__$1 = (function (){var statearr_28308 = state_28286;
(statearr_28308[(20)] = inst_28261__$1);

(statearr_28308[(21)] = inst_28262);

return statearr_28308;
})();
if(cljs.core.truth_(inst_28263)){
var statearr_28309_28388 = state_28286__$1;
(statearr_28309_28388[(1)] = (41));

} else {
var statearr_28310_28389 = state_28286__$1;
(statearr_28310_28389[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (33))){
var state_28286__$1 = state_28286;
var statearr_28311_28390 = state_28286__$1;
(statearr_28311_28390[(2)] = false);

(statearr_28311_28390[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (13))){
var inst_28159 = (state_28286[(22)]);
var inst_28163 = cljs.core.chunk_first.call(null,inst_28159);
var inst_28164 = cljs.core.chunk_rest.call(null,inst_28159);
var inst_28165 = cljs.core.count.call(null,inst_28163);
var inst_28146 = inst_28164;
var inst_28147 = inst_28163;
var inst_28148 = inst_28165;
var inst_28149 = (0);
var state_28286__$1 = (function (){var statearr_28312 = state_28286;
(statearr_28312[(7)] = inst_28147);

(statearr_28312[(8)] = inst_28148);

(statearr_28312[(9)] = inst_28149);

(statearr_28312[(10)] = inst_28146);

return statearr_28312;
})();
var statearr_28313_28391 = state_28286__$1;
(statearr_28313_28391[(2)] = null);

(statearr_28313_28391[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (22))){
var inst_28207 = (state_28286[(23)]);
var inst_28199 = (state_28286[(19)]);
var inst_28202 = (state_28286[(24)]);
var inst_28203 = (state_28286[(25)]);
var inst_28202__$1 = (state_28286[(2)]);
var inst_28203__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28202__$1);
var inst_28204 = (function (){var all_files = inst_28199;
var res_SINGLEQUOTE_ = inst_28202__$1;
var res = inst_28203__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28207,inst_28199,inst_28202,inst_28203,inst_28202__$1,inst_28203__$1,state_val_28287,c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28128_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28128_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28207,inst_28199,inst_28202,inst_28203,inst_28202__$1,inst_28203__$1,state_val_28287,c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28205 = cljs.core.filter.call(null,inst_28204,inst_28202__$1);
var inst_28206 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28207__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28206);
var inst_28208 = cljs.core.not_empty.call(null,inst_28207__$1);
var state_28286__$1 = (function (){var statearr_28314 = state_28286;
(statearr_28314[(23)] = inst_28207__$1);

(statearr_28314[(24)] = inst_28202__$1);

(statearr_28314[(26)] = inst_28205);

(statearr_28314[(25)] = inst_28203__$1);

return statearr_28314;
})();
if(cljs.core.truth_(inst_28208)){
var statearr_28315_28392 = state_28286__$1;
(statearr_28315_28392[(1)] = (23));

} else {
var statearr_28316_28393 = state_28286__$1;
(statearr_28316_28393[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (36))){
var state_28286__$1 = state_28286;
var statearr_28317_28394 = state_28286__$1;
(statearr_28317_28394[(2)] = false);

(statearr_28317_28394[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (41))){
var inst_28261 = (state_28286[(20)]);
var inst_28265 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28266 = cljs.core.map.call(null,inst_28265,inst_28261);
var inst_28267 = cljs.core.pr_str.call(null,inst_28266);
var inst_28268 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28267)].join('');
var inst_28269 = figwheel.client.utils.log.call(null,inst_28268);
var state_28286__$1 = state_28286;
var statearr_28318_28395 = state_28286__$1;
(statearr_28318_28395[(2)] = inst_28269);

(statearr_28318_28395[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (43))){
var inst_28262 = (state_28286[(21)]);
var inst_28272 = (state_28286[(2)]);
var inst_28273 = cljs.core.not_empty.call(null,inst_28262);
var state_28286__$1 = (function (){var statearr_28319 = state_28286;
(statearr_28319[(27)] = inst_28272);

return statearr_28319;
})();
if(cljs.core.truth_(inst_28273)){
var statearr_28320_28396 = state_28286__$1;
(statearr_28320_28396[(1)] = (44));

} else {
var statearr_28321_28397 = state_28286__$1;
(statearr_28321_28397[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (29))){
var inst_28207 = (state_28286[(23)]);
var inst_28239 = (state_28286[(16)]);
var inst_28199 = (state_28286[(19)]);
var inst_28202 = (state_28286[(24)]);
var inst_28205 = (state_28286[(26)]);
var inst_28203 = (state_28286[(25)]);
var inst_28235 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28238 = (function (){var all_files = inst_28199;
var res_SINGLEQUOTE_ = inst_28202;
var res = inst_28203;
var files_not_loaded = inst_28205;
var dependencies_that_loaded = inst_28207;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28207,inst_28239,inst_28199,inst_28202,inst_28205,inst_28203,inst_28235,state_val_28287,c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28237){
var map__28322 = p__28237;
var map__28322__$1 = (((((!((map__28322 == null))))?(((((map__28322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28322):map__28322);
var namespace = cljs.core.get.call(null,map__28322__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28207,inst_28239,inst_28199,inst_28202,inst_28205,inst_28203,inst_28235,state_val_28287,c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28239__$1 = cljs.core.group_by.call(null,inst_28238,inst_28205);
var inst_28241 = (inst_28239__$1 == null);
var inst_28242 = cljs.core.not.call(null,inst_28241);
var state_28286__$1 = (function (){var statearr_28324 = state_28286;
(statearr_28324[(16)] = inst_28239__$1);

(statearr_28324[(28)] = inst_28235);

return statearr_28324;
})();
if(inst_28242){
var statearr_28325_28398 = state_28286__$1;
(statearr_28325_28398[(1)] = (32));

} else {
var statearr_28326_28399 = state_28286__$1;
(statearr_28326_28399[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (44))){
var inst_28262 = (state_28286[(21)]);
var inst_28275 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28262);
var inst_28276 = cljs.core.pr_str.call(null,inst_28275);
var inst_28277 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28276)].join('');
var inst_28278 = figwheel.client.utils.log.call(null,inst_28277);
var state_28286__$1 = state_28286;
var statearr_28327_28400 = state_28286__$1;
(statearr_28327_28400[(2)] = inst_28278);

(statearr_28327_28400[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (6))){
var inst_28180 = (state_28286[(2)]);
var state_28286__$1 = state_28286;
var statearr_28328_28401 = state_28286__$1;
(statearr_28328_28401[(2)] = inst_28180);

(statearr_28328_28401[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (28))){
var inst_28205 = (state_28286[(26)]);
var inst_28232 = (state_28286[(2)]);
var inst_28233 = cljs.core.not_empty.call(null,inst_28205);
var state_28286__$1 = (function (){var statearr_28329 = state_28286;
(statearr_28329[(29)] = inst_28232);

return statearr_28329;
})();
if(cljs.core.truth_(inst_28233)){
var statearr_28330_28402 = state_28286__$1;
(statearr_28330_28402[(1)] = (29));

} else {
var statearr_28331_28403 = state_28286__$1;
(statearr_28331_28403[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (25))){
var inst_28203 = (state_28286[(25)]);
var inst_28219 = (state_28286[(2)]);
var inst_28220 = cljs.core.not_empty.call(null,inst_28203);
var state_28286__$1 = (function (){var statearr_28332 = state_28286;
(statearr_28332[(30)] = inst_28219);

return statearr_28332;
})();
if(cljs.core.truth_(inst_28220)){
var statearr_28333_28404 = state_28286__$1;
(statearr_28333_28404[(1)] = (26));

} else {
var statearr_28334_28405 = state_28286__$1;
(statearr_28334_28405[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (34))){
var inst_28255 = (state_28286[(2)]);
var state_28286__$1 = state_28286;
if(cljs.core.truth_(inst_28255)){
var statearr_28335_28406 = state_28286__$1;
(statearr_28335_28406[(1)] = (38));

} else {
var statearr_28336_28407 = state_28286__$1;
(statearr_28336_28407[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (17))){
var state_28286__$1 = state_28286;
var statearr_28337_28408 = state_28286__$1;
(statearr_28337_28408[(2)] = recompile_dependents);

(statearr_28337_28408[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (3))){
var state_28286__$1 = state_28286;
var statearr_28338_28409 = state_28286__$1;
(statearr_28338_28409[(2)] = null);

(statearr_28338_28409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (12))){
var inst_28176 = (state_28286[(2)]);
var state_28286__$1 = state_28286;
var statearr_28339_28410 = state_28286__$1;
(statearr_28339_28410[(2)] = inst_28176);

(statearr_28339_28410[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (2))){
var inst_28138 = (state_28286[(13)]);
var inst_28145 = cljs.core.seq.call(null,inst_28138);
var inst_28146 = inst_28145;
var inst_28147 = null;
var inst_28148 = (0);
var inst_28149 = (0);
var state_28286__$1 = (function (){var statearr_28340 = state_28286;
(statearr_28340[(7)] = inst_28147);

(statearr_28340[(8)] = inst_28148);

(statearr_28340[(9)] = inst_28149);

(statearr_28340[(10)] = inst_28146);

return statearr_28340;
})();
var statearr_28341_28411 = state_28286__$1;
(statearr_28341_28411[(2)] = null);

(statearr_28341_28411[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (23))){
var inst_28207 = (state_28286[(23)]);
var inst_28199 = (state_28286[(19)]);
var inst_28202 = (state_28286[(24)]);
var inst_28205 = (state_28286[(26)]);
var inst_28203 = (state_28286[(25)]);
var inst_28210 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28212 = (function (){var all_files = inst_28199;
var res_SINGLEQUOTE_ = inst_28202;
var res = inst_28203;
var files_not_loaded = inst_28205;
var dependencies_that_loaded = inst_28207;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28207,inst_28199,inst_28202,inst_28205,inst_28203,inst_28210,state_val_28287,c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28211){
var map__28342 = p__28211;
var map__28342__$1 = (((((!((map__28342 == null))))?(((((map__28342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28342):map__28342);
var request_url = cljs.core.get.call(null,map__28342__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28207,inst_28199,inst_28202,inst_28205,inst_28203,inst_28210,state_val_28287,c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28213 = cljs.core.reverse.call(null,inst_28207);
var inst_28214 = cljs.core.map.call(null,inst_28212,inst_28213);
var inst_28215 = cljs.core.pr_str.call(null,inst_28214);
var inst_28216 = figwheel.client.utils.log.call(null,inst_28215);
var state_28286__$1 = (function (){var statearr_28344 = state_28286;
(statearr_28344[(31)] = inst_28210);

return statearr_28344;
})();
var statearr_28345_28412 = state_28286__$1;
(statearr_28345_28412[(2)] = inst_28216);

(statearr_28345_28412[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (35))){
var state_28286__$1 = state_28286;
var statearr_28346_28413 = state_28286__$1;
(statearr_28346_28413[(2)] = true);

(statearr_28346_28413[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (19))){
var inst_28189 = (state_28286[(12)]);
var inst_28195 = figwheel.client.file_reloading.expand_files.call(null,inst_28189);
var state_28286__$1 = state_28286;
var statearr_28347_28414 = state_28286__$1;
(statearr_28347_28414[(2)] = inst_28195);

(statearr_28347_28414[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (11))){
var state_28286__$1 = state_28286;
var statearr_28348_28415 = state_28286__$1;
(statearr_28348_28415[(2)] = null);

(statearr_28348_28415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (9))){
var inst_28178 = (state_28286[(2)]);
var state_28286__$1 = state_28286;
var statearr_28349_28416 = state_28286__$1;
(statearr_28349_28416[(2)] = inst_28178);

(statearr_28349_28416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (5))){
var inst_28148 = (state_28286[(8)]);
var inst_28149 = (state_28286[(9)]);
var inst_28151 = (inst_28149 < inst_28148);
var inst_28152 = inst_28151;
var state_28286__$1 = state_28286;
if(cljs.core.truth_(inst_28152)){
var statearr_28350_28417 = state_28286__$1;
(statearr_28350_28417[(1)] = (7));

} else {
var statearr_28351_28418 = state_28286__$1;
(statearr_28351_28418[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (14))){
var inst_28159 = (state_28286[(22)]);
var inst_28168 = cljs.core.first.call(null,inst_28159);
var inst_28169 = figwheel.client.file_reloading.eval_body.call(null,inst_28168,opts);
var inst_28170 = cljs.core.next.call(null,inst_28159);
var inst_28146 = inst_28170;
var inst_28147 = null;
var inst_28148 = (0);
var inst_28149 = (0);
var state_28286__$1 = (function (){var statearr_28352 = state_28286;
(statearr_28352[(7)] = inst_28147);

(statearr_28352[(8)] = inst_28148);

(statearr_28352[(9)] = inst_28149);

(statearr_28352[(10)] = inst_28146);

(statearr_28352[(32)] = inst_28169);

return statearr_28352;
})();
var statearr_28353_28419 = state_28286__$1;
(statearr_28353_28419[(2)] = null);

(statearr_28353_28419[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (45))){
var state_28286__$1 = state_28286;
var statearr_28354_28420 = state_28286__$1;
(statearr_28354_28420[(2)] = null);

(statearr_28354_28420[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (26))){
var inst_28207 = (state_28286[(23)]);
var inst_28199 = (state_28286[(19)]);
var inst_28202 = (state_28286[(24)]);
var inst_28205 = (state_28286[(26)]);
var inst_28203 = (state_28286[(25)]);
var inst_28222 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28224 = (function (){var all_files = inst_28199;
var res_SINGLEQUOTE_ = inst_28202;
var res = inst_28203;
var files_not_loaded = inst_28205;
var dependencies_that_loaded = inst_28207;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28207,inst_28199,inst_28202,inst_28205,inst_28203,inst_28222,state_val_28287,c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28223){
var map__28355 = p__28223;
var map__28355__$1 = (((((!((map__28355 == null))))?(((((map__28355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28355):map__28355);
var namespace = cljs.core.get.call(null,map__28355__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28355__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28207,inst_28199,inst_28202,inst_28205,inst_28203,inst_28222,state_val_28287,c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28225 = cljs.core.map.call(null,inst_28224,inst_28203);
var inst_28226 = cljs.core.pr_str.call(null,inst_28225);
var inst_28227 = figwheel.client.utils.log.call(null,inst_28226);
var inst_28228 = (function (){var all_files = inst_28199;
var res_SINGLEQUOTE_ = inst_28202;
var res = inst_28203;
var files_not_loaded = inst_28205;
var dependencies_that_loaded = inst_28207;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28207,inst_28199,inst_28202,inst_28205,inst_28203,inst_28222,inst_28224,inst_28225,inst_28226,inst_28227,state_val_28287,c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28207,inst_28199,inst_28202,inst_28205,inst_28203,inst_28222,inst_28224,inst_28225,inst_28226,inst_28227,state_val_28287,c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28229 = setTimeout(inst_28228,(10));
var state_28286__$1 = (function (){var statearr_28357 = state_28286;
(statearr_28357[(33)] = inst_28222);

(statearr_28357[(34)] = inst_28227);

return statearr_28357;
})();
var statearr_28358_28421 = state_28286__$1;
(statearr_28358_28421[(2)] = inst_28229);

(statearr_28358_28421[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (16))){
var state_28286__$1 = state_28286;
var statearr_28359_28422 = state_28286__$1;
(statearr_28359_28422[(2)] = reload_dependents);

(statearr_28359_28422[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (38))){
var inst_28239 = (state_28286[(16)]);
var inst_28257 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28239);
var state_28286__$1 = state_28286;
var statearr_28360_28423 = state_28286__$1;
(statearr_28360_28423[(2)] = inst_28257);

(statearr_28360_28423[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (30))){
var state_28286__$1 = state_28286;
var statearr_28361_28424 = state_28286__$1;
(statearr_28361_28424[(2)] = null);

(statearr_28361_28424[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (10))){
var inst_28159 = (state_28286[(22)]);
var inst_28161 = cljs.core.chunked_seq_QMARK_.call(null,inst_28159);
var state_28286__$1 = state_28286;
if(inst_28161){
var statearr_28362_28425 = state_28286__$1;
(statearr_28362_28425[(1)] = (13));

} else {
var statearr_28363_28426 = state_28286__$1;
(statearr_28363_28426[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (18))){
var inst_28193 = (state_28286[(2)]);
var state_28286__$1 = state_28286;
if(cljs.core.truth_(inst_28193)){
var statearr_28364_28427 = state_28286__$1;
(statearr_28364_28427[(1)] = (19));

} else {
var statearr_28365_28428 = state_28286__$1;
(statearr_28365_28428[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (42))){
var state_28286__$1 = state_28286;
var statearr_28366_28429 = state_28286__$1;
(statearr_28366_28429[(2)] = null);

(statearr_28366_28429[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (37))){
var inst_28252 = (state_28286[(2)]);
var state_28286__$1 = state_28286;
var statearr_28367_28430 = state_28286__$1;
(statearr_28367_28430[(2)] = inst_28252);

(statearr_28367_28430[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28287 === (8))){
var inst_28146 = (state_28286[(10)]);
var inst_28159 = (state_28286[(22)]);
var inst_28159__$1 = cljs.core.seq.call(null,inst_28146);
var state_28286__$1 = (function (){var statearr_28368 = state_28286;
(statearr_28368[(22)] = inst_28159__$1);

return statearr_28368;
})();
if(inst_28159__$1){
var statearr_28369_28431 = state_28286__$1;
(statearr_28369_28431[(1)] = (10));

} else {
var statearr_28370_28432 = state_28286__$1;
(statearr_28370_28432[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25685__auto__,c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25686__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25686__auto____0 = (function (){
var statearr_28371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28371[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25686__auto__);

(statearr_28371[(1)] = (1));

return statearr_28371;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25686__auto____1 = (function (state_28286){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_28286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e28372){if((e28372 instanceof Object)){
var ex__25689__auto__ = e28372;
var statearr_28373_28433 = state_28286;
(statearr_28373_28433[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28434 = state_28286;
state_28286 = G__28434;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25686__auto__ = function(state_28286){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25686__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25686__auto____1.call(this,state_28286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25686__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25686__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25782__auto__ = (function (){var statearr_28374 = f__25781__auto__.call(null);
(statearr_28374[(6)] = c__25780__auto__);

return statearr_28374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto__,map__28131,map__28131__$1,opts,before_jsload,on_jsload,reload_dependents,map__28132,map__28132__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25780__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28437,link){
var map__28438 = p__28437;
var map__28438__$1 = (((((!((map__28438 == null))))?(((((map__28438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28438):map__28438);
var file = cljs.core.get.call(null,map__28438__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__28438,map__28438__$1,file){
return (function (p1__28435_SHARP_,p2__28436_SHARP_){
if(cljs.core._EQ_.call(null,p1__28435_SHARP_,p2__28436_SHARP_)){
return p1__28435_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__28438,map__28438__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28441){
var map__28442 = p__28441;
var map__28442__$1 = (((((!((map__28442 == null))))?(((((map__28442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28442):map__28442);
var match_length = cljs.core.get.call(null,map__28442__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28442__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28440_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28440_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28444_SHARP_,p2__28445_SHARP_){
return cljs.core.assoc.call(null,p1__28444_SHARP_,cljs.core.get.call(null,p2__28445_SHARP_,key),p2__28445_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_28446 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28446);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28446);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28447,p__28448){
var map__28449 = p__28447;
var map__28449__$1 = (((((!((map__28449 == null))))?(((((map__28449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28449):map__28449);
var on_cssload = cljs.core.get.call(null,map__28449__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28450 = p__28448;
var map__28450__$1 = (((((!((map__28450 == null))))?(((((map__28450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28450):map__28450);
var files_msg = map__28450__$1;
var files = cljs.core.get.call(null,map__28450__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1542520741650
