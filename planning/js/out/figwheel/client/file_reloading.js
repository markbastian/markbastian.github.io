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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31422_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31422_SHARP_));
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
var seq__31423 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31424 = null;
var count__31425 = (0);
var i__31426 = (0);
while(true){
if((i__31426 < count__31425)){
var n = cljs.core._nth.call(null,chunk__31424,i__31426);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31427 = seq__31423;
var G__31428 = chunk__31424;
var G__31429 = count__31425;
var G__31430 = (i__31426 + (1));
seq__31423 = G__31427;
chunk__31424 = G__31428;
count__31425 = G__31429;
i__31426 = G__31430;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31423);
if(temp__5457__auto__){
var seq__31423__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31423__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__31423__$1);
var G__31431 = cljs.core.chunk_rest.call(null,seq__31423__$1);
var G__31432 = c__4461__auto__;
var G__31433 = cljs.core.count.call(null,c__4461__auto__);
var G__31434 = (0);
seq__31423 = G__31431;
chunk__31424 = G__31432;
count__31425 = G__31433;
i__31426 = G__31434;
continue;
} else {
var n = cljs.core.first.call(null,seq__31423__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31435 = cljs.core.next.call(null,seq__31423__$1);
var G__31436 = null;
var G__31437 = (0);
var G__31438 = (0);
seq__31423 = G__31435;
chunk__31424 = G__31436;
count__31425 = G__31437;
i__31426 = G__31438;
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
return cljs.core.some.call(null,(function (p__31439){
var vec__31440 = p__31439;
var _ = cljs.core.nth.call(null,vec__31440,(0),null);
var v = cljs.core.nth.call(null,vec__31440,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__31443){
var vec__31444 = p__31443;
var k = cljs.core.nth.call(null,vec__31444,(0),null);
var v = cljs.core.nth.call(null,vec__31444,(1),null);
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

var seq__31456_31464 = cljs.core.seq.call(null,deps);
var chunk__31457_31465 = null;
var count__31458_31466 = (0);
var i__31459_31467 = (0);
while(true){
if((i__31459_31467 < count__31458_31466)){
var dep_31468 = cljs.core._nth.call(null,chunk__31457_31465,i__31459_31467);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_31468;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31468));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31468,(depth + (1)),state);
} else {
}


var G__31469 = seq__31456_31464;
var G__31470 = chunk__31457_31465;
var G__31471 = count__31458_31466;
var G__31472 = (i__31459_31467 + (1));
seq__31456_31464 = G__31469;
chunk__31457_31465 = G__31470;
count__31458_31466 = G__31471;
i__31459_31467 = G__31472;
continue;
} else {
var temp__5457__auto___31473 = cljs.core.seq.call(null,seq__31456_31464);
if(temp__5457__auto___31473){
var seq__31456_31474__$1 = temp__5457__auto___31473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31456_31474__$1)){
var c__4461__auto___31475 = cljs.core.chunk_first.call(null,seq__31456_31474__$1);
var G__31476 = cljs.core.chunk_rest.call(null,seq__31456_31474__$1);
var G__31477 = c__4461__auto___31475;
var G__31478 = cljs.core.count.call(null,c__4461__auto___31475);
var G__31479 = (0);
seq__31456_31464 = G__31476;
chunk__31457_31465 = G__31477;
count__31458_31466 = G__31478;
i__31459_31467 = G__31479;
continue;
} else {
var dep_31480 = cljs.core.first.call(null,seq__31456_31474__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_31480;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31480));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31480,(depth + (1)),state);
} else {
}


var G__31481 = cljs.core.next.call(null,seq__31456_31474__$1);
var G__31482 = null;
var G__31483 = (0);
var G__31484 = (0);
seq__31456_31464 = G__31481;
chunk__31457_31465 = G__31482;
count__31458_31466 = G__31483;
i__31459_31467 = G__31484;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31460){
var vec__31461 = p__31460;
var seq__31462 = cljs.core.seq.call(null,vec__31461);
var first__31463 = cljs.core.first.call(null,seq__31462);
var seq__31462__$1 = cljs.core.next.call(null,seq__31462);
var x = first__31463;
var xs = seq__31462__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31461,seq__31462,first__31463,seq__31462__$1,x,xs,get_deps__$1){
return (function (p1__31447_SHARP_){
return clojure.set.difference.call(null,p1__31447_SHARP_,x);
});})(vec__31461,seq__31462,first__31463,seq__31462__$1,x,xs,get_deps__$1))
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
var seq__31485 = cljs.core.seq.call(null,provides);
var chunk__31486 = null;
var count__31487 = (0);
var i__31488 = (0);
while(true){
if((i__31488 < count__31487)){
var prov = cljs.core._nth.call(null,chunk__31486,i__31488);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31489_31497 = cljs.core.seq.call(null,requires);
var chunk__31490_31498 = null;
var count__31491_31499 = (0);
var i__31492_31500 = (0);
while(true){
if((i__31492_31500 < count__31491_31499)){
var req_31501 = cljs.core._nth.call(null,chunk__31490_31498,i__31492_31500);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31501,prov);


var G__31502 = seq__31489_31497;
var G__31503 = chunk__31490_31498;
var G__31504 = count__31491_31499;
var G__31505 = (i__31492_31500 + (1));
seq__31489_31497 = G__31502;
chunk__31490_31498 = G__31503;
count__31491_31499 = G__31504;
i__31492_31500 = G__31505;
continue;
} else {
var temp__5457__auto___31506 = cljs.core.seq.call(null,seq__31489_31497);
if(temp__5457__auto___31506){
var seq__31489_31507__$1 = temp__5457__auto___31506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31489_31507__$1)){
var c__4461__auto___31508 = cljs.core.chunk_first.call(null,seq__31489_31507__$1);
var G__31509 = cljs.core.chunk_rest.call(null,seq__31489_31507__$1);
var G__31510 = c__4461__auto___31508;
var G__31511 = cljs.core.count.call(null,c__4461__auto___31508);
var G__31512 = (0);
seq__31489_31497 = G__31509;
chunk__31490_31498 = G__31510;
count__31491_31499 = G__31511;
i__31492_31500 = G__31512;
continue;
} else {
var req_31513 = cljs.core.first.call(null,seq__31489_31507__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31513,prov);


var G__31514 = cljs.core.next.call(null,seq__31489_31507__$1);
var G__31515 = null;
var G__31516 = (0);
var G__31517 = (0);
seq__31489_31497 = G__31514;
chunk__31490_31498 = G__31515;
count__31491_31499 = G__31516;
i__31492_31500 = G__31517;
continue;
}
} else {
}
}
break;
}


