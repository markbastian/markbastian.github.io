// Compiled by ClojureScript 1.10.439 {}
goog.provide('planning.utils');
goog.require('cljs.core');
planning.utils.grid_neigbors = (function planning$utils$grid_neigbors(neighbors,grid,c){
return cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.get_in,grid),neighbors.call(null,c));
});
/**
 * https://en.wikipedia.org/wiki/Von_Neumann_neighborhood
 */
planning.utils.von_neumann_neighbors = (function planning$utils$von_neumann_neighbors(var_args){
var G__26207 = arguments.length;
switch (G__26207) {
case 1:
return planning.utils.von_neumann_neighbors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return planning.utils.von_neumann_neighbors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

planning.utils.von_neumann_neighbors.cljs$core$IFn$_invoke$arity$1 = (function (p__26208){
var vec__26209 = p__26208;
var x = cljs.core.nth.call(null,vec__26209,(0),null);
var y = cljs.core.nth.call(null,vec__26209,(1),null);
var i = cljs.core.juxt.call(null,cljs.core.inc,cljs.core.identity,cljs.core.dec,cljs.core.identity).call(null,x);
var j = cljs.core.juxt.call(null,cljs.core.identity,cljs.core.inc,cljs.core.identity,cljs.core.dec).call(null,y);
return cljs.core.map.call(null,cljs.core.vector,i,j);
});

planning.utils.von_neumann_neighbors.cljs$core$IFn$_invoke$arity$2 = (function (grid,c){
return planning.utils.grid_neigbors.call(null,planning.utils.von_neumann_neighbors,grid,c);
});

planning.utils.von_neumann_neighbors.cljs$lang$maxFixedArity = 2;

/**
 * https://en.wikipedia.org/wiki/Moore_neighborhood
 */
planning.utils.moore_neigbors = (function planning$utils$moore_neigbors(var_args){
var G__26214 = arguments.length;
switch (G__26214) {
case 1:
return planning.utils.moore_neigbors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return planning.utils.moore_neigbors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

planning.utils.moore_neigbors.cljs$core$IFn$_invoke$arity$1 = (function (p__26215){
var vec__26216 = p__26215;
var x = cljs.core.nth.call(null,vec__26216,(0),null);
var y = cljs.core.nth.call(null,vec__26216,(1),null);
var i = cljs.core.juxt.call(null,cljs.core.inc,cljs.core.inc,cljs.core.identity,cljs.core.dec,cljs.core.dec,cljs.core.dec,cljs.core.identity,cljs.core.inc).call(null,x);
var j = cljs.core.juxt.call(null,cljs.core.identity,cljs.core.inc,cljs.core.inc,cljs.core.inc,cljs.core.identity,cljs.core.dec,cljs.core.dec,cljs.core.dec).call(null,y);
return cljs.core.map.call(null,cljs.core.vector,i,j);
});

planning.utils.moore_neigbors.cljs$core$IFn$_invoke$arity$2 = (function (grid,c){
return planning.utils.grid_neigbors.call(null,planning.utils.moore_neigbors,grid,c);
});

planning.utils.moore_neigbors.cljs$lang$maxFixedArity = 2;

planning.utils.euclidian_distance = (function planning$utils$euclidian_distance(a,b){
var u = cljs.core.map.call(null,cljs.core._,a,b);
return Math.sqrt(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,u,u)));
});
planning.utils.manhattan_distance = (function planning$utils$manhattan_distance(a,b){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__26220_SHARP_){
return Math.abs(p1__26220_SHARP_);
}),cljs.core._),a,b));
});
planning.utils.mark_path = (function planning$utils$mark_path(grid,solution){
return cljs.core.reduce.call(null,(function (g,c){
return cljs.core.assoc_in.call(null,g,c,new cljs.core.Symbol(null,"X","X",-948439456,null));
}),grid,solution);
});

//# sourceMappingURL=utils.js.map?rel=1542476944817
