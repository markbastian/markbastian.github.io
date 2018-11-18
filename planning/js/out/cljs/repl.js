// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29250){
var map__29251 = p__29250;
var map__29251__$1 = (((((!((map__29251 == null))))?(((((map__29251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29251):map__29251);
var m = map__29251__$1;
var n = cljs.core.get.call(null,map__29251__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29251__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29253_29275 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29254_29276 = null;
var count__29255_29277 = (0);
var i__29256_29278 = (0);
while(true){
if((i__29256_29278 < count__29255_29277)){
var f_29279 = cljs.core._nth.call(null,chunk__29254_29276,i__29256_29278);
cljs.core.println.call(null,"  ",f_29279);


var G__29280 = seq__29253_29275;
var G__29281 = chunk__29254_29276;
var G__29282 = count__29255_29277;
var G__29283 = (i__29256_29278 + (1));
seq__29253_29275 = G__29280;
chunk__29254_29276 = G__29281;
count__29255_29277 = G__29282;
i__29256_29278 = G__29283;
continue;
} else {
var temp__5457__auto___29284 = cljs.core.seq.call(null,seq__29253_29275);
if(temp__5457__auto___29284){
var seq__29253_29285__$1 = temp__5457__auto___29284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29253_29285__$1)){
var c__4461__auto___29286 = cljs.core.chunk_first.call(null,seq__29253_29285__$1);
var G__29287 = cljs.core.chunk_rest.call(null,seq__29253_29285__$1);
var G__29288 = c__4461__auto___29286;
var G__29289 = cljs.core.count.call(null,c__4461__auto___29286);
var G__29290 = (0);
seq__29253_29275 = G__29287;
chunk__29254_29276 = G__29288;
count__29255_29277 = G__29289;
i__29256_29278 = G__29290;
continue;
} else {
var f_29291 = cljs.core.first.call(null,seq__29253_29285__$1);
cljs.core.println.call(null,"  ",f_29291);


var G__29292 = cljs.core.next.call(null,seq__29253_29285__$1);
var G__29293 = null;
var G__29294 = (0);
var G__29295 = (0);
seq__29253_29275 = G__29292;
chunk__29254_29276 = G__29293;
count__29255_29277 = G__29294;
i__29256_29278 = G__29295;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29296 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29296);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29296)))?cljs.core.second.call(null,arglists_29296):arglists_29296));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29257_29297 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29258_29298 = null;
var count__29259_29299 = (0);
var i__29260_29300 = (0);
while(true){
if((i__29260_29300 < count__29259_29299)){
var vec__29261_29301 = cljs.core._nth.call(null,chunk__29258_29298,i__29260_29300);
var name_29302 = cljs.core.nth.call(null,vec__29261_29301,(0),null);
var map__29264_29303 = cljs.core.nth.call(null,vec__29261_29301,(1),null);
var map__29264_29304__$1 = (((((!((map__29264_29303 == null))))?(((((map__29264_29303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29264_29303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29264_29303):map__29264_29303);
var doc_29305 = cljs.core.get.call(null,map__29264_29304__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29306 = cljs.core.get.call(null,map__29264_29304__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29302);

cljs.core.println.call(null," ",arglists_29306);

if(cljs.core.truth_(doc_29305)){
cljs.core.println.call(null," ",doc_29305);
} else {
}


var G__29307 = seq__29257_29297;
var G__29308 = chunk__29258_29298;
var G__29309 = count__29259_29299;
var G__29310 = (i__29260_29300 + (1));
seq__29257_29297 = G__29307;
chunk__29258_29298 = G__29308;
count__29259_29299 = G__29309;
i__29260_29300 = G__29310;
continue;
} else {
var temp__5457__auto___29311 = cljs.core.seq.call(null,seq__29257_29297);
if(temp__5457__auto___29311){
var seq__29257_29312__$1 = temp__5457__auto___29311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29257_29312__$1)){
var c__4461__auto___29313 = cljs.core.chunk_first.call(null,seq__29257_29312__$1);
var G__29314 = cljs.core.chunk_rest.call(null,seq__29257_29312__$1);
var G__29315 = c__4461__auto___29313;
var G__29316 = cljs.core.count.call(null,c__4461__auto___29313);
var G__29317 = (0);
seq__29257_29297 = G__29314;
chunk__29258_29298 = G__29315;
count__29259_29299 = G__29316;
i__29260_29300 = G__29317;
continue;
} else {
var vec__29266_29318 = cljs.core.first.call(null,seq__29257_29312__$1);
var name_29319 = cljs.core.nth.call(null,vec__29266_29318,(0),null);
var map__29269_29320 = cljs.core.nth.call(null,vec__29266_29318,(1),null);
var map__29269_29321__$1 = (((((!((map__29269_29320 == null))))?(((((map__29269_29320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29269_29320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29269_29320):map__29269_29320);
var doc_29322 = cljs.core.get.call(null,map__29269_29321__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29323 = cljs.core.get.call(null,map__29269_29321__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29319);

cljs.core.println.call(null," ",arglists_29323);

if(cljs.core.truth_(doc_29322)){
cljs.core.println.call(null," ",doc_29322);
} else {
}


var G__29324 = cljs.core.next.call(null,seq__29257_29312__$1);
var G__29325 = null;
var G__29326 = (0);
var G__29327 = (0);
seq__29257_29297 = G__29324;
chunk__29258_29298 = G__29325;
count__29259_29299 = G__29326;
i__29260_29300 = G__29327;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__29271 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29272 = null;
var count__29273 = (0);
var i__29274 = (0);
while(true){
if((i__29274 < count__29273)){
var role = cljs.core._nth.call(null,chunk__29272,i__29274);
var temp__5457__auto___29328__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29328__$1)){
var spec_29329 = temp__5457__auto___29328__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29329));
} else {
}


var G__29330 = seq__29271;
var G__29331 = chunk__29272;
var G__29332 = count__29273;
var G__29333 = (i__29274 + (1));
seq__29271 = G__29330;
chunk__29272 = G__29331;
count__29273 = G__29332;
i__29274 = G__29333;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__29271);
if(temp__5457__auto____$1){
var seq__29271__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29271__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29271__$1);
var G__29334 = cljs.core.chunk_rest.call(null,seq__29271__$1);
var G__29335 = c__4461__auto__;
var G__29336 = cljs.core.count.call(null,c__4461__auto__);
var G__29337 = (0);
seq__29271 = G__29334;
chunk__29272 = G__29335;
count__29273 = G__29336;
i__29274 = G__29337;
continue;
} else {
var role = cljs.core.first.call(null,seq__29271__$1);
var temp__5457__auto___29338__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29338__$2)){
var spec_29339 = temp__5457__auto___29338__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29339));
} else {
}


var G__29340 = cljs.core.next.call(null,seq__29271__$1);
var G__29341 = null;
var G__29342 = (0);
var G__29343 = (0);
seq__29271 = G__29340;
chunk__29272 = G__29341;
count__29273 = G__29342;
i__29274 = G__29343;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1542520742920
