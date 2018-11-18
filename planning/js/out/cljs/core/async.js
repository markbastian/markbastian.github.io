// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25840 = arguments.length;
switch (G__25840) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25841 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25841 = (function (f,blockable,meta25842){
this.f = f;
this.blockable = blockable;
this.meta25842 = meta25842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25843,meta25842__$1){
var self__ = this;
var _25843__$1 = this;
return (new cljs.core.async.t_cljs$core$async25841(self__.f,self__.blockable,meta25842__$1));
});

cljs.core.async.t_cljs$core$async25841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25843){
var self__ = this;
var _25843__$1 = this;
return self__.meta25842;
});

cljs.core.async.t_cljs$core$async25841.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25841.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25841.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25841.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25842","meta25842",802580484,null)], null);
});

cljs.core.async.t_cljs$core$async25841.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25841";

cljs.core.async.t_cljs$core$async25841.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25841");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25841.
 */
cljs.core.async.__GT_t_cljs$core$async25841 = (function cljs$core$async$__GT_t_cljs$core$async25841(f__$1,blockable__$1,meta25842){
return (new cljs.core.async.t_cljs$core$async25841(f__$1,blockable__$1,meta25842));
});

}

return (new cljs.core.async.t_cljs$core$async25841(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__25847 = arguments.length;
switch (G__25847) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25850 = arguments.length;
switch (G__25850) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__25853 = arguments.length;
switch (G__25853) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25855 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25855);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25855,ret){
return (function (){
return fn1.call(null,val_25855);
});})(val_25855,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__25857 = arguments.length;
switch (G__25857) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___25859 = n;
var x_25860 = (0);
while(true){
if((x_25860 < n__4518__auto___25859)){
(a[x_25860] = (0));

var G__25861 = (x_25860 + (1));
x_25860 = G__25861;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25862 = (i + (1));
i = G__25862;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25863 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25863 = (function (flag,meta25864){
this.flag = flag;
this.meta25864 = meta25864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25865,meta25864__$1){
var self__ = this;
var _25865__$1 = this;
return (new cljs.core.async.t_cljs$core$async25863(self__.flag,meta25864__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25863.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25865){
var self__ = this;
var _25865__$1 = this;
return self__.meta25864;
});})(flag))
;

cljs.core.async.t_cljs$core$async25863.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25863.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25863.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25864","meta25864",-1759640429,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25863.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25863";

cljs.core.async.t_cljs$core$async25863.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25863");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25863.
 */
cljs.core.async.__GT_t_cljs$core$async25863 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25863(flag__$1,meta25864){
return (new cljs.core.async.t_cljs$core$async25863(flag__$1,meta25864));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25863(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25866 = (function (flag,cb,meta25867){
this.flag = flag;
this.cb = cb;
this.meta25867 = meta25867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25868,meta25867__$1){
var self__ = this;
var _25868__$1 = this;
return (new cljs.core.async.t_cljs$core$async25866(self__.flag,self__.cb,meta25867__$1));
});

cljs.core.async.t_cljs$core$async25866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25868){
var self__ = this;
var _25868__$1 = this;
return self__.meta25867;
});

cljs.core.async.t_cljs$core$async25866.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25866.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25866.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25866.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25867","meta25867",2085072707,null)], null);
});

cljs.core.async.t_cljs$core$async25866.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25866";

cljs.core.async.t_cljs$core$async25866.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25866");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25866.
 */
cljs.core.async.__GT_t_cljs$core$async25866 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25866(flag__$1,cb__$1,meta25867){
return (new cljs.core.async.t_cljs$core$async25866(flag__$1,cb__$1,meta25867));
});

}

