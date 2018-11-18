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
return cljs.core.some.call(null,(function (p__24147){
var map__24148 = p__24147;
var map__24148__$1 = (((((!((map__24148 == null))))?(((((map__24148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24148):map__24148);
var visited = cljs.core.get.call(null,map__24148__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
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
var G__24150 = search_seq;
var G__24150__$1 = (((G__24150 == null))?null:planning.core.goal_met.call(null,goal,G__24150));
if((G__24150__$1 == null)){
return null;
} else {
return planning.core.recover_path.call(null,goal,G__24150__$1);
}
});
planning.core.search_step = (function planning$core$search_step(neighbors,p__24153){
var map__24154 = p__24153;
var map__24154__$1 = (((((!((map__24154 == null))))?(((((map__24154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24154):map__24154);
var m = map__24154__$1;
var frontier = cljs.core.get.call(null,map__24154__$1,new cljs.core.Keyword(null,"frontier","frontier",-1129931910));
var visited = cljs.core.get.call(null,map__24154__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
var next_state = cljs.core.peek.call(null,frontier);
var new_neighbors = cljs.core.remove.call(null,((function (next_state,map__24154,map__24154__$1,m,frontier,visited){
return (function (p1__24151_SHARP_){
return cljs.core.contains_QMARK_.call(null,visited,p1__24151_SHARP_);
});})(next_state,map__24154,map__24154__$1,m,frontier,visited))
,neighbors.call(null,next_state));
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"frontier","frontier",-1129931910),((function (next_state,new_neighbors,map__24154,map__24154__$1,m,frontier,visited){
return (function (p1__24152_SHARP_){
return cljs.core.into.call(null,cljs.core.pop.call(null,p1__24152_SHARP_),new_neighbors);
});})(next_state,new_neighbors,map__24154,map__24154__$1,m,frontier,visited))
),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.into,cljs.core.zipmap.call(null,new_neighbors,cljs.core.repeat.call(null,next_state)));
});
planning.core.search_seq = (function planning$core$search_seq(q,neighbors,p__24156){
var map__24157 = p__24156;
var map__24157__$1 = (((((!((map__24157 == null))))?(((((map__24157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24157):map__24157);
var m = map__24157__$1;
var start = cljs.core.get.call(null,map__24157__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return planning.core.exhaust_search.call(null,cljs.core.iterate.call(null,cljs.core.partial.call(null,planning.core.search_step,neighbors),cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frontier","frontier",-1129931910),cljs.core.conj.call(null,q,start),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null])], null),m)));
});
planning.core.iterative_search = (function planning$core$iterative_search(q,neighbors,p__24159){
var map__24160 = p__24159;
var map__24160__$1 = (((((!((map__24160 == null))))?(((((map__24160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24160):map__24160);
var m = map__24160__$1;
var goal = cljs.core.get.call(null,map__24160__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
return planning.core.search.call(null,goal,planning.core.search_seq.call(null,q,neighbors,m));
});
planning.core.breadth_first_search = cljs.core.partial.call(null,planning.core.iterative_search,planning.core.empty_queue);
planning.core.depth_first_search = cljs.core.partial.call(null,planning.core.iterative_search,cljs.core.PersistentVector.EMPTY);
planning.core.compute_costs = (function planning$core$compute_costs(current_state,neighbors_fn,current_costs,cost_fn){
var iter__4434__auto__ = (function planning$core$compute_costs_$_iter__24162(s__24163){
return (new cljs.core.LazySeq(null,(function (){
var s__24163__$1 = s__24163;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24163__$1);
if(temp__5457__auto__){
var s__24163__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24163__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__24163__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__24165 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__24164 = (0);
while(true){
if((i__24164 < size__4433__auto__)){
var neighbor = cljs.core._nth.call(null,c__4432__auto__,i__24164);
var new_cost = (current_costs.call(null,current_state) + cost_fn.call(null,current_state,neighbor));
if((new_cost < current_costs.call(null,neighbor,Infinity))){
cljs.core.chunk_append.call(null,b__24165,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [neighbor,new_cost], null));

var G__24166 = (i__24164 + (1));
i__24164 = G__24166;
continue;
} else {
var G__24167 = (i__24164 + (1));
i__24164 = G__24167;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24165),planning$core$compute_costs_$_iter__24162.call(null,cljs.core.chunk_rest.call(null,s__24163__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24165),null);
}
} else {
var neighbor = cljs.core.first.call(null,s__24163__$2);
var new_cost = (current_costs.call(null,current_state) + cost_fn.call(null,current_state,neighbor));
if((new_cost < current_costs.call(null,neighbor,Infinity))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [neighbor,new_cost], null),planning$core$compute_costs_$_iter__24162.call(null,cljs.core.rest.call(null,s__24163__$2)));
} else {
var G__24168 = cljs.core.rest.call(null,s__24163__$2);
s__24163__$1 = G__24168;
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
planning.core.dijkstra_step = (function planning$core$dijkstra_step(neighbors,cost_fn,p__24170){
var map__24171 = p__24170;
var map__24171__$1 = (((((!((map__24171 == null))))?(((((map__24171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24171):map__24171);
var m = map__24171__$1;
var frontier = cljs.core.get.call(null,map__24171__$1,new cljs.core.Keyword(null,"frontier","frontier",-1129931910));
var cost = cljs.core.get.call(null,map__24171__$1,new cljs.core.Keyword(null,"cost","cost",-1094861735));
var vec__24173 = cljs.core.peek.call(null,frontier);
var current_state = cljs.core.nth.call(null,vec__24173,(0),null);
var costs = planning.core.compute_costs.call(null,current_state,neighbors,cost,cost_fn);
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"frontier","frontier",-1129931910),((function (vec__24173,current_state,costs,map__24171,map__24171__$1,m,frontier,cost){
return (function (p1__24169_SHARP_){
return cljs.core.into.call(null,cljs.core.pop.call(null,p1__24169_SHARP_),costs);
});})(vec__24173,current_state,costs,map__24171,map__24171__$1,m,frontier,cost))
),new cljs.core.Keyword(null,"cost","cost",-1094861735),cljs.core.into,costs),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.into,cljs.core.map.call(null,((function (vec__24173,current_state,costs,map__24171,map__24171__$1,m,frontier,cost){
return (function (p__24176){
var vec__24177 = p__24176;
var c = cljs.core.nth.call(null,vec__24177,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,current_state], null);
});})(vec__24173,current_state,costs,map__24171,map__24171__$1,m,frontier,cost))
,costs));
});
planning.core.dijkstra_seq = (function planning$core$dijkstra_seq(neighbors,cost_fn,p__24180){
var map__24181 = p__24180;
var map__24181__$1 = (((((!((map__24181 == null))))?(((((map__24181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24181):map__24181);
var m = map__24181__$1;
var start = cljs.core.get.call(null,map__24181__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return planning.core.exhaust_search.call(null,cljs.core.iterate.call(null,cljs.core.partial.call(null,planning.core.dijkstra_step,neighbors,cost_fn),cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frontier","frontier",-1129931910),tailrecursion.priority_map.priority_map.call(null,start,(0)),new cljs.core.Keyword(null,"cost","cost",-1094861735),cljs.core.PersistentArrayMap.createAsIfByAssoc([start,(0)]),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null])], null),m)));
});
planning.core.dijkstra_path = (function planning$core$dijkstra_path(neighbors,cost_fn,p__24183){
var map__24184 = p__24183;
var map__24184__$1 = (((((!((map__24184 == null))))?(((((map__24184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24184):map__24184);
var m = map__24184__$1;
var goal = cljs.core.get.call(null,map__24184__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
return planning.core.search.call(null,goal,planning.core.dijkstra_seq.call(null,neighbors,cost_fn,m));
});
planning.core.greedy_bfs_step = (function planning$core$greedy_bfs_step(neighbors,heuristic,p__24188){
var map__24189 = p__24188;
var map__24189__$1 = (((((!((map__24189 == null))))?(((((map__24189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24189):map__24189);
var m = map__24189__$1;
var goal = cljs.core.get.call(null,map__24189__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var frontier = cljs.core.get.call(null,map__24189__$1,new cljs.core.Keyword(null,"frontier","frontier",-1129931910));
var visited = cljs.core.get.call(null,map__24189__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
var vec__24191 = cljs.core.peek.call(null,frontier);
var current_state = cljs.core.nth.call(null,vec__24191,(0),null);
var _ = cljs.core.nth.call(null,vec__24191,(1),null);
var new_neighbors = cljs.core.remove.call(null,((function (vec__24191,current_state,_,map__24189,map__24189__$1,m,goal,frontier,visited){
return (function (p1__24186_SHARP_){
return cljs.core.contains_QMARK_.call(null,visited,p1__24186_SHARP_);
});})(vec__24191,current_state,_,map__24189,map__24189__$1,m,goal,frontier,visited))
,neighbors.call(null,current_state));
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"frontier","frontier",-1129931910),((function (vec__24191,current_state,_,new_neighbors,map__24189,map__24189__$1,m,goal,frontier,visited){
return (function (p1__24187_SHARP_){
return cljs.core.into.call(null,cljs.core.pop.call(null,p1__24187_SHARP_),(function (){var iter__4434__auto__ = ((function (vec__24191,current_state,_,new_neighbors,map__24189,map__24189__$1,m,goal,frontier,visited){
return (function planning$core$greedy_bfs_step_$_iter__24194(s__24195){
return (new cljs.core.LazySeq(null,((function (vec__24191,current_state,_,new_neighbors,map__24189,map__24189__$1,m,goal,frontier,visited){
return (function (){
var s__24195__$1 = s__24195;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24195__$1);
if(temp__5457__auto__){
var s__24195__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24195__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__24195__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__24197 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__24196 = (0);
while(true){
if((i__24196 < size__4433__auto__)){
var n = cljs.core._nth.call(null,c__4432__auto__,i__24196);
cljs.core.chunk_append.call(null,b__24197,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,heuristic.call(null,goal,n)], null));

var G__24198 = (i__24196 + (1));
i__24196 = G__24198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24197),planning$core$greedy_bfs_step_$_iter__24194.call(null,cljs.core.chunk_rest.call(null,s__24195__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24197),null);
}
} else {
var n = cljs.core.first.call(null,s__24195__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,heuristic.call(null,goal,n)], null),planning$core$greedy_bfs_step_$_iter__24194.call(null,cljs.core.rest.call(null,s__24195__$2)));
}
} else {
return null;
}
break;
}
});})(vec__24191,current_state,_,new_neighbors,map__24189,map__24189__$1,m,goal,frontier,visited))
,null,null));
});})(vec__24191,current_state,_,new_neighbors,map__24189,map__24189__$1,m,goal,frontier,visited))
;
return iter__4434__auto__.call(null,new_neighbors);
})());
});})(vec__24191,current_state,_,new_neighbors,map__24189,map__24189__$1,m,goal,frontier,visited))
),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.into,cljs.core.zipmap.call(null,new_neighbors,cljs.core.repeat.call(null,current_state)));
});
planning.core.greedy_bfs_seq = (function planning$core$greedy_bfs_seq(neighbors,heuristic,p__24199){
var map__24200 = p__24199;
var map__24200__$1 = (((((!((map__24200 == null))))?(((((map__24200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24200):map__24200);
var m = map__24200__$1;
var start = cljs.core.get.call(null,map__24200__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return planning.core.exhaust_search.call(null,cljs.core.iterate.call(null,cljs.core.partial.call(null,planning.core.greedy_bfs_step,neighbors,heuristic),cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frontier","frontier",-1129931910),tailrecursion.priority_map.priority_map.call(null,start,(0)),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null])], null),m)));
});
planning.core.greedy_bfs_search = (function planning$core$greedy_bfs_search(neighbors,heuristic,p__24202){
var map__24203 = p__24202;
var map__24203__$1 = (((((!((map__24203 == null))))?(((((map__24203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24203):map__24203);
var m = map__24203__$1;
var goal = cljs.core.get.call(null,map__24203__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
return planning.core.search.call(null,goal,planning.core.greedy_bfs_seq.call(null,neighbors,heuristic,m));
});
planning.core.A_STAR__step = (function planning$core$A_STAR__step(neighbors,cost_fn,heuristic,p__24206){
var map__24207 = p__24206;
var map__24207__$1 = (((((!((map__24207 == null))))?(((((map__24207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24207):map__24207);
var m = map__24207__$1;
var goal = cljs.core.get.call(null,map__24207__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var frontier = cljs.core.get.call(null,map__24207__$1,new cljs.core.Keyword(null,"frontier","frontier",-1129931910));
var cost = cljs.core.get.call(null,map__24207__$1,new cljs.core.Keyword(null,"cost","cost",-1094861735));
var vec__24209 = cljs.core.peek.call(null,frontier);
var current_state = cljs.core.nth.call(null,vec__24209,(0),null);
var costs = planning.core.compute_costs.call(null,current_state,neighbors,cost,cost_fn);
var estimates = cljs.core.map.call(null,((function (vec__24209,current_state,costs,map__24207,map__24207__$1,m,goal,frontier,cost){
return (function (p__24212){
var vec__24213 = p__24212;
var s = cljs.core.nth.call(null,vec__24213,(0),null);
var c = cljs.core.nth.call(null,vec__24213,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(c + heuristic.call(null,goal,s))], null);
});})(vec__24209,current_state,costs,map__24207,map__24207__$1,m,goal,frontier,cost))
,costs);
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"frontier","frontier",-1129931910),((function (vec__24209,current_state,costs,estimates,map__24207,map__24207__$1,m,goal,frontier,cost){
return (function (p1__24205_SHARP_){
return cljs.core.into.call(null,cljs.core.pop.call(null,p1__24205_SHARP_),estimates);
});})(vec__24209,current_state,costs,estimates,map__24207,map__24207__$1,m,goal,frontier,cost))
),new cljs.core.Keyword(null,"cost","cost",-1094861735),cljs.core.into,costs),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.into,cljs.core.map.call(null,((function (vec__24209,current_state,costs,estimates,map__24207,map__24207__$1,m,goal,frontier,cost){
return (function (p__24216){
var vec__24217 = p__24216;
var c = cljs.core.nth.call(null,vec__24217,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,current_state], null);
});})(vec__24209,current_state,costs,estimates,map__24207,map__24207__$1,m,goal,frontier,cost))
,costs));
});
planning.core.A_STAR__seq = (function planning$core$A_STAR__seq(neighbors,cost_fn,heuristic,p__24220){
var map__24221 = p__24220;
var map__24221__$1 = (((((!((map__24221 == null))))?(((((map__24221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24221):map__24221);
var m = map__24221__$1;
var start = cljs.core.get.call(null,map__24221__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return planning.core.exhaust_search.call(null,cljs.core.iterate.call(null,cljs.core.partial.call(null,planning.core.A_STAR__step,neighbors,cost_fn,heuristic),cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frontier","frontier",-1129931910),tailrecursion.priority_map.priority_map.call(null,start,(0)),new cljs.core.Keyword(null,"cost","cost",-1094861735),cljs.core.PersistentArrayMap.createAsIfByAssoc([start,(0)]),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null])], null),m)));
});
planning.core.A_STAR__search = (function planning$core$A_STAR__search(neighbors,cost_fn,heuristic,p__24223){
var map__24224 = p__24223;
var map__24224__$1 = (((((!((map__24224 == null))))?(((((map__24224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24224):map__24224);
var m = map__24224__$1;
var goal = cljs.core.get.call(null,map__24224__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
return planning.core.search.call(null,goal,planning.core.A_STAR__seq.call(null,neighbors,cost_fn,heuristic,m));
});

//# sourceMappingURL=core.js.map?rel=1542520738797
