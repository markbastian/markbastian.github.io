// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.17";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e29538){if((e29538 instanceof Error)){
var e = e29538;
return "Error: Unable to stringify";
} else {
throw e29538;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29541 = arguments.length;
switch (G__29541) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29539_SHARP_){
if(typeof p1__29539_SHARP_ === 'string'){
return p1__29539_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29539_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29544 = arguments.length;
var i__4642__auto___29545 = (0);
while(true){
if((i__4642__auto___29545 < len__4641__auto___29544)){
args__4647__auto__.push((arguments[i__4642__auto___29545]));

var G__29546 = (i__4642__auto___29545 + (1));
i__4642__auto___29545 = G__29546;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29543){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29543));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29548 = arguments.length;
var i__4642__auto___29549 = (0);
while(true){
if((i__4642__auto___29549 < len__4641__auto___29548)){
args__4647__auto__.push((arguments[i__4642__auto___29549]));

var G__29550 = (i__4642__auto___29549 + (1));
i__4642__auto___29549 = G__29550;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29547){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29547));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29551){
var map__29552 = p__29551;
var map__29552__$1 = (((((!((map__29552 == null))))?(((((map__29552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29552):map__29552);
var message = cljs.core.get.call(null,map__29552__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29552__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__25780__auto___29631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto___29631,ch){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto___29631,ch){
return (function (state_29603){
var state_val_29604 = (state_29603[(1)]);
if((state_val_29604 === (7))){
var inst_29599 = (state_29603[(2)]);
var state_29603__$1 = state_29603;
var statearr_29605_29632 = state_29603__$1;
(statearr_29605_29632[(2)] = inst_29599);

(statearr_29605_29632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29604 === (1))){
var state_29603__$1 = state_29603;
var statearr_29606_29633 = state_29603__$1;
(statearr_29606_29633[(2)] = null);

(statearr_29606_29633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29604 === (4))){
var inst_29556 = (state_29603[(7)]);
var inst_29556__$1 = (state_29603[(2)]);
var state_29603__$1 = (function (){var statearr_29607 = state_29603;
(statearr_29607[(7)] = inst_29556__$1);

return statearr_29607;
})();
if(cljs.core.truth_(inst_29556__$1)){
var statearr_29608_29634 = state_29603__$1;
(statearr_29608_29634[(1)] = (5));

} else {
var statearr_29609_29635 = state_29603__$1;
(statearr_29609_29635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29604 === (15))){
var inst_29563 = (state_29603[(8)]);
var inst_29578 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29563);
var inst_29579 = cljs.core.first.call(null,inst_29578);
var inst_29580 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29579);
var inst_29581 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29580)].join('');
var inst_29582 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29581);
var state_29603__$1 = state_29603;
var statearr_29610_29636 = state_29603__$1;
(statearr_29610_29636[(2)] = inst_29582);

(statearr_29610_29636[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29604 === (13))){
var inst_29587 = (state_29603[(2)]);
var state_29603__$1 = state_29603;
var statearr_29611_29637 = state_29603__$1;
(statearr_29611_29637[(2)] = inst_29587);

(statearr_29611_29637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29604 === (6))){
var state_29603__$1 = state_29603;
var statearr_29612_29638 = state_29603__$1;
(statearr_29612_29638[(2)] = null);

(statearr_29612_29638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29604 === (17))){
var inst_29585 = (state_29603[(2)]);
var state_29603__$1 = state_29603;
var statearr_29613_29639 = state_29603__$1;
(statearr_29613_29639[(2)] = inst_29585);

(statearr_29613_29639[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29604 === (3))){
var inst_29601 = (state_29603[(2)]);
var state_29603__$1 = state_29603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29603__$1,inst_29601);
} else {
if((state_val_29604 === (12))){
var inst_29562 = (state_29603[(9)]);
var inst_29576 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29562,opts);
var state_29603__$1 = state_29603;
if(inst_29576){
var statearr_29614_29640 = state_29603__$1;
(statearr_29614_29640[(1)] = (15));

} else {
var statearr_29615_29641 = state_29603__$1;
(statearr_29615_29641[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29604 === (2))){
var state_29603__$1 = state_29603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29603__$1,(4),ch);
} else {
if((state_val_29604 === (11))){
var inst_29563 = (state_29603[(8)]);
var inst_29568 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29569 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29563);
var inst_29570 = cljs.core.async.timeout.call(null,(1000));
var inst_29571 = [inst_29569,inst_29570];
var inst_29572 = (new cljs.core.PersistentVector(null,2,(5),inst_29568,inst_29571,null));
var state_29603__$1 = state_29603;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29603__$1,(14),inst_29572);
} else {
if((state_val_29604 === (9))){
var inst_29563 = (state_29603[(8)]);
var inst_29589 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29590 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29563);
var inst_29591 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29590);
var inst_29592 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29591)].join('');
var inst_29593 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29592);
var state_29603__$1 = (function (){var statearr_29616 = state_29603;
(statearr_29616[(10)] = inst_29589);

return statearr_29616;
})();
var statearr_29617_29642 = state_29603__$1;
(statearr_29617_29642[(2)] = inst_29593);

(statearr_29617_29642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29604 === (5))){
var inst_29556 = (state_29603[(7)]);
var inst_29558 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29559 = (new cljs.core.PersistentArrayMap(null,2,inst_29558,null));
var inst_29560 = (new cljs.core.PersistentHashSet(null,inst_29559,null));
var inst_29561 = figwheel.client.focus_msgs.call(null,inst_29560,inst_29556);
var inst_29562 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29561);
var inst_29563 = cljs.core.first.call(null,inst_29561);
var inst_29564 = figwheel.client.autoload_QMARK_.call(null);
var state_29603__$1 = (function (){var statearr_29618 = state_29603;
(statearr_29618[(9)] = inst_29562);

(statearr_29618[(8)] = inst_29563);

return statearr_29618;
})();
if(cljs.core.truth_(inst_29564)){
var statearr_29619_29643 = state_29603__$1;
(statearr_29619_29643[(1)] = (8));

} else {
var statearr_29620_29644 = state_29603__$1;
(statearr_29620_29644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29604 === (14))){
var inst_29574 = (state_29603[(2)]);
var state_29603__$1 = state_29603;
var statearr_29621_29645 = state_29603__$1;
(statearr_29621_29645[(2)] = inst_29574);

(statearr_29621_29645[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29604 === (16))){
var state_29603__$1 = state_29603;
var statearr_29622_29646 = state_29603__$1;
(statearr_29622_29646[(2)] = null);

(statearr_29622_29646[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29604 === (10))){
var inst_29595 = (state_29603[(2)]);
var state_29603__$1 = (function (){var statearr_29623 = state_29603;
(statearr_29623[(11)] = inst_29595);

return statearr_29623;
})();
var statearr_29624_29647 = state_29603__$1;
(statearr_29624_29647[(2)] = null);

(statearr_29624_29647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29604 === (8))){
var inst_29562 = (state_29603[(9)]);
var inst_29566 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29562,opts);
var state_29603__$1 = state_29603;
if(cljs.core.truth_(inst_29566)){
var statearr_29625_29648 = state_29603__$1;
(statearr_29625_29648[(1)] = (11));

} else {
var statearr_29626_29649 = state_29603__$1;
(statearr_29626_29649[(1)] = (12));

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
});})(c__25780__auto___29631,ch))
;
return ((function (switch__25685__auto__,c__25780__auto___29631,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25686__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25686__auto____0 = (function (){
var statearr_29627 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29627[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25686__auto__);

(statearr_29627[(1)] = (1));

return statearr_29627;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25686__auto____1 = (function (state_29603){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_29603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e29628){if((e29628 instanceof Object)){
var ex__25689__auto__ = e29628;
var statearr_29629_29650 = state_29603;
(statearr_29629_29650[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29651 = state_29603;
state_29603 = G__29651;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25686__auto__ = function(state_29603){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25686__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25686__auto____1.call(this,state_29603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25686__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25686__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto___29631,ch))
})();
var state__25782__auto__ = (function (){var statearr_29630 = f__25781__auto__.call(null);
(statearr_29630[(6)] = c__25780__auto___29631);

return statearr_29630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto___29631,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29652_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29652_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29658 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29658){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29654 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29655 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29656 = true;
var _STAR_print_fn_STAR__temp_val__29657 = ((function (_STAR_print_newline_STAR__orig_val__29654,_STAR_print_fn_STAR__orig_val__29655,_STAR_print_newline_STAR__temp_val__29656,sb,base_path_29658){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__29654,_STAR_print_fn_STAR__orig_val__29655,_STAR_print_newline_STAR__temp_val__29656,sb,base_path_29658))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29656;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29657;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29655;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29654;
}}catch (e29653){if((e29653 instanceof Error)){
var e = e29653;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29658], null));
} else {
var e = e29653;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29658))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29659){
var map__29660 = p__29659;
var map__29660__$1 = (((((!((map__29660 == null))))?(((((map__29660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29660):map__29660);
var opts = map__29660__$1;
var build_id = cljs.core.get.call(null,map__29660__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29660,map__29660__$1,opts,build_id){
return (function (p__29662){
var vec__29663 = p__29662;
var seq__29664 = cljs.core.seq.call(null,vec__29663);
var first__29665 = cljs.core.first.call(null,seq__29664);
var seq__29664__$1 = cljs.core.next.call(null,seq__29664);
var map__29666 = first__29665;
var map__29666__$1 = (((((!((map__29666 == null))))?(((((map__29666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29666):map__29666);
var msg = map__29666__$1;
var msg_name = cljs.core.get.call(null,map__29666__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29664__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29663,seq__29664,first__29665,seq__29664__$1,map__29666,map__29666__$1,msg,msg_name,_,map__29660,map__29660__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29663,seq__29664,first__29665,seq__29664__$1,map__29666,map__29666__$1,msg,msg_name,_,map__29660,map__29660__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29660,map__29660__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29668){
var vec__29669 = p__29668;
var seq__29670 = cljs.core.seq.call(null,vec__29669);
var first__29671 = cljs.core.first.call(null,seq__29670);
var seq__29670__$1 = cljs.core.next.call(null,seq__29670);
var map__29672 = first__29671;
var map__29672__$1 = (((((!((map__29672 == null))))?(((((map__29672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29672):map__29672);
var msg = map__29672__$1;
var msg_name = cljs.core.get.call(null,map__29672__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29670__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29674){
var map__29675 = p__29674;
var map__29675__$1 = (((((!((map__29675 == null))))?(((((map__29675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29675):map__29675);
var on_compile_warning = cljs.core.get.call(null,map__29675__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29675__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29675,map__29675__$1,on_compile_warning,on_compile_fail){
return (function (p__29677){
var vec__29678 = p__29677;
var seq__29679 = cljs.core.seq.call(null,vec__29678);
var first__29680 = cljs.core.first.call(null,seq__29679);
var seq__29679__$1 = cljs.core.next.call(null,seq__29679);
var map__29681 = first__29680;
var map__29681__$1 = (((((!((map__29681 == null))))?(((((map__29681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29681):map__29681);
var msg = map__29681__$1;
var msg_name = cljs.core.get.call(null,map__29681__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29679__$1;
var pred__29683 = cljs.core._EQ_;
var expr__29684 = msg_name;
if(cljs.core.truth_(pred__29683.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29684))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29683.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29684))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29675,map__29675__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25780__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto__,msg_hist,msg_names,msg){
return (function (state_29773){
var state_val_29774 = (state_29773[(1)]);
if((state_val_29774 === (7))){
var inst_29693 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
if(cljs.core.truth_(inst_29693)){
var statearr_29775_29822 = state_29773__$1;
(statearr_29775_29822[(1)] = (8));

} else {
var statearr_29776_29823 = state_29773__$1;
(statearr_29776_29823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (20))){
var inst_29767 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29777_29824 = state_29773__$1;
(statearr_29777_29824[(2)] = inst_29767);

(statearr_29777_29824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (27))){
var inst_29763 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29778_29825 = state_29773__$1;
(statearr_29778_29825[(2)] = inst_29763);

(statearr_29778_29825[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (1))){
var inst_29686 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29773__$1 = state_29773;
if(cljs.core.truth_(inst_29686)){
var statearr_29779_29826 = state_29773__$1;
(statearr_29779_29826[(1)] = (2));

} else {
var statearr_29780_29827 = state_29773__$1;
(statearr_29780_29827[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (24))){
var inst_29765 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29781_29828 = state_29773__$1;
(statearr_29781_29828[(2)] = inst_29765);

(statearr_29781_29828[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (4))){
var inst_29771 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29773__$1,inst_29771);
} else {
if((state_val_29774 === (15))){
var inst_29769 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29782_29829 = state_29773__$1;
(statearr_29782_29829[(2)] = inst_29769);

(statearr_29782_29829[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (21))){
var inst_29722 = (state_29773[(2)]);
var inst_29723 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29724 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29723);
var state_29773__$1 = (function (){var statearr_29783 = state_29773;
(statearr_29783[(7)] = inst_29722);

return statearr_29783;
})();
var statearr_29784_29830 = state_29773__$1;
(statearr_29784_29830[(2)] = inst_29724);

(statearr_29784_29830[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (31))){
var inst_29752 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29773__$1 = state_29773;
if(inst_29752){
var statearr_29785_29831 = state_29773__$1;
(statearr_29785_29831[(1)] = (34));

} else {
var statearr_29786_29832 = state_29773__$1;
(statearr_29786_29832[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (32))){
var inst_29761 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29787_29833 = state_29773__$1;
(statearr_29787_29833[(2)] = inst_29761);

(statearr_29787_29833[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (33))){
var inst_29748 = (state_29773[(2)]);
var inst_29749 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29750 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29749);
var state_29773__$1 = (function (){var statearr_29788 = state_29773;
(statearr_29788[(8)] = inst_29748);

return statearr_29788;
})();
var statearr_29789_29834 = state_29773__$1;
(statearr_29789_29834[(2)] = inst_29750);

(statearr_29789_29834[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (13))){
var inst_29707 = figwheel.client.heads_up.clear.call(null);
var state_29773__$1 = state_29773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(16),inst_29707);
} else {
if((state_val_29774 === (22))){
var inst_29728 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29729 = figwheel.client.heads_up.append_warning_message.call(null,inst_29728);
var state_29773__$1 = state_29773;
var statearr_29790_29835 = state_29773__$1;
(statearr_29790_29835[(2)] = inst_29729);

(statearr_29790_29835[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (36))){
var inst_29759 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29791_29836 = state_29773__$1;
(statearr_29791_29836[(2)] = inst_29759);

(statearr_29791_29836[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (29))){
var inst_29739 = (state_29773[(2)]);
var inst_29740 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29741 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29740);
var state_29773__$1 = (function (){var statearr_29792 = state_29773;
(statearr_29792[(9)] = inst_29739);

return statearr_29792;
})();
var statearr_29793_29837 = state_29773__$1;
(statearr_29793_29837[(2)] = inst_29741);

(statearr_29793_29837[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (6))){
var inst_29688 = (state_29773[(10)]);
var state_29773__$1 = state_29773;
var statearr_29794_29838 = state_29773__$1;
(statearr_29794_29838[(2)] = inst_29688);

(statearr_29794_29838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (28))){
var inst_29735 = (state_29773[(2)]);
var inst_29736 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29737 = figwheel.client.heads_up.display_warning.call(null,inst_29736);
var state_29773__$1 = (function (){var statearr_29795 = state_29773;
(statearr_29795[(11)] = inst_29735);

return statearr_29795;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(29),inst_29737);
} else {
if((state_val_29774 === (25))){
var inst_29733 = figwheel.client.heads_up.clear.call(null);
var state_29773__$1 = state_29773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(28),inst_29733);
} else {
if((state_val_29774 === (34))){
var inst_29754 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29773__$1 = state_29773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(37),inst_29754);
} else {
if((state_val_29774 === (17))){
var inst_29713 = (state_29773[(2)]);
var inst_29714 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29715 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29714);
var state_29773__$1 = (function (){var statearr_29796 = state_29773;
(statearr_29796[(12)] = inst_29713);

return statearr_29796;
})();
var statearr_29797_29839 = state_29773__$1;
(statearr_29797_29839[(2)] = inst_29715);

(statearr_29797_29839[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (3))){
var inst_29705 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29773__$1 = state_29773;
if(inst_29705){
var statearr_29798_29840 = state_29773__$1;
(statearr_29798_29840[(1)] = (13));

} else {
var statearr_29799_29841 = state_29773__$1;
(statearr_29799_29841[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (12))){
var inst_29701 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29800_29842 = state_29773__$1;
(statearr_29800_29842[(2)] = inst_29701);

(statearr_29800_29842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (2))){
var inst_29688 = (state_29773[(10)]);
var inst_29688__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29773__$1 = (function (){var statearr_29801 = state_29773;
(statearr_29801[(10)] = inst_29688__$1);

return statearr_29801;
})();
if(cljs.core.truth_(inst_29688__$1)){
var statearr_29802_29843 = state_29773__$1;
(statearr_29802_29843[(1)] = (5));

} else {
var statearr_29803_29844 = state_29773__$1;
(statearr_29803_29844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (23))){
var inst_29731 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29773__$1 = state_29773;
if(inst_29731){
var statearr_29804_29845 = state_29773__$1;
(statearr_29804_29845[(1)] = (25));

} else {
var statearr_29805_29846 = state_29773__$1;
(statearr_29805_29846[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (35))){
var state_29773__$1 = state_29773;
var statearr_29806_29847 = state_29773__$1;
(statearr_29806_29847[(2)] = null);

(statearr_29806_29847[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (19))){
var inst_29726 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29773__$1 = state_29773;
if(inst_29726){
var statearr_29807_29848 = state_29773__$1;
(statearr_29807_29848[(1)] = (22));

} else {
var statearr_29808_29849 = state_29773__$1;
(statearr_29808_29849[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (11))){
var inst_29697 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29809_29850 = state_29773__$1;
(statearr_29809_29850[(2)] = inst_29697);

(statearr_29809_29850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (9))){
var inst_29699 = figwheel.client.heads_up.clear.call(null);
var state_29773__$1 = state_29773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(12),inst_29699);
} else {
if((state_val_29774 === (5))){
var inst_29690 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29773__$1 = state_29773;
var statearr_29810_29851 = state_29773__$1;
(statearr_29810_29851[(2)] = inst_29690);

(statearr_29810_29851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (14))){
var inst_29717 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29773__$1 = state_29773;
if(inst_29717){
var statearr_29811_29852 = state_29773__$1;
(statearr_29811_29852[(1)] = (18));

} else {
var statearr_29812_29853 = state_29773__$1;
(statearr_29812_29853[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (26))){
var inst_29743 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29773__$1 = state_29773;
if(inst_29743){
var statearr_29813_29854 = state_29773__$1;
(statearr_29813_29854[(1)] = (30));

} else {
var statearr_29814_29855 = state_29773__$1;
(statearr_29814_29855[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (16))){
var inst_29709 = (state_29773[(2)]);
var inst_29710 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29711 = figwheel.client.heads_up.display_exception.call(null,inst_29710);
var state_29773__$1 = (function (){var statearr_29815 = state_29773;
(statearr_29815[(13)] = inst_29709);

return statearr_29815;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(17),inst_29711);
} else {
if((state_val_29774 === (30))){
var inst_29745 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29746 = figwheel.client.heads_up.display_warning.call(null,inst_29745);
var state_29773__$1 = state_29773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(33),inst_29746);
} else {
if((state_val_29774 === (10))){
var inst_29703 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29816_29856 = state_29773__$1;
(statearr_29816_29856[(2)] = inst_29703);

(statearr_29816_29856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (18))){
var inst_29719 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29720 = figwheel.client.heads_up.display_exception.call(null,inst_29719);
var state_29773__$1 = state_29773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(21),inst_29720);
} else {
if((state_val_29774 === (37))){
var inst_29756 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29817_29857 = state_29773__$1;
(statearr_29817_29857[(2)] = inst_29756);

(statearr_29817_29857[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (8))){
var inst_29695 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29773__$1 = state_29773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(11),inst_29695);
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
});})(c__25780__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25685__auto__,c__25780__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25686__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25686__auto____0 = (function (){
var statearr_29818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29818[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25686__auto__);

(statearr_29818[(1)] = (1));

return statearr_29818;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25686__auto____1 = (function (state_29773){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_29773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e29819){if((e29819 instanceof Object)){
var ex__25689__auto__ = e29819;
var statearr_29820_29858 = state_29773;
(statearr_29820_29858[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29859 = state_29773;
state_29773 = G__29859;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25686__auto__ = function(state_29773){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25686__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25686__auto____1.call(this,state_29773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25686__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25686__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto__,msg_hist,msg_names,msg))
})();
var state__25782__auto__ = (function (){var statearr_29821 = f__25781__auto__.call(null);
(statearr_29821[(6)] = c__25780__auto__);

return statearr_29821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto__,msg_hist,msg_names,msg))
);

return c__25780__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25780__auto___29888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto___29888,ch){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto___29888,ch){
return (function (state_29874){
var state_val_29875 = (state_29874[(1)]);
if((state_val_29875 === (1))){
var state_29874__$1 = state_29874;
var statearr_29876_29889 = state_29874__$1;
(statearr_29876_29889[(2)] = null);

(statearr_29876_29889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (2))){
var state_29874__$1 = state_29874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29874__$1,(4),ch);
} else {
if((state_val_29875 === (3))){
var inst_29872 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29874__$1,inst_29872);
} else {
if((state_val_29875 === (4))){
var inst_29862 = (state_29874[(7)]);
var inst_29862__$1 = (state_29874[(2)]);
var state_29874__$1 = (function (){var statearr_29877 = state_29874;
(statearr_29877[(7)] = inst_29862__$1);

return statearr_29877;
})();
if(cljs.core.truth_(inst_29862__$1)){
var statearr_29878_29890 = state_29874__$1;
(statearr_29878_29890[(1)] = (5));

} else {
var statearr_29879_29891 = state_29874__$1;
(statearr_29879_29891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (5))){
var inst_29862 = (state_29874[(7)]);
var inst_29864 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29862);
var state_29874__$1 = state_29874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29874__$1,(8),inst_29864);
} else {
if((state_val_29875 === (6))){
var state_29874__$1 = state_29874;
var statearr_29880_29892 = state_29874__$1;
(statearr_29880_29892[(2)] = null);

(statearr_29880_29892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (7))){
var inst_29870 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
var statearr_29881_29893 = state_29874__$1;
(statearr_29881_29893[(2)] = inst_29870);

(statearr_29881_29893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (8))){
var inst_29866 = (state_29874[(2)]);
var state_29874__$1 = (function (){var statearr_29882 = state_29874;
(statearr_29882[(8)] = inst_29866);

return statearr_29882;
})();
var statearr_29883_29894 = state_29874__$1;
(statearr_29883_29894[(2)] = null);

(statearr_29883_29894[(1)] = (2));


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
});})(c__25780__auto___29888,ch))
;
return ((function (switch__25685__auto__,c__25780__auto___29888,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25686__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25686__auto____0 = (function (){
var statearr_29884 = [null,null,null,null,null,null,null,null,null];
(statearr_29884[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25686__auto__);

(statearr_29884[(1)] = (1));

return statearr_29884;
});
var figwheel$client$heads_up_plugin_$_state_machine__25686__auto____1 = (function (state_29874){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_29874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e29885){if((e29885 instanceof Object)){
var ex__25689__auto__ = e29885;
var statearr_29886_29895 = state_29874;
(statearr_29886_29895[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29896 = state_29874;
state_29874 = G__29896;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25686__auto__ = function(state_29874){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25686__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25686__auto____1.call(this,state_29874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25686__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25686__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto___29888,ch))
})();
var state__25782__auto__ = (function (){var statearr_29887 = f__25781__auto__.call(null);
(statearr_29887[(6)] = c__25780__auto___29888);

return statearr_29887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto___29888,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25780__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto__){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto__){
return (function (state_29902){
var state_val_29903 = (state_29902[(1)]);
if((state_val_29903 === (1))){
var inst_29897 = cljs.core.async.timeout.call(null,(3000));
var state_29902__$1 = state_29902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29902__$1,(2),inst_29897);
} else {
if((state_val_29903 === (2))){
var inst_29899 = (state_29902[(2)]);
var inst_29900 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29902__$1 = (function (){var statearr_29904 = state_29902;
(statearr_29904[(7)] = inst_29899);

return statearr_29904;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29902__$1,inst_29900);
} else {
return null;
}
}
});})(c__25780__auto__))
;
return ((function (switch__25685__auto__,c__25780__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25686__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25686__auto____0 = (function (){
var statearr_29905 = [null,null,null,null,null,null,null,null];
(statearr_29905[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25686__auto__);

(statearr_29905[(1)] = (1));

return statearr_29905;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25686__auto____1 = (function (state_29902){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_29902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e29906){if((e29906 instanceof Object)){
var ex__25689__auto__ = e29906;
var statearr_29907_29909 = state_29902;
(statearr_29907_29909[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29910 = state_29902;
state_29902 = G__29910;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25686__auto__ = function(state_29902){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25686__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25686__auto____1.call(this,state_29902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25686__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25686__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto__))
})();
var state__25782__auto__ = (function (){var statearr_29908 = f__25781__auto__.call(null);
(statearr_29908[(6)] = c__25780__auto__);

return statearr_29908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto__))
);

return c__25780__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25780__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto__,figwheel_version,temp__5457__auto__){
return (function (state_29917){
var state_val_29918 = (state_29917[(1)]);
if((state_val_29918 === (1))){
var inst_29911 = cljs.core.async.timeout.call(null,(2000));
var state_29917__$1 = state_29917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29917__$1,(2),inst_29911);
} else {
if((state_val_29918 === (2))){
var inst_29913 = (state_29917[(2)]);
var inst_29914 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29915 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29914);
var state_29917__$1 = (function (){var statearr_29919 = state_29917;
(statearr_29919[(7)] = inst_29913);

return statearr_29919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29917__$1,inst_29915);
} else {
return null;
}
}
});})(c__25780__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__25685__auto__,c__25780__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25686__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25686__auto____0 = (function (){
var statearr_29920 = [null,null,null,null,null,null,null,null];
(statearr_29920[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25686__auto__);

(statearr_29920[(1)] = (1));

return statearr_29920;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25686__auto____1 = (function (state_29917){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_29917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e29921){if((e29921 instanceof Object)){
var ex__25689__auto__ = e29921;
var statearr_29922_29924 = state_29917;
(statearr_29922_29924[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29925 = state_29917;
state_29917 = G__29925;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25686__auto__ = function(state_29917){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25686__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25686__auto____1.call(this,state_29917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25686__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25686__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto__,figwheel_version,temp__5457__auto__))
})();
var state__25782__auto__ = (function (){var statearr_29923 = f__25781__auto__.call(null);
(statearr_29923[(6)] = c__25780__auto__);

return statearr_29923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto__,figwheel_version,temp__5457__auto__))
);

return c__25780__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29926){
var map__29927 = p__29926;
var map__29927__$1 = (((((!((map__29927 == null))))?(((((map__29927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29927):map__29927);
var file = cljs.core.get.call(null,map__29927__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29927__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29927__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29929 = "";
var G__29929__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29929),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29929);
var G__29929__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29929__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29929__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29929__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29929__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29930){
var map__29931 = p__29930;
var map__29931__$1 = (((((!((map__29931 == null))))?(((((map__29931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29931):map__29931);
var ed = map__29931__$1;
var formatted_exception = cljs.core.get.call(null,map__29931__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29931__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29931__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29933_29937 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29934_29938 = null;
var count__29935_29939 = (0);
var i__29936_29940 = (0);
while(true){
if((i__29936_29940 < count__29935_29939)){
var msg_29941 = cljs.core._nth.call(null,chunk__29934_29938,i__29936_29940);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29941);


var G__29942 = seq__29933_29937;
var G__29943 = chunk__29934_29938;
var G__29944 = count__29935_29939;
var G__29945 = (i__29936_29940 + (1));
seq__29933_29937 = G__29942;
chunk__29934_29938 = G__29943;
count__29935_29939 = G__29944;
i__29936_29940 = G__29945;
continue;
} else {
var temp__5457__auto___29946 = cljs.core.seq.call(null,seq__29933_29937);
if(temp__5457__auto___29946){
var seq__29933_29947__$1 = temp__5457__auto___29946;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29933_29947__$1)){
var c__4461__auto___29948 = cljs.core.chunk_first.call(null,seq__29933_29947__$1);
var G__29949 = cljs.core.chunk_rest.call(null,seq__29933_29947__$1);
var G__29950 = c__4461__auto___29948;
var G__29951 = cljs.core.count.call(null,c__4461__auto___29948);
var G__29952 = (0);
seq__29933_29937 = G__29949;
chunk__29934_29938 = G__29950;
count__29935_29939 = G__29951;
i__29936_29940 = G__29952;
continue;
} else {
var msg_29953 = cljs.core.first.call(null,seq__29933_29947__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29953);


var G__29954 = cljs.core.next.call(null,seq__29933_29947__$1);
var G__29955 = null;
var G__29956 = (0);
var G__29957 = (0);
seq__29933_29937 = G__29954;
chunk__29934_29938 = G__29955;
count__29935_29939 = G__29956;
i__29936_29940 = G__29957;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29958){
var map__29959 = p__29958;
var map__29959__$1 = (((((!((map__29959 == null))))?(((((map__29959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29959):map__29959);
var w = map__29959__$1;
var message = cljs.core.get.call(null,map__29959__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,364,364,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,356,356,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29961 = cljs.core.seq.call(null,plugins);
var chunk__29962 = null;
var count__29963 = (0);
var i__29964 = (0);
while(true){
if((i__29964 < count__29963)){
var vec__29965 = cljs.core._nth.call(null,chunk__29962,i__29964);
var k = cljs.core.nth.call(null,vec__29965,(0),null);
var plugin = cljs.core.nth.call(null,vec__29965,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29971 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29961,chunk__29962,count__29963,i__29964,pl_29971,vec__29965,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29971.call(null,msg_hist);
});})(seq__29961,chunk__29962,count__29963,i__29964,pl_29971,vec__29965,k,plugin))
);
} else {
}


var G__29972 = seq__29961;
var G__29973 = chunk__29962;
var G__29974 = count__29963;
var G__29975 = (i__29964 + (1));
seq__29961 = G__29972;
chunk__29962 = G__29973;
count__29963 = G__29974;
i__29964 = G__29975;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29961);
if(temp__5457__auto__){
var seq__29961__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29961__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29961__$1);
var G__29976 = cljs.core.chunk_rest.call(null,seq__29961__$1);
var G__29977 = c__4461__auto__;
var G__29978 = cljs.core.count.call(null,c__4461__auto__);
var G__29979 = (0);
seq__29961 = G__29976;
chunk__29962 = G__29977;
count__29963 = G__29978;
i__29964 = G__29979;
continue;
} else {
var vec__29968 = cljs.core.first.call(null,seq__29961__$1);
var k = cljs.core.nth.call(null,vec__29968,(0),null);
var plugin = cljs.core.nth.call(null,vec__29968,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29980 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29961,chunk__29962,count__29963,i__29964,pl_29980,vec__29968,k,plugin,seq__29961__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29980.call(null,msg_hist);
});})(seq__29961,chunk__29962,count__29963,i__29964,pl_29980,vec__29968,k,plugin,seq__29961__$1,temp__5457__auto__))
);
} else {
}


var G__29981 = cljs.core.next.call(null,seq__29961__$1);
var G__29982 = null;
var G__29983 = (0);
var G__29984 = (0);
seq__29961 = G__29981;
chunk__29962 = G__29982;
count__29963 = G__29983;
i__29964 = G__29984;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__29986 = arguments.length;
switch (G__29986) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__29987_29992 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29988_29993 = null;
var count__29989_29994 = (0);
var i__29990_29995 = (0);
while(true){
if((i__29990_29995 < count__29989_29994)){
var msg_29996 = cljs.core._nth.call(null,chunk__29988_29993,i__29990_29995);
figwheel.client.socket.handle_incoming_message.call(null,msg_29996);


var G__29997 = seq__29987_29992;
var G__29998 = chunk__29988_29993;
var G__29999 = count__29989_29994;
var G__30000 = (i__29990_29995 + (1));
seq__29987_29992 = G__29997;
chunk__29988_29993 = G__29998;
count__29989_29994 = G__29999;
i__29990_29995 = G__30000;
continue;
} else {
var temp__5457__auto___30001 = cljs.core.seq.call(null,seq__29987_29992);
if(temp__5457__auto___30001){
var seq__29987_30002__$1 = temp__5457__auto___30001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29987_30002__$1)){
var c__4461__auto___30003 = cljs.core.chunk_first.call(null,seq__29987_30002__$1);
var G__30004 = cljs.core.chunk_rest.call(null,seq__29987_30002__$1);
var G__30005 = c__4461__auto___30003;
var G__30006 = cljs.core.count.call(null,c__4461__auto___30003);
var G__30007 = (0);
seq__29987_29992 = G__30004;
chunk__29988_29993 = G__30005;
count__29989_29994 = G__30006;
i__29990_29995 = G__30007;
continue;
} else {
var msg_30008 = cljs.core.first.call(null,seq__29987_30002__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30008);


var G__30009 = cljs.core.next.call(null,seq__29987_30002__$1);
var G__30010 = null;
var G__30011 = (0);
var G__30012 = (0);
seq__29987_29992 = G__30009;
chunk__29988_29993 = G__30010;
count__29989_29994 = G__30011;
i__29990_29995 = G__30012;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30017 = arguments.length;
var i__4642__auto___30018 = (0);
while(true){
if((i__4642__auto___30018 < len__4641__auto___30017)){
args__4647__auto__.push((arguments[i__4642__auto___30018]));

var G__30019 = (i__4642__auto___30018 + (1));
i__4642__auto___30018 = G__30019;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30014){
var map__30015 = p__30014;
var map__30015__$1 = (((((!((map__30015 == null))))?(((((map__30015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30015):map__30015);
var opts = map__30015__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30013){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30013));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30020){if((e30020 instanceof Error)){
var e = e30020;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30020;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30021){
var map__30022 = p__30021;
var map__30022__$1 = (((((!((map__30022 == null))))?(((((map__30022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30022):map__30022);
var msg_name = cljs.core.get.call(null,map__30022__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1542520743382
