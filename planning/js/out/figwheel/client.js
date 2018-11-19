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
}catch (e34517){if((e34517 instanceof Error)){
var e = e34517;
return "Error: Unable to stringify";
} else {
throw e34517;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__34520 = arguments.length;
switch (G__34520) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__34518_SHARP_){
if(typeof p1__34518_SHARP_ === 'string'){
return p1__34518_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__34518_SHARP_);
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
var len__4641__auto___34523 = arguments.length;
var i__4642__auto___34524 = (0);
while(true){
if((i__4642__auto___34524 < len__4641__auto___34523)){
args__4647__auto__.push((arguments[i__4642__auto___34524]));

var G__34525 = (i__4642__auto___34524 + (1));
i__4642__auto___34524 = G__34525;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34522){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34522));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___34527 = arguments.length;
var i__4642__auto___34528 = (0);
while(true){
if((i__4642__auto___34528 < len__4641__auto___34527)){
args__4647__auto__.push((arguments[i__4642__auto___34528]));

var G__34529 = (i__4642__auto___34528 + (1));
i__4642__auto___34528 = G__34529;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34526){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34526));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34530){
var map__34531 = p__34530;
var map__34531__$1 = (((((!((map__34531 == null))))?(((((map__34531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34531):map__34531);
var message = cljs.core.get.call(null,map__34531__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34531__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__30672__auto___34610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30672__auto___34610,ch){
return (function (){
var f__30673__auto__ = (function (){var switch__30649__auto__ = ((function (c__30672__auto___34610,ch){
return (function (state_34582){
var state_val_34583 = (state_34582[(1)]);
if((state_val_34583 === (7))){
var inst_34578 = (state_34582[(2)]);
var state_34582__$1 = state_34582;
var statearr_34584_34611 = state_34582__$1;
(statearr_34584_34611[(2)] = inst_34578);

(statearr_34584_34611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (1))){
var state_34582__$1 = state_34582;
var statearr_34585_34612 = state_34582__$1;
(statearr_34585_34612[(2)] = null);

(statearr_34585_34612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (4))){
var inst_34535 = (state_34582[(7)]);
var inst_34535__$1 = (state_34582[(2)]);
var state_34582__$1 = (function (){var statearr_34586 = state_34582;
(statearr_34586[(7)] = inst_34535__$1);

return statearr_34586;
})();
if(cljs.core.truth_(inst_34535__$1)){
var statearr_34587_34613 = state_34582__$1;
(statearr_34587_34613[(1)] = (5));

} else {
var statearr_34588_34614 = state_34582__$1;
(statearr_34588_34614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (15))){
var inst_34542 = (state_34582[(8)]);
var inst_34557 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34542);
var inst_34558 = cljs.core.first.call(null,inst_34557);
var inst_34559 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34558);
var inst_34560 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34559)].join('');
var inst_34561 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34560);
var state_34582__$1 = state_34582;
var statearr_34589_34615 = state_34582__$1;
(statearr_34589_34615[(2)] = inst_34561);

(statearr_34589_34615[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (13))){
var inst_34566 = (state_34582[(2)]);
var state_34582__$1 = state_34582;
var statearr_34590_34616 = state_34582__$1;
(statearr_34590_34616[(2)] = inst_34566);

(statearr_34590_34616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (6))){
var state_34582__$1 = state_34582;
var statearr_34591_34617 = state_34582__$1;
(statearr_34591_34617[(2)] = null);

(statearr_34591_34617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (17))){
var inst_34564 = (state_34582[(2)]);
var state_34582__$1 = state_34582;
var statearr_34592_34618 = state_34582__$1;
(statearr_34592_34618[(2)] = inst_34564);

(statearr_34592_34618[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (3))){
var inst_34580 = (state_34582[(2)]);
var state_34582__$1 = state_34582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34582__$1,inst_34580);
} else {
if((state_val_34583 === (12))){
var inst_34541 = (state_34582[(9)]);
var inst_34555 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34541,opts);
var state_34582__$1 = state_34582;
if(inst_34555){
var statearr_34593_34619 = state_34582__$1;
(statearr_34593_34619[(1)] = (15));

} else {
var statearr_34594_34620 = state_34582__$1;
(statearr_34594_34620[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (2))){
var state_34582__$1 = state_34582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34582__$1,(4),ch);
} else {
if((state_val_34583 === (11))){
var inst_34542 = (state_34582[(8)]);
var inst_34547 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34548 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34542);
var inst_34549 = cljs.core.async.timeout.call(null,(1000));
var inst_34550 = [inst_34548,inst_34549];
var inst_34551 = (new cljs.core.PersistentVector(null,2,(5),inst_34547,inst_34550,null));
var state_34582__$1 = state_34582;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34582__$1,(14),inst_34551);
} else {
if((state_val_34583 === (9))){
var inst_34542 = (state_34582[(8)]);
var inst_34568 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34569 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34542);
var inst_34570 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34569);
var inst_34571 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34570)].join('');
var inst_34572 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34571);
var state_34582__$1 = (function (){var statearr_34595 = state_34582;
(statearr_34595[(10)] = inst_34568);

return statearr_34595;
})();
var statearr_34596_34621 = state_34582__$1;
(statearr_34596_34621[(2)] = inst_34572);

(statearr_34596_34621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (5))){
var inst_34535 = (state_34582[(7)]);
var inst_34537 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34538 = (new cljs.core.PersistentArrayMap(null,2,inst_34537,null));
var inst_34539 = (new cljs.core.PersistentHashSet(null,inst_34538,null));
var inst_34540 = figwheel.client.focus_msgs.call(null,inst_34539,inst_34535);
var inst_34541 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34540);
var inst_34542 = cljs.core.first.call(null,inst_34540);
var inst_34543 = figwheel.client.autoload_QMARK_.call(null);
var state_34582__$1 = (function (){var statearr_34597 = state_34582;
(statearr_34597[(8)] = inst_34542);

(statearr_34597[(9)] = inst_34541);

return statearr_34597;
})();
if(cljs.core.truth_(inst_34543)){
var statearr_34598_34622 = state_34582__$1;
(statearr_34598_34622[(1)] = (8));

} else {
var statearr_34599_34623 = state_34582__$1;
(statearr_34599_34623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (14))){
var inst_34553 = (state_34582[(2)]);
var state_34582__$1 = state_34582;
var statearr_34600_34624 = state_34582__$1;
(statearr_34600_34624[(2)] = inst_34553);

(statearr_34600_34624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (16))){
var state_34582__$1 = state_34582;
var statearr_34601_34625 = state_34582__$1;
(statearr_34601_34625[(2)] = null);

(statearr_34601_34625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (10))){
var inst_34574 = (state_34582[(2)]);
var state_34582__$1 = (function (){var statearr_34602 = state_34582;
(statearr_34602[(11)] = inst_34574);

return statearr_34602;
})();
var statearr_34603_34626 = state_34582__$1;
(statearr_34603_34626[(2)] = null);

(statearr_34603_34626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (8))){
var inst_34541 = (state_34582[(9)]);
var inst_34545 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34541,opts);
var state_34582__$1 = state_34582;
if(cljs.core.truth_(inst_34545)){
var statearr_34604_34627 = state_34582__$1;
(statearr_34604_34627[(1)] = (11));

} else {
var statearr_34605_34628 = state_34582__$1;
(statearr_34605_34628[(1)] = (12));

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
});})(c__30672__auto___34610,ch))
;
return ((function (switch__30649__auto__,c__30672__auto___34610,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30650__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30650__auto____0 = (function (){
var statearr_34606 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34606[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30650__auto__);

(statearr_34606[(1)] = (1));

return statearr_34606;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30650__auto____1 = (function (state_34582){
while(true){
var ret_value__30651__auto__ = (function (){try{while(true){
var result__30652__auto__ = switch__30649__auto__.call(null,state_34582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30652__auto__;
}
break;
}
}catch (e34607){if((e34607 instanceof Object)){
var ex__30653__auto__ = e34607;
var statearr_34608_34629 = state_34582;
(statearr_34608_34629[(5)] = ex__30653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34630 = state_34582;
state_34582 = G__34630;
continue;
} else {
return ret_value__30651__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30650__auto__ = function(state_34582){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30650__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30650__auto____1.call(this,state_34582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__30650__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30650__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30650__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30650__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30650__auto__;
})()
;})(switch__30649__auto__,c__30672__auto___34610,ch))
})();
var state__30674__auto__ = (function (){var statearr_34609 = f__30673__auto__.call(null);
(statearr_34609[(6)] = c__30672__auto___34610);

return statearr_34609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30674__auto__);
});})(c__30672__auto___34610,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34631_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34631_SHARP_));
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
var base_path_34637 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34637){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34633 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34634 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34635 = true;
var _STAR_print_fn_STAR__temp_val__34636 = ((function (_STAR_print_newline_STAR__orig_val__34633,_STAR_print_fn_STAR__orig_val__34634,_STAR_print_newline_STAR__temp_val__34635,sb,base_path_34637){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__34633,_STAR_print_fn_STAR__orig_val__34634,_STAR_print_newline_STAR__temp_val__34635,sb,base_path_34637))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34635;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34636;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34634;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34633;
}}catch (e34632){if((e34632 instanceof Error)){
var e = e34632;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34637], null));
} else {
var e = e34632;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34637))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34638){
var map__34639 = p__34638;
var map__34639__$1 = (((((!((map__34639 == null))))?(((((map__34639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34639):map__34639);
var opts = map__34639__$1;
var build_id = cljs.core.get.call(null,map__34639__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34639,map__34639__$1,opts,build_id){
return (function (p__34641){
var vec__34642 = p__34641;
var seq__34643 = cljs.core.seq.call(null,vec__34642);
var first__34644 = cljs.core.first.call(null,seq__34643);
var seq__34643__$1 = cljs.core.next.call(null,seq__34643);
var map__34645 = first__34644;
var map__34645__$1 = (((((!((map__34645 == null))))?(((((map__34645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34645):map__34645);
var msg = map__34645__$1;
var msg_name = cljs.core.get.call(null,map__34645__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34643__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34642,seq__34643,first__34644,seq__34643__$1,map__34645,map__34645__$1,msg,msg_name,_,map__34639,map__34639__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34642,seq__34643,first__34644,seq__34643__$1,map__34645,map__34645__$1,msg,msg_name,_,map__34639,map__34639__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34639,map__34639__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34647){
var vec__34648 = p__34647;
var seq__34649 = cljs.core.seq.call(null,vec__34648);
var first__34650 = cljs.core.first.call(null,seq__34649);
var seq__34649__$1 = cljs.core.next.call(null,seq__34649);
var map__34651 = first__34650;
var map__34651__$1 = (((((!((map__34651 == null))))?(((((map__34651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34651):map__34651);
var msg = map__34651__$1;
var msg_name = cljs.core.get.call(null,map__34651__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34649__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34653){
var map__34654 = p__34653;
var map__34654__$1 = (((((!((map__34654 == null))))?(((((map__34654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34654):map__34654);
var on_compile_warning = cljs.core.get.call(null,map__34654__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34654__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34654,map__34654__$1,on_compile_warning,on_compile_fail){
return (function (p__34656){
var vec__34657 = p__34656;
var seq__34658 = cljs.core.seq.call(null,vec__34657);
var first__34659 = cljs.core.first.call(null,seq__34658);
var seq__34658__$1 = cljs.core.next.call(null,seq__34658);
var map__34660 = first__34659;
var map__34660__$1 = (((((!((map__34660 == null))))?(((((map__34660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34660):map__34660);
var msg = map__34660__$1;
var msg_name = cljs.core.get.call(null,map__34660__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34658__$1;
var pred__34662 = cljs.core._EQ_;
var expr__34663 = msg_name;
if(cljs.core.truth_(pred__34662.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34663))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34662.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34663))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34654,map__34654__$1,on_compile_warning,on_compile_fail))
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
var c__30672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30672__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30673__auto__ = (function (){var switch__30649__auto__ = ((function (c__30672__auto__,msg_hist,msg_names,msg){
return (function (state_34752){
var state_val_34753 = (state_34752[(1)]);
if((state_val_34753 === (7))){
var inst_34672 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
if(cljs.core.truth_(inst_34672)){
var statearr_34754_34801 = state_34752__$1;
(statearr_34754_34801[(1)] = (8));

} else {
var statearr_34755_34802 = state_34752__$1;
(statearr_34755_34802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (20))){
var inst_34746 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
var statearr_34756_34803 = state_34752__$1;
(statearr_34756_34803[(2)] = inst_34746);

(statearr_34756_34803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (27))){
var inst_34742 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
var statearr_34757_34804 = state_34752__$1;
(statearr_34757_34804[(2)] = inst_34742);

(statearr_34757_34804[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (1))){
var inst_34665 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34752__$1 = state_34752;
if(cljs.core.truth_(inst_34665)){
var statearr_34758_34805 = state_34752__$1;
(statearr_34758_34805[(1)] = (2));

} else {
var statearr_34759_34806 = state_34752__$1;
(statearr_34759_34806[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (24))){
var inst_34744 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
var statearr_34760_34807 = state_34752__$1;
(statearr_34760_34807[(2)] = inst_34744);

(statearr_34760_34807[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (4))){
var inst_34750 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34752__$1,inst_34750);
} else {
if((state_val_34753 === (15))){
var inst_34748 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
var statearr_34761_34808 = state_34752__$1;
(statearr_34761_34808[(2)] = inst_34748);

(statearr_34761_34808[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (21))){
var inst_34701 = (state_34752[(2)]);
var inst_34702 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34703 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34702);
var state_34752__$1 = (function (){var statearr_34762 = state_34752;
(statearr_34762[(7)] = inst_34701);

return statearr_34762;
})();
var statearr_34763_34809 = state_34752__$1;
(statearr_34763_34809[(2)] = inst_34703);

(statearr_34763_34809[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (31))){
var inst_34731 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34752__$1 = state_34752;
if(inst_34731){
var statearr_34764_34810 = state_34752__$1;
(statearr_34764_34810[(1)] = (34));

} else {
var statearr_34765_34811 = state_34752__$1;
(statearr_34765_34811[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (32))){
var inst_34740 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
var statearr_34766_34812 = state_34752__$1;
(statearr_34766_34812[(2)] = inst_34740);

(statearr_34766_34812[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (33))){
var inst_34727 = (state_34752[(2)]);
var inst_34728 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34729 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34728);
var state_34752__$1 = (function (){var statearr_34767 = state_34752;
(statearr_34767[(8)] = inst_34727);

return statearr_34767;
})();
var statearr_34768_34813 = state_34752__$1;
(statearr_34768_34813[(2)] = inst_34729);

(statearr_34768_34813[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (13))){
var inst_34686 = figwheel.client.heads_up.clear.call(null);
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34752__$1,(16),inst_34686);
} else {
if((state_val_34753 === (22))){
var inst_34707 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34708 = figwheel.client.heads_up.append_warning_message.call(null,inst_34707);
var state_34752__$1 = state_34752;
var statearr_34769_34814 = state_34752__$1;
(statearr_34769_34814[(2)] = inst_34708);

(statearr_34769_34814[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (36))){
var inst_34738 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
var statearr_34770_34815 = state_34752__$1;
(statearr_34770_34815[(2)] = inst_34738);

(statearr_34770_34815[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (29))){
var inst_34718 = (state_34752[(2)]);
var inst_34719 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34720 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34719);
var state_34752__$1 = (function (){var statearr_34771 = state_34752;
(statearr_34771[(9)] = inst_34718);

return statearr_34771;
})();
var statearr_34772_34816 = state_34752__$1;
(statearr_34772_34816[(2)] = inst_34720);

(statearr_34772_34816[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (6))){
var inst_34667 = (state_34752[(10)]);
var state_34752__$1 = state_34752;
var statearr_34773_34817 = state_34752__$1;
(statearr_34773_34817[(2)] = inst_34667);

(statearr_34773_34817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (28))){
var inst_34714 = (state_34752[(2)]);
var inst_34715 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34716 = figwheel.client.heads_up.display_warning.call(null,inst_34715);
var state_34752__$1 = (function (){var statearr_34774 = state_34752;
(statearr_34774[(11)] = inst_34714);

return statearr_34774;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34752__$1,(29),inst_34716);
} else {
if((state_val_34753 === (25))){
var inst_34712 = figwheel.client.heads_up.clear.call(null);
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34752__$1,(28),inst_34712);
} else {
if((state_val_34753 === (34))){
var inst_34733 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34752__$1,(37),inst_34733);
} else {
if((state_val_34753 === (17))){
var inst_34692 = (state_34752[(2)]);
var inst_34693 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34694 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34693);
var state_34752__$1 = (function (){var statearr_34775 = state_34752;
(statearr_34775[(12)] = inst_34692);

return statearr_34775;
})();
var statearr_34776_34818 = state_34752__$1;
(statearr_34776_34818[(2)] = inst_34694);

(statearr_34776_34818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (3))){
var inst_34684 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34752__$1 = state_34752;
if(inst_34684){
var statearr_34777_34819 = state_34752__$1;
(statearr_34777_34819[(1)] = (13));

} else {
var statearr_34778_34820 = state_34752__$1;
(statearr_34778_34820[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (12))){
var inst_34680 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
var statearr_34779_34821 = state_34752__$1;
(statearr_34779_34821[(2)] = inst_34680);

(statearr_34779_34821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (2))){
var inst_34667 = (state_34752[(10)]);
var inst_34667__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34752__$1 = (function (){var statearr_34780 = state_34752;
(statearr_34780[(10)] = inst_34667__$1);

return statearr_34780;
})();
if(cljs.core.truth_(inst_34667__$1)){
var statearr_34781_34822 = state_34752__$1;
(statearr_34781_34822[(1)] = (5));

} else {
var statearr_34782_34823 = state_34752__$1;
(statearr_34782_34823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (23))){
var inst_34710 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34752__$1 = state_34752;
if(inst_34710){
var statearr_34783_34824 = state_34752__$1;
(statearr_34783_34824[(1)] = (25));

} else {
var statearr_34784_34825 = state_34752__$1;
(statearr_34784_34825[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (35))){
var state_34752__$1 = state_34752;
var statearr_34785_34826 = state_34752__$1;
(statearr_34785_34826[(2)] = null);

(statearr_34785_34826[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (19))){
var inst_34705 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34752__$1 = state_34752;
if(inst_34705){
var statearr_34786_34827 = state_34752__$1;
(statearr_34786_34827[(1)] = (22));

} else {
var statearr_34787_34828 = state_34752__$1;
(statearr_34787_34828[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (11))){
var inst_34676 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
var statearr_34788_34829 = state_34752__$1;
(statearr_34788_34829[(2)] = inst_34676);

(statearr_34788_34829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (9))){
var inst_34678 = figwheel.client.heads_up.clear.call(null);
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34752__$1,(12),inst_34678);
} else {
if((state_val_34753 === (5))){
var inst_34669 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34752__$1 = state_34752;
var statearr_34789_34830 = state_34752__$1;
(statearr_34789_34830[(2)] = inst_34669);

(statearr_34789_34830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (14))){
var inst_34696 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34752__$1 = state_34752;
if(inst_34696){
var statearr_34790_34831 = state_34752__$1;
(statearr_34790_34831[(1)] = (18));

} else {
var statearr_34791_34832 = state_34752__$1;
(statearr_34791_34832[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (26))){
var inst_34722 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34752__$1 = state_34752;
if(inst_34722){
var statearr_34792_34833 = state_34752__$1;
(statearr_34792_34833[(1)] = (30));

} else {
var statearr_34793_34834 = state_34752__$1;
(statearr_34793_34834[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (16))){
var inst_34688 = (state_34752[(2)]);
var inst_34689 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34690 = figwheel.client.heads_up.display_exception.call(null,inst_34689);
var state_34752__$1 = (function (){var statearr_34794 = state_34752;
(statearr_34794[(13)] = inst_34688);

return statearr_34794;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34752__$1,(17),inst_34690);
} else {
if((state_val_34753 === (30))){
var inst_34724 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34725 = figwheel.client.heads_up.display_warning.call(null,inst_34724);
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34752__$1,(33),inst_34725);
} else {
if((state_val_34753 === (10))){
var inst_34682 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
var statearr_34795_34835 = state_34752__$1;
(statearr_34795_34835[(2)] = inst_34682);

(statearr_34795_34835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (18))){
var inst_34698 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34699 = figwheel.client.heads_up.display_exception.call(null,inst_34698);
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34752__$1,(21),inst_34699);
} else {
if((state_val_34753 === (37))){
var inst_34735 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
var statearr_34796_34836 = state_34752__$1;
(statearr_34796_34836[(2)] = inst_34735);

(statearr_34796_34836[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (8))){
var inst_34674 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34752__$1,(11),inst_34674);
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
});})(c__30672__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30649__auto__,c__30672__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30650__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30650__auto____0 = (function (){
var statearr_34797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34797[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30650__auto__);

(statearr_34797[(1)] = (1));

return statearr_34797;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30650__auto____1 = (function (state_34752){
while(true){
var ret_value__30651__auto__ = (function (){try{while(true){
var result__30652__auto__ = switch__30649__auto__.call(null,state_34752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30652__auto__;
}
break;
}
}catch (e34798){if((e34798 instanceof Object)){
var ex__30653__auto__ = e34798;
var statearr_34799_34837 = state_34752;
(statearr_34799_34837[(5)] = ex__30653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34838 = state_34752;
state_34752 = G__34838;
continue;
} else {
return ret_value__30651__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30650__auto__ = function(state_34752){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30650__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30650__auto____1.call(this,state_34752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30650__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30650__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30650__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30650__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30650__auto__;
})()
;})(switch__30649__auto__,c__30672__auto__,msg_hist,msg_names,msg))
})();
var state__30674__auto__ = (function (){var statearr_34800 = f__30673__auto__.call(null);
(statearr_34800[(6)] = c__30672__auto__);

return statearr_34800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30674__auto__);
});})(c__30672__auto__,msg_hist,msg_names,msg))
);

return c__30672__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30672__auto___34867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30672__auto___34867,ch){
return (function (){
var f__30673__auto__ = (function (){var switch__30649__auto__ = ((function (c__30672__auto___34867,ch){
return (function (state_34853){
var state_val_34854 = (state_34853[(1)]);
if((state_val_34854 === (1))){
var state_34853__$1 = state_34853;
var statearr_34855_34868 = state_34853__$1;
(statearr_34855_34868[(2)] = null);

(statearr_34855_34868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (2))){
var state_34853__$1 = state_34853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34853__$1,(4),ch);
} else {
if((state_val_34854 === (3))){
var inst_34851 = (state_34853[(2)]);
var state_34853__$1 = state_34853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34853__$1,inst_34851);
} else {
if((state_val_34854 === (4))){
var inst_34841 = (state_34853[(7)]);
var inst_34841__$1 = (state_34853[(2)]);
var state_34853__$1 = (function (){var statearr_34856 = state_34853;
(statearr_34856[(7)] = inst_34841__$1);

return statearr_34856;
})();
if(cljs.core.truth_(inst_34841__$1)){
var statearr_34857_34869 = state_34853__$1;
(statearr_34857_34869[(1)] = (5));

} else {
var statearr_34858_34870 = state_34853__$1;
(statearr_34858_34870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (5))){
var inst_34841 = (state_34853[(7)]);
var inst_34843 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34841);
var state_34853__$1 = state_34853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34853__$1,(8),inst_34843);
} else {
if((state_val_34854 === (6))){
var state_34853__$1 = state_34853;
var statearr_34859_34871 = state_34853__$1;
(statearr_34859_34871[(2)] = null);

(statearr_34859_34871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (7))){
var inst_34849 = (state_34853[(2)]);
var state_34853__$1 = state_34853;
var statearr_34860_34872 = state_34853__$1;
(statearr_34860_34872[(2)] = inst_34849);

(statearr_34860_34872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (8))){
var inst_34845 = (state_34853[(2)]);
var state_34853__$1 = (function (){var statearr_34861 = state_34853;
(statearr_34861[(8)] = inst_34845);

return statearr_34861;
})();
var statearr_34862_34873 = state_34853__$1;
(statearr_34862_34873[(2)] = null);

(statearr_34862_34873[(1)] = (2));


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
});})(c__30672__auto___34867,ch))
;
return ((function (switch__30649__auto__,c__30672__auto___34867,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30650__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30650__auto____0 = (function (){
var statearr_34863 = [null,null,null,null,null,null,null,null,null];
(statearr_34863[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30650__auto__);

(statearr_34863[(1)] = (1));

return statearr_34863;
});
var figwheel$client$heads_up_plugin_$_state_machine__30650__auto____1 = (function (state_34853){
while(true){
var ret_value__30651__auto__ = (function (){try{while(true){
var result__30652__auto__ = switch__30649__auto__.call(null,state_34853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30652__auto__;
}
break;
}
}catch (e34864){if((e34864 instanceof Object)){
var ex__30653__auto__ = e34864;
var statearr_34865_34874 = state_34853;
(statearr_34865_34874[(5)] = ex__30653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34875 = state_34853;
state_34853 = G__34875;
continue;
} else {
return ret_value__30651__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30650__auto__ = function(state_34853){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30650__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30650__auto____1.call(this,state_34853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__30650__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30650__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30650__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30650__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30650__auto__;
})()
;})(switch__30649__auto__,c__30672__auto___34867,ch))
})();
var state__30674__auto__ = (function (){var statearr_34866 = f__30673__auto__.call(null);
(statearr_34866[(6)] = c__30672__auto___34867);

return statearr_34866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30674__auto__);
});})(c__30672__auto___34867,ch))
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
var c__30672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30672__auto__){
return (function (){
var f__30673__auto__ = (function (){var switch__30649__auto__ = ((function (c__30672__auto__){
return (function (state_34881){
var state_val_34882 = (state_34881[(1)]);
if((state_val_34882 === (1))){
var inst_34876 = cljs.core.async.timeout.call(null,(3000));
var state_34881__$1 = state_34881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34881__$1,(2),inst_34876);
} else {
if((state_val_34882 === (2))){
var inst_34878 = (state_34881[(2)]);
var inst_34879 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34881__$1 = (function (){var statearr_34883 = state_34881;
(statearr_34883[(7)] = inst_34878);

return statearr_34883;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34881__$1,inst_34879);
} else {
return null;
}
}
});})(c__30672__auto__))
;
return ((function (switch__30649__auto__,c__30672__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30650__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30650__auto____0 = (function (){
var statearr_34884 = [null,null,null,null,null,null,null,null];
(statearr_34884[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30650__auto__);

(statearr_34884[(1)] = (1));

return statearr_34884;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30650__auto____1 = (function (state_34881){
while(true){
var ret_value__30651__auto__ = (function (){try{while(true){
var result__30652__auto__ = switch__30649__auto__.call(null,state_34881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30652__auto__;
}
break;
}
}catch (e34885){if((e34885 instanceof Object)){
var ex__30653__auto__ = e34885;
var statearr_34886_34888 = state_34881;
(statearr_34886_34888[(5)] = ex__30653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34889 = state_34881;
state_34881 = G__34889;
continue;
} else {
return ret_value__30651__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30650__auto__ = function(state_34881){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30650__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30650__auto____1.call(this,state_34881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__30650__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30650__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30650__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30650__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30650__auto__;
})()
;})(switch__30649__auto__,c__30672__auto__))
})();
var state__30674__auto__ = (function (){var statearr_34887 = f__30673__auto__.call(null);
(statearr_34887[(6)] = c__30672__auto__);

return statearr_34887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30674__auto__);
});})(c__30672__auto__))
);

return c__30672__auto__;
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
var c__30672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30672__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__30673__auto__ = (function (){var switch__30649__auto__ = ((function (c__30672__auto__,figwheel_version,temp__5457__auto__){
return (function (state_34896){
var state_val_34897 = (state_34896[(1)]);
if((state_val_34897 === (1))){
var inst_34890 = cljs.core.async.timeout.call(null,(2000));
var state_34896__$1 = state_34896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34896__$1,(2),inst_34890);
} else {
if((state_val_34897 === (2))){
var inst_34892 = (state_34896[(2)]);
var inst_34893 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_34894 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_34893);
var state_34896__$1 = (function (){var statearr_34898 = state_34896;
(statearr_34898[(7)] = inst_34892);

return statearr_34898;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34896__$1,inst_34894);
} else {
return null;
}
}
});})(c__30672__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__30649__auto__,c__30672__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30650__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30650__auto____0 = (function (){
var statearr_34899 = [null,null,null,null,null,null,null,null];
(statearr_34899[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30650__auto__);

(statearr_34899[(1)] = (1));

return statearr_34899;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30650__auto____1 = (function (state_34896){
while(true){
var ret_value__30651__auto__ = (function (){try{while(true){
var result__30652__auto__ = switch__30649__auto__.call(null,state_34896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30652__auto__;
}
break;
}
}catch (e34900){if((e34900 instanceof Object)){
var ex__30653__auto__ = e34900;
var statearr_34901_34903 = state_34896;
(statearr_34901_34903[(5)] = ex__30653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34904 = state_34896;
state_34896 = G__34904;
continue;
} else {
return ret_value__30651__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30650__auto__ = function(state_34896){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30650__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30650__auto____1.call(this,state_34896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30650__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30650__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30650__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30650__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30650__auto__;
})()
;})(switch__30649__auto__,c__30672__auto__,figwheel_version,temp__5457__auto__))
})();
var state__30674__auto__ = (function (){var statearr_34902 = f__30673__auto__.call(null);
(statearr_34902[(6)] = c__30672__auto__);

return statearr_34902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30674__auto__);
});})(c__30672__auto__,figwheel_version,temp__5457__auto__))
);

return c__30672__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__34905){
var map__34906 = p__34905;
var map__34906__$1 = (((((!((map__34906 == null))))?(((((map__34906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34906):map__34906);
var file = cljs.core.get.call(null,map__34906__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34906__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34906__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__34908 = "";
var G__34908__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34908),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__34908);
var G__34908__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34908__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__34908__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34908__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__34908__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34909){
var map__34910 = p__34909;
var map__34910__$1 = (((((!((map__34910 == null))))?(((((map__34910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34910):map__34910);
var ed = map__34910__$1;
var formatted_exception = cljs.core.get.call(null,map__34910__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34910__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34910__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34912_34916 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34913_34917 = null;
var count__34914_34918 = (0);
var i__34915_34919 = (0);
while(true){
if((i__34915_34919 < count__34914_34918)){
var msg_34920 = cljs.core._nth.call(null,chunk__34913_34917,i__34915_34919);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34920);


var G__34921 = seq__34912_34916;
var G__34922 = chunk__34913_34917;
var G__34923 = count__34914_34918;
var G__34924 = (i__34915_34919 + (1));
seq__34912_34916 = G__34921;
chunk__34913_34917 = G__34922;
count__34914_34918 = G__34923;
i__34915_34919 = G__34924;
continue;
} else {
var temp__5457__auto___34925 = cljs.core.seq.call(null,seq__34912_34916);
if(temp__5457__auto___34925){
var seq__34912_34926__$1 = temp__5457__auto___34925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34912_34926__$1)){
var c__4461__auto___34927 = cljs.core.chunk_first.call(null,seq__34912_34926__$1);
var G__34928 = cljs.core.chunk_rest.call(null,seq__34912_34926__$1);
var G__34929 = c__4461__auto___34927;
var G__34930 = cljs.core.count.call(null,c__4461__auto___34927);
var G__34931 = (0);
seq__34912_34916 = G__34928;
chunk__34913_34917 = G__34929;
count__34914_34918 = G__34930;
i__34915_34919 = G__34931;
continue;
} else {
var msg_34932 = cljs.core.first.call(null,seq__34912_34926__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34932);


var G__34933 = cljs.core.next.call(null,seq__34912_34926__$1);
var G__34934 = null;
var G__34935 = (0);
var G__34936 = (0);
seq__34912_34916 = G__34933;
chunk__34913_34917 = G__34934;
count__34914_34918 = G__34935;
i__34915_34919 = G__34936;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34937){
var map__34938 = p__34937;
var map__34938__$1 = (((((!((map__34938 == null))))?(((((map__34938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34938):map__34938);
var w = map__34938__$1;
var message = cljs.core.get.call(null,map__34938__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__34940 = cljs.core.seq.call(null,plugins);
var chunk__34941 = null;
var count__34942 = (0);
var i__34943 = (0);
while(true){
if((i__34943 < count__34942)){
var vec__34944 = cljs.core._nth.call(null,chunk__34941,i__34943);
var k = cljs.core.nth.call(null,vec__34944,(0),null);
var plugin = cljs.core.nth.call(null,vec__34944,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34950 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34940,chunk__34941,count__34942,i__34943,pl_34950,vec__34944,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34950.call(null,msg_hist);
});})(seq__34940,chunk__34941,count__34942,i__34943,pl_34950,vec__34944,k,plugin))
);
} else {
}


var G__34951 = seq__34940;
var G__34952 = chunk__34941;
var G__34953 = count__34942;
var G__34954 = (i__34943 + (1));
seq__34940 = G__34951;
chunk__34941 = G__34952;
count__34942 = G__34953;
i__34943 = G__34954;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34940);
if(temp__5457__auto__){
var seq__34940__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34940__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__34940__$1);
var G__34955 = cljs.core.chunk_rest.call(null,seq__34940__$1);
var G__34956 = c__4461__auto__;
var G__34957 = cljs.core.count.call(null,c__4461__auto__);
var G__34958 = (0);
seq__34940 = G__34955;
chunk__34941 = G__34956;
count__34942 = G__34957;
i__34943 = G__34958;
continue;
} else {
var vec__34947 = cljs.core.first.call(null,seq__34940__$1);
var k = cljs.core.nth.call(null,vec__34947,(0),null);
var plugin = cljs.core.nth.call(null,vec__34947,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34959 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34940,chunk__34941,count__34942,i__34943,pl_34959,vec__34947,k,plugin,seq__34940__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34959.call(null,msg_hist);
});})(seq__34940,chunk__34941,count__34942,i__34943,pl_34959,vec__34947,k,plugin,seq__34940__$1,temp__5457__auto__))
);
} else {
}


var G__34960 = cljs.core.next.call(null,seq__34940__$1);
var G__34961 = null;
var G__34962 = (0);
var G__34963 = (0);
seq__34940 = G__34960;
chunk__34941 = G__34961;
count__34942 = G__34962;
i__34943 = G__34963;
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
var G__34965 = arguments.length;
switch (G__34965) {
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

var seq__34966_34971 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__34967_34972 = null;
var count__34968_34973 = (0);
var i__34969_34974 = (0);
while(true){
if((i__34969_34974 < count__34968_34973)){
var msg_34975 = cljs.core._nth.call(null,chunk__34967_34972,i__34969_34974);
figwheel.client.socket.handle_incoming_message.call(null,msg_34975);


var G__34976 = seq__34966_34971;
var G__34977 = chunk__34967_34972;
var G__34978 = count__34968_34973;
var G__34979 = (i__34969_34974 + (1));
seq__34966_34971 = G__34976;
chunk__34967_34972 = G__34977;
count__34968_34973 = G__34978;
i__34969_34974 = G__34979;
continue;
} else {
var temp__5457__auto___34980 = cljs.core.seq.call(null,seq__34966_34971);
if(temp__5457__auto___34980){
var seq__34966_34981__$1 = temp__5457__auto___34980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34966_34981__$1)){
var c__4461__auto___34982 = cljs.core.chunk_first.call(null,seq__34966_34981__$1);
var G__34983 = cljs.core.chunk_rest.call(null,seq__34966_34981__$1);
var G__34984 = c__4461__auto___34982;
var G__34985 = cljs.core.count.call(null,c__4461__auto___34982);
var G__34986 = (0);
seq__34966_34971 = G__34983;
chunk__34967_34972 = G__34984;
count__34968_34973 = G__34985;
i__34969_34974 = G__34986;
continue;
} else {
var msg_34987 = cljs.core.first.call(null,seq__34966_34981__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_34987);


var G__34988 = cljs.core.next.call(null,seq__34966_34981__$1);
var G__34989 = null;
var G__34990 = (0);
var G__34991 = (0);
seq__34966_34971 = G__34988;
chunk__34967_34972 = G__34989;
count__34968_34973 = G__34990;
i__34969_34974 = G__34991;
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
var len__4641__auto___34996 = arguments.length;
var i__4642__auto___34997 = (0);
while(true){
if((i__4642__auto___34997 < len__4641__auto___34996)){
args__4647__auto__.push((arguments[i__4642__auto___34997]));

var G__34998 = (i__4642__auto___34997 + (1));
i__4642__auto___34997 = G__34998;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34993){
var map__34994 = p__34993;
var map__34994__$1 = (((((!((map__34994 == null))))?(((((map__34994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34994):map__34994);
var opts = map__34994__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34992){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34992));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e34999){if((e34999 instanceof Error)){
var e = e34999;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e34999;

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
return (function (p__35000){
var map__35001 = p__35000;
var map__35001__$1 = (((((!((map__35001 == null))))?(((((map__35001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35001):map__35001);
var msg_name = cljs.core.get.call(null,map__35001__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1542476950417