return (new cljs.core.async.t_cljs$core$async25866(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25869_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25869_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25870_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25870_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25871 = (i + (1));
i = G__25871;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___25877 = arguments.length;
var i__4642__auto___25878 = (0);
while(true){
if((i__4642__auto___25878 < len__4641__auto___25877)){
args__4647__auto__.push((arguments[i__4642__auto___25878]));

var G__25879 = (i__4642__auto___25878 + (1));
i__4642__auto___25878 = G__25879;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25874){
var map__25875 = p__25874;
var map__25875__$1 = (((((!((map__25875 == null))))?(((((map__25875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25875):map__25875);
var opts = map__25875__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25872){
var G__25873 = cljs.core.first.call(null,seq25872);
var seq25872__$1 = cljs.core.next.call(null,seq25872);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25873,seq25872__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__25881 = arguments.length;
switch (G__25881) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25780__auto___25927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto___25927){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto___25927){
return (function (state_25905){
var state_val_25906 = (state_25905[(1)]);
if((state_val_25906 === (7))){
var inst_25901 = (state_25905[(2)]);
var state_25905__$1 = state_25905;
var statearr_25907_25928 = state_25905__$1;
(statearr_25907_25928[(2)] = inst_25901);

(statearr_25907_25928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25906 === (1))){
var state_25905__$1 = state_25905;
var statearr_25908_25929 = state_25905__$1;
(statearr_25908_25929[(2)] = null);

(statearr_25908_25929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25906 === (4))){
var inst_25884 = (state_25905[(7)]);
var inst_25884__$1 = (state_25905[(2)]);
var inst_25885 = (inst_25884__$1 == null);
var state_25905__$1 = (function (){var statearr_25909 = state_25905;
(statearr_25909[(7)] = inst_25884__$1);

return statearr_25909;
})();
if(cljs.core.truth_(inst_25885)){
var statearr_25910_25930 = state_25905__$1;
(statearr_25910_25930[(1)] = (5));

} else {
var statearr_25911_25931 = state_25905__$1;
(statearr_25911_25931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25906 === (13))){
var state_25905__$1 = state_25905;
var statearr_25912_25932 = state_25905__$1;
(statearr_25912_25932[(2)] = null);

(statearr_25912_25932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25906 === (6))){
var inst_25884 = (state_25905[(7)]);
var state_25905__$1 = state_25905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25905__$1,(11),to,inst_25884);
} else {
if((state_val_25906 === (3))){
var inst_25903 = (state_25905[(2)]);
var state_25905__$1 = state_25905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25905__$1,inst_25903);
} else {
if((state_val_25906 === (12))){
var state_25905__$1 = state_25905;
var statearr_25913_25933 = state_25905__$1;
(statearr_25913_25933[(2)] = null);

(statearr_25913_25933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25906 === (2))){
var state_25905__$1 = state_25905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25905__$1,(4),from);
} else {
if((state_val_25906 === (11))){
var inst_25894 = (state_25905[(2)]);
var state_25905__$1 = state_25905;
if(cljs.core.truth_(inst_25894)){
var statearr_25914_25934 = state_25905__$1;
(statearr_25914_25934[(1)] = (12));

} else {
var statearr_25915_25935 = state_25905__$1;
(statearr_25915_25935[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25906 === (9))){
var state_25905__$1 = state_25905;
var statearr_25916_25936 = state_25905__$1;
(statearr_25916_25936[(2)] = null);

(statearr_25916_25936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25906 === (5))){
var state_25905__$1 = state_25905;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25917_25937 = state_25905__$1;
(statearr_25917_25937[(1)] = (8));

} else {
var statearr_25918_25938 = state_25905__$1;
(statearr_25918_25938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25906 === (14))){
var inst_25899 = (state_25905[(2)]);
var state_25905__$1 = state_25905;
var statearr_25919_25939 = state_25905__$1;
(statearr_25919_25939[(2)] = inst_25899);

(statearr_25919_25939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25906 === (10))){
var inst_25891 = (state_25905[(2)]);
var state_25905__$1 = state_25905;
var statearr_25920_25940 = state_25905__$1;
(statearr_25920_25940[(2)] = inst_25891);

(statearr_25920_25940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25906 === (8))){
var inst_25888 = cljs.core.async.close_BANG_.call(null,to);
var state_25905__$1 = state_25905;
var statearr_25921_25941 = state_25905__$1;
(statearr_25921_25941[(2)] = inst_25888);

(statearr_25921_25941[(1)] = (10));


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
});})(c__25780__auto___25927))
;
return ((function (switch__25685__auto__,c__25780__auto___25927){
return (function() {
var cljs$core$async$state_machine__25686__auto__ = null;
var cljs$core$async$state_machine__25686__auto____0 = (function (){
var statearr_25922 = [null,null,null,null,null,null,null,null];
(statearr_25922[(0)] = cljs$core$async$state_machine__25686__auto__);

(statearr_25922[(1)] = (1));

return statearr_25922;
});
var cljs$core$async$state_machine__25686__auto____1 = (function (state_25905){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_25905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e25923){if((e25923 instanceof Object)){
var ex__25689__auto__ = e25923;
var statearr_25924_25942 = state_25905;
(statearr_25924_25942[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25943 = state_25905;
state_25905 = G__25943;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$state_machine__25686__auto__ = function(state_25905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25686__auto____1.call(this,state_25905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25686__auto____0;
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25686__auto____1;
return cljs$core$async$state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto___25927))
})();
var state__25782__auto__ = (function (){var statearr_25925 = f__25781__auto__.call(null);
(statearr_25925[(6)] = c__25780__auto___25927);

return statearr_25925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto___25927))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25944){
var vec__25945 = p__25944;
var v = cljs.core.nth.call(null,vec__25945,(0),null);
var p = cljs.core.nth.call(null,vec__25945,(1),null);
var job = vec__25945;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25780__auto___26116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto___26116,res,vec__25945,v,p,job,jobs,results){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto___26116,res,vec__25945,v,p,job,jobs,results){
return (function (state_25952){
var state_val_25953 = (state_25952[(1)]);
if((state_val_25953 === (1))){
var state_25952__$1 = state_25952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25952__$1,(2),res,v);
} else {
if((state_val_25953 === (2))){
var inst_25949 = (state_25952[(2)]);
var inst_25950 = cljs.core.async.close_BANG_.call(null,res);
var state_25952__$1 = (function (){var statearr_25954 = state_25952;
(statearr_25954[(7)] = inst_25949);

return statearr_25954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25952__$1,inst_25950);
} else {
return null;
}
}
});})(c__25780__auto___26116,res,vec__25945,v,p,job,jobs,results))
;
return ((function (switch__25685__auto__,c__25780__auto___26116,res,vec__25945,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____0 = (function (){
var statearr_25955 = [null,null,null,null,null,null,null,null];
(statearr_25955[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__);

(statearr_25955[(1)] = (1));

return statearr_25955;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____1 = (function (state_25952){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_25952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e25956){if((e25956 instanceof Object)){
var ex__25689__auto__ = e25956;
var statearr_25957_26117 = state_25952;
(statearr_25957_26117[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26118 = state_25952;
state_25952 = G__26118;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__ = function(state_25952){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____1.call(this,state_25952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto___26116,res,vec__25945,v,p,job,jobs,results))
})();
var state__25782__auto__ = (function (){var statearr_25958 = f__25781__auto__.call(null);
(statearr_25958[(6)] = c__25780__auto___26116);

return statearr_25958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto___26116,res,vec__25945,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25959){
var vec__25960 = p__25959;
var v = cljs.core.nth.call(null,vec__25960,(0),null);
var p = cljs.core.nth.call(null,vec__25960,(1),null);
var job = vec__25960;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___26119 = n;
var __26120 = (0);
while(true){
if((__26120 < n__4518__auto___26119)){
var G__25963_26121 = type;
var G__25963_26122__$1 = (((G__25963_26121 instanceof cljs.core.Keyword))?G__25963_26121.fqn:null);
switch (G__25963_26122__$1) {
case "compute":
var c__25780__auto___26124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26120,c__25780__auto___26124,G__25963_26121,G__25963_26122__$1,n__4518__auto___26119,jobs,results,process,async){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (__26120,c__25780__auto___26124,G__25963_26121,G__25963_26122__$1,n__4518__auto___26119,jobs,results,process,async){
return (function (state_25976){
var state_val_25977 = (state_25976[(1)]);
if((state_val_25977 === (1))){
var state_25976__$1 = state_25976;
var statearr_25978_26125 = state_25976__$1;
(statearr_25978_26125[(2)] = null);

(statearr_25978_26125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25977 === (2))){
var state_25976__$1 = state_25976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25976__$1,(4),jobs);
} else {
if((state_val_25977 === (3))){
var inst_25974 = (state_25976[(2)]);
var state_25976__$1 = state_25976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25976__$1,inst_25974);
} else {
if((state_val_25977 === (4))){
var inst_25966 = (state_25976[(2)]);
var inst_25967 = process.call(null,inst_25966);
var state_25976__$1 = state_25976;
if(cljs.core.truth_(inst_25967)){
var statearr_25979_26126 = state_25976__$1;
(statearr_25979_26126[(1)] = (5));

} else {
var statearr_25980_26127 = state_25976__$1;
(statearr_25980_26127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25977 === (5))){
var state_25976__$1 = state_25976;
var statearr_25981_26128 = state_25976__$1;
(statearr_25981_26128[(2)] = null);

(statearr_25981_26128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25977 === (6))){
var state_25976__$1 = state_25976;
var statearr_25982_26129 = state_25976__$1;
(statearr_25982_26129[(2)] = null);

(statearr_25982_26129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25977 === (7))){
var inst_25972 = (state_25976[(2)]);
var state_25976__$1 = state_25976;
var statearr_25983_26130 = state_25976__$1;
(statearr_25983_26130[(2)] = inst_25972);

(statearr_25983_26130[(1)] = (3));


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
});})(__26120,c__25780__auto___26124,G__25963_26121,G__25963_26122__$1,n__4518__auto___26119,jobs,results,process,async))
;
return ((function (__26120,switch__25685__auto__,c__25780__auto___26124,G__25963_26121,G__25963_26122__$1,n__4518__auto___26119,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____0 = (function (){
var statearr_25984 = [null,null,null,null,null,null,null];
(statearr_25984[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__);

(statearr_25984[(1)] = (1));

return statearr_25984;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____1 = (function (state_25976){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_25976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e25985){if((e25985 instanceof Object)){
var ex__25689__auto__ = e25985;
var statearr_25986_26131 = state_25976;
(statearr_25986_26131[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26132 = state_25976;
state_25976 = G__26132;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__ = function(state_25976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____1.call(this,state_25976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__;
})()
;})(__26120,switch__25685__auto__,c__25780__auto___26124,G__25963_26121,G__25963_26122__$1,n__4518__auto___26119,jobs,results,process,async))
})();
var state__25782__auto__ = (function (){var statearr_25987 = f__25781__auto__.call(null);
(statearr_25987[(6)] = c__25780__auto___26124);

return statearr_25987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(__26120,c__25780__auto___26124,G__25963_26121,G__25963_26122__$1,n__4518__auto___26119,jobs,results,process,async))
);


break;
case "async":
var c__25780__auto___26133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26120,c__25780__auto___26133,G__25963_26121,G__25963_26122__$1,n__4518__auto___26119,jobs,results,process,async){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (__26120,c__25780__auto___26133,G__25963_26121,G__25963_26122__$1,n__4518__auto___26119,jobs,results,process,async){
return (function (state_26000){
var state_val_26001 = (state_26000[(1)]);
if((state_val_26001 === (1))){
var state_26000__$1 = state_26000;
var statearr_26002_26134 = state_26000__$1;
(statearr_26002_26134[(2)] = null);

(statearr_26002_26134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (2))){
var state_26000__$1 = state_26000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26000__$1,(4),jobs);
} else {
if((state_val_26001 === (3))){
var inst_25998 = (state_26000[(2)]);
var state_26000__$1 = state_26000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26000__$1,inst_25998);
} else {
if((state_val_26001 === (4))){
var inst_25990 = (state_26000[(2)]);
var inst_25991 = async.call(null,inst_25990);
var state_26000__$1 = state_26000;
if(cljs.core.truth_(inst_25991)){
var statearr_26003_26135 = state_26000__$1;
(statearr_26003_26135[(1)] = (5));

} else {
var statearr_26004_26136 = state_26000__$1;
(statearr_26004_26136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (5))){
var state_26000__$1 = state_26000;
var statearr_26005_26137 = state_26000__$1;
(statearr_26005_26137[(2)] = null);

(statearr_26005_26137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (6))){
var state_26000__$1 = state_26000;
var statearr_26006_26138 = state_26000__$1;
(statearr_26006_26138[(2)] = null);

(statearr_26006_26138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26001 === (7))){
var inst_25996 = (state_26000[(2)]);
var state_26000__$1 = state_26000;
var statearr_26007_26139 = state_26000__$1;
(statearr_26007_26139[(2)] = inst_25996);

(statearr_26007_26139[(1)] = (3));


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
});})(__26120,c__25780__auto___26133,G__25963_26121,G__25963_26122__$1,n__4518__auto___26119,jobs,results,process,async))
;
return ((function (__26120,switch__25685__auto__,c__25780__auto___26133,G__25963_26121,G__25963_26122__$1,n__4518__auto___26119,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____0 = (function (){
var statearr_26008 = [null,null,null,null,null,null,null];
(statearr_26008[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__);

(statearr_26008[(1)] = (1));

return statearr_26008;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____1 = (function (state_26000){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_26000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e26009){if((e26009 instanceof Object)){
var ex__25689__auto__ = e26009;
var statearr_26010_26140 = state_26000;
(statearr_26010_26140[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26141 = state_26000;
state_26000 = G__26141;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__ = function(state_26000){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____1.call(this,state_26000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__;
})()
;})(__26120,switch__25685__auto__,c__25780__auto___26133,G__25963_26121,G__25963_26122__$1,n__4518__auto___26119,jobs,results,process,async))
})();
var state__25782__auto__ = (function (){var statearr_26011 = f__25781__auto__.call(null);
(statearr_26011[(6)] = c__25780__auto___26133);

return statearr_26011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(__26120,c__25780__auto___26133,G__25963_26121,G__25963_26122__$1,n__4518__auto___26119,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25963_26122__$1)].join('')));

}

var G__26142 = (__26120 + (1));
__26120 = G__26142;
continue;
} else {
}
break;
}

var c__25780__auto___26143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto___26143,jobs,results,process,async){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto___26143,jobs,results,process,async){
return (function (state_26033){
var state_val_26034 = (state_26033[(1)]);
if((state_val_26034 === (1))){
var state_26033__$1 = state_26033;
var statearr_26035_26144 = state_26033__$1;
(statearr_26035_26144[(2)] = null);

(statearr_26035_26144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (2))){
var state_26033__$1 = state_26033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26033__$1,(4),from);
} else {
if((state_val_26034 === (3))){
var inst_26031 = (state_26033[(2)]);
var state_26033__$1 = state_26033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26033__$1,inst_26031);
} else {
if((state_val_26034 === (4))){
var inst_26014 = (state_26033[(7)]);
var inst_26014__$1 = (state_26033[(2)]);
var inst_26015 = (inst_26014__$1 == null);
var state_26033__$1 = (function (){var statearr_26036 = state_26033;
(statearr_26036[(7)] = inst_26014__$1);

return statearr_26036;
})();
if(cljs.core.truth_(inst_26015)){
var statearr_26037_26145 = state_26033__$1;
(statearr_26037_26145[(1)] = (5));

} else {
var statearr_26038_26146 = state_26033__$1;
(statearr_26038_26146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (5))){
var inst_26017 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26033__$1 = state_26033;
var statearr_26039_26147 = state_26033__$1;
(statearr_26039_26147[(2)] = inst_26017);

(statearr_26039_26147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (6))){
var inst_26019 = (state_26033[(8)]);
var inst_26014 = (state_26033[(7)]);
var inst_26019__$1 = cljs.core.async.chan.call(null,(1));
var inst_26020 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26021 = [inst_26014,inst_26019__$1];
var inst_26022 = (new cljs.core.PersistentVector(null,2,(5),inst_26020,inst_26021,null));
var state_26033__$1 = (function (){var statearr_26040 = state_26033;
(statearr_26040[(8)] = inst_26019__$1);

return statearr_26040;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26033__$1,(8),jobs,inst_26022);
} else {
if((state_val_26034 === (7))){
var inst_26029 = (state_26033[(2)]);
var state_26033__$1 = state_26033;
var statearr_26041_26148 = state_26033__$1;
(statearr_26041_26148[(2)] = inst_26029);

(statearr_26041_26148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (8))){
var inst_26019 = (state_26033[(8)]);
var inst_26024 = (state_26033[(2)]);
var state_26033__$1 = (function (){var statearr_26042 = state_26033;
(statearr_26042[(9)] = inst_26024);

return statearr_26042;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26033__$1,(9),results,inst_26019);
} else {
if((state_val_26034 === (9))){
var inst_26026 = (state_26033[(2)]);
var state_26033__$1 = (function (){var statearr_26043 = state_26033;
(statearr_26043[(10)] = inst_26026);

return statearr_26043;
})();
var statearr_26044_26149 = state_26033__$1;
(statearr_26044_26149[(2)] = null);

(statearr_26044_26149[(1)] = (2));


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
});})(c__25780__auto___26143,jobs,results,process,async))
;
return ((function (switch__25685__auto__,c__25780__auto___26143,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____0 = (function (){
var statearr_26045 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26045[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__);

(statearr_26045[(1)] = (1));

return statearr_26045;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____1 = (function (state_26033){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_26033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e26046){if((e26046 instanceof Object)){
var ex__25689__auto__ = e26046;
var statearr_26047_26150 = state_26033;
(statearr_26047_26150[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26151 = state_26033;
state_26033 = G__26151;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__ = function(state_26033){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____1.call(this,state_26033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto___26143,jobs,results,process,async))
})();
var state__25782__auto__ = (function (){var statearr_26048 = f__25781__auto__.call(null);
(statearr_26048[(6)] = c__25780__auto___26143);

return statearr_26048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto___26143,jobs,results,process,async))
);


var c__25780__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto__,jobs,results,process,async){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto__,jobs,results,process,async){
return (function (state_26086){
var state_val_26087 = (state_26086[(1)]);
if((state_val_26087 === (7))){
var inst_26082 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
var statearr_26088_26152 = state_26086__$1;
(statearr_26088_26152[(2)] = inst_26082);

(statearr_26088_26152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (20))){
var state_26086__$1 = state_26086;
var statearr_26089_26153 = state_26086__$1;
(statearr_26089_26153[(2)] = null);

(statearr_26089_26153[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (1))){
var state_26086__$1 = state_26086;
var statearr_26090_26154 = state_26086__$1;
(statearr_26090_26154[(2)] = null);

(statearr_26090_26154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (4))){
var inst_26051 = (state_26086[(7)]);
var inst_26051__$1 = (state_26086[(2)]);
var inst_26052 = (inst_26051__$1 == null);
var state_26086__$1 = (function (){var statearr_26091 = state_26086;
(statearr_26091[(7)] = inst_26051__$1);

return statearr_26091;
})();
if(cljs.core.truth_(inst_26052)){
var statearr_26092_26155 = state_26086__$1;
(statearr_26092_26155[(1)] = (5));

} else {
var statearr_26093_26156 = state_26086__$1;
(statearr_26093_26156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (15))){
var inst_26064 = (state_26086[(8)]);
var state_26086__$1 = state_26086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26086__$1,(18),to,inst_26064);
} else {
if((state_val_26087 === (21))){
var inst_26077 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
var statearr_26094_26157 = state_26086__$1;
(statearr_26094_26157[(2)] = inst_26077);

(statearr_26094_26157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (13))){
var inst_26079 = (state_26086[(2)]);
var state_26086__$1 = (function (){var statearr_26095 = state_26086;
(statearr_26095[(9)] = inst_26079);

return statearr_26095;
})();
var statearr_26096_26158 = state_26086__$1;
(statearr_26096_26158[(2)] = null);

(statearr_26096_26158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (6))){
var inst_26051 = (state_26086[(7)]);
var state_26086__$1 = state_26086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26086__$1,(11),inst_26051);
} else {
if((state_val_26087 === (17))){
var inst_26072 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
if(cljs.core.truth_(inst_26072)){
var statearr_26097_26159 = state_26086__$1;
(statearr_26097_26159[(1)] = (19));

} else {
var statearr_26098_26160 = state_26086__$1;
(statearr_26098_26160[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (3))){
var inst_26084 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26086__$1,inst_26084);
} else {
if((state_val_26087 === (12))){
var inst_26061 = (state_26086[(10)]);
var state_26086__$1 = state_26086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26086__$1,(14),inst_26061);
} else {
if((state_val_26087 === (2))){
var state_26086__$1 = state_26086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26086__$1,(4),results);
} else {
if((state_val_26087 === (19))){
var state_26086__$1 = state_26086;
var statearr_26099_26161 = state_26086__$1;
(statearr_26099_26161[(2)] = null);

(statearr_26099_26161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (11))){
var inst_26061 = (state_26086[(2)]);
var state_26086__$1 = (function (){var statearr_26100 = state_26086;
(statearr_26100[(10)] = inst_26061);

return statearr_26100;
})();
var statearr_26101_26162 = state_26086__$1;
(statearr_26101_26162[(2)] = null);

(statearr_26101_26162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (9))){
var state_26086__$1 = state_26086;
var statearr_26102_26163 = state_26086__$1;
(statearr_26102_26163[(2)] = null);

(statearr_26102_26163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (5))){
var state_26086__$1 = state_26086;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26103_26164 = state_26086__$1;
(statearr_26103_26164[(1)] = (8));

} else {
var statearr_26104_26165 = state_26086__$1;
(statearr_26104_26165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (14))){
var inst_26066 = (state_26086[(11)]);
var inst_26064 = (state_26086[(8)]);
var inst_26064__$1 = (state_26086[(2)]);
var inst_26065 = (inst_26064__$1 == null);
var inst_26066__$1 = cljs.core.not.call(null,inst_26065);
var state_26086__$1 = (function (){var statearr_26105 = state_26086;
(statearr_26105[(11)] = inst_26066__$1);

(statearr_26105[(8)] = inst_26064__$1);

return statearr_26105;
})();
if(inst_26066__$1){
var statearr_26106_26166 = state_26086__$1;
(statearr_26106_26166[(1)] = (15));

} else {
var statearr_26107_26167 = state_26086__$1;
(statearr_26107_26167[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (16))){
var inst_26066 = (state_26086[(11)]);
var state_26086__$1 = state_26086;
var statearr_26108_26168 = state_26086__$1;
(statearr_26108_26168[(2)] = inst_26066);

(statearr_26108_26168[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (10))){
var inst_26058 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
var statearr_26109_26169 = state_26086__$1;
(statearr_26109_26169[(2)] = inst_26058);

(statearr_26109_26169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (18))){
var inst_26069 = (state_26086[(2)]);
var state_26086__$1 = state_26086;
var statearr_26110_26170 = state_26086__$1;
(statearr_26110_26170[(2)] = inst_26069);

(statearr_26110_26170[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26087 === (8))){
var inst_26055 = cljs.core.async.close_BANG_.call(null,to);
var state_26086__$1 = state_26086;
var statearr_26111_26171 = state_26086__$1;
(statearr_26111_26171[(2)] = inst_26055);

(statearr_26111_26171[(1)] = (10));


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
});})(c__25780__auto__,jobs,results,process,async))
;
return ((function (switch__25685__auto__,c__25780__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____0 = (function (){
var statearr_26112 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26112[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__);

(statearr_26112[(1)] = (1));

return statearr_26112;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____1 = (function (state_26086){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_26086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e26113){if((e26113 instanceof Object)){
var ex__25689__auto__ = e26113;
var statearr_26114_26172 = state_26086;
(statearr_26114_26172[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26173 = state_26086;
state_26086 = G__26173;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__ = function(state_26086){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____1.call(this,state_26086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto__,jobs,results,process,async))
})();
var state__25782__auto__ = (function (){var statearr_26115 = f__25781__auto__.call(null);
(statearr_26115[(6)] = c__25780__auto__);

return statearr_26115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto__,jobs,results,process,async))
);

return c__25780__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26175 = arguments.length;
switch (G__26175) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__26178 = arguments.length;
switch (G__26178) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__26181 = arguments.length;
switch (G__26181) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25780__auto___26230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto___26230,tc,fc){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto___26230,tc,fc){
return (function (state_26207){
var state_val_26208 = (state_26207[(1)]);
if((state_val_26208 === (7))){
var inst_26203 = (state_26207[(2)]);
var state_26207__$1 = state_26207;
var statearr_26209_26231 = state_26207__$1;
(statearr_26209_26231[(2)] = inst_26203);

(statearr_26209_26231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26208 === (1))){
var state_26207__$1 = state_26207;
var statearr_26210_26232 = state_26207__$1;
(statearr_26210_26232[(2)] = null);

(statearr_26210_26232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26208 === (4))){
var inst_26184 = (state_26207[(7)]);
var inst_26184__$1 = (state_26207[(2)]);
var inst_26185 = (inst_26184__$1 == null);
var state_26207__$1 = (function (){var statearr_26211 = state_26207;
(statearr_26211[(7)] = inst_26184__$1);

return statearr_26211;
})();
if(cljs.core.truth_(inst_26185)){
var statearr_26212_26233 = state_26207__$1;
(statearr_26212_26233[(1)] = (5));

} else {
var statearr_26213_26234 = state_26207__$1;
(statearr_26213_26234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26208 === (13))){
var state_26207__$1 = state_26207;
var statearr_26214_26235 = state_26207__$1;
(statearr_26214_26235[(2)] = null);

(statearr_26214_26235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26208 === (6))){
var inst_26184 = (state_26207[(7)]);
var inst_26190 = p.call(null,inst_26184);
var state_26207__$1 = state_26207;
if(cljs.core.truth_(inst_26190)){
var statearr_26215_26236 = state_26207__$1;
(statearr_26215_26236[(1)] = (9));

} else {
var statearr_26216_26237 = state_26207__$1;
(statearr_26216_26237[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26208 === (3))){
var inst_26205 = (state_26207[(2)]);
var state_26207__$1 = state_26207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26207__$1,inst_26205);
} else {
if((state_val_26208 === (12))){
var state_26207__$1 = state_26207;
var statearr_26217_26238 = state_26207__$1;
(statearr_26217_26238[(2)] = null);

(statearr_26217_26238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26208 === (2))){
var state_26207__$1 = state_26207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26207__$1,(4),ch);
} else {
if((state_val_26208 === (11))){
var inst_26184 = (state_26207[(7)]);
var inst_26194 = (state_26207[(2)]);
var state_26207__$1 = state_26207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26207__$1,(8),inst_26194,inst_26184);
} else {
if((state_val_26208 === (9))){
var state_26207__$1 = state_26207;
var statearr_26218_26239 = state_26207__$1;
(statearr_26218_26239[(2)] = tc);

(statearr_26218_26239[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26208 === (5))){
var inst_26187 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26188 = cljs.core.async.close_BANG_.call(null,fc);
var state_26207__$1 = (function (){var statearr_26219 = state_26207;
(statearr_26219[(8)] = inst_26187);

return statearr_26219;
})();
var statearr_26220_26240 = state_26207__$1;
(statearr_26220_26240[(2)] = inst_26188);

(statearr_26220_26240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26208 === (14))){
var inst_26201 = (state_26207[(2)]);
var state_26207__$1 = state_26207;
var statearr_26221_26241 = state_26207__$1;
(statearr_26221_26241[(2)] = inst_26201);

(statearr_26221_26241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26208 === (10))){
var state_26207__$1 = state_26207;
var statearr_26222_26242 = state_26207__$1;
(statearr_26222_26242[(2)] = fc);

(statearr_26222_26242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26208 === (8))){
var inst_26196 = (state_26207[(2)]);
var state_26207__$1 = state_26207;
if(cljs.core.truth_(inst_26196)){
var statearr_26223_26243 = state_26207__$1;
(statearr_26223_26243[(1)] = (12));

} else {
var statearr_26224_26244 = state_26207__$1;
(statearr_26224_26244[(1)] = (13));

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
});})(c__25780__auto___26230,tc,fc))
;
return ((function (switch__25685__auto__,c__25780__auto___26230,tc,fc){
return (function() {
var cljs$core$async$state_machine__25686__auto__ = null;
var cljs$core$async$state_machine__25686__auto____0 = (function (){
var statearr_26225 = [null,null,null,null,null,null,null,null,null];
(statearr_26225[(0)] = cljs$core$async$state_machine__25686__auto__);

(statearr_26225[(1)] = (1));

return statearr_26225;
});
var cljs$core$async$state_machine__25686__auto____1 = (function (state_26207){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_26207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e26226){if((e26226 instanceof Object)){
var ex__25689__auto__ = e26226;
var statearr_26227_26245 = state_26207;
(statearr_26227_26245[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26246 = state_26207;
state_26207 = G__26246;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$state_machine__25686__auto__ = function(state_26207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25686__auto____1.call(this,state_26207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25686__auto____0;
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25686__auto____1;
return cljs$core$async$state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto___26230,tc,fc))
})();
var state__25782__auto__ = (function (){var statearr_26228 = f__25781__auto__.call(null);
(statearr_26228[(6)] = c__25780__auto___26230);

return statearr_26228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto___26230,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25780__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto__){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto__){
return (function (state_26267){
var state_val_26268 = (state_26267[(1)]);
if((state_val_26268 === (7))){
var inst_26263 = (state_26267[(2)]);
var state_26267__$1 = state_26267;
var statearr_26269_26287 = state_26267__$1;
(statearr_26269_26287[(2)] = inst_26263);

(statearr_26269_26287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26268 === (1))){
var inst_26247 = init;
var state_26267__$1 = (function (){var statearr_26270 = state_26267;
(statearr_26270[(7)] = inst_26247);

return statearr_26270;
})();
var statearr_26271_26288 = state_26267__$1;
(statearr_26271_26288[(2)] = null);

(statearr_26271_26288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26268 === (4))){
var inst_26250 = (state_26267[(8)]);
var inst_26250__$1 = (state_26267[(2)]);
var inst_26251 = (inst_26250__$1 == null);
var state_26267__$1 = (function (){var statearr_26272 = state_26267;
(statearr_26272[(8)] = inst_26250__$1);

return statearr_26272;
})();
if(cljs.core.truth_(inst_26251)){
var statearr_26273_26289 = state_26267__$1;
(statearr_26273_26289[(1)] = (5));

} else {
var statearr_26274_26290 = state_26267__$1;
(statearr_26274_26290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26268 === (6))){
var inst_26250 = (state_26267[(8)]);
var inst_26254 = (state_26267[(9)]);
var inst_26247 = (state_26267[(7)]);
var inst_26254__$1 = f.call(null,inst_26247,inst_26250);
var inst_26255 = cljs.core.reduced_QMARK_.call(null,inst_26254__$1);
var state_26267__$1 = (function (){var statearr_26275 = state_26267;
(statearr_26275[(9)] = inst_26254__$1);

return statearr_26275;
})();
if(inst_26255){
var statearr_26276_26291 = state_26267__$1;
(statearr_26276_26291[(1)] = (8));

} else {
var statearr_26277_26292 = state_26267__$1;
(statearr_26277_26292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26268 === (3))){
var inst_26265 = (state_26267[(2)]);
var state_26267__$1 = state_26267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26267__$1,inst_26265);
} else {
if((state_val_26268 === (2))){
var state_26267__$1 = state_26267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26267__$1,(4),ch);
} else {
if((state_val_26268 === (9))){
var inst_26254 = (state_26267[(9)]);
var inst_26247 = inst_26254;
var state_26267__$1 = (function (){var statearr_26278 = state_26267;
(statearr_26278[(7)] = inst_26247);

return statearr_26278;
})();
var statearr_26279_26293 = state_26267__$1;
(statearr_26279_26293[(2)] = null);

(statearr_26279_26293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26268 === (5))){
var inst_26247 = (state_26267[(7)]);
var state_26267__$1 = state_26267;
var statearr_26280_26294 = state_26267__$1;
(statearr_26280_26294[(2)] = inst_26247);

(statearr_26280_26294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26268 === (10))){
var inst_26261 = (state_26267[(2)]);
var state_26267__$1 = state_26267;
var statearr_26281_26295 = state_26267__$1;
(statearr_26281_26295[(2)] = inst_26261);

(statearr_26281_26295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26268 === (8))){
var inst_26254 = (state_26267[(9)]);
var inst_26257 = cljs.core.deref.call(null,inst_26254);
var state_26267__$1 = state_26267;
var statearr_26282_26296 = state_26267__$1;
(statearr_26282_26296[(2)] = inst_26257);

(statearr_26282_26296[(1)] = (10));


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
});})(c__25780__auto__))
;
return ((function (switch__25685__auto__,c__25780__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25686__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25686__auto____0 = (function (){
var statearr_26283 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26283[(0)] = cljs$core$async$reduce_$_state_machine__25686__auto__);

(statearr_26283[(1)] = (1));

return statearr_26283;
});
var cljs$core$async$reduce_$_state_machine__25686__auto____1 = (function (state_26267){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_26267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e26284){if((e26284 instanceof Object)){
var ex__25689__auto__ = e26284;
var statearr_26285_26297 = state_26267;
(statearr_26285_26297[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26298 = state_26267;
state_26267 = G__26298;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25686__auto__ = function(state_26267){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25686__auto____1.call(this,state_26267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25686__auto____0;
cljs$core$async$reduce_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25686__auto____1;
return cljs$core$async$reduce_$_state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto__))
})();
var state__25782__auto__ = (function (){var statearr_26286 = f__25781__auto__.call(null);
(statearr_26286[(6)] = c__25780__auto__);

return statearr_26286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto__))
);

return c__25780__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25780__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto__,f__$1){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto__,f__$1){
return (function (state_26304){
var state_val_26305 = (state_26304[(1)]);
if((state_val_26305 === (1))){
var inst_26299 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26304__$1 = state_26304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26304__$1,(2),inst_26299);
} else {
if((state_val_26305 === (2))){
var inst_26301 = (state_26304[(2)]);
var inst_26302 = f__$1.call(null,inst_26301);
var state_26304__$1 = state_26304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26304__$1,inst_26302);
} else {
return null;
}
}
});})(c__25780__auto__,f__$1))
;
return ((function (switch__25685__auto__,c__25780__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25686__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25686__auto____0 = (function (){
var statearr_26306 = [null,null,null,null,null,null,null];
(statearr_26306[(0)] = cljs$core$async$transduce_$_state_machine__25686__auto__);

(statearr_26306[(1)] = (1));

return statearr_26306;
});
var cljs$core$async$transduce_$_state_machine__25686__auto____1 = (function (state_26304){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_26304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e26307){if((e26307 instanceof Object)){
var ex__25689__auto__ = e26307;
var statearr_26308_26310 = state_26304;
(statearr_26308_26310[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26311 = state_26304;
state_26304 = G__26311;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25686__auto__ = function(state_26304){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25686__auto____1.call(this,state_26304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25686__auto____0;
cljs$core$async$transduce_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25686__auto____1;
return cljs$core$async$transduce_$_state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto__,f__$1))
})();
var state__25782__auto__ = (function (){var statearr_26309 = f__25781__auto__.call(null);
(statearr_26309[(6)] = c__25780__auto__);

return statearr_26309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto__,f__$1))
);

return c__25780__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__26313 = arguments.length;
switch (G__26313) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25780__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto__){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto__){
return (function (state_26338){
var state_val_26339 = (state_26338[(1)]);
if((state_val_26339 === (7))){
var inst_26320 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
var statearr_26340_26361 = state_26338__$1;
(statearr_26340_26361[(2)] = inst_26320);

(statearr_26340_26361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (1))){
var inst_26314 = cljs.core.seq.call(null,coll);
var inst_26315 = inst_26314;
var state_26338__$1 = (function (){var statearr_26341 = state_26338;
(statearr_26341[(7)] = inst_26315);

return statearr_26341;
})();
var statearr_26342_26362 = state_26338__$1;
(statearr_26342_26362[(2)] = null);

(statearr_26342_26362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (4))){
var inst_26315 = (state_26338[(7)]);
var inst_26318 = cljs.core.first.call(null,inst_26315);
var state_26338__$1 = state_26338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26338__$1,(7),ch,inst_26318);
} else {
if((state_val_26339 === (13))){
var inst_26332 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
var statearr_26343_26363 = state_26338__$1;
(statearr_26343_26363[(2)] = inst_26332);

(statearr_26343_26363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (6))){
var inst_26323 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
if(cljs.core.truth_(inst_26323)){
var statearr_26344_26364 = state_26338__$1;
(statearr_26344_26364[(1)] = (8));

} else {
var statearr_26345_26365 = state_26338__$1;
(statearr_26345_26365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (3))){
var inst_26336 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26338__$1,inst_26336);
} else {
if((state_val_26339 === (12))){
var state_26338__$1 = state_26338;
var statearr_26346_26366 = state_26338__$1;
(statearr_26346_26366[(2)] = null);

(statearr_26346_26366[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (2))){
var inst_26315 = (state_26338[(7)]);
var state_26338__$1 = state_26338;
if(cljs.core.truth_(inst_26315)){
var statearr_26347_26367 = state_26338__$1;
(statearr_26347_26367[(1)] = (4));

} else {
var statearr_26348_26368 = state_26338__$1;
(statearr_26348_26368[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (11))){
var inst_26329 = cljs.core.async.close_BANG_.call(null,ch);
var state_26338__$1 = state_26338;
var statearr_26349_26369 = state_26338__$1;
(statearr_26349_26369[(2)] = inst_26329);

(statearr_26349_26369[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (9))){
var state_26338__$1 = state_26338;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26350_26370 = state_26338__$1;
(statearr_26350_26370[(1)] = (11));

} else {
var statearr_26351_26371 = state_26338__$1;
(statearr_26351_26371[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (5))){
var inst_26315 = (state_26338[(7)]);
var state_26338__$1 = state_26338;
var statearr_26352_26372 = state_26338__$1;
(statearr_26352_26372[(2)] = inst_26315);

(statearr_26352_26372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (10))){
var inst_26334 = (state_26338[(2)]);
var state_26338__$1 = state_26338;
var statearr_26353_26373 = state_26338__$1;
(statearr_26353_26373[(2)] = inst_26334);

(statearr_26353_26373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (8))){
var inst_26315 = (state_26338[(7)]);
var inst_26325 = cljs.core.next.call(null,inst_26315);
var inst_26315__$1 = inst_26325;
var state_26338__$1 = (function (){var statearr_26354 = state_26338;
(statearr_26354[(7)] = inst_26315__$1);

return statearr_26354;
})();
var statearr_26355_26374 = state_26338__$1;
(statearr_26355_26374[(2)] = null);

(statearr_26355_26374[(1)] = (2));


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
});})(c__25780__auto__))
;
return ((function (switch__25685__auto__,c__25780__auto__){
return (function() {
var cljs$core$async$state_machine__25686__auto__ = null;
var cljs$core$async$state_machine__25686__auto____0 = (function (){
var statearr_26356 = [null,null,null,null,null,null,null,null];
(statearr_26356[(0)] = cljs$core$async$state_machine__25686__auto__);

(statearr_26356[(1)] = (1));

return statearr_26356;
});
var cljs$core$async$state_machine__25686__auto____1 = (function (state_26338){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_26338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e26357){if((e26357 instanceof Object)){
var ex__25689__auto__ = e26357;
var statearr_26358_26375 = state_26338;
(statearr_26358_26375[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26376 = state_26338;
state_26338 = G__26376;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$state_machine__25686__auto__ = function(state_26338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25686__auto____1.call(this,state_26338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25686__auto____0;
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25686__auto____1;
return cljs$core$async$state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto__))
})();
var state__25782__auto__ = (function (){var statearr_26359 = f__25781__auto__.call(null);
(statearr_26359[(6)] = c__25780__auto__);

return statearr_26359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto__))
);

return c__25780__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26377 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26377 = (function (ch,cs,meta26378){
this.ch = ch;
this.cs = cs;
this.meta26378 = meta26378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26379,meta26378__$1){
var self__ = this;
var _26379__$1 = this;
return (new cljs.core.async.t_cljs$core$async26377(self__.ch,self__.cs,meta26378__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26377.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26379){
var self__ = this;
var _26379__$1 = this;
return self__.meta26378;
});})(cs))
;

cljs.core.async.t_cljs$core$async26377.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26377.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26377.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26377.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26377.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26377.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26377.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26378","meta26378",-1011469547,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26377.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26377";

cljs.core.async.t_cljs$core$async26377.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26377");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26377.
 */
cljs.core.async.__GT_t_cljs$core$async26377 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26377(ch__$1,cs__$1,meta26378){
return (new cljs.core.async.t_cljs$core$async26377(ch__$1,cs__$1,meta26378));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26377(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25780__auto___26599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto___26599,cs,m,dchan,dctr,done){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto___26599,cs,m,dchan,dctr,done){
return (function (state_26514){
var state_val_26515 = (state_26514[(1)]);
if((state_val_26515 === (7))){
var inst_26510 = (state_26514[(2)]);
var state_26514__$1 = state_26514;
var statearr_26516_26600 = state_26514__$1;
(statearr_26516_26600[(2)] = inst_26510);

(statearr_26516_26600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (20))){
var inst_26413 = (state_26514[(7)]);
var inst_26425 = cljs.core.first.call(null,inst_26413);
var inst_26426 = cljs.core.nth.call(null,inst_26425,(0),null);
var inst_26427 = cljs.core.nth.call(null,inst_26425,(1),null);
var state_26514__$1 = (function (){var statearr_26517 = state_26514;
(statearr_26517[(8)] = inst_26426);

return statearr_26517;
})();
if(cljs.core.truth_(inst_26427)){
var statearr_26518_26601 = state_26514__$1;
(statearr_26518_26601[(1)] = (22));

} else {
var statearr_26519_26602 = state_26514__$1;
(statearr_26519_26602[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (27))){
var inst_26382 = (state_26514[(9)]);
var inst_26462 = (state_26514[(10)]);
var inst_26457 = (state_26514[(11)]);
var inst_26455 = (state_26514[(12)]);
var inst_26462__$1 = cljs.core._nth.call(null,inst_26455,inst_26457);
var inst_26463 = cljs.core.async.put_BANG_.call(null,inst_26462__$1,inst_26382,done);
var state_26514__$1 = (function (){var statearr_26520 = state_26514;
(statearr_26520[(10)] = inst_26462__$1);

return statearr_26520;
})();
if(cljs.core.truth_(inst_26463)){
var statearr_26521_26603 = state_26514__$1;
(statearr_26521_26603[(1)] = (30));

} else {
var statearr_26522_26604 = state_26514__$1;
(statearr_26522_26604[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (1))){
var state_26514__$1 = state_26514;
var statearr_26523_26605 = state_26514__$1;
(statearr_26523_26605[(2)] = null);

(statearr_26523_26605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (24))){
var inst_26413 = (state_26514[(7)]);
var inst_26432 = (state_26514[(2)]);
var inst_26433 = cljs.core.next.call(null,inst_26413);
var inst_26391 = inst_26433;
var inst_26392 = null;
var inst_26393 = (0);
var inst_26394 = (0);
var state_26514__$1 = (function (){var statearr_26524 = state_26514;
(statearr_26524[(13)] = inst_26394);

(statearr_26524[(14)] = inst_26391);

(statearr_26524[(15)] = inst_26432);

(statearr_26524[(16)] = inst_26393);

(statearr_26524[(17)] = inst_26392);

return statearr_26524;
})();
var statearr_26525_26606 = state_26514__$1;
(statearr_26525_26606[(2)] = null);

(statearr_26525_26606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (39))){
var state_26514__$1 = state_26514;
var statearr_26529_26607 = state_26514__$1;
(statearr_26529_26607[(2)] = null);

(statearr_26529_26607[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (4))){
var inst_26382 = (state_26514[(9)]);
var inst_26382__$1 = (state_26514[(2)]);
var inst_26383 = (inst_26382__$1 == null);
var state_26514__$1 = (function (){var statearr_26530 = state_26514;
(statearr_26530[(9)] = inst_26382__$1);

return statearr_26530;
})();
if(cljs.core.truth_(inst_26383)){
var statearr_26531_26608 = state_26514__$1;
(statearr_26531_26608[(1)] = (5));

} else {
var statearr_26532_26609 = state_26514__$1;
(statearr_26532_26609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (15))){
var inst_26394 = (state_26514[(13)]);
var inst_26391 = (state_26514[(14)]);
var inst_26393 = (state_26514[(16)]);
var inst_26392 = (state_26514[(17)]);
var inst_26409 = (state_26514[(2)]);
var inst_26410 = (inst_26394 + (1));
var tmp26526 = inst_26391;
var tmp26527 = inst_26393;
var tmp26528 = inst_26392;
var inst_26391__$1 = tmp26526;
var inst_26392__$1 = tmp26528;
var inst_26393__$1 = tmp26527;
var inst_26394__$1 = inst_26410;
var state_26514__$1 = (function (){var statearr_26533 = state_26514;
(statearr_26533[(13)] = inst_26394__$1);

(statearr_26533[(14)] = inst_26391__$1);

(statearr_26533[(18)] = inst_26409);

(statearr_26533[(16)] = inst_26393__$1);

(statearr_26533[(17)] = inst_26392__$1);

return statearr_26533;
})();
var statearr_26534_26610 = state_26514__$1;
(statearr_26534_26610[(2)] = null);

(statearr_26534_26610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (21))){
var inst_26436 = (state_26514[(2)]);
var state_26514__$1 = state_26514;
var statearr_26538_26611 = state_26514__$1;
(statearr_26538_26611[(2)] = inst_26436);

(statearr_26538_26611[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (31))){
var inst_26462 = (state_26514[(10)]);
var inst_26466 = done.call(null,null);
var inst_26467 = cljs.core.async.untap_STAR_.call(null,m,inst_26462);
var state_26514__$1 = (function (){var statearr_26539 = state_26514;
(statearr_26539[(19)] = inst_26466);

return statearr_26539;
})();
var statearr_26540_26612 = state_26514__$1;
(statearr_26540_26612[(2)] = inst_26467);

(statearr_26540_26612[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (32))){
var inst_26454 = (state_26514[(20)]);
var inst_26457 = (state_26514[(11)]);
var inst_26456 = (state_26514[(21)]);
var inst_26455 = (state_26514[(12)]);
var inst_26469 = (state_26514[(2)]);
var inst_26470 = (inst_26457 + (1));
var tmp26535 = inst_26454;
var tmp26536 = inst_26456;
var tmp26537 = inst_26455;
var inst_26454__$1 = tmp26535;
var inst_26455__$1 = tmp26537;
var inst_26456__$1 = tmp26536;
var inst_26457__$1 = inst_26470;
var state_26514__$1 = (function (){var statearr_26541 = state_26514;
(statearr_26541[(22)] = inst_26469);

(statearr_26541[(20)] = inst_26454__$1);

(statearr_26541[(11)] = inst_26457__$1);

(statearr_26541[(21)] = inst_26456__$1);

(statearr_26541[(12)] = inst_26455__$1);

return statearr_26541;
})();
var statearr_26542_26613 = state_26514__$1;
(statearr_26542_26613[(2)] = null);

(statearr_26542_26613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (40))){
var inst_26482 = (state_26514[(23)]);
var inst_26486 = done.call(null,null);
var inst_26487 = cljs.core.async.untap_STAR_.call(null,m,inst_26482);
var state_26514__$1 = (function (){var statearr_26543 = state_26514;
(statearr_26543[(24)] = inst_26486);

return statearr_26543;
})();
var statearr_26544_26614 = state_26514__$1;
(statearr_26544_26614[(2)] = inst_26487);

(statearr_26544_26614[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (33))){
var inst_26473 = (state_26514[(25)]);
var inst_26475 = cljs.core.chunked_seq_QMARK_.call(null,inst_26473);
var state_26514__$1 = state_26514;
if(inst_26475){
var statearr_26545_26615 = state_26514__$1;
(statearr_26545_26615[(1)] = (36));

} else {
var statearr_26546_26616 = state_26514__$1;
(statearr_26546_26616[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (13))){
var inst_26403 = (state_26514[(26)]);
var inst_26406 = cljs.core.async.close_BANG_.call(null,inst_26403);
var state_26514__$1 = state_26514;
var statearr_26547_26617 = state_26514__$1;
(statearr_26547_26617[(2)] = inst_26406);

(statearr_26547_26617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (22))){
var inst_26426 = (state_26514[(8)]);
var inst_26429 = cljs.core.async.close_BANG_.call(null,inst_26426);
var state_26514__$1 = state_26514;
var statearr_26548_26618 = state_26514__$1;
(statearr_26548_26618[(2)] = inst_26429);

(statearr_26548_26618[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (36))){
var inst_26473 = (state_26514[(25)]);
var inst_26477 = cljs.core.chunk_first.call(null,inst_26473);
var inst_26478 = cljs.core.chunk_rest.call(null,inst_26473);
var inst_26479 = cljs.core.count.call(null,inst_26477);
var inst_26454 = inst_26478;
var inst_26455 = inst_26477;
var inst_26456 = inst_26479;
var inst_26457 = (0);
var state_26514__$1 = (function (){var statearr_26549 = state_26514;
(statearr_26549[(20)] = inst_26454);

(statearr_26549[(11)] = inst_26457);

(statearr_26549[(21)] = inst_26456);

(statearr_26549[(12)] = inst_26455);

return statearr_26549;
})();
var statearr_26550_26619 = state_26514__$1;
(statearr_26550_26619[(2)] = null);

(statearr_26550_26619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (41))){
var inst_26473 = (state_26514[(25)]);
var inst_26489 = (state_26514[(2)]);
var inst_26490 = cljs.core.next.call(null,inst_26473);
var inst_26454 = inst_26490;
var inst_26455 = null;
var inst_26456 = (0);
var inst_26457 = (0);
var state_26514__$1 = (function (){var statearr_26551 = state_26514;
(statearr_26551[(20)] = inst_26454);

(statearr_26551[(11)] = inst_26457);

(statearr_26551[(21)] = inst_26456);

(statearr_26551[(27)] = inst_26489);

(statearr_26551[(12)] = inst_26455);

return statearr_26551;
})();
var statearr_26552_26620 = state_26514__$1;
(statearr_26552_26620[(2)] = null);

(statearr_26552_26620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (43))){
var state_26514__$1 = state_26514;
var statearr_26553_26621 = state_26514__$1;
(statearr_26553_26621[(2)] = null);

(statearr_26553_26621[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (29))){
var inst_26498 = (state_26514[(2)]);
var state_26514__$1 = state_26514;
var statearr_26554_26622 = state_26514__$1;
(statearr_26554_26622[(2)] = inst_26498);

(statearr_26554_26622[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (44))){
var inst_26507 = (state_26514[(2)]);
var state_26514__$1 = (function (){var statearr_26555 = state_26514;
(statearr_26555[(28)] = inst_26507);

return statearr_26555;
})();
var statearr_26556_26623 = state_26514__$1;
(statearr_26556_26623[(2)] = null);

(statearr_26556_26623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (6))){
var inst_26446 = (state_26514[(29)]);
var inst_26445 = cljs.core.deref.call(null,cs);
var inst_26446__$1 = cljs.core.keys.call(null,inst_26445);
var inst_26447 = cljs.core.count.call(null,inst_26446__$1);
var inst_26448 = cljs.core.reset_BANG_.call(null,dctr,inst_26447);
var inst_26453 = cljs.core.seq.call(null,inst_26446__$1);
var inst_26454 = inst_26453;
var inst_26455 = null;
var inst_26456 = (0);
var inst_26457 = (0);
var state_26514__$1 = (function (){var statearr_26557 = state_26514;
(statearr_26557[(20)] = inst_26454);

(statearr_26557[(11)] = inst_26457);

(statearr_26557[(21)] = inst_26456);

(statearr_26557[(29)] = inst_26446__$1);

(statearr_26557[(30)] = inst_26448);

(statearr_26557[(12)] = inst_26455);

return statearr_26557;
})();
var statearr_26558_26624 = state_26514__$1;
(statearr_26558_26624[(2)] = null);

(statearr_26558_26624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (28))){
var inst_26473 = (state_26514[(25)]);
var inst_26454 = (state_26514[(20)]);
var inst_26473__$1 = cljs.core.seq.call(null,inst_26454);
var state_26514__$1 = (function (){var statearr_26559 = state_26514;
(statearr_26559[(25)] = inst_26473__$1);

return statearr_26559;
})();
if(inst_26473__$1){
var statearr_26560_26625 = state_26514__$1;
(statearr_26560_26625[(1)] = (33));

} else {
var statearr_26561_26626 = state_26514__$1;
(statearr_26561_26626[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (25))){
var inst_26457 = (state_26514[(11)]);
var inst_26456 = (state_26514[(21)]);
var inst_26459 = (inst_26457 < inst_26456);
var inst_26460 = inst_26459;
var state_26514__$1 = state_26514;
if(cljs.core.truth_(inst_26460)){
var statearr_26562_26627 = state_26514__$1;
(statearr_26562_26627[(1)] = (27));

} else {
var statearr_26563_26628 = state_26514__$1;
(statearr_26563_26628[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (34))){
var state_26514__$1 = state_26514;
var statearr_26564_26629 = state_26514__$1;
(statearr_26564_26629[(2)] = null);

(statearr_26564_26629[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (17))){
var state_26514__$1 = state_26514;
var statearr_26565_26630 = state_26514__$1;
(statearr_26565_26630[(2)] = null);

(statearr_26565_26630[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (3))){
var inst_26512 = (state_26514[(2)]);
var state_26514__$1 = state_26514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26514__$1,inst_26512);
} else {
if((state_val_26515 === (12))){
var inst_26441 = (state_26514[(2)]);
var state_26514__$1 = state_26514;
var statearr_26566_26631 = state_26514__$1;
(statearr_26566_26631[(2)] = inst_26441);

(statearr_26566_26631[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (2))){
var state_26514__$1 = state_26514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26514__$1,(4),ch);
} else {
if((state_val_26515 === (23))){
var state_26514__$1 = state_26514;
var statearr_26567_26632 = state_26514__$1;
(statearr_26567_26632[(2)] = null);

(statearr_26567_26632[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (35))){
var inst_26496 = (state_26514[(2)]);
var state_26514__$1 = state_26514;
var statearr_26568_26633 = state_26514__$1;
(statearr_26568_26633[(2)] = inst_26496);

(statearr_26568_26633[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (19))){
var inst_26413 = (state_26514[(7)]);
var inst_26417 = cljs.core.chunk_first.call(null,inst_26413);
var inst_26418 = cljs.core.chunk_rest.call(null,inst_26413);
var inst_26419 = cljs.core.count.call(null,inst_26417);
var inst_26391 = inst_26418;
var inst_26392 = inst_26417;
var inst_26393 = inst_26419;
var inst_26394 = (0);
var state_26514__$1 = (function (){var statearr_26569 = state_26514;
(statearr_26569[(13)] = inst_26394);

(statearr_26569[(14)] = inst_26391);

(statearr_26569[(16)] = inst_26393);

(statearr_26569[(17)] = inst_26392);

return statearr_26569;
})();
var statearr_26570_26634 = state_26514__$1;
(statearr_26570_26634[(2)] = null);

(statearr_26570_26634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (11))){
var inst_26391 = (state_26514[(14)]);
var inst_26413 = (state_26514[(7)]);
var inst_26413__$1 = cljs.core.seq.call(null,inst_26391);
var state_26514__$1 = (function (){var statearr_26571 = state_26514;
(statearr_26571[(7)] = inst_26413__$1);

return statearr_26571;
})();
if(inst_26413__$1){
var statearr_26572_26635 = state_26514__$1;
(statearr_26572_26635[(1)] = (16));

} else {
var statearr_26573_26636 = state_26514__$1;
(statearr_26573_26636[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (9))){
var inst_26443 = (state_26514[(2)]);
var state_26514__$1 = state_26514;
var statearr_26574_26637 = state_26514__$1;
(statearr_26574_26637[(2)] = inst_26443);

(statearr_26574_26637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (5))){
var inst_26389 = cljs.core.deref.call(null,cs);
var inst_26390 = cljs.core.seq.call(null,inst_26389);
var inst_26391 = inst_26390;
var inst_26392 = null;
var inst_26393 = (0);
var inst_26394 = (0);
var state_26514__$1 = (function (){var statearr_26575 = state_26514;
(statearr_26575[(13)] = inst_26394);

(statearr_26575[(14)] = inst_26391);

(statearr_26575[(16)] = inst_26393);

(statearr_26575[(17)] = inst_26392);

return statearr_26575;
})();
var statearr_26576_26638 = state_26514__$1;
(statearr_26576_26638[(2)] = null);

(statearr_26576_26638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (14))){
var state_26514__$1 = state_26514;
var statearr_26577_26639 = state_26514__$1;
(statearr_26577_26639[(2)] = null);

(statearr_26577_26639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (45))){
var inst_26504 = (state_26514[(2)]);
var state_26514__$1 = state_26514;
var statearr_26578_26640 = state_26514__$1;
(statearr_26578_26640[(2)] = inst_26504);

(statearr_26578_26640[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (26))){
var inst_26446 = (state_26514[(29)]);
var inst_26500 = (state_26514[(2)]);
var inst_26501 = cljs.core.seq.call(null,inst_26446);
var state_26514__$1 = (function (){var statearr_26579 = state_26514;
(statearr_26579[(31)] = inst_26500);

return statearr_26579;
})();
if(inst_26501){
var statearr_26580_26641 = state_26514__$1;
(statearr_26580_26641[(1)] = (42));

} else {
var statearr_26581_26642 = state_26514__$1;
(statearr_26581_26642[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (16))){
var inst_26413 = (state_26514[(7)]);
var inst_26415 = cljs.core.chunked_seq_QMARK_.call(null,inst_26413);
var state_26514__$1 = state_26514;
if(inst_26415){
var statearr_26582_26643 = state_26514__$1;
(statearr_26582_26643[(1)] = (19));

} else {
var statearr_26583_26644 = state_26514__$1;
(statearr_26583_26644[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (38))){
var inst_26493 = (state_26514[(2)]);
var state_26514__$1 = state_26514;
var statearr_26584_26645 = state_26514__$1;
(statearr_26584_26645[(2)] = inst_26493);

(statearr_26584_26645[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (30))){
var state_26514__$1 = state_26514;
var statearr_26585_26646 = state_26514__$1;
(statearr_26585_26646[(2)] = null);

(statearr_26585_26646[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (10))){
var inst_26394 = (state_26514[(13)]);
var inst_26392 = (state_26514[(17)]);
var inst_26402 = cljs.core._nth.call(null,inst_26392,inst_26394);
var inst_26403 = cljs.core.nth.call(null,inst_26402,(0),null);
var inst_26404 = cljs.core.nth.call(null,inst_26402,(1),null);
var state_26514__$1 = (function (){var statearr_26586 = state_26514;
(statearr_26586[(26)] = inst_26403);

return statearr_26586;
})();
if(cljs.core.truth_(inst_26404)){
var statearr_26587_26647 = state_26514__$1;
(statearr_26587_26647[(1)] = (13));

} else {
var statearr_26588_26648 = state_26514__$1;
(statearr_26588_26648[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (18))){
var inst_26439 = (state_26514[(2)]);
var state_26514__$1 = state_26514;
var statearr_26589_26649 = state_26514__$1;
(statearr_26589_26649[(2)] = inst_26439);

(statearr_26589_26649[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (42))){
var state_26514__$1 = state_26514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26514__$1,(45),dchan);
} else {
if((state_val_26515 === (37))){
var inst_26473 = (state_26514[(25)]);
var inst_26382 = (state_26514[(9)]);
var inst_26482 = (state_26514[(23)]);
var inst_26482__$1 = cljs.core.first.call(null,inst_26473);
var inst_26483 = cljs.core.async.put_BANG_.call(null,inst_26482__$1,inst_26382,done);
var state_26514__$1 = (function (){var statearr_26590 = state_26514;
(statearr_26590[(23)] = inst_26482__$1);

return statearr_26590;
})();
if(cljs.core.truth_(inst_26483)){
var statearr_26591_26650 = state_26514__$1;
(statearr_26591_26650[(1)] = (39));

} else {
var statearr_26592_26651 = state_26514__$1;
(statearr_26592_26651[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26515 === (8))){
var inst_26394 = (state_26514[(13)]);
var inst_26393 = (state_26514[(16)]);
var inst_26396 = (inst_26394 < inst_26393);
var inst_26397 = inst_26396;
var state_26514__$1 = state_26514;
if(cljs.core.truth_(inst_26397)){
var statearr_26593_26652 = state_26514__$1;
(statearr_26593_26652[(1)] = (10));

} else {
var statearr_26594_26653 = state_26514__$1;
(statearr_26594_26653[(1)] = (11));

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
});})(c__25780__auto___26599,cs,m,dchan,dctr,done))
;
return ((function (switch__25685__auto__,c__25780__auto___26599,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25686__auto__ = null;
var cljs$core$async$mult_$_state_machine__25686__auto____0 = (function (){
var statearr_26595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26595[(0)] = cljs$core$async$mult_$_state_machine__25686__auto__);

(statearr_26595[(1)] = (1));

return statearr_26595;
});
var cljs$core$async$mult_$_state_machine__25686__auto____1 = (function (state_26514){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_26514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e26596){if((e26596 instanceof Object)){
var ex__25689__auto__ = e26596;
var statearr_26597_26654 = state_26514;
(statearr_26597_26654[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26655 = state_26514;
state_26514 = G__26655;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25686__auto__ = function(state_26514){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25686__auto____1.call(this,state_26514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25686__auto____0;
cljs$core$async$mult_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25686__auto____1;
return cljs$core$async$mult_$_state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto___26599,cs,m,dchan,dctr,done))
})();
var state__25782__auto__ = (function (){var statearr_26598 = f__25781__auto__.call(null);
(statearr_26598[(6)] = c__25780__auto___26599);

return statearr_26598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto___26599,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__26657 = arguments.length;
switch (G__26657) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___26669 = arguments.length;
var i__4642__auto___26670 = (0);
while(true){
if((i__4642__auto___26670 < len__4641__auto___26669)){
args__4647__auto__.push((arguments[i__4642__auto___26670]));

var G__26671 = (i__4642__auto___26670 + (1));
i__4642__auto___26670 = G__26671;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26663){
var map__26664 = p__26663;
var map__26664__$1 = (((((!((map__26664 == null))))?(((((map__26664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26664):map__26664);
var opts = map__26664__$1;
var statearr_26666_26672 = state;
(statearr_26666_26672[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__26664,map__26664__$1,opts){
return (function (val){
var statearr_26667_26673 = state;
(statearr_26667_26673[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26664,map__26664__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_26668_26674 = state;
(statearr_26668_26674[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26659){
var G__26660 = cljs.core.first.call(null,seq26659);
var seq26659__$1 = cljs.core.next.call(null,seq26659);
var G__26661 = cljs.core.first.call(null,seq26659__$1);
var seq26659__$2 = cljs.core.next.call(null,seq26659__$1);
var G__26662 = cljs.core.first.call(null,seq26659__$2);
var seq26659__$3 = cljs.core.next.call(null,seq26659__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26660,G__26661,G__26662,seq26659__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26675 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26675 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta26676){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta26676 = meta26676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26677,meta26676__$1){
var self__ = this;
var _26677__$1 = this;
return (new cljs.core.async.t_cljs$core$async26675(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta26676__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26677){
var self__ = this;
var _26677__$1 = this;
return self__.meta26676;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26675.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26675.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26675.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26675.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26675.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26675.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26675.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26675.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26675.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta26676","meta26676",1705569903,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26675.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26675";

cljs.core.async.t_cljs$core$async26675.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26675");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26675.
 */
cljs.core.async.__GT_t_cljs$core$async26675 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26675(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26676){
return (new cljs.core.async.t_cljs$core$async26675(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26676));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26675(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25780__auto___26839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto___26839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto___26839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26779){
var state_val_26780 = (state_26779[(1)]);
if((state_val_26780 === (7))){
var inst_26694 = (state_26779[(2)]);
var state_26779__$1 = state_26779;
var statearr_26781_26840 = state_26779__$1;
(statearr_26781_26840[(2)] = inst_26694);

(statearr_26781_26840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (20))){
var inst_26706 = (state_26779[(7)]);
var state_26779__$1 = state_26779;
var statearr_26782_26841 = state_26779__$1;
(statearr_26782_26841[(2)] = inst_26706);

(statearr_26782_26841[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (27))){
var state_26779__$1 = state_26779;
var statearr_26783_26842 = state_26779__$1;
(statearr_26783_26842[(2)] = null);

(statearr_26783_26842[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (1))){
var inst_26681 = (state_26779[(8)]);
var inst_26681__$1 = calc_state.call(null);
var inst_26683 = (inst_26681__$1 == null);
var inst_26684 = cljs.core.not.call(null,inst_26683);
var state_26779__$1 = (function (){var statearr_26784 = state_26779;
(statearr_26784[(8)] = inst_26681__$1);

return statearr_26784;
})();
if(inst_26684){
var statearr_26785_26843 = state_26779__$1;
(statearr_26785_26843[(1)] = (2));

} else {
var statearr_26786_26844 = state_26779__$1;
(statearr_26786_26844[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (24))){
var inst_26739 = (state_26779[(9)]);
var inst_26753 = (state_26779[(10)]);
var inst_26730 = (state_26779[(11)]);
var inst_26753__$1 = inst_26730.call(null,inst_26739);
var state_26779__$1 = (function (){var statearr_26787 = state_26779;
(statearr_26787[(10)] = inst_26753__$1);

return statearr_26787;
})();
if(cljs.core.truth_(inst_26753__$1)){
var statearr_26788_26845 = state_26779__$1;
(statearr_26788_26845[(1)] = (29));

} else {
var statearr_26789_26846 = state_26779__$1;
(statearr_26789_26846[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (4))){
var inst_26697 = (state_26779[(2)]);
var state_26779__$1 = state_26779;
if(cljs.core.truth_(inst_26697)){
var statearr_26790_26847 = state_26779__$1;
(statearr_26790_26847[(1)] = (8));

} else {
var statearr_26791_26848 = state_26779__$1;
(statearr_26791_26848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (15))){
var inst_26724 = (state_26779[(2)]);
var state_26779__$1 = state_26779;
if(cljs.core.truth_(inst_26724)){
var statearr_26792_26849 = state_26779__$1;
(statearr_26792_26849[(1)] = (19));

} else {
var statearr_26793_26850 = state_26779__$1;
(statearr_26793_26850[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (21))){
var inst_26729 = (state_26779[(12)]);
var inst_26729__$1 = (state_26779[(2)]);
var inst_26730 = cljs.core.get.call(null,inst_26729__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26731 = cljs.core.get.call(null,inst_26729__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26732 = cljs.core.get.call(null,inst_26729__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26779__$1 = (function (){var statearr_26794 = state_26779;
(statearr_26794[(13)] = inst_26731);

(statearr_26794[(12)] = inst_26729__$1);

(statearr_26794[(11)] = inst_26730);

return statearr_26794;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26779__$1,(22),inst_26732);
} else {
if((state_val_26780 === (31))){
var inst_26761 = (state_26779[(2)]);
var state_26779__$1 = state_26779;
if(cljs.core.truth_(inst_26761)){
var statearr_26795_26851 = state_26779__$1;
(statearr_26795_26851[(1)] = (32));

} else {
var statearr_26796_26852 = state_26779__$1;
(statearr_26796_26852[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (32))){
var inst_26738 = (state_26779[(14)]);
var state_26779__$1 = state_26779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26779__$1,(35),out,inst_26738);
} else {
if((state_val_26780 === (33))){
var inst_26729 = (state_26779[(12)]);
var inst_26706 = inst_26729;
var state_26779__$1 = (function (){var statearr_26797 = state_26779;
(statearr_26797[(7)] = inst_26706);

return statearr_26797;
})();
var statearr_26798_26853 = state_26779__$1;
(statearr_26798_26853[(2)] = null);

(statearr_26798_26853[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (13))){
var inst_26706 = (state_26779[(7)]);
var inst_26713 = inst_26706.cljs$lang$protocol_mask$partition0$;
var inst_26714 = (inst_26713 & (64));
var inst_26715 = inst_26706.cljs$core$ISeq$;
var inst_26716 = (cljs.core.PROTOCOL_SENTINEL === inst_26715);
var inst_26717 = ((inst_26714) || (inst_26716));
var state_26779__$1 = state_26779;
if(cljs.core.truth_(inst_26717)){
var statearr_26799_26854 = state_26779__$1;
(statearr_26799_26854[(1)] = (16));

} else {
var statearr_26800_26855 = state_26779__$1;
(statearr_26800_26855[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (22))){
var inst_26738 = (state_26779[(14)]);
var inst_26739 = (state_26779[(9)]);
var inst_26737 = (state_26779[(2)]);
var inst_26738__$1 = cljs.core.nth.call(null,inst_26737,(0),null);
var inst_26739__$1 = cljs.core.nth.call(null,inst_26737,(1),null);
var inst_26740 = (inst_26738__$1 == null);
var inst_26741 = cljs.core._EQ_.call(null,inst_26739__$1,change);
var inst_26742 = ((inst_26740) || (inst_26741));
var state_26779__$1 = (function (){var statearr_26801 = state_26779;
(statearr_26801[(14)] = inst_26738__$1);

(statearr_26801[(9)] = inst_26739__$1);

return statearr_26801;
})();
if(cljs.core.truth_(inst_26742)){
var statearr_26802_26856 = state_26779__$1;
(statearr_26802_26856[(1)] = (23));

} else {
var statearr_26803_26857 = state_26779__$1;
(statearr_26803_26857[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (36))){
var inst_26729 = (state_26779[(12)]);
var inst_26706 = inst_26729;
var state_26779__$1 = (function (){var statearr_26804 = state_26779;
(statearr_26804[(7)] = inst_26706);

return statearr_26804;
})();
var statearr_26805_26858 = state_26779__$1;
(statearr_26805_26858[(2)] = null);

(statearr_26805_26858[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (29))){
var inst_26753 = (state_26779[(10)]);
var state_26779__$1 = state_26779;
var statearr_26806_26859 = state_26779__$1;
(statearr_26806_26859[(2)] = inst_26753);

(statearr_26806_26859[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (6))){
var state_26779__$1 = state_26779;
var statearr_26807_26860 = state_26779__$1;
(statearr_26807_26860[(2)] = false);

(statearr_26807_26860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (28))){
var inst_26749 = (state_26779[(2)]);
var inst_26750 = calc_state.call(null);
var inst_26706 = inst_26750;
var state_26779__$1 = (function (){var statearr_26808 = state_26779;
(statearr_26808[(15)] = inst_26749);

(statearr_26808[(7)] = inst_26706);

return statearr_26808;
})();
var statearr_26809_26861 = state_26779__$1;
(statearr_26809_26861[(2)] = null);

(statearr_26809_26861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (25))){
var inst_26775 = (state_26779[(2)]);
var state_26779__$1 = state_26779;
var statearr_26810_26862 = state_26779__$1;
(statearr_26810_26862[(2)] = inst_26775);

(statearr_26810_26862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (34))){
var inst_26773 = (state_26779[(2)]);
var state_26779__$1 = state_26779;
var statearr_26811_26863 = state_26779__$1;
(statearr_26811_26863[(2)] = inst_26773);

(statearr_26811_26863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (17))){
var state_26779__$1 = state_26779;
var statearr_26812_26864 = state_26779__$1;
(statearr_26812_26864[(2)] = false);

(statearr_26812_26864[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (3))){
var state_26779__$1 = state_26779;
var statearr_26813_26865 = state_26779__$1;
(statearr_26813_26865[(2)] = false);

(statearr_26813_26865[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (12))){
var inst_26777 = (state_26779[(2)]);
var state_26779__$1 = state_26779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26779__$1,inst_26777);
} else {
if((state_val_26780 === (2))){
var inst_26681 = (state_26779[(8)]);
var inst_26686 = inst_26681.cljs$lang$protocol_mask$partition0$;
var inst_26687 = (inst_26686 & (64));
var inst_26688 = inst_26681.cljs$core$ISeq$;
var inst_26689 = (cljs.core.PROTOCOL_SENTINEL === inst_26688);
var inst_26690 = ((inst_26687) || (inst_26689));
var state_26779__$1 = state_26779;
if(cljs.core.truth_(inst_26690)){
var statearr_26814_26866 = state_26779__$1;
(statearr_26814_26866[(1)] = (5));

} else {
var statearr_26815_26867 = state_26779__$1;
(statearr_26815_26867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (23))){
var inst_26738 = (state_26779[(14)]);
var inst_26744 = (inst_26738 == null);
var state_26779__$1 = state_26779;
if(cljs.core.truth_(inst_26744)){
var statearr_26816_26868 = state_26779__$1;
(statearr_26816_26868[(1)] = (26));

} else {
var statearr_26817_26869 = state_26779__$1;
(statearr_26817_26869[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (35))){
var inst_26764 = (state_26779[(2)]);
var state_26779__$1 = state_26779;
if(cljs.core.truth_(inst_26764)){
var statearr_26818_26870 = state_26779__$1;
(statearr_26818_26870[(1)] = (36));

} else {
var statearr_26819_26871 = state_26779__$1;
(statearr_26819_26871[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (19))){
var inst_26706 = (state_26779[(7)]);
var inst_26726 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26706);
var state_26779__$1 = state_26779;
var statearr_26820_26872 = state_26779__$1;
(statearr_26820_26872[(2)] = inst_26726);

(statearr_26820_26872[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (11))){
var inst_26706 = (state_26779[(7)]);
var inst_26710 = (inst_26706 == null);
var inst_26711 = cljs.core.not.call(null,inst_26710);
var state_26779__$1 = state_26779;
if(inst_26711){
var statearr_26821_26873 = state_26779__$1;
(statearr_26821_26873[(1)] = (13));

} else {
var statearr_26822_26874 = state_26779__$1;
(statearr_26822_26874[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (9))){
var inst_26681 = (state_26779[(8)]);
var state_26779__$1 = state_26779;
var statearr_26823_26875 = state_26779__$1;
(statearr_26823_26875[(2)] = inst_26681);

(statearr_26823_26875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (5))){
var state_26779__$1 = state_26779;
var statearr_26824_26876 = state_26779__$1;
(statearr_26824_26876[(2)] = true);

(statearr_26824_26876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (14))){
var state_26779__$1 = state_26779;
var statearr_26825_26877 = state_26779__$1;
(statearr_26825_26877[(2)] = false);

(statearr_26825_26877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (26))){
var inst_26739 = (state_26779[(9)]);
var inst_26746 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26739);
var state_26779__$1 = state_26779;
var statearr_26826_26878 = state_26779__$1;
(statearr_26826_26878[(2)] = inst_26746);

(statearr_26826_26878[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (16))){
var state_26779__$1 = state_26779;
var statearr_26827_26879 = state_26779__$1;
(statearr_26827_26879[(2)] = true);

(statearr_26827_26879[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (38))){
var inst_26769 = (state_26779[(2)]);
var state_26779__$1 = state_26779;
var statearr_26828_26880 = state_26779__$1;
(statearr_26828_26880[(2)] = inst_26769);

(statearr_26828_26880[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (30))){
var inst_26731 = (state_26779[(13)]);
var inst_26739 = (state_26779[(9)]);
var inst_26730 = (state_26779[(11)]);
var inst_26756 = cljs.core.empty_QMARK_.call(null,inst_26730);
var inst_26757 = inst_26731.call(null,inst_26739);
var inst_26758 = cljs.core.not.call(null,inst_26757);
var inst_26759 = ((inst_26756) && (inst_26758));
var state_26779__$1 = state_26779;
var statearr_26829_26881 = state_26779__$1;
(statearr_26829_26881[(2)] = inst_26759);

(statearr_26829_26881[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (10))){
var inst_26681 = (state_26779[(8)]);
var inst_26702 = (state_26779[(2)]);
var inst_26703 = cljs.core.get.call(null,inst_26702,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26704 = cljs.core.get.call(null,inst_26702,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26705 = cljs.core.get.call(null,inst_26702,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26706 = inst_26681;
var state_26779__$1 = (function (){var statearr_26830 = state_26779;
(statearr_26830[(7)] = inst_26706);

(statearr_26830[(16)] = inst_26703);

(statearr_26830[(17)] = inst_26705);

(statearr_26830[(18)] = inst_26704);

return statearr_26830;
})();
var statearr_26831_26882 = state_26779__$1;
(statearr_26831_26882[(2)] = null);

(statearr_26831_26882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (18))){
var inst_26721 = (state_26779[(2)]);
var state_26779__$1 = state_26779;
var statearr_26832_26883 = state_26779__$1;
(statearr_26832_26883[(2)] = inst_26721);

(statearr_26832_26883[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (37))){
var state_26779__$1 = state_26779;
var statearr_26833_26884 = state_26779__$1;
(statearr_26833_26884[(2)] = null);

(statearr_26833_26884[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26780 === (8))){
var inst_26681 = (state_26779[(8)]);
var inst_26699 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26681);
var state_26779__$1 = state_26779;
var statearr_26834_26885 = state_26779__$1;
(statearr_26834_26885[(2)] = inst_26699);

(statearr_26834_26885[(1)] = (10));


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
});})(c__25780__auto___26839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25685__auto__,c__25780__auto___26839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25686__auto__ = null;
var cljs$core$async$mix_$_state_machine__25686__auto____0 = (function (){
var statearr_26835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26835[(0)] = cljs$core$async$mix_$_state_machine__25686__auto__);

(statearr_26835[(1)] = (1));

return statearr_26835;
});
var cljs$core$async$mix_$_state_machine__25686__auto____1 = (function (state_26779){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_26779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e26836){if((e26836 instanceof Object)){
var ex__25689__auto__ = e26836;
var statearr_26837_26886 = state_26779;
(statearr_26837_26886[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26887 = state_26779;
state_26779 = G__26887;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25686__auto__ = function(state_26779){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25686__auto____1.call(this,state_26779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25686__auto____0;
cljs$core$async$mix_$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25686__auto____1;
return cljs$core$async$mix_$_state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto___26839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25782__auto__ = (function (){var statearr_26838 = f__25781__auto__.call(null);
(statearr_26838[(6)] = c__25780__auto___26839);

return statearr_26838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto___26839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26889 = arguments.length;
switch (G__26889) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__26893 = arguments.length;
switch (G__26893) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__26891_SHARP_){
if(cljs.core.truth_(p1__26891_SHARP_.call(null,topic))){
return p1__26891_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26891_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26894 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26894 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26895){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26895 = meta26895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26896,meta26895__$1){
var self__ = this;
var _26896__$1 = this;
return (new cljs.core.async.t_cljs$core$async26894(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26895__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26896){
var self__ = this;
var _26896__$1 = this;
return self__.meta26895;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26894.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26894.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26894.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26894.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26894.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26894.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26894.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26894.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26895","meta26895",-1235242170,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26894";

cljs.core.async.t_cljs$core$async26894.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async26894");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26894.
 */
cljs.core.async.__GT_t_cljs$core$async26894 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26894(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26895){
return (new cljs.core.async.t_cljs$core$async26894(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26895));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26894(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25780__auto___27014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto___27014,mults,ensure_mult,p){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto___27014,mults,ensure_mult,p){
return (function (state_26968){
var state_val_26969 = (state_26968[(1)]);
if((state_val_26969 === (7))){
var inst_26964 = (state_26968[(2)]);
var state_26968__$1 = state_26968;
var statearr_26970_27015 = state_26968__$1;
(statearr_26970_27015[(2)] = inst_26964);

(statearr_26970_27015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (20))){
var state_26968__$1 = state_26968;
var statearr_26971_27016 = state_26968__$1;
(statearr_26971_27016[(2)] = null);

(statearr_26971_27016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (1))){
var state_26968__$1 = state_26968;
var statearr_26972_27017 = state_26968__$1;
(statearr_26972_27017[(2)] = null);

(statearr_26972_27017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (24))){
var inst_26947 = (state_26968[(7)]);
var inst_26956 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26947);
var state_26968__$1 = state_26968;
var statearr_26973_27018 = state_26968__$1;
(statearr_26973_27018[(2)] = inst_26956);

(statearr_26973_27018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (4))){
var inst_26899 = (state_26968[(8)]);
var inst_26899__$1 = (state_26968[(2)]);
var inst_26900 = (inst_26899__$1 == null);
var state_26968__$1 = (function (){var statearr_26974 = state_26968;
(statearr_26974[(8)] = inst_26899__$1);

return statearr_26974;
})();
if(cljs.core.truth_(inst_26900)){
var statearr_26975_27019 = state_26968__$1;
(statearr_26975_27019[(1)] = (5));

} else {
var statearr_26976_27020 = state_26968__$1;
(statearr_26976_27020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (15))){
var inst_26941 = (state_26968[(2)]);
var state_26968__$1 = state_26968;
var statearr_26977_27021 = state_26968__$1;
(statearr_26977_27021[(2)] = inst_26941);

(statearr_26977_27021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (21))){
var inst_26961 = (state_26968[(2)]);
var state_26968__$1 = (function (){var statearr_26978 = state_26968;
(statearr_26978[(9)] = inst_26961);

return statearr_26978;
})();
var statearr_26979_27022 = state_26968__$1;
(statearr_26979_27022[(2)] = null);

(statearr_26979_27022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (13))){
var inst_26923 = (state_26968[(10)]);
var inst_26925 = cljs.core.chunked_seq_QMARK_.call(null,inst_26923);
var state_26968__$1 = state_26968;
if(inst_26925){
var statearr_26980_27023 = state_26968__$1;
(statearr_26980_27023[(1)] = (16));

} else {
var statearr_26981_27024 = state_26968__$1;
(statearr_26981_27024[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (22))){
var inst_26953 = (state_26968[(2)]);
var state_26968__$1 = state_26968;
if(cljs.core.truth_(inst_26953)){
var statearr_26982_27025 = state_26968__$1;
(statearr_26982_27025[(1)] = (23));

} else {
var statearr_26983_27026 = state_26968__$1;
(statearr_26983_27026[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (6))){
var inst_26947 = (state_26968[(7)]);
var inst_26949 = (state_26968[(11)]);
var inst_26899 = (state_26968[(8)]);
var inst_26947__$1 = topic_fn.call(null,inst_26899);
var inst_26948 = cljs.core.deref.call(null,mults);
var inst_26949__$1 = cljs.core.get.call(null,inst_26948,inst_26947__$1);
var state_26968__$1 = (function (){var statearr_26984 = state_26968;
(statearr_26984[(7)] = inst_26947__$1);

(statearr_26984[(11)] = inst_26949__$1);

return statearr_26984;
})();
if(cljs.core.truth_(inst_26949__$1)){
var statearr_26985_27027 = state_26968__$1;
(statearr_26985_27027[(1)] = (19));

} else {
var statearr_26986_27028 = state_26968__$1;
(statearr_26986_27028[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (25))){
var inst_26958 = (state_26968[(2)]);
var state_26968__$1 = state_26968;
var statearr_26987_27029 = state_26968__$1;
(statearr_26987_27029[(2)] = inst_26958);

(statearr_26987_27029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (17))){
var inst_26923 = (state_26968[(10)]);
var inst_26932 = cljs.core.first.call(null,inst_26923);
var inst_26933 = cljs.core.async.muxch_STAR_.call(null,inst_26932);
var inst_26934 = cljs.core.async.close_BANG_.call(null,inst_26933);
var inst_26935 = cljs.core.next.call(null,inst_26923);
var inst_26909 = inst_26935;
var inst_26910 = null;
var inst_26911 = (0);
var inst_26912 = (0);
var state_26968__$1 = (function (){var statearr_26988 = state_26968;
(statearr_26988[(12)] = inst_26910);

(statearr_26988[(13)] = inst_26934);

(statearr_26988[(14)] = inst_26912);

(statearr_26988[(15)] = inst_26911);

(statearr_26988[(16)] = inst_26909);

return statearr_26988;
})();
var statearr_26989_27030 = state_26968__$1;
(statearr_26989_27030[(2)] = null);

(statearr_26989_27030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (3))){
var inst_26966 = (state_26968[(2)]);
var state_26968__$1 = state_26968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26968__$1,inst_26966);
} else {
if((state_val_26969 === (12))){
var inst_26943 = (state_26968[(2)]);
var state_26968__$1 = state_26968;
var statearr_26990_27031 = state_26968__$1;
(statearr_26990_27031[(2)] = inst_26943);

(statearr_26990_27031[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (2))){
var state_26968__$1 = state_26968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26968__$1,(4),ch);
} else {
if((state_val_26969 === (23))){
var state_26968__$1 = state_26968;
var statearr_26991_27032 = state_26968__$1;
(statearr_26991_27032[(2)] = null);

(statearr_26991_27032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (19))){
var inst_26949 = (state_26968[(11)]);
var inst_26899 = (state_26968[(8)]);
var inst_26951 = cljs.core.async.muxch_STAR_.call(null,inst_26949);
var state_26968__$1 = state_26968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26968__$1,(22),inst_26951,inst_26899);
} else {
if((state_val_26969 === (11))){
var inst_26923 = (state_26968[(10)]);
var inst_26909 = (state_26968[(16)]);
var inst_26923__$1 = cljs.core.seq.call(null,inst_26909);
var state_26968__$1 = (function (){var statearr_26992 = state_26968;
(statearr_26992[(10)] = inst_26923__$1);

return statearr_26992;
})();
if(inst_26923__$1){
var statearr_26993_27033 = state_26968__$1;
(statearr_26993_27033[(1)] = (13));

} else {
var statearr_26994_27034 = state_26968__$1;
(statearr_26994_27034[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (9))){
var inst_26945 = (state_26968[(2)]);
var state_26968__$1 = state_26968;
var statearr_26995_27035 = state_26968__$1;
(statearr_26995_27035[(2)] = inst_26945);

(statearr_26995_27035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (5))){
var inst_26906 = cljs.core.deref.call(null,mults);
var inst_26907 = cljs.core.vals.call(null,inst_26906);
var inst_26908 = cljs.core.seq.call(null,inst_26907);
var inst_26909 = inst_26908;
var inst_26910 = null;
var inst_26911 = (0);
var inst_26912 = (0);
var state_26968__$1 = (function (){var statearr_26996 = state_26968;
(statearr_26996[(12)] = inst_26910);

(statearr_26996[(14)] = inst_26912);

(statearr_26996[(15)] = inst_26911);

(statearr_26996[(16)] = inst_26909);

return statearr_26996;
})();
var statearr_26997_27036 = state_26968__$1;
(statearr_26997_27036[(2)] = null);

(statearr_26997_27036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (14))){
var state_26968__$1 = state_26968;
var statearr_27001_27037 = state_26968__$1;
(statearr_27001_27037[(2)] = null);

(statearr_27001_27037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (16))){
var inst_26923 = (state_26968[(10)]);
var inst_26927 = cljs.core.chunk_first.call(null,inst_26923);
var inst_26928 = cljs.core.chunk_rest.call(null,inst_26923);
var inst_26929 = cljs.core.count.call(null,inst_26927);
var inst_26909 = inst_26928;
var inst_26910 = inst_26927;
var inst_26911 = inst_26929;
var inst_26912 = (0);
var state_26968__$1 = (function (){var statearr_27002 = state_26968;
(statearr_27002[(12)] = inst_26910);

(statearr_27002[(14)] = inst_26912);

(statearr_27002[(15)] = inst_26911);

(statearr_27002[(16)] = inst_26909);

return statearr_27002;
})();
var statearr_27003_27038 = state_26968__$1;
(statearr_27003_27038[(2)] = null);

(statearr_27003_27038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (10))){
var inst_26910 = (state_26968[(12)]);
var inst_26912 = (state_26968[(14)]);
var inst_26911 = (state_26968[(15)]);
var inst_26909 = (state_26968[(16)]);
var inst_26917 = cljs.core._nth.call(null,inst_26910,inst_26912);
var inst_26918 = cljs.core.async.muxch_STAR_.call(null,inst_26917);
var inst_26919 = cljs.core.async.close_BANG_.call(null,inst_26918);
var inst_26920 = (inst_26912 + (1));
var tmp26998 = inst_26910;
var tmp26999 = inst_26911;
var tmp27000 = inst_26909;
var inst_26909__$1 = tmp27000;
var inst_26910__$1 = tmp26998;
var inst_26911__$1 = tmp26999;
var inst_26912__$1 = inst_26920;
var state_26968__$1 = (function (){var statearr_27004 = state_26968;
(statearr_27004[(12)] = inst_26910__$1);

(statearr_27004[(17)] = inst_26919);

(statearr_27004[(14)] = inst_26912__$1);

(statearr_27004[(15)] = inst_26911__$1);

(statearr_27004[(16)] = inst_26909__$1);

return statearr_27004;
})();
var statearr_27005_27039 = state_26968__$1;
(statearr_27005_27039[(2)] = null);

(statearr_27005_27039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (18))){
var inst_26938 = (state_26968[(2)]);
var state_26968__$1 = state_26968;
var statearr_27006_27040 = state_26968__$1;
(statearr_27006_27040[(2)] = inst_26938);

(statearr_27006_27040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26969 === (8))){
var inst_26912 = (state_26968[(14)]);
var inst_26911 = (state_26968[(15)]);
var inst_26914 = (inst_26912 < inst_26911);
var inst_26915 = inst_26914;
var state_26968__$1 = state_26968;
if(cljs.core.truth_(inst_26915)){
var statearr_27007_27041 = state_26968__$1;
(statearr_27007_27041[(1)] = (10));

} else {
var statearr_27008_27042 = state_26968__$1;
(statearr_27008_27042[(1)] = (11));

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
});})(c__25780__auto___27014,mults,ensure_mult,p))
;
return ((function (switch__25685__auto__,c__25780__auto___27014,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25686__auto__ = null;
var cljs$core$async$state_machine__25686__auto____0 = (function (){
var statearr_27009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27009[(0)] = cljs$core$async$state_machine__25686__auto__);

(statearr_27009[(1)] = (1));

return statearr_27009;
});
var cljs$core$async$state_machine__25686__auto____1 = (function (state_26968){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_26968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e27010){if((e27010 instanceof Object)){
var ex__25689__auto__ = e27010;
var statearr_27011_27043 = state_26968;
(statearr_27011_27043[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27044 = state_26968;
state_26968 = G__27044;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$state_machine__25686__auto__ = function(state_26968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25686__auto____1.call(this,state_26968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25686__auto____0;
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25686__auto____1;
return cljs$core$async$state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto___27014,mults,ensure_mult,p))
})();
var state__25782__auto__ = (function (){var statearr_27012 = f__25781__auto__.call(null);
(statearr_27012[(6)] = c__25780__auto___27014);

return statearr_27012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto___27014,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27046 = arguments.length;
switch (G__27046) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27049 = arguments.length;
switch (G__27049) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27052 = arguments.length;
switch (G__27052) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25780__auto___27119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto___27119,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto___27119,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27091){
var state_val_27092 = (state_27091[(1)]);
if((state_val_27092 === (7))){
var state_27091__$1 = state_27091;
var statearr_27093_27120 = state_27091__$1;
(statearr_27093_27120[(2)] = null);

(statearr_27093_27120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (1))){
var state_27091__$1 = state_27091;
var statearr_27094_27121 = state_27091__$1;
(statearr_27094_27121[(2)] = null);

(statearr_27094_27121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (4))){
var inst_27055 = (state_27091[(7)]);
var inst_27057 = (inst_27055 < cnt);
var state_27091__$1 = state_27091;
if(cljs.core.truth_(inst_27057)){
var statearr_27095_27122 = state_27091__$1;
(statearr_27095_27122[(1)] = (6));

} else {
var statearr_27096_27123 = state_27091__$1;
(statearr_27096_27123[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (15))){
var inst_27087 = (state_27091[(2)]);
var state_27091__$1 = state_27091;
var statearr_27097_27124 = state_27091__$1;
(statearr_27097_27124[(2)] = inst_27087);

(statearr_27097_27124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (13))){
var inst_27080 = cljs.core.async.close_BANG_.call(null,out);
var state_27091__$1 = state_27091;
var statearr_27098_27125 = state_27091__$1;
(statearr_27098_27125[(2)] = inst_27080);

(statearr_27098_27125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (6))){
var state_27091__$1 = state_27091;
var statearr_27099_27126 = state_27091__$1;
(statearr_27099_27126[(2)] = null);

(statearr_27099_27126[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (3))){
var inst_27089 = (state_27091[(2)]);
var state_27091__$1 = state_27091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27091__$1,inst_27089);
} else {
if((state_val_27092 === (12))){
var inst_27077 = (state_27091[(8)]);
var inst_27077__$1 = (state_27091[(2)]);
var inst_27078 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27077__$1);
var state_27091__$1 = (function (){var statearr_27100 = state_27091;
(statearr_27100[(8)] = inst_27077__$1);

return statearr_27100;
})();
if(cljs.core.truth_(inst_27078)){
var statearr_27101_27127 = state_27091__$1;
(statearr_27101_27127[(1)] = (13));

} else {
var statearr_27102_27128 = state_27091__$1;
(statearr_27102_27128[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (2))){
var inst_27054 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27055 = (0);
var state_27091__$1 = (function (){var statearr_27103 = state_27091;
(statearr_27103[(7)] = inst_27055);

(statearr_27103[(9)] = inst_27054);

return statearr_27103;
})();
var statearr_27104_27129 = state_27091__$1;
(statearr_27104_27129[(2)] = null);

(statearr_27104_27129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (11))){
var inst_27055 = (state_27091[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27091,(10),Object,null,(9));
var inst_27064 = chs__$1.call(null,inst_27055);
var inst_27065 = done.call(null,inst_27055);
var inst_27066 = cljs.core.async.take_BANG_.call(null,inst_27064,inst_27065);
var state_27091__$1 = state_27091;
var statearr_27105_27130 = state_27091__$1;
(statearr_27105_27130[(2)] = inst_27066);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27091__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (9))){
var inst_27055 = (state_27091[(7)]);
var inst_27068 = (state_27091[(2)]);
var inst_27069 = (inst_27055 + (1));
var inst_27055__$1 = inst_27069;
var state_27091__$1 = (function (){var statearr_27106 = state_27091;
(statearr_27106[(7)] = inst_27055__$1);

(statearr_27106[(10)] = inst_27068);

return statearr_27106;
})();
var statearr_27107_27131 = state_27091__$1;
(statearr_27107_27131[(2)] = null);

(statearr_27107_27131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (5))){
var inst_27075 = (state_27091[(2)]);
var state_27091__$1 = (function (){var statearr_27108 = state_27091;
(statearr_27108[(11)] = inst_27075);

return statearr_27108;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27091__$1,(12),dchan);
} else {
if((state_val_27092 === (14))){
var inst_27077 = (state_27091[(8)]);
var inst_27082 = cljs.core.apply.call(null,f,inst_27077);
var state_27091__$1 = state_27091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27091__$1,(16),out,inst_27082);
} else {
if((state_val_27092 === (16))){
var inst_27084 = (state_27091[(2)]);
var state_27091__$1 = (function (){var statearr_27109 = state_27091;
(statearr_27109[(12)] = inst_27084);

return statearr_27109;
})();
var statearr_27110_27132 = state_27091__$1;
(statearr_27110_27132[(2)] = null);

(statearr_27110_27132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (10))){
var inst_27059 = (state_27091[(2)]);
var inst_27060 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27091__$1 = (function (){var statearr_27111 = state_27091;
(statearr_27111[(13)] = inst_27059);

return statearr_27111;
})();
var statearr_27112_27133 = state_27091__$1;
(statearr_27112_27133[(2)] = inst_27060);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27091__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (8))){
var inst_27073 = (state_27091[(2)]);
var state_27091__$1 = state_27091;
var statearr_27113_27134 = state_27091__$1;
(statearr_27113_27134[(2)] = inst_27073);

(statearr_27113_27134[(1)] = (5));


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
});})(c__25780__auto___27119,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25685__auto__,c__25780__auto___27119,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25686__auto__ = null;
var cljs$core$async$state_machine__25686__auto____0 = (function (){
var statearr_27114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27114[(0)] = cljs$core$async$state_machine__25686__auto__);

(statearr_27114[(1)] = (1));

return statearr_27114;
});
var cljs$core$async$state_machine__25686__auto____1 = (function (state_27091){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_27091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e27115){if((e27115 instanceof Object)){
var ex__25689__auto__ = e27115;
var statearr_27116_27135 = state_27091;
(statearr_27116_27135[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27136 = state_27091;
state_27091 = G__27136;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$state_machine__25686__auto__ = function(state_27091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25686__auto____1.call(this,state_27091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25686__auto____0;
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25686__auto____1;
return cljs$core$async$state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto___27119,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25782__auto__ = (function (){var statearr_27117 = f__25781__auto__.call(null);
(statearr_27117[(6)] = c__25780__auto___27119);

return statearr_27117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto___27119,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27139 = arguments.length;
switch (G__27139) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25780__auto___27193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto___27193,out){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto___27193,out){
return (function (state_27171){
var state_val_27172 = (state_27171[(1)]);
if((state_val_27172 === (7))){
var inst_27151 = (state_27171[(7)]);
var inst_27150 = (state_27171[(8)]);
var inst_27150__$1 = (state_27171[(2)]);
var inst_27151__$1 = cljs.core.nth.call(null,inst_27150__$1,(0),null);
var inst_27152 = cljs.core.nth.call(null,inst_27150__$1,(1),null);
var inst_27153 = (inst_27151__$1 == null);
var state_27171__$1 = (function (){var statearr_27173 = state_27171;
(statearr_27173[(7)] = inst_27151__$1);

(statearr_27173[(8)] = inst_27150__$1);

(statearr_27173[(9)] = inst_27152);

return statearr_27173;
})();
if(cljs.core.truth_(inst_27153)){
var statearr_27174_27194 = state_27171__$1;
(statearr_27174_27194[(1)] = (8));

} else {
var statearr_27175_27195 = state_27171__$1;
(statearr_27175_27195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (1))){
var inst_27140 = cljs.core.vec.call(null,chs);
var inst_27141 = inst_27140;
var state_27171__$1 = (function (){var statearr_27176 = state_27171;
(statearr_27176[(10)] = inst_27141);

return statearr_27176;
})();
var statearr_27177_27196 = state_27171__$1;
(statearr_27177_27196[(2)] = null);

(statearr_27177_27196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (4))){
var inst_27141 = (state_27171[(10)]);
var state_27171__$1 = state_27171;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27171__$1,(7),inst_27141);
} else {
if((state_val_27172 === (6))){
var inst_27167 = (state_27171[(2)]);
var state_27171__$1 = state_27171;
var statearr_27178_27197 = state_27171__$1;
(statearr_27178_27197[(2)] = inst_27167);

(statearr_27178_27197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (3))){
var inst_27169 = (state_27171[(2)]);
var state_27171__$1 = state_27171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27171__$1,inst_27169);
} else {
if((state_val_27172 === (2))){
var inst_27141 = (state_27171[(10)]);
var inst_27143 = cljs.core.count.call(null,inst_27141);
var inst_27144 = (inst_27143 > (0));
var state_27171__$1 = state_27171;
if(cljs.core.truth_(inst_27144)){
var statearr_27180_27198 = state_27171__$1;
(statearr_27180_27198[(1)] = (4));

} else {
var statearr_27181_27199 = state_27171__$1;
(statearr_27181_27199[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (11))){
var inst_27141 = (state_27171[(10)]);
var inst_27160 = (state_27171[(2)]);
var tmp27179 = inst_27141;
var inst_27141__$1 = tmp27179;
var state_27171__$1 = (function (){var statearr_27182 = state_27171;
(statearr_27182[(11)] = inst_27160);

(statearr_27182[(10)] = inst_27141__$1);

return statearr_27182;
})();
var statearr_27183_27200 = state_27171__$1;
(statearr_27183_27200[(2)] = null);

(statearr_27183_27200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (9))){
var inst_27151 = (state_27171[(7)]);
var state_27171__$1 = state_27171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27171__$1,(11),out,inst_27151);
} else {
if((state_val_27172 === (5))){
var inst_27165 = cljs.core.async.close_BANG_.call(null,out);
var state_27171__$1 = state_27171;
var statearr_27184_27201 = state_27171__$1;
(statearr_27184_27201[(2)] = inst_27165);

(statearr_27184_27201[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (10))){
var inst_27163 = (state_27171[(2)]);
var state_27171__$1 = state_27171;
var statearr_27185_27202 = state_27171__$1;
(statearr_27185_27202[(2)] = inst_27163);

(statearr_27185_27202[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (8))){
var inst_27151 = (state_27171[(7)]);
var inst_27150 = (state_27171[(8)]);
var inst_27141 = (state_27171[(10)]);
var inst_27152 = (state_27171[(9)]);
var inst_27155 = (function (){var cs = inst_27141;
var vec__27146 = inst_27150;
var v = inst_27151;
var c = inst_27152;
return ((function (cs,vec__27146,v,c,inst_27151,inst_27150,inst_27141,inst_27152,state_val_27172,c__25780__auto___27193,out){
return (function (p1__27137_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27137_SHARP_);
});
;})(cs,vec__27146,v,c,inst_27151,inst_27150,inst_27141,inst_27152,state_val_27172,c__25780__auto___27193,out))
})();
var inst_27156 = cljs.core.filterv.call(null,inst_27155,inst_27141);
var inst_27141__$1 = inst_27156;
var state_27171__$1 = (function (){var statearr_27186 = state_27171;
(statearr_27186[(10)] = inst_27141__$1);

return statearr_27186;
})();
var statearr_27187_27203 = state_27171__$1;
(statearr_27187_27203[(2)] = null);

(statearr_27187_27203[(1)] = (2));


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
});})(c__25780__auto___27193,out))
;
return ((function (switch__25685__auto__,c__25780__auto___27193,out){
return (function() {
var cljs$core$async$state_machine__25686__auto__ = null;
var cljs$core$async$state_machine__25686__auto____0 = (function (){
var statearr_27188 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27188[(0)] = cljs$core$async$state_machine__25686__auto__);

(statearr_27188[(1)] = (1));

return statearr_27188;
});
var cljs$core$async$state_machine__25686__auto____1 = (function (state_27171){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_27171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e27189){if((e27189 instanceof Object)){
var ex__25689__auto__ = e27189;
var statearr_27190_27204 = state_27171;
(statearr_27190_27204[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27205 = state_27171;
state_27171 = G__27205;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$state_machine__25686__auto__ = function(state_27171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25686__auto____1.call(this,state_27171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25686__auto____0;
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25686__auto____1;
return cljs$core$async$state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto___27193,out))
})();
var state__25782__auto__ = (function (){var statearr_27191 = f__25781__auto__.call(null);
(statearr_27191[(6)] = c__25780__auto___27193);

return statearr_27191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto___27193,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27207 = arguments.length;
switch (G__27207) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25780__auto___27252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto___27252,out){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto___27252,out){
return (function (state_27231){
var state_val_27232 = (state_27231[(1)]);
if((state_val_27232 === (7))){
var inst_27213 = (state_27231[(7)]);
var inst_27213__$1 = (state_27231[(2)]);
var inst_27214 = (inst_27213__$1 == null);
var inst_27215 = cljs.core.not.call(null,inst_27214);
var state_27231__$1 = (function (){var statearr_27233 = state_27231;
(statearr_27233[(7)] = inst_27213__$1);

return statearr_27233;
})();
if(inst_27215){
var statearr_27234_27253 = state_27231__$1;
(statearr_27234_27253[(1)] = (8));

} else {
var statearr_27235_27254 = state_27231__$1;
(statearr_27235_27254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (1))){
var inst_27208 = (0);
var state_27231__$1 = (function (){var statearr_27236 = state_27231;
(statearr_27236[(8)] = inst_27208);

return statearr_27236;
})();
var statearr_27237_27255 = state_27231__$1;
(statearr_27237_27255[(2)] = null);

(statearr_27237_27255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (4))){
var state_27231__$1 = state_27231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27231__$1,(7),ch);
} else {
if((state_val_27232 === (6))){
var inst_27226 = (state_27231[(2)]);
var state_27231__$1 = state_27231;
var statearr_27238_27256 = state_27231__$1;
(statearr_27238_27256[(2)] = inst_27226);

(statearr_27238_27256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (3))){
var inst_27228 = (state_27231[(2)]);
var inst_27229 = cljs.core.async.close_BANG_.call(null,out);
var state_27231__$1 = (function (){var statearr_27239 = state_27231;
(statearr_27239[(9)] = inst_27228);

return statearr_27239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27231__$1,inst_27229);
} else {
if((state_val_27232 === (2))){
var inst_27208 = (state_27231[(8)]);
var inst_27210 = (inst_27208 < n);
var state_27231__$1 = state_27231;
if(cljs.core.truth_(inst_27210)){
var statearr_27240_27257 = state_27231__$1;
(statearr_27240_27257[(1)] = (4));

} else {
var statearr_27241_27258 = state_27231__$1;
(statearr_27241_27258[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (11))){
var inst_27208 = (state_27231[(8)]);
var inst_27218 = (state_27231[(2)]);
var inst_27219 = (inst_27208 + (1));
var inst_27208__$1 = inst_27219;
var state_27231__$1 = (function (){var statearr_27242 = state_27231;
(statearr_27242[(10)] = inst_27218);

(statearr_27242[(8)] = inst_27208__$1);

return statearr_27242;
})();
var statearr_27243_27259 = state_27231__$1;
(statearr_27243_27259[(2)] = null);

(statearr_27243_27259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (9))){
var state_27231__$1 = state_27231;
var statearr_27244_27260 = state_27231__$1;
(statearr_27244_27260[(2)] = null);

(statearr_27244_27260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (5))){
var state_27231__$1 = state_27231;
var statearr_27245_27261 = state_27231__$1;
(statearr_27245_27261[(2)] = null);

(statearr_27245_27261[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (10))){
var inst_27223 = (state_27231[(2)]);
var state_27231__$1 = state_27231;
var statearr_27246_27262 = state_27231__$1;
(statearr_27246_27262[(2)] = inst_27223);

(statearr_27246_27262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (8))){
var inst_27213 = (state_27231[(7)]);
var state_27231__$1 = state_27231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27231__$1,(11),out,inst_27213);
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
});})(c__25780__auto___27252,out))
;
return ((function (switch__25685__auto__,c__25780__auto___27252,out){
return (function() {
var cljs$core$async$state_machine__25686__auto__ = null;
var cljs$core$async$state_machine__25686__auto____0 = (function (){
var statearr_27247 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27247[(0)] = cljs$core$async$state_machine__25686__auto__);

(statearr_27247[(1)] = (1));

return statearr_27247;
});
var cljs$core$async$state_machine__25686__auto____1 = (function (state_27231){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_27231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e27248){if((e27248 instanceof Object)){
var ex__25689__auto__ = e27248;
var statearr_27249_27263 = state_27231;
(statearr_27249_27263[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27264 = state_27231;
state_27231 = G__27264;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$state_machine__25686__auto__ = function(state_27231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25686__auto____1.call(this,state_27231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25686__auto____0;
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25686__auto____1;
return cljs$core$async$state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto___27252,out))
})();
var state__25782__auto__ = (function (){var statearr_27250 = f__25781__auto__.call(null);
(statearr_27250[(6)] = c__25780__auto___27252);

return statearr_27250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto___27252,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27266 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27266 = (function (f,ch,meta27267){
this.f = f;
this.ch = ch;
this.meta27267 = meta27267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27268,meta27267__$1){
var self__ = this;
var _27268__$1 = this;
return (new cljs.core.async.t_cljs$core$async27266(self__.f,self__.ch,meta27267__$1));
});

cljs.core.async.t_cljs$core$async27266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27268){
var self__ = this;
var _27268__$1 = this;
return self__.meta27267;
});

cljs.core.async.t_cljs$core$async27266.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27266.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27266.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27266.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27266.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27269 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27269 = (function (f,ch,meta27267,_,fn1,meta27270){
this.f = f;
this.ch = ch;
this.meta27267 = meta27267;
this._ = _;
this.fn1 = fn1;
this.meta27270 = meta27270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27271,meta27270__$1){
var self__ = this;
var _27271__$1 = this;
return (new cljs.core.async.t_cljs$core$async27269(self__.f,self__.ch,self__.meta27267,self__._,self__.fn1,meta27270__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27271){
var self__ = this;
var _27271__$1 = this;
return self__.meta27270;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27265_SHARP_){
return f1.call(null,(((p1__27265_SHARP_ == null))?null:self__.f.call(null,p1__27265_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27269.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27267","meta27267",-1337481170,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27266","cljs.core.async/t_cljs$core$async27266",111570011,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27270","meta27270",-1007746192,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27269.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27269";

cljs.core.async.t_cljs$core$async27269.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27269");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27269.
 */
cljs.core.async.__GT_t_cljs$core$async27269 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27269(f__$1,ch__$1,meta27267__$1,___$2,fn1__$1,meta27270){
return (new cljs.core.async.t_cljs$core$async27269(f__$1,ch__$1,meta27267__$1,___$2,fn1__$1,meta27270));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27269(self__.f,self__.ch,self__.meta27267,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27266.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27266.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27267","meta27267",-1337481170,null)], null);
});

cljs.core.async.t_cljs$core$async27266.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27266";

cljs.core.async.t_cljs$core$async27266.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27266");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27266.
 */
cljs.core.async.__GT_t_cljs$core$async27266 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27266(f__$1,ch__$1,meta27267){
return (new cljs.core.async.t_cljs$core$async27266(f__$1,ch__$1,meta27267));
});

}

return (new cljs.core.async.t_cljs$core$async27266(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27272 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27272 = (function (f,ch,meta27273){
this.f = f;
this.ch = ch;
this.meta27273 = meta27273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27274,meta27273__$1){
var self__ = this;
var _27274__$1 = this;
return (new cljs.core.async.t_cljs$core$async27272(self__.f,self__.ch,meta27273__$1));
});

cljs.core.async.t_cljs$core$async27272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27274){
var self__ = this;
var _27274__$1 = this;
return self__.meta27273;
});

cljs.core.async.t_cljs$core$async27272.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27272.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27272.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27272.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27272.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27272.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27273","meta27273",978721316,null)], null);
});

cljs.core.async.t_cljs$core$async27272.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27272";

cljs.core.async.t_cljs$core$async27272.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27272");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27272.
 */
cljs.core.async.__GT_t_cljs$core$async27272 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27272(f__$1,ch__$1,meta27273){
return (new cljs.core.async.t_cljs$core$async27272(f__$1,ch__$1,meta27273));
});

}

return (new cljs.core.async.t_cljs$core$async27272(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27275 = (function (p,ch,meta27276){
this.p = p;
this.ch = ch;
this.meta27276 = meta27276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27277,meta27276__$1){
var self__ = this;
var _27277__$1 = this;
return (new cljs.core.async.t_cljs$core$async27275(self__.p,self__.ch,meta27276__$1));
});

cljs.core.async.t_cljs$core$async27275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27277){
var self__ = this;
var _27277__$1 = this;
return self__.meta27276;
});

cljs.core.async.t_cljs$core$async27275.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27275.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27275.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27275.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27275.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27275.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27275.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27276","meta27276",-1480327312,null)], null);
});

cljs.core.async.t_cljs$core$async27275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27275";

cljs.core.async.t_cljs$core$async27275.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async27275");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27275.
 */
cljs.core.async.__GT_t_cljs$core$async27275 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27275(p__$1,ch__$1,meta27276){
return (new cljs.core.async.t_cljs$core$async27275(p__$1,ch__$1,meta27276));
});

}

return (new cljs.core.async.t_cljs$core$async27275(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__27279 = arguments.length;
switch (G__27279) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25780__auto___27319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto___27319,out){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto___27319,out){
return (function (state_27300){
var state_val_27301 = (state_27300[(1)]);
if((state_val_27301 === (7))){
var inst_27296 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
var statearr_27302_27320 = state_27300__$1;
(statearr_27302_27320[(2)] = inst_27296);

(statearr_27302_27320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (1))){
var state_27300__$1 = state_27300;
var statearr_27303_27321 = state_27300__$1;
(statearr_27303_27321[(2)] = null);

(statearr_27303_27321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (4))){
var inst_27282 = (state_27300[(7)]);
var inst_27282__$1 = (state_27300[(2)]);
var inst_27283 = (inst_27282__$1 == null);
var state_27300__$1 = (function (){var statearr_27304 = state_27300;
(statearr_27304[(7)] = inst_27282__$1);

return statearr_27304;
})();
if(cljs.core.truth_(inst_27283)){
var statearr_27305_27322 = state_27300__$1;
(statearr_27305_27322[(1)] = (5));

} else {
var statearr_27306_27323 = state_27300__$1;
(statearr_27306_27323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (6))){
var inst_27282 = (state_27300[(7)]);
var inst_27287 = p.call(null,inst_27282);
var state_27300__$1 = state_27300;
if(cljs.core.truth_(inst_27287)){
var statearr_27307_27324 = state_27300__$1;
(statearr_27307_27324[(1)] = (8));

} else {
var statearr_27308_27325 = state_27300__$1;
(statearr_27308_27325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (3))){
var inst_27298 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27300__$1,inst_27298);
} else {
if((state_val_27301 === (2))){
var state_27300__$1 = state_27300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27300__$1,(4),ch);
} else {
if((state_val_27301 === (11))){
var inst_27290 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
var statearr_27309_27326 = state_27300__$1;
(statearr_27309_27326[(2)] = inst_27290);

(statearr_27309_27326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (9))){
var state_27300__$1 = state_27300;
var statearr_27310_27327 = state_27300__$1;
(statearr_27310_27327[(2)] = null);

(statearr_27310_27327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (5))){
var inst_27285 = cljs.core.async.close_BANG_.call(null,out);
var state_27300__$1 = state_27300;
var statearr_27311_27328 = state_27300__$1;
(statearr_27311_27328[(2)] = inst_27285);

(statearr_27311_27328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (10))){
var inst_27293 = (state_27300[(2)]);
var state_27300__$1 = (function (){var statearr_27312 = state_27300;
(statearr_27312[(8)] = inst_27293);

return statearr_27312;
})();
var statearr_27313_27329 = state_27300__$1;
(statearr_27313_27329[(2)] = null);

(statearr_27313_27329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (8))){
var inst_27282 = (state_27300[(7)]);
var state_27300__$1 = state_27300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27300__$1,(11),out,inst_27282);
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
});})(c__25780__auto___27319,out))
;
return ((function (switch__25685__auto__,c__25780__auto___27319,out){
return (function() {
var cljs$core$async$state_machine__25686__auto__ = null;
var cljs$core$async$state_machine__25686__auto____0 = (function (){
var statearr_27314 = [null,null,null,null,null,null,null,null,null];
(statearr_27314[(0)] = cljs$core$async$state_machine__25686__auto__);

(statearr_27314[(1)] = (1));

return statearr_27314;
});
var cljs$core$async$state_machine__25686__auto____1 = (function (state_27300){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_27300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e27315){if((e27315 instanceof Object)){
var ex__25689__auto__ = e27315;
var statearr_27316_27330 = state_27300;
(statearr_27316_27330[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27331 = state_27300;
state_27300 = G__27331;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$state_machine__25686__auto__ = function(state_27300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25686__auto____1.call(this,state_27300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25686__auto____0;
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25686__auto____1;
return cljs$core$async$state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto___27319,out))
})();
var state__25782__auto__ = (function (){var statearr_27317 = f__25781__auto__.call(null);
(statearr_27317[(6)] = c__25780__auto___27319);

return statearr_27317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto___27319,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27333 = arguments.length;
switch (G__27333) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25780__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto__){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto__){
return (function (state_27396){
var state_val_27397 = (state_27396[(1)]);
if((state_val_27397 === (7))){
var inst_27392 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27398_27436 = state_27396__$1;
(statearr_27398_27436[(2)] = inst_27392);

(statearr_27398_27436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (20))){
var inst_27362 = (state_27396[(7)]);
var inst_27373 = (state_27396[(2)]);
var inst_27374 = cljs.core.next.call(null,inst_27362);
var inst_27348 = inst_27374;
var inst_27349 = null;
var inst_27350 = (0);
var inst_27351 = (0);
var state_27396__$1 = (function (){var statearr_27399 = state_27396;
(statearr_27399[(8)] = inst_27373);

(statearr_27399[(9)] = inst_27351);

(statearr_27399[(10)] = inst_27350);

(statearr_27399[(11)] = inst_27348);

(statearr_27399[(12)] = inst_27349);

return statearr_27399;
})();
var statearr_27400_27437 = state_27396__$1;
(statearr_27400_27437[(2)] = null);

(statearr_27400_27437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (1))){
var state_27396__$1 = state_27396;
var statearr_27401_27438 = state_27396__$1;
(statearr_27401_27438[(2)] = null);

(statearr_27401_27438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (4))){
var inst_27337 = (state_27396[(13)]);
var inst_27337__$1 = (state_27396[(2)]);
var inst_27338 = (inst_27337__$1 == null);
var state_27396__$1 = (function (){var statearr_27402 = state_27396;
(statearr_27402[(13)] = inst_27337__$1);

return statearr_27402;
})();
if(cljs.core.truth_(inst_27338)){
var statearr_27403_27439 = state_27396__$1;
(statearr_27403_27439[(1)] = (5));

} else {
var statearr_27404_27440 = state_27396__$1;
(statearr_27404_27440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (15))){
var state_27396__$1 = state_27396;
var statearr_27408_27441 = state_27396__$1;
(statearr_27408_27441[(2)] = null);

(statearr_27408_27441[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (21))){
var state_27396__$1 = state_27396;
var statearr_27409_27442 = state_27396__$1;
(statearr_27409_27442[(2)] = null);

(statearr_27409_27442[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (13))){
var inst_27351 = (state_27396[(9)]);
var inst_27350 = (state_27396[(10)]);
var inst_27348 = (state_27396[(11)]);
var inst_27349 = (state_27396[(12)]);
var inst_27358 = (state_27396[(2)]);
var inst_27359 = (inst_27351 + (1));
var tmp27405 = inst_27350;
var tmp27406 = inst_27348;
var tmp27407 = inst_27349;
var inst_27348__$1 = tmp27406;
var inst_27349__$1 = tmp27407;
var inst_27350__$1 = tmp27405;
var inst_27351__$1 = inst_27359;
var state_27396__$1 = (function (){var statearr_27410 = state_27396;
(statearr_27410[(14)] = inst_27358);

(statearr_27410[(9)] = inst_27351__$1);

(statearr_27410[(10)] = inst_27350__$1);

(statearr_27410[(11)] = inst_27348__$1);

(statearr_27410[(12)] = inst_27349__$1);

return statearr_27410;
})();
var statearr_27411_27443 = state_27396__$1;
(statearr_27411_27443[(2)] = null);

(statearr_27411_27443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (22))){
var state_27396__$1 = state_27396;
var statearr_27412_27444 = state_27396__$1;
(statearr_27412_27444[(2)] = null);

(statearr_27412_27444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (6))){
var inst_27337 = (state_27396[(13)]);
var inst_27346 = f.call(null,inst_27337);
var inst_27347 = cljs.core.seq.call(null,inst_27346);
var inst_27348 = inst_27347;
var inst_27349 = null;
var inst_27350 = (0);
var inst_27351 = (0);
var state_27396__$1 = (function (){var statearr_27413 = state_27396;
(statearr_27413[(9)] = inst_27351);

(statearr_27413[(10)] = inst_27350);

(statearr_27413[(11)] = inst_27348);

(statearr_27413[(12)] = inst_27349);

return statearr_27413;
})();
var statearr_27414_27445 = state_27396__$1;
(statearr_27414_27445[(2)] = null);

(statearr_27414_27445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (17))){
var inst_27362 = (state_27396[(7)]);
var inst_27366 = cljs.core.chunk_first.call(null,inst_27362);
var inst_27367 = cljs.core.chunk_rest.call(null,inst_27362);
var inst_27368 = cljs.core.count.call(null,inst_27366);
var inst_27348 = inst_27367;
var inst_27349 = inst_27366;
var inst_27350 = inst_27368;
var inst_27351 = (0);
var state_27396__$1 = (function (){var statearr_27415 = state_27396;
(statearr_27415[(9)] = inst_27351);

(statearr_27415[(10)] = inst_27350);

(statearr_27415[(11)] = inst_27348);

(statearr_27415[(12)] = inst_27349);

return statearr_27415;
})();
var statearr_27416_27446 = state_27396__$1;
(statearr_27416_27446[(2)] = null);

(statearr_27416_27446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (3))){
var inst_27394 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27396__$1,inst_27394);
} else {
if((state_val_27397 === (12))){
var inst_27382 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27417_27447 = state_27396__$1;
(statearr_27417_27447[(2)] = inst_27382);

(statearr_27417_27447[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (2))){
var state_27396__$1 = state_27396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27396__$1,(4),in$);
} else {
if((state_val_27397 === (23))){
var inst_27390 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27418_27448 = state_27396__$1;
(statearr_27418_27448[(2)] = inst_27390);

(statearr_27418_27448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (19))){
var inst_27377 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27419_27449 = state_27396__$1;
(statearr_27419_27449[(2)] = inst_27377);

(statearr_27419_27449[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (11))){
var inst_27348 = (state_27396[(11)]);
var inst_27362 = (state_27396[(7)]);
var inst_27362__$1 = cljs.core.seq.call(null,inst_27348);
var state_27396__$1 = (function (){var statearr_27420 = state_27396;
(statearr_27420[(7)] = inst_27362__$1);

return statearr_27420;
})();
if(inst_27362__$1){
var statearr_27421_27450 = state_27396__$1;
(statearr_27421_27450[(1)] = (14));

} else {
var statearr_27422_27451 = state_27396__$1;
(statearr_27422_27451[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (9))){
var inst_27384 = (state_27396[(2)]);
var inst_27385 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27396__$1 = (function (){var statearr_27423 = state_27396;
(statearr_27423[(15)] = inst_27384);

return statearr_27423;
})();
if(cljs.core.truth_(inst_27385)){
var statearr_27424_27452 = state_27396__$1;
(statearr_27424_27452[(1)] = (21));

} else {
var statearr_27425_27453 = state_27396__$1;
(statearr_27425_27453[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (5))){
var inst_27340 = cljs.core.async.close_BANG_.call(null,out);
var state_27396__$1 = state_27396;
var statearr_27426_27454 = state_27396__$1;
(statearr_27426_27454[(2)] = inst_27340);

(statearr_27426_27454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (14))){
var inst_27362 = (state_27396[(7)]);
var inst_27364 = cljs.core.chunked_seq_QMARK_.call(null,inst_27362);
var state_27396__$1 = state_27396;
if(inst_27364){
var statearr_27427_27455 = state_27396__$1;
(statearr_27427_27455[(1)] = (17));

} else {
var statearr_27428_27456 = state_27396__$1;
(statearr_27428_27456[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (16))){
var inst_27380 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27429_27457 = state_27396__$1;
(statearr_27429_27457[(2)] = inst_27380);

(statearr_27429_27457[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (10))){
var inst_27351 = (state_27396[(9)]);
var inst_27349 = (state_27396[(12)]);
var inst_27356 = cljs.core._nth.call(null,inst_27349,inst_27351);
var state_27396__$1 = state_27396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27396__$1,(13),out,inst_27356);
} else {
if((state_val_27397 === (18))){
var inst_27362 = (state_27396[(7)]);
var inst_27371 = cljs.core.first.call(null,inst_27362);
var state_27396__$1 = state_27396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27396__$1,(20),out,inst_27371);
} else {
if((state_val_27397 === (8))){
var inst_27351 = (state_27396[(9)]);
var inst_27350 = (state_27396[(10)]);
var inst_27353 = (inst_27351 < inst_27350);
var inst_27354 = inst_27353;
var state_27396__$1 = state_27396;
if(cljs.core.truth_(inst_27354)){
var statearr_27430_27458 = state_27396__$1;
(statearr_27430_27458[(1)] = (10));

} else {
var statearr_27431_27459 = state_27396__$1;
(statearr_27431_27459[(1)] = (11));

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
});})(c__25780__auto__))
;
return ((function (switch__25685__auto__,c__25780__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25686__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25686__auto____0 = (function (){
var statearr_27432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27432[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25686__auto__);

(statearr_27432[(1)] = (1));

return statearr_27432;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25686__auto____1 = (function (state_27396){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_27396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e27433){if((e27433 instanceof Object)){
var ex__25689__auto__ = e27433;
var statearr_27434_27460 = state_27396;
(statearr_27434_27460[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27461 = state_27396;
state_27396 = G__27461;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25686__auto__ = function(state_27396){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25686__auto____1.call(this,state_27396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25686__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25686__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto__))
})();
var state__25782__auto__ = (function (){var statearr_27435 = f__25781__auto__.call(null);
(statearr_27435[(6)] = c__25780__auto__);

return statearr_27435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto__))
);

return c__25780__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27463 = arguments.length;
switch (G__27463) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__27466 = arguments.length;
switch (G__27466) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__27469 = arguments.length;
switch (G__27469) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25780__auto___27516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto___27516,out){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto___27516,out){
return (function (state_27493){
var state_val_27494 = (state_27493[(1)]);
if((state_val_27494 === (7))){
var inst_27488 = (state_27493[(2)]);
var state_27493__$1 = state_27493;
var statearr_27495_27517 = state_27493__$1;
(statearr_27495_27517[(2)] = inst_27488);

(statearr_27495_27517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (1))){
var inst_27470 = null;
var state_27493__$1 = (function (){var statearr_27496 = state_27493;
(statearr_27496[(7)] = inst_27470);

return statearr_27496;
})();
var statearr_27497_27518 = state_27493__$1;
(statearr_27497_27518[(2)] = null);

(statearr_27497_27518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (4))){
var inst_27473 = (state_27493[(8)]);
var inst_27473__$1 = (state_27493[(2)]);
var inst_27474 = (inst_27473__$1 == null);
var inst_27475 = cljs.core.not.call(null,inst_27474);
var state_27493__$1 = (function (){var statearr_27498 = state_27493;
(statearr_27498[(8)] = inst_27473__$1);

return statearr_27498;
})();
if(inst_27475){
var statearr_27499_27519 = state_27493__$1;
(statearr_27499_27519[(1)] = (5));

} else {
var statearr_27500_27520 = state_27493__$1;
(statearr_27500_27520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (6))){
var state_27493__$1 = state_27493;
var statearr_27501_27521 = state_27493__$1;
(statearr_27501_27521[(2)] = null);

(statearr_27501_27521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (3))){
var inst_27490 = (state_27493[(2)]);
var inst_27491 = cljs.core.async.close_BANG_.call(null,out);
var state_27493__$1 = (function (){var statearr_27502 = state_27493;
(statearr_27502[(9)] = inst_27490);

return statearr_27502;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27493__$1,inst_27491);
} else {
if((state_val_27494 === (2))){
var state_27493__$1 = state_27493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27493__$1,(4),ch);
} else {
if((state_val_27494 === (11))){
var inst_27473 = (state_27493[(8)]);
var inst_27482 = (state_27493[(2)]);
var inst_27470 = inst_27473;
var state_27493__$1 = (function (){var statearr_27503 = state_27493;
(statearr_27503[(10)] = inst_27482);

(statearr_27503[(7)] = inst_27470);

return statearr_27503;
})();
var statearr_27504_27522 = state_27493__$1;
(statearr_27504_27522[(2)] = null);

(statearr_27504_27522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (9))){
var inst_27473 = (state_27493[(8)]);
var state_27493__$1 = state_27493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27493__$1,(11),out,inst_27473);
} else {
if((state_val_27494 === (5))){
var inst_27470 = (state_27493[(7)]);
var inst_27473 = (state_27493[(8)]);
var inst_27477 = cljs.core._EQ_.call(null,inst_27473,inst_27470);
var state_27493__$1 = state_27493;
if(inst_27477){
var statearr_27506_27523 = state_27493__$1;
(statearr_27506_27523[(1)] = (8));

} else {
var statearr_27507_27524 = state_27493__$1;
(statearr_27507_27524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (10))){
var inst_27485 = (state_27493[(2)]);
var state_27493__$1 = state_27493;
var statearr_27508_27525 = state_27493__$1;
(statearr_27508_27525[(2)] = inst_27485);

(statearr_27508_27525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27494 === (8))){
var inst_27470 = (state_27493[(7)]);
var tmp27505 = inst_27470;
var inst_27470__$1 = tmp27505;
var state_27493__$1 = (function (){var statearr_27509 = state_27493;
(statearr_27509[(7)] = inst_27470__$1);

return statearr_27509;
})();
var statearr_27510_27526 = state_27493__$1;
(statearr_27510_27526[(2)] = null);

(statearr_27510_27526[(1)] = (2));


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
});})(c__25780__auto___27516,out))
;
return ((function (switch__25685__auto__,c__25780__auto___27516,out){
return (function() {
var cljs$core$async$state_machine__25686__auto__ = null;
var cljs$core$async$state_machine__25686__auto____0 = (function (){
var statearr_27511 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27511[(0)] = cljs$core$async$state_machine__25686__auto__);

(statearr_27511[(1)] = (1));

return statearr_27511;
});
var cljs$core$async$state_machine__25686__auto____1 = (function (state_27493){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_27493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e27512){if((e27512 instanceof Object)){
var ex__25689__auto__ = e27512;
var statearr_27513_27527 = state_27493;
(statearr_27513_27527[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27528 = state_27493;
state_27493 = G__27528;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$state_machine__25686__auto__ = function(state_27493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25686__auto____1.call(this,state_27493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25686__auto____0;
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25686__auto____1;
return cljs$core$async$state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto___27516,out))
})();
var state__25782__auto__ = (function (){var statearr_27514 = f__25781__auto__.call(null);
(statearr_27514[(6)] = c__25780__auto___27516);

return statearr_27514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto___27516,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27530 = arguments.length;
switch (G__27530) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25780__auto___27596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto___27596,out){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto___27596,out){
return (function (state_27568){
var state_val_27569 = (state_27568[(1)]);
if((state_val_27569 === (7))){
var inst_27564 = (state_27568[(2)]);
var state_27568__$1 = state_27568;
var statearr_27570_27597 = state_27568__$1;
(statearr_27570_27597[(2)] = inst_27564);

(statearr_27570_27597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (1))){
var inst_27531 = (new Array(n));
var inst_27532 = inst_27531;
var inst_27533 = (0);
var state_27568__$1 = (function (){var statearr_27571 = state_27568;
(statearr_27571[(7)] = inst_27533);

(statearr_27571[(8)] = inst_27532);

return statearr_27571;
})();
var statearr_27572_27598 = state_27568__$1;
(statearr_27572_27598[(2)] = null);

(statearr_27572_27598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (4))){
var inst_27536 = (state_27568[(9)]);
var inst_27536__$1 = (state_27568[(2)]);
var inst_27537 = (inst_27536__$1 == null);
var inst_27538 = cljs.core.not.call(null,inst_27537);
var state_27568__$1 = (function (){var statearr_27573 = state_27568;
(statearr_27573[(9)] = inst_27536__$1);

return statearr_27573;
})();
if(inst_27538){
var statearr_27574_27599 = state_27568__$1;
(statearr_27574_27599[(1)] = (5));

} else {
var statearr_27575_27600 = state_27568__$1;
(statearr_27575_27600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (15))){
var inst_27558 = (state_27568[(2)]);
var state_27568__$1 = state_27568;
var statearr_27576_27601 = state_27568__$1;
(statearr_27576_27601[(2)] = inst_27558);

(statearr_27576_27601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (13))){
var state_27568__$1 = state_27568;
var statearr_27577_27602 = state_27568__$1;
(statearr_27577_27602[(2)] = null);

(statearr_27577_27602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (6))){
var inst_27533 = (state_27568[(7)]);
var inst_27554 = (inst_27533 > (0));
var state_27568__$1 = state_27568;
if(cljs.core.truth_(inst_27554)){
var statearr_27578_27603 = state_27568__$1;
(statearr_27578_27603[(1)] = (12));

} else {
var statearr_27579_27604 = state_27568__$1;
(statearr_27579_27604[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (3))){
var inst_27566 = (state_27568[(2)]);
var state_27568__$1 = state_27568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27568__$1,inst_27566);
} else {
if((state_val_27569 === (12))){
var inst_27532 = (state_27568[(8)]);
var inst_27556 = cljs.core.vec.call(null,inst_27532);
var state_27568__$1 = state_27568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27568__$1,(15),out,inst_27556);
} else {
if((state_val_27569 === (2))){
var state_27568__$1 = state_27568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27568__$1,(4),ch);
} else {
if((state_val_27569 === (11))){
var inst_27548 = (state_27568[(2)]);
var inst_27549 = (new Array(n));
var inst_27532 = inst_27549;
var inst_27533 = (0);
var state_27568__$1 = (function (){var statearr_27580 = state_27568;
(statearr_27580[(10)] = inst_27548);

(statearr_27580[(7)] = inst_27533);

(statearr_27580[(8)] = inst_27532);

return statearr_27580;
})();
var statearr_27581_27605 = state_27568__$1;
(statearr_27581_27605[(2)] = null);

(statearr_27581_27605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (9))){
var inst_27532 = (state_27568[(8)]);
var inst_27546 = cljs.core.vec.call(null,inst_27532);
var state_27568__$1 = state_27568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27568__$1,(11),out,inst_27546);
} else {
if((state_val_27569 === (5))){
var inst_27541 = (state_27568[(11)]);
var inst_27533 = (state_27568[(7)]);
var inst_27532 = (state_27568[(8)]);
var inst_27536 = (state_27568[(9)]);
var inst_27540 = (inst_27532[inst_27533] = inst_27536);
var inst_27541__$1 = (inst_27533 + (1));
var inst_27542 = (inst_27541__$1 < n);
var state_27568__$1 = (function (){var statearr_27582 = state_27568;
(statearr_27582[(12)] = inst_27540);

(statearr_27582[(11)] = inst_27541__$1);

return statearr_27582;
})();
if(cljs.core.truth_(inst_27542)){
var statearr_27583_27606 = state_27568__$1;
(statearr_27583_27606[(1)] = (8));

} else {
var statearr_27584_27607 = state_27568__$1;
(statearr_27584_27607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (14))){
var inst_27561 = (state_27568[(2)]);
var inst_27562 = cljs.core.async.close_BANG_.call(null,out);
var state_27568__$1 = (function (){var statearr_27586 = state_27568;
(statearr_27586[(13)] = inst_27561);

return statearr_27586;
})();
var statearr_27587_27608 = state_27568__$1;
(statearr_27587_27608[(2)] = inst_27562);

(statearr_27587_27608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (10))){
var inst_27552 = (state_27568[(2)]);
var state_27568__$1 = state_27568;
var statearr_27588_27609 = state_27568__$1;
(statearr_27588_27609[(2)] = inst_27552);

(statearr_27588_27609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27569 === (8))){
var inst_27541 = (state_27568[(11)]);
var inst_27532 = (state_27568[(8)]);
var tmp27585 = inst_27532;
var inst_27532__$1 = tmp27585;
var inst_27533 = inst_27541;
var state_27568__$1 = (function (){var statearr_27589 = state_27568;
(statearr_27589[(7)] = inst_27533);

(statearr_27589[(8)] = inst_27532__$1);

return statearr_27589;
})();
var statearr_27590_27610 = state_27568__$1;
(statearr_27590_27610[(2)] = null);

(statearr_27590_27610[(1)] = (2));


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
});})(c__25780__auto___27596,out))
;
return ((function (switch__25685__auto__,c__25780__auto___27596,out){
return (function() {
var cljs$core$async$state_machine__25686__auto__ = null;
var cljs$core$async$state_machine__25686__auto____0 = (function (){
var statearr_27591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27591[(0)] = cljs$core$async$state_machine__25686__auto__);

(statearr_27591[(1)] = (1));

return statearr_27591;
});
var cljs$core$async$state_machine__25686__auto____1 = (function (state_27568){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_27568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e27592){if((e27592 instanceof Object)){
var ex__25689__auto__ = e27592;
var statearr_27593_27611 = state_27568;
(statearr_27593_27611[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27612 = state_27568;
state_27568 = G__27612;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$state_machine__25686__auto__ = function(state_27568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25686__auto____1.call(this,state_27568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25686__auto____0;
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25686__auto____1;
return cljs$core$async$state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto___27596,out))
})();
var state__25782__auto__ = (function (){var statearr_27594 = f__25781__auto__.call(null);
(statearr_27594[(6)] = c__25780__auto___27596);

return statearr_27594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto___27596,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27614 = arguments.length;
switch (G__27614) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25780__auto___27684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25780__auto___27684,out){
return (function (){
var f__25781__auto__ = (function (){var switch__25685__auto__ = ((function (c__25780__auto___27684,out){
return (function (state_27656){
var state_val_27657 = (state_27656[(1)]);
if((state_val_27657 === (7))){
var inst_27652 = (state_27656[(2)]);
var state_27656__$1 = state_27656;
var statearr_27658_27685 = state_27656__$1;
(statearr_27658_27685[(2)] = inst_27652);

(statearr_27658_27685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (1))){
var inst_27615 = [];
var inst_27616 = inst_27615;
var inst_27617 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27656__$1 = (function (){var statearr_27659 = state_27656;
(statearr_27659[(7)] = inst_27617);

(statearr_27659[(8)] = inst_27616);

return statearr_27659;
})();
var statearr_27660_27686 = state_27656__$1;
(statearr_27660_27686[(2)] = null);

(statearr_27660_27686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (4))){
var inst_27620 = (state_27656[(9)]);
var inst_27620__$1 = (state_27656[(2)]);
var inst_27621 = (inst_27620__$1 == null);
var inst_27622 = cljs.core.not.call(null,inst_27621);
var state_27656__$1 = (function (){var statearr_27661 = state_27656;
(statearr_27661[(9)] = inst_27620__$1);

return statearr_27661;
})();
if(inst_27622){
var statearr_27662_27687 = state_27656__$1;
(statearr_27662_27687[(1)] = (5));

} else {
var statearr_27663_27688 = state_27656__$1;
(statearr_27663_27688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (15))){
var inst_27646 = (state_27656[(2)]);
var state_27656__$1 = state_27656;
var statearr_27664_27689 = state_27656__$1;
(statearr_27664_27689[(2)] = inst_27646);

(statearr_27664_27689[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (13))){
var state_27656__$1 = state_27656;
var statearr_27665_27690 = state_27656__$1;
(statearr_27665_27690[(2)] = null);

(statearr_27665_27690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (6))){
var inst_27616 = (state_27656[(8)]);
var inst_27641 = inst_27616.length;
var inst_27642 = (inst_27641 > (0));
var state_27656__$1 = state_27656;
if(cljs.core.truth_(inst_27642)){
var statearr_27666_27691 = state_27656__$1;
(statearr_27666_27691[(1)] = (12));

} else {
var statearr_27667_27692 = state_27656__$1;
(statearr_27667_27692[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (3))){
var inst_27654 = (state_27656[(2)]);
var state_27656__$1 = state_27656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27656__$1,inst_27654);
} else {
if((state_val_27657 === (12))){
var inst_27616 = (state_27656[(8)]);
var inst_27644 = cljs.core.vec.call(null,inst_27616);
var state_27656__$1 = state_27656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27656__$1,(15),out,inst_27644);
} else {
if((state_val_27657 === (2))){
var state_27656__$1 = state_27656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27656__$1,(4),ch);
} else {
if((state_val_27657 === (11))){
var inst_27624 = (state_27656[(10)]);
var inst_27620 = (state_27656[(9)]);
var inst_27634 = (state_27656[(2)]);
var inst_27635 = [];
var inst_27636 = inst_27635.push(inst_27620);
var inst_27616 = inst_27635;
var inst_27617 = inst_27624;
var state_27656__$1 = (function (){var statearr_27668 = state_27656;
(statearr_27668[(7)] = inst_27617);

(statearr_27668[(11)] = inst_27636);

(statearr_27668[(8)] = inst_27616);

(statearr_27668[(12)] = inst_27634);

return statearr_27668;
})();
var statearr_27669_27693 = state_27656__$1;
(statearr_27669_27693[(2)] = null);

(statearr_27669_27693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (9))){
var inst_27616 = (state_27656[(8)]);
var inst_27632 = cljs.core.vec.call(null,inst_27616);
var state_27656__$1 = state_27656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27656__$1,(11),out,inst_27632);
} else {
if((state_val_27657 === (5))){
var inst_27617 = (state_27656[(7)]);
var inst_27624 = (state_27656[(10)]);
var inst_27620 = (state_27656[(9)]);
var inst_27624__$1 = f.call(null,inst_27620);
var inst_27625 = cljs.core._EQ_.call(null,inst_27624__$1,inst_27617);
var inst_27626 = cljs.core.keyword_identical_QMARK_.call(null,inst_27617,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27627 = ((inst_27625) || (inst_27626));
var state_27656__$1 = (function (){var statearr_27670 = state_27656;
(statearr_27670[(10)] = inst_27624__$1);

return statearr_27670;
})();
if(cljs.core.truth_(inst_27627)){
var statearr_27671_27694 = state_27656__$1;
(statearr_27671_27694[(1)] = (8));

} else {
var statearr_27672_27695 = state_27656__$1;
(statearr_27672_27695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (14))){
var inst_27649 = (state_27656[(2)]);
var inst_27650 = cljs.core.async.close_BANG_.call(null,out);
var state_27656__$1 = (function (){var statearr_27674 = state_27656;
(statearr_27674[(13)] = inst_27649);

return statearr_27674;
})();
var statearr_27675_27696 = state_27656__$1;
(statearr_27675_27696[(2)] = inst_27650);

(statearr_27675_27696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (10))){
var inst_27639 = (state_27656[(2)]);
var state_27656__$1 = state_27656;
var statearr_27676_27697 = state_27656__$1;
(statearr_27676_27697[(2)] = inst_27639);

(statearr_27676_27697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (8))){
var inst_27624 = (state_27656[(10)]);
var inst_27620 = (state_27656[(9)]);
var inst_27616 = (state_27656[(8)]);
var inst_27629 = inst_27616.push(inst_27620);
var tmp27673 = inst_27616;
var inst_27616__$1 = tmp27673;
var inst_27617 = inst_27624;
var state_27656__$1 = (function (){var statearr_27677 = state_27656;
(statearr_27677[(7)] = inst_27617);

(statearr_27677[(8)] = inst_27616__$1);

(statearr_27677[(14)] = inst_27629);

return statearr_27677;
})();
var statearr_27678_27698 = state_27656__$1;
(statearr_27678_27698[(2)] = null);

(statearr_27678_27698[(1)] = (2));


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
});})(c__25780__auto___27684,out))
;
return ((function (switch__25685__auto__,c__25780__auto___27684,out){
return (function() {
var cljs$core$async$state_machine__25686__auto__ = null;
var cljs$core$async$state_machine__25686__auto____0 = (function (){
var statearr_27679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27679[(0)] = cljs$core$async$state_machine__25686__auto__);

(statearr_27679[(1)] = (1));

return statearr_27679;
});
var cljs$core$async$state_machine__25686__auto____1 = (function (state_27656){
while(true){
var ret_value__25687__auto__ = (function (){try{while(true){
var result__25688__auto__ = switch__25685__auto__.call(null,state_27656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25688__auto__;
}
break;
}
}catch (e27680){if((e27680 instanceof Object)){
var ex__25689__auto__ = e27680;
var statearr_27681_27699 = state_27656;
(statearr_27681_27699[(5)] = ex__25689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27700 = state_27656;
state_27656 = G__27700;
continue;
} else {
return ret_value__25687__auto__;
}
break;
}
});
cljs$core$async$state_machine__25686__auto__ = function(state_27656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25686__auto____1.call(this,state_27656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25686__auto____0;
cljs$core$async$state_machine__25686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25686__auto____1;
return cljs$core$async$state_machine__25686__auto__;
})()
;})(switch__25685__auto__,c__25780__auto___27684,out))
})();
var state__25782__auto__ = (function (){var statearr_27682 = f__25781__auto__.call(null);
(statearr_27682[(6)] = c__25780__auto___27684);

return statearr_27682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25782__auto__);
});})(c__25780__auto___27684,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1542520740977
