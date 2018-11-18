// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29363 = arguments.length;
var i__4642__auto___29364 = (0);
while(true){
if((i__4642__auto___29364 < len__4641__auto___29363)){
args__4647__auto__.push((arguments[i__4642__auto___29364]));

var G__29365 = (i__4642__auto___29364 + (1));
i__4642__auto___29364 = G__29365;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__29355_29366 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__29356_29367 = null;
var count__29357_29368 = (0);
var i__29358_29369 = (0);
while(true){
if((i__29358_29369 < count__29357_29368)){
var k_29370 = cljs.core._nth.call(null,chunk__29356_29367,i__29358_29369);
e.setAttribute(cljs.core.name.call(null,k_29370),cljs.core.get.call(null,attrs,k_29370));


var G__29371 = seq__29355_29366;
var G__29372 = chunk__29356_29367;
var G__29373 = count__29357_29368;
var G__29374 = (i__29358_29369 + (1));
seq__29355_29366 = G__29371;
chunk__29356_29367 = G__29372;
count__29357_29368 = G__29373;
i__29358_29369 = G__29374;
continue;
} else {
var temp__5457__auto___29375 = cljs.core.seq.call(null,seq__29355_29366);
if(temp__5457__auto___29375){
var seq__29355_29376__$1 = temp__5457__auto___29375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29355_29376__$1)){
var c__4461__auto___29377 = cljs.core.chunk_first.call(null,seq__29355_29376__$1);
var G__29378 = cljs.core.chunk_rest.call(null,seq__29355_29376__$1);
var G__29379 = c__4461__auto___29377;
var G__29380 = cljs.core.count.call(null,c__4461__auto___29377);
var G__29381 = (0);
seq__29355_29366 = G__29378;
chunk__29356_29367 = G__29379;
count__29357_29368 = G__29380;
i__29358_29369 = G__29381;
continue;
} else {
var k_29382 = cljs.core.first.call(null,seq__29355_29376__$1);
e.setAttribute(cljs.core.name.call(null,k_29382),cljs.core.get.call(null,attrs,k_29382));


var G__29383 = cljs.core.next.call(null,seq__29355_29376__$1);
var G__29384 = null;
var G__29385 = (0);
var G__29386 = (0);
seq__29355_29366 = G__29383;
chunk__29356_29367 = G__29384;
count__29357_29368 = G__29385;
i__29358_29369 = G__29386;
continue;
}
} else {
}
}
break;
}