var G__31518 = seq__31485;
var G__31519 = chunk__31486;
var G__31520 = count__31487;
var G__31521 = (i__31488 + (1));
seq__31485 = G__31518;
chunk__31486 = G__31519;
count__31487 = G__31520;
i__31488 = G__31521;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31485);
if(temp__5457__auto__){
var seq__31485__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31485__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__31485__$1);
var G__31522 = cljs.core.chunk_rest.call(null,seq__31485__$1);
var G__31523 = c__4461__auto__;
var G__31524 = cljs.core.count.call(null,c__4461__auto__);
var G__31525 = (0);
seq__31485 = G__31522;
chunk__31486 = G__31523;
count__31487 = G__31524;
i__31488 = G__31525;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31485__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31493_31526 = cljs.core.seq.call(null,requires);
var chunk__31494_31527 = null;
var count__31495_31528 = (0);
var i__31496_31529 = (0);
while(true){
if((i__31496_31529 < count__31495_31528)){
var req_31530 = cljs.core._nth.call(null,chunk__31494_31527,i__31496_31529);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31530,prov);


var G__31531 = seq__31493_31526;
var G__31532 = chunk__31494_31527;
var G__31533 = count__31495_31528;
var G__31534 = (i__31496_31529 + (1));
seq__31493_31526 = G__31531;
chunk__31494_31527 = G__31532;
count__31495_31528 = G__31533;
i__31496_31529 = G__31534;
continue;
} else {
var temp__5457__auto___31535__$1 = cljs.core.seq.call(null,seq__31493_31526);
if(temp__5457__auto___31535__$1){
var seq__31493_31536__$1 = temp__5457__auto___31535__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31493_31536__$1)){
var c__4461__auto___31537 = cljs.core.chunk_first.call(null,seq__31493_31536__$1);
var G__31538 = cljs.core.chunk_rest.call(null,seq__31493_31536__$1);
var G__31539 = c__4461__auto___31537;
var G__31540 = cljs.core.count.call(null,c__4461__auto___31537);
var G__31541 = (0);
seq__31493_31526 = G__31538;
chunk__31494_31527 = G__31539;
count__31495_31528 = G__31540;
i__31496_31529 = G__31541;
continue;
} else {
var req_31542 = cljs.core.first.call(null,seq__31493_31536__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31542,prov);


var G__31543 = cljs.core.next.call(null,seq__31493_31536__$1);
var G__31544 = null;
var G__31545 = (0);
var G__31546 = (0);
seq__31493_31526 = G__31543;
chunk__31494_31527 = G__31544;
count__31495_31528 = G__31545;
i__31496_31529 = G__31546;
continue;
}
} else {
}
}
break;
}


