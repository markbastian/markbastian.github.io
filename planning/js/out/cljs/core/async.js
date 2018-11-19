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
var G__23316 = arguments.length;
switch (G__23316) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23317 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23317 = (function (f,blockable,meta23318){
this.f = f;
this.blockable = blockable;
this.meta23318 = meta23318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23319,meta23318__$1){
var self__ = this;
var _23319__$1 = this;
return (new cljs.core.async.t_cljs$core$async23317(self__.f,self__.blockable,meta23318__$1));
});

cljs.core.async.t_cljs$core$async23317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23319){
var self__ = this;
var _23319__$1 = this;
return self__.meta23318;
});

cljs.core.async.t_cljs$core$async23317.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23317.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23317.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23317.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23318","meta23318",-1858962818,null)], null);
});

cljs.core.async.t_cljs$core$async23317.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23317.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23317";

cljs.core.async.t_cljs$core$async23317.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async23317");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23317.
 */
cljs.core.async.__GT_t_cljs$core$async23317 = (function cljs$core$async$__GT_t_cljs$core$async23317(f__$1,blockable__$1,meta23318){
return (new cljs.core.async.t_cljs$core$async23317(f__$1,blockable__$1,meta23318));
});

}

return (new cljs.core.async.t_cljs$core$async23317(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23323 = arguments.length;
switch (G__23323) {
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
var G__23326 = arguments.length;
switch (G__23326) {
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
var G__23329 = arguments.length;
switch (G__23329) {
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
var val_23331 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23331);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23331,ret){
return (function (){
return fn1.call(null,val_23331);
});})(val_23331,ret))
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
var G__23333 = arguments.length;
switch (G__23333) {
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
var n__4518__auto___23335 = n;
var x_23336 = (0);
while(true){
if((x_23336 < n__4518__auto___23335)){
(a[x_23336] = (0));

var G__23337 = (x_23336 + (1));
x_23336 = G__23337;
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

var G__23338 = (i + (1));
i = G__23338;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23339 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23339 = (function (flag,meta23340){
this.flag = flag;
this.meta23340 = meta23340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23341,meta23340__$1){
var self__ = this;
var _23341__$1 = this;
return (new cljs.core.async.t_cljs$core$async23339(self__.flag,meta23340__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23339.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23341){
var self__ = this;
var _23341__$1 = this;
return self__.meta23340;
});})(flag))
;

cljs.core.async.t_cljs$core$async23339.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23339.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23339.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23340","meta23340",-1190090466,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23339.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23339";

cljs.core.async.t_cljs$core$async23339.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async23339");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23339.
 */
cljs.core.async.__GT_t_cljs$core$async23339 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23339(flag__$1,meta23340){
return (new cljs.core.async.t_cljs$core$async23339(flag__$1,meta23340));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23339(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23342 = (function (flag,cb,meta23343){
this.flag = flag;
this.cb = cb;
this.meta23343 = meta23343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23344,meta23343__$1){
var self__ = this;
var _23344__$1 = this;
return (new cljs.core.async.t_cljs$core$async23342(self__.flag,self__.cb,meta23343__$1));
});

cljs.core.async.t_cljs$core$async23342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23344){
var self__ = this;
var _23344__$1 = this;
return self__.meta23343;
});

cljs.core.async.t_cljs$core$async23342.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23342.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23343","meta23343",-2049669923,null)], null);
});

cljs.core.async.t_cljs$core$async23342.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23342";

cljs.core.async.t_cljs$core$async23342.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async23342");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23342.
 */
cljs.core.async.__GT_t_cljs$core$async23342 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23342(flag__$1,cb__$1,meta23343){
return (new cljs.core.async.t_cljs$core$async23342(flag__$1,cb__$1,meta23343));
});

}