var seq__29359_29387 = cljs.core.seq.call(null,children);
var chunk__29360_29388 = null;
var count__29361_29389 = (0);
var i__29362_29390 = (0);
while(true){
if((i__29362_29390 < count__29361_29389)){
var ch_29391 = cljs.core._nth.call(null,chunk__29360_29388,i__29362_29390);
e.appendChild(ch_29391);


var G__29392 = seq__29359_29387;
var G__29393 = chunk__29360_29388;
var G__29394 = count__29361_29389;
var G__29395 = (i__29362_29390 + (1));
seq__29359_29387 = G__29392;
chunk__29360_29388 = G__29393;
count__29361_29389 = G__29394;
i__29362_29390 = G__29395;
continue;
} else {
var temp__5457__auto___29396 = cljs.core.seq.call(null,seq__29359_29387);
if(temp__5457__auto___29396){
var seq__29359_29397__$1 = temp__5457__auto___29396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29359_29397__$1)){
var c__4461__auto___29398 = cljs.core.chunk_first.call(null,seq__29359_29397__$1);
var G__29399 = cljs.core.chunk_rest.call(null,seq__29359_29397__$1);
var G__29400 = c__4461__auto___29398;
var G__29401 = cljs.core.count.call(null,c__4461__auto___29398);
var G__29402 = (0);
seq__29359_29387 = G__29399;
chunk__29360_29388 = G__29400;
count__29361_29389 = G__29401;
i__29362_29390 = G__29402;
continue;
} else {
var ch_29403 = cljs.core.first.call(null,seq__29359_29397__$1);
e.appendChild(ch_29403);


var G__29404 = cljs.core.next.call(null,seq__29359_29397__$1);
var G__29405 = null;
var G__29406 = (0);
var G__29407 = (0);
seq__29359_29387 = G__29404;
chunk__29360_29388 = G__29405;
count__29361_29389 = G__29406;
i__29362_29390 = G__29407;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq29352){
var G__29353 = cljs.core.first.call(null,seq29352);
var seq29352__$1 = cljs.core.next.call(null,seq29352);
var G__29354 = cljs.core.first.call(null,seq29352__$1);
var seq29352__$2 = cljs.core.next.call(null,seq29352__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29353,G__29354,seq29352__$2);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.heads_up !== 'undefined') && (typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined')){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_29408 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_29408.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29408.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_29408.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29408);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__29409,st_map){
var map__29410 = p__29409;
var map__29410__$1 = (((((!((map__29410 == null))))?(((((map__29410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29410):map__29410);
var container_el = cljs.core.get.call(null,map__29410__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29410,map__29410__$1,container_el){
return (function (p__29412){
var vec__29413 = p__29412;
var k = cljs.core.nth.call(null,vec__29413,(0),null);
var v = cljs.core.nth.call(null,vec__29413,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__29410,map__29410__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__29416,dom_str){
var map__29417 = p__29416;
var map__29417__$1 = (((((!((map__29417 == null))))?(((((map__29417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29417):map__29417);
var c = map__29417__$1;
var content_area_el = cljs.core.get.call(null,map__29417__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__29419){
var map__29420 = p__29419;
var map__29420__$1 = (((((!((map__29420 == null))))?(((((map__29420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29420):map__29420);
var content_area_el = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__25780__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto__){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto__){
return (function (state_29437){
var state_val_29438 = (state_29437[(1)]);
if((state_val_29438 === (1))){
var inst_29422 = (state_29437[(7)]);
var inst_29422__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29423 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29424 = ["10px","10px","100%","68px","1.0"];
var inst_29425 = cljs.core.PersistentHashMap.fromArrays(inst_29423,inst_29424);
var inst_29426 = cljs.core.merge.call(null,inst_29425,style);
var inst_29427 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29422__$1,inst_29426);
var inst_29428 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29422__$1,msg);
var inst_29429 = cljs.core.async.timeout.call(null,(300));
var state_29437__$1 = (function (){var statearr_29439 = state_29437;
(statearr_29439[(8)] = inst_29427);

(statearr_29439[(9)] = inst_29428);

(statearr_29439[(7)] = inst_29422__$1);

return statearr_29439;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29437__$1,(2),inst_29429);
} else {
if((state_val_29438 === (2))){
var inst_29422 = (state_29437[(7)]);
var inst_29431 = (state_29437[(2)]);
var inst_29432 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29433 = ["auto"];
var inst_29434 = cljs.core.PersistentHashMap.fromArrays(inst_29432,inst_29433);
var inst_29435 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29422,inst_29434);
var state_29437__$1 = (function (){var statearr_29440 = state_29437;
(statearr_29440[(10)] = inst_29431);

return statearr_29440;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29437__$1,inst_29435);
} else {
return null;
}
}
});})(c__25780__auto__))
;
return ((function (switch__25685__auto__,c__25780__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__25686__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__25686__auto____0 = (function (){
var statearr_29441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29441[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__25686__auto__);

(statearr_29441[(1)] = (1));

return statearr_29441;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__25686__auto____1 = (function (state_29437){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_29437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e29442){if((e29442 instanceof Object)){
var ex__25689__auto__ = e29442;
var statearr_29443_29445 = state_29437;
(statearr_29443_29445[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29446 = state_29437;
state_29437 = G__29446;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__25686__auto__ = function(state_29437){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__25686__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__25686__auto____1.call(this,state_29437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__25686__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__25686__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto__))
})();
var state__25782__auto__ = (function (){var statearr_29444 = f__25781__auto__.call(null);
(statearr_29444[(6)] = c__25780__auto__);

return statearr_29444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto__))
);

return c__25780__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__29448 = arguments.length;
switch (G__29448) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__29450){
var map__29451 = p__29450;
var map__29451__$1 = (((((!((map__29451 == null))))?(((((map__29451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29451):map__29451);
var file = cljs.core.get.call(null,map__29451__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29451__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29451__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__4047__auto__ = file;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__29453){
var vec__29454 = p__29453;
var typ = cljs.core.nth.call(null,vec__29454,(0),null);
var line_number = cljs.core.nth.call(null,vec__29454,(1),null);
var line = cljs.core.nth.call(null,vec__29454,(2),null);
var pred__29457 = cljs.core._EQ_;
var expr__29458 = typ;
if(cljs.core.truth_(pred__29457.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__29458))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__29457.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__29458))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__29457.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__29458))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error))));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__29460_SHARP_){
return cljs.core.update_in.call(null,p1__29460_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__29461_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__29461_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__29464){
var map__29465 = p__29464;
var map__29465__$1 = (((((!((map__29465 == null))))?(((((map__29465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29465):map__29465);
var exception = map__29465__$1;
var message = cljs.core.get.call(null,map__29465__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__29465__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__29465__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__29465__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__29465__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__29465__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__29465__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__29465__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__29465__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__29465__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__29465__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__4036__auto__ = file;
if(cljs.core.truth_(and__4036__auto__)){
return line;
} else {
return and__4036__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__29465,map__29465__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__29462_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29462_SHARP_),"</div>"].join('');
});})(last_message,map__29465,map__29465__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):"")),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre style=\"white-space: pre-wrap\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__29465,map__29465__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__29463_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__29463_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__29463_SHARP_)))].join('');
});})(last_message,map__29465,map__29465__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__29467){
var map__29468 = p__29467;
var map__29468__$1 = (((((!((map__29468 == null))))?(((((map__29468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29468):map__29468);
var file = cljs.core.get.call(null,map__29468__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29468__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29468__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"file-column","file-column",1543934780),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__29471 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__29471__$1 = (((((!((map__29471 == null))))?(((((map__29471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29471):map__29471);
var head = cljs.core.get.call(null,map__29471__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__29471__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__29471__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__29471__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__29471__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29471__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29471__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__29474){
var map__29475 = p__29474;
var map__29475__$1 = (((((!((map__29475 == null))))?(((((map__29475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29475):map__29475);
var warning_data = map__29475__$1;
var file = cljs.core.get.call(null,map__29475__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29475__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29475__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__29475__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__29475__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__4036__auto__ = file;
if(cljs.core.truth_(and__4036__auto__)){
return line;
} else {
return and__4036__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__29475,map__29475__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__29473_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29473_SHARP_),"</div>"].join('');
});})(last_message,map__29475,map__29475__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__29477 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__29477__$1 = (((((!((map__29477 == null))))?(((((map__29477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29477):map__29477);
var head = cljs.core.get.call(null,map__29477__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__29477__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__29477__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__29477__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__29477__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29477__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29477__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__29479){
var map__29480 = p__29479;
var map__29480__$1 = (((((!((map__29480 == null))))?(((((map__29480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29480):map__29480);
var warning_data = map__29480__$1;
var message = cljs.core.get.call(null,map__29480__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__29480__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29480__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29480__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29482 = message;
var G__29482__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29482)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29482);
var G__29482__$2 = (cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29482__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__29482__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29482__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__29482__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__29483){
var map__29484 = p__29483;
var map__29484__$1 = (((((!((map__29484 == null))))?(((((map__29484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29484):map__29484);
var warning_data = map__29484__$1;
var message = cljs.core.get.call(null,map__29484__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__29484__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29484__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29484__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__29486 = figwheel.client.heads_up.ensure_container.call(null);
var map__29486__$1 = (((((!((map__29486 == null))))?(((((map__29486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29486):map__29486);
var content_area_el = cljs.core.get.call(null,map__29486__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__5457__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5457__auto__)){
var last_child = temp__5457__auto__;
var temp__5455__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5455__auto__)){
var message_count = temp__5455__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__25780__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto__){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto__){
return (function (state_29505){
var state_val_29506 = (state_29505[(1)]);
if((state_val_29506 === (1))){
var inst_29488 = (state_29505[(7)]);
var inst_29488__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29489 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29490 = ["0.0"];
var inst_29491 = cljs.core.PersistentHashMap.fromArrays(inst_29489,inst_29490);
var inst_29492 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29488__$1,inst_29491);
var inst_29493 = cljs.core.async.timeout.call(null,(300));
var state_29505__$1 = (function (){var statearr_29507 = state_29505;
(statearr_29507[(7)] = inst_29488__$1);

(statearr_29507[(8)] = inst_29492);

return statearr_29507;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29505__$1,(2),inst_29493);
} else {
if((state_val_29506 === (2))){
var inst_29488 = (state_29505[(7)]);
var inst_29495 = (state_29505[(2)]);
var inst_29496 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29497 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29498 = cljs.core.PersistentHashMap.fromArrays(inst_29496,inst_29497);
var inst_29499 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29488,inst_29498);
var inst_29500 = cljs.core.async.timeout.call(null,(200));
var state_29505__$1 = (function (){var statearr_29508 = state_29505;
(statearr_29508[(9)] = inst_29495);

(statearr_29508[(10)] = inst_29499);

return statearr_29508;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29505__$1,(3),inst_29500);
} else {
if((state_val_29506 === (3))){
var inst_29488 = (state_29505[(7)]);
var inst_29502 = (state_29505[(2)]);
var inst_29503 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29488,"");
var state_29505__$1 = (function (){var statearr_29509 = state_29505;
(statearr_29509[(11)] = inst_29502);

return statearr_29509;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29505__$1,inst_29503);
} else {
return null;
}
}
}
});})(c__25780__auto__))
;
return ((function (switch__25685__auto__,c__25780__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__25686__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__25686__auto____0 = (function (){
var statearr_29510 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29510[(0)] = figwheel$client$heads_up$clear_$_state_machine__25686__auto__);

(statearr_29510[(1)] = (1));

return statearr_29510;
});
var figwheel$client$heads_up$clear_$_state_machine__25686__auto____1 = (function (state_29505){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_29505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e29511){if((e29511 instanceof Object)){
var ex__25689__auto__ = e29511;
var statearr_29512_29514 = state_29505;
(statearr_29512_29514[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29515 = state_29505;
state_29505 = G__29515;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__25686__auto__ = function(state_29505){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__25686__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__25686__auto____1.call(this,state_29505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__25686__auto____0;
figwheel$client$heads_up$clear_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__25686__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto__))
})();
var state__25782__auto__ = (function (){var statearr_29513 = f__25781__auto__.call(null);
(statearr_29513[(6)] = c__25780__auto__);

return statearr_29513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto__))
);

return c__25780__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__25780__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto__){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto__){
return (function (state_29526){
var state_val_29527 = (state_29526[(1)]);
if((state_val_29527 === (1))){
var inst_29516 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29526__$1 = state_29526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29526__$1,(2),inst_29516);
} else {
if((state_val_29527 === (2))){
var inst_29518 = (state_29526[(2)]);
var inst_29519 = cljs.core.async.timeout.call(null,(400));
var state_29526__$1 = (function (){var statearr_29528 = state_29526;
(statearr_29528[(7)] = inst_29518);

return statearr_29528;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29526__$1,(3),inst_29519);
} else {
if((state_val_29527 === (3))){
var inst_29521 = (state_29526[(2)]);
var inst_29522 = figwheel.client.heads_up.clear.call(null);
var state_29526__$1 = (function (){var statearr_29529 = state_29526;
(statearr_29529[(8)] = inst_29521);

return statearr_29529;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29526__$1,(4),inst_29522);
} else {
if((state_val_29527 === (4))){
var inst_29524 = (state_29526[(2)]);
var state_29526__$1 = state_29526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29526__$1,inst_29524);
} else {
return null;
}
}
}
}
});})(c__25780__auto__))
;
return ((function (switch__25685__auto__,c__25780__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__25686__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__25686__auto____0 = (function (){
var statearr_29530 = [null,null,null,null,null,null,null,null,null];
(statearr_29530[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__25686__auto__);

(statearr_29530[(1)] = (1));

return statearr_29530;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__25686__auto____1 = (function (state_29526){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_29526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e29531){if((e29531 instanceof Object)){
var ex__25689__auto__ = e29531;
var statearr_29532_29534 = state_29526;
(statearr_29532_29534[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29535 = state_29526;
state_29526 = G__29535;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__25686__auto__ = function(state_29526){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__25686__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__25686__auto____1.call(this,state_29526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__25686__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__25686__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto__))
})();
var state__25782__auto__ = (function (){var statearr_29533 = f__25781__auto__.call(null);
(statearr_29533[(6)] = c__25780__auto__);

return statearr_29533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto__))
);

return c__25780__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5457__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1542520743111