var G__31547 = cljs.core.next.call(null,seq__31485__$1);
var G__31548 = null;
var G__31549 = (0);
var G__31550 = (0);
seq__31485 = G__31547;
chunk__31486 = G__31548;
count__31487 = G__31549;
i__31488 = G__31550;
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
var seq__31551_31555 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31552_31556 = null;
var count__31553_31557 = (0);
var i__31554_31558 = (0);
while(true){
if((i__31554_31558 < count__31553_31557)){
var ns_31559 = cljs.core._nth.call(null,chunk__31552_31556,i__31554_31558);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31559);


var G__31560 = seq__31551_31555;
var G__31561 = chunk__31552_31556;
var G__31562 = count__31553_31557;
var G__31563 = (i__31554_31558 + (1));
seq__31551_31555 = G__31560;
chunk__31552_31556 = G__31561;
count__31553_31557 = G__31562;
i__31554_31558 = G__31563;
continue;
} else {
var temp__5457__auto___31564 = cljs.core.seq.call(null,seq__31551_31555);
if(temp__5457__auto___31564){
var seq__31551_31565__$1 = temp__5457__auto___31564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31551_31565__$1)){
var c__4461__auto___31566 = cljs.core.chunk_first.call(null,seq__31551_31565__$1);
var G__31567 = cljs.core.chunk_rest.call(null,seq__31551_31565__$1);
var G__31568 = c__4461__auto___31566;
var G__31569 = cljs.core.count.call(null,c__4461__auto___31566);
var G__31570 = (0);
seq__31551_31555 = G__31567;
chunk__31552_31556 = G__31568;
count__31553_31557 = G__31569;
i__31554_31558 = G__31570;
continue;
} else {
var ns_31571 = cljs.core.first.call(null,seq__31551_31565__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31571);


var G__31572 = cljs.core.next.call(null,seq__31551_31565__$1);
var G__31573 = null;
var G__31574 = (0);
var G__31575 = (0);
seq__31551_31555 = G__31572;
chunk__31552_31556 = G__31573;
count__31553_31557 = G__31574;
i__31554_31558 = G__31575;
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
var G__31576__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31577__i = 0, G__31577__a = new Array(arguments.length -  0);
while (G__31577__i < G__31577__a.length) {G__31577__a[G__31577__i] = arguments[G__31577__i + 0]; ++G__31577__i;}
  args = new cljs.core.IndexedSeq(G__31577__a,0,null);
} 
return G__31576__delegate.call(this,args);};
G__31576.cljs$lang$maxFixedArity = 0;
G__31576.cljs$lang$applyTo = (function (arglist__31578){
var args = cljs.core.seq(arglist__31578);
return G__31576__delegate(args);
});
G__31576.cljs$core$IFn$_invoke$arity$variadic = G__31576__delegate;
return G__31576;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__31579_SHARP_,p2__31580_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31579_SHARP_)),p2__31580_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__31581_SHARP_,p2__31582_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31581_SHARP_),p2__31582_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__31583 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__31583.addCallback(((function (G__31583){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__31583))
);

G__31583.addErrback(((function (G__31583){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__31583))
);

return G__31583;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31584){if((e31584 instanceof Error)){
var e = e31584;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31584;

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
}catch (e31585){if((e31585 instanceof Error)){
var e = e31585;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31585;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31586 = cljs.core._EQ_;
var expr__31587 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31586.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31587))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__31586.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31587))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__31586.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31587))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__31586,expr__31587){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31586,expr__31587))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31589,callback){
var map__31590 = p__31589;
var map__31590__$1 = (((((!((map__31590 == null))))?(((((map__31590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31590):map__31590);
var file_msg = map__31590__$1;
var request_url = cljs.core.get.call(null,map__31590__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__31590,map__31590__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31590,map__31590__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30672__auto__){
return (function (){
var f__30673__auto__ = (function (){var switch__30649__auto__ = ((function (c__30672__auto__){
return (function (state_31628){
var state_val_31629 = (state_31628[(1)]);
if((state_val_31629 === (7))){
var inst_31624 = (state_31628[(2)]);
var state_31628__$1 = state_31628;
var statearr_31630_31656 = state_31628__$1;
(statearr_31630_31656[(2)] = inst_31624);

(statearr_31630_31656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31629 === (1))){
var state_31628__$1 = state_31628;
var statearr_31631_31657 = state_31628__$1;
(statearr_31631_31657[(2)] = null);

(statearr_31631_31657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31629 === (4))){
var inst_31594 = (state_31628[(7)]);
var inst_31594__$1 = (state_31628[(2)]);
var state_31628__$1 = (function (){var statearr_31632 = state_31628;
(statearr_31632[(7)] = inst_31594__$1);

return statearr_31632;
})();
if(cljs.core.truth_(inst_31594__$1)){
var statearr_31633_31658 = state_31628__$1;
(statearr_31633_31658[(1)] = (5));

} else {
var statearr_31634_31659 = state_31628__$1;
(statearr_31634_31659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31629 === (15))){
var inst_31607 = (state_31628[(8)]);
var inst_31609 = (state_31628[(9)]);
var inst_31611 = inst_31609.call(null,inst_31607);
var state_31628__$1 = state_31628;
var statearr_31635_31660 = state_31628__$1;
(statearr_31635_31660[(2)] = inst_31611);

(statearr_31635_31660[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31629 === (13))){
var inst_31618 = (state_31628[(2)]);
var state_31628__$1 = state_31628;
var statearr_31636_31661 = state_31628__$1;
(statearr_31636_31661[(2)] = inst_31618);

(statearr_31636_31661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31629 === (6))){
var state_31628__$1 = state_31628;
var statearr_31637_31662 = state_31628__$1;
(statearr_31637_31662[(2)] = null);

(statearr_31637_31662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31629 === (17))){
var inst_31615 = (state_31628[(2)]);
var state_31628__$1 = state_31628;
var statearr_31638_31663 = state_31628__$1;
(statearr_31638_31663[(2)] = inst_31615);

(statearr_31638_31663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31629 === (3))){
var inst_31626 = (state_31628[(2)]);
var state_31628__$1 = state_31628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31628__$1,inst_31626);
} else {
if((state_val_31629 === (12))){
var state_31628__$1 = state_31628;
var statearr_31639_31664 = state_31628__$1;
(statearr_31639_31664[(2)] = null);

(statearr_31639_31664[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31629 === (2))){
var state_31628__$1 = state_31628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31628__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31629 === (11))){
var inst_31599 = (state_31628[(10)]);
var inst_31605 = figwheel.client.file_reloading.blocking_load.call(null,inst_31599);
var state_31628__$1 = state_31628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31628__$1,(14),inst_31605);
} else {
if((state_val_31629 === (9))){
var inst_31599 = (state_31628[(10)]);
var state_31628__$1 = state_31628;
if(cljs.core.truth_(inst_31599)){
var statearr_31640_31665 = state_31628__$1;
(statearr_31640_31665[(1)] = (11));

} else {
var statearr_31641_31666 = state_31628__$1;
(statearr_31641_31666[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31629 === (5))){
var inst_31594 = (state_31628[(7)]);
var inst_31600 = (state_31628[(11)]);
var inst_31599 = cljs.core.nth.call(null,inst_31594,(0),null);
var inst_31600__$1 = cljs.core.nth.call(null,inst_31594,(1),null);
var state_31628__$1 = (function (){var statearr_31642 = state_31628;
(statearr_31642[(10)] = inst_31599);

(statearr_31642[(11)] = inst_31600__$1);

return statearr_31642;
})();
if(cljs.core.truth_(inst_31600__$1)){
var statearr_31643_31667 = state_31628__$1;
(statearr_31643_31667[(1)] = (8));

} else {
var statearr_31644_31668 = state_31628__$1;
(statearr_31644_31668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31629 === (14))){
var inst_31599 = (state_31628[(10)]);
var inst_31609 = (state_31628[(9)]);
var inst_31607 = (state_31628[(2)]);
var inst_31608 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31609__$1 = cljs.core.get.call(null,inst_31608,inst_31599);
var state_31628__$1 = (function (){var statearr_31645 = state_31628;
(statearr_31645[(8)] = inst_31607);

(statearr_31645[(9)] = inst_31609__$1);

return statearr_31645;
})();
if(cljs.core.truth_(inst_31609__$1)){
var statearr_31646_31669 = state_31628__$1;
(statearr_31646_31669[(1)] = (15));

} else {
var statearr_31647_31670 = state_31628__$1;
(statearr_31647_31670[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31629 === (16))){
var inst_31607 = (state_31628[(8)]);
var inst_31613 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31607);
var state_31628__$1 = state_31628;
var statearr_31648_31671 = state_31628__$1;
(statearr_31648_31671[(2)] = inst_31613);

(statearr_31648_31671[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31629 === (10))){
var inst_31620 = (state_31628[(2)]);
var state_31628__$1 = (function (){var statearr_31649 = state_31628;
(statearr_31649[(12)] = inst_31620);

return statearr_31649;
})();
var statearr_31650_31672 = state_31628__$1;
(statearr_31650_31672[(2)] = null);

(statearr_31650_31672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31629 === (8))){
var inst_31600 = (state_31628[(11)]);
var inst_31602 = eval(inst_31600);
var state_31628__$1 = state_31628;
var statearr_31651_31673 = state_31628__$1;
(statearr_31651_31673[(2)] = inst_31602);

(statearr_31651_31673[(1)] = (10));


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
});})(c__30672__auto__))
;
return ((function (switch__30649__auto__,c__30672__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30650__auto__ = null;
var figwheel$client$file_reloading$state_machine__30650__auto____0 = (function (){
var statearr_31652 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31652[(0)] = figwheel$client$file_reloading$state_machine__30650__auto__);

(statearr_31652[(1)] = (1));

return statearr_31652;
});
var figwheel$client$file_reloading$state_machine__30650__auto____1 = (function (state_31628){
while(true){
var ret_value__30651__auto__ = (function (){try{while(true){
var result__30652__auto__ = switch__30649__auto__.call(null,state_31628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30652__auto__;
}
break;
}
}catch (e31653){if((e31653 instanceof Object)){
var ex__30653__auto__ = e31653;
var statearr_31654_31674 = state_31628;
(statearr_31654_31674[(5)] = ex__30653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31675 = state_31628;
state_31628 = G__31675;
continue;
} else {
return ret_value__30651__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30650__auto__ = function(state_31628){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30650__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30650__auto____1.call(this,state_31628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30650__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30650__auto____0;
figwheel$client$file_reloading$state_machine__30650__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30650__auto____1;
return figwheel$client$file_reloading$state_machine__30650__auto__;
})()
;})(switch__30649__auto__,c__30672__auto__))
})();
var state__30674__auto__ = (function (){var statearr_31655 = f__30673__auto__.call(null);
(statearr_31655[(6)] = c__30672__auto__);

return statearr_31655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30674__auto__);
});})(c__30672__auto__))
);

return c__30672__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__31677 = arguments.length;
switch (G__31677) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31679,callback){
var map__31680 = p__31679;
var map__31680__$1 = (((((!((map__31680 == null))))?(((((map__31680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31680):map__31680);
var file_msg = map__31680__$1;
var namespace = cljs.core.get.call(null,map__31680__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31680,map__31680__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31680,map__31680__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__31682){
var map__31683 = p__31682;
var map__31683__$1 = (((((!((map__31683 == null))))?(((((map__31683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31683):map__31683);
var file_msg = map__31683__$1;
var namespace = cljs.core.get.call(null,map__31683__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31685){
var map__31686 = p__31685;
var map__31686__$1 = (((((!((map__31686 == null))))?(((((map__31686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31686):map__31686);
var file_msg = map__31686__$1;
var namespace = cljs.core.get.call(null,map__31686__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31688,callback){
var map__31689 = p__31688;
var map__31689__$1 = (((((!((map__31689 == null))))?(((((map__31689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31689):map__31689);
var file_msg = map__31689__$1;
var request_url = cljs.core.get.call(null,map__31689__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31689__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30672__auto___31739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30672__auto___31739,out){
return (function (){
var f__30673__auto__ = (function (){var switch__30649__auto__ = ((function (c__30672__auto___31739,out){
return (function (state_31724){
var state_val_31725 = (state_31724[(1)]);
if((state_val_31725 === (1))){
var inst_31698 = cljs.core.seq.call(null,files);
var inst_31699 = cljs.core.first.call(null,inst_31698);
var inst_31700 = cljs.core.next.call(null,inst_31698);
var inst_31701 = files;
var state_31724__$1 = (function (){var statearr_31726 = state_31724;
(statearr_31726[(7)] = inst_31699);

(statearr_31726[(8)] = inst_31700);

(statearr_31726[(9)] = inst_31701);

return statearr_31726;
})();
var statearr_31727_31740 = state_31724__$1;
(statearr_31727_31740[(2)] = null);

(statearr_31727_31740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (2))){
var inst_31707 = (state_31724[(10)]);
var inst_31701 = (state_31724[(9)]);
var inst_31706 = cljs.core.seq.call(null,inst_31701);
var inst_31707__$1 = cljs.core.first.call(null,inst_31706);
var inst_31708 = cljs.core.next.call(null,inst_31706);
var inst_31709 = (inst_31707__$1 == null);
var inst_31710 = cljs.core.not.call(null,inst_31709);
var state_31724__$1 = (function (){var statearr_31728 = state_31724;
(statearr_31728[(10)] = inst_31707__$1);

(statearr_31728[(11)] = inst_31708);

return statearr_31728;
})();
if(inst_31710){
var statearr_31729_31741 = state_31724__$1;
(statearr_31729_31741[(1)] = (4));

} else {
var statearr_31730_31742 = state_31724__$1;
(statearr_31730_31742[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (3))){
var inst_31722 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31724__$1,inst_31722);
} else {
if((state_val_31725 === (4))){
var inst_31707 = (state_31724[(10)]);
var inst_31712 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31707);
var state_31724__$1 = state_31724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31724__$1,(7),inst_31712);
} else {
if((state_val_31725 === (5))){
var inst_31718 = cljs.core.async.close_BANG_.call(null,out);
var state_31724__$1 = state_31724;
var statearr_31731_31743 = state_31724__$1;
(statearr_31731_31743[(2)] = inst_31718);

(statearr_31731_31743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (6))){
var inst_31720 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
var statearr_31732_31744 = state_31724__$1;
(statearr_31732_31744[(2)] = inst_31720);

(statearr_31732_31744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (7))){
var inst_31708 = (state_31724[(11)]);
var inst_31714 = (state_31724[(2)]);
var inst_31715 = cljs.core.async.put_BANG_.call(null,out,inst_31714);
var inst_31701 = inst_31708;
var state_31724__$1 = (function (){var statearr_31733 = state_31724;
(statearr_31733[(12)] = inst_31715);

(statearr_31733[(9)] = inst_31701);

return statearr_31733;
})();
var statearr_31734_31745 = state_31724__$1;
(statearr_31734_31745[(2)] = null);

(statearr_31734_31745[(1)] = (2));


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
});})(c__30672__auto___31739,out))
;
return ((function (switch__30649__auto__,c__30672__auto___31739,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30650__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30650__auto____0 = (function (){
var statearr_31735 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31735[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30650__auto__);

(statearr_31735[(1)] = (1));

return statearr_31735;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30650__auto____1 = (function (state_31724){
while(true){
var ret_value__30651__auto__ = (function (){try{while(true){
var result__30652__auto__ = switch__30649__auto__.call(null,state_31724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30652__auto__;
}
break;
}
}catch (e31736){if((e31736 instanceof Object)){
var ex__30653__auto__ = e31736;
var statearr_31737_31746 = state_31724;
(statearr_31737_31746[(5)] = ex__30653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31747 = state_31724;
state_31724 = G__31747;
continue;
} else {
return ret_value__30651__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30650__auto__ = function(state_31724){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30650__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30650__auto____1.call(this,state_31724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30650__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30650__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30650__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30650__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30650__auto__;
})()
;})(switch__30649__auto__,c__30672__auto___31739,out))
})();
var state__30674__auto__ = (function (){var statearr_31738 = f__30673__auto__.call(null);
(statearr_31738[(6)] = c__30672__auto___31739);

return statearr_31738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30674__auto__);
});})(c__30672__auto___31739,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31748,opts){
var map__31749 = p__31748;
var map__31749__$1 = (((((!((map__31749 == null))))?(((((map__31749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31749):map__31749);
var eval_body = cljs.core.get.call(null,map__31749__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31749__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e31751){var e = e31751;
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
return (function (p1__31752_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31752_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__31753){
var vec__31754 = p__31753;
var k = cljs.core.nth.call(null,vec__31754,(0),null);
var v = cljs.core.nth.call(null,vec__31754,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31757){
var vec__31758 = p__31757;
var k = cljs.core.nth.call(null,vec__31758,(0),null);
var v = cljs.core.nth.call(null,vec__31758,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31764,p__31765){
var map__31766 = p__31764;
var map__31766__$1 = (((((!((map__31766 == null))))?(((((map__31766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31766):map__31766);
var opts = map__31766__$1;
var before_jsload = cljs.core.get.call(null,map__31766__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31766__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31766__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31767 = p__31765;
var map__31767__$1 = (((((!((map__31767 == null))))?(((((map__31767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31767):map__31767);
var msg = map__31767__$1;
var files = cljs.core.get.call(null,map__31767__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31767__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31767__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30673__auto__ = (function (){var switch__30649__auto__ = ((function (c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31921){
var state_val_31922 = (state_31921[(1)]);
if((state_val_31922 === (7))){
var inst_31782 = (state_31921[(7)]);
var inst_31784 = (state_31921[(8)]);
var inst_31781 = (state_31921[(9)]);
var inst_31783 = (state_31921[(10)]);
var inst_31789 = cljs.core._nth.call(null,inst_31782,inst_31784);
var inst_31790 = figwheel.client.file_reloading.eval_body.call(null,inst_31789,opts);
var inst_31791 = (inst_31784 + (1));
var tmp31923 = inst_31782;
var tmp31924 = inst_31781;
var tmp31925 = inst_31783;
var inst_31781__$1 = tmp31924;
var inst_31782__$1 = tmp31923;
var inst_31783__$1 = tmp31925;
var inst_31784__$1 = inst_31791;
var state_31921__$1 = (function (){var statearr_31926 = state_31921;
(statearr_31926[(7)] = inst_31782__$1);

(statearr_31926[(8)] = inst_31784__$1);

(statearr_31926[(9)] = inst_31781__$1);

(statearr_31926[(11)] = inst_31790);

(statearr_31926[(10)] = inst_31783__$1);

return statearr_31926;
})();
var statearr_31927_32010 = state_31921__$1;
(statearr_31927_32010[(2)] = null);

(statearr_31927_32010[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (20))){
var inst_31824 = (state_31921[(12)]);
var inst_31832 = figwheel.client.file_reloading.sort_files.call(null,inst_31824);
var state_31921__$1 = state_31921;
var statearr_31928_32011 = state_31921__$1;
(statearr_31928_32011[(2)] = inst_31832);

(statearr_31928_32011[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (27))){
var state_31921__$1 = state_31921;
var statearr_31929_32012 = state_31921__$1;
(statearr_31929_32012[(2)] = null);

(statearr_31929_32012[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (1))){
var inst_31773 = (state_31921[(13)]);
var inst_31770 = before_jsload.call(null,files);
var inst_31771 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31772 = (function (){return ((function (inst_31773,inst_31770,inst_31771,state_val_31922,c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31761_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31761_SHARP_);
});
;})(inst_31773,inst_31770,inst_31771,state_val_31922,c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31773__$1 = cljs.core.filter.call(null,inst_31772,files);
var inst_31774 = cljs.core.not_empty.call(null,inst_31773__$1);
var state_31921__$1 = (function (){var statearr_31930 = state_31921;
(statearr_31930[(14)] = inst_31770);

(statearr_31930[(13)] = inst_31773__$1);

(statearr_31930[(15)] = inst_31771);

return statearr_31930;
})();
if(cljs.core.truth_(inst_31774)){
var statearr_31931_32013 = state_31921__$1;
(statearr_31931_32013[(1)] = (2));

} else {
var statearr_31932_32014 = state_31921__$1;
(statearr_31932_32014[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (24))){
var state_31921__$1 = state_31921;
var statearr_31933_32015 = state_31921__$1;
(statearr_31933_32015[(2)] = null);

(statearr_31933_32015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (39))){
var inst_31874 = (state_31921[(16)]);
var state_31921__$1 = state_31921;
var statearr_31934_32016 = state_31921__$1;
(statearr_31934_32016[(2)] = inst_31874);

(statearr_31934_32016[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (46))){
var inst_31916 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_31935_32017 = state_31921__$1;
(statearr_31935_32017[(2)] = inst_31916);

(statearr_31935_32017[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (4))){
var inst_31818 = (state_31921[(2)]);
var inst_31819 = cljs.core.List.EMPTY;
var inst_31820 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31819);
var inst_31821 = (function (){return ((function (inst_31818,inst_31819,inst_31820,state_val_31922,c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31762_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31762_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31762_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__31762_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_31818,inst_31819,inst_31820,state_val_31922,c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31822 = cljs.core.filter.call(null,inst_31821,files);
var inst_31823 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31824 = cljs.core.concat.call(null,inst_31822,inst_31823);
var state_31921__$1 = (function (){var statearr_31936 = state_31921;
(statearr_31936[(12)] = inst_31824);

(statearr_31936[(17)] = inst_31820);

(statearr_31936[(18)] = inst_31818);

return statearr_31936;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31937_32018 = state_31921__$1;
(statearr_31937_32018[(1)] = (16));

} else {
var statearr_31938_32019 = state_31921__$1;
(statearr_31938_32019[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (15))){
var inst_31808 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_31939_32020 = state_31921__$1;
(statearr_31939_32020[(2)] = inst_31808);

(statearr_31939_32020[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (21))){
var inst_31834 = (state_31921[(19)]);
var inst_31834__$1 = (state_31921[(2)]);
var inst_31835 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31834__$1);
var state_31921__$1 = (function (){var statearr_31940 = state_31921;
(statearr_31940[(19)] = inst_31834__$1);

return statearr_31940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31921__$1,(22),inst_31835);
} else {
if((state_val_31922 === (31))){
var inst_31919 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31921__$1,inst_31919);
} else {
if((state_val_31922 === (32))){
var inst_31874 = (state_31921[(16)]);
var inst_31879 = inst_31874.cljs$lang$protocol_mask$partition0$;
var inst_31880 = (inst_31879 & (64));
var inst_31881 = inst_31874.cljs$core$ISeq$;
var inst_31882 = (cljs.core.PROTOCOL_SENTINEL === inst_31881);
var inst_31883 = ((inst_31880) || (inst_31882));
var state_31921__$1 = state_31921;
if(cljs.core.truth_(inst_31883)){
var statearr_31941_32021 = state_31921__$1;
(statearr_31941_32021[(1)] = (35));

} else {
var statearr_31942_32022 = state_31921__$1;
(statearr_31942_32022[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (40))){
var inst_31896 = (state_31921[(20)]);
var inst_31895 = (state_31921[(2)]);
var inst_31896__$1 = cljs.core.get.call(null,inst_31895,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31897 = cljs.core.get.call(null,inst_31895,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31898 = cljs.core.not_empty.call(null,inst_31896__$1);
var state_31921__$1 = (function (){var statearr_31943 = state_31921;
(statearr_31943[(21)] = inst_31897);

(statearr_31943[(20)] = inst_31896__$1);

return statearr_31943;
})();
if(cljs.core.truth_(inst_31898)){
var statearr_31944_32023 = state_31921__$1;
(statearr_31944_32023[(1)] = (41));

} else {
var statearr_31945_32024 = state_31921__$1;
(statearr_31945_32024[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (33))){
var state_31921__$1 = state_31921;
var statearr_31946_32025 = state_31921__$1;
(statearr_31946_32025[(2)] = false);

(statearr_31946_32025[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (13))){
var inst_31794 = (state_31921[(22)]);
var inst_31798 = cljs.core.chunk_first.call(null,inst_31794);
var inst_31799 = cljs.core.chunk_rest.call(null,inst_31794);
var inst_31800 = cljs.core.count.call(null,inst_31798);
var inst_31781 = inst_31799;
var inst_31782 = inst_31798;
var inst_31783 = inst_31800;
var inst_31784 = (0);
var state_31921__$1 = (function (){var statearr_31947 = state_31921;
(statearr_31947[(7)] = inst_31782);

(statearr_31947[(8)] = inst_31784);

(statearr_31947[(9)] = inst_31781);

(statearr_31947[(10)] = inst_31783);

return statearr_31947;
})();
var statearr_31948_32026 = state_31921__$1;
(statearr_31948_32026[(2)] = null);

(statearr_31948_32026[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (22))){
var inst_31834 = (state_31921[(19)]);
var inst_31842 = (state_31921[(23)]);
var inst_31838 = (state_31921[(24)]);
var inst_31837 = (state_31921[(25)]);
var inst_31837__$1 = (state_31921[(2)]);
var inst_31838__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31837__$1);
var inst_31839 = (function (){var all_files = inst_31834;
var res_SINGLEQUOTE_ = inst_31837__$1;
var res = inst_31838__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31834,inst_31842,inst_31838,inst_31837,inst_31837__$1,inst_31838__$1,state_val_31922,c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31763_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31763_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31834,inst_31842,inst_31838,inst_31837,inst_31837__$1,inst_31838__$1,state_val_31922,c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31840 = cljs.core.filter.call(null,inst_31839,inst_31837__$1);
var inst_31841 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31842__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31841);
var inst_31843 = cljs.core.not_empty.call(null,inst_31842__$1);
var state_31921__$1 = (function (){var statearr_31949 = state_31921;
(statearr_31949[(23)] = inst_31842__$1);

(statearr_31949[(24)] = inst_31838__$1);

(statearr_31949[(26)] = inst_31840);

(statearr_31949[(25)] = inst_31837__$1);

return statearr_31949;
})();
if(cljs.core.truth_(inst_31843)){
var statearr_31950_32027 = state_31921__$1;
(statearr_31950_32027[(1)] = (23));

} else {
var statearr_31951_32028 = state_31921__$1;
(statearr_31951_32028[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (36))){
var state_31921__$1 = state_31921;
var statearr_31952_32029 = state_31921__$1;
(statearr_31952_32029[(2)] = false);

(statearr_31952_32029[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (41))){
var inst_31896 = (state_31921[(20)]);
var inst_31900 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31901 = cljs.core.map.call(null,inst_31900,inst_31896);
var inst_31902 = cljs.core.pr_str.call(null,inst_31901);
var inst_31903 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31902)].join('');
var inst_31904 = figwheel.client.utils.log.call(null,inst_31903);
var state_31921__$1 = state_31921;
var statearr_31953_32030 = state_31921__$1;
(statearr_31953_32030[(2)] = inst_31904);

(statearr_31953_32030[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (43))){
var inst_31897 = (state_31921[(21)]);
var inst_31907 = (state_31921[(2)]);
var inst_31908 = cljs.core.not_empty.call(null,inst_31897);
var state_31921__$1 = (function (){var statearr_31954 = state_31921;
(statearr_31954[(27)] = inst_31907);

return statearr_31954;
})();
if(cljs.core.truth_(inst_31908)){
var statearr_31955_32031 = state_31921__$1;
(statearr_31955_32031[(1)] = (44));

} else {
var statearr_31956_32032 = state_31921__$1;
(statearr_31956_32032[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (29))){
var inst_31834 = (state_31921[(19)]);
var inst_31842 = (state_31921[(23)]);
var inst_31838 = (state_31921[(24)]);
var inst_31840 = (state_31921[(26)]);
var inst_31874 = (state_31921[(16)]);
var inst_31837 = (state_31921[(25)]);
var inst_31870 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31873 = (function (){var all_files = inst_31834;
var res_SINGLEQUOTE_ = inst_31837;
var res = inst_31838;
var files_not_loaded = inst_31840;
var dependencies_that_loaded = inst_31842;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31834,inst_31842,inst_31838,inst_31840,inst_31874,inst_31837,inst_31870,state_val_31922,c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31872){
var map__31957 = p__31872;
var map__31957__$1 = (((((!((map__31957 == null))))?(((((map__31957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31957):map__31957);
var namespace = cljs.core.get.call(null,map__31957__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31834,inst_31842,inst_31838,inst_31840,inst_31874,inst_31837,inst_31870,state_val_31922,c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31874__$1 = cljs.core.group_by.call(null,inst_31873,inst_31840);
var inst_31876 = (inst_31874__$1 == null);
var inst_31877 = cljs.core.not.call(null,inst_31876);
var state_31921__$1 = (function (){var statearr_31959 = state_31921;
(statearr_31959[(28)] = inst_31870);

(statearr_31959[(16)] = inst_31874__$1);

return statearr_31959;
})();
if(inst_31877){
var statearr_31960_32033 = state_31921__$1;
(statearr_31960_32033[(1)] = (32));

} else {
var statearr_31961_32034 = state_31921__$1;
(statearr_31961_32034[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (44))){
var inst_31897 = (state_31921[(21)]);
var inst_31910 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31897);
var inst_31911 = cljs.core.pr_str.call(null,inst_31910);
var inst_31912 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31911)].join('');
var inst_31913 = figwheel.client.utils.log.call(null,inst_31912);
var state_31921__$1 = state_31921;
var statearr_31962_32035 = state_31921__$1;
(statearr_31962_32035[(2)] = inst_31913);

(statearr_31962_32035[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (6))){
var inst_31815 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_31963_32036 = state_31921__$1;
(statearr_31963_32036[(2)] = inst_31815);

(statearr_31963_32036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (28))){
var inst_31840 = (state_31921[(26)]);
var inst_31867 = (state_31921[(2)]);
var inst_31868 = cljs.core.not_empty.call(null,inst_31840);
var state_31921__$1 = (function (){var statearr_31964 = state_31921;
(statearr_31964[(29)] = inst_31867);

return statearr_31964;
})();
if(cljs.core.truth_(inst_31868)){
var statearr_31965_32037 = state_31921__$1;
(statearr_31965_32037[(1)] = (29));

} else {
var statearr_31966_32038 = state_31921__$1;
(statearr_31966_32038[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (25))){
var inst_31838 = (state_31921[(24)]);
var inst_31854 = (state_31921[(2)]);
var inst_31855 = cljs.core.not_empty.call(null,inst_31838);
var state_31921__$1 = (function (){var statearr_31967 = state_31921;
(statearr_31967[(30)] = inst_31854);

return statearr_31967;
})();
if(cljs.core.truth_(inst_31855)){
var statearr_31968_32039 = state_31921__$1;
(statearr_31968_32039[(1)] = (26));

} else {
var statearr_31969_32040 = state_31921__$1;
(statearr_31969_32040[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (34))){
var inst_31890 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
if(cljs.core.truth_(inst_31890)){
var statearr_31970_32041 = state_31921__$1;
(statearr_31970_32041[(1)] = (38));

} else {
var statearr_31971_32042 = state_31921__$1;
(statearr_31971_32042[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (17))){
var state_31921__$1 = state_31921;
var statearr_31972_32043 = state_31921__$1;
(statearr_31972_32043[(2)] = recompile_dependents);

(statearr_31972_32043[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (3))){
var state_31921__$1 = state_31921;
var statearr_31973_32044 = state_31921__$1;
(statearr_31973_32044[(2)] = null);

(statearr_31973_32044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (12))){
var inst_31811 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_31974_32045 = state_31921__$1;
(statearr_31974_32045[(2)] = inst_31811);

(statearr_31974_32045[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (2))){
var inst_31773 = (state_31921[(13)]);
var inst_31780 = cljs.core.seq.call(null,inst_31773);
var inst_31781 = inst_31780;
var inst_31782 = null;
var inst_31783 = (0);
var inst_31784 = (0);
var state_31921__$1 = (function (){var statearr_31975 = state_31921;
(statearr_31975[(7)] = inst_31782);

(statearr_31975[(8)] = inst_31784);

(statearr_31975[(9)] = inst_31781);

(statearr_31975[(10)] = inst_31783);

return statearr_31975;
})();
var statearr_31976_32046 = state_31921__$1;
(statearr_31976_32046[(2)] = null);

(statearr_31976_32046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (23))){
var inst_31834 = (state_31921[(19)]);
var inst_31842 = (state_31921[(23)]);
var inst_31838 = (state_31921[(24)]);
var inst_31840 = (state_31921[(26)]);
var inst_31837 = (state_31921[(25)]);
var inst_31845 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31847 = (function (){var all_files = inst_31834;
var res_SINGLEQUOTE_ = inst_31837;
var res = inst_31838;
var files_not_loaded = inst_31840;
var dependencies_that_loaded = inst_31842;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31834,inst_31842,inst_31838,inst_31840,inst_31837,inst_31845,state_val_31922,c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31846){
var map__31977 = p__31846;
var map__31977__$1 = (((((!((map__31977 == null))))?(((((map__31977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31977):map__31977);
var request_url = cljs.core.get.call(null,map__31977__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31834,inst_31842,inst_31838,inst_31840,inst_31837,inst_31845,state_val_31922,c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31848 = cljs.core.reverse.call(null,inst_31842);
var inst_31849 = cljs.core.map.call(null,inst_31847,inst_31848);
var inst_31850 = cljs.core.pr_str.call(null,inst_31849);
var inst_31851 = figwheel.client.utils.log.call(null,inst_31850);
var state_31921__$1 = (function (){var statearr_31979 = state_31921;
(statearr_31979[(31)] = inst_31845);

return statearr_31979;
})();
var statearr_31980_32047 = state_31921__$1;
(statearr_31980_32047[(2)] = inst_31851);

(statearr_31980_32047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (35))){
var state_31921__$1 = state_31921;
var statearr_31981_32048 = state_31921__$1;
(statearr_31981_32048[(2)] = true);

(statearr_31981_32048[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (19))){
var inst_31824 = (state_31921[(12)]);
var inst_31830 = figwheel.client.file_reloading.expand_files.call(null,inst_31824);
var state_31921__$1 = state_31921;
var statearr_31982_32049 = state_31921__$1;
(statearr_31982_32049[(2)] = inst_31830);

(statearr_31982_32049[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (11))){
var state_31921__$1 = state_31921;
var statearr_31983_32050 = state_31921__$1;
(statearr_31983_32050[(2)] = null);

(statearr_31983_32050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (9))){
var inst_31813 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_31984_32051 = state_31921__$1;
(statearr_31984_32051[(2)] = inst_31813);

(statearr_31984_32051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (5))){
var inst_31784 = (state_31921[(8)]);
var inst_31783 = (state_31921[(10)]);
var inst_31786 = (inst_31784 < inst_31783);
var inst_31787 = inst_31786;
var state_31921__$1 = state_31921;
if(cljs.core.truth_(inst_31787)){
var statearr_31985_32052 = state_31921__$1;
(statearr_31985_32052[(1)] = (7));

} else {
var statearr_31986_32053 = state_31921__$1;
(statearr_31986_32053[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (14))){
var inst_31794 = (state_31921[(22)]);
var inst_31803 = cljs.core.first.call(null,inst_31794);
var inst_31804 = figwheel.client.file_reloading.eval_body.call(null,inst_31803,opts);
var inst_31805 = cljs.core.next.call(null,inst_31794);
var inst_31781 = inst_31805;
var inst_31782 = null;
var inst_31783 = (0);
var inst_31784 = (0);
var state_31921__$1 = (function (){var statearr_31987 = state_31921;
(statearr_31987[(7)] = inst_31782);

(statearr_31987[(32)] = inst_31804);

(statearr_31987[(8)] = inst_31784);

(statearr_31987[(9)] = inst_31781);

(statearr_31987[(10)] = inst_31783);

return statearr_31987;
})();
var statearr_31988_32054 = state_31921__$1;
(statearr_31988_32054[(2)] = null);

(statearr_31988_32054[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (45))){
var state_31921__$1 = state_31921;
var statearr_31989_32055 = state_31921__$1;
(statearr_31989_32055[(2)] = null);

(statearr_31989_32055[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (26))){
var inst_31834 = (state_31921[(19)]);
var inst_31842 = (state_31921[(23)]);
var inst_31838 = (state_31921[(24)]);
var inst_31840 = (state_31921[(26)]);
var inst_31837 = (state_31921[(25)]);
var inst_31857 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31859 = (function (){var all_files = inst_31834;
var res_SINGLEQUOTE_ = inst_31837;
var res = inst_31838;
var files_not_loaded = inst_31840;
var dependencies_that_loaded = inst_31842;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31834,inst_31842,inst_31838,inst_31840,inst_31837,inst_31857,state_val_31922,c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31858){
var map__31990 = p__31858;
var map__31990__$1 = (((((!((map__31990 == null))))?(((((map__31990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31990):map__31990);
var namespace = cljs.core.get.call(null,map__31990__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31990__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31834,inst_31842,inst_31838,inst_31840,inst_31837,inst_31857,state_val_31922,c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31860 = cljs.core.map.call(null,inst_31859,inst_31838);
var inst_31861 = cljs.core.pr_str.call(null,inst_31860);
var inst_31862 = figwheel.client.utils.log.call(null,inst_31861);
var inst_31863 = (function (){var all_files = inst_31834;
var res_SINGLEQUOTE_ = inst_31837;
var res = inst_31838;
var files_not_loaded = inst_31840;
var dependencies_that_loaded = inst_31842;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31834,inst_31842,inst_31838,inst_31840,inst_31837,inst_31857,inst_31859,inst_31860,inst_31861,inst_31862,state_val_31922,c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31834,inst_31842,inst_31838,inst_31840,inst_31837,inst_31857,inst_31859,inst_31860,inst_31861,inst_31862,state_val_31922,c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31864 = setTimeout(inst_31863,(10));
var state_31921__$1 = (function (){var statearr_31992 = state_31921;
(statearr_31992[(33)] = inst_31862);

(statearr_31992[(34)] = inst_31857);

return statearr_31992;
})();
var statearr_31993_32056 = state_31921__$1;
(statearr_31993_32056[(2)] = inst_31864);

(statearr_31993_32056[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (16))){
var state_31921__$1 = state_31921;
var statearr_31994_32057 = state_31921__$1;
(statearr_31994_32057[(2)] = reload_dependents);

(statearr_31994_32057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (38))){
var inst_31874 = (state_31921[(16)]);
var inst_31892 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31874);
var state_31921__$1 = state_31921;
var statearr_31995_32058 = state_31921__$1;
(statearr_31995_32058[(2)] = inst_31892);

(statearr_31995_32058[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (30))){
var state_31921__$1 = state_31921;
var statearr_31996_32059 = state_31921__$1;
(statearr_31996_32059[(2)] = null);

(statearr_31996_32059[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (10))){
var inst_31794 = (state_31921[(22)]);
var inst_31796 = cljs.core.chunked_seq_QMARK_.call(null,inst_31794);
var state_31921__$1 = state_31921;
if(inst_31796){
var statearr_31997_32060 = state_31921__$1;
(statearr_31997_32060[(1)] = (13));

} else {
var statearr_31998_32061 = state_31921__$1;
(statearr_31998_32061[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (18))){
var inst_31828 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
if(cljs.core.truth_(inst_31828)){
var statearr_31999_32062 = state_31921__$1;
(statearr_31999_32062[(1)] = (19));

} else {
var statearr_32000_32063 = state_31921__$1;
(statearr_32000_32063[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (42))){
var state_31921__$1 = state_31921;
var statearr_32001_32064 = state_31921__$1;
(statearr_32001_32064[(2)] = null);

(statearr_32001_32064[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (37))){
var inst_31887 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_32002_32065 = state_31921__$1;
(statearr_32002_32065[(2)] = inst_31887);

(statearr_32002_32065[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (8))){
var inst_31794 = (state_31921[(22)]);
var inst_31781 = (state_31921[(9)]);
var inst_31794__$1 = cljs.core.seq.call(null,inst_31781);
var state_31921__$1 = (function (){var statearr_32003 = state_31921;
(statearr_32003[(22)] = inst_31794__$1);

return statearr_32003;
})();
if(inst_31794__$1){
var statearr_32004_32066 = state_31921__$1;
(statearr_32004_32066[(1)] = (10));

} else {
var statearr_32005_32067 = state_31921__$1;
(statearr_32005_32067[(1)] = (11));

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
});})(c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30649__auto__,c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30650__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30650__auto____0 = (function (){
var statearr_32006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32006[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30650__auto__);

(statearr_32006[(1)] = (1));

return statearr_32006;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30650__auto____1 = (function (state_31921){
while(true){
var ret_value__30651__auto__ = (function (){try{while(true){
var result__30652__auto__ = switch__30649__auto__.call(null,state_31921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30652__auto__;
}
break;
}
}catch (e32007){if((e32007 instanceof Object)){
var ex__30653__auto__ = e32007;
var statearr_32008_32068 = state_31921;
(statearr_32008_32068[(5)] = ex__30653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32069 = state_31921;
state_31921 = G__32069;
continue;
} else {
return ret_value__30651__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30650__auto__ = function(state_31921){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30650__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30650__auto____1.call(this,state_31921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30650__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30650__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30650__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30650__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30650__auto__;
})()
;})(switch__30649__auto__,c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30674__auto__ = (function (){var statearr_32009 = f__30673__auto__.call(null);
(statearr_32009[(6)] = c__30672__auto__);

return statearr_32009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30674__auto__);
});})(c__30672__auto__,map__31766,map__31766__$1,opts,before_jsload,on_jsload,reload_dependents,map__31767,map__31767__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30672__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32072,link){
var map__32073 = p__32072;
var map__32073__$1 = (((((!((map__32073 == null))))?(((((map__32073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32073):map__32073);
var file = cljs.core.get.call(null,map__32073__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__32073,map__32073__$1,file){
return (function (p1__32070_SHARP_,p2__32071_SHARP_){
if(cljs.core._EQ_.call(null,p1__32070_SHARP_,p2__32071_SHARP_)){
return p1__32070_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__32073,map__32073__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32076){
var map__32077 = p__32076;
var map__32077__$1 = (((((!((map__32077 == null))))?(((((map__32077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32077):map__32077);
var match_length = cljs.core.get.call(null,map__32077__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32077__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32075_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32075_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32079_SHARP_,p2__32080_SHARP_){
return cljs.core.assoc.call(null,p1__32079_SHARP_,cljs.core.get.call(null,p2__32080_SHARP_,key),p2__32080_SHARP_);
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
var loaded_f_datas_32081 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32081);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32081);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32082,p__32083){
var map__32084 = p__32082;
var map__32084__$1 = (((((!((map__32084 == null))))?(((((map__32084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32084):map__32084);
var on_cssload = cljs.core.get.call(null,map__32084__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32085 = p__32083;
var map__32085__$1 = (((((!((map__32085 == null))))?(((((map__32085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32085):map__32085);
var files_msg = map__32085__$1;
var files = cljs.core.get.call(null,map__32085__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1542476948516
