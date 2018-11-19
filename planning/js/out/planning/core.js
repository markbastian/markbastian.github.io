// Compiled by ClojureScript 1.10.439 {}
goog.provide('planning.core');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('tailrecursion.priority_map');
planning.core.empty_queue = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY);
planning.core.exhaust_search = (function planning$core$exhaust_search(search_seq){
return cljs.core.take_while.call(null,cljs.core.comp.call(null,cljs.core.seq,new cljs.core.Keyword(null,"frontier","frontier",-1129931910)),search_seq);
});
planning.core.goal_met = (function planning$core$goal_met(goal,goal_steps){
return cljs.core.some.call(null,(function (p__27944){
var map__27945 = p__27944;
var map__27945__$1 = (((((!((map__27945 == null))))?(((((map__27945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27945):map__27945);
var visited = cljs.core.get.call(null,map__27945__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
if(cljs.core.truth_(visited.call(null,goal))){
return visited;
} else {
return null;
}
}),goal_steps);
});
planning.core.recover_path = (function planning$core$recover_path(goal,visited){
return cljs.core.vec.call(null,cljs.core.reverse.call(null,cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,visited,goal))));
});
planning.core.search = (function planning$core$search(goal,search_seq){
var G__27947 = search_seq;
var G__27947__$1 = (((G__27947 == null))?null:planning.core.goal_met.call(null,goal,G__27947));
if((G__27947__$1 == null)){
return null;
} else {
return planning.core.recover_path.call(null,goal,G__27947__$1);
}
});
planning.core.search_step = (function planning$core$search_step(neighbors,p__27950){
var map__27951 = p__27950;
var map__27951__$1 = (((((!((map__27951 == null))))?(((((map__27951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27951):map__27951);
var m = map__27951__$1;
var frontier = cljs.core.get.call(null,map__27951__$1,new cljs.core.Keyword(null,"frontier","frontier",-1129931910));
var visited = cljs.core.get.call(null,map__27951__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
var next_state = cljs.core.peek.call(null,frontier);
var new_neighbors = cljs.core.remove.call(null,((function (next_state,map__27951,map__27951__$1,m,frontier,visited){
return (function (p1__27948_SHARP_){
return cljs.core.contains_QMARK_.call(null,visited,p1__27948_SHARP_);
});})(next_state,map__27951,map__27951__$1,m,frontier,visited))
,neighbors.call(null,next_state));
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"frontier","frontier",-1129931910),((function (next_state,new_neighbors,map__27951,map__27951__$1,m,frontier,visited){
return (function (p1__27949_SHARP_){
return cljs.core.into.call(null,cljs.core.pop.call(null,p1__27949_SHARP_),new_neighbors);
});})(next_state,new_neighbors,map__27951,map__27951__$1,m,frontier,visited))
),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.into,cljs.core.zipmap.call(null,new_neighbors,cljs.core.repeat.call(null,next_state)));
});
planning.core.search_seq = (function planning$core$search_seq(q,neighbors,p__27953){
var map__27954 = p__27953;
var map__27954__$1 = (((((!((map__27954 == null))))?(((((map__27954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27954):map__27954);
var m = map__27954__$1;
var start = cljs.core.get.call(null,map__27954__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return planning.core.exhaust_search.call(null,cljs.core.iterate.call(null,cljs.core.partial.call(null,planning.core.search_step,neighbors),cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frontier","frontier",-1129931910),cljs.core.conj.call(null,q,start),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null])], null),m)));
});
planning.core.iterative_search = (function planning$core$iterative_search(q,neighbors,p__27956){
var map__27957 = p__27956;
var map__27957__$1 = (((((!((map__27957 == null))))?(((((map__27957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27957):map__27957);
var m = map__27957__$1;
var goal = cljs.core.get.call(null,map__27957__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
return planning.core.search.call(null,goal,planning.core.search_seq.call(null,q,neighbors,m));
});
planning.core.breadth_first_search = cljs.core.partial.call(null,planning.core.iterative_search,planning.core.empty_queue);
planning.core.depth_first_search = cljs.core.partial.call(null,planning.core.iterative_search,cljs.core.PersistentVector.EMPTY);
planning.core.compute_costs = (function planning$core$compute_costs(current_state,neighbors_fn,current_costs,cost_fn){
var iter__4434__auto__ = (function planning$core$compute_costs_$_iter__27959(s__27960){
return (new cljs.core.LazySeq(null,(function (){
var s__27960__$1 = s__27960;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27960__$1);
if(temp__5457__auto__){
var s__27960__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27960__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__27960__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__27962 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__27961 = (0);
while(true){
if((i__27961 < size__4433__auto__)){
var neighbor = cljs.core._nth.call(null,c__4432__auto__,i__27961);
var new_cost = (current_costs.call(null,current_state) + cost_fn.call(null,current_state,neighbor));
if((new_cost < current_costs.call(null,neighbor,Infinity))){
cljs.core.chunk_append.call(null,b__27962,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [neighbor,new_cost], null));

var G__27963 = (i__27961 + (1));
i__27961 = G__27963;
continue;
} else {
var G__27964 = (i__27961 + (1));
i__27961 = G__27964;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27962),planning$core$compute_costs_$_iter__27959.call(null,cljs.core.chunk_rest.call(null,s__27960__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27962),null);
}
} else {
var neighbor = cljs.core.first.call(null,s__27960__$2);
var new_cost = (current_costs.call(null,current_state) + cost_fn.call(null,current_state,neighbor));
if((new_cost < current_costs.call(null,neighbor,Infinity))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [neighbor,new_cost], null),planning$core$compute_costs_$_iter__27959.call(null,cljs.core.rest.call(null,s__27960__$2)));
} else {
var G__27965 = cljs.core.rest.call(null,s__27960__$2);
s__27960__$1 = G__27965;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,neighbors_fn.call(null,current_state));
});
planning.core.dijkstra_step = (function planning$core$dijkstra_step(neighbors,cost_fn,p__27967){
var map__27968 = p__27967;
var map__27968__$1 = (((((!((map__27968 == null))))?(((((map__27968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27968):map__27968);
var m = map__27968__$1;
var frontier = cljs.core.get.call(null,map__27968__$1,new cljs.core.Keyword(null,"frontier","frontier",-1129931910));
var cost = cljs.core.get.call(null,map__27968__$1,new cljs.core.Keyword(null,"cost","cost",-1094861735));
var vec__27970 = cljs.core.peek.call(null,frontier);
var current_state = cljs.core.nth.call(null,vec__27970,(0),null);
var costs = planning.core.compute_costs.call(null,current_state,neighbors,cost,cost_fn);
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"frontier","frontier",-1129931910),((function (vec__27970,current_state,costs,map__27968,map__27968__$1,m,frontier,cost){
return (function (p1__27966_SHARP_){
return cljs.core.into.call(null,cljs.core.pop.call(null,p1__27966_SHARP_),costs);
});})(vec__27970,current_state,costs,map__27968,map__27968__$1,m,frontier,cost))
),new cljs.core.Keyword(null,"cost","cost",-1094861735),cljs.core.into,costs),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.into,cljs.core.map.call(null,((function (vec__27970,current_state,costs,map__27968,map__27968__$1,m,frontier,cost){
return (function (p__27973){
var vec__27974 = p__27973;
var c = cljs.core.nth.call(null,vec__27974,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,current_state], null);
});})(vec__27970,current_state,costs,map__27968,map__27968__$1,m,frontier,cost))
,costs));
});
planning.core.dijkstra_seq = (function planning$core$dijkstra_seq(neighbors,cost_fn,p__27977){
var map__27978 = p__27977;
var map__27978__$1 = (((((!((map__27978 == null))))?(((((map__27978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27978):map__27978);
var m = map__27978__$1;
var start = cljs.core.get.call(null,map__27978__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return planning.core.exhaust_search.call(null,cljs.core.iterate.call(null,cljs.core.partial.call(null,planning.core.dijkstra_step,neighbors,cost_fn),cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frontier","frontier",-1129931910),tailrecursion.priority_map.priority_map.call(null,start,(0)),new cljs.core.Keyword(null,"cost","cost",-1094861735),cljs.core.PersistentArrayMap.createAsIfByAssoc([start,(0)]),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null])], null),m)));
});
planning.core.dijkstra_path = (function planning$core$dijkstra_path(neighbors,cost_fn,p__27980){
var map__27981 = p__27980;
var map__27981__$1 = (((((!((map__27981 == null))))?(((((map__27981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27981):map__27981);
var m = map__27981__$1;
var goal = cljs.core.get.call(null,map__27981__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
return planning.core.search.call(null,goal,planning.core.dijkstra_seq.call(null,neighbors,cost_fn,m));
});
planning.core.greedy_bfs_step = (function planning$core$greedy_bfs_step(neighbors,heuristic,p__27985){
var map__27986 = p__27985;
var map__27986__$1 = (((((!((map__27986 == null))))?(((((map__27986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27986):map__27986);
var m = map__27986__$1;
var goal = cljs.core.get.call(null,map__27986__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var frontier = cljs.core.get.call(null,map__27986__$1,new cljs.core.Keyword(null,"frontier","frontier",-1129931910));
var visited = cljs.core.get.call(null,map__27986__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
var vec__27988 = cljs.core.peek.call(null,frontier);
var current_state = cljs.core.nth.call(null,vec__27988,(0),null);
var _ = cljs.core.nth.call(null,vec__27988,(1),null);
var new_neighbors = cljs.core.remove.call(null,((function (vec__27988,current_state,_,map__27986,map__27986__$1,m,goal,frontier,visited){
return (function (p1__27983_SHARP_){
return cljs.core.contains_QMARK_.call(null,visited,p1__27983_SHARP_);
});})(vec__27988,current_state,_,map__27986,map__27986__$1,m,goal,frontier,visited))
,neighbors.call(null,current_state));
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"frontier","frontier",-1129931910),((function (vec__27988,current_state,_,new_neighbors,map__27986,map__27986__$1,m,goal,frontier,visited){
return (function (p1__27984_SHARP_){
return cljs.core.into.call(null,cljs.core.pop.call(null,p1__27984_SHARP_),(function (){var iter__4434__auto__ = ((function (vec__27988,current_state,_,new_neighbors,map__27986,map__27986__$1,m,goal,frontier,visited){
return (function planning$core$greedy_bfs_step_$_iter__27991(s__27992){
return (new cljs.core.LazySeq(null,((function (vec__27988,current_state,_,new_neighbors,map__27986,map__27986__$1,m,goal,frontier,visited){
return (function (){
var s__27992__$1 = s__27992;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27992__$1);
if(temp__5457__auto__){
var s__27992__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27992__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__27992__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__27994 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__27993 = (0);
while(true){
if((i__27993 < size__4433__auto__)){
var n = cljs.core._nth.call(null,c__4432__auto__,i__27993);
cljs.core.chunk_append.call(null,b__27994,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,heuristic.call(null,goal,n)], null));

var G__27995 = (i__27993 + (1));
i__27993 = G__27995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27994),planning$core$greedy_bfs_step_$_iter__27991.call(null,cljs.core.chunk_rest.call(null,s__27992__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27994),null);
}
} else {
var n = cljs.core.first.call(null,s__27992__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,heuristic.call(null,goal,n)], null),planning$core$greedy_bfs_step_$_iter__27991.call(null,cljs.core.rest.call(null,s__27992__$2)));
}
} else {
return null;
}
break;
}
});})(vec__27988,current_state,_,new_neighbors,map__27986,map__27986__$1,m,goal,frontier,visited))
,null,null));
});})(vec__27988,current_state,_,new_neighbors,map__27986,map__27986__$1,m,goal,frontier,visited))
;
return iter__4434__auto__.call(null,new_neighbors);
})());
});})(vec__27988,current_state,_,new_neighbors,map__27986,map__27986__$1,m,goal,frontier,visited))
),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.into,cljs.core.zipmap.call(null,new_neighbors,cljs.core.repeat.call(null,current_state)));
});
planning.core.greedy_bfs_seq = (function planning$core$greedy_bfs_seq(neighbors,heuristic,p__27996){
var map__27997 = p__27996;
var map__27997__$1 = (((((!((map__27997 == null))))?(((((map__27997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27997):map__27997);
var m = map__27997__$1;
var start = cljs.core.get.call(null,map__27997__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return planning.core.exhaust_search.call(null,cljs.core.iterate.call(null,cljs.core.partial.call(null,planning.core.greedy_bfs_step,neighbors,heuristic),cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frontier","frontier",-1129931910),tailrecursion.priority_map.priority_map.call(null,start,(0)),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null])], null),m)));
});
planning.core.greedy_bfs_search = (function planning$core$greedy_bfs_search(neighbors,heuristic,p__27999){
var map__28000 = p__27999;
var map__28000__$1 = (((((!((map__28000 == null))))?(((((map__28000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28000):map__28000);
var m = map__28000__$1;
var goal = cljs.core.get.call(null,map__28000__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
return planning.core.search.call(null,goal,planning.core.greedy_bfs_seq.call(null,neighbors,heuristic,m));
});
planning.core.A_STAR__step = (function planning$core$A_STAR__step(neighbors,cost_fn,heuristic,p__28003){
var map__28004 = p__28003;
var map__28004__$1 = (((((!((map__28004 == null))))?(((((map__28004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28004):map__28004);
var m = map__28004__$1;
var goal = cljs.core.get.call(null,map__28004__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var frontier = cljs.core.get.call(null,map__28004__$1,new cljs.core.Keyword(null,"frontier","frontier",-1129931910));
var cost = cljs.core.get.call(null,map__28004__$1,new cljs.core.Keyword(null,"cost","cost",-1094861735));
var vec__28006 = cljs.core.peek.call(null,frontier);
var current_state = cljs.core.nth.call(null,vec__28006,(0),null);
var costs = planning.core.compute_costs.call(null,current_state,neighbors,cost,cost_fn);
var estimates = cljs.core.map.call(null,((function (vec__28006,current_state,costs,map__28004,map__28004__$1,m,goal,frontier,cost){
return (function (p__28009){
var vec__28010 = p__28009;
var s = cljs.core.nth.call(null,vec__28010,(0),null);
var c = cljs.core.nth.call(null,vec__28010,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(c + heuristic.call(null,goal,s))], null);
});})(vec__28006,current_state,costs,map__28004,map__28004__$1,m,goal,frontier,cost))
,costs);
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"frontier","frontier",-1129931910),((function (vec__28006,current_state,costs,estimates,map__28004,map__28004__$1,m,goal,frontier,cost){
return (function (p1__28002_SHARP_){
return cljs.core.into.call(null,cljs.core.pop.call(null,p1__28002_SHARP_),estimates);
});})(vec__28006,current_state,costs,estimates,map__28004,map__28004__$1,m,goal,frontier,cost))
),new cljs.core.Keyword(null,"cost","cost",-1094861735),cljs.core.into,costs),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.into,cljs.core.map.call(null,((function (vec__28006,current_state,costs,estimates,map__28004,map__28004__$1,m,goal,frontier,cost){
return (function (p__28013){
var vec__28014 = p__28013;
var c = cljs.core.nth.call(null,vec__28014,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,current_state], null);
});})(vec__28006,current_state,costs,estimates,map__28004,map__28004__$1,m,goal,frontier,cost))
,costs));
});
planning.core.A_STAR__seq = (function planning$core$A_STAR__seq(neighbors,cost_fn,heuristic,p__28017){
var map__28018 = p__28017;
var map__28018__$1 = (((((!((map__28018 == null))))?(((((map__28018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28018):map__28018);
var m = map__28018__$1;
var start = cljs.core.get.call(null,map__28018__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return planning.core.exhaust_search.call(null,cljs.core.iterate.call(null,cljs.core.partial.call(null,planning.core.A_STAR__step,neighbors,cost_fn,heuristic),cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frontier","frontier",-1129931910),tailrecursion.priority_map.priority_map.call(null,start,(0)),new cljs.core.Keyword(null,"cost","cost",-1094861735),cljs.core.PersistentArrayMap.createAsIfByAssoc([start,(0)]),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null])], null),m)));
});
planning.core.A_STAR__search = (function planning$core$A_STAR__search(neighbors,cost_fn,heuristic,p__28020){
var map__28021 = p__28020;
var map__28021__$1 = (((((!((map__28021 == null))))?(((((map__28021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28021):map__28021);
var m = map__28021__$1;
var goal = cljs.core.get.call(null,map__28021__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
return planning.core.search.call(null,goal,planning.core.A_STAR__seq.call(null,neighbors,cost_fn,heuristic,m));
});

//# sourceMappingURL=core.js.map?rel=1542662913137
