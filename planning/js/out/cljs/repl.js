// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33549){
var map__33550 = p__33549;
var map__33550__$1 = (((((!((map__33550 == null))))?(((((map__33550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33550):map__33550);
var m = map__33550__$1;
var n = cljs.core.get.call(null,map__33550__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33550__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__33552_33574 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33553_33575 = null;
var count__33554_33576 = (0);
var i__33555_33577 = (0);
while(true){
if((i__33555_33577 < count__33554_33576)){
var f_33578 = cljs.core._nth.call(null,chunk__33553_33575,i__33555_33577);
cljs.core.println.call(null,"  ",f_33578);


var G__33579 = seq__33552_33574;
var G__33580 = chunk__33553_33575;
var G__33581 = count__33554_33576;
var G__33582 = (i__33555_33577 + (1));
seq__33552_33574 = G__33579;
chunk__33553_33575 = G__33580;
count__33554_33576 = G__33581;
i__33555_33577 = G__33582;
continue;
} else {
var temp__5457__auto___33583 = cljs.core.seq.call(null,seq__33552_33574);
if(temp__5457__auto___33583){
var seq__33552_33584__$1 = temp__5457__auto___33583;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33552_33584__$1)){
var c__4461__auto___33585 = cljs.core.chunk_first.call(null,seq__33552_33584__$1);
var G__33586 = cljs.core.chunk_rest.call(null,seq__33552_33584__$1);
var G__33587 = c__4461__auto___33585;
var G__33588 = cljs.core.count.call(null,c__4461__auto___33585);
var G__33589 = (0);
seq__33552_33574 = G__33586;
chunk__33553_33575 = G__33587;
count__33554_33576 = G__33588;
i__33555_33577 = G__33589;
continue;
} else {
var f_33590 = cljs.core.first.call(null,seq__33552_33584__$1);
cljs.core.println.call(null,"  ",f_33590);


var G__33591 = cljs.core.next.call(null,seq__33552_33584__$1);
var G__33592 = null;
var G__33593 = (0);
var G__33594 = (0);
seq__33552_33574 = G__33591;
chunk__33553_33575 = G__33592;
count__33554_33576 = G__33593;
i__33555_33577 = G__33594;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33595 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33595);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33595)))?cljs.core.second.call(null,arglists_33595):arglists_33595));
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
var seq__33556_33596 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33557_33597 = null;
var count__33558_33598 = (0);
var i__33559_33599 = (0);
while(true){
if((i__33559_33599 < count__33558_33598)){
var vec__33560_33600 = cljs.core._nth.call(null,chunk__33557_33597,i__33559_33599);
var name_33601 = cljs.core.nth.call(null,vec__33560_33600,(0),null);
var map__33563_33602 = cljs.core.nth.call(null,vec__33560_33600,(1),null);
var map__33563_33603__$1 = (((((!((map__33563_33602 == null))))?(((((map__33563_33602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33563_33602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33563_33602):map__33563_33602);
var doc_33604 = cljs.core.get.call(null,map__33563_33603__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33605 = cljs.core.get.call(null,map__33563_33603__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33601);

cljs.core.println.call(null," ",arglists_33605);

if(cljs.core.truth_(doc_33604)){
cljs.core.println.call(null," ",doc_33604);
} else {
}


var G__33606 = seq__33556_33596;
var G__33607 = chunk__33557_33597;
var G__33608 = count__33558_33598;
var G__33609 = (i__33559_33599 + (1));
seq__33556_33596 = G__33606;
chunk__33557_33597 = G__33607;
count__33558_33598 = G__33608;
i__33559_33599 = G__33609;
continue;
} else {
var temp__5457__auto___33610 = cljs.core.seq.call(null,seq__33556_33596);
if(temp__5457__auto___33610){
var seq__33556_33611__$1 = temp__5457__auto___33610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33556_33611__$1)){
var c__4461__auto___33612 = cljs.core.chunk_first.call(null,seq__33556_33611__$1);
var G__33613 = cljs.core.chunk_rest.call(null,seq__33556_33611__$1);
var G__33614 = c__4461__auto___33612;
var G__33615 = cljs.core.count.call(null,c__4461__auto___33612);
var G__33616 = (0);
seq__33556_33596 = G__33613;
chunk__33557_33597 = G__33614;
count__33558_33598 = G__33615;
i__33559_33599 = G__33616;
continue;
} else {
var vec__33565_33617 = cljs.core.first.call(null,seq__33556_33611__$1);
var name_33618 = cljs.core.nth.call(null,vec__33565_33617,(0),null);
var map__33568_33619 = cljs.core.nth.call(null,vec__33565_33617,(1),null);
var map__33568_33620__$1 = (((((!((map__33568_33619 == null))))?(((((map__33568_33619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33568_33619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33568_33619):map__33568_33619);
var doc_33621 = cljs.core.get.call(null,map__33568_33620__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33622 = cljs.core.get.call(null,map__33568_33620__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33618);

cljs.core.println.call(null," ",arglists_33622);

if(cljs.core.truth_(doc_33621)){
cljs.core.println.call(null," ",doc_33621);
} else {
}


var G__33623 = cljs.core.next.call(null,seq__33556_33611__$1);
var G__33624 = null;
var G__33625 = (0);
var G__33626 = (0);
seq__33556_33596 = G__33623;
chunk__33557_33597 = G__33624;
count__33558_33598 = G__33625;
i__33559_33599 = G__33626;
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

var seq__33570 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33571 = null;
var count__33572 = (0);
var i__33573 = (0);
while(true){
if((i__33573 < count__33572)){
var role = cljs.core._nth.call(null,chunk__33571,i__33573);
var temp__5457__auto___33627__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___33627__$1)){
var spec_33628 = temp__5457__auto___33627__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33628));
} else {
}


var G__33629 = seq__33570;
var G__33630 = chunk__33571;
var G__33631 = count__33572;
var G__33632 = (i__33573 + (1));
seq__33570 = G__33629;
chunk__33571 = G__33630;
count__33572 = G__33631;
i__33573 = G__33632;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__33570);
if(temp__5457__auto____$1){
var seq__33570__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33570__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__33570__$1);
var G__33633 = cljs.core.chunk_rest.call(null,seq__33570__$1);
var G__33634 = c__4461__auto__;
var G__33635 = cljs.core.count.call(null,c__4461__auto__);
var G__33636 = (0);
seq__33570 = G__33633;
chunk__33571 = G__33634;
count__33572 = G__33635;
i__33573 = G__33636;
continue;
} else {
var role = cljs.core.first.call(null,seq__33570__$1);
var temp__5457__auto___33637__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___33637__$2)){
var spec_33638 = temp__5457__auto___33637__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_33638));
} else {
}


var G__33639 = cljs.core.next.call(null,seq__33570__$1);
var G__33640 = null;
var G__33641 = (0);
var G__33642 = (0);
seq__33570 = G__33639;
chunk__33571 = G__33640;
count__33572 = G__33641;
i__33573 = G__33642;
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

//# sourceMappingURL=repl.js.map?rel=1542476949768