return (new cljs.core.async.t_cljs$core$async23342(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23345_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23345_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23346_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23346_SHARP_,port], null));
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
var G__23347 = (i + (1));
i = G__23347;
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
var len__4641__auto___23353 = arguments.length;
var i__4642__auto___23354 = (0);
while(true){
if((i__4642__auto___23354 < len__4641__auto___23353)){
args__4647__auto__.push((arguments[i__4642__auto___23354]));

var G__23355 = (i__4642__auto___23354 + (1));
i__4642__auto___23354 = G__23355;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23350){
var map__23351 = p__23350;
var map__23351__$1 = (((((!((map__23351 == null))))?(((((map__23351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23351):map__23351);
var opts = map__23351__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23348){
var G__23349 = cljs.core.first.call(null,seq23348);
var seq23348__$1 = cljs.core.next.call(null,seq23348);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23349,seq23348__$1);
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
var G__23357 = arguments.length;
switch (G__23357) {
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
var c__23256__auto___23403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23256__auto___23403){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (c__23256__auto___23403){
return (function (state_23381){
var state_val_23382 = (state_23381[(1)]);
if((state_val_23382 === (7))){
var inst_23377 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
var statearr_23383_23404 = state_23381__$1;
(statearr_23383_23404[(2)] = inst_23377);

(statearr_23383_23404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (1))){
var state_23381__$1 = state_23381;
var statearr_23384_23405 = state_23381__$1;
(statearr_23384_23405[(2)] = null);

(statearr_23384_23405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (4))){
var inst_23360 = (state_23381[(7)]);
var inst_23360__$1 = (state_23381[(2)]);
var inst_23361 = (inst_23360__$1 == null);
var state_23381__$1 = (function (){var statearr_23385 = state_23381;
(statearr_23385[(7)] = inst_23360__$1);

return statearr_23385;
})();
if(cljs.core.truth_(inst_23361)){
var statearr_23386_23406 = state_23381__$1;
(statearr_23386_23406[(1)] = (5));

} else {
var statearr_23387_23407 = state_23381__$1;
(statearr_23387_23407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (13))){
var state_23381__$1 = state_23381;
var statearr_23388_23408 = state_23381__$1;
(statearr_23388_23408[(2)] = null);

(statearr_23388_23408[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (6))){
var inst_23360 = (state_23381[(7)]);
var state_23381__$1 = state_23381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23381__$1,(11),to,inst_23360);
} else {
if((state_val_23382 === (3))){
var inst_23379 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23381__$1,inst_23379);
} else {
if((state_val_23382 === (12))){
var state_23381__$1 = state_23381;
var statearr_23389_23409 = state_23381__$1;
(statearr_23389_23409[(2)] = null);

(statearr_23389_23409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (2))){
var state_23381__$1 = state_23381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23381__$1,(4),from);
} else {
if((state_val_23382 === (11))){
var inst_23370 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
if(cljs.core.truth_(inst_23370)){
var statearr_23390_23410 = state_23381__$1;
(statearr_23390_23410[(1)] = (12));

} else {
var statearr_23391_23411 = state_23381__$1;
(statearr_23391_23411[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (9))){
var state_23381__$1 = state_23381;
var statearr_23392_23412 = state_23381__$1;
(statearr_23392_23412[(2)] = null);

(statearr_23392_23412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (5))){
var state_23381__$1 = state_23381;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23393_23413 = state_23381__$1;
(statearr_23393_23413[(1)] = (8));

} else {
var statearr_23394_23414 = state_23381__$1;
(statearr_23394_23414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (14))){
var inst_23375 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
var statearr_23395_23415 = state_23381__$1;
(statearr_23395_23415[(2)] = inst_23375);

(statearr_23395_23415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (10))){
var inst_23367 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
var statearr_23396_23416 = state_23381__$1;
(statearr_23396_23416[(2)] = inst_23367);

(statearr_23396_23416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (8))){
var inst_23364 = cljs.core.async.close_BANG_.call(null,to);
var state_23381__$1 = state_23381;
var statearr_23397_23417 = state_23381__$1;
(statearr_23397_23417[(2)] = inst_23364);

(statearr_23397_23417[(1)] = (10));


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
});})(c__23256__auto___23403))
;
return ((function (switch__23161__auto__,c__23256__auto___23403){
return (function() {
var cljs$core$async$state_machine__23162__auto__ = null;
var cljs$core$async$state_machine__23162__auto____0 = (function (){
var statearr_23398 = [null,null,null,null,null,null,null,null];
(statearr_23398[(0)] = cljs$core$async$state_machine__23162__auto__);

(statearr_23398[(1)] = (1));

return statearr_23398;
});
var cljs$core$async$state_machine__23162__auto____1 = (function (state_23381){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_23381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e23399){if((e23399 instanceof Object)){
var ex__23165__auto__ = e23399;
var statearr_23400_23418 = state_23381;
(statearr_23400_23418[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23419 = state_23381;
state_23381 = G__23419;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$state_machine__23162__auto__ = function(state_23381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23162__auto____1.call(this,state_23381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23162__auto____0;
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23162__auto____1;
return cljs$core$async$state_machine__23162__auto__;
})()
;})(switch__23161__auto__,c__23256__auto___23403))
})();
var state__23258__auto__ = (function (){var statearr_23401 = f__23257__auto__.call(null);
(statearr_23401[(6)] = c__23256__auto___23403);

return statearr_23401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(c__23256__auto___23403))
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
return (function (p__23420){
var vec__23421 = p__23420;
var v = cljs.core.nth.call(null,vec__23421,(0),null);
var p = cljs.core.nth.call(null,vec__23421,(1),null);
var job = vec__23421;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23256__auto___23592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23256__auto___23592,res,vec__23421,v,p,job,jobs,results){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (c__23256__auto___23592,res,vec__23421,v,p,job,jobs,results){
return (function (state_23428){
var state_val_23429 = (state_23428[(1)]);
if((state_val_23429 === (1))){
var state_23428__$1 = state_23428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23428__$1,(2),res,v);
} else {
if((state_val_23429 === (2))){
var inst_23425 = (state_23428[(2)]);
var inst_23426 = cljs.core.async.close_BANG_.call(null,res);
var state_23428__$1 = (function (){var statearr_23430 = state_23428;
(statearr_23430[(7)] = inst_23425);

return statearr_23430;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23428__$1,inst_23426);
} else {
return null;
}
}
});})(c__23256__auto___23592,res,vec__23421,v,p,job,jobs,results))
;
return ((function (switch__23161__auto__,c__23256__auto___23592,res,vec__23421,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____0 = (function (){
var statearr_23431 = [null,null,null,null,null,null,null,null];
(statearr_23431[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__);

(statearr_23431[(1)] = (1));

return statearr_23431;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____1 = (function (state_23428){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_23428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e23432){if((e23432 instanceof Object)){
var ex__23165__auto__ = e23432;
var statearr_23433_23593 = state_23428;
(statearr_23433_23593[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23594 = state_23428;
state_23428 = G__23594;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__ = function(state_23428){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____1.call(this,state_23428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__;
})()
;})(switch__23161__auto__,c__23256__auto___23592,res,vec__23421,v,p,job,jobs,results))
})();
var state__23258__auto__ = (function (){var statearr_23434 = f__23257__auto__.call(null);
(statearr_23434[(6)] = c__23256__auto___23592);

return statearr_23434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(c__23256__auto___23592,res,vec__23421,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23435){
var vec__23436 = p__23435;
var v = cljs.core.nth.call(null,vec__23436,(0),null);
var p = cljs.core.nth.call(null,vec__23436,(1),null);
var job = vec__23436;
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
var n__4518__auto___23595 = n;
var __23596 = (0);
while(true){
if((__23596 < n__4518__auto___23595)){
var G__23439_23597 = type;
var G__23439_23598__$1 = (((G__23439_23597 instanceof cljs.core.Keyword))?G__23439_23597.fqn:null);
switch (G__23439_23598__$1) {
case "compute":
var c__23256__auto___23600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23596,c__23256__auto___23600,G__23439_23597,G__23439_23598__$1,n__4518__auto___23595,jobs,results,process,async){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (__23596,c__23256__auto___23600,G__23439_23597,G__23439_23598__$1,n__4518__auto___23595,jobs,results,process,async){
return (function (state_23452){
var state_val_23453 = (state_23452[(1)]);
if((state_val_23453 === (1))){
var state_23452__$1 = state_23452;
var statearr_23454_23601 = state_23452__$1;
(statearr_23454_23601[(2)] = null);

(statearr_23454_23601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23453 === (2))){
var state_23452__$1 = state_23452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23452__$1,(4),jobs);
} else {
if((state_val_23453 === (3))){
var inst_23450 = (state_23452[(2)]);
var state_23452__$1 = state_23452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23452__$1,inst_23450);
} else {
if((state_val_23453 === (4))){
var inst_23442 = (state_23452[(2)]);
var inst_23443 = process.call(null,inst_23442);
var state_23452__$1 = state_23452;
if(cljs.core.truth_(inst_23443)){
var statearr_23455_23602 = state_23452__$1;
(statearr_23455_23602[(1)] = (5));

} else {
var statearr_23456_23603 = state_23452__$1;
(statearr_23456_23603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23453 === (5))){
var state_23452__$1 = state_23452;
var statearr_23457_23604 = state_23452__$1;
(statearr_23457_23604[(2)] = null);

(statearr_23457_23604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23453 === (6))){
var state_23452__$1 = state_23452;
var statearr_23458_23605 = state_23452__$1;
(statearr_23458_23605[(2)] = null);

(statearr_23458_23605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23453 === (7))){
var inst_23448 = (state_23452[(2)]);
var state_23452__$1 = state_23452;
var statearr_23459_23606 = state_23452__$1;
(statearr_23459_23606[(2)] = inst_23448);

(statearr_23459_23606[(1)] = (3));


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
});})(__23596,c__23256__auto___23600,G__23439_23597,G__23439_23598__$1,n__4518__auto___23595,jobs,results,process,async))
;
return ((function (__23596,switch__23161__auto__,c__23256__auto___23600,G__23439_23597,G__23439_23598__$1,n__4518__auto___23595,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____0 = (function (){
var statearr_23460 = [null,null,null,null,null,null,null];
(statearr_23460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__);

(statearr_23460[(1)] = (1));

return statearr_23460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____1 = (function (state_23452){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_23452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e23461){if((e23461 instanceof Object)){
var ex__23165__auto__ = e23461;
var statearr_23462_23607 = state_23452;
(statearr_23462_23607[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23608 = state_23452;
state_23452 = G__23608;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__ = function(state_23452){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____1.call(this,state_23452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__;
})()
;})(__23596,switch__23161__auto__,c__23256__auto___23600,G__23439_23597,G__23439_23598__$1,n__4518__auto___23595,jobs,results,process,async))
})();
var state__23258__auto__ = (function (){var statearr_23463 = f__23257__auto__.call(null);
(statearr_23463[(6)] = c__23256__auto___23600);

return statearr_23463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(__23596,c__23256__auto___23600,G__23439_23597,G__23439_23598__$1,n__4518__auto___23595,jobs,results,process,async))
);


break;
case "async":
var c__23256__auto___23609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23596,c__23256__auto___23609,G__23439_23597,G__23439_23598__$1,n__4518__auto___23595,jobs,results,process,async){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (__23596,c__23256__auto___23609,G__23439_23597,G__23439_23598__$1,n__4518__auto___23595,jobs,results,process,async){
return (function (state_23476){
var state_val_23477 = (state_23476[(1)]);
if((state_val_23477 === (1))){
var state_23476__$1 = state_23476;
var statearr_23478_23610 = state_23476__$1;
(statearr_23478_23610[(2)] = null);

(statearr_23478_23610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (2))){
var state_23476__$1 = state_23476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23476__$1,(4),jobs);
} else {
if((state_val_23477 === (3))){
var inst_23474 = (state_23476[(2)]);
var state_23476__$1 = state_23476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23476__$1,inst_23474);
} else {
if((state_val_23477 === (4))){
var inst_23466 = (state_23476[(2)]);
var inst_23467 = async.call(null,inst_23466);
var state_23476__$1 = state_23476;
if(cljs.core.truth_(inst_23467)){
var statearr_23479_23611 = state_23476__$1;
(statearr_23479_23611[(1)] = (5));

} else {
var statearr_23480_23612 = state_23476__$1;
(statearr_23480_23612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (5))){
var state_23476__$1 = state_23476;
var statearr_23481_23613 = state_23476__$1;
(statearr_23481_23613[(2)] = null);

(statearr_23481_23613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (6))){
var state_23476__$1 = state_23476;
var statearr_23482_23614 = state_23476__$1;
(statearr_23482_23614[(2)] = null);

(statearr_23482_23614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23477 === (7))){
var inst_23472 = (state_23476[(2)]);
var state_23476__$1 = state_23476;
var statearr_23483_23615 = state_23476__$1;
(statearr_23483_23615[(2)] = inst_23472);

(statearr_23483_23615[(1)] = (3));


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
});})(__23596,c__23256__auto___23609,G__23439_23597,G__23439_23598__$1,n__4518__auto___23595,jobs,results,process,async))
;
return ((function (__23596,switch__23161__auto__,c__23256__auto___23609,G__23439_23597,G__23439_23598__$1,n__4518__auto___23595,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____0 = (function (){
var statearr_23484 = [null,null,null,null,null,null,null];
(statearr_23484[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__);

(statearr_23484[(1)] = (1));

return statearr_23484;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____1 = (function (state_23476){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_23476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e23485){if((e23485 instanceof Object)){
var ex__23165__auto__ = e23485;
var statearr_23486_23616 = state_23476;
(statearr_23486_23616[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23617 = state_23476;
state_23476 = G__23617;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__ = function(state_23476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____1.call(this,state_23476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__;
})()
;})(__23596,switch__23161__auto__,c__23256__auto___23609,G__23439_23597,G__23439_23598__$1,n__4518__auto___23595,jobs,results,process,async))
})();
var state__23258__auto__ = (function (){var statearr_23487 = f__23257__auto__.call(null);
(statearr_23487[(6)] = c__23256__auto___23609);

return statearr_23487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(__23596,c__23256__auto___23609,G__23439_23597,G__23439_23598__$1,n__4518__auto___23595,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23439_23598__$1)].join('')));

}

var G__23618 = (__23596 + (1));
__23596 = G__23618;
continue;
} else {
}
break;
}

var c__23256__auto___23619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23256__auto___23619,jobs,results,process,async){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (c__23256__auto___23619,jobs,results,process,async){
return (function (state_23509){
var state_val_23510 = (state_23509[(1)]);
if((state_val_23510 === (1))){
var state_23509__$1 = state_23509;
var statearr_23511_23620 = state_23509__$1;
(statearr_23511_23620[(2)] = null);

(statearr_23511_23620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23510 === (2))){
var state_23509__$1 = state_23509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23509__$1,(4),from);
} else {
if((state_val_23510 === (3))){
var inst_23507 = (state_23509[(2)]);
var state_23509__$1 = state_23509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23509__$1,inst_23507);
} else {
if((state_val_23510 === (4))){
var inst_23490 = (state_23509[(7)]);
var inst_23490__$1 = (state_23509[(2)]);
var inst_23491 = (inst_23490__$1 == null);
var state_23509__$1 = (function (){var statearr_23512 = state_23509;
(statearr_23512[(7)] = inst_23490__$1);

return statearr_23512;
})();
if(cljs.core.truth_(inst_23491)){
var statearr_23513_23621 = state_23509__$1;
(statearr_23513_23621[(1)] = (5));

} else {
var statearr_23514_23622 = state_23509__$1;
(statearr_23514_23622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23510 === (5))){
var inst_23493 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23509__$1 = state_23509;
var statearr_23515_23623 = state_23509__$1;
(statearr_23515_23623[(2)] = inst_23493);

(statearr_23515_23623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23510 === (6))){
var inst_23490 = (state_23509[(7)]);
var inst_23495 = (state_23509[(8)]);
var inst_23495__$1 = cljs.core.async.chan.call(null,(1));
var inst_23496 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23497 = [inst_23490,inst_23495__$1];
var inst_23498 = (new cljs.core.PersistentVector(null,2,(5),inst_23496,inst_23497,null));
var state_23509__$1 = (function (){var statearr_23516 = state_23509;
(statearr_23516[(8)] = inst_23495__$1);

return statearr_23516;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23509__$1,(8),jobs,inst_23498);
} else {
if((state_val_23510 === (7))){
var inst_23505 = (state_23509[(2)]);
var state_23509__$1 = state_23509;
var statearr_23517_23624 = state_23509__$1;
(statearr_23517_23624[(2)] = inst_23505);

(statearr_23517_23624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23510 === (8))){
var inst_23495 = (state_23509[(8)]);
var inst_23500 = (state_23509[(2)]);
var state_23509__$1 = (function (){var statearr_23518 = state_23509;
(statearr_23518[(9)] = inst_23500);

return statearr_23518;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23509__$1,(9),results,inst_23495);
} else {
if((state_val_23510 === (9))){
var inst_23502 = (state_23509[(2)]);
var state_23509__$1 = (function (){var statearr_23519 = state_23509;
(statearr_23519[(10)] = inst_23502);

return statearr_23519;
})();
var statearr_23520_23625 = state_23509__$1;
(statearr_23520_23625[(2)] = null);

(statearr_23520_23625[(1)] = (2));


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
});})(c__23256__auto___23619,jobs,results,process,async))
;
return ((function (switch__23161__auto__,c__23256__auto___23619,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____0 = (function (){
var statearr_23521 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23521[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__);

(statearr_23521[(1)] = (1));

return statearr_23521;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____1 = (function (state_23509){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_23509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e23522){if((e23522 instanceof Object)){
var ex__23165__auto__ = e23522;
var statearr_23523_23626 = state_23509;
(statearr_23523_23626[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23627 = state_23509;
state_23509 = G__23627;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__ = function(state_23509){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____1.call(this,state_23509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__;
})()
;})(switch__23161__auto__,c__23256__auto___23619,jobs,results,process,async))
})();
var state__23258__auto__ = (function (){var statearr_23524 = f__23257__auto__.call(null);
(statearr_23524[(6)] = c__23256__auto___23619);

return statearr_23524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(c__23256__auto___23619,jobs,results,process,async))
);


var c__23256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23256__auto__,jobs,results,process,async){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (c__23256__auto__,jobs,results,process,async){
return (function (state_23562){
var state_val_23563 = (state_23562[(1)]);
if((state_val_23563 === (7))){
var inst_23558 = (state_23562[(2)]);
var state_23562__$1 = state_23562;
var statearr_23564_23628 = state_23562__$1;
(statearr_23564_23628[(2)] = inst_23558);

(statearr_23564_23628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (20))){
var state_23562__$1 = state_23562;
var statearr_23565_23629 = state_23562__$1;
(statearr_23565_23629[(2)] = null);

(statearr_23565_23629[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (1))){
var state_23562__$1 = state_23562;
var statearr_23566_23630 = state_23562__$1;
(statearr_23566_23630[(2)] = null);

(statearr_23566_23630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (4))){
var inst_23527 = (state_23562[(7)]);
var inst_23527__$1 = (state_23562[(2)]);
var inst_23528 = (inst_23527__$1 == null);
var state_23562__$1 = (function (){var statearr_23567 = state_23562;
(statearr_23567[(7)] = inst_23527__$1);

return statearr_23567;
})();
if(cljs.core.truth_(inst_23528)){
var statearr_23568_23631 = state_23562__$1;
(statearr_23568_23631[(1)] = (5));

} else {
var statearr_23569_23632 = state_23562__$1;
(statearr_23569_23632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (15))){
var inst_23540 = (state_23562[(8)]);
var state_23562__$1 = state_23562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23562__$1,(18),to,inst_23540);
} else {
if((state_val_23563 === (21))){
var inst_23553 = (state_23562[(2)]);
var state_23562__$1 = state_23562;
var statearr_23570_23633 = state_23562__$1;
(statearr_23570_23633[(2)] = inst_23553);

(statearr_23570_23633[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (13))){
var inst_23555 = (state_23562[(2)]);
var state_23562__$1 = (function (){var statearr_23571 = state_23562;
(statearr_23571[(9)] = inst_23555);

return statearr_23571;
})();
var statearr_23572_23634 = state_23562__$1;
(statearr_23572_23634[(2)] = null);

(statearr_23572_23634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (6))){
var inst_23527 = (state_23562[(7)]);
var state_23562__$1 = state_23562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23562__$1,(11),inst_23527);
} else {
if((state_val_23563 === (17))){
var inst_23548 = (state_23562[(2)]);
var state_23562__$1 = state_23562;
if(cljs.core.truth_(inst_23548)){
var statearr_23573_23635 = state_23562__$1;
(statearr_23573_23635[(1)] = (19));

} else {
var statearr_23574_23636 = state_23562__$1;
(statearr_23574_23636[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (3))){
var inst_23560 = (state_23562[(2)]);
var state_23562__$1 = state_23562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23562__$1,inst_23560);
} else {
if((state_val_23563 === (12))){
var inst_23537 = (state_23562[(10)]);
var state_23562__$1 = state_23562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23562__$1,(14),inst_23537);
} else {
if((state_val_23563 === (2))){
var state_23562__$1 = state_23562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23562__$1,(4),results);
} else {
if((state_val_23563 === (19))){
var state_23562__$1 = state_23562;
var statearr_23575_23637 = state_23562__$1;
(statearr_23575_23637[(2)] = null);

(statearr_23575_23637[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (11))){
var inst_23537 = (state_23562[(2)]);
var state_23562__$1 = (function (){var statearr_23576 = state_23562;
(statearr_23576[(10)] = inst_23537);

return statearr_23576;
})();
var statearr_23577_23638 = state_23562__$1;
(statearr_23577_23638[(2)] = null);

(statearr_23577_23638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (9))){
var state_23562__$1 = state_23562;
var statearr_23578_23639 = state_23562__$1;
(statearr_23578_23639[(2)] = null);

(statearr_23578_23639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (5))){
var state_23562__$1 = state_23562;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23579_23640 = state_23562__$1;
(statearr_23579_23640[(1)] = (8));

} else {
var statearr_23580_23641 = state_23562__$1;
(statearr_23580_23641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (14))){
var inst_23540 = (state_23562[(8)]);
var inst_23542 = (state_23562[(11)]);
var inst_23540__$1 = (state_23562[(2)]);
var inst_23541 = (inst_23540__$1 == null);
var inst_23542__$1 = cljs.core.not.call(null,inst_23541);
var state_23562__$1 = (function (){var statearr_23581 = state_23562;
(statearr_23581[(8)] = inst_23540__$1);

(statearr_23581[(11)] = inst_23542__$1);

return statearr_23581;
})();
if(inst_23542__$1){
var statearr_23582_23642 = state_23562__$1;
(statearr_23582_23642[(1)] = (15));

} else {
var statearr_23583_23643 = state_23562__$1;
(statearr_23583_23643[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (16))){
var inst_23542 = (state_23562[(11)]);
var state_23562__$1 = state_23562;
var statearr_23584_23644 = state_23562__$1;
(statearr_23584_23644[(2)] = inst_23542);

(statearr_23584_23644[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (10))){
var inst_23534 = (state_23562[(2)]);
var state_23562__$1 = state_23562;
var statearr_23585_23645 = state_23562__$1;
(statearr_23585_23645[(2)] = inst_23534);

(statearr_23585_23645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (18))){
var inst_23545 = (state_23562[(2)]);
var state_23562__$1 = state_23562;
var statearr_23586_23646 = state_23562__$1;
(statearr_23586_23646[(2)] = inst_23545);

(statearr_23586_23646[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23563 === (8))){
var inst_23531 = cljs.core.async.close_BANG_.call(null,to);
var state_23562__$1 = state_23562;
var statearr_23587_23647 = state_23562__$1;
(statearr_23587_23647[(2)] = inst_23531);

(statearr_23587_23647[(1)] = (10));


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
});})(c__23256__auto__,jobs,results,process,async))
;
return ((function (switch__23161__auto__,c__23256__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____0 = (function (){
var statearr_23588 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__);

(statearr_23588[(1)] = (1));

return statearr_23588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____1 = (function (state_23562){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_23562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e23589){if((e23589 instanceof Object)){
var ex__23165__auto__ = e23589;
var statearr_23590_23648 = state_23562;
(statearr_23590_23648[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23649 = state_23562;
state_23562 = G__23649;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__ = function(state_23562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____1.call(this,state_23562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23162__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23162__auto__;
})()
;})(switch__23161__auto__,c__23256__auto__,jobs,results,process,async))
})();
var state__23258__auto__ = (function (){var statearr_23591 = f__23257__auto__.call(null);
(statearr_23591[(6)] = c__23256__auto__);

return statearr_23591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(c__23256__auto__,jobs,results,process,async))
);

return c__23256__auto__;
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
var G__23651 = arguments.length;
switch (G__23651) {
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
var G__23654 = arguments.length;
switch (G__23654) {
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
var G__23657 = arguments.length;
switch (G__23657) {
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
var c__23256__auto___23706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23256__auto___23706,tc,fc){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (c__23256__auto___23706,tc,fc){
return (function (state_23683){
var state_val_23684 = (state_23683[(1)]);
if((state_val_23684 === (7))){
var inst_23679 = (state_23683[(2)]);
var state_23683__$1 = state_23683;
var statearr_23685_23707 = state_23683__$1;
(statearr_23685_23707[(2)] = inst_23679);

(statearr_23685_23707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (1))){
var state_23683__$1 = state_23683;
var statearr_23686_23708 = state_23683__$1;
(statearr_23686_23708[(2)] = null);

(statearr_23686_23708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (4))){
var inst_23660 = (state_23683[(7)]);
var inst_23660__$1 = (state_23683[(2)]);
var inst_23661 = (inst_23660__$1 == null);
var state_23683__$1 = (function (){var statearr_23687 = state_23683;
(statearr_23687[(7)] = inst_23660__$1);

return statearr_23687;
})();
if(cljs.core.truth_(inst_23661)){
var statearr_23688_23709 = state_23683__$1;
(statearr_23688_23709[(1)] = (5));

} else {
var statearr_23689_23710 = state_23683__$1;
(statearr_23689_23710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (13))){
var state_23683__$1 = state_23683;
var statearr_23690_23711 = state_23683__$1;
(statearr_23690_23711[(2)] = null);

(statearr_23690_23711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (6))){
var inst_23660 = (state_23683[(7)]);
var inst_23666 = p.call(null,inst_23660);
var state_23683__$1 = state_23683;
if(cljs.core.truth_(inst_23666)){
var statearr_23691_23712 = state_23683__$1;
(statearr_23691_23712[(1)] = (9));

} else {
var statearr_23692_23713 = state_23683__$1;
(statearr_23692_23713[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (3))){
var inst_23681 = (state_23683[(2)]);
var state_23683__$1 = state_23683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23683__$1,inst_23681);
} else {
if((state_val_23684 === (12))){
var state_23683__$1 = state_23683;
var statearr_23693_23714 = state_23683__$1;
(statearr_23693_23714[(2)] = null);

(statearr_23693_23714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (2))){
var state_23683__$1 = state_23683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23683__$1,(4),ch);
} else {
if((state_val_23684 === (11))){
var inst_23660 = (state_23683[(7)]);
var inst_23670 = (state_23683[(2)]);
var state_23683__$1 = state_23683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23683__$1,(8),inst_23670,inst_23660);
} else {
if((state_val_23684 === (9))){
var state_23683__$1 = state_23683;
var statearr_23694_23715 = state_23683__$1;
(statearr_23694_23715[(2)] = tc);

(statearr_23694_23715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (5))){
var inst_23663 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23664 = cljs.core.async.close_BANG_.call(null,fc);
var state_23683__$1 = (function (){var statearr_23695 = state_23683;
(statearr_23695[(8)] = inst_23663);

return statearr_23695;
})();
var statearr_23696_23716 = state_23683__$1;
(statearr_23696_23716[(2)] = inst_23664);

(statearr_23696_23716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (14))){
var inst_23677 = (state_23683[(2)]);
var state_23683__$1 = state_23683;
var statearr_23697_23717 = state_23683__$1;
(statearr_23697_23717[(2)] = inst_23677);

(statearr_23697_23717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (10))){
var state_23683__$1 = state_23683;
var statearr_23698_23718 = state_23683__$1;
(statearr_23698_23718[(2)] = fc);

(statearr_23698_23718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23684 === (8))){
var inst_23672 = (state_23683[(2)]);
var state_23683__$1 = state_23683;
if(cljs.core.truth_(inst_23672)){
var statearr_23699_23719 = state_23683__$1;
(statearr_23699_23719[(1)] = (12));

} else {
var statearr_23700_23720 = state_23683__$1;
(statearr_23700_23720[(1)] = (13));

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
});})(c__23256__auto___23706,tc,fc))
;
return ((function (switch__23161__auto__,c__23256__auto___23706,tc,fc){
return (function() {
var cljs$core$async$state_machine__23162__auto__ = null;
var cljs$core$async$state_machine__23162__auto____0 = (function (){
var statearr_23701 = [null,null,null,null,null,null,null,null,null];
(statearr_23701[(0)] = cljs$core$async$state_machine__23162__auto__);

(statearr_23701[(1)] = (1));

return statearr_23701;
});
var cljs$core$async$state_machine__23162__auto____1 = (function (state_23683){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_23683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e23702){if((e23702 instanceof Object)){
var ex__23165__auto__ = e23702;
var statearr_23703_23721 = state_23683;
(statearr_23703_23721[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23722 = state_23683;
state_23683 = G__23722;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$state_machine__23162__auto__ = function(state_23683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23162__auto____1.call(this,state_23683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23162__auto____0;
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23162__auto____1;
return cljs$core$async$state_machine__23162__auto__;
})()
;})(switch__23161__auto__,c__23256__auto___23706,tc,fc))
})();
var state__23258__auto__ = (function (){var statearr_23704 = f__23257__auto__.call(null);
(statearr_23704[(6)] = c__23256__auto___23706);

return statearr_23704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(c__23256__auto___23706,tc,fc))
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
var c__23256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23256__auto__){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (c__23256__auto__){
return (function (state_23743){
var state_val_23744 = (state_23743[(1)]);
if((state_val_23744 === (7))){
var inst_23739 = (state_23743[(2)]);
var state_23743__$1 = state_23743;
var statearr_23745_23763 = state_23743__$1;
(statearr_23745_23763[(2)] = inst_23739);

(statearr_23745_23763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (1))){
var inst_23723 = init;
var state_23743__$1 = (function (){var statearr_23746 = state_23743;
(statearr_23746[(7)] = inst_23723);

return statearr_23746;
})();
var statearr_23747_23764 = state_23743__$1;
(statearr_23747_23764[(2)] = null);

(statearr_23747_23764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (4))){
var inst_23726 = (state_23743[(8)]);
var inst_23726__$1 = (state_23743[(2)]);
var inst_23727 = (inst_23726__$1 == null);
var state_23743__$1 = (function (){var statearr_23748 = state_23743;
(statearr_23748[(8)] = inst_23726__$1);

return statearr_23748;
})();
if(cljs.core.truth_(inst_23727)){
var statearr_23749_23765 = state_23743__$1;
(statearr_23749_23765[(1)] = (5));

} else {
var statearr_23750_23766 = state_23743__$1;
(statearr_23750_23766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (6))){
var inst_23726 = (state_23743[(8)]);
var inst_23723 = (state_23743[(7)]);
var inst_23730 = (state_23743[(9)]);
var inst_23730__$1 = f.call(null,inst_23723,inst_23726);
var inst_23731 = cljs.core.reduced_QMARK_.call(null,inst_23730__$1);
var state_23743__$1 = (function (){var statearr_23751 = state_23743;
(statearr_23751[(9)] = inst_23730__$1);

return statearr_23751;
})();
if(inst_23731){
var statearr_23752_23767 = state_23743__$1;
(statearr_23752_23767[(1)] = (8));

} else {
var statearr_23753_23768 = state_23743__$1;
(statearr_23753_23768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (3))){
var inst_23741 = (state_23743[(2)]);
var state_23743__$1 = state_23743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23743__$1,inst_23741);
} else {
if((state_val_23744 === (2))){
var state_23743__$1 = state_23743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23743__$1,(4),ch);
} else {
if((state_val_23744 === (9))){
var inst_23730 = (state_23743[(9)]);
var inst_23723 = inst_23730;
var state_23743__$1 = (function (){var statearr_23754 = state_23743;
(statearr_23754[(7)] = inst_23723);

return statearr_23754;
})();
var statearr_23755_23769 = state_23743__$1;
(statearr_23755_23769[(2)] = null);

(statearr_23755_23769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (5))){
var inst_23723 = (state_23743[(7)]);
var state_23743__$1 = state_23743;
var statearr_23756_23770 = state_23743__$1;
(statearr_23756_23770[(2)] = inst_23723);

(statearr_23756_23770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (10))){
var inst_23737 = (state_23743[(2)]);
var state_23743__$1 = state_23743;
var statearr_23757_23771 = state_23743__$1;
(statearr_23757_23771[(2)] = inst_23737);

(statearr_23757_23771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23744 === (8))){
var inst_23730 = (state_23743[(9)]);
var inst_23733 = cljs.core.deref.call(null,inst_23730);
var state_23743__$1 = state_23743;
var statearr_23758_23772 = state_23743__$1;
(statearr_23758_23772[(2)] = inst_23733);

(statearr_23758_23772[(1)] = (10));


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
});})(c__23256__auto__))
;
return ((function (switch__23161__auto__,c__23256__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23162__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23162__auto____0 = (function (){
var statearr_23759 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23759[(0)] = cljs$core$async$reduce_$_state_machine__23162__auto__);

(statearr_23759[(1)] = (1));

return statearr_23759;
});
var cljs$core$async$reduce_$_state_machine__23162__auto____1 = (function (state_23743){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_23743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e23760){if((e23760 instanceof Object)){
var ex__23165__auto__ = e23760;
var statearr_23761_23773 = state_23743;
(statearr_23761_23773[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23774 = state_23743;
state_23743 = G__23774;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23162__auto__ = function(state_23743){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23162__auto____1.call(this,state_23743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23162__auto____0;
cljs$core$async$reduce_$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23162__auto____1;
return cljs$core$async$reduce_$_state_machine__23162__auto__;
})()
;})(switch__23161__auto__,c__23256__auto__))
})();
var state__23258__auto__ = (function (){var statearr_23762 = f__23257__auto__.call(null);
(statearr_23762[(6)] = c__23256__auto__);

return statearr_23762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(c__23256__auto__))
);

return c__23256__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23256__auto__,f__$1){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (c__23256__auto__,f__$1){
return (function (state_23780){
var state_val_23781 = (state_23780[(1)]);
if((state_val_23781 === (1))){
var inst_23775 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23780__$1 = state_23780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23780__$1,(2),inst_23775);
} else {
if((state_val_23781 === (2))){
var inst_23777 = (state_23780[(2)]);
var inst_23778 = f__$1.call(null,inst_23777);
var state_23780__$1 = state_23780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23780__$1,inst_23778);
} else {
return null;
}
}
});})(c__23256__auto__,f__$1))
;
return ((function (switch__23161__auto__,c__23256__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23162__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23162__auto____0 = (function (){
var statearr_23782 = [null,null,null,null,null,null,null];
(statearr_23782[(0)] = cljs$core$async$transduce_$_state_machine__23162__auto__);

(statearr_23782[(1)] = (1));

return statearr_23782;
});
var cljs$core$async$transduce_$_state_machine__23162__auto____1 = (function (state_23780){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_23780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e23783){if((e23783 instanceof Object)){
var ex__23165__auto__ = e23783;
var statearr_23784_23786 = state_23780;
(statearr_23784_23786[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23787 = state_23780;
state_23780 = G__23787;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23162__auto__ = function(state_23780){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23162__auto____1.call(this,state_23780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23162__auto____0;
cljs$core$async$transduce_$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23162__auto____1;
return cljs$core$async$transduce_$_state_machine__23162__auto__;
})()
;})(switch__23161__auto__,c__23256__auto__,f__$1))
})();
var state__23258__auto__ = (function (){var statearr_23785 = f__23257__auto__.call(null);
(statearr_23785[(6)] = c__23256__auto__);

return statearr_23785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(c__23256__auto__,f__$1))
);

return c__23256__auto__;
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
var G__23789 = arguments.length;
switch (G__23789) {
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
var c__23256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23256__auto__){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (c__23256__auto__){
return (function (state_23814){
var state_val_23815 = (state_23814[(1)]);
if((state_val_23815 === (7))){
var inst_23796 = (state_23814[(2)]);
var state_23814__$1 = state_23814;
var statearr_23816_23837 = state_23814__$1;
(statearr_23816_23837[(2)] = inst_23796);

(statearr_23816_23837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (1))){
var inst_23790 = cljs.core.seq.call(null,coll);
var inst_23791 = inst_23790;
var state_23814__$1 = (function (){var statearr_23817 = state_23814;
(statearr_23817[(7)] = inst_23791);

return statearr_23817;
})();
var statearr_23818_23838 = state_23814__$1;
(statearr_23818_23838[(2)] = null);

(statearr_23818_23838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (4))){
var inst_23791 = (state_23814[(7)]);
var inst_23794 = cljs.core.first.call(null,inst_23791);
var state_23814__$1 = state_23814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23814__$1,(7),ch,inst_23794);
} else {
if((state_val_23815 === (13))){
var inst_23808 = (state_23814[(2)]);
var state_23814__$1 = state_23814;
var statearr_23819_23839 = state_23814__$1;
(statearr_23819_23839[(2)] = inst_23808);

(statearr_23819_23839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (6))){
var inst_23799 = (state_23814[(2)]);
var state_23814__$1 = state_23814;
if(cljs.core.truth_(inst_23799)){
var statearr_23820_23840 = state_23814__$1;
(statearr_23820_23840[(1)] = (8));

} else {
var statearr_23821_23841 = state_23814__$1;
(statearr_23821_23841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (3))){
var inst_23812 = (state_23814[(2)]);
var state_23814__$1 = state_23814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23814__$1,inst_23812);
} else {
if((state_val_23815 === (12))){
var state_23814__$1 = state_23814;
var statearr_23822_23842 = state_23814__$1;
(statearr_23822_23842[(2)] = null);

(statearr_23822_23842[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (2))){
var inst_23791 = (state_23814[(7)]);
var state_23814__$1 = state_23814;
if(cljs.core.truth_(inst_23791)){
var statearr_23823_23843 = state_23814__$1;
(statearr_23823_23843[(1)] = (4));

} else {
var statearr_23824_23844 = state_23814__$1;
(statearr_23824_23844[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (11))){
var inst_23805 = cljs.core.async.close_BANG_.call(null,ch);
var state_23814__$1 = state_23814;
var statearr_23825_23845 = state_23814__$1;
(statearr_23825_23845[(2)] = inst_23805);

(statearr_23825_23845[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (9))){
var state_23814__$1 = state_23814;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23826_23846 = state_23814__$1;
(statearr_23826_23846[(1)] = (11));

} else {
var statearr_23827_23847 = state_23814__$1;
(statearr_23827_23847[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (5))){
var inst_23791 = (state_23814[(7)]);
var state_23814__$1 = state_23814;
var statearr_23828_23848 = state_23814__$1;
(statearr_23828_23848[(2)] = inst_23791);

(statearr_23828_23848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (10))){
var inst_23810 = (state_23814[(2)]);
var state_23814__$1 = state_23814;
var statearr_23829_23849 = state_23814__$1;
(statearr_23829_23849[(2)] = inst_23810);

(statearr_23829_23849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (8))){
var inst_23791 = (state_23814[(7)]);
var inst_23801 = cljs.core.next.call(null,inst_23791);
var inst_23791__$1 = inst_23801;
var state_23814__$1 = (function (){var statearr_23830 = state_23814;
(statearr_23830[(7)] = inst_23791__$1);

return statearr_23830;
})();
var statearr_23831_23850 = state_23814__$1;
(statearr_23831_23850[(2)] = null);

(statearr_23831_23850[(1)] = (2));


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
});})(c__23256__auto__))
;
return ((function (switch__23161__auto__,c__23256__auto__){
return (function() {
var cljs$core$async$state_machine__23162__auto__ = null;
var cljs$core$async$state_machine__23162__auto____0 = (function (){
var statearr_23832 = [null,null,null,null,null,null,null,null];
(statearr_23832[(0)] = cljs$core$async$state_machine__23162__auto__);

(statearr_23832[(1)] = (1));

return statearr_23832;
});
var cljs$core$async$state_machine__23162__auto____1 = (function (state_23814){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_23814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e23833){if((e23833 instanceof Object)){
var ex__23165__auto__ = e23833;
var statearr_23834_23851 = state_23814;
(statearr_23834_23851[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23852 = state_23814;
state_23814 = G__23852;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$state_machine__23162__auto__ = function(state_23814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23162__auto____1.call(this,state_23814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23162__auto____0;
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23162__auto____1;
return cljs$core$async$state_machine__23162__auto__;
})()
;})(switch__23161__auto__,c__23256__auto__))
})();
var state__23258__auto__ = (function (){var statearr_23835 = f__23257__auto__.call(null);
(statearr_23835[(6)] = c__23256__auto__);

return statearr_23835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(c__23256__auto__))
);

return c__23256__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23853 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23853 = (function (ch,cs,meta23854){
this.ch = ch;
this.cs = cs;
this.meta23854 = meta23854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23855,meta23854__$1){
var self__ = this;
var _23855__$1 = this;
return (new cljs.core.async.t_cljs$core$async23853(self__.ch,self__.cs,meta23854__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23853.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23855){
var self__ = this;
var _23855__$1 = this;
return self__.meta23854;
});})(cs))
;

cljs.core.async.t_cljs$core$async23853.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23853.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23853.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23853.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23853.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23853.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23853.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23854","meta23854",-2123624580,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23853.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23853";

cljs.core.async.t_cljs$core$async23853.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async23853");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23853.
 */
cljs.core.async.__GT_t_cljs$core$async23853 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23853(ch__$1,cs__$1,meta23854){
return (new cljs.core.async.t_cljs$core$async23853(ch__$1,cs__$1,meta23854));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23853(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23256__auto___24075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23256__auto___24075,cs,m,dchan,dctr,done){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (c__23256__auto___24075,cs,m,dchan,dctr,done){
return (function (state_23990){
var state_val_23991 = (state_23990[(1)]);
if((state_val_23991 === (7))){
var inst_23986 = (state_23990[(2)]);
var state_23990__$1 = state_23990;
var statearr_23992_24076 = state_23990__$1;
(statearr_23992_24076[(2)] = inst_23986);

(statearr_23992_24076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (20))){
var inst_23889 = (state_23990[(7)]);
var inst_23901 = cljs.core.first.call(null,inst_23889);
var inst_23902 = cljs.core.nth.call(null,inst_23901,(0),null);
var inst_23903 = cljs.core.nth.call(null,inst_23901,(1),null);
var state_23990__$1 = (function (){var statearr_23993 = state_23990;
(statearr_23993[(8)] = inst_23902);

return statearr_23993;
})();
if(cljs.core.truth_(inst_23903)){
var statearr_23994_24077 = state_23990__$1;
(statearr_23994_24077[(1)] = (22));

} else {
var statearr_23995_24078 = state_23990__$1;
(statearr_23995_24078[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (27))){
var inst_23858 = (state_23990[(9)]);
var inst_23933 = (state_23990[(10)]);
var inst_23938 = (state_23990[(11)]);
var inst_23931 = (state_23990[(12)]);
var inst_23938__$1 = cljs.core._nth.call(null,inst_23931,inst_23933);
var inst_23939 = cljs.core.async.put_BANG_.call(null,inst_23938__$1,inst_23858,done);
var state_23990__$1 = (function (){var statearr_23996 = state_23990;
(statearr_23996[(11)] = inst_23938__$1);

return statearr_23996;
})();
if(cljs.core.truth_(inst_23939)){
var statearr_23997_24079 = state_23990__$1;
(statearr_23997_24079[(1)] = (30));

} else {
var statearr_23998_24080 = state_23990__$1;
(statearr_23998_24080[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (1))){
var state_23990__$1 = state_23990;
var statearr_23999_24081 = state_23990__$1;
(statearr_23999_24081[(2)] = null);

(statearr_23999_24081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (24))){
var inst_23889 = (state_23990[(7)]);
var inst_23908 = (state_23990[(2)]);
var inst_23909 = cljs.core.next.call(null,inst_23889);
var inst_23867 = inst_23909;
var inst_23868 = null;
var inst_23869 = (0);
var inst_23870 = (0);
var state_23990__$1 = (function (){var statearr_24000 = state_23990;
(statearr_24000[(13)] = inst_23868);

(statearr_24000[(14)] = inst_23867);

(statearr_24000[(15)] = inst_23869);

(statearr_24000[(16)] = inst_23908);

(statearr_24000[(17)] = inst_23870);

return statearr_24000;
})();
var statearr_24001_24082 = state_23990__$1;
(statearr_24001_24082[(2)] = null);

(statearr_24001_24082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (39))){
var state_23990__$1 = state_23990;
var statearr_24005_24083 = state_23990__$1;
(statearr_24005_24083[(2)] = null);

(statearr_24005_24083[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (4))){
var inst_23858 = (state_23990[(9)]);
var inst_23858__$1 = (state_23990[(2)]);
var inst_23859 = (inst_23858__$1 == null);
var state_23990__$1 = (function (){var statearr_24006 = state_23990;
(statearr_24006[(9)] = inst_23858__$1);

return statearr_24006;
})();
if(cljs.core.truth_(inst_23859)){
var statearr_24007_24084 = state_23990__$1;
(statearr_24007_24084[(1)] = (5));

} else {
var statearr_24008_24085 = state_23990__$1;
(statearr_24008_24085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (15))){
var inst_23868 = (state_23990[(13)]);
var inst_23867 = (state_23990[(14)]);
var inst_23869 = (state_23990[(15)]);
var inst_23870 = (state_23990[(17)]);
var inst_23885 = (state_23990[(2)]);
var inst_23886 = (inst_23870 + (1));
var tmp24002 = inst_23868;
var tmp24003 = inst_23867;
var tmp24004 = inst_23869;
var inst_23867__$1 = tmp24003;
var inst_23868__$1 = tmp24002;
var inst_23869__$1 = tmp24004;
var inst_23870__$1 = inst_23886;
var state_23990__$1 = (function (){var statearr_24009 = state_23990;
(statearr_24009[(18)] = inst_23885);

(statearr_24009[(13)] = inst_23868__$1);

(statearr_24009[(14)] = inst_23867__$1);

(statearr_24009[(15)] = inst_23869__$1);

(statearr_24009[(17)] = inst_23870__$1);

return statearr_24009;
})();
var statearr_24010_24086 = state_23990__$1;
(statearr_24010_24086[(2)] = null);

(statearr_24010_24086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (21))){
var inst_23912 = (state_23990[(2)]);
var state_23990__$1 = state_23990;
var statearr_24014_24087 = state_23990__$1;
(statearr_24014_24087[(2)] = inst_23912);

(statearr_24014_24087[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (31))){
var inst_23938 = (state_23990[(11)]);
var inst_23942 = done.call(null,null);
var inst_23943 = cljs.core.async.untap_STAR_.call(null,m,inst_23938);
var state_23990__$1 = (function (){var statearr_24015 = state_23990;
(statearr_24015[(19)] = inst_23942);

return statearr_24015;
})();
var statearr_24016_24088 = state_23990__$1;
(statearr_24016_24088[(2)] = inst_23943);

(statearr_24016_24088[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (32))){
var inst_23933 = (state_23990[(10)]);
var inst_23930 = (state_23990[(20)]);
var inst_23931 = (state_23990[(12)]);
var inst_23932 = (state_23990[(21)]);
var inst_23945 = (state_23990[(2)]);
var inst_23946 = (inst_23933 + (1));
var tmp24011 = inst_23930;
var tmp24012 = inst_23931;
var tmp24013 = inst_23932;
var inst_23930__$1 = tmp24011;
var inst_23931__$1 = tmp24012;
var inst_23932__$1 = tmp24013;
var inst_23933__$1 = inst_23946;
var state_23990__$1 = (function (){var statearr_24017 = state_23990;
(statearr_24017[(10)] = inst_23933__$1);

(statearr_24017[(20)] = inst_23930__$1);

(statearr_24017[(22)] = inst_23945);

(statearr_24017[(12)] = inst_23931__$1);

(statearr_24017[(21)] = inst_23932__$1);

return statearr_24017;
})();
var statearr_24018_24089 = state_23990__$1;
(statearr_24018_24089[(2)] = null);

(statearr_24018_24089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (40))){
var inst_23958 = (state_23990[(23)]);
var inst_23962 = done.call(null,null);
var inst_23963 = cljs.core.async.untap_STAR_.call(null,m,inst_23958);
var state_23990__$1 = (function (){var statearr_24019 = state_23990;
(statearr_24019[(24)] = inst_23962);

return statearr_24019;
})();
var statearr_24020_24090 = state_23990__$1;
(statearr_24020_24090[(2)] = inst_23963);

(statearr_24020_24090[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (33))){
var inst_23949 = (state_23990[(25)]);
var inst_23951 = cljs.core.chunked_seq_QMARK_.call(null,inst_23949);
var state_23990__$1 = state_23990;
if(inst_23951){
var statearr_24021_24091 = state_23990__$1;
(statearr_24021_24091[(1)] = (36));

} else {
var statearr_24022_24092 = state_23990__$1;
(statearr_24022_24092[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (13))){
var inst_23879 = (state_23990[(26)]);
var inst_23882 = cljs.core.async.close_BANG_.call(null,inst_23879);
var state_23990__$1 = state_23990;
var statearr_24023_24093 = state_23990__$1;
(statearr_24023_24093[(2)] = inst_23882);

(statearr_24023_24093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (22))){
var inst_23902 = (state_23990[(8)]);
var inst_23905 = cljs.core.async.close_BANG_.call(null,inst_23902);
var state_23990__$1 = state_23990;
var statearr_24024_24094 = state_23990__$1;
(statearr_24024_24094[(2)] = inst_23905);

(statearr_24024_24094[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (36))){
var inst_23949 = (state_23990[(25)]);
var inst_23953 = cljs.core.chunk_first.call(null,inst_23949);
var inst_23954 = cljs.core.chunk_rest.call(null,inst_23949);
var inst_23955 = cljs.core.count.call(null,inst_23953);
var inst_23930 = inst_23954;
var inst_23931 = inst_23953;
var inst_23932 = inst_23955;
var inst_23933 = (0);
var state_23990__$1 = (function (){var statearr_24025 = state_23990;
(statearr_24025[(10)] = inst_23933);

(statearr_24025[(20)] = inst_23930);

(statearr_24025[(12)] = inst_23931);

(statearr_24025[(21)] = inst_23932);

return statearr_24025;
})();
var statearr_24026_24095 = state_23990__$1;
(statearr_24026_24095[(2)] = null);

(statearr_24026_24095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (41))){
var inst_23949 = (state_23990[(25)]);
var inst_23965 = (state_23990[(2)]);
var inst_23966 = cljs.core.next.call(null,inst_23949);
var inst_23930 = inst_23966;
var inst_23931 = null;
var inst_23932 = (0);
var inst_23933 = (0);
var state_23990__$1 = (function (){var statearr_24027 = state_23990;
(statearr_24027[(27)] = inst_23965);

(statearr_24027[(10)] = inst_23933);

(statearr_24027[(20)] = inst_23930);

(statearr_24027[(12)] = inst_23931);

(statearr_24027[(21)] = inst_23932);

return statearr_24027;
})();
var statearr_24028_24096 = state_23990__$1;
(statearr_24028_24096[(2)] = null);

(statearr_24028_24096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (43))){
var state_23990__$1 = state_23990;
var statearr_24029_24097 = state_23990__$1;
(statearr_24029_24097[(2)] = null);

(statearr_24029_24097[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (29))){
var inst_23974 = (state_23990[(2)]);
var state_23990__$1 = state_23990;
var statearr_24030_24098 = state_23990__$1;
(statearr_24030_24098[(2)] = inst_23974);

(statearr_24030_24098[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (44))){
var inst_23983 = (state_23990[(2)]);
var state_23990__$1 = (function (){var statearr_24031 = state_23990;
(statearr_24031[(28)] = inst_23983);

return statearr_24031;
})();
var statearr_24032_24099 = state_23990__$1;
(statearr_24032_24099[(2)] = null);

(statearr_24032_24099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (6))){
var inst_23922 = (state_23990[(29)]);
var inst_23921 = cljs.core.deref.call(null,cs);
var inst_23922__$1 = cljs.core.keys.call(null,inst_23921);
var inst_23923 = cljs.core.count.call(null,inst_23922__$1);
var inst_23924 = cljs.core.reset_BANG_.call(null,dctr,inst_23923);
var inst_23929 = cljs.core.seq.call(null,inst_23922__$1);
var inst_23930 = inst_23929;
var inst_23931 = null;
var inst_23932 = (0);
var inst_23933 = (0);
var state_23990__$1 = (function (){var statearr_24033 = state_23990;
(statearr_24033[(10)] = inst_23933);

(statearr_24033[(30)] = inst_23924);

(statearr_24033[(20)] = inst_23930);

(statearr_24033[(12)] = inst_23931);

(statearr_24033[(21)] = inst_23932);

(statearr_24033[(29)] = inst_23922__$1);

return statearr_24033;
})();
var statearr_24034_24100 = state_23990__$1;
(statearr_24034_24100[(2)] = null);

(statearr_24034_24100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (28))){
var inst_23949 = (state_23990[(25)]);
var inst_23930 = (state_23990[(20)]);
var inst_23949__$1 = cljs.core.seq.call(null,inst_23930);
var state_23990__$1 = (function (){var statearr_24035 = state_23990;
(statearr_24035[(25)] = inst_23949__$1);

return statearr_24035;
})();
if(inst_23949__$1){
var statearr_24036_24101 = state_23990__$1;
(statearr_24036_24101[(1)] = (33));

} else {
var statearr_24037_24102 = state_23990__$1;
(statearr_24037_24102[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (25))){
var inst_23933 = (state_23990[(10)]);
var inst_23932 = (state_23990[(21)]);
var inst_23935 = (inst_23933 < inst_23932);
var inst_23936 = inst_23935;
var state_23990__$1 = state_23990;
if(cljs.core.truth_(inst_23936)){
var statearr_24038_24103 = state_23990__$1;
(statearr_24038_24103[(1)] = (27));

} else {
var statearr_24039_24104 = state_23990__$1;
(statearr_24039_24104[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (34))){
var state_23990__$1 = state_23990;
var statearr_24040_24105 = state_23990__$1;
(statearr_24040_24105[(2)] = null);

(statearr_24040_24105[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (17))){
var state_23990__$1 = state_23990;
var statearr_24041_24106 = state_23990__$1;
(statearr_24041_24106[(2)] = null);

(statearr_24041_24106[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (3))){
var inst_23988 = (state_23990[(2)]);
var state_23990__$1 = state_23990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23990__$1,inst_23988);
} else {
if((state_val_23991 === (12))){
var inst_23917 = (state_23990[(2)]);
var state_23990__$1 = state_23990;
var statearr_24042_24107 = state_23990__$1;
(statearr_24042_24107[(2)] = inst_23917);

(statearr_24042_24107[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (2))){
var state_23990__$1 = state_23990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23990__$1,(4),ch);
} else {
if((state_val_23991 === (23))){
var state_23990__$1 = state_23990;
var statearr_24043_24108 = state_23990__$1;
(statearr_24043_24108[(2)] = null);

(statearr_24043_24108[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (35))){
var inst_23972 = (state_23990[(2)]);
var state_23990__$1 = state_23990;
var statearr_24044_24109 = state_23990__$1;
(statearr_24044_24109[(2)] = inst_23972);

(statearr_24044_24109[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (19))){
var inst_23889 = (state_23990[(7)]);
var inst_23893 = cljs.core.chunk_first.call(null,inst_23889);
var inst_23894 = cljs.core.chunk_rest.call(null,inst_23889);
var inst_23895 = cljs.core.count.call(null,inst_23893);
var inst_23867 = inst_23894;
var inst_23868 = inst_23893;
var inst_23869 = inst_23895;
var inst_23870 = (0);
var state_23990__$1 = (function (){var statearr_24045 = state_23990;
(statearr_24045[(13)] = inst_23868);

(statearr_24045[(14)] = inst_23867);

(statearr_24045[(15)] = inst_23869);

(statearr_24045[(17)] = inst_23870);

return statearr_24045;
})();
var statearr_24046_24110 = state_23990__$1;
(statearr_24046_24110[(2)] = null);

(statearr_24046_24110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (11))){
var inst_23889 = (state_23990[(7)]);
var inst_23867 = (state_23990[(14)]);
var inst_23889__$1 = cljs.core.seq.call(null,inst_23867);
var state_23990__$1 = (function (){var statearr_24047 = state_23990;
(statearr_24047[(7)] = inst_23889__$1);

return statearr_24047;
})();
if(inst_23889__$1){
var statearr_24048_24111 = state_23990__$1;
(statearr_24048_24111[(1)] = (16));

} else {
var statearr_24049_24112 = state_23990__$1;
(statearr_24049_24112[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (9))){
var inst_23919 = (state_23990[(2)]);
var state_23990__$1 = state_23990;
var statearr_24050_24113 = state_23990__$1;
(statearr_24050_24113[(2)] = inst_23919);

(statearr_24050_24113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (5))){
var inst_23865 = cljs.core.deref.call(null,cs);
var inst_23866 = cljs.core.seq.call(null,inst_23865);
var inst_23867 = inst_23866;
var inst_23868 = null;
var inst_23869 = (0);
var inst_23870 = (0);
var state_23990__$1 = (function (){var statearr_24051 = state_23990;
(statearr_24051[(13)] = inst_23868);

(statearr_24051[(14)] = inst_23867);

(statearr_24051[(15)] = inst_23869);

(statearr_24051[(17)] = inst_23870);

return statearr_24051;
})();
var statearr_24052_24114 = state_23990__$1;
(statearr_24052_24114[(2)] = null);

(statearr_24052_24114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (14))){
var state_23990__$1 = state_23990;
var statearr_24053_24115 = state_23990__$1;
(statearr_24053_24115[(2)] = null);

(statearr_24053_24115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (45))){
var inst_23980 = (state_23990[(2)]);
var state_23990__$1 = state_23990;
var statearr_24054_24116 = state_23990__$1;
(statearr_24054_24116[(2)] = inst_23980);

(statearr_24054_24116[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (26))){
var inst_23922 = (state_23990[(29)]);
var inst_23976 = (state_23990[(2)]);
var inst_23977 = cljs.core.seq.call(null,inst_23922);
var state_23990__$1 = (function (){var statearr_24055 = state_23990;
(statearr_24055[(31)] = inst_23976);

return statearr_24055;
})();
if(inst_23977){
var statearr_24056_24117 = state_23990__$1;
(statearr_24056_24117[(1)] = (42));

} else {
var statearr_24057_24118 = state_23990__$1;
(statearr_24057_24118[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (16))){
var inst_23889 = (state_23990[(7)]);
var inst_23891 = cljs.core.chunked_seq_QMARK_.call(null,inst_23889);
var state_23990__$1 = state_23990;
if(inst_23891){
var statearr_24058_24119 = state_23990__$1;
(statearr_24058_24119[(1)] = (19));

} else {
var statearr_24059_24120 = state_23990__$1;
(statearr_24059_24120[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (38))){
var inst_23969 = (state_23990[(2)]);
var state_23990__$1 = state_23990;
var statearr_24060_24121 = state_23990__$1;
(statearr_24060_24121[(2)] = inst_23969);

(statearr_24060_24121[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (30))){
var state_23990__$1 = state_23990;
var statearr_24061_24122 = state_23990__$1;
(statearr_24061_24122[(2)] = null);

(statearr_24061_24122[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (10))){
var inst_23868 = (state_23990[(13)]);
var inst_23870 = (state_23990[(17)]);
var inst_23878 = cljs.core._nth.call(null,inst_23868,inst_23870);
var inst_23879 = cljs.core.nth.call(null,inst_23878,(0),null);
var inst_23880 = cljs.core.nth.call(null,inst_23878,(1),null);
var state_23990__$1 = (function (){var statearr_24062 = state_23990;
(statearr_24062[(26)] = inst_23879);

return statearr_24062;
})();
if(cljs.core.truth_(inst_23880)){
var statearr_24063_24123 = state_23990__$1;
(statearr_24063_24123[(1)] = (13));

} else {
var statearr_24064_24124 = state_23990__$1;
(statearr_24064_24124[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (18))){
var inst_23915 = (state_23990[(2)]);
var state_23990__$1 = state_23990;
var statearr_24065_24125 = state_23990__$1;
(statearr_24065_24125[(2)] = inst_23915);

(statearr_24065_24125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (42))){
var state_23990__$1 = state_23990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23990__$1,(45),dchan);
} else {
if((state_val_23991 === (37))){
var inst_23949 = (state_23990[(25)]);
var inst_23858 = (state_23990[(9)]);
var inst_23958 = (state_23990[(23)]);
var inst_23958__$1 = cljs.core.first.call(null,inst_23949);
var inst_23959 = cljs.core.async.put_BANG_.call(null,inst_23958__$1,inst_23858,done);
var state_23990__$1 = (function (){var statearr_24066 = state_23990;
(statearr_24066[(23)] = inst_23958__$1);

return statearr_24066;
})();
if(cljs.core.truth_(inst_23959)){
var statearr_24067_24126 = state_23990__$1;
(statearr_24067_24126[(1)] = (39));

} else {
var statearr_24068_24127 = state_23990__$1;
(statearr_24068_24127[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23991 === (8))){
var inst_23869 = (state_23990[(15)]);
var inst_23870 = (state_23990[(17)]);
var inst_23872 = (inst_23870 < inst_23869);
var inst_23873 = inst_23872;
var state_23990__$1 = state_23990;
if(cljs.core.truth_(inst_23873)){
var statearr_24069_24128 = state_23990__$1;
(statearr_24069_24128[(1)] = (10));

} else {
var statearr_24070_24129 = state_23990__$1;
(statearr_24070_24129[(1)] = (11));

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
});})(c__23256__auto___24075,cs,m,dchan,dctr,done))
;
return ((function (switch__23161__auto__,c__23256__auto___24075,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23162__auto__ = null;
var cljs$core$async$mult_$_state_machine__23162__auto____0 = (function (){
var statearr_24071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24071[(0)] = cljs$core$async$mult_$_state_machine__23162__auto__);

(statearr_24071[(1)] = (1));

return statearr_24071;
});
var cljs$core$async$mult_$_state_machine__23162__auto____1 = (function (state_23990){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_23990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e24072){if((e24072 instanceof Object)){
var ex__23165__auto__ = e24072;
var statearr_24073_24130 = state_23990;
(statearr_24073_24130[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24131 = state_23990;
state_23990 = G__24131;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23162__auto__ = function(state_23990){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23162__auto____1.call(this,state_23990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23162__auto____0;
cljs$core$async$mult_$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23162__auto____1;
return cljs$core$async$mult_$_state_machine__23162__auto__;
})()
;})(switch__23161__auto__,c__23256__auto___24075,cs,m,dchan,dctr,done))
})();
var state__23258__auto__ = (function (){var statearr_24074 = f__23257__auto__.call(null);
(statearr_24074[(6)] = c__23256__auto___24075);

return statearr_24074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(c__23256__auto___24075,cs,m,dchan,dctr,done))
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
var G__24133 = arguments.length;
switch (G__24133) {
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
var len__4641__auto___24145 = arguments.length;
var i__4642__auto___24146 = (0);
while(true){
if((i__4642__auto___24146 < len__4641__auto___24145)){
args__4647__auto__.push((arguments[i__4642__auto___24146]));

var G__24147 = (i__4642__auto___24146 + (1));
i__4642__auto___24146 = G__24147;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24139){
var map__24140 = p__24139;
var map__24140__$1 = (((((!((map__24140 == null))))?(((((map__24140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24140):map__24140);
var opts = map__24140__$1;
var statearr_24142_24148 = state;
(statearr_24142_24148[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__24140,map__24140__$1,opts){
return (function (val){
var statearr_24143_24149 = state;
(statearr_24143_24149[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24140,map__24140__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_24144_24150 = state;
(statearr_24144_24150[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24135){
var G__24136 = cljs.core.first.call(null,seq24135);
var seq24135__$1 = cljs.core.next.call(null,seq24135);
var G__24137 = cljs.core.first.call(null,seq24135__$1);
var seq24135__$2 = cljs.core.next.call(null,seq24135__$1);
var G__24138 = cljs.core.first.call(null,seq24135__$2);
var seq24135__$3 = cljs.core.next.call(null,seq24135__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24136,G__24137,G__24138,seq24135__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24151 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24151 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24152){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24152 = meta24152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24153,meta24152__$1){
var self__ = this;
var _24153__$1 = this;
return (new cljs.core.async.t_cljs$core$async24151(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24152__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24151.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24153){
var self__ = this;
var _24153__$1 = this;
return self__.meta24152;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24151.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24151.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24151.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24151.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24151.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24151.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24151.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24151.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24151.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta24152","meta24152",-466109488,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24151.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24151";

cljs.core.async.t_cljs$core$async24151.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24151");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24151.
 */
cljs.core.async.__GT_t_cljs$core$async24151 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24151(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24152){
return (new cljs.core.async.t_cljs$core$async24151(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24152));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24151(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23256__auto___24315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23256__auto___24315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (c__23256__auto___24315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24255){
var state_val_24256 = (state_24255[(1)]);
if((state_val_24256 === (7))){
var inst_24170 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24257_24316 = state_24255__$1;
(statearr_24257_24316[(2)] = inst_24170);

(statearr_24257_24316[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (20))){
var inst_24182 = (state_24255[(7)]);
var state_24255__$1 = state_24255;
var statearr_24258_24317 = state_24255__$1;
(statearr_24258_24317[(2)] = inst_24182);

(statearr_24258_24317[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (27))){
var state_24255__$1 = state_24255;
var statearr_24259_24318 = state_24255__$1;
(statearr_24259_24318[(2)] = null);

(statearr_24259_24318[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (1))){
var inst_24157 = (state_24255[(8)]);
var inst_24157__$1 = calc_state.call(null);
var inst_24159 = (inst_24157__$1 == null);
var inst_24160 = cljs.core.not.call(null,inst_24159);
var state_24255__$1 = (function (){var statearr_24260 = state_24255;
(statearr_24260[(8)] = inst_24157__$1);

return statearr_24260;
})();
if(inst_24160){
var statearr_24261_24319 = state_24255__$1;
(statearr_24261_24319[(1)] = (2));

} else {
var statearr_24262_24320 = state_24255__$1;
(statearr_24262_24320[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (24))){
var inst_24206 = (state_24255[(9)]);
var inst_24215 = (state_24255[(10)]);
var inst_24229 = (state_24255[(11)]);
var inst_24229__$1 = inst_24206.call(null,inst_24215);
var state_24255__$1 = (function (){var statearr_24263 = state_24255;
(statearr_24263[(11)] = inst_24229__$1);

return statearr_24263;
})();
if(cljs.core.truth_(inst_24229__$1)){
var statearr_24264_24321 = state_24255__$1;
(statearr_24264_24321[(1)] = (29));

} else {
var statearr_24265_24322 = state_24255__$1;
(statearr_24265_24322[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (4))){
var inst_24173 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
if(cljs.core.truth_(inst_24173)){
var statearr_24266_24323 = state_24255__$1;
(statearr_24266_24323[(1)] = (8));

} else {
var statearr_24267_24324 = state_24255__$1;
(statearr_24267_24324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (15))){
var inst_24200 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
if(cljs.core.truth_(inst_24200)){
var statearr_24268_24325 = state_24255__$1;
(statearr_24268_24325[(1)] = (19));

} else {
var statearr_24269_24326 = state_24255__$1;
(statearr_24269_24326[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (21))){
var inst_24205 = (state_24255[(12)]);
var inst_24205__$1 = (state_24255[(2)]);
var inst_24206 = cljs.core.get.call(null,inst_24205__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24207 = cljs.core.get.call(null,inst_24205__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24208 = cljs.core.get.call(null,inst_24205__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24255__$1 = (function (){var statearr_24270 = state_24255;
(statearr_24270[(9)] = inst_24206);

(statearr_24270[(12)] = inst_24205__$1);

(statearr_24270[(13)] = inst_24207);

return statearr_24270;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24255__$1,(22),inst_24208);
} else {
if((state_val_24256 === (31))){
var inst_24237 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
if(cljs.core.truth_(inst_24237)){
var statearr_24271_24327 = state_24255__$1;
(statearr_24271_24327[(1)] = (32));

} else {
var statearr_24272_24328 = state_24255__$1;
(statearr_24272_24328[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (32))){
var inst_24214 = (state_24255[(14)]);
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24255__$1,(35),out,inst_24214);
} else {
if((state_val_24256 === (33))){
var inst_24205 = (state_24255[(12)]);
var inst_24182 = inst_24205;
var state_24255__$1 = (function (){var statearr_24273 = state_24255;
(statearr_24273[(7)] = inst_24182);

return statearr_24273;
})();
var statearr_24274_24329 = state_24255__$1;
(statearr_24274_24329[(2)] = null);

(statearr_24274_24329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (13))){
var inst_24182 = (state_24255[(7)]);
var inst_24189 = inst_24182.cljs$lang$protocol_mask$partition0$;
var inst_24190 = (inst_24189 & (64));
var inst_24191 = inst_24182.cljs$core$ISeq$;
var inst_24192 = (cljs.core.PROTOCOL_SENTINEL === inst_24191);
var inst_24193 = ((inst_24190) || (inst_24192));
var state_24255__$1 = state_24255;
if(cljs.core.truth_(inst_24193)){
var statearr_24275_24330 = state_24255__$1;
(statearr_24275_24330[(1)] = (16));

} else {
var statearr_24276_24331 = state_24255__$1;
(statearr_24276_24331[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (22))){
var inst_24215 = (state_24255[(10)]);
var inst_24214 = (state_24255[(14)]);
var inst_24213 = (state_24255[(2)]);
var inst_24214__$1 = cljs.core.nth.call(null,inst_24213,(0),null);
var inst_24215__$1 = cljs.core.nth.call(null,inst_24213,(1),null);
var inst_24216 = (inst_24214__$1 == null);
var inst_24217 = cljs.core._EQ_.call(null,inst_24215__$1,change);
var inst_24218 = ((inst_24216) || (inst_24217));
var state_24255__$1 = (function (){var statearr_24277 = state_24255;
(statearr_24277[(10)] = inst_24215__$1);

(statearr_24277[(14)] = inst_24214__$1);

return statearr_24277;
})();
if(cljs.core.truth_(inst_24218)){
var statearr_24278_24332 = state_24255__$1;
(statearr_24278_24332[(1)] = (23));

} else {
var statearr_24279_24333 = state_24255__$1;
(statearr_24279_24333[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (36))){
var inst_24205 = (state_24255[(12)]);
var inst_24182 = inst_24205;
var state_24255__$1 = (function (){var statearr_24280 = state_24255;
(statearr_24280[(7)] = inst_24182);

return statearr_24280;
})();
var statearr_24281_24334 = state_24255__$1;
(statearr_24281_24334[(2)] = null);

(statearr_24281_24334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (29))){
var inst_24229 = (state_24255[(11)]);
var state_24255__$1 = state_24255;
var statearr_24282_24335 = state_24255__$1;
(statearr_24282_24335[(2)] = inst_24229);

(statearr_24282_24335[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (6))){
var state_24255__$1 = state_24255;
var statearr_24283_24336 = state_24255__$1;
(statearr_24283_24336[(2)] = false);

(statearr_24283_24336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (28))){
var inst_24225 = (state_24255[(2)]);
var inst_24226 = calc_state.call(null);
var inst_24182 = inst_24226;
var state_24255__$1 = (function (){var statearr_24284 = state_24255;
(statearr_24284[(15)] = inst_24225);

(statearr_24284[(7)] = inst_24182);

return statearr_24284;
})();
var statearr_24285_24337 = state_24255__$1;
(statearr_24285_24337[(2)] = null);

(statearr_24285_24337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (25))){
var inst_24251 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24286_24338 = state_24255__$1;
(statearr_24286_24338[(2)] = inst_24251);

(statearr_24286_24338[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (34))){
var inst_24249 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24287_24339 = state_24255__$1;
(statearr_24287_24339[(2)] = inst_24249);

(statearr_24287_24339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (17))){
var state_24255__$1 = state_24255;
var statearr_24288_24340 = state_24255__$1;
(statearr_24288_24340[(2)] = false);

(statearr_24288_24340[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (3))){
var state_24255__$1 = state_24255;
var statearr_24289_24341 = state_24255__$1;
(statearr_24289_24341[(2)] = false);

(statearr_24289_24341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (12))){
var inst_24253 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24255__$1,inst_24253);
} else {
if((state_val_24256 === (2))){
var inst_24157 = (state_24255[(8)]);
var inst_24162 = inst_24157.cljs$lang$protocol_mask$partition0$;
var inst_24163 = (inst_24162 & (64));
var inst_24164 = inst_24157.cljs$core$ISeq$;
var inst_24165 = (cljs.core.PROTOCOL_SENTINEL === inst_24164);
var inst_24166 = ((inst_24163) || (inst_24165));
var state_24255__$1 = state_24255;
if(cljs.core.truth_(inst_24166)){
var statearr_24290_24342 = state_24255__$1;
(statearr_24290_24342[(1)] = (5));

} else {
var statearr_24291_24343 = state_24255__$1;
(statearr_24291_24343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (23))){
var inst_24214 = (state_24255[(14)]);
var inst_24220 = (inst_24214 == null);
var state_24255__$1 = state_24255;
if(cljs.core.truth_(inst_24220)){
var statearr_24292_24344 = state_24255__$1;
(statearr_24292_24344[(1)] = (26));

} else {
var statearr_24293_24345 = state_24255__$1;
(statearr_24293_24345[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (35))){
var inst_24240 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
if(cljs.core.truth_(inst_24240)){
var statearr_24294_24346 = state_24255__$1;
(statearr_24294_24346[(1)] = (36));

} else {
var statearr_24295_24347 = state_24255__$1;
(statearr_24295_24347[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (19))){
var inst_24182 = (state_24255[(7)]);
var inst_24202 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24182);
var state_24255__$1 = state_24255;
var statearr_24296_24348 = state_24255__$1;
(statearr_24296_24348[(2)] = inst_24202);

(statearr_24296_24348[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (11))){
var inst_24182 = (state_24255[(7)]);
var inst_24186 = (inst_24182 == null);
var inst_24187 = cljs.core.not.call(null,inst_24186);
var state_24255__$1 = state_24255;
if(inst_24187){
var statearr_24297_24349 = state_24255__$1;
(statearr_24297_24349[(1)] = (13));

} else {
var statearr_24298_24350 = state_24255__$1;
(statearr_24298_24350[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (9))){
var inst_24157 = (state_24255[(8)]);
var state_24255__$1 = state_24255;
var statearr_24299_24351 = state_24255__$1;
(statearr_24299_24351[(2)] = inst_24157);

(statearr_24299_24351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (5))){
var state_24255__$1 = state_24255;
var statearr_24300_24352 = state_24255__$1;
(statearr_24300_24352[(2)] = true);

(statearr_24300_24352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (14))){
var state_24255__$1 = state_24255;
var statearr_24301_24353 = state_24255__$1;
(statearr_24301_24353[(2)] = false);

(statearr_24301_24353[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (26))){
var inst_24215 = (state_24255[(10)]);
var inst_24222 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24215);
var state_24255__$1 = state_24255;
var statearr_24302_24354 = state_24255__$1;
(statearr_24302_24354[(2)] = inst_24222);

(statearr_24302_24354[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (16))){
var state_24255__$1 = state_24255;
var statearr_24303_24355 = state_24255__$1;
(statearr_24303_24355[(2)] = true);

(statearr_24303_24355[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (38))){
var inst_24245 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24304_24356 = state_24255__$1;
(statearr_24304_24356[(2)] = inst_24245);

(statearr_24304_24356[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (30))){
var inst_24206 = (state_24255[(9)]);
var inst_24215 = (state_24255[(10)]);
var inst_24207 = (state_24255[(13)]);
var inst_24232 = cljs.core.empty_QMARK_.call(null,inst_24206);
var inst_24233 = inst_24207.call(null,inst_24215);
var inst_24234 = cljs.core.not.call(null,inst_24233);
var inst_24235 = ((inst_24232) && (inst_24234));
var state_24255__$1 = state_24255;
var statearr_24305_24357 = state_24255__$1;
(statearr_24305_24357[(2)] = inst_24235);

(statearr_24305_24357[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (10))){
var inst_24157 = (state_24255[(8)]);
var inst_24178 = (state_24255[(2)]);
var inst_24179 = cljs.core.get.call(null,inst_24178,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24180 = cljs.core.get.call(null,inst_24178,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24181 = cljs.core.get.call(null,inst_24178,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24182 = inst_24157;
var state_24255__$1 = (function (){var statearr_24306 = state_24255;
(statearr_24306[(16)] = inst_24180);

(statearr_24306[(17)] = inst_24179);

(statearr_24306[(7)] = inst_24182);

(statearr_24306[(18)] = inst_24181);

return statearr_24306;
})();
var statearr_24307_24358 = state_24255__$1;
(statearr_24307_24358[(2)] = null);

(statearr_24307_24358[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (18))){
var inst_24197 = (state_24255[(2)]);
var state_24255__$1 = state_24255;
var statearr_24308_24359 = state_24255__$1;
(statearr_24308_24359[(2)] = inst_24197);

(statearr_24308_24359[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (37))){
var state_24255__$1 = state_24255;
var statearr_24309_24360 = state_24255__$1;
(statearr_24309_24360[(2)] = null);

(statearr_24309_24360[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24256 === (8))){
var inst_24157 = (state_24255[(8)]);
var inst_24175 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24157);
var state_24255__$1 = state_24255;
var statearr_24310_24361 = state_24255__$1;
(statearr_24310_24361[(2)] = inst_24175);

(statearr_24310_24361[(1)] = (10));


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
});})(c__23256__auto___24315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23161__auto__,c__23256__auto___24315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23162__auto__ = null;
var cljs$core$async$mix_$_state_machine__23162__auto____0 = (function (){
var statearr_24311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24311[(0)] = cljs$core$async$mix_$_state_machine__23162__auto__);

(statearr_24311[(1)] = (1));

return statearr_24311;
});
var cljs$core$async$mix_$_state_machine__23162__auto____1 = (function (state_24255){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_24255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e24312){if((e24312 instanceof Object)){
var ex__23165__auto__ = e24312;
var statearr_24313_24362 = state_24255;
(statearr_24313_24362[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24363 = state_24255;
state_24255 = G__24363;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23162__auto__ = function(state_24255){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23162__auto____1.call(this,state_24255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23162__auto____0;
cljs$core$async$mix_$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23162__auto____1;
return cljs$core$async$mix_$_state_machine__23162__auto__;
})()
;})(switch__23161__auto__,c__23256__auto___24315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23258__auto__ = (function (){var statearr_24314 = f__23257__auto__.call(null);
(statearr_24314[(6)] = c__23256__auto___24315);

return statearr_24314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(c__23256__auto___24315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__24365 = arguments.length;
switch (G__24365) {
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
var G__24369 = arguments.length;
switch (G__24369) {
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
return (function (p1__24367_SHARP_){
if(cljs.core.truth_(p1__24367_SHARP_.call(null,topic))){
return p1__24367_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24367_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24370 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24371){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24371 = meta24371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24372,meta24371__$1){
var self__ = this;
var _24372__$1 = this;
return (new cljs.core.async.t_cljs$core$async24370(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24371__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24370.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24372){
var self__ = this;
var _24372__$1 = this;
return self__.meta24371;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24370.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24370.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24370.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24370.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24370.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24370.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24370.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24370.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24371","meta24371",1087056064,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24370.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24370";

cljs.core.async.t_cljs$core$async24370.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24370");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24370.
 */
cljs.core.async.__GT_t_cljs$core$async24370 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24370(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24371){
return (new cljs.core.async.t_cljs$core$async24370(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24371));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24370(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23256__auto___24490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23256__auto___24490,mults,ensure_mult,p){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (c__23256__auto___24490,mults,ensure_mult,p){
return (function (state_24444){
var state_val_24445 = (state_24444[(1)]);
if((state_val_24445 === (7))){
var inst_24440 = (state_24444[(2)]);
var state_24444__$1 = state_24444;
var statearr_24446_24491 = state_24444__$1;
(statearr_24446_24491[(2)] = inst_24440);

(statearr_24446_24491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (20))){
var state_24444__$1 = state_24444;
var statearr_24447_24492 = state_24444__$1;
(statearr_24447_24492[(2)] = null);

(statearr_24447_24492[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (1))){
var state_24444__$1 = state_24444;
var statearr_24448_24493 = state_24444__$1;
(statearr_24448_24493[(2)] = null);

(statearr_24448_24493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (24))){
var inst_24423 = (state_24444[(7)]);
var inst_24432 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24423);
var state_24444__$1 = state_24444;
var statearr_24449_24494 = state_24444__$1;
(statearr_24449_24494[(2)] = inst_24432);

(statearr_24449_24494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (4))){
var inst_24375 = (state_24444[(8)]);
var inst_24375__$1 = (state_24444[(2)]);
var inst_24376 = (inst_24375__$1 == null);
var state_24444__$1 = (function (){var statearr_24450 = state_24444;
(statearr_24450[(8)] = inst_24375__$1);

return statearr_24450;
})();
if(cljs.core.truth_(inst_24376)){
var statearr_24451_24495 = state_24444__$1;
(statearr_24451_24495[(1)] = (5));

} else {
var statearr_24452_24496 = state_24444__$1;
(statearr_24452_24496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (15))){
var inst_24417 = (state_24444[(2)]);
var state_24444__$1 = state_24444;
var statearr_24453_24497 = state_24444__$1;
(statearr_24453_24497[(2)] = inst_24417);

(statearr_24453_24497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (21))){
var inst_24437 = (state_24444[(2)]);
var state_24444__$1 = (function (){var statearr_24454 = state_24444;
(statearr_24454[(9)] = inst_24437);

return statearr_24454;
})();
var statearr_24455_24498 = state_24444__$1;
(statearr_24455_24498[(2)] = null);

(statearr_24455_24498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (13))){
var inst_24399 = (state_24444[(10)]);
var inst_24401 = cljs.core.chunked_seq_QMARK_.call(null,inst_24399);
var state_24444__$1 = state_24444;
if(inst_24401){
var statearr_24456_24499 = state_24444__$1;
(statearr_24456_24499[(1)] = (16));

} else {
var statearr_24457_24500 = state_24444__$1;
(statearr_24457_24500[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (22))){
var inst_24429 = (state_24444[(2)]);
var state_24444__$1 = state_24444;
if(cljs.core.truth_(inst_24429)){
var statearr_24458_24501 = state_24444__$1;
(statearr_24458_24501[(1)] = (23));

} else {
var statearr_24459_24502 = state_24444__$1;
(statearr_24459_24502[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (6))){
var inst_24425 = (state_24444[(11)]);
var inst_24375 = (state_24444[(8)]);
var inst_24423 = (state_24444[(7)]);
var inst_24423__$1 = topic_fn.call(null,inst_24375);
var inst_24424 = cljs.core.deref.call(null,mults);
var inst_24425__$1 = cljs.core.get.call(null,inst_24424,inst_24423__$1);
var state_24444__$1 = (function (){var statearr_24460 = state_24444;
(statearr_24460[(11)] = inst_24425__$1);

(statearr_24460[(7)] = inst_24423__$1);

return statearr_24460;
})();
if(cljs.core.truth_(inst_24425__$1)){
var statearr_24461_24503 = state_24444__$1;
(statearr_24461_24503[(1)] = (19));

} else {
var statearr_24462_24504 = state_24444__$1;
(statearr_24462_24504[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (25))){
var inst_24434 = (state_24444[(2)]);
var state_24444__$1 = state_24444;
var statearr_24463_24505 = state_24444__$1;
(statearr_24463_24505[(2)] = inst_24434);

(statearr_24463_24505[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (17))){
var inst_24399 = (state_24444[(10)]);
var inst_24408 = cljs.core.first.call(null,inst_24399);
var inst_24409 = cljs.core.async.muxch_STAR_.call(null,inst_24408);
var inst_24410 = cljs.core.async.close_BANG_.call(null,inst_24409);
var inst_24411 = cljs.core.next.call(null,inst_24399);
var inst_24385 = inst_24411;
var inst_24386 = null;
var inst_24387 = (0);
var inst_24388 = (0);
var state_24444__$1 = (function (){var statearr_24464 = state_24444;
(statearr_24464[(12)] = inst_24388);

(statearr_24464[(13)] = inst_24385);

(statearr_24464[(14)] = inst_24410);

(statearr_24464[(15)] = inst_24386);

(statearr_24464[(16)] = inst_24387);

return statearr_24464;
})();
var statearr_24465_24506 = state_24444__$1;
(statearr_24465_24506[(2)] = null);

(statearr_24465_24506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (3))){
var inst_24442 = (state_24444[(2)]);
var state_24444__$1 = state_24444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24444__$1,inst_24442);
} else {
if((state_val_24445 === (12))){
var inst_24419 = (state_24444[(2)]);
var state_24444__$1 = state_24444;
var statearr_24466_24507 = state_24444__$1;
(statearr_24466_24507[(2)] = inst_24419);

(statearr_24466_24507[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (2))){
var state_24444__$1 = state_24444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24444__$1,(4),ch);
} else {
if((state_val_24445 === (23))){
var state_24444__$1 = state_24444;
var statearr_24467_24508 = state_24444__$1;
(statearr_24467_24508[(2)] = null);

(statearr_24467_24508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (19))){
var inst_24425 = (state_24444[(11)]);
var inst_24375 = (state_24444[(8)]);
var inst_24427 = cljs.core.async.muxch_STAR_.call(null,inst_24425);
var state_24444__$1 = state_24444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24444__$1,(22),inst_24427,inst_24375);
} else {
if((state_val_24445 === (11))){
var inst_24385 = (state_24444[(13)]);
var inst_24399 = (state_24444[(10)]);
var inst_24399__$1 = cljs.core.seq.call(null,inst_24385);
var state_24444__$1 = (function (){var statearr_24468 = state_24444;
(statearr_24468[(10)] = inst_24399__$1);

return statearr_24468;
})();
if(inst_24399__$1){
var statearr_24469_24509 = state_24444__$1;
(statearr_24469_24509[(1)] = (13));

} else {
var statearr_24470_24510 = state_24444__$1;
(statearr_24470_24510[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (9))){
var inst_24421 = (state_24444[(2)]);
var state_24444__$1 = state_24444;
var statearr_24471_24511 = state_24444__$1;
(statearr_24471_24511[(2)] = inst_24421);

(statearr_24471_24511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (5))){
var inst_24382 = cljs.core.deref.call(null,mults);
var inst_24383 = cljs.core.vals.call(null,inst_24382);
var inst_24384 = cljs.core.seq.call(null,inst_24383);
var inst_24385 = inst_24384;
var inst_24386 = null;
var inst_24387 = (0);
var inst_24388 = (0);
var state_24444__$1 = (function (){var statearr_24472 = state_24444;
(statearr_24472[(12)] = inst_24388);

(statearr_24472[(13)] = inst_24385);

(statearr_24472[(15)] = inst_24386);

(statearr_24472[(16)] = inst_24387);

return statearr_24472;
})();
var statearr_24473_24512 = state_24444__$1;
(statearr_24473_24512[(2)] = null);

(statearr_24473_24512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (14))){
var state_24444__$1 = state_24444;
var statearr_24477_24513 = state_24444__$1;
(statearr_24477_24513[(2)] = null);

(statearr_24477_24513[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (16))){
var inst_24399 = (state_24444[(10)]);
var inst_24403 = cljs.core.chunk_first.call(null,inst_24399);
var inst_24404 = cljs.core.chunk_rest.call(null,inst_24399);
var inst_24405 = cljs.core.count.call(null,inst_24403);
var inst_24385 = inst_24404;
var inst_24386 = inst_24403;
var inst_24387 = inst_24405;
var inst_24388 = (0);
var state_24444__$1 = (function (){var statearr_24478 = state_24444;
(statearr_24478[(12)] = inst_24388);

(statearr_24478[(13)] = inst_24385);

(statearr_24478[(15)] = inst_24386);

(statearr_24478[(16)] = inst_24387);

return statearr_24478;
})();
var statearr_24479_24514 = state_24444__$1;
(statearr_24479_24514[(2)] = null);

(statearr_24479_24514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (10))){
var inst_24388 = (state_24444[(12)]);
var inst_24385 = (state_24444[(13)]);
var inst_24386 = (state_24444[(15)]);
var inst_24387 = (state_24444[(16)]);
var inst_24393 = cljs.core._nth.call(null,inst_24386,inst_24388);
var inst_24394 = cljs.core.async.muxch_STAR_.call(null,inst_24393);
var inst_24395 = cljs.core.async.close_BANG_.call(null,inst_24394);
var inst_24396 = (inst_24388 + (1));
var tmp24474 = inst_24385;
var tmp24475 = inst_24386;
var tmp24476 = inst_24387;
var inst_24385__$1 = tmp24474;
var inst_24386__$1 = tmp24475;
var inst_24387__$1 = tmp24476;
var inst_24388__$1 = inst_24396;
var state_24444__$1 = (function (){var statearr_24480 = state_24444;
(statearr_24480[(12)] = inst_24388__$1);

(statearr_24480[(13)] = inst_24385__$1);

(statearr_24480[(15)] = inst_24386__$1);

(statearr_24480[(16)] = inst_24387__$1);

(statearr_24480[(17)] = inst_24395);

return statearr_24480;
})();
var statearr_24481_24515 = state_24444__$1;
(statearr_24481_24515[(2)] = null);

(statearr_24481_24515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (18))){
var inst_24414 = (state_24444[(2)]);
var state_24444__$1 = state_24444;
var statearr_24482_24516 = state_24444__$1;
(statearr_24482_24516[(2)] = inst_24414);

(statearr_24482_24516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24445 === (8))){
var inst_24388 = (state_24444[(12)]);
var inst_24387 = (state_24444[(16)]);
var inst_24390 = (inst_24388 < inst_24387);
var inst_24391 = inst_24390;
var state_24444__$1 = state_24444;
if(cljs.core.truth_(inst_24391)){
var statearr_24483_24517 = state_24444__$1;
(statearr_24483_24517[(1)] = (10));

} else {
var statearr_24484_24518 = state_24444__$1;
(statearr_24484_24518[(1)] = (11));

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
});})(c__23256__auto___24490,mults,ensure_mult,p))
;
return ((function (switch__23161__auto__,c__23256__auto___24490,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23162__auto__ = null;
var cljs$core$async$state_machine__23162__auto____0 = (function (){
var statearr_24485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24485[(0)] = cljs$core$async$state_machine__23162__auto__);

(statearr_24485[(1)] = (1));

return statearr_24485;
});
var cljs$core$async$state_machine__23162__auto____1 = (function (state_24444){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_24444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e24486){if((e24486 instanceof Object)){
var ex__23165__auto__ = e24486;
var statearr_24487_24519 = state_24444;
(statearr_24487_24519[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24520 = state_24444;
state_24444 = G__24520;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$state_machine__23162__auto__ = function(state_24444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23162__auto____1.call(this,state_24444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23162__auto____0;
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23162__auto____1;
return cljs$core$async$state_machine__23162__auto__;
})()
;})(switch__23161__auto__,c__23256__auto___24490,mults,ensure_mult,p))
})();
var state__23258__auto__ = (function (){var statearr_24488 = f__23257__auto__.call(null);
(statearr_24488[(6)] = c__23256__auto___24490);

return statearr_24488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(c__23256__auto___24490,mults,ensure_mult,p))
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
var G__24522 = arguments.length;
switch (G__24522) {
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
var G__24525 = arguments.length;
switch (G__24525) {
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
var G__24528 = arguments.length;
switch (G__24528) {
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
var c__23256__auto___24595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23256__auto___24595,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (c__23256__auto___24595,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24567){
var state_val_24568 = (state_24567[(1)]);
if((state_val_24568 === (7))){
var state_24567__$1 = state_24567;
var statearr_24569_24596 = state_24567__$1;
(statearr_24569_24596[(2)] = null);

(statearr_24569_24596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24568 === (1))){
var state_24567__$1 = state_24567;
var statearr_24570_24597 = state_24567__$1;
(statearr_24570_24597[(2)] = null);

(statearr_24570_24597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24568 === (4))){
var inst_24531 = (state_24567[(7)]);
var inst_24533 = (inst_24531 < cnt);
var state_24567__$1 = state_24567;
if(cljs.core.truth_(inst_24533)){
var statearr_24571_24598 = state_24567__$1;
(statearr_24571_24598[(1)] = (6));

} else {
var statearr_24572_24599 = state_24567__$1;
(statearr_24572_24599[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24568 === (15))){
var inst_24563 = (state_24567[(2)]);
var state_24567__$1 = state_24567;
var statearr_24573_24600 = state_24567__$1;
(statearr_24573_24600[(2)] = inst_24563);

(statearr_24573_24600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24568 === (13))){
var inst_24556 = cljs.core.async.close_BANG_.call(null,out);
var state_24567__$1 = state_24567;
var statearr_24574_24601 = state_24567__$1;
(statearr_24574_24601[(2)] = inst_24556);

(statearr_24574_24601[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24568 === (6))){
var state_24567__$1 = state_24567;
var statearr_24575_24602 = state_24567__$1;
(statearr_24575_24602[(2)] = null);

(statearr_24575_24602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24568 === (3))){
var inst_24565 = (state_24567[(2)]);
var state_24567__$1 = state_24567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24567__$1,inst_24565);
} else {
if((state_val_24568 === (12))){
var inst_24553 = (state_24567[(8)]);
var inst_24553__$1 = (state_24567[(2)]);
var inst_24554 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24553__$1);
var state_24567__$1 = (function (){var statearr_24576 = state_24567;
(statearr_24576[(8)] = inst_24553__$1);

return statearr_24576;
})();
if(cljs.core.truth_(inst_24554)){
var statearr_24577_24603 = state_24567__$1;
(statearr_24577_24603[(1)] = (13));

} else {
var statearr_24578_24604 = state_24567__$1;
(statearr_24578_24604[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24568 === (2))){
var inst_24530 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24531 = (0);
var state_24567__$1 = (function (){var statearr_24579 = state_24567;
(statearr_24579[(7)] = inst_24531);

(statearr_24579[(9)] = inst_24530);

return statearr_24579;
})();
var statearr_24580_24605 = state_24567__$1;
(statearr_24580_24605[(2)] = null);

(statearr_24580_24605[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24568 === (11))){
var inst_24531 = (state_24567[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24567,(10),Object,null,(9));
var inst_24540 = chs__$1.call(null,inst_24531);
var inst_24541 = done.call(null,inst_24531);
var inst_24542 = cljs.core.async.take_BANG_.call(null,inst_24540,inst_24541);
var state_24567__$1 = state_24567;
var statearr_24581_24606 = state_24567__$1;
(statearr_24581_24606[(2)] = inst_24542);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24567__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24568 === (9))){
var inst_24531 = (state_24567[(7)]);
var inst_24544 = (state_24567[(2)]);
var inst_24545 = (inst_24531 + (1));
var inst_24531__$1 = inst_24545;
var state_24567__$1 = (function (){var statearr_24582 = state_24567;
(statearr_24582[(10)] = inst_24544);

(statearr_24582[(7)] = inst_24531__$1);

return statearr_24582;
})();
var statearr_24583_24607 = state_24567__$1;
(statearr_24583_24607[(2)] = null);

(statearr_24583_24607[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24568 === (5))){
var inst_24551 = (state_24567[(2)]);
var state_24567__$1 = (function (){var statearr_24584 = state_24567;
(statearr_24584[(11)] = inst_24551);

return statearr_24584;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24567__$1,(12),dchan);
} else {
if((state_val_24568 === (14))){
var inst_24553 = (state_24567[(8)]);
var inst_24558 = cljs.core.apply.call(null,f,inst_24553);
var state_24567__$1 = state_24567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24567__$1,(16),out,inst_24558);
} else {
if((state_val_24568 === (16))){
var inst_24560 = (state_24567[(2)]);
var state_24567__$1 = (function (){var statearr_24585 = state_24567;
(statearr_24585[(12)] = inst_24560);

return statearr_24585;
})();
var statearr_24586_24608 = state_24567__$1;
(statearr_24586_24608[(2)] = null);

(statearr_24586_24608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24568 === (10))){
var inst_24535 = (state_24567[(2)]);
var inst_24536 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24567__$1 = (function (){var statearr_24587 = state_24567;
(statearr_24587[(13)] = inst_24535);

return statearr_24587;
})();
var statearr_24588_24609 = state_24567__$1;
(statearr_24588_24609[(2)] = inst_24536);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24567__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24568 === (8))){
var inst_24549 = (state_24567[(2)]);
var state_24567__$1 = state_24567;
var statearr_24589_24610 = state_24567__$1;
(statearr_24589_24610[(2)] = inst_24549);

(statearr_24589_24610[(1)] = (5));


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
});})(c__23256__auto___24595,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23161__auto__,c__23256__auto___24595,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23162__auto__ = null;
var cljs$core$async$state_machine__23162__auto____0 = (function (){
var statearr_24590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24590[(0)] = cljs$core$async$state_machine__23162__auto__);

(statearr_24590[(1)] = (1));

return statearr_24590;
});
var cljs$core$async$state_machine__23162__auto____1 = (function (state_24567){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_24567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e24591){if((e24591 instanceof Object)){
var ex__23165__auto__ = e24591;
var statearr_24592_24611 = state_24567;
(statearr_24592_24611[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24612 = state_24567;
state_24567 = G__24612;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$state_machine__23162__auto__ = function(state_24567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23162__auto____1.call(this,state_24567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23162__auto____0;
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23162__auto____1;
return cljs$core$async$state_machine__23162__auto__;
})()
;})(switch__23161__auto__,c__23256__auto___24595,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23258__auto__ = (function (){var statearr_24593 = f__23257__auto__.call(null);
(statearr_24593[(6)] = c__23256__auto___24595);

return statearr_24593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(c__23256__auto___24595,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__24615 = arguments.length;
switch (G__24615) {
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
var c__23256__auto___24669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23256__auto___24669,out){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (c__23256__auto___24669,out){
return (function (state_24647){
var state_val_24648 = (state_24647[(1)]);
if((state_val_24648 === (7))){
var inst_24627 = (state_24647[(7)]);
var inst_24626 = (state_24647[(8)]);
var inst_24626__$1 = (state_24647[(2)]);
var inst_24627__$1 = cljs.core.nth.call(null,inst_24626__$1,(0),null);
var inst_24628 = cljs.core.nth.call(null,inst_24626__$1,(1),null);
var inst_24629 = (inst_24627__$1 == null);
var state_24647__$1 = (function (){var statearr_24649 = state_24647;
(statearr_24649[(9)] = inst_24628);

(statearr_24649[(7)] = inst_24627__$1);

(statearr_24649[(8)] = inst_24626__$1);

return statearr_24649;
})();
if(cljs.core.truth_(inst_24629)){
var statearr_24650_24670 = state_24647__$1;
(statearr_24650_24670[(1)] = (8));

} else {
var statearr_24651_24671 = state_24647__$1;
(statearr_24651_24671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24648 === (1))){
var inst_24616 = cljs.core.vec.call(null,chs);
var inst_24617 = inst_24616;
var state_24647__$1 = (function (){var statearr_24652 = state_24647;
(statearr_24652[(10)] = inst_24617);

return statearr_24652;
})();
var statearr_24653_24672 = state_24647__$1;
(statearr_24653_24672[(2)] = null);

(statearr_24653_24672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24648 === (4))){
var inst_24617 = (state_24647[(10)]);
var state_24647__$1 = state_24647;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24647__$1,(7),inst_24617);
} else {
if((state_val_24648 === (6))){
var inst_24643 = (state_24647[(2)]);
var state_24647__$1 = state_24647;
var statearr_24654_24673 = state_24647__$1;
(statearr_24654_24673[(2)] = inst_24643);

(statearr_24654_24673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24648 === (3))){
var inst_24645 = (state_24647[(2)]);
var state_24647__$1 = state_24647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24647__$1,inst_24645);
} else {
if((state_val_24648 === (2))){
var inst_24617 = (state_24647[(10)]);
var inst_24619 = cljs.core.count.call(null,inst_24617);
var inst_24620 = (inst_24619 > (0));
var state_24647__$1 = state_24647;
if(cljs.core.truth_(inst_24620)){
var statearr_24656_24674 = state_24647__$1;
(statearr_24656_24674[(1)] = (4));

} else {
var statearr_24657_24675 = state_24647__$1;
(statearr_24657_24675[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24648 === (11))){
var inst_24617 = (state_24647[(10)]);
var inst_24636 = (state_24647[(2)]);
var tmp24655 = inst_24617;
var inst_24617__$1 = tmp24655;
var state_24647__$1 = (function (){var statearr_24658 = state_24647;
(statearr_24658[(11)] = inst_24636);

(statearr_24658[(10)] = inst_24617__$1);

return statearr_24658;
})();
var statearr_24659_24676 = state_24647__$1;
(statearr_24659_24676[(2)] = null);

(statearr_24659_24676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24648 === (9))){
var inst_24627 = (state_24647[(7)]);
var state_24647__$1 = state_24647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24647__$1,(11),out,inst_24627);
} else {
if((state_val_24648 === (5))){
var inst_24641 = cljs.core.async.close_BANG_.call(null,out);
var state_24647__$1 = state_24647;
var statearr_24660_24677 = state_24647__$1;
(statearr_24660_24677[(2)] = inst_24641);

(statearr_24660_24677[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24648 === (10))){
var inst_24639 = (state_24647[(2)]);
var state_24647__$1 = state_24647;
var statearr_24661_24678 = state_24647__$1;
(statearr_24661_24678[(2)] = inst_24639);

(statearr_24661_24678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24648 === (8))){
var inst_24628 = (state_24647[(9)]);
var inst_24627 = (state_24647[(7)]);
var inst_24617 = (state_24647[(10)]);
var inst_24626 = (state_24647[(8)]);
var inst_24631 = (function (){var cs = inst_24617;
var vec__24622 = inst_24626;
var v = inst_24627;
var c = inst_24628;
return ((function (cs,vec__24622,v,c,inst_24628,inst_24627,inst_24617,inst_24626,state_val_24648,c__23256__auto___24669,out){
return (function (p1__24613_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24613_SHARP_);
});
;})(cs,vec__24622,v,c,inst_24628,inst_24627,inst_24617,inst_24626,state_val_24648,c__23256__auto___24669,out))
})();
var inst_24632 = cljs.core.filterv.call(null,inst_24631,inst_24617);
var inst_24617__$1 = inst_24632;
var state_24647__$1 = (function (){var statearr_24662 = state_24647;
(statearr_24662[(10)] = inst_24617__$1);

return statearr_24662;
})();
var statearr_24663_24679 = state_24647__$1;
(statearr_24663_24679[(2)] = null);

(statearr_24663_24679[(1)] = (2));


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
});})(c__23256__auto___24669,out))
;
return ((function (switch__23161__auto__,c__23256__auto___24669,out){
return (function() {
var cljs$core$async$state_machine__23162__auto__ = null;
var cljs$core$async$state_machine__23162__auto____0 = (function (){
var statearr_24664 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24664[(0)] = cljs$core$async$state_machine__23162__auto__);

(statearr_24664[(1)] = (1));

return statearr_24664;
});
var cljs$core$async$state_machine__23162__auto____1 = (function (state_24647){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_24647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e24665){if((e24665 instanceof Object)){
var ex__23165__auto__ = e24665;
var statearr_24666_24680 = state_24647;
(statearr_24666_24680[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24681 = state_24647;
state_24647 = G__24681;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$state_machine__23162__auto__ = function(state_24647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23162__auto____1.call(this,state_24647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23162__auto____0;
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23162__auto____1;
return cljs$core$async$state_machine__23162__auto__;
})()
;})(switch__23161__auto__,c__23256__auto___24669,out))
})();
var state__23258__auto__ = (function (){var statearr_24667 = f__23257__auto__.call(null);
(statearr_24667[(6)] = c__23256__auto___24669);

return statearr_24667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(c__23256__auto___24669,out))
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
var G__24683 = arguments.length;
switch (G__24683) {
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
var c__23256__auto___24728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23256__auto___24728,out){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (c__23256__auto___24728,out){
return (function (state_24707){
var state_val_24708 = (state_24707[(1)]);
if((state_val_24708 === (7))){
var inst_24689 = (state_24707[(7)]);
var inst_24689__$1 = (state_24707[(2)]);
var inst_24690 = (inst_24689__$1 == null);
var inst_24691 = cljs.core.not.call(null,inst_24690);
var state_24707__$1 = (function (){var statearr_24709 = state_24707;
(statearr_24709[(7)] = inst_24689__$1);

return statearr_24709;
})();
if(inst_24691){
var statearr_24710_24729 = state_24707__$1;
(statearr_24710_24729[(1)] = (8));

} else {
var statearr_24711_24730 = state_24707__$1;
(statearr_24711_24730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (1))){
var inst_24684 = (0);
var state_24707__$1 = (function (){var statearr_24712 = state_24707;
(statearr_24712[(8)] = inst_24684);

return statearr_24712;
})();
var statearr_24713_24731 = state_24707__$1;
(statearr_24713_24731[(2)] = null);

(statearr_24713_24731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (4))){
var state_24707__$1 = state_24707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24707__$1,(7),ch);
} else {
if((state_val_24708 === (6))){
var inst_24702 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
var statearr_24714_24732 = state_24707__$1;
(statearr_24714_24732[(2)] = inst_24702);

(statearr_24714_24732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (3))){
var inst_24704 = (state_24707[(2)]);
var inst_24705 = cljs.core.async.close_BANG_.call(null,out);
var state_24707__$1 = (function (){var statearr_24715 = state_24707;
(statearr_24715[(9)] = inst_24704);

return statearr_24715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24707__$1,inst_24705);
} else {
if((state_val_24708 === (2))){
var inst_24684 = (state_24707[(8)]);
var inst_24686 = (inst_24684 < n);
var state_24707__$1 = state_24707;
if(cljs.core.truth_(inst_24686)){
var statearr_24716_24733 = state_24707__$1;
(statearr_24716_24733[(1)] = (4));

} else {
var statearr_24717_24734 = state_24707__$1;
(statearr_24717_24734[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (11))){
var inst_24684 = (state_24707[(8)]);
var inst_24694 = (state_24707[(2)]);
var inst_24695 = (inst_24684 + (1));
var inst_24684__$1 = inst_24695;
var state_24707__$1 = (function (){var statearr_24718 = state_24707;
(statearr_24718[(10)] = inst_24694);

(statearr_24718[(8)] = inst_24684__$1);

return statearr_24718;
})();
var statearr_24719_24735 = state_24707__$1;
(statearr_24719_24735[(2)] = null);

(statearr_24719_24735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (9))){
var state_24707__$1 = state_24707;
var statearr_24720_24736 = state_24707__$1;
(statearr_24720_24736[(2)] = null);

(statearr_24720_24736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (5))){
var state_24707__$1 = state_24707;
var statearr_24721_24737 = state_24707__$1;
(statearr_24721_24737[(2)] = null);

(statearr_24721_24737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (10))){
var inst_24699 = (state_24707[(2)]);
var state_24707__$1 = state_24707;
var statearr_24722_24738 = state_24707__$1;
(statearr_24722_24738[(2)] = inst_24699);

(statearr_24722_24738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24708 === (8))){
var inst_24689 = (state_24707[(7)]);
var state_24707__$1 = state_24707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24707__$1,(11),out,inst_24689);
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
});})(c__23256__auto___24728,out))
;
return ((function (switch__23161__auto__,c__23256__auto___24728,out){
return (function() {
var cljs$core$async$state_machine__23162__auto__ = null;
var cljs$core$async$state_machine__23162__auto____0 = (function (){
var statearr_24723 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24723[(0)] = cljs$core$async$state_machine__23162__auto__);

(statearr_24723[(1)] = (1));

return statearr_24723;
});
var cljs$core$async$state_machine__23162__auto____1 = (function (state_24707){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_24707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e24724){if((e24724 instanceof Object)){
var ex__23165__auto__ = e24724;
var statearr_24725_24739 = state_24707;
(statearr_24725_24739[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24740 = state_24707;
state_24707 = G__24740;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$state_machine__23162__auto__ = function(state_24707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23162__auto____1.call(this,state_24707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23162__auto____0;
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23162__auto____1;
return cljs$core$async$state_machine__23162__auto__;
})()
;})(switch__23161__auto__,c__23256__auto___24728,out))
})();
var state__23258__auto__ = (function (){var statearr_24726 = f__23257__auto__.call(null);
(statearr_24726[(6)] = c__23256__auto___24728);

return statearr_24726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(c__23256__auto___24728,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24742 = (function (f,ch,meta24743){
this.f = f;
this.ch = ch;
this.meta24743 = meta24743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24744,meta24743__$1){
var self__ = this;
var _24744__$1 = this;
return (new cljs.core.async.t_cljs$core$async24742(self__.f,self__.ch,meta24743__$1));
});

cljs.core.async.t_cljs$core$async24742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24744){
var self__ = this;
var _24744__$1 = this;
return self__.meta24743;
});

cljs.core.async.t_cljs$core$async24742.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24742.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24742.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24742.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24742.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24745 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24745 = (function (f,ch,meta24743,_,fn1,meta24746){
this.f = f;
this.ch = ch;
this.meta24743 = meta24743;
this._ = _;
this.fn1 = fn1;
this.meta24746 = meta24746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24747,meta24746__$1){
var self__ = this;
var _24747__$1 = this;
return (new cljs.core.async.t_cljs$core$async24745(self__.f,self__.ch,self__.meta24743,self__._,self__.fn1,meta24746__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24747){
var self__ = this;
var _24747__$1 = this;
return self__.meta24746;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24745.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24741_SHARP_){
return f1.call(null,(((p1__24741_SHARP_ == null))?null:self__.f.call(null,p1__24741_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24745.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24743","meta24743",-1939555334,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24742","cljs.core.async/t_cljs$core$async24742",-1262732339,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24746","meta24746",1667636856,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24745.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24745";

cljs.core.async.t_cljs$core$async24745.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24745");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24745.
 */
cljs.core.async.__GT_t_cljs$core$async24745 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24745(f__$1,ch__$1,meta24743__$1,___$2,fn1__$1,meta24746){
return (new cljs.core.async.t_cljs$core$async24745(f__$1,ch__$1,meta24743__$1,___$2,fn1__$1,meta24746));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24745(self__.f,self__.ch,self__.meta24743,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async24742.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24742.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24743","meta24743",-1939555334,null)], null);
});

cljs.core.async.t_cljs$core$async24742.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24742";

cljs.core.async.t_cljs$core$async24742.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24742");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24742.
 */
cljs.core.async.__GT_t_cljs$core$async24742 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24742(f__$1,ch__$1,meta24743){
return (new cljs.core.async.t_cljs$core$async24742(f__$1,ch__$1,meta24743));
});

}

return (new cljs.core.async.t_cljs$core$async24742(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24748 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24748 = (function (f,ch,meta24749){
this.f = f;
this.ch = ch;
this.meta24749 = meta24749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24750,meta24749__$1){
var self__ = this;
var _24750__$1 = this;
return (new cljs.core.async.t_cljs$core$async24748(self__.f,self__.ch,meta24749__$1));
});

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24750){
var self__ = this;
var _24750__$1 = this;
return self__.meta24749;
});

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24749","meta24749",-951873875,null)], null);
});

cljs.core.async.t_cljs$core$async24748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24748";

cljs.core.async.t_cljs$core$async24748.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24748");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24748.
 */
cljs.core.async.__GT_t_cljs$core$async24748 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24748(f__$1,ch__$1,meta24749){
return (new cljs.core.async.t_cljs$core$async24748(f__$1,ch__$1,meta24749));
});

}

return (new cljs.core.async.t_cljs$core$async24748(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24751 = (function (p,ch,meta24752){
this.p = p;
this.ch = ch;
this.meta24752 = meta24752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24753,meta24752__$1){
var self__ = this;
var _24753__$1 = this;
return (new cljs.core.async.t_cljs$core$async24751(self__.p,self__.ch,meta24752__$1));
});

cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24753){
var self__ = this;
var _24753__$1 = this;
return self__.meta24752;
});

cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24751.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24752","meta24752",-1516728639,null)], null);
});

cljs.core.async.t_cljs$core$async24751.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24751";

cljs.core.async.t_cljs$core$async24751.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24751");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24751.
 */
cljs.core.async.__GT_t_cljs$core$async24751 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24751(p__$1,ch__$1,meta24752){
return (new cljs.core.async.t_cljs$core$async24751(p__$1,ch__$1,meta24752));
});

}

return (new cljs.core.async.t_cljs$core$async24751(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24755 = arguments.length;
switch (G__24755) {
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
var c__23256__auto___24795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23256__auto___24795,out){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (c__23256__auto___24795,out){
return (function (state_24776){
var state_val_24777 = (state_24776[(1)]);
if((state_val_24777 === (7))){
var inst_24772 = (state_24776[(2)]);
var state_24776__$1 = state_24776;
var statearr_24778_24796 = state_24776__$1;
(statearr_24778_24796[(2)] = inst_24772);

(statearr_24778_24796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24777 === (1))){
var state_24776__$1 = state_24776;
var statearr_24779_24797 = state_24776__$1;
(statearr_24779_24797[(2)] = null);

(statearr_24779_24797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24777 === (4))){
var inst_24758 = (state_24776[(7)]);
var inst_24758__$1 = (state_24776[(2)]);
var inst_24759 = (inst_24758__$1 == null);
var state_24776__$1 = (function (){var statearr_24780 = state_24776;
(statearr_24780[(7)] = inst_24758__$1);

return statearr_24780;
})();
if(cljs.core.truth_(inst_24759)){
var statearr_24781_24798 = state_24776__$1;
(statearr_24781_24798[(1)] = (5));

} else {
var statearr_24782_24799 = state_24776__$1;
(statearr_24782_24799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24777 === (6))){
var inst_24758 = (state_24776[(7)]);
var inst_24763 = p.call(null,inst_24758);
var state_24776__$1 = state_24776;
if(cljs.core.truth_(inst_24763)){
var statearr_24783_24800 = state_24776__$1;
(statearr_24783_24800[(1)] = (8));

} else {
var statearr_24784_24801 = state_24776__$1;
(statearr_24784_24801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24777 === (3))){
var inst_24774 = (state_24776[(2)]);
var state_24776__$1 = state_24776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24776__$1,inst_24774);
} else {
if((state_val_24777 === (2))){
var state_24776__$1 = state_24776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24776__$1,(4),ch);
} else {
if((state_val_24777 === (11))){
var inst_24766 = (state_24776[(2)]);
var state_24776__$1 = state_24776;
var statearr_24785_24802 = state_24776__$1;
(statearr_24785_24802[(2)] = inst_24766);

(statearr_24785_24802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24777 === (9))){
var state_24776__$1 = state_24776;
var statearr_24786_24803 = state_24776__$1;
(statearr_24786_24803[(2)] = null);

(statearr_24786_24803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24777 === (5))){
var inst_24761 = cljs.core.async.close_BANG_.call(null,out);
var state_24776__$1 = state_24776;
var statearr_24787_24804 = state_24776__$1;
(statearr_24787_24804[(2)] = inst_24761);

(statearr_24787_24804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24777 === (10))){
var inst_24769 = (state_24776[(2)]);
var state_24776__$1 = (function (){var statearr_24788 = state_24776;
(statearr_24788[(8)] = inst_24769);

return statearr_24788;
})();
var statearr_24789_24805 = state_24776__$1;
(statearr_24789_24805[(2)] = null);

(statearr_24789_24805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24777 === (8))){
var inst_24758 = (state_24776[(7)]);
var state_24776__$1 = state_24776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24776__$1,(11),out,inst_24758);
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
});})(c__23256__auto___24795,out))
;
return ((function (switch__23161__auto__,c__23256__auto___24795,out){
return (function() {
var cljs$core$async$state_machine__23162__auto__ = null;
var cljs$core$async$state_machine__23162__auto____0 = (function (){
var statearr_24790 = [null,null,null,null,null,null,null,null,null];
(statearr_24790[(0)] = cljs$core$async$state_machine__23162__auto__);

(statearr_24790[(1)] = (1));

return statearr_24790;
});
var cljs$core$async$state_machine__23162__auto____1 = (function (state_24776){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_24776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e24791){if((e24791 instanceof Object)){
var ex__23165__auto__ = e24791;
var statearr_24792_24806 = state_24776;
(statearr_24792_24806[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24807 = state_24776;
state_24776 = G__24807;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$state_machine__23162__auto__ = function(state_24776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23162__auto____1.call(this,state_24776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23162__auto____0;
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23162__auto____1;
return cljs$core$async$state_machine__23162__auto__;
})()
;})(switch__23161__auto__,c__23256__auto___24795,out))
})();
var state__23258__auto__ = (function (){var statearr_24793 = f__23257__auto__.call(null);
(statearr_24793[(6)] = c__23256__auto___24795);

return statearr_24793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(c__23256__auto___24795,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24809 = arguments.length;
switch (G__24809) {
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
var c__23256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23256__auto__){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (c__23256__auto__){
return (function (state_24872){
var state_val_24873 = (state_24872[(1)]);
if((state_val_24873 === (7))){
var inst_24868 = (state_24872[(2)]);
var state_24872__$1 = state_24872;
var statearr_24874_24912 = state_24872__$1;
(statearr_24874_24912[(2)] = inst_24868);

(statearr_24874_24912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (20))){
var inst_24838 = (state_24872[(7)]);
var inst_24849 = (state_24872[(2)]);
var inst_24850 = cljs.core.next.call(null,inst_24838);
var inst_24824 = inst_24850;
var inst_24825 = null;
var inst_24826 = (0);
var inst_24827 = (0);
var state_24872__$1 = (function (){var statearr_24875 = state_24872;
(statearr_24875[(8)] = inst_24827);

(statearr_24875[(9)] = inst_24825);

(statearr_24875[(10)] = inst_24826);

(statearr_24875[(11)] = inst_24824);

(statearr_24875[(12)] = inst_24849);

return statearr_24875;
})();
var statearr_24876_24913 = state_24872__$1;
(statearr_24876_24913[(2)] = null);

(statearr_24876_24913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (1))){
var state_24872__$1 = state_24872;
var statearr_24877_24914 = state_24872__$1;
(statearr_24877_24914[(2)] = null);

(statearr_24877_24914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (4))){
var inst_24813 = (state_24872[(13)]);
var inst_24813__$1 = (state_24872[(2)]);
var inst_24814 = (inst_24813__$1 == null);
var state_24872__$1 = (function (){var statearr_24878 = state_24872;
(statearr_24878[(13)] = inst_24813__$1);

return statearr_24878;
})();
if(cljs.core.truth_(inst_24814)){
var statearr_24879_24915 = state_24872__$1;
(statearr_24879_24915[(1)] = (5));

} else {
var statearr_24880_24916 = state_24872__$1;
(statearr_24880_24916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (15))){
var state_24872__$1 = state_24872;
var statearr_24884_24917 = state_24872__$1;
(statearr_24884_24917[(2)] = null);

(statearr_24884_24917[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (21))){
var state_24872__$1 = state_24872;
var statearr_24885_24918 = state_24872__$1;
(statearr_24885_24918[(2)] = null);

(statearr_24885_24918[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (13))){
var inst_24827 = (state_24872[(8)]);
var inst_24825 = (state_24872[(9)]);
var inst_24826 = (state_24872[(10)]);
var inst_24824 = (state_24872[(11)]);
var inst_24834 = (state_24872[(2)]);
var inst_24835 = (inst_24827 + (1));
var tmp24881 = inst_24825;
var tmp24882 = inst_24826;
var tmp24883 = inst_24824;
var inst_24824__$1 = tmp24883;
var inst_24825__$1 = tmp24881;
var inst_24826__$1 = tmp24882;
var inst_24827__$1 = inst_24835;
var state_24872__$1 = (function (){var statearr_24886 = state_24872;
(statearr_24886[(8)] = inst_24827__$1);

(statearr_24886[(9)] = inst_24825__$1);

(statearr_24886[(10)] = inst_24826__$1);

(statearr_24886[(11)] = inst_24824__$1);

(statearr_24886[(14)] = inst_24834);

return statearr_24886;
})();
var statearr_24887_24919 = state_24872__$1;
(statearr_24887_24919[(2)] = null);

(statearr_24887_24919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (22))){
var state_24872__$1 = state_24872;
var statearr_24888_24920 = state_24872__$1;
(statearr_24888_24920[(2)] = null);

(statearr_24888_24920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (6))){
var inst_24813 = (state_24872[(13)]);
var inst_24822 = f.call(null,inst_24813);
var inst_24823 = cljs.core.seq.call(null,inst_24822);
var inst_24824 = inst_24823;
var inst_24825 = null;
var inst_24826 = (0);
var inst_24827 = (0);
var state_24872__$1 = (function (){var statearr_24889 = state_24872;
(statearr_24889[(8)] = inst_24827);

(statearr_24889[(9)] = inst_24825);

(statearr_24889[(10)] = inst_24826);

(statearr_24889[(11)] = inst_24824);

return statearr_24889;
})();
var statearr_24890_24921 = state_24872__$1;
(statearr_24890_24921[(2)] = null);

(statearr_24890_24921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (17))){
var inst_24838 = (state_24872[(7)]);
var inst_24842 = cljs.core.chunk_first.call(null,inst_24838);
var inst_24843 = cljs.core.chunk_rest.call(null,inst_24838);
var inst_24844 = cljs.core.count.call(null,inst_24842);
var inst_24824 = inst_24843;
var inst_24825 = inst_24842;
var inst_24826 = inst_24844;
var inst_24827 = (0);
var state_24872__$1 = (function (){var statearr_24891 = state_24872;
(statearr_24891[(8)] = inst_24827);

(statearr_24891[(9)] = inst_24825);

(statearr_24891[(10)] = inst_24826);

(statearr_24891[(11)] = inst_24824);

return statearr_24891;
})();
var statearr_24892_24922 = state_24872__$1;
(statearr_24892_24922[(2)] = null);

(statearr_24892_24922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (3))){
var inst_24870 = (state_24872[(2)]);
var state_24872__$1 = state_24872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24872__$1,inst_24870);
} else {
if((state_val_24873 === (12))){
var inst_24858 = (state_24872[(2)]);
var state_24872__$1 = state_24872;
var statearr_24893_24923 = state_24872__$1;
(statearr_24893_24923[(2)] = inst_24858);

(statearr_24893_24923[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (2))){
var state_24872__$1 = state_24872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24872__$1,(4),in$);
} else {
if((state_val_24873 === (23))){
var inst_24866 = (state_24872[(2)]);
var state_24872__$1 = state_24872;
var statearr_24894_24924 = state_24872__$1;
(statearr_24894_24924[(2)] = inst_24866);

(statearr_24894_24924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (19))){
var inst_24853 = (state_24872[(2)]);
var state_24872__$1 = state_24872;
var statearr_24895_24925 = state_24872__$1;
(statearr_24895_24925[(2)] = inst_24853);

(statearr_24895_24925[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (11))){
var inst_24824 = (state_24872[(11)]);
var inst_24838 = (state_24872[(7)]);
var inst_24838__$1 = cljs.core.seq.call(null,inst_24824);
var state_24872__$1 = (function (){var statearr_24896 = state_24872;
(statearr_24896[(7)] = inst_24838__$1);

return statearr_24896;
})();
if(inst_24838__$1){
var statearr_24897_24926 = state_24872__$1;
(statearr_24897_24926[(1)] = (14));

} else {
var statearr_24898_24927 = state_24872__$1;
(statearr_24898_24927[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (9))){
var inst_24860 = (state_24872[(2)]);
var inst_24861 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24872__$1 = (function (){var statearr_24899 = state_24872;
(statearr_24899[(15)] = inst_24860);

return statearr_24899;
})();
if(cljs.core.truth_(inst_24861)){
var statearr_24900_24928 = state_24872__$1;
(statearr_24900_24928[(1)] = (21));

} else {
var statearr_24901_24929 = state_24872__$1;
(statearr_24901_24929[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (5))){
var inst_24816 = cljs.core.async.close_BANG_.call(null,out);
var state_24872__$1 = state_24872;
var statearr_24902_24930 = state_24872__$1;
(statearr_24902_24930[(2)] = inst_24816);

(statearr_24902_24930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (14))){
var inst_24838 = (state_24872[(7)]);
var inst_24840 = cljs.core.chunked_seq_QMARK_.call(null,inst_24838);
var state_24872__$1 = state_24872;
if(inst_24840){
var statearr_24903_24931 = state_24872__$1;
(statearr_24903_24931[(1)] = (17));

} else {
var statearr_24904_24932 = state_24872__$1;
(statearr_24904_24932[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (16))){
var inst_24856 = (state_24872[(2)]);
var state_24872__$1 = state_24872;
var statearr_24905_24933 = state_24872__$1;
(statearr_24905_24933[(2)] = inst_24856);

(statearr_24905_24933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24873 === (10))){
var inst_24827 = (state_24872[(8)]);
var inst_24825 = (state_24872[(9)]);
var inst_24832 = cljs.core._nth.call(null,inst_24825,inst_24827);
var state_24872__$1 = state_24872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24872__$1,(13),out,inst_24832);
} else {
if((state_val_24873 === (18))){
var inst_24838 = (state_24872[(7)]);
var inst_24847 = cljs.core.first.call(null,inst_24838);
var state_24872__$1 = state_24872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24872__$1,(20),out,inst_24847);
} else {
if((state_val_24873 === (8))){
var inst_24827 = (state_24872[(8)]);
var inst_24826 = (state_24872[(10)]);
var inst_24829 = (inst_24827 < inst_24826);
var inst_24830 = inst_24829;
var state_24872__$1 = state_24872;
if(cljs.core.truth_(inst_24830)){
var statearr_24906_24934 = state_24872__$1;
(statearr_24906_24934[(1)] = (10));

} else {
var statearr_24907_24935 = state_24872__$1;
(statearr_24907_24935[(1)] = (11));

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
});})(c__23256__auto__))
;
return ((function (switch__23161__auto__,c__23256__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23162__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23162__auto____0 = (function (){
var statearr_24908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24908[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23162__auto__);

(statearr_24908[(1)] = (1));

return statearr_24908;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23162__auto____1 = (function (state_24872){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_24872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e24909){if((e24909 instanceof Object)){
var ex__23165__auto__ = e24909;
var statearr_24910_24936 = state_24872;
(statearr_24910_24936[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24937 = state_24872;
state_24872 = G__24937;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23162__auto__ = function(state_24872){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23162__auto____1.call(this,state_24872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23162__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23162__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23162__auto__;
})()
;})(switch__23161__auto__,c__23256__auto__))
})();
var state__23258__auto__ = (function (){var statearr_24911 = f__23257__auto__.call(null);
(statearr_24911[(6)] = c__23256__auto__);

return statearr_24911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(c__23256__auto__))
);

return c__23256__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24939 = arguments.length;
switch (G__24939) {
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
var G__24942 = arguments.length;
switch (G__24942) {
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
var G__24945 = arguments.length;
switch (G__24945) {
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
var c__23256__auto___24992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23256__auto___24992,out){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (c__23256__auto___24992,out){
return (function (state_24969){
var state_val_24970 = (state_24969[(1)]);
if((state_val_24970 === (7))){
var inst_24964 = (state_24969[(2)]);
var state_24969__$1 = state_24969;
var statearr_24971_24993 = state_24969__$1;
(statearr_24971_24993[(2)] = inst_24964);

(statearr_24971_24993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24970 === (1))){
var inst_24946 = null;
var state_24969__$1 = (function (){var statearr_24972 = state_24969;
(statearr_24972[(7)] = inst_24946);

return statearr_24972;
})();
var statearr_24973_24994 = state_24969__$1;
(statearr_24973_24994[(2)] = null);

(statearr_24973_24994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24970 === (4))){
var inst_24949 = (state_24969[(8)]);
var inst_24949__$1 = (state_24969[(2)]);
var inst_24950 = (inst_24949__$1 == null);
var inst_24951 = cljs.core.not.call(null,inst_24950);
var state_24969__$1 = (function (){var statearr_24974 = state_24969;
(statearr_24974[(8)] = inst_24949__$1);

return statearr_24974;
})();
if(inst_24951){
var statearr_24975_24995 = state_24969__$1;
(statearr_24975_24995[(1)] = (5));

} else {
var statearr_24976_24996 = state_24969__$1;
(statearr_24976_24996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24970 === (6))){
var state_24969__$1 = state_24969;
var statearr_24977_24997 = state_24969__$1;
(statearr_24977_24997[(2)] = null);

(statearr_24977_24997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24970 === (3))){
var inst_24966 = (state_24969[(2)]);
var inst_24967 = cljs.core.async.close_BANG_.call(null,out);
var state_24969__$1 = (function (){var statearr_24978 = state_24969;
(statearr_24978[(9)] = inst_24966);

return statearr_24978;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24969__$1,inst_24967);
} else {
if((state_val_24970 === (2))){
var state_24969__$1 = state_24969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24969__$1,(4),ch);
} else {
if((state_val_24970 === (11))){
var inst_24949 = (state_24969[(8)]);
var inst_24958 = (state_24969[(2)]);
var inst_24946 = inst_24949;
var state_24969__$1 = (function (){var statearr_24979 = state_24969;
(statearr_24979[(7)] = inst_24946);

(statearr_24979[(10)] = inst_24958);

return statearr_24979;
})();
var statearr_24980_24998 = state_24969__$1;
(statearr_24980_24998[(2)] = null);

(statearr_24980_24998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24970 === (9))){
var inst_24949 = (state_24969[(8)]);
var state_24969__$1 = state_24969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24969__$1,(11),out,inst_24949);
} else {
if((state_val_24970 === (5))){
var inst_24946 = (state_24969[(7)]);
var inst_24949 = (state_24969[(8)]);
var inst_24953 = cljs.core._EQ_.call(null,inst_24949,inst_24946);
var state_24969__$1 = state_24969;
if(inst_24953){
var statearr_24982_24999 = state_24969__$1;
(statearr_24982_24999[(1)] = (8));

} else {
var statearr_24983_25000 = state_24969__$1;
(statearr_24983_25000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24970 === (10))){
var inst_24961 = (state_24969[(2)]);
var state_24969__$1 = state_24969;
var statearr_24984_25001 = state_24969__$1;
(statearr_24984_25001[(2)] = inst_24961);

(statearr_24984_25001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24970 === (8))){
var inst_24946 = (state_24969[(7)]);
var tmp24981 = inst_24946;
var inst_24946__$1 = tmp24981;
var state_24969__$1 = (function (){var statearr_24985 = state_24969;
(statearr_24985[(7)] = inst_24946__$1);

return statearr_24985;
})();
var statearr_24986_25002 = state_24969__$1;
(statearr_24986_25002[(2)] = null);

(statearr_24986_25002[(1)] = (2));


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
});})(c__23256__auto___24992,out))
;
return ((function (switch__23161__auto__,c__23256__auto___24992,out){
return (function() {
var cljs$core$async$state_machine__23162__auto__ = null;
var cljs$core$async$state_machine__23162__auto____0 = (function (){
var statearr_24987 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24987[(0)] = cljs$core$async$state_machine__23162__auto__);

(statearr_24987[(1)] = (1));

return statearr_24987;
});
var cljs$core$async$state_machine__23162__auto____1 = (function (state_24969){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_24969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e24988){if((e24988 instanceof Object)){
var ex__23165__auto__ = e24988;
var statearr_24989_25003 = state_24969;
(statearr_24989_25003[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25004 = state_24969;
state_24969 = G__25004;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$state_machine__23162__auto__ = function(state_24969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23162__auto____1.call(this,state_24969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23162__auto____0;
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23162__auto____1;
return cljs$core$async$state_machine__23162__auto__;
})()
;})(switch__23161__auto__,c__23256__auto___24992,out))
})();
var state__23258__auto__ = (function (){var statearr_24990 = f__23257__auto__.call(null);
(statearr_24990[(6)] = c__23256__auto___24992);

return statearr_24990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(c__23256__auto___24992,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25006 = arguments.length;
switch (G__25006) {
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
var c__23256__auto___25072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23256__auto___25072,out){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (c__23256__auto___25072,out){
return (function (state_25044){
var state_val_25045 = (state_25044[(1)]);
if((state_val_25045 === (7))){
var inst_25040 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
var statearr_25046_25073 = state_25044__$1;
(statearr_25046_25073[(2)] = inst_25040);

(statearr_25046_25073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (1))){
var inst_25007 = (new Array(n));
var inst_25008 = inst_25007;
var inst_25009 = (0);
var state_25044__$1 = (function (){var statearr_25047 = state_25044;
(statearr_25047[(7)] = inst_25008);

(statearr_25047[(8)] = inst_25009);

return statearr_25047;
})();
var statearr_25048_25074 = state_25044__$1;
(statearr_25048_25074[(2)] = null);

(statearr_25048_25074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (4))){
var inst_25012 = (state_25044[(9)]);
var inst_25012__$1 = (state_25044[(2)]);
var inst_25013 = (inst_25012__$1 == null);
var inst_25014 = cljs.core.not.call(null,inst_25013);
var state_25044__$1 = (function (){var statearr_25049 = state_25044;
(statearr_25049[(9)] = inst_25012__$1);

return statearr_25049;
})();
if(inst_25014){
var statearr_25050_25075 = state_25044__$1;
(statearr_25050_25075[(1)] = (5));

} else {
var statearr_25051_25076 = state_25044__$1;
(statearr_25051_25076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (15))){
var inst_25034 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
var statearr_25052_25077 = state_25044__$1;
(statearr_25052_25077[(2)] = inst_25034);

(statearr_25052_25077[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (13))){
var state_25044__$1 = state_25044;
var statearr_25053_25078 = state_25044__$1;
(statearr_25053_25078[(2)] = null);

(statearr_25053_25078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (6))){
var inst_25009 = (state_25044[(8)]);
var inst_25030 = (inst_25009 > (0));
var state_25044__$1 = state_25044;
if(cljs.core.truth_(inst_25030)){
var statearr_25054_25079 = state_25044__$1;
(statearr_25054_25079[(1)] = (12));

} else {
var statearr_25055_25080 = state_25044__$1;
(statearr_25055_25080[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (3))){
var inst_25042 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25044__$1,inst_25042);
} else {
if((state_val_25045 === (12))){
var inst_25008 = (state_25044[(7)]);
var inst_25032 = cljs.core.vec.call(null,inst_25008);
var state_25044__$1 = state_25044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25044__$1,(15),out,inst_25032);
} else {
if((state_val_25045 === (2))){
var state_25044__$1 = state_25044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25044__$1,(4),ch);
} else {
if((state_val_25045 === (11))){
var inst_25024 = (state_25044[(2)]);
var inst_25025 = (new Array(n));
var inst_25008 = inst_25025;
var inst_25009 = (0);
var state_25044__$1 = (function (){var statearr_25056 = state_25044;
(statearr_25056[(10)] = inst_25024);

(statearr_25056[(7)] = inst_25008);

(statearr_25056[(8)] = inst_25009);

return statearr_25056;
})();
var statearr_25057_25081 = state_25044__$1;
(statearr_25057_25081[(2)] = null);

(statearr_25057_25081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (9))){
var inst_25008 = (state_25044[(7)]);
var inst_25022 = cljs.core.vec.call(null,inst_25008);
var state_25044__$1 = state_25044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25044__$1,(11),out,inst_25022);
} else {
if((state_val_25045 === (5))){
var inst_25008 = (state_25044[(7)]);
var inst_25017 = (state_25044[(11)]);
var inst_25009 = (state_25044[(8)]);
var inst_25012 = (state_25044[(9)]);
var inst_25016 = (inst_25008[inst_25009] = inst_25012);
var inst_25017__$1 = (inst_25009 + (1));
var inst_25018 = (inst_25017__$1 < n);
var state_25044__$1 = (function (){var statearr_25058 = state_25044;
(statearr_25058[(12)] = inst_25016);

(statearr_25058[(11)] = inst_25017__$1);

return statearr_25058;
})();
if(cljs.core.truth_(inst_25018)){
var statearr_25059_25082 = state_25044__$1;
(statearr_25059_25082[(1)] = (8));

} else {
var statearr_25060_25083 = state_25044__$1;
(statearr_25060_25083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (14))){
var inst_25037 = (state_25044[(2)]);
var inst_25038 = cljs.core.async.close_BANG_.call(null,out);
var state_25044__$1 = (function (){var statearr_25062 = state_25044;
(statearr_25062[(13)] = inst_25037);

return statearr_25062;
})();
var statearr_25063_25084 = state_25044__$1;
(statearr_25063_25084[(2)] = inst_25038);

(statearr_25063_25084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (10))){
var inst_25028 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
var statearr_25064_25085 = state_25044__$1;
(statearr_25064_25085[(2)] = inst_25028);

(statearr_25064_25085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (8))){
var inst_25008 = (state_25044[(7)]);
var inst_25017 = (state_25044[(11)]);
var tmp25061 = inst_25008;
var inst_25008__$1 = tmp25061;
var inst_25009 = inst_25017;
var state_25044__$1 = (function (){var statearr_25065 = state_25044;
(statearr_25065[(7)] = inst_25008__$1);

(statearr_25065[(8)] = inst_25009);

return statearr_25065;
})();
var statearr_25066_25086 = state_25044__$1;
(statearr_25066_25086[(2)] = null);

(statearr_25066_25086[(1)] = (2));


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
});})(c__23256__auto___25072,out))
;
return ((function (switch__23161__auto__,c__23256__auto___25072,out){
return (function() {
var cljs$core$async$state_machine__23162__auto__ = null;
var cljs$core$async$state_machine__23162__auto____0 = (function (){
var statearr_25067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25067[(0)] = cljs$core$async$state_machine__23162__auto__);

(statearr_25067[(1)] = (1));

return statearr_25067;
});
var cljs$core$async$state_machine__23162__auto____1 = (function (state_25044){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_25044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e25068){if((e25068 instanceof Object)){
var ex__23165__auto__ = e25068;
var statearr_25069_25087 = state_25044;
(statearr_25069_25087[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25088 = state_25044;
state_25044 = G__25088;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$state_machine__23162__auto__ = function(state_25044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23162__auto____1.call(this,state_25044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23162__auto____0;
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23162__auto____1;
return cljs$core$async$state_machine__23162__auto__;
})()
;})(switch__23161__auto__,c__23256__auto___25072,out))
})();
var state__23258__auto__ = (function (){var statearr_25070 = f__23257__auto__.call(null);
(statearr_25070[(6)] = c__23256__auto___25072);

return statearr_25070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(c__23256__auto___25072,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25090 = arguments.length;
switch (G__25090) {
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
var c__23256__auto___25160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23256__auto___25160,out){
return (function (){
var f__23257__auto__ = (function (){var switch__23161__auto__ = ((function (c__23256__auto___25160,out){
return (function (state_25132){
var state_val_25133 = (state_25132[(1)]);
if((state_val_25133 === (7))){
var inst_25128 = (state_25132[(2)]);
var state_25132__$1 = state_25132;
var statearr_25134_25161 = state_25132__$1;
(statearr_25134_25161[(2)] = inst_25128);

(statearr_25134_25161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (1))){
var inst_25091 = [];
var inst_25092 = inst_25091;
var inst_25093 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25132__$1 = (function (){var statearr_25135 = state_25132;
(statearr_25135[(7)] = inst_25092);

(statearr_25135[(8)] = inst_25093);

return statearr_25135;
})();
var statearr_25136_25162 = state_25132__$1;
(statearr_25136_25162[(2)] = null);

(statearr_25136_25162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (4))){
var inst_25096 = (state_25132[(9)]);
var inst_25096__$1 = (state_25132[(2)]);
var inst_25097 = (inst_25096__$1 == null);
var inst_25098 = cljs.core.not.call(null,inst_25097);
var state_25132__$1 = (function (){var statearr_25137 = state_25132;
(statearr_25137[(9)] = inst_25096__$1);

return statearr_25137;
})();
if(inst_25098){
var statearr_25138_25163 = state_25132__$1;
(statearr_25138_25163[(1)] = (5));

} else {
var statearr_25139_25164 = state_25132__$1;
(statearr_25139_25164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (15))){
var inst_25122 = (state_25132[(2)]);
var state_25132__$1 = state_25132;
var statearr_25140_25165 = state_25132__$1;
(statearr_25140_25165[(2)] = inst_25122);

(statearr_25140_25165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (13))){
var state_25132__$1 = state_25132;
var statearr_25141_25166 = state_25132__$1;
(statearr_25141_25166[(2)] = null);

(statearr_25141_25166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (6))){
var inst_25092 = (state_25132[(7)]);
var inst_25117 = inst_25092.length;
var inst_25118 = (inst_25117 > (0));
var state_25132__$1 = state_25132;
if(cljs.core.truth_(inst_25118)){
var statearr_25142_25167 = state_25132__$1;
(statearr_25142_25167[(1)] = (12));

} else {
var statearr_25143_25168 = state_25132__$1;
(statearr_25143_25168[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (3))){
var inst_25130 = (state_25132[(2)]);
var state_25132__$1 = state_25132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25132__$1,inst_25130);
} else {
if((state_val_25133 === (12))){
var inst_25092 = (state_25132[(7)]);
var inst_25120 = cljs.core.vec.call(null,inst_25092);
var state_25132__$1 = state_25132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25132__$1,(15),out,inst_25120);
} else {
if((state_val_25133 === (2))){
var state_25132__$1 = state_25132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25132__$1,(4),ch);
} else {
if((state_val_25133 === (11))){
var inst_25100 = (state_25132[(10)]);
var inst_25096 = (state_25132[(9)]);
var inst_25110 = (state_25132[(2)]);
var inst_25111 = [];
var inst_25112 = inst_25111.push(inst_25096);
var inst_25092 = inst_25111;
var inst_25093 = inst_25100;
var state_25132__$1 = (function (){var statearr_25144 = state_25132;
(statearr_25144[(7)] = inst_25092);

(statearr_25144[(11)] = inst_25112);

(statearr_25144[(8)] = inst_25093);

(statearr_25144[(12)] = inst_25110);

return statearr_25144;
})();
var statearr_25145_25169 = state_25132__$1;
(statearr_25145_25169[(2)] = null);

(statearr_25145_25169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (9))){
var inst_25092 = (state_25132[(7)]);
var inst_25108 = cljs.core.vec.call(null,inst_25092);
var state_25132__$1 = state_25132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25132__$1,(11),out,inst_25108);
} else {
if((state_val_25133 === (5))){
var inst_25093 = (state_25132[(8)]);
var inst_25100 = (state_25132[(10)]);
var inst_25096 = (state_25132[(9)]);
var inst_25100__$1 = f.call(null,inst_25096);
var inst_25101 = cljs.core._EQ_.call(null,inst_25100__$1,inst_25093);
var inst_25102 = cljs.core.keyword_identical_QMARK_.call(null,inst_25093,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25103 = ((inst_25101) || (inst_25102));
var state_25132__$1 = (function (){var statearr_25146 = state_25132;
(statearr_25146[(10)] = inst_25100__$1);

return statearr_25146;
})();
if(cljs.core.truth_(inst_25103)){
var statearr_25147_25170 = state_25132__$1;
(statearr_25147_25170[(1)] = (8));

} else {
var statearr_25148_25171 = state_25132__$1;
(statearr_25148_25171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (14))){
var inst_25125 = (state_25132[(2)]);
var inst_25126 = cljs.core.async.close_BANG_.call(null,out);
var state_25132__$1 = (function (){var statearr_25150 = state_25132;
(statearr_25150[(13)] = inst_25125);

return statearr_25150;
})();
var statearr_25151_25172 = state_25132__$1;
(statearr_25151_25172[(2)] = inst_25126);

(statearr_25151_25172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (10))){
var inst_25115 = (state_25132[(2)]);
var state_25132__$1 = state_25132;
var statearr_25152_25173 = state_25132__$1;
(statearr_25152_25173[(2)] = inst_25115);

(statearr_25152_25173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25133 === (8))){
var inst_25092 = (state_25132[(7)]);
var inst_25100 = (state_25132[(10)]);
var inst_25096 = (state_25132[(9)]);
var inst_25105 = inst_25092.push(inst_25096);
var tmp25149 = inst_25092;
var inst_25092__$1 = tmp25149;
var inst_25093 = inst_25100;
var state_25132__$1 = (function (){var statearr_25153 = state_25132;
(statearr_25153[(7)] = inst_25092__$1);

(statearr_25153[(8)] = inst_25093);

(statearr_25153[(14)] = inst_25105);

return statearr_25153;
})();
var statearr_25154_25174 = state_25132__$1;
(statearr_25154_25174[(2)] = null);

(statearr_25154_25174[(1)] = (2));


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
});})(c__23256__auto___25160,out))
;
return ((function (switch__23161__auto__,c__23256__auto___25160,out){
return (function() {
var cljs$core$async$state_machine__23162__auto__ = null;
var cljs$core$async$state_machine__23162__auto____0 = (function (){
var statearr_25155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25155[(0)] = cljs$core$async$state_machine__23162__auto__);

(statearr_25155[(1)] = (1));

return statearr_25155;
});
var cljs$core$async$state_machine__23162__auto____1 = (function (state_25132){
while(true){
var ret_value__23163__auto__ = (function (){try{while(true){
var result__23164__auto__ = switch__23161__auto__.call(null,state_25132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23164__auto__;
}
break;
}
}catch (e25156){if((e25156 instanceof Object)){
var ex__23165__auto__ = e25156;
var statearr_25157_25175 = state_25132;
(statearr_25157_25175[(5)] = ex__23165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25176 = state_25132;
state_25132 = G__25176;
continue;
} else {
return ret_value__23163__auto__;
}
break;
}
});
cljs$core$async$state_machine__23162__auto__ = function(state_25132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23162__auto____1.call(this,state_25132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23162__auto____0;
cljs$core$async$state_machine__23162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23162__auto____1;
return cljs$core$async$state_machine__23162__auto__;
})()
;})(switch__23161__auto__,c__23256__auto___25160,out))
})();
var state__23258__auto__ = (function (){var statearr_25158 = f__23257__auto__.call(null);
(statearr_25158[(6)] = c__23256__auto___25160);

return statearr_25158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23258__auto__);
});})(c__23256__auto___25160,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1542335224193
