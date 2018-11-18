// Compiled by ClojureScript 1.10.439 {}
goog.provide('planning.app');
goog.require('cljs.core');
goog.require('planning.core');
goog.require('planning.utils');
goog.require('tailrecursion.priority_map');
goog.require('reagent.core');
planning.app.people = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elf","elf",1762648962),new cljs.core.Symbol(null,"\uD83E\uDDDD","\uD83E\uDDDD",-981030281,null)], null);
planning.app.items = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dagger","dagger",-523602046),new cljs.core.Symbol(null,"\uD83D\uDDE1\uFE0F","\uD83D\uDDE1\uFE0F",-1900341244,null),new cljs.core.Keyword(null,"swords","swords",7701399),new cljs.core.Symbol(null,"\u2694","\u2694",1874787236,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol(null,"\uD83D\uDDDD\uFE0F\uFE0F","\uD83D\uDDDD\uFE0F\uFE0F",-1276878187,null),new cljs.core.Keyword(null,"crown","crown",1169089297),new cljs.core.Symbol(null,"\uD83D\uDC51","\uD83D\uDC51",2015519879,null)], null);
planning.app.cost = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"\uD83C\uDF32","\uD83C\uDF32",-1847693797,null),(1),new cljs.core.Symbol(null,"\uD83C\uDF33","\uD83C\uDF33",-1616945545,null),1.5,new cljs.core.Symbol(null,"\uD83C\uDF34","\uD83C\uDF34",-93438928,null),(2),new cljs.core.Symbol(null,"\u26F0","\u26F0",-97314721,null),(5),new cljs.core.Symbol(null,"\uD83C\uDF0B","\uD83C\uDF0B",-2087801908,null),(10)], null);
planning.app.cell_dim = (24);
planning.app.grid_size = (12);
planning.app.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid","grid",402978600),cljs.core.vec.call(null,cljs.core.repeat.call(null,planning.app.grid_size,cljs.core.vec.call(null,cljs.core.repeat.call(null,planning.app.grid_size,new cljs.core.Symbol(null,"\uD83C\uDF32","\uD83C\uDF32",-1847693797,null)))))], null));
planning.app.A_STAR__meadow_search = (function planning$app$A_STAR__meadow_search(p__24317){
var map__24318 = p__24317;
var map__24318__$1 = (((((!((map__24318 == null))))?(((((map__24318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24318):map__24318);
var m = map__24318__$1;
var grid = cljs.core.get.call(null,map__24318__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var start = cljs.core.get.call(null,map__24318__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var goal = cljs.core.get.call(null,map__24318__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
if(cljs.core.truth_((function (){var and__4036__auto__ = start;
if(cljs.core.truth_(and__4036__auto__)){
return goal;
} else {
return and__4036__auto__;
}
})())){
return planning.core.A_STAR__search.call(null,cljs.core.partial.call(null,planning.utils.moore_neigbors,grid),((function (map__24318,map__24318__$1,m,grid,start,goal){
return (function (f,t){
return (planning.app.cost.call(null,cljs.core.get_in.call(null,grid,t),Infinity) * planning.utils.euclidian_distance.call(null,f,t));
});})(map__24318,map__24318__$1,m,grid,start,goal))
,planning.utils.euclidian_distance,m);
} else {
return null;
}
});
planning.app.render_path = (function planning$app$render_path(state){
return cljs.core.doall.call(null,(function (){var iter__4434__auto__ = (function planning$app$render_path_$_iter__24320(s__24321){
return (new cljs.core.LazySeq(null,(function (){
var s__24321__$1 = s__24321;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24321__$1);
if(temp__5457__auto__){
var s__24321__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24321__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__24321__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__24323 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__24322 = (0);
while(true){
if((i__24322 < size__4433__auto__)){
var vec__24324 = cljs.core._nth.call(null,c__4432__auto__,i__24322);
var i = cljs.core.nth.call(null,vec__24324,(0),null);
var j = cljs.core.nth.call(null,vec__24324,(1),null);
cljs.core.chunk_append.call(null,b__24323,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),["step:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join(''),new cljs.core.Keyword(null,"cx","cx",1272694324),((i + 0.5) * planning.app.cell_dim),new cljs.core.Keyword(null,"cy","cy",755331060),((j + 0.5) * planning.app.cell_dim),new cljs.core.Keyword(null,"r","r",-471384190),(planning.app.cell_dim * 0.5),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"gray","gray",1013268388)], null)], null));

var G__24330 = (i__24322 + (1));
i__24322 = G__24330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24323),planning$app$render_path_$_iter__24320.call(null,cljs.core.chunk_rest.call(null,s__24321__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24323),null);
}
} else {
var vec__24327 = cljs.core.first.call(null,s__24321__$2);
var i = cljs.core.nth.call(null,vec__24327,(0),null);
var j = cljs.core.nth.call(null,vec__24327,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),["step:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join(''),new cljs.core.Keyword(null,"cx","cx",1272694324),((i + 0.5) * planning.app.cell_dim),new cljs.core.Keyword(null,"cy","cy",755331060),((j + 0.5) * planning.app.cell_dim),new cljs.core.Keyword(null,"r","r",-471384190),(planning.app.cell_dim * 0.5),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"gray","gray",1013268388)], null)], null),planning$app$render_path_$_iter__24320.call(null,cljs.core.rest.call(null,s__24321__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,planning.app.A_STAR__meadow_search.call(null,cljs.core.deref.call(null,state)));
})());
});
planning.app.render_goal = (function planning$app$render_goal(state,state_key,emoji){
var goal = reagent.core.cursor.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_key], null));
return ((function (goal){
return (function (){
var vec__24331 = cljs.core.deref.call(null,goal);
var i = cljs.core.nth.call(null,vec__24331,(0),null);
var j = cljs.core.nth.call(null,vec__24331,(1),null);
if(cljs.core.truth_(cljs.core.deref.call(null,goal))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(i * planning.app.cell_dim),new cljs.core.Keyword(null,"y","y",-1757859776),(((j + (1)) * planning.app.cell_dim) - (0.25 * planning.app.cell_dim)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (vec__24331,i,j,goal){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,state_key);
});})(vec__24331,i,j,goal))
], null),emoji], null);
} else {
return null;
}
});
;})(goal))
});
planning.app.add_paintbrush = (function planning$app$add_paintbrush(state,brush){
var paintbrush = reagent.core.cursor.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paintbrush","paintbrush",-414618899)], null));
var x = ((planning.app.cell_dim * planning.app.grid_size) / cljs.core.count.call(null,planning.app.cost));
return ((function (paintbrush,x){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),x,new cljs.core.Keyword(null,"height","height",1025178622),planning.app.cell_dim], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),x,new cljs.core.Keyword(null,"height","height",1025178622),planning.app.cell_dim,new cljs.core.Keyword(null,"fill","fill",883462889),((cljs.core._EQ_.call(null,brush,cljs.core.deref.call(null,paintbrush)))?new cljs.core.Keyword(null,"gray","gray",1013268388):new cljs.core.Keyword(null,"white","white",-483998618))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0.5 * (x - planning.app.cell_dim)),new cljs.core.Keyword(null,"y","y",-1757859776),(0.75 * planning.app.cell_dim),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (paintbrush,x){
return (function (){
if((!(cljs.core._EQ_.call(null,brush,cljs.core.deref.call(null,paintbrush))))){
return cljs.core.reset_BANG_.call(null,paintbrush,brush);
} else {
return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"paintbrush","paintbrush",-414618899));
}
});})(paintbrush,x))
], null),brush], null)], null);
});
;})(paintbrush,x))
});
planning.app.render = (function planning$app$render(state){
var grid = reagent.core.cursor.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600)], null));
var paintbrush = reagent.core.cursor.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paintbrush","paintbrush",-414618899)], null));
var dragging = reagent.core.atom.call(null,false);
var w = cljs.core.count.call(null,cljs.core.deref.call(null,grid));
var h = cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,grid)));
return ((function (grid,paintbrush,dragging,w,h){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"user-select","user-select",-346451650),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),(planning.app.cell_dim * w),new cljs.core.Keyword(null,"height","height",1025178622),(planning.app.cell_dim * h),new cljs.core.Keyword(null,"onTouchStart","onTouchStart",1116070157),((function (grid,paintbrush,dragging,w,h){
return (function (){
cljs.core.prn.call(null,"start");

return cljs.core.reset_BANG_.call(null,dragging,true);
});})(grid,paintbrush,dragging,w,h))
,new cljs.core.Keyword(null,"onTouchEnd","onTouchEnd",1356758529),((function (grid,paintbrush,dragging,w,h){
return (function (){
return cljs.core.reset_BANG_.call(null,dragging,false);
});})(grid,paintbrush,dragging,w,h))
,new cljs.core.Keyword(null,"onMouseDown","onMouseDown",-1496366516),((function (grid,paintbrush,dragging,w,h){
return (function (){
return cljs.core.reset_BANG_.call(null,dragging,true);
});})(grid,paintbrush,dragging,w,h))
,new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),((function (grid,paintbrush,dragging,w,h){
return (function (){
return cljs.core.reset_BANG_.call(null,dragging,false);
});})(grid,paintbrush,dragging,w,h))
,new cljs.core.Keyword(null,"onMouseLeave","onMouseLeave",1446726903),((function (grid,paintbrush,dragging,w,h){
return (function (){
return cljs.core.reset_BANG_.call(null,dragging,false);
});})(grid,paintbrush,dragging,w,h))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(w * planning.app.cell_dim),new cljs.core.Keyword(null,"height","height",1025178622),(h * planning.app.cell_dim),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"green","green",-945526839)], null)], null),planning.app.render_path.call(null,state),cljs.core.doall.call(null,(function (){var iter__4434__auto__ = ((function (grid,paintbrush,dragging,w,h){
return (function planning$app$render_$_iter__24334(s__24335){
return (new cljs.core.LazySeq(null,((function (grid,paintbrush,dragging,w,h){
return (function (){
var s__24335__$1 = s__24335;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24335__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4430__auto__ = ((function (s__24335__$1,i,xs__6012__auto__,temp__5457__auto__,grid,paintbrush,dragging,w,h){
return (function planning$app$render_$_iter__24334_$_iter__24336(s__24337){
return (new cljs.core.LazySeq(null,((function (s__24335__$1,i,xs__6012__auto__,temp__5457__auto__,grid,paintbrush,dragging,w,h){
return (function (){
var s__24337__$1 = s__24337;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__24337__$1);
if(temp__5457__auto____$1){
var s__24337__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24337__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__24337__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__24339 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__24338 = (0);
while(true){
if((i__24338 < size__4433__auto__)){
var j = cljs.core._nth.call(null,c__4432__auto__,i__24338);
var c = cljs.core.get_in.call(null,cljs.core.deref.call(null,grid),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
cljs.core.chunk_append.call(null,b__24339,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join(''),new cljs.core.Keyword(null,"x","x",2099068185),(i * planning.app.cell_dim),new cljs.core.Keyword(null,"y","y",-1757859776),(((j + (1)) * planning.app.cell_dim) - (6)),new cljs.core.Keyword(null,"data-i","data-i",430727714),i,new cljs.core.Keyword(null,"data-j","data-j",13056023),j,new cljs.core.Keyword(null,"onMouseOver","onMouseOver",1787360977),((function (i__24338,s__24335__$1,c,j,c__4432__auto__,size__4433__auto__,b__24339,s__24337__$2,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__,grid,paintbrush,dragging,w,h){
return (function (){
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.deref.call(null,dragging);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,paintbrush);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.swap_BANG_.call(null,grid,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),cljs.core.deref.call(null,paintbrush));
} else {
return null;
}
});})(i__24338,s__24335__$1,c,j,c__4432__auto__,size__4433__auto__,b__24339,s__24337__$2,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__,grid,paintbrush,dragging,w,h))
,new cljs.core.Keyword(null,"onTouchMove","onTouchMove",1382972121),((function (i__24338,s__24335__$1,c,j,c__4432__auto__,size__4433__auto__,b__24339,s__24337__$2,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__,grid,paintbrush,dragging,w,h){
return (function (event){
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.deref.call(null,dragging);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,paintbrush);
} else {
return and__4036__auto__;
}
})())){
var touch = event.touches.item((0));
var dataset = document.elementFromPoint(touch.clientX,touch.clientY).dataset;
var i__$1 = (function (){var G__24340 = dataset;
var G__24340__$1 = (((G__24340 == null))?null:G__24340.i);
if((G__24340__$1 == null)){
return null;
} else {
return parseInt(G__24340__$1);
}
})();
var j__$1 = (function (){var G__24341 = dataset;
var G__24341__$1 = (((G__24341 == null))?null:G__24341.j);
if((G__24341__$1 == null)){
return null;
} else {
return parseInt(G__24341__$1);
}
})();
if(cljs.core.truth_((function (){var and__4036__auto__ = i__$1;
if(cljs.core.truth_(and__4036__auto__)){
return j__$1;
} else {
return and__4036__auto__;
}
})())){
return cljs.core.swap_BANG_.call(null,grid,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1,j__$1], null),cljs.core.deref.call(null,paintbrush));
} else {
return null;
}
} else {
return null;
}
});})(i__24338,s__24335__$1,c,j,c__4432__auto__,size__4433__auto__,b__24339,s__24337__$2,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__,grid,paintbrush,dragging,w,h))
,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__24338,s__24335__$1,c,j,c__4432__auto__,size__4433__auto__,b__24339,s__24337__$2,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__,grid,paintbrush,dragging,w,h){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,paintbrush))){
return cljs.core.swap_BANG_.call(null,grid,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),cljs.core.deref.call(null,paintbrush));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.Keyword(null,"goal","goal",-2073396501).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"goal","goal",-2073396501));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
} else {
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

}
}
}
}
});})(i__24338,s__24335__$1,c,j,c__4432__auto__,size__4433__auto__,b__24339,s__24337__$2,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__,grid,paintbrush,dragging,w,h))
], null),c], null));

var G__24348 = (i__24338 + (1));
i__24338 = G__24348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24339),planning$app$render_$_iter__24334_$_iter__24336.call(null,cljs.core.chunk_rest.call(null,s__24337__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24339),null);
}
} else {
var j = cljs.core.first.call(null,s__24337__$2);
var c = cljs.core.get_in.call(null,cljs.core.deref.call(null,grid),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join(''),new cljs.core.Keyword(null,"x","x",2099068185),(i * planning.app.cell_dim),new cljs.core.Keyword(null,"y","y",-1757859776),(((j + (1)) * planning.app.cell_dim) - (6)),new cljs.core.Keyword(null,"data-i","data-i",430727714),i,new cljs.core.Keyword(null,"data-j","data-j",13056023),j,new cljs.core.Keyword(null,"onMouseOver","onMouseOver",1787360977),((function (s__24335__$1,c,j,s__24337__$2,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__,grid,paintbrush,dragging,w,h){
return (function (){
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.deref.call(null,dragging);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,paintbrush);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.swap_BANG_.call(null,grid,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),cljs.core.deref.call(null,paintbrush));
} else {
return null;
}
});})(s__24335__$1,c,j,s__24337__$2,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__,grid,paintbrush,dragging,w,h))
,new cljs.core.Keyword(null,"onTouchMove","onTouchMove",1382972121),((function (s__24335__$1,c,j,s__24337__$2,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__,grid,paintbrush,dragging,w,h){
return (function (event){
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.deref.call(null,dragging);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,paintbrush);
} else {
return and__4036__auto__;
}
})())){
var touch = event.touches.item((0));
var dataset = document.elementFromPoint(touch.clientX,touch.clientY).dataset;
var i__$1 = (function (){var G__24342 = dataset;
var G__24342__$1 = (((G__24342 == null))?null:G__24342.i);
if((G__24342__$1 == null)){
return null;
} else {
return parseInt(G__24342__$1);
}
})();
var j__$1 = (function (){var G__24343 = dataset;
var G__24343__$1 = (((G__24343 == null))?null:G__24343.j);
if((G__24343__$1 == null)){
return null;
} else {
return parseInt(G__24343__$1);
}
})();
if(cljs.core.truth_((function (){var and__4036__auto__ = i__$1;
if(cljs.core.truth_(and__4036__auto__)){
return j__$1;
} else {
return and__4036__auto__;
}
})())){
return cljs.core.swap_BANG_.call(null,grid,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1,j__$1], null),cljs.core.deref.call(null,paintbrush));
} else {
return null;
}
} else {
return null;
}
});})(s__24335__$1,c,j,s__24337__$2,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__,grid,paintbrush,dragging,w,h))
,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (s__24335__$1,c,j,s__24337__$2,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__,grid,paintbrush,dragging,w,h){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,paintbrush))){
return cljs.core.swap_BANG_.call(null,grid,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),cljs.core.deref.call(null,paintbrush));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.Keyword(null,"goal","goal",-2073396501).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"goal","goal",-2073396501));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
} else {
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

}
}
}
}
});})(s__24335__$1,c,j,s__24337__$2,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__,grid,paintbrush,dragging,w,h))
], null),c], null),planning$app$render_$_iter__24334_$_iter__24336.call(null,cljs.core.rest.call(null,s__24337__$2)));
}
} else {
return null;
}
break;
}
});})(s__24335__$1,i,xs__6012__auto__,temp__5457__auto__,grid,paintbrush,dragging,w,h))
,null,null));
});})(s__24335__$1,i,xs__6012__auto__,temp__5457__auto__,grid,paintbrush,dragging,w,h))
;
var fs__4431__auto__ = cljs.core.seq.call(null,iterys__4430__auto__.call(null,cljs.core.range.call(null,h)));
if(fs__4431__auto__){
return cljs.core.concat.call(null,fs__4431__auto__,planning$app$render_$_iter__24334.call(null,cljs.core.rest.call(null,s__24335__$1)));
} else {
var G__24349 = cljs.core.rest.call(null,s__24335__$1);
s__24335__$1 = G__24349;
continue;
}
} else {
return null;
}
break;
}
});})(grid,paintbrush,dragging,w,h))
,null,null));
});})(grid,paintbrush,dragging,w,h))
;
return iter__4434__auto__.call(null,cljs.core.range.call(null,w));
})()),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [planning.app.render_goal,state,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"\uD83E\uDDDD","\uD83E\uDDDD",-981030281,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [planning.app.render_goal,state,new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.Symbol(null,"\uD83D\uDDC3\uFE0F","\uD83D\uDDC3\uFE0F",-631636518,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.doall.call(null,(function (){var iter__4434__auto__ = ((function (grid,paintbrush,dragging,w,h){
return (function planning$app$render_$_iter__24344(s__24345){
return (new cljs.core.LazySeq(null,((function (grid,paintbrush,dragging,w,h){
return (function (){
var s__24345__$1 = s__24345;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24345__$1);
if(temp__5457__auto__){
var s__24345__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24345__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__24345__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__24347 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__24346 = (0);
while(true){
if((i__24346 < size__4433__auto__)){
var k = cljs.core._nth.call(null,c__4432__auto__,i__24346);
cljs.core.chunk_append.call(null,b__24347,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [planning.app.add_paintbrush,state,k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__24350 = (i__24346 + (1));
i__24346 = G__24350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24347),planning$app$render_$_iter__24344.call(null,cljs.core.chunk_rest.call(null,s__24345__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24347),null);
}
} else {
var k = cljs.core.first.call(null,s__24345__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [planning.app.add_paintbrush,state,k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),planning$app$render_$_iter__24344.call(null,cljs.core.rest.call(null,s__24345__$2)));
}
} else {
return null;
}
break;
}
});})(grid,paintbrush,dragging,w,h))
,null,null));
});})(grid,paintbrush,dragging,w,h))
;
return iter__4434__auto__.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.sort_by.call(null,cljs.core.second,planning.app.cost)));
})())], null)], null)], null);
});
;})(grid,paintbrush,dragging,w,h))
});
var temp__5457__auto___24351 = document.getElementById("app");
if(cljs.core.truth_(temp__5457__auto___24351)){
var app_context_24352 = temp__5457__auto___24351;
var state_24353 = planning.app.state;
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [planning.app.render,state_24353], null),app_context_24352);
} else {
}

//# sourceMappingURL=app.js.map?rel=1542520739099
