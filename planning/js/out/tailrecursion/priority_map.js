// Compiled by ClojureScript 1.10.439 {}
goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.reader');

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.keyfn = keyfn;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.call(null,self__.item__GT_priority,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count.call(null,self__.item__GT_priority);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
var item = cljs.core.first.call(null,cljs.core.val.call(null,f));
if(cljs.core.truth_(self__.keyfn)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,cljs.core.key.call(null,f)], null);
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
var item_set = cljs.core.val.call(null,f);
var item = cljs.core.first.call(null,item_set);
var priority_key = cljs.core.key.call(null,f);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq.call(null,(function (){var iter__4434__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__22806(s__22807){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__22807__$1 = s__22807;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22807__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var vec__22812 = cljs.core.first.call(null,xs__6012__auto__);
var priority = cljs.core.nth.call(null,vec__22812,(0),null);
var item_set = cljs.core.nth.call(null,vec__22812,(1),null);
var iterys__4430__auto__ = ((function (s__22807__$1,vec__22812,priority,item_set,xs__6012__auto__,temp__5457__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__22806_$_iter__22808(s__22809){
return (new cljs.core.LazySeq(null,((function (s__22807__$1,vec__22812,priority,item_set,xs__6012__auto__,temp__5457__auto__,coll__$1){
return (function (){
var s__22809__$1 = s__22809;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22809__$1);
if(temp__5457__auto____$1){
var s__22809__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22809__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__22809__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__22811 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__22810 = (0);
while(true){
if((i__22810 < size__4433__auto__)){
var item = cljs.core._nth.call(null,c__4432__auto__,i__22810);
cljs.core.chunk_append.call(null,b__22811,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__22860 = (i__22810 + (1));
i__22810 = G__22860;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22811),tailrecursion$priority_map$iter__22806_$_iter__22808.call(null,cljs.core.chunk_rest.call(null,s__22809__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22811),null);
}
} else {
var item = cljs.core.first.call(null,s__22809__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__22806_$_iter__22808.call(null,cljs.core.rest.call(null,s__22809__$2)));
}
} else {
return null;
}
break;
}
});})(s__22807__$1,vec__22812,priority,item_set,xs__6012__auto__,temp__5457__auto__,coll__$1))
,null,null));
});})(s__22807__$1,vec__22812,priority,item_set,xs__6012__auto__,temp__5457__auto__,coll__$1))
;
var fs__4431__auto__ = cljs.core.seq.call(null,iterys__4430__auto__.call(null,item_set));
if(fs__4431__auto__){
return cljs.core.concat.call(null,fs__4431__auto__,tailrecursion$priority_map$iter__22806.call(null,cljs.core.rest.call(null,s__22807__$1)));
} else {
var G__22861 = cljs.core.rest.call(null,s__22807__$1);
s__22807__$1 = G__22861;
continue;
}
} else {
return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter__4434__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__4434__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__22815(s__22816){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__22816__$1 = s__22816;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22816__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var vec__22821 = cljs.core.first.call(null,xs__6012__auto__);
var priority = cljs.core.nth.call(null,vec__22821,(0),null);
var item_set = cljs.core.nth.call(null,vec__22821,(1),null);
var iterys__4430__auto__ = ((function (s__22816__$1,vec__22821,priority,item_set,xs__6012__auto__,temp__5457__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__22815_$_iter__22817(s__22818){
return (new cljs.core.LazySeq(null,((function (s__22816__$1,vec__22821,priority,item_set,xs__6012__auto__,temp__5457__auto__,coll__$1){
return (function (){
var s__22818__$1 = s__22818;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22818__$1);
if(temp__5457__auto____$1){
var s__22818__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22818__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__22818__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__22820 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__22819 = (0);
while(true){
if((i__22819 < size__4433__auto__)){
var item = cljs.core._nth.call(null,c__4432__auto__,i__22819);
cljs.core.chunk_append.call(null,b__22820,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__22862 = (i__22819 + (1));
i__22819 = G__22862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22820),tailrecursion$priority_map$iter__22815_$_iter__22817.call(null,cljs.core.chunk_rest.call(null,s__22818__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22820),null);
}
} else {
var item = cljs.core.first.call(null,s__22818__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__22815_$_iter__22817.call(null,cljs.core.rest.call(null,s__22818__$2)));
}
} else {
return null;
}
break;
}
});})(s__22816__$1,vec__22821,priority,item_set,xs__6012__auto__,temp__5457__auto__,coll__$1))
,null,null));
});})(s__22816__$1,vec__22821,priority,item_set,xs__6012__auto__,temp__5457__auto__,coll__$1))
;
var fs__4431__auto__ = cljs.core.seq.call(null,iterys__4430__auto__.call(null,item_set));
if(fs__4431__auto__){
return cljs.core.concat.call(null,fs__4431__auto__,tailrecursion$priority_map$iter__22815.call(null,cljs.core.rest.call(null,s__22816__$1)));
} else {
var G__22863 = cljs.core.rest.call(null,s__22816__$1);
s__22816__$1 = G__22863;
continue;
}
} else {
return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter__4434__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = cljs.core.hash_unordered_coll.call(null,this$__$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv.call(null,self__.item__GT_priority,other);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517));
if(cljs.core._EQ_.call(null,priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517))){
return this$__$1;
} else {
var priority_key = self__.keyfn.call(null,priority);
var item_set = self__.priority__GT_set_of_items.call(null,priority_key);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__5455__auto__ = cljs.core.get.call(null,self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__5455__auto__)){
var current_priority = temp__5455__auto__;
if(cljs.core._EQ_.call(null,current_priority,priority)){
return this$__$1;
} else {
var priority_key = self__.keyfn.call(null,priority);
var current_priority_key = self__.keyfn.call(null,current_priority);
var item_set = cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority_key);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,current_priority_key),priority_key,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,current_priority_key,cljs.core.disj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority_key),item),priority_key,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}
} else {
var priority_key = self__.keyfn.call(null,priority);
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_.call(null,self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq.call(null,(function (){var iter__4434__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__22824(s__22825){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__22825__$1 = s__22825;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22825__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var vec__22830 = cljs.core.first.call(null,xs__6012__auto__);
var priority = cljs.core.nth.call(null,vec__22830,(0),null);
var item_set = cljs.core.nth.call(null,vec__22830,(1),null);
var iterys__4430__auto__ = ((function (s__22825__$1,vec__22830,priority,item_set,xs__6012__auto__,temp__5457__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__22824_$_iter__22826(s__22827){
return (new cljs.core.LazySeq(null,((function (s__22825__$1,vec__22830,priority,item_set,xs__6012__auto__,temp__5457__auto__,this$__$1){
return (function (){
var s__22827__$1 = s__22827;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22827__$1);
if(temp__5457__auto____$1){
var s__22827__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22827__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__22827__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__22829 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__22828 = (0);
while(true){
if((i__22828 < size__4433__auto__)){
var item = cljs.core._nth.call(null,c__4432__auto__,i__22828);
cljs.core.chunk_append.call(null,b__22829,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__22864 = (i__22828 + (1));
i__22828 = G__22864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22829),tailrecursion$priority_map$iter__22824_$_iter__22826.call(null,cljs.core.chunk_rest.call(null,s__22827__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22829),null);
}
} else {
var item = cljs.core.first.call(null,s__22827__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__22824_$_iter__22826.call(null,cljs.core.rest.call(null,s__22827__$2)));
}
} else {
return null;
}
break;
}
});})(s__22825__$1,vec__22830,priority,item_set,xs__6012__auto__,temp__5457__auto__,this$__$1))
,null,null));
});})(s__22825__$1,vec__22830,priority,item_set,xs__6012__auto__,temp__5457__auto__,this$__$1))
;
var fs__4431__auto__ = cljs.core.seq.call(null,iterys__4430__auto__.call(null,item_set));
if(fs__4431__auto__){
return cljs.core.concat.call(null,fs__4431__auto__,tailrecursion$priority_map$iter__22824.call(null,cljs.core.rest.call(null,s__22825__$1)));
} else {
var G__22865 = cljs.core.rest.call(null,s__22825__$1);
s__22825__$1 = G__22865;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4434__auto__.call(null,self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__4434__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__22833(s__22834){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__22834__$1 = s__22834;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22834__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var vec__22839 = cljs.core.first.call(null,xs__6012__auto__);
var priority = cljs.core.nth.call(null,vec__22839,(0),null);
var item_set = cljs.core.nth.call(null,vec__22839,(1),null);
var iterys__4430__auto__ = ((function (s__22834__$1,vec__22839,priority,item_set,xs__6012__auto__,temp__5457__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__22833_$_iter__22835(s__22836){
return (new cljs.core.LazySeq(null,((function (s__22834__$1,vec__22839,priority,item_set,xs__6012__auto__,temp__5457__auto__,this$__$1){
return (function (){
var s__22836__$1 = s__22836;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22836__$1);
if(temp__5457__auto____$1){
var s__22836__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22836__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__22836__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__22838 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__22837 = (0);
while(true){
if((i__22837 < size__4433__auto__)){
var item = cljs.core._nth.call(null,c__4432__auto__,i__22837);
cljs.core.chunk_append.call(null,b__22838,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__22866 = (i__22837 + (1));
i__22837 = G__22866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22838),tailrecursion$priority_map$iter__22833_$_iter__22835.call(null,cljs.core.chunk_rest.call(null,s__22836__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22838),null);
}
} else {
var item = cljs.core.first.call(null,s__22836__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__22833_$_iter__22835.call(null,cljs.core.rest.call(null,s__22836__$2)));
}
} else {
return null;
}
break;
}
});})(s__22834__$1,vec__22839,priority,item_set,xs__6012__auto__,temp__5457__auto__,this$__$1))
,null,null));
});})(s__22834__$1,vec__22839,priority,item_set,xs__6012__auto__,temp__5457__auto__,this$__$1))
;
var fs__4431__auto__ = cljs.core.seq.call(null,iterys__4430__auto__.call(null,item_set));
if(fs__4431__auto__){
return cljs.core.concat.call(null,fs__4431__auto__,tailrecursion$priority_map$iter__22833.call(null,cljs.core.rest.call(null,s__22834__$1)));
} else {
var G__22867 = cljs.core.rest.call(null,s__22834__$1);
s__22834__$1 = G__22867;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4434__auto__.call(null,self__.priority__GT_set_of_items);
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.keyfn,self__.__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry)){
return cljs.core._assoc.call(null,this$__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this$__$1,entry);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__22868 = null;
var G__22868__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__22868__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__22868 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__22868__2.call(this,self__,item);
case 3:
return G__22868__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__22868.cljs$core$IFn$_invoke$arity$2 = G__22868__2;
G__22868.cljs$core$IFn$_invoke$arity$3 = G__22868__3;
return G__22868;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args22805){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args22805)));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.call(null,self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.call(null,self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq.call(null,(function (){var iter__4434__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__22842(s__22843){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__22843__$1 = s__22843;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22843__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var vec__22848 = cljs.core.first.call(null,xs__6012__auto__);
var priority = cljs.core.nth.call(null,vec__22848,(0),null);
var item_set = cljs.core.nth.call(null,vec__22848,(1),null);
var iterys__4430__auto__ = ((function (s__22843__$1,vec__22848,priority,item_set,xs__6012__auto__,temp__5457__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__22842_$_iter__22844(s__22845){
return (new cljs.core.LazySeq(null,((function (s__22843__$1,vec__22848,priority,item_set,xs__6012__auto__,temp__5457__auto__,sets,this$__$1){
return (function (){
var s__22845__$1 = s__22845;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22845__$1);
if(temp__5457__auto____$1){
var s__22845__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22845__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__22845__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__22847 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__22846 = (0);
while(true){
if((i__22846 < size__4433__auto__)){
var item = cljs.core._nth.call(null,c__4432__auto__,i__22846);
cljs.core.chunk_append.call(null,b__22847,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__22869 = (i__22846 + (1));
i__22846 = G__22869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22847),tailrecursion$priority_map$iter__22842_$_iter__22844.call(null,cljs.core.chunk_rest.call(null,s__22845__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22847),null);
}
} else {
var item = cljs.core.first.call(null,s__22845__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__22842_$_iter__22844.call(null,cljs.core.rest.call(null,s__22845__$2)));
}
} else {
return null;
}
break;
}
});})(s__22843__$1,vec__22848,priority,item_set,xs__6012__auto__,temp__5457__auto__,sets,this$__$1))
,null,null));
});})(s__22843__$1,vec__22848,priority,item_set,xs__6012__auto__,temp__5457__auto__,sets,this$__$1))
;
var fs__4431__auto__ = cljs.core.seq.call(null,iterys__4430__auto__.call(null,item_set));
if(fs__4431__auto__){
return cljs.core.concat.call(null,fs__4431__auto__,tailrecursion$priority_map$iter__22842.call(null,cljs.core.rest.call(null,s__22843__$1)));
} else {
var G__22870 = cljs.core.rest.call(null,s__22843__$1);
s__22843__$1 = G__22870;
continue;
}
} else {
return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;
return iter__4434__auto__.call(null,sets);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__4434__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__22851(s__22852){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__22852__$1 = s__22852;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__22852__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var vec__22857 = cljs.core.first.call(null,xs__6012__auto__);
var priority = cljs.core.nth.call(null,vec__22857,(0),null);
var item_set = cljs.core.nth.call(null,vec__22857,(1),null);
var iterys__4430__auto__ = ((function (s__22852__$1,vec__22857,priority,item_set,xs__6012__auto__,temp__5457__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__22851_$_iter__22853(s__22854){
return (new cljs.core.LazySeq(null,((function (s__22852__$1,vec__22857,priority,item_set,xs__6012__auto__,temp__5457__auto__,sets,this$__$1){
return (function (){
var s__22854__$1 = s__22854;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__22854__$1);
if(temp__5457__auto____$1){
var s__22854__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22854__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__22854__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__22856 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__22855 = (0);
while(true){
if((i__22855 < size__4433__auto__)){
var item = cljs.core._nth.call(null,c__4432__auto__,i__22855);
cljs.core.chunk_append.call(null,b__22856,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__22871 = (i__22855 + (1));
i__22855 = G__22871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22856),tailrecursion$priority_map$iter__22851_$_iter__22853.call(null,cljs.core.chunk_rest.call(null,s__22854__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22856),null);
}
} else {
var item = cljs.core.first.call(null,s__22854__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__22851_$_iter__22853.call(null,cljs.core.rest.call(null,s__22854__$2)));
}
} else {
return null;
}
break;
}
});})(s__22852__$1,vec__22857,priority,item_set,xs__6012__auto__,temp__5457__auto__,sets,this$__$1))
,null,null));
});})(s__22852__$1,vec__22857,priority,item_set,xs__6012__auto__,temp__5457__auto__,sets,this$__$1))
;
var fs__4431__auto__ = cljs.core.seq.call(null,iterys__4430__auto__.call(null,item_set));
if(fs__4431__auto__){
return cljs.core.concat.call(null,fs__4431__auto__,tailrecursion$priority_map$iter__22851.call(null,cljs.core.rest.call(null,s__22852__$1)));
} else {
var G__22872 = cljs.core.rest.call(null,s__22852__$1);
s__22852__$1 = G__22872;
continue;
}
} else {
return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;
return iter__4434__auto__.call(null,sets);
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
return self__.keyfn.call(null,cljs.core.val.call(null,entry));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
});

tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"priority->set-of-items","priority->set-of-items",-1256537211,null),new cljs.core.Symbol(null,"item->priority","item->priority",-899999435,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

/**
 * Positional factory function for tailrecursion.priority-map/PersistentPriorityMap.
 */
tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var G__22874 = arguments.length;
switch (G__22874) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
});

tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
});

tailrecursion.priority_map.pm_empty_keyfn.cljs$lang$maxFixedArity = 2;

tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_.call(null,elems)){
return cljs.core.into.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
throw Error("Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_.call(null,"tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 *   Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(var_args){
var args__4647__auto__ = [];
var len__4641__auto___22877 = arguments.length;
var i__4642__auto___22878 = (0);
while(true){
if((i__4642__auto___22878 < len__4641__auto___22877)){
args__4647__auto__.push((arguments[i__4642__auto___22878]));

var G__22879 = (i__4642__auto___22878 + (1));
i__4642__auto___22878 = G__22879;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__22880 = cljs.core.nnext.call(null,in$);
var G__22881 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__22880;
out = G__22881;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq22876){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22876));
});

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__4647__auto__ = [];
var len__4641__auto___22884 = arguments.length;
var i__4642__auto___22885 = (0);
while(true){
if((i__4642__auto___22885 < len__4641__auto___22884)){
args__4647__auto__.push((arguments[i__4642__auto___22885]));

var G__22886 = (i__4642__auto___22885 + (1));
i__4642__auto___22885 = G__22886;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);
while(true){
if(in$){
var G__22887 = cljs.core.nnext.call(null,in$);
var G__22888 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__22887;
out = G__22888;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq22882){
var G__22883 = cljs.core.first.call(null,seq22882);
var seq22882__$1 = cljs.core.next.call(null,seq22882);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22883,seq22882__$1);
});

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___22891 = arguments.length;
var i__4642__auto___22892 = (0);
while(true){
if((i__4642__auto___22892 < len__4641__auto___22891)){
args__4647__auto__.push((arguments[i__4642__auto___22892]));

var G__22893 = (i__4642__auto___22892 + (1));
i__4642__auto___22892 = G__22893;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn);
while(true){
if(in$){
var G__22894 = cljs.core.nnext.call(null,in$);
var G__22895 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__22894;
out = G__22895;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq22889){
var G__22890 = cljs.core.first.call(null,seq22889);
var seq22889__$1 = cljs.core.next.call(null,seq22889);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22890,seq22889__$1);
});

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__4647__auto__ = [];
var len__4641__auto___22899 = arguments.length;
var i__4642__auto___22900 = (0);
while(true){
if((i__4642__auto___22900 < len__4641__auto___22899)){
args__4647__auto__.push((arguments[i__4642__auto___22900]));

var G__22901 = (i__4642__auto___22900 + (1));
i__4642__auto___22900 = G__22901;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn,comparator);
while(true){
if(in$){
var G__22902 = cljs.core.nnext.call(null,in$);
var G__22903 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__22902;
out = G__22903;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq22896){
var G__22897 = cljs.core.first.call(null,seq22896);
var seq22896__$1 = cljs.core.next.call(null,seq22896);
var G__22898 = cljs.core.first.call(null,seq22896__$1);
var seq22896__$2 = cljs.core.next.call(null,seq22896__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22897,G__22898,seq22896__$2);
});


//# sourceMappingURL=priority_map.js.map?rel=1542520736734
