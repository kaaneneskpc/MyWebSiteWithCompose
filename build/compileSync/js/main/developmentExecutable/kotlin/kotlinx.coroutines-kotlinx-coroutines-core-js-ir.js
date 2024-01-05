(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.bb;
  var THROW_CCE = kotlin_kotlin.$_$.xd;
  var Unit_getInstance = kotlin_kotlin.$_$.j4;
  var Continuation = kotlin_kotlin.$_$.w8;
  var classMeta = kotlin_kotlin.$_$.s9;
  var setMetadataFor = kotlin_kotlin.$_$.cb;
  var VOID = kotlin_kotlin.$_$.e;
  var Annotation = kotlin_kotlin.$_$.jd;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.s3;
  var Key_getInstance = kotlin_kotlin.$_$.r3;
  var equals = kotlin_kotlin.$_$.v9;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.p8;
  var toString = kotlin_kotlin.$_$.eb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var intercepted = kotlin_kotlin.$_$.q8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.n8;
  var interfaceMeta = kotlin_kotlin.$_$.ea;
  var isInterface = kotlin_kotlin.$_$.na;
  var toString_0 = kotlin_kotlin.$_$.ze;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var objectMeta = kotlin_kotlin.$_$.ab;
  var hashCode = kotlin_kotlin.$_$.ca;
  var CoroutineImpl = kotlin_kotlin.$_$.d9;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.x;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.i2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.k2;
  var Companion_getInstance = kotlin_kotlin.$_$.e4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.h2;
  var createFailure = kotlin_kotlin.$_$.oe;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.s8;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.r8;
  var get = kotlin_kotlin.$_$.t8;
  var minusKey = kotlin_kotlin.$_$.u8;
  var ContinuationInterceptor = kotlin_kotlin.$_$.v8;
  var Key = kotlin_kotlin.$_$.b9;
  var Element = kotlin_kotlin.$_$.a9;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var THROW_IAE = kotlin_kotlin.$_$.yd;
  var Enum = kotlin_kotlin.$_$.md;
  var startCoroutine = kotlin_kotlin.$_$.g9;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.se;
  var startCoroutine_0 = kotlin_kotlin.$_$.h9;
  var Long = kotlin_kotlin.$_$.rd;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.d4;
  var RuntimeException = kotlin_kotlin.$_$.wd;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.w1;
  var captureStack = kotlin_kotlin.$_$.n9;
  var Error_0 = kotlin_kotlin.$_$.nd;
  var Error_init_$Init$ = kotlin_kotlin.$_$.f1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ye;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var CancellationException = kotlin_kotlin.$_$.m8;
  var ArrayList = kotlin_kotlin.$_$.s4;
  var SequenceScope = kotlin_kotlin.$_$.ub;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.r1;
  var sequence = kotlin_kotlin.$_$.vb;
  var plus = kotlin_kotlin.$_$.c9;
  var get_0 = kotlin_kotlin.$_$.y8;
  var fold = kotlin_kotlin.$_$.x8;
  var minusKey_0 = kotlin_kotlin.$_$.z8;
  var anyToString = kotlin_kotlin.$_$.k9;
  var SuspendFunction1 = kotlin_kotlin.$_$.e9;
  var UnsupportedOperationException = kotlin_kotlin.$_$.ke;
  var objectCreate = kotlin_kotlin.$_$.za;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.w;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var isSuspendFunction = kotlin_kotlin.$_$.ra;
  var addSuppressed = kotlin_kotlin.$_$.le;
  var fillArrayVal = kotlin_kotlin.$_$.w9;
  var fill = kotlin_kotlin.$_$.m6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var ensureNotNull = kotlin_kotlin.$_$.pe;
  var NoSuchElementException = kotlin_kotlin.$_$.sd;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.u1;
  var IllegalStateException = kotlin_kotlin.$_$.qd;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.p1;
  var Unit = kotlin_kotlin.$_$.je;
  var toLong = kotlin_kotlin.$_$.db;
  var copyOf = kotlin_kotlin.$_$.f6;
  var emptyList = kotlin_kotlin.$_$.j6;
  var listOf = kotlin_kotlin.$_$.e7;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.x3;
  var joinToString = kotlin_kotlin.$_$.w6;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var arrayCopy = kotlin_kotlin.$_$.p5;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var toLongOrNull = kotlin_kotlin.$_$.bd;
  var createCoroutineUnintercepted_0 = kotlin_kotlin.$_$.o8;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.y;
  var getStringHashCode = kotlin_kotlin.$_$.ba;
  var coerceIn = kotlin_kotlin.$_$.lb;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.o;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.y1;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.cancel_hkmm2i_k$(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.cancel_hkmm2i_k$.call(this, cause);
    }
    return tmp;
  }
  function cancel() {
    return this.cancel_hkmm2i_k$(null);
  }
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.cancel_e74who_k$(cause) : $super.cancel_e74who_k$.call(this, cause);
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.invokeOnCompletion_sct3wq_k$(onCancelling, invokeImmediately, handler) : $super.invokeOnCompletion_sct3wq_k$.call(this, onCancelling, invokeImmediately, handler);
  }
  function plus_0(other) {
    return other;
  }
  setMetadataFor(Job, 'Job', interfaceMeta, VOID, [Element], VOID, VOID, VOID, [0]);
  setMetadataFor(ChildJob, 'ChildJob', interfaceMeta, VOID, [Job], VOID, VOID, VOID, [0]);
  setMetadataFor(ParentJob, 'ParentJob', interfaceMeta, VOID, [Job], VOID, VOID, VOID, [0]);
  setMetadataFor(SelectClause0, 'SelectClause0', interfaceMeta);
  setMetadataFor(JobSupport, 'JobSupport', classMeta, VOID, [Job, ChildJob, ParentJob, SelectClause0], VOID, VOID, VOID, [0]);
  setMetadataFor(CoroutineScope, 'CoroutineScope', interfaceMeta);
  setMetadataFor(AbstractCoroutine, 'AbstractCoroutine', classMeta, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], VOID, VOID, VOID, [0]);
  setMetadataFor(InternalCoroutinesApi, 'InternalCoroutinesApi', classMeta, VOID, [Annotation]);
  setMetadataFor(FlowPreview, 'FlowPreview', classMeta, VOID, [Annotation]);
  setMetadataFor(ExperimentalCoroutinesApi, 'ExperimentalCoroutinesApi', classMeta, VOID, [Annotation]);
  setMetadataFor(StandaloneCoroutine, 'StandaloneCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', classMeta, StandaloneCoroutine, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(CoroutineStackFrame, 'CoroutineStackFrame', interfaceMeta);
  setMetadataFor(ScopeCoroutine, 'ScopeCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, CoroutineStackFrame], VOID, VOID, VOID, [0]);
  setMetadataFor(DispatchedCoroutine, 'DispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, VOID, [0]);
  function tryResume$default(value, idempotent, $super) {
    idempotent = idempotent === VOID ? null : idempotent;
    return $super === VOID ? this.tryResume_8iaqti_k$(value, idempotent) : $super.tryResume_8iaqti_k$.call(this, value, idempotent);
  }
  function cancel$default_1(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.cancel_e74who_k$(cause) : $super.cancel_e74who_k$.call(this, cause);
  }
  setMetadataFor(CancellableContinuation, 'CancellableContinuation', interfaceMeta, VOID, [Continuation]);
  setMetadataFor(CancelHandlerBase, 'CancelHandlerBase', classMeta);
  setMetadataFor(NotCompleted, 'NotCompleted', interfaceMeta);
  setMetadataFor(CancelHandler, 'CancelHandler', classMeta, CancelHandlerBase, [CancelHandlerBase, NotCompleted]);
  setMetadataFor(DisposeOnCancel, 'DisposeOnCancel', classMeta, CancelHandler);
  setMetadataFor(BeforeResumeCancelHandler, 'BeforeResumeCancelHandler', classMeta, CancelHandler);
  setMetadataFor(RemoveOnCancel, 'RemoveOnCancel', classMeta, BeforeResumeCancelHandler);
  setMetadataFor(Runnable, 'Runnable', interfaceMeta);
  setMetadataFor(SchedulerTask, 'SchedulerTask', classMeta, VOID, [Runnable]);
  setMetadataFor(DispatchedTask, 'DispatchedTask', classMeta, SchedulerTask);
  setMetadataFor(CancellableContinuationImpl, 'CancellableContinuationImpl', classMeta, DispatchedTask, [DispatchedTask, CancellableContinuation, CoroutineStackFrame]);
  setMetadataFor(Active, 'Active', objectMeta, VOID, [NotCompleted]);
  setMetadataFor(CompletedContinuation, 'CompletedContinuation', classMeta);
  setMetadataFor(InvokeOnCancel, 'InvokeOnCancel', classMeta, CancelHandler);
  setMetadataFor(Deferred, 'Deferred', interfaceMeta, VOID, [Job], VOID, VOID, VOID, [0]);
  setMetadataFor(CompletableDeferred, 'CompletableDeferred', interfaceMeta, VOID, [Deferred], VOID, VOID, VOID, [0]);
  setMetadataFor($awaitCOROUTINE$0, '$awaitCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(SelectClause1, 'SelectClause1', interfaceMeta);
  setMetadataFor(CompletableDeferredImpl, 'CompletableDeferredImpl', classMeta, JobSupport, [JobSupport, CompletableDeferred, SelectClause1], VOID, VOID, VOID, [0]);
  setMetadataFor(CompletableJob, 'CompletableJob', interfaceMeta, VOID, [Job], VOID, VOID, VOID, [0]);
  setMetadataFor(CompletedExceptionally, 'CompletedExceptionally', classMeta);
  setMetadataFor(CancelledContinuation, 'CancelledContinuation', classMeta, CompletedExceptionally);
  setMetadataFor(CompletedWithCancellation, 'CompletedWithCancellation', classMeta);
  setMetadataFor(Key_0, 'Key', objectMeta, AbstractCoroutineContextKey);
  setMetadataFor(CoroutineDispatcher, 'CoroutineDispatcher', classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  setMetadataFor(Key_1, 'Key', objectMeta, VOID, [Key]);
  setMetadataFor(CoroutineExceptionHandler, 'CoroutineExceptionHandler', interfaceMeta, VOID, [Element]);
  setMetadataFor(CoroutineStart, 'CoroutineStart', classMeta, Enum);
  setMetadataFor(CopyableThrowable, 'CopyableThrowable', interfaceMeta);
  function delay(time, $completion) {
    if (time.compareTo_9jj042_k$(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.initCancellability_shqc60_k$();
    // Inline function 'kotlinx.coroutines.Delay.delay.<anonymous>' call
    this.scheduleResumeAfterDelay_ohc91i_k$(time, cancellable);
    return cancellable.getResult_clfhg3_k$();
  }
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().invokeOnTimeout_x4e3ys_k$(timeMillis, block, context);
  }
  setMetadataFor(Delay, 'Delay', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(EventLoop, 'EventLoop', classMeta, CoroutineDispatcher);
  setMetadataFor(ThreadLocalEventLoop, 'ThreadLocalEventLoop', objectMeta);
  setMetadataFor(CompletionHandlerException, 'CompletionHandlerException', classMeta, RuntimeException);
  setMetadataFor(CoroutinesInternalError, 'CoroutinesInternalError', classMeta, Error_0);
  setMetadataFor(DisposableHandle, 'DisposableHandle', interfaceMeta);
  setMetadataFor(Key_2, 'Key', objectMeta, VOID, [Key]);
  setMetadataFor(ChildHandle, 'ChildHandle', interfaceMeta, VOID, [DisposableHandle]);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, VOID, [DisposableHandle, ChildHandle]);
  setMetadataFor(Incomplete, 'Incomplete', interfaceMeta);
  setMetadataFor(Empty, 'Empty', classMeta, VOID, [Incomplete]);
  setMetadataFor(LinkedListNode, 'LinkedListNode', classMeta, VOID, VOID, LinkedListNode);
  setMetadataFor(LinkedListHead, 'LinkedListHead', classMeta, LinkedListNode, VOID, LinkedListHead);
  setMetadataFor(NodeList, 'NodeList', classMeta, LinkedListHead, [LinkedListHead, Incomplete], NodeList);
  setMetadataFor(CompletionHandlerBase, 'CompletionHandlerBase', classMeta, LinkedListNode);
  setMetadataFor(JobNode, 'JobNode', classMeta, CompletionHandlerBase, [CompletionHandlerBase, DisposableHandle, Incomplete]);
  setMetadataFor(Finishing, 'Finishing', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildCompletion, 'ChildCompletion', classMeta, JobNode);
  setMetadataFor(AwaitContinuation, 'AwaitContinuation', classMeta, CancellableContinuationImpl);
  setMetadataFor(JobSupport$_get_children_$slambda_k839f8, 'JobSupport$<get-children>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(JobCancellingNode, 'JobCancellingNode', classMeta, JobNode);
  setMetadataFor(InactiveNodeList, 'InactiveNodeList', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildHandleNode, 'ChildHandleNode', classMeta, JobCancellingNode, [JobCancellingNode, ChildHandle]);
  setMetadataFor(InvokeOnCancelling, 'InvokeOnCancelling', classMeta, JobCancellingNode);
  setMetadataFor(InvokeOnCompletion, 'InvokeOnCompletion', classMeta, JobNode);
  setMetadataFor(ResumeOnCompletion, 'ResumeOnCompletion', classMeta, JobNode);
  setMetadataFor(SelectJoinOnCompletion, 'SelectJoinOnCompletion', classMeta, JobNode);
  setMetadataFor(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', classMeta, JobNode);
  setMetadataFor(SelectAwaitOnCompletion, 'SelectAwaitOnCompletion', classMeta, JobNode);
  setMetadataFor(IncompleteStateBox, 'IncompleteStateBox', classMeta);
  setMetadataFor(ChildContinuation, 'ChildContinuation', classMeta, JobCancellingNode);
  setMetadataFor(JobImpl, 'JobImpl', classMeta, JobSupport, [JobSupport, CompletableJob], VOID, VOID, VOID, [0]);
  setMetadataFor(MainCoroutineDispatcher, 'MainCoroutineDispatcher', classMeta, CoroutineDispatcher);
  setMetadataFor(SupervisorJobImpl, 'SupervisorJobImpl', classMeta, JobImpl, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(TimeoutCancellationException, 'TimeoutCancellationException', classMeta, CancellationException, [CancellationException, CopyableThrowable]);
  setMetadataFor(Unconfined, 'Unconfined', objectMeta, CoroutineDispatcher);
  setMetadataFor(Key_3, 'Key', objectMeta, VOID, [Key]);
  setMetadataFor(YieldContext, 'YieldContext', classMeta, AbstractCoroutineContextElement, VOID, YieldContext);
  setMetadataFor(AtomicDesc, 'AtomicDesc', classMeta);
  setMetadataFor(AbstractAtomicDesc, 'AbstractAtomicDesc', classMeta, AtomicDesc);
  setMetadataFor(RemoveFirstDesc, 'RemoveFirstDesc', classMeta, AbstractAtomicDesc);
  setMetadataFor(TryPollDesc, 'TryPollDesc', classMeta, RemoveFirstDesc);
  setMetadataFor(RemoveReceiveOnCancel, 'RemoveReceiveOnCancel', classMeta, BeforeResumeCancelHandler);
  function next0($completion) {
    var tmp = new $next0COROUTINE$2(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  setMetadataFor(ChannelIterator, 'ChannelIterator', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Itr, 'Itr', classMeta, VOID, [ChannelIterator], VOID, VOID, VOID, [0]);
  setMetadataFor(ReceiveOrClosed, 'ReceiveOrClosed', interfaceMeta);
  setMetadataFor(Receive, 'Receive', classMeta, LinkedListNode, [LinkedListNode, ReceiveOrClosed]);
  setMetadataFor(ReceiveElement, 'ReceiveElement', classMeta, Receive);
  setMetadataFor(ReceiveElementWithUndeliveredHandler, 'ReceiveElementWithUndeliveredHandler', classMeta, ReceiveElement);
  setMetadataFor(ReceiveHasNext, 'ReceiveHasNext', classMeta, Receive);
  setMetadataFor(ReceiveSelect, 'ReceiveSelect', classMeta, Receive, [Receive, DisposableHandle]);
  setMetadataFor(AbstractChannel$onReceive$1, VOID, classMeta, VOID, [SelectClause1]);
  setMetadataFor(AbstractChannel$onReceiveCatching$1, VOID, classMeta, VOID, [SelectClause1]);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.close_ukldxa_k$(cause) : $super.close_ukldxa_k$.call(this, cause);
  }
  function offer(element) {
    var result = this.trySend_62dpg8_k$(element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result))
      return true;
    var tmp0_elvis_lhs = ChannelResult__exceptionOrNull_impl_16ei30(result);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    throw recoverStackTrace_0(tmp);
  }
  setMetadataFor(SendChannel, 'SendChannel', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(AbstractSendChannel, 'AbstractSendChannel', classMeta, VOID, [SendChannel], VOID, VOID, VOID, [1]);
  function cancel$default_2(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.cancel_hkmm2i_k$(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.cancel_hkmm2i_k$.call(this, cause);
    }
    return tmp;
  }
  function cancel_0() {
    return this.cancel_hkmm2i_k$(null);
  }
  function cancel$default_3(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.cancel_e74who_k$(cause) : $super.cancel_e74who_k$.call(this, cause);
  }
  function poll() {
    var result = this.tryReceive_y3ovg2_k$();
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result))
      return ChannelResult__getOrThrow_impl_od1axs(result);
    var tmp0_elvis_lhs = ChannelResult__exceptionOrNull_impl_16ei30(result);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    throw recoverStackTrace_0(tmp);
  }
  function receiveOrNull($completion) {
    var tmp = new $receiveOrNullCOROUTINE$1(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function get_onReceiveOrNull() {
    return new ReceiveChannel$onReceiveOrNull$1(this);
  }
  setMetadataFor(ReceiveChannel, 'ReceiveChannel', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Channel, 'Channel', interfaceMeta, VOID, [SendChannel, ReceiveChannel], VOID, VOID, VOID, [1, 0]);
  setMetadataFor(AbstractChannel, 'AbstractChannel', classMeta, AbstractSendChannel, [AbstractSendChannel, Channel], VOID, VOID, VOID, [0, 1]);
  setMetadataFor(AddLastDesc, 'AddLastDesc', classMeta, AbstractAtomicDesc);
  setMetadataFor(SendBufferedDesc, 'SendBufferedDesc', classMeta, AddLastDesc);
  setMetadataFor(TryOfferDesc, 'TryOfferDesc', classMeta, RemoveFirstDesc);
  setMetadataFor(Send, 'Send', classMeta, LinkedListNode);
  setMetadataFor(SendSelect, 'SendSelect', classMeta, Send, [Send, DisposableHandle]);
  setMetadataFor(SendBuffered, 'SendBuffered', classMeta, Send);
  setMetadataFor(SelectClause2, 'SelectClause2', interfaceMeta);
  setMetadataFor(AbstractSendChannel$onSend$1, VOID, classMeta, VOID, [SelectClause2]);
  setMetadataFor(Closed, 'Closed', classMeta, Send, [Send, ReceiveOrClosed]);
  setMetadataFor(SendElement, 'SendElement', classMeta, Send);
  setMetadataFor(SendElementWithUndeliveredHandler, 'SendElementWithUndeliveredHandler', classMeta, SendElement);
  setMetadataFor(ArrayChannel, 'ArrayChannel', classMeta, AbstractChannel, VOID, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(BufferOverflow, 'BufferOverflow', classMeta, Enum);
  setMetadataFor(Factory, 'Factory', objectMeta);
  setMetadataFor(ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt, 'ReceiveChannel$<get-onReceiveOrNull>$o$registerSelectClause1$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(ReceiveChannel$onReceiveOrNull$1, VOID, classMeta, VOID, [SelectClause1]);
  setMetadataFor($receiveOrNullCOROUTINE$1, '$receiveOrNullCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(Failed, 'Failed', classMeta, VOID, VOID, Failed);
  setMetadataFor(Closed_0, 'Closed', classMeta, Failed);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ChannelResult, 'ChannelResult', classMeta);
  setMetadataFor($next0COROUTINE$2, '$next0COROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(ClosedReceiveChannelException, 'ClosedReceiveChannelException', classMeta, NoSuchElementException);
  setMetadataFor(ClosedSendChannelException, 'ClosedSendChannelException', classMeta, IllegalStateException);
  setMetadataFor(ChannelCoroutine, 'ChannelCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, Channel], VOID, VOID, VOID, [0, 1]);
  setMetadataFor(ConflatedChannel, 'ConflatedChannel', classMeta, AbstractChannel, VOID, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(LinkedListChannel, 'LinkedListChannel', classMeta, AbstractChannel, VOID, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(ProducerScope, 'ProducerScope', interfaceMeta, VOID, [CoroutineScope, SendChannel], VOID, VOID, VOID, [1]);
  setMetadataFor(ProducerCoroutine, 'ProducerCoroutine', classMeta, ChannelCoroutine, [ChannelCoroutine, ProducerScope], VOID, VOID, VOID, [0, 1]);
  setMetadataFor(RendezvousChannel, 'RendezvousChannel', classMeta, AbstractChannel, VOID, VOID, VOID, VOID, [0, 1]);
  setMetadataFor($emitAllImplCOROUTINE$3, '$emitAllImplCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(Flow, 'Flow', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(FlowCollector, 'FlowCollector', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SharedFlow, 'SharedFlow', interfaceMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(MutableSharedFlow, 'MutableSharedFlow', interfaceMeta, VOID, [SharedFlow, FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(Emitter, 'Emitter', classMeta, VOID, [DisposableHandle]);
  setMetadataFor($collectCOROUTINE$4, '$collectCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(AbstractSharedFlow, 'AbstractSharedFlow', classMeta);
  setMetadataFor(CancellableFlow, 'CancellableFlow', interfaceMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  function fuse$default(context, capacity, onBufferOverflow, $super) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$() : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    return $super === VOID ? this.fuse_gny1ac_k$(context, capacity, onBufferOverflow) : $super.fuse_gny1ac_k$.call(this, context, capacity, onBufferOverflow);
  }
  setMetadataFor(FusibleFlow, 'FusibleFlow', interfaceMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(SharedFlowImpl, 'SharedFlowImpl', classMeta, AbstractSharedFlow, [AbstractSharedFlow, MutableSharedFlow, CancellableFlow, FusibleFlow], VOID, VOID, VOID, [1]);
  setMetadataFor(AbstractSharedFlowSlot, 'AbstractSharedFlowSlot', classMeta);
  setMetadataFor(SharedFlowSlot, 'SharedFlowSlot', classMeta, AbstractSharedFlowSlot, VOID, SharedFlowSlot);
  setMetadataFor(StateFlow, 'StateFlow', interfaceMeta, VOID, [SharedFlow], VOID, VOID, VOID, [1]);
  setMetadataFor(MutableStateFlow, 'MutableStateFlow', interfaceMeta, VOID, [StateFlow, MutableSharedFlow], VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$5, '$collectCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(StateFlowImpl, 'StateFlowImpl', classMeta, AbstractSharedFlow, [AbstractSharedFlow, MutableStateFlow, CancellableFlow, FusibleFlow], VOID, VOID, VOID, [1]);
  setMetadataFor(StateFlowSlot, 'StateFlowSlot', classMeta, AbstractSharedFlowSlot, VOID, StateFlowSlot, VOID, VOID, [0]);
  setMetadataFor(SubscriptionCountStateFlow, 'SubscriptionCountStateFlow', classMeta, SharedFlowImpl, [StateFlow, SharedFlowImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlow, 'ChannelFlow', classMeta, VOID, [FusibleFlow], VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlowOperator, 'ChannelFlowOperator', classMeta, ChannelFlow, VOID, VOID, VOID, VOID, [1, 2]);
  setMetadataFor(ChannelFlowOperatorImpl, 'ChannelFlowOperatorImpl', classMeta, ChannelFlowOperator, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlowOperator$collectWithContextUndispatched$slambda, 'ChannelFlowOperator$collectWithContextUndispatched$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$6, '$collectCOROUTINE$6', classMeta, CoroutineImpl);
  setMetadataFor(ChannelFlow$_get_collectToFun_$slambda_j53z2e, 'ChannelFlow$<get-collectToFun>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlow$collect$slambda, 'ChannelFlow$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(UndispatchedContextCollector$emitRef$slambda, 'UndispatchedContextCollector$emitRef$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(UndispatchedContextCollector, 'UndispatchedContextCollector', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(StackFrameContinuation, 'StackFrameContinuation', classMeta, VOID, [Continuation, CoroutineStackFrame]);
  setMetadataFor(NopCollector, 'NopCollector', objectMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(SendingCollector, 'SendingCollector', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(ThrowingCollector, 'ThrowingCollector', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor($emitCOROUTINE$9, '$emitCOROUTINE$9', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$8, '$collectCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor($emitCOROUTINE$10, '$emitCOROUTINE$10', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor($collectWhileCOROUTINE$7, '$collectWhileCOROUTINE$7', classMeta, CoroutineImpl);
  setMetadataFor($onSubscriptionCOROUTINE$11, '$onSubscriptionCOROUTINE$11', classMeta, CoroutineImpl);
  setMetadataFor(SubscribedFlowCollector, 'SubscribedFlowCollector', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1, 0]);
  setMetadataFor($emitCOROUTINE$13, '$emitCOROUTINE$13', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor($firstCOROUTINE$12, '$firstCOROUTINE$12', classMeta, CoroutineImpl);
  setMetadataFor(ArrayQueue, 'ArrayQueue', classMeta, VOID, VOID, ArrayQueue);
  setMetadataFor(OpDescriptor, 'OpDescriptor', classMeta);
  setMetadataFor(AtomicOp, 'AtomicOp', classMeta, OpDescriptor);
  setMetadataFor(DispatchedContinuation, 'DispatchedContinuation', classMeta, DispatchedTask, [DispatchedTask, CoroutineStackFrame, Continuation]);
  setMetadataFor(InlineList, 'InlineList', classMeta);
  setMetadataFor(LimitedDispatcher, 'LimitedDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Runnable, Delay], VOID, VOID, VOID, [1]);
  setMetadataFor(LockFreeTaskQueue, 'LockFreeTaskQueue', classMeta);
  setMetadataFor(Placeholder, 'Placeholder', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(LockFreeTaskQueueCore, 'LockFreeTaskQueueCore', classMeta);
  setMetadataFor(UndeliveredElementException, 'UndeliveredElementException', classMeta, RuntimeException);
  setMetadataFor(ContextScope, 'ContextScope', classMeta, VOID, [CoroutineScope]);
  setMetadataFor(Symbol, 'Symbol', classMeta);
  setMetadataFor(SelectInstance, 'SelectInstance', interfaceMeta);
  setMetadataFor(SeqNumber, 'SeqNumber', classMeta, VOID, VOID, SeqNumber);
  setMetadataFor(Empty_0, 'Empty', classMeta);
  setMetadataFor(UndispatchedCoroutine, 'UndispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Dispatchers, 'Dispatchers', objectMeta);
  setMetadataFor(JsMainDispatcher, 'JsMainDispatcher', classMeta, MainCoroutineDispatcher);
  setMetadataFor(UnconfinedEventLoop, 'UnconfinedEventLoop', classMeta, EventLoop, VOID, UnconfinedEventLoop);
  setMetadataFor(JobCancellationException, 'JobCancellationException', classMeta, CancellationException);
  setMetadataFor(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, VOID, [1]);
  setMetadataFor(NodeDispatcher, 'NodeDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SetTimeoutDispatcher, 'SetTimeoutDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(MessageQueue, 'MessageQueue', classMeta, ArrayQueue);
  setMetadataFor(ScheduledMessageQueue, 'ScheduledMessageQueue', classMeta, MessageQueue);
  setMetadataFor(ClearTimeout, 'ClearTimeout', classMeta, CancelHandler, [CancelHandler, DisposableHandle]);
  setMetadataFor(WindowDispatcher$invokeOnTimeout$1, VOID, classMeta, VOID, [DisposableHandle]);
  setMetadataFor(WindowDispatcher, 'WindowDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, VOID, [1]);
  setMetadataFor(WindowMessageQueue, 'WindowMessageQueue', classMeta, MessageQueue);
  setMetadataFor(AbortFlowException, 'AbortFlowException', classMeta, CancellationException);
  setMetadataFor(SafeCollector, 'SafeCollector', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(NoOpLock, 'NoOpLock', classMeta, VOID, VOID, NoOpLock);
  setMetadataFor(PrepareOp, 'PrepareOp', classMeta, OpDescriptor);
  setMetadataFor(CommonThreadLocal, 'CommonThreadLocal', classMeta, VOID, VOID, CommonThreadLocal);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.initParentJob_jbhsg3_k$(parentContext.get_y2st91_k$(Key_getInstance_2()));
    }
    this.context_1 = parentContext.plus_s13ygv_k$(this);
  }
  protoOf(AbstractCoroutine).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(AbstractCoroutine).get_coroutineContext_115oqo_k$ = function () {
    return this.context_1;
  };
  protoOf(AbstractCoroutine).get_isActive_quafmh_k$ = function () {
    return protoOf(JobSupport).get_isActive_quafmh_k$.call(this);
  };
  protoOf(AbstractCoroutine).onCompleted_whnx9v_k$ = function (value) {
  };
  protoOf(AbstractCoroutine).onCancelled_gb68wi_k$ = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).cancellationExceptionMessage_a64063_k$ = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).onCompletionInternal_38s8uv_k$ = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.onCancelled_gb68wi_k$(state.get_cause_iplhs0_k$(), state.get_handled_cq14k3_k$());
    } else {
      this.onCompleted_whnx9v_k$((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).resumeWith_dtxwbr_k$ = function (result) {
    var state = this.makeCompletingOnce_b13xy2_k$(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.afterResume_ugh2hm_k$(state);
  };
  protoOf(AbstractCoroutine).afterResume_ugh2hm_k$ = function (state) {
    return this.afterCompletion_2p0irt_k$(state);
  };
  protoOf(AbstractCoroutine).handleOnCompletionException_wdvdfx_k$ = function (exception) {
    handleCoroutineException(this.context_1, exception);
  };
  protoOf(AbstractCoroutine).nameString_cd9e9w_k$ = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.context_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).nameString_cd9e9w_k$.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).nameString_cd9e9w_k$.call(this);
  };
  protoOf(AbstractCoroutine).start_rn6v44_k$ = function (start, receiver, block) {
    start.invoke_neaz0o_k$(block, receiver, this);
  };
  function InternalCoroutinesApi() {
  }
  protoOf(InternalCoroutinesApi).equals = function (other) {
    if (!(other instanceof InternalCoroutinesApi))
      return false;
    other instanceof InternalCoroutinesApi || THROW_CCE();
    return true;
  };
  protoOf(InternalCoroutinesApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalCoroutinesApi).toString = function () {
    return '@kotlinx.coroutines.InternalCoroutinesApi()';
  };
  function FlowPreview() {
  }
  protoOf(FlowPreview).equals = function (other) {
    if (!(other instanceof FlowPreview))
      return false;
    other instanceof FlowPreview || THROW_CCE();
    return true;
  };
  protoOf(FlowPreview).hashCode = function () {
    return 0;
  };
  protoOf(FlowPreview).toString = function () {
    return '@kotlinx.coroutines.FlowPreview()';
  };
  function ExperimentalCoroutinesApi() {
  }
  protoOf(ExperimentalCoroutinesApi).equals = function (other) {
    if (!(other instanceof ExperimentalCoroutinesApi))
      return false;
    other instanceof ExperimentalCoroutinesApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalCoroutinesApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalCoroutinesApi).toString = function () {
    return '@kotlinx.coroutines.ExperimentalCoroutinesApi()';
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.get_isLazy_ew1d53_k$() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.start_rn6v44_k$(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.withContext.<anonymous>' call
      var oldContext = $completion.get_context_h02k06_k$();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.get_y2st91_k$(Key_getInstance()), oldContext.get_y2st91_k$(Key_getInstance()))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.getResult_clfhg3_k$();
    }
    return tmp$ret$0;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).handleJobException_9fdet1_k$ = function (exception) {
    handleCoroutineException(this.get_context_h02k06_k$(), exception);
    return true;
  };
  function _get_continuation__y3gzck($this) {
    return $this.continuation_1;
  }
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.continuation_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).onStart_qsx7gt_k$ = function () {
    startCoroutineCancellable_1(this.continuation_1, this);
  };
  function _get__decision__uou2k6($this) {
    return $this._decision_1;
  }
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this._decision_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.trySuspend.<anonymous>' call
      switch (this_0.get_kotlinx$atomicfu$value_vi2am5_k$()) {
        case 0:
          if ($this._decision_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this._decision_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.tryResume.<anonymous>' call
      switch (this_0.get_kotlinx$atomicfu$value_vi2am5_k$()) {
        case 0:
          if ($this._decision_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this._decision_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).afterCompletion_2p0irt_k$ = function (state) {
    this.afterResume_ugh2hm_k$(state);
  };
  protoOf(DispatchedCoroutine).afterResume_ugh2hm_k$ = function (state) {
    if (tryResume(this))
      return Unit_getInstance();
    resumeCancellableWith(intercepted(this.get_uCont_iyyiam_k$()), recoverResult(state, this.get_uCont_iyyiam_k$()));
  };
  protoOf(DispatchedCoroutine).getResult_clfhg3_k$ = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.get_state_iypx7s_k$());
    if (state instanceof CompletedExceptionally)
      throw state.get_cause_iplhs0_k$();
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  function get_UNDECIDED() {
    return UNDECIDED;
  }
  var UNDECIDED;
  function get_SUSPENDED() {
    return SUSPENDED;
  }
  var SUSPENDED;
  function get_RESUMED() {
    return RESUMED;
  }
  var RESUMED;
  function suspendCancellableCoroutine(block, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.initCancellability_shqc60_k$();
    block(cancellable);
    return cancellable.getResult_clfhg3_k$();
  }
  function CancellableContinuation() {
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new DisposeOnCancel(handle);
    return _this__u8e3s4.invokeOnCancellation_kffkqp_k$(tmp$ret$1);
  }
  function _get_handle__ls055p($this) {
    return $this.handle_1;
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.handle_1 = handle;
  }
  protoOf(DisposeOnCancel).invoke_py2q9a_k$ = function (cause) {
    return this.handle_1.dispose_3nnxhr_k$();
  };
  protoOf(DisposeOnCancel).invoke = function (cause) {
    return this.invoke_py2q9a_k$(cause);
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + this.handle_1 + ']';
  };
  function suspendCancellableCoroutineReusable(block, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    block(cancellable);
    return cancellable.getResult_clfhg3_k$();
  }
  function removeOnCancellation(_this__u8e3s4, node) {
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new RemoveOnCancel(node);
    return _this__u8e3s4.invokeOnCancellation_kffkqp_k$(tmp$ret$1);
  }
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE());
    }
    var tmp0_safe_receiver = delegate.claimReusableCancellableContinuation_oatv30_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'kotlinx.coroutines.getOrCreateCancellableContinuation.<anonymous>' call
      if (tmp0_safe_receiver.resetStateReusable_a3kq5v_k$()) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE_REUSABLE());
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function _get_node__db0vwp($this) {
    return $this.node_1;
  }
  function RemoveOnCancel(node) {
    BeforeResumeCancelHandler.call(this);
    this.node_1 = node;
  }
  protoOf(RemoveOnCancel).invoke_py2q9a_k$ = function (cause) {
    this.node_1.remove_fgfybg_k$();
  };
  protoOf(RemoveOnCancel).invoke = function (cause) {
    return this.invoke_py2q9a_k$(cause);
  };
  protoOf(RemoveOnCancel).toString = function () {
    return 'RemoveOnCancel[' + this.node_1 + ']';
  };
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get__decision__uou2k6_0($this) {
    return $this._decision_1;
  }
  function _get__state__37adl3($this) {
    return $this._state_1;
  }
  function _set_parentHandle__bde57($this, _set____db54di) {
    $this.parentHandle_1 = _set____db54di;
  }
  function _get_parentHandle__f8dcex($this) {
    return $this.parentHandle_1;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.get_state_iypx7s_k$();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.get_resumeMode_te1i4n_k$())) {
      var tmp_0 = $this.delegate_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).isReusable_hrfetn_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.delegate_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.postponeCancellation_ibg312_k$(cause);
  }
  function callCancelHandlerSafely($this, block) {
    try {
      block();
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, ex));
      } else {
        throw $p;
      }
    }
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      invokeIt(handler, cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, ex));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this._decision_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      switch (this_0.get_kotlinx$atomicfu$value_vi2am5_k$()) {
        case 0:
          if ($this._decision_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this._decision_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      switch (this_0.get_kotlinx$atomicfu$value_vi2am5_k$()) {
        case 0:
          if ($this._decision_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.get_context_h02k06_k$().get_y2st91_k$(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ChildContinuation($this);
    var handle = parent.invokeOnCompletion$default_1v3utx_k$(true, VOID, tmp$ret$1);
    $this.parentHandle_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.delegate_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tryReleaseClaimedContinuation_ijjil1_k$($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.detachChild_qd9itj_k$();
    $this.cancel_e74who_k$(cancellationCause);
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var message = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, state instanceof CancelHandler ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this._state_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
        if (!(state == null) ? isInterface(state, NotCompleted) : false) {
          var update = resumedState($this, state, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this._state_1.atomicfu$compareAndSet(state, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (state instanceof CancelledContinuation) {
            if (state.makeResumed_vjvawn_k$()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.callOnCancellation_kwfdrp_k$(onCancellation, state.get_cause_iplhs0_k$());
              }
              return Unit_getInstance();
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this._state_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
        if (!(state == null) ? isInterface(state, NotCompleted) : false) {
          var update = resumedState($this, state, proposedUpdate, $this.get_resumeMode_te1i4n_k$(), onCancellation, idempotent);
          if (!$this._state_1.atomicfu$compareAndSet(state, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (state instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) ? state.idempotentResume_1 === idempotent : false) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.detachChild_qd9itj_k$();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.delegate_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.context_1 = this.delegate_1.get_context_h02k06_k$();
    this._decision_1 = atomic$int$1(0);
    this._state_1 = atomic$ref$1(Active_getInstance());
    this.parentHandle_1 = null;
  }
  protoOf(CancellableContinuationImpl).get_delegate_i94tki_k$ = function () {
    return this.delegate_1;
  };
  protoOf(CancellableContinuationImpl).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(CancellableContinuationImpl).get_state_iypx7s_k$ = function () {
    return this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(CancellableContinuationImpl).get_isActive_quafmh_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return !(tmp == null) ? isInterface(tmp, NotCompleted) : false;
  };
  protoOf(CancellableContinuationImpl).get_isCompleted_a6j6c8_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).get_isCancelled_trk8pu_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return tmp instanceof CancelledContinuation;
  };
  protoOf(CancellableContinuationImpl).initCancellability_shqc60_k$ = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.get_isCompleted_a6j6c8_k$()) {
      handle.dispose_3nnxhr_k$();
      this.parentHandle_1 = NonDisposableHandle_getInstance();
    }
  };
  protoOf(CancellableContinuationImpl).resetStateReusable_a3kq5v_k$ = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.idempotentResume_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.detachChild_qd9itj_k$();
      return false;
    }
    this._decision_1.set_kotlinx$atomicfu$value_nm6d3_k$(0);
    this._state_1.set_kotlinx$atomicfu$value_508e3y_k$(Active_getInstance());
    return true;
  };
  protoOf(CancellableContinuationImpl).get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.delegate_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  protoOf(CancellableContinuationImpl).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  protoOf(CancellableContinuationImpl).takeState_olvzuy_k$ = function () {
    return this.get_state_iypx7s_k$();
  };
  protoOf(CancellableContinuationImpl).cancelCompletedResult_yo9rw0_k$ = function (takenState, cause) {
    var this_0 = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_getInstance();
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!!state.get_cancelled_ge9r54_k$()) {
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.copy$default_agfz8q_k$(VOID, VOID, VOID, VOID, cause);
            if (this._state_1.atomicfu$compareAndSet(state, update)) {
              state.invokeHandlers_3ogfp8_k$(this, cause);
              return Unit_getInstance();
            }
          } else {
            if (this._state_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_getInstance();
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  protoOf(CancellableContinuationImpl).cancel_e74who_k$ = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._state_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
        if (!(!(state == null) ? isInterface(state, NotCompleted) : false))
          return false;
        var update = new CancelledContinuation(this, cause, state instanceof CancelHandler);
        if (!this._state_1.atomicfu$compareAndSet(state, update)) {
          break $l$block;
        }
        var tmp0_safe_receiver = state instanceof CancelHandler ? state : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          this.callCancelHandler_llz4b6_k$(tmp0_safe_receiver, cause);
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.get_resumeMode_te1i4n_k$());
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).parentCancelled_c5s5ig_k$ = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.cancel_e74who_k$(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).callCancelHandler_llz4b6_k$ = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, ex));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).callOnCancellation_kwfdrp_k$ = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).getContinuationCancellationCause_3nurbc_k$ = function (parent) {
    return parent.getCancellationException_8i1q6u_k$();
  };
  protoOf(CancellableContinuationImpl).getResult_clfhg3_k$ = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (this.parentHandle_1 == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this.get_state_iypx7s_k$();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.get_cause_iplhs0_k$(), this);
    if (get_isCancellableMode(this.get_resumeMode_te1i4n_k$())) {
      var job = this.get_context_h02k06_k$().get_y2st91_k$(Key_getInstance_2());
      if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
        var cause = job.getCancellationException_8i1q6u_k$();
        this.cancelCompletedResult_yo9rw0_k$(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.getSuccessfulResult_t876z0_k$(state);
  };
  protoOf(CancellableContinuationImpl).resumeWith_dtxwbr_k$ = function (result) {
    return resumeImpl$default(this, toState(result, this), this.get_resumeMode_te1i4n_k$());
  };
  protoOf(CancellableContinuationImpl).resume_a4kjl1_k$ = function (value, onCancellation) {
    return resumeImpl(this, value, this.get_resumeMode_te1i4n_k$(), onCancellation);
  };
  protoOf(CancellableContinuationImpl).invokeOnCancellation_kffkqp_k$ = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
      var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (state instanceof Active) {
        if (this._state_1.atomicfu$compareAndSet(state, cancelHandler))
          return Unit_getInstance();
      } else {
        if (state instanceof CancelHandler) {
          multipleHandlersError(this, handler, state);
        } else {
          if (state instanceof CompletedExceptionally) {
            if (!state.makeHandled_ws9oq6_k$()) {
              multipleHandlersError(this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              callCancelHandler(this, handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_cause_iplhs0_k$());
            }
            return Unit_getInstance();
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.cancelHandler_1 == null)) {
                multipleHandlersError(this, handler, state);
              }
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              if (state.get_cancelled_ge9r54_k$()) {
                callCancelHandler(this, handler, state.cancelCause_1);
                return Unit_getInstance();
              }
              var update = state.copy$default_agfz8q_k$(VOID, cancelHandler);
              if (this._state_1.atomicfu$compareAndSet(state, update))
                return Unit_getInstance();
            } else {
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              var update_0 = new CompletedContinuation(state, cancelHandler);
              if (this._state_1.atomicfu$compareAndSet(state, update_0))
                return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  protoOf(CancellableContinuationImpl).detachChild_qd9itj_k$ = function () {
    var tmp0_elvis_lhs = this.parentHandle_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.dispose_3nnxhr_k$();
    this.parentHandle_1 = NonDisposableHandle_getInstance();
  };
  protoOf(CancellableContinuationImpl).tryResume_8iaqti_k$ = function (value, idempotent) {
    return tryResumeImpl(this, value, idempotent, null);
  };
  protoOf(CancellableContinuationImpl).tryResume_2flfz_k$ = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).tryResumeWithException_4drsj6_k$ = function (exception) {
    return tryResumeImpl(this, new CompletedExceptionally(exception), null, null);
  };
  protoOf(CancellableContinuationImpl).completeResume_fabtk_k$ = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.get_resumeMode_te1i4n_k$());
  };
  protoOf(CancellableContinuationImpl).resumeUndispatched_tyhwz7_k$ = function (_this__u8e3s4, value) {
    var tmp = this.delegate_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.get_dispatcher_usy1bk_k$()) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.get_resumeMode_te1i4n_k$();
    }
    resumeImpl$default(this, value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).resumeUndispatchedWithException_m42me0_k$ = function (_this__u8e3s4, exception) {
    var tmp = this.delegate_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0 = new CompletedExceptionally(exception);
    var tmp_1;
    if ((dc == null ? null : dc.get_dispatcher_usy1bk_k$()) === _this__u8e3s4) {
      tmp_1 = get_MODE_UNDISPATCHED();
    } else {
      tmp_1 = this.get_resumeMode_te1i4n_k$();
    }
    resumeImpl$default(this, tmp_0, tmp_1);
  };
  protoOf(CancellableContinuationImpl).getSuccessfulResult_t876z0_k$ = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.result_1;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : !(state == null)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).getExceptionalResult_bnge6_k$ = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).getExceptionalResult_bnge6_k$.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.delegate_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.nameString_cd9e9w_k$() + '(' + toDebugString(this.delegate_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).nameString_cd9e9w_k$ = function () {
    return 'CancellableContinuation';
  };
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  function get_UNDECIDED_0() {
    return UNDECIDED_0;
  }
  var UNDECIDED_0;
  function Active() {
    Active_instance = this;
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.result_1 = result;
    this.cancelHandler_1 = cancelHandler;
    this.onCancellation_1 = onCancellation;
    this.idempotentResume_1 = idempotentResume;
    this.cancelCause_1 = cancelCause;
  }
  protoOf(CompletedContinuation).get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedContinuation).get_cancelHandler_w4ijbb_k$ = function () {
    return this.cancelHandler_1;
  };
  protoOf(CompletedContinuation).get_onCancellation_no7t6d_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedContinuation).get_idempotentResume_61d27l_k$ = function () {
    return this.idempotentResume_1;
  };
  protoOf(CompletedContinuation).get_cancelCause_cj8bx6_k$ = function () {
    return this.cancelCause_1;
  };
  protoOf(CompletedContinuation).get_cancelled_ge9r54_k$ = function () {
    return !(this.cancelCause_1 == null);
  };
  protoOf(CompletedContinuation).invokeHandlers_3ogfp8_k$ = function (cont, cause) {
    var tmp0_safe_receiver = this.cancelHandler_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.callCancelHandler_llz4b6_k$(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.onCancellation_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.callOnCancellation_kwfdrp_k$(tmp1_safe_receiver, cause);
    }
  };
  protoOf(CompletedContinuation).component1_7eebsc_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedContinuation).component2_7eebsb_k$ = function () {
    return this.cancelHandler_1;
  };
  protoOf(CompletedContinuation).component3_7eebsa_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedContinuation).component4_7eebs9_k$ = function () {
    return this.idempotentResume_1;
  };
  protoOf(CompletedContinuation).component5_7eebs8_k$ = function () {
    return this.cancelCause_1;
  };
  protoOf(CompletedContinuation).copy_3f7b1f_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).copy$default_agfz8q_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.result_1 : result;
    cancelHandler = cancelHandler === VOID ? this.cancelHandler_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.onCancellation_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.idempotentResume_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.cancelCause_1 : cancelCause;
    return $super === VOID ? this.copy_3f7b1f_k$(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.copy_3f7b1f_k$.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.result_1) + ', cancelHandler=' + this.cancelHandler_1 + ', onCancellation=' + this.onCancellation_1 + ', idempotentResume=' + toString_0(this.idempotentResume_1) + ', cancelCause=' + this.cancelCause_1 + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.result_1 == null ? 0 : hashCode(this.result_1);
    result = imul(result, 31) + (this.cancelHandler_1 == null ? 0 : hashCode(this.cancelHandler_1)) | 0;
    result = imul(result, 31) + (this.onCancellation_1 == null ? 0 : hashCode(this.onCancellation_1)) | 0;
    result = imul(result, 31) + (this.idempotentResume_1 == null ? 0 : hashCode(this.idempotentResume_1)) | 0;
    result = imul(result, 31) + (this.cancelCause_1 == null ? 0 : hashCode(this.cancelCause_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.result_1, tmp0_other_with_cast.result_1))
      return false;
    if (!equals(this.cancelHandler_1, tmp0_other_with_cast.cancelHandler_1))
      return false;
    if (!equals(this.onCancellation_1, tmp0_other_with_cast.onCancellation_1))
      return false;
    if (!equals(this.idempotentResume_1, tmp0_other_with_cast.idempotentResume_1))
      return false;
    if (!equals(this.cancelCause_1, tmp0_other_with_cast.cancelCause_1))
      return false;
    return true;
  };
  function get_SUSPENDED_0() {
    return SUSPENDED_0;
  }
  var SUSPENDED_0;
  function get_RESUMED_0() {
    return RESUMED_0;
  }
  var RESUMED_0;
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  function _get_handler__z70553($this) {
    return $this.handler_1;
  }
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.handler_1 = handler;
  }
  protoOf(InvokeOnCancel).invoke_py2q9a_k$ = function (cause) {
    this.handler_1(cause);
  };
  protoOf(InvokeOnCancel).invoke = function (cause) {
    return this.invoke_py2q9a_k$(cause);
  };
  protoOf(InvokeOnCancel).toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.handler_1) + '@' + get_hexAddress(this) + ']';
  };
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (!properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred() {
  }
  function CompletableDeferred_0(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.awaitInternal_5d94r6_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : !(suspendResult == null)) ? suspendResult : THROW_CCE();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.initParentJob_jbhsg3_k$(parent);
  }
  protoOf(CompletableDeferredImpl).get_onCancelComplete_4lfsth_k$ = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).getCompleted_nczk2z_k$ = function () {
    var tmp = this.getCompletedInternal_26f4i6_k$();
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CompletableDeferredImpl).await_4rdzbx_k$ = function ($completion) {
    var tmp = new $awaitCOROUTINE$0(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(CompletableDeferredImpl).get_onAwait_l48qpe_k$ = function () {
    return this;
  };
  protoOf(CompletableDeferredImpl).registerSelectClause1_jqxpel_k$ = function (select, block) {
    return this.registerSelectClause1Internal_95e6zb_k$(select, block);
  };
  protoOf(CompletableDeferredImpl).registerSelectClause1_5i5exy_k$ = function (select, block) {
    return this.registerSelectClause1_jqxpel_k$(select, block);
  };
  protoOf(CompletableDeferredImpl).complete_ixf84q_k$ = function (value) {
    return this.makeCompleting_2ycklh_k$(value);
  };
  protoOf(CompletableDeferredImpl).completeExceptionally_xyzekf_k$ = function (exception) {
    return this.makeCompleting_2ycklh_k$(new CompletedExceptionally(exception));
  };
  function CompletableJob() {
  }
  function _get__handled__q1dawe($this) {
    return $this._handled_1;
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.cause_1 = cause;
    this._handled_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  protoOf(CompletedExceptionally).get_handled_cq14k3_k$ = function () {
    return this._handled_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(CompletedExceptionally).makeHandled_ws9oq6_k$ = function () {
    return this._handled_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.cause_1 + ']';
  };
  function _get__resumed__kg85kj($this) {
    return $this._resumed_1;
  }
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : cause, handled);
    this._resumed_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).makeResumed_vjvawn_k$ = function () {
    return this._resumed_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      tmp = !(onCancellation == null) ? new CompletedWithCancellation(it, onCancellation) : it;
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.result_1 = result;
    this.onCancellation_1 = onCancellation;
  }
  protoOf(CompletedWithCancellation).get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedWithCancellation).get_onCancellation_no7t6d_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedWithCancellation).component1_7eebsc_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedWithCancellation).component2_7eebsb_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedWithCancellation).copy_4w9jcm_k$ = function (result, onCancellation) {
    return new CompletedWithCancellation(result, onCancellation);
  };
  protoOf(CompletedWithCancellation).copy$default_3qnym4_k$ = function (result, onCancellation, $super) {
    result = result === VOID ? this.result_1 : result;
    onCancellation = onCancellation === VOID ? this.onCancellation_1 : onCancellation;
    return $super === VOID ? this.copy_4w9jcm_k$(result, onCancellation) : $super.copy_4w9jcm_k$.call(this, result, onCancellation);
  };
  protoOf(CompletedWithCancellation).toString = function () {
    return 'CompletedWithCancellation(result=' + toString_0(this.result_1) + ', onCancellation=' + this.onCancellation_1 + ')';
  };
  protoOf(CompletedWithCancellation).hashCode = function () {
    var result = this.result_1 == null ? 0 : hashCode(this.result_1);
    result = imul(result, 31) + hashCode(this.onCancellation_1) | 0;
    return result;
  };
  protoOf(CompletedWithCancellation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.result_1, tmp0_other_with_cast.result_1))
      return false;
    if (!equals(this.onCancellation_1, tmp0_other_with_cast.onCancellation_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      var exception = recoverStackTrace(state.cause_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var value = (state == null ? true : !(state == null)) ? state : THROW_CCE();
      tmp = _Result___init__impl__xyqfz8(value);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key_0() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key_0();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(CoroutineDispatcher).isDispatchNeeded_ft82v4_k$ = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).limitedParallelism_b7nunq_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return new LimitedDispatcher(this, parallelism);
  };
  protoOf(CoroutineDispatcher).dispatchYield_t7bwip_k$ = function (context, block) {
    return this.dispatch_qa3n0o_k$(context, block);
  };
  protoOf(CoroutineDispatcher).interceptContinuation_3dnmlu_k$ = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).releaseInterceptedContinuation_rgafzi_k$ = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.release_wu5yyf_k$();
  };
  protoOf(CoroutineDispatcher).plus_rufu3f_k$ = function (other) {
    return other;
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.get_y2st91_k$(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.handleException_e679jj_k$(context, exception);
        return Unit_getInstance();
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleCoroutineExceptionImpl(context, handlerException(exception, t));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_1() {
    Key_instance_0 = this;
  }
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function CoroutineExceptionHandler() {
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    return RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
  }
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.get_y2st91_k$(Key_getInstance_2()) == null) ? context : context.plus_s13ygv_k$(Job_0()));
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var coroutine = new ScopeCoroutine($completion.get_context_h02k06_k$(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function currentCoroutineContext($completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    return $completion.get_context_h02k06_k$();
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  function values() {
    return [CoroutineStart_DEFAULT_getInstance(), CoroutineStart_LAZY_getInstance(), CoroutineStart_ATOMIC_getInstance(), CoroutineStart_UNDISPATCHED_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'DEFAULT':
        return CoroutineStart_DEFAULT_getInstance();
      case 'LAZY':
        return CoroutineStart_LAZY_getInstance();
      case 'ATOMIC':
        return CoroutineStart_ATOMIC_getInstance();
      case 'UNDISPATCHED':
        return CoroutineStart_UNDISPATCHED_getInstance();
      default:
        CoroutineStart_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).invoke_3w6eb3_k$ = function (block, completion) {
    var tmp;
    switch (this.get_ordinal_ip24qg_k$()) {
      case 0:
        startCoroutineCancellable_0(block, completion);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine(block, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched(block, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).invoke_neaz0o_k$ = function (block, receiver, completion) {
    var tmp;
    switch (this.get_ordinal_ip24qg_k$()) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine_0(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched_0(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).get_isLazy_ew1d53_k$ = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function CopyableThrowable() {
  }
  function Deferred() {
  }
  function Delay() {
  }
  function get_DISPOSED_TASK() {
    _init_properties_EventLoop_common_kt__pwfggr();
    return DISPOSED_TASK;
  }
  var DISPOSED_TASK;
  function get_CLOSED_EMPTY() {
    _init_properties_EventLoop_common_kt__pwfggr();
    return CLOSED_EMPTY;
  }
  var CLOSED_EMPTY;
  function _set_useCount__kwzmz3($this, _set____db54di) {
    $this.useCount_1 = _set____db54di;
  }
  function _get_useCount__843bib($this) {
    return $this.useCount_1;
  }
  function _set_shared__q6vn2($this, _set____db54di) {
    $this.shared_1 = _set____db54di;
  }
  function _get_shared__qjozq($this) {
    return $this.shared_1;
  }
  function _set_unconfinedQueue__ri92ob($this, _set____db54di) {
    $this.unconfinedQueue_1 = _set____db54di;
  }
  function _get_unconfinedQueue__heiv5r($this) {
    return $this.unconfinedQueue_1;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.useCount_1 = new Long(0, 0);
    this.shared_1 = false;
    this.unconfinedQueue_1 = null;
  }
  protoOf(EventLoop).processNextEvent_jmndfc_k$ = function () {
    if (!this.processUnconfinedEvent_mypjl6_k$())
      return Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$();
    return new Long(0, 0);
  };
  protoOf(EventLoop).get_isEmpty_zauvru_k$ = function () {
    return this.get_isUnconfinedQueueEmpty_mi405s_k$();
  };
  protoOf(EventLoop).get_nextTime_88vw7r_k$ = function () {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    return queue.get_isEmpty_zauvru_k$() ? Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$() : new Long(0, 0);
  };
  protoOf(EventLoop).processUnconfinedEvent_mypjl6_k$ = function () {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.removeFirstOrNull_eges3a_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.run_mvkpxh_k$();
    return true;
  };
  protoOf(EventLoop).shouldBeProcessedFromContext_tzcyz7_k$ = function () {
    return false;
  };
  protoOf(EventLoop).dispatchUnconfined_o79kaq_k$ = function (task) {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new ArrayQueue();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.unconfinedQueue_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.addLast_pk466f_k$(task);
  };
  protoOf(EventLoop).get_isActive_quafmh_k$ = function () {
    return this.useCount_1.compareTo_9jj042_k$(new Long(0, 0)) > 0;
  };
  protoOf(EventLoop).get_isUnconfinedLoopActive_g78ri6_k$ = function () {
    return this.useCount_1.compareTo_9jj042_k$(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).get_isUnconfinedQueueEmpty_mi405s_k$ = function () {
    var tmp0_safe_receiver = this.unconfinedQueue_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isEmpty_zauvru_k$();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).incrementUseCount_jadqvy_k$ = function (unconfined) {
    this.useCount_1 = this.useCount_1.plus_r93sks_k$(delta(this, unconfined));
    if (!unconfined)
      this.shared_1 = true;
  };
  protoOf(EventLoop).incrementUseCount$default_rfdd2j_k$ = function (unconfined, $super) {
    unconfined = unconfined === VOID ? false : unconfined;
    var tmp;
    if ($super === VOID) {
      this.incrementUseCount_jadqvy_k$(unconfined);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.incrementUseCount_jadqvy_k$.call(this, unconfined);
    }
    return tmp;
  };
  protoOf(EventLoop).decrementUseCount_x8i8ca_k$ = function (unconfined) {
    this.useCount_1 = this.useCount_1.minus_mfbszm_k$(delta(this, unconfined));
    if (this.useCount_1.compareTo_9jj042_k$(new Long(0, 0)) > 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.shared_1) {
      this.shutdown_cplwmy_k$();
    }
  };
  protoOf(EventLoop).decrementUseCount$default_p9beih_k$ = function (unconfined, $super) {
    unconfined = unconfined === VOID ? false : unconfined;
    var tmp;
    if ($super === VOID) {
      this.decrementUseCount_x8i8ca_k$(unconfined);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.decrementUseCount_x8i8ca_k$.call(this, unconfined);
    }
    return tmp;
  };
  protoOf(EventLoop).limitedParallelism_b7nunq_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  protoOf(EventLoop).shutdown_cplwmy_k$ = function () {
  };
  function _get_ref__e6fxpa($this) {
    return $this.ref_1;
  }
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.ref_1 = new CommonThreadLocal();
  }
  protoOf(ThreadLocalEventLoop).get_eventLoop_913645_k$ = function () {
    var tmp0_elvis_lhs = this.ref_1.get_26vq_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().ref_1.set_tg4fwj_k$(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ThreadLocalEventLoop).currentOrNull_z5p8mb_k$ = function () {
    return this.ref_1.get_26vq_k$();
  };
  protoOf(ThreadLocalEventLoop).resetEventLoop_a6270h_k$ = function () {
    this.ref_1.set_tg4fwj_k$(null);
  };
  protoOf(ThreadLocalEventLoop).setEventLoop_l8rzjm_k$ = function (eventLoop) {
    this.ref_1.set_tg4fwj_k$(eventLoop);
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  var properties_initialized_EventLoop_common_kt_cfxg9p;
  function _init_properties_EventLoop_common_kt__pwfggr() {
    if (!properties_initialized_EventLoop_common_kt_cfxg9p) {
      properties_initialized_EventLoop_common_kt_cfxg9p = true;
      DISPOSED_TASK = new Symbol('REMOVED_TASK');
      CLOSED_EMPTY = new Symbol('CLOSED_EMPTY');
    }
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function DisposableHandle() {
  }
  function Key_2() {
    Key_instance_1 = this;
  }
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function Job() {
  }
  function ChildJob() {
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  protoOf(NonDisposableHandle).get_parent_hy4reb_k$ = function () {
    return null;
  };
  protoOf(NonDisposableHandle).dispose_3nnxhr_k$ = function () {
  };
  protoOf(NonDisposableHandle).childCancelled_hsnipy_k$ = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.get_y2st91_k$(Key_getInstance_2());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.get_isActive_quafmh_k$())
      throw _this__u8e3s4.getCancellationException_8i1q6u_k$();
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.get_y2st91_k$(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Current context doesn't contain Job in it: " + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancelAndJoin(_this__u8e3s4, $completion) {
    _this__u8e3s4.cancel$default_8haxne_k$();
    return _this__u8e3s4.join_o20dar_k$($completion);
  }
  function cancel_1(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.cancel_hkmm2i_k$(CancellationException_init_$Create$_0(message, cause));
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.isActive_1 = isActive;
  }
  protoOf(Empty).get_isActive_quafmh_k$ = function () {
    return this.isActive_1;
  };
  protoOf(Empty).get_list_wopuqv_k$ = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.isActive_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  protoOf(NodeList).get_isActive_quafmh_k$ = function () {
    return true;
  };
  protoOf(NodeList).get_list_wopuqv_k$ = function () {
    return this;
  };
  protoOf(NodeList).getString_gb1pt9_k$ = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    this_0.append_22ad7x_k$('List{');
    this_0.append_22ad7x_k$(state);
    this_0.append_22ad7x_k$('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.get__next_inmai1_k$();
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var node = cur;
        if (first)
          first = false;
        else {
          this_0.append_22ad7x_k$(', ');
        }
        this_0.append_t8pm91_k$(node);
      }
      cur = cur.get__next_inmai1_k$();
    }
    this_0.append_22ad7x_k$(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.getString_gb1pt9_k$('Active') : protoOf(LinkedListHead).toString.call(this);
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  protoOf(JobNode).set_job_3t7w9l_k$ = function (_set____db54di) {
    this.job_1 = _set____db54di;
  };
  protoOf(JobNode).get_job_18j2r0_k$ = function () {
    var tmp = this.job_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).get_isActive_quafmh_k$ = function () {
    return true;
  };
  protoOf(JobNode).get_list_wopuqv_k$ = function () {
    return null;
  };
  protoOf(JobNode).dispose_3nnxhr_k$ = function () {
    return this.get_job_18j2r0_k$().removeNode_a91gpb_k$(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.get_job_18j2r0_k$()) + ']';
  };
  function _get__isCompleting__kxhw32($this) {
    return $this._isCompleting_1;
  }
  function _get__rootCause__pzi6w3($this) {
    return $this._rootCause_1;
  }
  function _get__exceptionsHolder__e2tfjy($this) {
    return $this._exceptionsHolder_1;
  }
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this._exceptionsHolder_1.set_kotlinx$atomicfu$value_508e3y_k$(value);
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this._exceptionsHolder_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function _get_parent__oo9xup($this) {
    return $this.parent_1;
  }
  function _get_state__b8zcm8($this) {
    return $this.state_1;
  }
  function _get_child__j05w3v($this) {
    return $this.child_1;
  }
  function _get_proposedUpdate__cai7fg($this) {
    return $this.proposedUpdate_1;
  }
  function _get_job__e6b14k($this) {
    return $this.job_1;
  }
  function _get__state__37adl3_0($this) {
    return $this._state_1;
  }
  function _get__parentHandle__f9kzhc($this) {
    return $this._parentHandle_1;
  }
  function loopOnState($this, block) {
    while (true) {
      block($this.get_state_iypx7s_k$());
    }
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_cause_iplhs0_k$();
    var wasCancelling = false;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.get_isCancelling_o1apv_k$();
    var exceptions = state.sealLocked_m2r6b3_k$(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.handleJobException_9fdet1_k$(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).makeHandled_ws9oq6_k$();
      }
    }
    if (!wasCancelling) {
      $this.onCancelling_aqzbl5_k$(finalException);
    }
    $this.onCompletionInternal_38s8uv_k$(finalState);
    var casSuccess = $this._state_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.isEmpty_y1axqb_k$()) {
      if (state.get_isCancelling_o1apv_k$()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.cancellationExceptionMessage_a64063_k$() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.get_c1px32_k$(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.get_size_woubt6_k$() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.get_size_woubt6_k$());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var exception = tmp0_iterator.next_20eer_k$();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.add_utx5q5_k$(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this._state_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.onCancelling_aqzbl5_k$(null);
    $this.onCompletionInternal_38s8uv_k$(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.get_parentHandle_gmoqez_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.dispose_3nnxhr_k$();
      $this.set_parentHandle_dpifqv_k$(NonDisposableHandle_getInstance());
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_cause_iplhs0_k$();
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.handleOnCompletionException_wdvdfx_k$(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.get_list_wopuqv_k$();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.onCancelling_aqzbl5_k$(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.get__next_inmai1_k$();
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var node = cur;
        try {
          node.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node + ' for ' + $this, ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.get__next_inmai1_k$();
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.handleOnCompletionException_wdvdfx_k$(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.get_isScopedCoroutine_rwmmff_k$())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.get_parentHandle_gmoqez_k$();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.childCancelled_hsnipy_k$(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.get__next_inmai1_k$();
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var node = cur;
        try {
          node.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node + ' for ' + $this, ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.get__next_inmai1_k$();
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.handleOnCompletionException_wdvdfx_k$(tmp0_safe_receiver_0);
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.isActive_1)
        return 0;
      if (!$this._state_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.onStart_qsx7gt_k$();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this._state_1.atomicfu$compareAndSet(state, state.list_1))
          return -1;
        $this.onStart_qsx7gt_k$();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_0 = tmp1_safe_receiver;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.job_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      if (!($this.get_state_iypx7s_k$() === expect)) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.addLast_mio4hw_k$(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.isActive_1 ? list : new InactiveNodeList(list);
    $this._state_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.addOneIfEmpty_tlweqo_k$(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var list = state.get__next_inmai1_k$();
    $this._state_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.joinInternal.<anonymous>' call
      var state = $this.get_state_iypx7s_k$();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false))
        return false;
      if (startInternal($this, state) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.initCancellability_shqc60_k$();
    // Inline function 'kotlinx.coroutines.JobSupport.joinSuspend.<anonymous>' call
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ResumeOnCompletion(cancellable);
    disposeOnCancellation(cancellable, $this.invokeOnCompletion_n6cffu_k$(tmp$ret$1));
    return cancellable.getResult_clfhg3_k$();
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var state = $this.get_state_iypx7s_k$();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.get_isCompleting_vi2bwp_k$();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.cancellationExceptionMessage_a64063_k$() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).getChildJobCancellationCause_wx9uoh_k$();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var state = $this.get_state_iypx7s_k$();
        if (state instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (state.get_isSealed_zdv4z3_k$())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = state.get_isCancelling_o1apv_k$();
          if (!(cause == null) ? true : !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            state.addExceptionLocked_hjqo7b_k$(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = state.get_rootCause_69dwxu_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, state.list_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (state.get_isActive_quafmh_k$()) {
              if (tryMakeCancelling($this, state, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, state, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString_0(state);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.get_list_wopuqv_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var message = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this._state_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (finishing.get_isCompleting_vi2bwp_k$())
      return get_COMPLETING_ALREADY();
    finishing.set_isCompleting_1h5iw_k$(true);
    if (!(finishing === state)) {
      if (!$this._state_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.get_isCancelling_o1apv_k$();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.addExceptionLocked_hjqo7b_k$(tmp0_safe_receiver.get_cause_iplhs0_k$());
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.get_rootCause_69dwxu_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, tmp2_safe_receiver);
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_cause_iplhs0_k$();
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.get_list_wopuqv_k$();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var tmp = child_0.childJob_1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var handle = tmp.invokeOnCompletion$default_1v3utx_k$(VOID, false, tmp$ret$1);
        if (!(handle === NonDisposableHandle_getInstance()))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        $this_0 = $this_0;
        state_0 = state_0;
        child_0 = nextChild_0;
        proposedUpdate_0 = proposedUpdate_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.afterCompletion_2p0irt_k$(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (!cur.get__removed_p9514a_k$()) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      cur = cur.get__prev_inntnt_k$();
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      cur = cur.get__next_inmai1_k$();
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (cur.get__removed_p9514a_k$())
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.get_isCancelling_o1apv_k$() ? 'Cancelling' : state.get_isCompleting_vi2bwp_k$() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.get_isActive_quafmh_k$() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.list_1 = list;
    this._isCompleting_1 = atomic$boolean$1(isCompleting);
    this._rootCause_1 = atomic$ref$1(rootCause);
    this._exceptionsHolder_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  protoOf(Finishing).set_isCompleting_1h5iw_k$ = function (value) {
    this._isCompleting_1.set_kotlinx$atomicfu$value_tm3k58_k$(value);
  };
  protoOf(Finishing).get_isCompleting_vi2bwp_k$ = function () {
    return this._isCompleting_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(Finishing).set_rootCause_zflycc_k$ = function (value) {
    this._rootCause_1.set_kotlinx$atomicfu$value_508e3y_k$(value);
  };
  protoOf(Finishing).get_rootCause_69dwxu_k$ = function () {
    return this._rootCause_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(Finishing).get_isSealed_zdv4z3_k$ = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).get_isCancelling_o1apv_k$ = function () {
    return !(this.get_rootCause_69dwxu_k$() == null);
  };
  protoOf(Finishing).get_isActive_quafmh_k$ = function () {
    return this.get_rootCause_69dwxu_k$() == null;
  };
  protoOf(Finishing).sealLocked_m2r6b3_k$ = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        this_0.add_utx5q5_k$(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.get_rootCause_69dwxu_k$();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.add_dl6gt3_k$(0, rootCause);
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.add_utx5q5_k$(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).addExceptionLocked_hjqo7b_k$ = function (exception) {
    var rootCause = this.get_rootCause_69dwxu_k$();
    if (rootCause == null) {
      this.set_rootCause_zflycc_k$(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        this_0.add_utx5q5_k$(eh);
        this_0.add_utx5q5_k$(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).add_utx5q5_k$(exception);
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.get_isCancelling_o1apv_k$() + ', completing=' + this.get_isCompleting_vi2bwp_k$() + ', rootCause=' + this.get_rootCause_69dwxu_k$() + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.list_1 + ']';
  };
  function _get_isCancelling__hlz7m9(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 instanceof Finishing) {
      tmp = _this__u8e3s4.get_isCancelling_o1apv_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.parent_1 = parent;
    this.state_1 = state;
    this.child_1 = child;
    this.proposedUpdate_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).invoke_py2q9a_k$ = function (cause) {
    continueCompleting(this.parent_1, this.state_1, this.child_1, this.proposedUpdate_1);
  };
  protoOf(ChildCompletion).invoke = function (cause) {
    return this.invoke_py2q9a_k$(cause);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, get_MODE_CANCELLABLE());
    this.job_1 = job;
  }
  protoOf(AwaitContinuation).getContinuationCancellationCause_3nurbc_k$ = function (parent) {
    var state = this.job_1.get_state_iypx7s_k$();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.get_rootCause_69dwxu_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.get_cause_iplhs0_k$();
    return parent.getCancellationException_8i1q6u_k$();
  };
  protoOf(AwaitContinuation).nameString_cd9e9w_k$ = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.JobSupport.awaitSuspend.<anonymous>' call
    var cont = new AwaitContinuation(intercepted($completion), $this);
    cont.initCancellability_shqc60_k$();
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ResumeAwaitOnCompletion(cont);
    disposeOnCancellation(cont, $this.invokeOnCompletion_n6cffu_k$(tmp$ret$1));
    return cont.getResult_clfhg3_k$();
  }
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).invoke_jau6kc_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_ce2a14_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_jau6kc_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(8);
            this.state0__1 = this.this$0__1.get_state_iypx7s_k$();
            var tmp_0 = this.state0__1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.set_state_rjd8d0_k$(6);
              suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.state0__1.childJob_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.state0__1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.tmp0_safe_receiver1__1 = this.state0__1.get_list_wopuqv_k$();
                if (this.tmp0_safe_receiver1__1 == null) {
                  this.WHEN_RESULT2__1 = null;
                  this.set_state_rjd8d0_k$(5);
                  continue $sm;
                } else {
                  var tmp_2 = this;
                  tmp_2.this3__1 = this.tmp0_safe_receiver1__1;
                  var tmp_3 = this;
                  tmp_3.list4__1 = this.this3__1;
                  var tmp_4 = this;
                  tmp_4.this5__1 = this.list4__1;
                  this.cur6__1 = this.this5__1.get__next_inmai1_k$();
                  this.set_state_rjd8d0_k$(1);
                  continue $sm;
                }
              } else {
                this.set_state_rjd8d0_k$(7);
                continue $sm;
              }
            }

          case 1:
            if (!!equals(this.cur6__1, this.this5__1)) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            var tmp_5 = this.cur6__1;
            if (tmp_5 instanceof ChildHandleNode) {
              var tmp_6 = this;
              tmp_6.it7__1 = this.cur6__1;
              this.set_state_rjd8d0_k$(2);
              suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.it7__1.childJob_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.cur6__1 = this.cur6__1.get__next_inmai1_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 4:
            this.WHEN_RESULT2__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 6:
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 7:
            return Unit_getInstance();
          case 8:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).create_ce2a14_k$ = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.this$0__1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).create_wyq9v6_k$ = function (value, completion) {
    return this.create_ce2a14_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_jau6kc_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this._state_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this._parentHandle_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).get_key_18j28a_k$ = function () {
    return Key_getInstance_2();
  };
  protoOf(JobSupport).set_parentHandle_dpifqv_k$ = function (value) {
    this._parentHandle_1.set_kotlinx$atomicfu$value_508e3y_k$(value);
  };
  protoOf(JobSupport).get_parentHandle_gmoqez_k$ = function () {
    return this._parentHandle_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(JobSupport).initParentJob_jbhsg3_k$ = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.set_parentHandle_dpifqv_k$(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.start_1tchgi_k$();
    var handle = parent.attachChild_314ws0_k$(this);
    this.set_parentHandle_dpifqv_k$(handle);
    if (this.get_isCompleted_a6j6c8_k$()) {
      handle.dispose_3nnxhr_k$();
      this.set_parentHandle_dpifqv_k$(NonDisposableHandle_getInstance());
    }
  };
  protoOf(JobSupport).get_state_iypx7s_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!(state instanceof OpDescriptor))
        return state;
      state.perform_8emi3i_k$(this);
    }
  };
  protoOf(JobSupport).get_isActive_quafmh_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.get_isActive_quafmh_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).get_isCompleted_a6j6c8_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).get_isCancelled_trk8pu_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.get_isCancelling_o1apv_k$();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).start_1tchgi_k$ = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var state = this.get_state_iypx7s_k$();
      var tmp0_subject = startInternal(this, state);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).onStart_qsx7gt_k$ = function () {
  };
  protoOf(JobSupport).getCancellationException_8i1q6u_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.get_rootCause_69dwxu_k$();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toCancellationException_70r72h_k$(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.toCancellationException$default_cbdcg1_k$(state.get_cause_iplhs0_k$());
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).toCancellationException_70r72h_k$ = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.cancellationExceptionMessage_a64063_k$() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).toCancellationException$default_cbdcg1_k$ = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.toCancellationException_70r72h_k$(_this__u8e3s4, message) : $super.toCancellationException_70r72h_k$.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).get_completionCause_bxx3i4_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_elvis_lhs = state.get_rootCause_69dwxu_k$();
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = state.get_cause_iplhs0_k$();
        } else {
          tmp = null;
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).get_completionCauseHandled_bdr920_k$ = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.JobSupport.<get-completionCauseHandled>.<anonymous>' call
    var it = this.get_state_iypx7s_k$();
    var tmp;
    if (it instanceof CompletedExceptionally) {
      tmp = it.get_handled_cq14k3_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).invokeOnCompletion_n6cffu_k$ = function (handler) {
    return this.invokeOnCompletion_sct3wq_k$(false, true, handler);
  };
  protoOf(JobSupport).invokeOnCompletion_sct3wq_k$ = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var state = this.get_state_iypx7s_k$();
        if (state instanceof Empty) {
          if (state.isActive_1) {
            if (this._state_1.atomicfu$compareAndSet(state, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.get_list_wopuqv_k$();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_getInstance();
              var tmp;
              if (onCancelling) {
                tmp = state instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                rootCause = state.get_rootCause_69dwxu_k$();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  if (handler instanceof ChildHandleNode) {
                    tmp_2 = !state.get_isCompleting_vi2bwp_k$();
                  } else {
                    tmp_2 = false;
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  if (!addLastAtomic(this, state, list, node)) {
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                  tmp_0 = Unit_getInstance();
                }
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, state, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_cause_iplhs0_k$());
            }
            return NonDisposableHandle_getInstance();
          }
        }
      }
    }
  };
  protoOf(JobSupport).join_o20dar_k$ = function ($completion) {
    if (!joinInternal(this)) {
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp$ret$0 = $completion.get_context_h02k06_k$();
      ensureActive(tmp$ret$0);
      return Unit_getInstance();
    }
    return joinSuspend(this, $completion);
  };
  protoOf(JobSupport).get_onJoin_hnj4j6_k$ = function () {
    return this;
  };
  protoOf(JobSupport).registerSelectClause0_s1vgi5_k$ = function (select, block) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.registerSelectClause0.<anonymous>' call
      var state = this.get_state_iypx7s_k$();
      if (select.get_isSelected_dl432q_k$())
        return Unit_getInstance();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (select.trySelect_1ivjiv_k$()) {
          startCoroutineUnintercepted(block, select.get_completion_t4gxwb_k$());
        }
        return Unit_getInstance();
      }
      if (startInternal(this, state) === 0) {
        // Inline function 'kotlinx.coroutines.asHandler' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = new SelectJoinOnCompletion(select, block);
        select.disposeOnSelect_wqqrl8_k$(this.invokeOnCompletion_n6cffu_k$(tmp$ret$1));
        return Unit_getInstance();
      }
    }
  };
  protoOf(JobSupport).removeNode_a91gpb_k$ = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var state = this.get_state_iypx7s_k$();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_getInstance();
        if (this._state_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_getInstance();
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.get_list_wopuqv_k$() == null)) {
            node.remove_fgfybg_k$();
          }
          return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
  };
  protoOf(JobSupport).get_onCancelComplete_4lfsth_k$ = function () {
    return false;
  };
  protoOf(JobSupport).cancel_hkmm2i_k$ = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.cancellationExceptionMessage_a64063_k$() : null, null, this);
    } else {
      tmp = cause;
    }
    this.cancelInternal_fraw7c_k$(tmp);
  };
  protoOf(JobSupport).cancellationExceptionMessage_a64063_k$ = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).cancel_e74who_k$ = function (cause) {
    var tmp1_elvis_lhs = cause == null ? null : this.toCancellationException$default_cbdcg1_k$(cause);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.cancellationExceptionMessage_a64063_k$() : null, null, this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    this.cancelInternal_fraw7c_k$(tmp);
    return true;
  };
  protoOf(JobSupport).cancelInternal_fraw7c_k$ = function (cause) {
    this.cancelImpl_5ls1mt_k$(cause);
  };
  protoOf(JobSupport).parentCancelled_ev6cqi_k$ = function (parentJob) {
    this.cancelImpl_5ls1mt_k$(parentJob);
  };
  protoOf(JobSupport).childCancelled_hsnipy_k$ = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.cancelImpl_5ls1mt_k$(cause) ? this.get_handlesException_f6my9f_k$() : false;
  };
  protoOf(JobSupport).cancelCoroutine_rpko3c_k$ = function (cause) {
    return this.cancelImpl_5ls1mt_k$(cause);
  };
  protoOf(JobSupport).cancelImpl_5ls1mt_k$ = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.get_onCancelComplete_4lfsth_k$()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.afterCompletion_2p0irt_k$(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).defaultCancellationException_ieljm6_k$ = function (message, cause) {
    return new JobCancellationException(message == null ? this.cancellationExceptionMessage_a64063_k$() : message, cause, this);
  };
  protoOf(JobSupport).getChildJobCancellationCause_wx9uoh_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.get_rootCause_69dwxu_k$();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.get_cause_iplhs0_k$();
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var message = 'Cannot be cancelling child in this state: ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).makeCompleting_2ycklh_k$ = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var state = this.get_state_iypx7s_k$();
        var finalState = tryMakeCompleting(this, state, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.afterCompletion_2p0irt_k$(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).makeCompletingOnce_b13xy2_k$ = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var state = this.get_state_iypx7s_k$();
        var finalState = tryMakeCompleting(this, state, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).get_children_4cwbp4_k$ = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).attachChild_314ws0_k$ = function (child) {
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ChildHandleNode(child);
    var tmp = this.invokeOnCompletion$default_1v3utx_k$(true, VOID, tmp$ret$1);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  protoOf(JobSupport).handleOnCompletionException_wdvdfx_k$ = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).onCancelling_aqzbl5_k$ = function (cause) {
  };
  protoOf(JobSupport).get_isScopedCoroutine_rwmmff_k$ = function () {
    return false;
  };
  protoOf(JobSupport).get_handlesException_f6my9f_k$ = function () {
    return true;
  };
  protoOf(JobSupport).handleJobException_9fdet1_k$ = function (exception) {
    return false;
  };
  protoOf(JobSupport).onCompletionInternal_38s8uv_k$ = function (state) {
  };
  protoOf(JobSupport).afterCompletion_2p0irt_k$ = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.toDebugString_v3moy1_k$() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).toDebugString_v3moy1_k$ = function () {
    return this.nameString_cd9e9w_k$() + '{' + stateString(this, this.get_state_iypx7s_k$()) + '}';
  };
  protoOf(JobSupport).nameString_cd9e9w_k$ = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).get_isCompletedExceptionally_i25lfz_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return tmp instanceof CompletedExceptionally;
  };
  protoOf(JobSupport).getCompletionExceptionOrNull_snuvbb_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletionExceptionOrNull.<anonymous>' call
      var message = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_exceptionOrNull__b3j7js(state, this);
  };
  protoOf(JobSupport).getCompletedInternal_26f4i6_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletedInternal.<anonymous>' call
      var message = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (state instanceof CompletedExceptionally)
      throw state.get_cause_iplhs0_k$();
    return unboxState(state);
  };
  protoOf(JobSupport).awaitInternal_5d94r6_k$ = function ($completion) {
    $l$loop: while (true) {
      var state = this.get_state_iypx7s_k$();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          throw state.get_cause_iplhs0_k$();
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $completion);
  };
  protoOf(JobSupport).registerSelectClause1Internal_95e6zb_k$ = function (select, block) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.registerSelectClause1Internal.<anonymous>' call
      var state = this.get_state_iypx7s_k$();
      if (select.get_isSelected_dl432q_k$())
        return Unit_getInstance();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (select.trySelect_1ivjiv_k$()) {
          if (state instanceof CompletedExceptionally) {
            select.resumeSelectWithException_pyrj5t_k$(state.get_cause_iplhs0_k$());
          } else {
            var tmp = unboxState(state);
            startCoroutineUnintercepted_0(block, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE(), select.get_completion_t4gxwb_k$());
          }
        }
        return Unit_getInstance();
      }
      if (startInternal(this, state) === 0) {
        // Inline function 'kotlinx.coroutines.asHandler' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = new SelectAwaitOnCompletion(select, block);
        select.disposeOnSelect_wqqrl8_k$(this.invokeOnCompletion_n6cffu_k$(tmp$ret$1));
        return Unit_getInstance();
      }
    }
  };
  protoOf(JobSupport).selectAwaitCompletion_tqth5t_k$ = function (select, block) {
    var state = this.get_state_iypx7s_k$();
    if (state instanceof CompletedExceptionally) {
      select.resumeSelectWithException_pyrj5t_k$(state.get_cause_iplhs0_k$());
    } else {
      var tmp = unboxState(state);
      startCoroutineCancellable(block, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE(), select.get_completion_t4gxwb_k$());
    }
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function get_FALSE() {
    return FALSE;
  }
  var FALSE;
  function get_TRUE() {
    return TRUE;
  }
  var TRUE;
  function get_RETRY() {
    return RETRY;
  }
  var RETRY;
  function InactiveNodeList(list) {
    this.list_1 = list;
  }
  protoOf(InactiveNodeList).get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  protoOf(InactiveNodeList).get_isActive_quafmh_k$ = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.list_1.getString_gb1pt9_k$('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.childJob_1 = childJob;
  }
  protoOf(ChildHandleNode).get_childJob_4cx54m_k$ = function () {
    return this.childJob_1;
  };
  protoOf(ChildHandleNode).get_parent_hy4reb_k$ = function () {
    return this.get_job_18j2r0_k$();
  };
  protoOf(ChildHandleNode).invoke_py2q9a_k$ = function (cause) {
    return this.childJob_1.parentCancelled_ev6cqi_k$(this.get_job_18j2r0_k$());
  };
  protoOf(ChildHandleNode).invoke = function (cause) {
    return this.invoke_py2q9a_k$(cause);
  };
  protoOf(ChildHandleNode).childCancelled_hsnipy_k$ = function (cause) {
    return this.get_job_18j2r0_k$().childCancelled_hsnipy_k$(cause);
  };
  function _get_handler__z70553_0($this) {
    return $this.handler_1;
  }
  function _get__invoked__yhwoci($this) {
    return $this._invoked_1;
  }
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.handler_1 = handler;
    this._invoked_1 = atomic$int$1(0);
  }
  protoOf(InvokeOnCancelling).invoke_py2q9a_k$ = function (cause) {
    if (this._invoked_1.atomicfu$compareAndSet(0, 1))
      this.handler_1(cause);
  };
  protoOf(InvokeOnCancelling).invoke = function (cause) {
    return this.invoke_py2q9a_k$(cause);
  };
  function _get_handler__z70553_1($this) {
    return $this.handler_1;
  }
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.handler_1 = handler;
  }
  protoOf(InvokeOnCompletion).invoke_py2q9a_k$ = function (cause) {
    return this.handler_1(cause);
  };
  protoOf(InvokeOnCompletion).invoke = function (cause) {
    return this.invoke_py2q9a_k$(cause);
  };
  function _get_continuation__y3gzck_0($this) {
    return $this.continuation_1;
  }
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.continuation_1 = continuation;
  }
  protoOf(ResumeOnCompletion).invoke_py2q9a_k$ = function (cause) {
    // Inline function 'kotlin.coroutines.resume' call
    var this_0 = this.continuation_1;
    // Inline function 'kotlin.Companion.success' call
    Companion_getInstance();
    var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
    this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
    return Unit_getInstance();
  };
  protoOf(ResumeOnCompletion).invoke = function (cause) {
    return this.invoke_py2q9a_k$(cause);
  };
  function _get_select__irrld($this) {
    return $this.select_1;
  }
  function _get_block__jewopo($this) {
    return $this.block_1;
  }
  function SelectJoinOnCompletion(select, block) {
    JobNode.call(this);
    this.select_1 = select;
    this.block_1 = block;
  }
  protoOf(SelectJoinOnCompletion).invoke_py2q9a_k$ = function (cause) {
    if (this.select_1.trySelect_1ivjiv_k$()) {
      startCoroutineCancellable_0(this.block_1, this.select_1.get_completion_t4gxwb_k$());
    }
  };
  protoOf(SelectJoinOnCompletion).invoke = function (cause) {
    return this.invoke_py2q9a_k$(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.state_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function _get_continuation__y3gzck_1($this) {
    return $this.continuation_1;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.continuation_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).invoke_py2q9a_k$ = function (cause) {
    var state = this.get_job_18j2r0_k$().get_state_iypx7s_k$();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = this.continuation_1;
      var exception = state.get_cause_iplhs0_k$();
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resume' call
      var this_1 = this.continuation_1;
      var tmp = unboxState(state);
      var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$2 = _Result___init__impl__xyqfz8(value);
      this_1.resumeWith_dtxwbr_k$(tmp$ret$2);
    }
  };
  protoOf(ResumeAwaitOnCompletion).invoke = function (cause) {
    return this.invoke_py2q9a_k$(cause);
  };
  function _get_select__irrld_0($this) {
    return $this.select_1;
  }
  function _get_block__jewopo_0($this) {
    return $this.block_1;
  }
  function SelectAwaitOnCompletion(select, block) {
    JobNode.call(this);
    this.select_1 = select;
    this.block_1 = block;
  }
  protoOf(SelectAwaitOnCompletion).invoke_py2q9a_k$ = function (cause) {
    if (this.select_1.trySelect_1ivjiv_k$()) {
      this.get_job_18j2r0_k$().selectAwaitCompletion_tqth5t_k$(this.select_1, this.block_1);
    }
  };
  protoOf(SelectAwaitOnCompletion).invoke = function (cause) {
    return this.invoke_py2q9a_k$(cause);
  };
  function IncompleteStateBox(state) {
    this.state_1 = state;
  }
  protoOf(IncompleteStateBox).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.child_1 = child;
  }
  protoOf(ChildContinuation).get_child_ipppmb_k$ = function () {
    return this.child_1;
  };
  protoOf(ChildContinuation).invoke_py2q9a_k$ = function (cause) {
    this.child_1.parentCancelled_c5s5ig_k$(this.child_1.getContinuationCancellationCause_3nurbc_k$(this.get_job_18j2r0_k$()));
  };
  protoOf(ChildContinuation).invoke = function (cause) {
    return this.invoke_py2q9a_k$(cause);
  };
  function handlesException($this) {
    var tmp = $this.get_parentHandle_gmoqez_k$();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_job_18j2r0_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.get_handlesException_f6my9f_k$())
        return true;
      var tmp_1 = parentJob.get_parentHandle_gmoqez_k$();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_job_18j2r0_k$();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.initParentJob_jbhsg3_k$(parent);
    this.handlesException_1 = handlesException(this);
  }
  protoOf(JobImpl).get_onCancelComplete_4lfsth_k$ = function () {
    return true;
  };
  protoOf(JobImpl).get_handlesException_f6my9f_k$ = function () {
    return this.handlesException_1;
  };
  protoOf(JobImpl).complete_9ww6vb_k$ = function () {
    return this.makeCompleting_2ycklh_k$(Unit_getInstance());
  };
  protoOf(JobImpl).completeExceptionally_xyzekf_k$ = function (exception) {
    return this.makeCompleting_2ycklh_k$(new CompletedExceptionally(exception));
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_hcqz93_k$();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).limitedParallelism_b7nunq_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  protoOf(MainCoroutineDispatcher).toStringInternalImpl_hcqz93_k$ = function () {
    var main = Dispatchers_getInstance().get_Main_wo5vz6_k$();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.get_immediate_r3y8eg_k$();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).childCancelled_hsnipy_k$ = function (cause) {
    return false;
  };
  function TimeoutCancellationException_init_$Init$(message, $this) {
    TimeoutCancellationException.call($this, message, null);
    return $this;
  }
  function TimeoutCancellationException_init_$Create$(message) {
    var tmp = TimeoutCancellationException_init_$Init$(message, objectCreate(protoOf(TimeoutCancellationException)));
    captureStack(tmp, TimeoutCancellationException_init_$Create$);
    return tmp;
  }
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.coroutine_1 = coroutine;
  }
  protoOf(TimeoutCancellationException).get_coroutine_cnpmtt_k$ = function () {
    return this.coroutine_1;
  };
  protoOf(TimeoutCancellationException).createCopy_mmw9ld_k$ = function () {
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = this.message;
    var this_0 = new TimeoutCancellationException(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, this.coroutine_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.TimeoutCancellationException.createCopy.<anonymous>' call
    initCause(this_0, this);
    return this_0;
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).limitedParallelism_b7nunq_k$ = function (parallelism) {
    throw UnsupportedOperationException_init_$Create$('limitedParallelism is not supported for Dispatchers.Unconfined');
  };
  protoOf(Unconfined).isDispatchNeeded_ft82v4_k$ = function (context) {
    return false;
  };
  protoOf(Unconfined).dispatch_qa3n0o_k$ = function (context, block) {
    var yieldContext = context.get_y2st91_k$(Key_getInstance_3());
    if (!(yieldContext == null)) {
      yieldContext.dispatcherWasUnconfined_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
    Key_instance_2 = this;
  }
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function YieldContext() {
    Key_getInstance_3();
    AbstractCoroutineContextElement.call(this, Key_getInstance_3());
    this.dispatcherWasUnconfined_1 = false;
  }
  protoOf(YieldContext).set_dispatcherWasUnconfined_dtzy9d_k$ = function (_set____db54di) {
    this.dispatcherWasUnconfined_1 = _set____db54di;
  };
  protoOf(YieldContext).get_dispatcherWasUnconfined_gkf39i_k$ = function () {
    return this.dispatcherWasUnconfined_1;
  };
  function get_EMPTY() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return EMPTY;
  }
  var EMPTY;
  function get_OFFER_SUCCESS() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return OFFER_SUCCESS;
  }
  var OFFER_SUCCESS;
  function get_OFFER_FAILED() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return OFFER_FAILED;
  }
  var OFFER_FAILED;
  function get_POLL_FAILED() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return POLL_FAILED;
  }
  var POLL_FAILED;
  function get_ENQUEUE_FAILED() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return ENQUEUE_FAILED;
  }
  var ENQUEUE_FAILED;
  function get_HANDLER_INVOKED() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return HANDLER_INVOKED;
  }
  var HANDLER_INVOKED;
  function _get_receive__lsa4cu($this) {
    return $this.receive_1;
  }
  function hasNextResult($this, result) {
    if (result instanceof Closed) {
      if (!(result.closeCause_1 == null))
        throw recoverStackTrace_0(result.get_receiveException_nqbiq3_k$());
      return false;
    }
    return true;
  }
  function hasNextSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.Itr.hasNextSuspend.<anonymous>' call
      var receive = new ReceiveHasNext($this, cancellable);
      while (true) {
        if (enqueueReceive($this.channel_1, receive)) {
          removeReceiveOnCancel($this.channel_1, cancellable, receive);
          break $l$block_1;
        }
        var result = $this.channel_1.pollInternal_ml771g_k$();
        $this.result_1 = result;
        if (result instanceof Closed) {
          if (result.closeCause_1 == null) {
            // Inline function 'kotlin.coroutines.resume' call
            // Inline function 'kotlin.Companion.success' call
            Companion_getInstance();
            var tmp$ret$1 = _Result___init__impl__xyqfz8(false);
            cancellable.resumeWith_dtxwbr_k$(tmp$ret$1);
          } else {
            // Inline function 'kotlin.coroutines.resumeWithException' call
            var exception = result.get_receiveException_nqbiq3_k$();
            // Inline function 'kotlin.Companion.failure' call
            Companion_getInstance();
            var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
            cancellable.resumeWith_dtxwbr_k$(tmp$ret$3);
          }
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp0_safe_receiver = $this.channel_1.onUndeliveredElement_1;
          var tmp;
          if (tmp0_safe_receiver == null) {
            tmp = null;
          } else {
            tmp = bindCancellationFun(tmp0_safe_receiver, (result == null ? true : !(result == null)) ? result : THROW_CCE(), cancellable.get_context_h02k06_k$());
          }
          cancellable.resume_a4kjl1_k$(true, tmp);
          break $l$block_1;
        }
      }
    }
    return cancellable.getResult_clfhg3_k$();
  }
  function receiveSuspend($this, receiveMode, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.AbstractChannel.receiveSuspend.<anonymous>' call
      var tmp;
      if ($this.onUndeliveredElement_1 == null) {
        tmp = new ReceiveElement(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode);
      } else {
        tmp = new ReceiveElementWithUndeliveredHandler(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode, $this.onUndeliveredElement_1);
      }
      var receive = tmp;
      while (true) {
        if (enqueueReceive($this, receive)) {
          removeReceiveOnCancel($this, cancellable, receive);
          break $l$block_1;
        }
        var result = $this.pollInternal_ml771g_k$();
        if (result instanceof Closed) {
          receive.resumeReceiveClosed_dlsk5t_k$(result);
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp_0 = receive.resumeValue_fbzpwa_k$((result == null ? true : !(result == null)) ? result : THROW_CCE());
          cancellable.resume_a4kjl1_k$(tmp_0, receive.resumeOnCancellationFun_ar0rhq_k$((result == null ? true : !(result == null)) ? result : THROW_CCE()));
          break $l$block_1;
        }
      }
    }
    return cancellable.getResult_clfhg3_k$();
  }
  function enqueueReceive($this, receive) {
    // Inline function 'kotlin.also' call
    var this_0 = $this.enqueueReceiveInternal_djlvn7_k$(receive);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceive.<anonymous>' call
    if (this_0) {
      $this.onReceiveEnqueued_xthhlc_k$();
    }
    return this_0;
  }
  function TryPollDesc(queue) {
    RemoveFirstDesc.call(this, queue);
  }
  protoOf(TryPollDesc).failure_wmd2f3_k$ = function (affected) {
    var tmp;
    if (affected instanceof Closed) {
      tmp = affected;
    } else {
      if (!(affected instanceof Send)) {
        tmp = get_POLL_FAILED();
      } else {
        tmp = null;
      }
    }
    return tmp;
  };
  protoOf(TryPollDesc).onPrepare_8o6h9r_k$ = function (prepareOp) {
    var tmp = prepareOp.get_affected_lutt4z_k$();
    var affected = tmp instanceof Send ? tmp : THROW_CCE();
    var tmp0_elvis_lhs = affected.tryResumeSend_j2jt7y_k$(prepareOp);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return get_REMOVE_PREPARED();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var token = tmp_0;
    if (token === get_RETRY_ATOMIC())
      return get_RETRY_ATOMIC();
    // Inline function 'kotlinx.coroutines.assert' call
    return null;
  };
  protoOf(TryPollDesc).onRemoved_cq10ti_k$ = function (affected) {
    (affected instanceof Send ? affected : THROW_CCE()).undeliveredElement_dj8lsv_k$();
  };
  function registerSelectReceiveMode($this, select, receiveMode, block) {
    while (true) {
      if (select.get_isSelected_dl432q_k$())
        return Unit_getInstance();
      if ($this.get_isEmptyImpl_9w6w0q_k$()) {
        if (enqueueReceiveSelect($this, select, block, receiveMode))
          return Unit_getInstance();
      } else {
        var pollResult = $this.pollSelectInternal_v3uf2p_k$(select);
        if (pollResult === get_ALREADY_SELECTED())
          return Unit_getInstance();
        else if (pollResult !== get_POLL_FAILED())
          if (pollResult !== get_RETRY_ATOMIC()) {
            tryStartBlockUnintercepted(block, $this, select, receiveMode, pollResult);
          }
      }
    }
  }
  function tryStartBlockUnintercepted(_this__u8e3s4, $this, select, receiveMode, value) {
    if (value instanceof Closed) {
      if (receiveMode === 0) {
        throw recoverStackTrace_0(value.get_receiveException_nqbiq3_k$());
      } else if (receiveMode === 1) {
        if (!select.trySelect_1ivjiv_k$())
          return Unit_getInstance();
        startCoroutineUnintercepted_0(_this__u8e3s4, new ChannelResult(Companion_getInstance_1().closed_xuwu5z_k$(value.closeCause_1)), select.get_completion_t4gxwb_k$());
      }
    } else {
      if (receiveMode === 1) {
        // Inline function 'kotlinx.coroutines.channels.toResult' call
        var tmp;
        if (value instanceof Closed) {
          tmp = Companion_getInstance_1().closed_xuwu5z_k$(value.closeCause_1);
        } else {
          var tmp_0 = Companion_getInstance_1();
          tmp = tmp_0.success_tizbw6_k$((value == null ? true : !(value == null)) ? value : THROW_CCE());
        }
        var tmp$ret$0 = tmp;
        startCoroutineUnintercepted_0(_this__u8e3s4, new ChannelResult(tmp$ret$0), select.get_completion_t4gxwb_k$());
      } else {
        startCoroutineUnintercepted_0(_this__u8e3s4, value, select.get_completion_t4gxwb_k$());
      }
    }
  }
  function enqueueReceiveSelect($this, select, block, receiveMode) {
    var node = new ReceiveSelect($this, select, block, receiveMode);
    var result = enqueueReceive($this, node);
    if (result) {
      select.disposeOnSelect_wqqrl8_k$(node);
    }
    return result;
  }
  function removeReceiveOnCancel($this, cont, receive) {
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new RemoveReceiveOnCancel($this, receive);
    return cont.invokeOnCancellation_kffkqp_k$(tmp$ret$1);
  }
  function RemoveReceiveOnCancel($outer, receive) {
    this.$this_1 = $outer;
    BeforeResumeCancelHandler.call(this);
    this.receive_1 = receive;
  }
  protoOf(RemoveReceiveOnCancel).invoke_py2q9a_k$ = function (cause) {
    if (this.receive_1.remove_fgfybg_k$()) {
      this.$this_1.onReceiveDequeued_4w5qpk_k$();
    }
  };
  protoOf(RemoveReceiveOnCancel).invoke = function (cause) {
    return this.invoke_py2q9a_k$(cause);
  };
  protoOf(RemoveReceiveOnCancel).toString = function () {
    return 'RemoveReceiveOnCancel[' + this.receive_1 + ']';
  };
  function Itr(channel) {
    this.channel_1 = channel;
    this.result_1 = get_POLL_FAILED();
  }
  protoOf(Itr).get_channel_dhi7tm_k$ = function () {
    return this.channel_1;
  };
  protoOf(Itr).set_result_kwrmx7_k$ = function (_set____db54di) {
    this.result_1 = _set____db54di;
  };
  protoOf(Itr).get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  protoOf(Itr).hasNext_nhy1w3_k$ = function ($completion) {
    if (!(this.result_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.result_1);
    this.result_1 = this.channel_1.pollInternal_ml771g_k$();
    if (!(this.result_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.result_1);
    return hasNextSuspend(this, $completion);
  };
  protoOf(Itr).next_20eer_k$ = function () {
    var result = this.result_1;
    if (result instanceof Closed)
      throw recoverStackTrace_0(result.get_receiveException_nqbiq3_k$());
    if (!(result === get_POLL_FAILED())) {
      this.result_1 = get_POLL_FAILED();
      return (result == null ? true : !(result == null)) ? result : THROW_CCE();
    }
    throw IllegalStateException_init_$Create$("'hasNext' should be called prior to 'next' invocation");
  };
  function ReceiveElement(cont, receiveMode) {
    Receive.call(this);
    this.cont_1 = cont;
    this.receiveMode_1 = receiveMode;
  }
  protoOf(ReceiveElement).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(ReceiveElement).get_receiveMode_kw93yb_k$ = function () {
    return this.receiveMode_1;
  };
  protoOf(ReceiveElement).resumeValue_fbzpwa_k$ = function (value) {
    return this.receiveMode_1 === 1 ? new ChannelResult(Companion_getInstance_1().success_tizbw6_k$(value)) : value;
  };
  protoOf(ReceiveElement).tryResumeReceive_hyboij_k$ = function (value, otherOp) {
    var tmp = this.resumeValue_fbzpwa_k$(value);
    var tmp1_elvis_lhs = this.cont_1.tryResume_2flfz_k$(tmp, otherOp == null ? null : otherOp.get_desc_woknve_k$(), this.resumeOnCancellationFun_ar0rhq_k$(value));
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var token = tmp_0;
    // Inline function 'kotlinx.coroutines.assert' call
    if (otherOp == null)
      null;
    else {
      otherOp.finishPrepare_o8sfrw_k$();
    }
    return get_RESUME_TOKEN();
  };
  protoOf(ReceiveElement).completeResumeReceive_362bu9_k$ = function (value) {
    return this.cont_1.completeResume_fabtk_k$(get_RESUME_TOKEN());
  };
  protoOf(ReceiveElement).resumeReceiveClosed_dlsk5t_k$ = function (closed) {
    if (this.receiveMode_1 === 1) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = this.cont_1;
      // Inline function 'kotlinx.coroutines.channels.toResult' call
      var tmp$ret$0 = Companion_getInstance_1().closed_xuwu5z_k$(closed.closeCause_1);
      var value = new ChannelResult(tmp$ret$0);
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$1 = _Result___init__impl__xyqfz8(value);
      this_0.resumeWith_dtxwbr_k$(tmp$ret$1);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_1 = this.cont_1;
      var exception = closed.get_receiveException_nqbiq3_k$();
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
      this_1.resumeWith_dtxwbr_k$(tmp$ret$3);
    }
  };
  protoOf(ReceiveElement).toString = function () {
    return 'ReceiveElement@' + get_hexAddress(this) + '[receiveMode=' + this.receiveMode_1 + ']';
  };
  function ReceiveElementWithUndeliveredHandler(cont, receiveMode, onUndeliveredElement) {
    ReceiveElement.call(this, cont, receiveMode);
    this.onUndeliveredElement_1 = onUndeliveredElement;
  }
  protoOf(ReceiveElementWithUndeliveredHandler).get_onUndeliveredElement_a8l4w7_k$ = function () {
    return this.onUndeliveredElement_1;
  };
  protoOf(ReceiveElementWithUndeliveredHandler).resumeOnCancellationFun_ar0rhq_k$ = function (value) {
    return bindCancellationFun(this.onUndeliveredElement_1, value, this.cont_1.get_context_h02k06_k$());
  };
  function ReceiveHasNext(iterator, cont) {
    Receive.call(this);
    this.iterator_1 = iterator;
    this.cont_1 = cont;
  }
  protoOf(ReceiveHasNext).get_iterator_c8vxs9_k$ = function () {
    return this.iterator_1;
  };
  protoOf(ReceiveHasNext).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(ReceiveHasNext).tryResumeReceive_hyboij_k$ = function (value, otherOp) {
    var tmp1_elvis_lhs = this.cont_1.tryResume_2flfz_k$(true, otherOp == null ? null : otherOp.get_desc_woknve_k$(), this.resumeOnCancellationFun_ar0rhq_k$(value));
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    // Inline function 'kotlinx.coroutines.assert' call
    if (otherOp == null)
      null;
    else {
      otherOp.finishPrepare_o8sfrw_k$();
    }
    return get_RESUME_TOKEN();
  };
  protoOf(ReceiveHasNext).completeResumeReceive_362bu9_k$ = function (value) {
    this.iterator_1.result_1 = value;
    this.cont_1.completeResume_fabtk_k$(get_RESUME_TOKEN());
  };
  protoOf(ReceiveHasNext).resumeReceiveClosed_dlsk5t_k$ = function (closed) {
    var tmp;
    if (closed.closeCause_1 == null) {
      tmp = this.cont_1.tryResume$default_cgwzli_k$(false);
    } else {
      tmp = this.cont_1.tryResumeWithException_4drsj6_k$(closed.get_receiveException_nqbiq3_k$());
    }
    var token = tmp;
    if (!(token == null)) {
      this.iterator_1.result_1 = closed;
      this.cont_1.completeResume_fabtk_k$(token);
    }
  };
  protoOf(ReceiveHasNext).resumeOnCancellationFun_ar0rhq_k$ = function (value) {
    var tmp0_safe_receiver = this.iterator_1.channel_1.onUndeliveredElement_1;
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.cont_1.get_context_h02k06_k$());
  };
  protoOf(ReceiveHasNext).toString = function () {
    return 'ReceiveHasNext@' + get_hexAddress(this);
  };
  function ReceiveSelect(channel, select, block, receiveMode) {
    Receive.call(this);
    this.channel_1 = channel;
    this.select_1 = select;
    this.block_1 = block;
    this.receiveMode_1 = receiveMode;
  }
  protoOf(ReceiveSelect).get_channel_dhi7tm_k$ = function () {
    return this.channel_1;
  };
  protoOf(ReceiveSelect).get_select_jfcyrp_k$ = function () {
    return this.select_1;
  };
  protoOf(ReceiveSelect).get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  protoOf(ReceiveSelect).get_receiveMode_kw93yb_k$ = function () {
    return this.receiveMode_1;
  };
  protoOf(ReceiveSelect).tryResumeReceive_hyboij_k$ = function (value, otherOp) {
    var tmp = this.select_1.trySelectOther_xxnvgp_k$(otherOp);
    return (tmp == null ? true : tmp instanceof Symbol) ? tmp : THROW_CCE();
  };
  protoOf(ReceiveSelect).completeResumeReceive_362bu9_k$ = function (value) {
    startCoroutineCancellable(this.block_1, this.receiveMode_1 === 1 ? new ChannelResult(Companion_getInstance_1().success_tizbw6_k$(value)) : value, this.select_1.get_completion_t4gxwb_k$(), this.resumeOnCancellationFun_ar0rhq_k$(value));
  };
  protoOf(ReceiveSelect).resumeReceiveClosed_dlsk5t_k$ = function (closed) {
    if (!this.select_1.trySelect_1ivjiv_k$())
      return Unit_getInstance();
    var tmp0_subject = this.receiveMode_1;
    if (tmp0_subject === 0) {
      this.select_1.resumeSelectWithException_pyrj5t_k$(closed.get_receiveException_nqbiq3_k$());
    } else if (tmp0_subject === 1) {
      startCoroutineCancellable(this.block_1, new ChannelResult(Companion_getInstance_1().closed_xuwu5z_k$(closed.closeCause_1)), this.select_1.get_completion_t4gxwb_k$());
    }
  };
  protoOf(ReceiveSelect).dispose_3nnxhr_k$ = function () {
    if (this.remove_fgfybg_k$()) {
      this.channel_1.onReceiveDequeued_4w5qpk_k$();
    }
  };
  protoOf(ReceiveSelect).resumeOnCancellationFun_ar0rhq_k$ = function (value) {
    var tmp0_safe_receiver = this.channel_1.onUndeliveredElement_1;
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.select_1.get_completion_t4gxwb_k$().get_context_h02k06_k$());
  };
  protoOf(ReceiveSelect).toString = function () {
    return 'ReceiveSelect@' + get_hexAddress(this) + '[' + this.select_1 + ',receiveMode=' + this.receiveMode_1 + ']';
  };
  function AbstractChannel$onReceive$1(this$0) {
    this.this$0__1 = this$0;
  }
  protoOf(AbstractChannel$onReceive$1).registerSelectClause1_zhducy_k$ = function (select, block) {
    registerSelectReceiveMode(this.this$0__1, select, 0, isSuspendFunction(block, 1) ? block : THROW_CCE());
  };
  protoOf(AbstractChannel$onReceive$1).registerSelectClause1_5i5exy_k$ = function (select, block) {
    return this.registerSelectClause1_zhducy_k$(select, block);
  };
  function AbstractChannel$onReceiveCatching$1(this$0) {
    this.this$0__1 = this$0;
  }
  protoOf(AbstractChannel$onReceiveCatching$1).registerSelectClause1_3bxgmr_k$ = function (select, block) {
    registerSelectReceiveMode(this.this$0__1, select, 1, isSuspendFunction(block, 1) ? block : THROW_CCE());
  };
  protoOf(AbstractChannel$onReceiveCatching$1).registerSelectClause1_5i5exy_k$ = function (select, block) {
    return this.registerSelectClause1_3bxgmr_k$(select, block);
  };
  function AbstractChannel(onUndeliveredElement) {
    AbstractSendChannel.call(this, onUndeliveredElement);
  }
  protoOf(AbstractChannel).pollInternal_ml771g_k$ = function () {
    while (true) {
      var tmp0_elvis_lhs = this.takeFirstSendOrPeekClosed_h7sgez_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_POLL_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var send = tmp;
      var token = send.tryResumeSend_j2jt7y_k$(null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        send.completeResumeSend_upbxpe_k$();
        return send.get_pollResult_t5mkl7_k$();
      }
      send.undeliveredElement_dj8lsv_k$();
    }
  };
  protoOf(AbstractChannel).pollSelectInternal_v3uf2p_k$ = function (select) {
    var pollOp = this.describeTryPoll_k2m4a9_k$();
    var failure = select.performAtomicTrySelect_k28gsj_k$(pollOp);
    if (!(failure == null))
      return failure;
    var send = pollOp.get_result_iyg5d2_k$();
    send.completeResumeSend_upbxpe_k$();
    return pollOp.get_result_iyg5d2_k$().get_pollResult_t5mkl7_k$();
  };
  protoOf(AbstractChannel).get_hasReceiveOrClosed_wl54xr_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp = this.queue_1.get__next_inmai1_k$();
    return isInterface(tmp, ReceiveOrClosed);
  };
  protoOf(AbstractChannel).get_isClosedForReceive_v0r77d_k$ = function () {
    return !(this.get_closedForReceive_iep3v5_k$() == null) ? this.get_isBufferEmpty_t57jne_k$() : false;
  };
  protoOf(AbstractChannel).get_isEmpty_zauvru_k$ = function () {
    return this.get_isEmptyImpl_9w6w0q_k$();
  };
  protoOf(AbstractChannel).get_isEmptyImpl_9w6w0q_k$ = function () {
    var tmp;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp_0 = this.queue_1.get__next_inmai1_k$();
    if (!(tmp_0 instanceof Send)) {
      tmp = this.get_isBufferEmpty_t57jne_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AbstractChannel).receive_awoumx_k$ = function ($completion) {
    var result = this.pollInternal_ml771g_k$();
    var tmp;
    if (!(result === get_POLL_FAILED())) {
      tmp = !(result instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      return (result == null ? true : !(result == null)) ? result : THROW_CCE();
    }
    return receiveSuspend(this, 0, $completion);
  };
  protoOf(AbstractChannel).enqueueReceiveInternal_djlvn7_k$ = function (receive) {
    var tmp;
    if (this.get_isBufferAlwaysEmpty_ross6j_k$()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
        var this_0 = this.queue_1;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        if (!!(this_0.get__prev_inntnt_k$() instanceof Send)) {
          tmp$ret$1 = false;
          break $l$block;
        }
        this_0.addLast_mio4hw_k$(receive);
        tmp$ret$1 = true;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$3;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf' call
        var this_1 = this.queue_1;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        if (!!(this_1.get__prev_inntnt_k$() instanceof Send)) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        if (!this.get_isBufferEmpty_t57jne_k$()) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        this_1.addLast_mio4hw_k$(receive);
        tmp$ret$3 = true;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  protoOf(AbstractChannel).receiveCatching_golgg7_k$ = function ($completion) {
    var result = this.pollInternal_ml771g_k$();
    if (!(result === get_POLL_FAILED())) {
      // Inline function 'kotlinx.coroutines.channels.toResult' call
      var tmp;
      if (result instanceof Closed) {
        tmp = Companion_getInstance_1().closed_xuwu5z_k$(result.closeCause_1);
      } else {
        var tmp_0 = Companion_getInstance_1();
        tmp = tmp_0.success_tizbw6_k$((result == null ? true : !(result == null)) ? result : THROW_CCE());
      }
      var tmp$ret$0 = tmp;
      return new ChannelResult(tmp$ret$0);
    }
    var tmp_1 = receiveSuspend(this, 1, $completion);
    if (tmp_1 === get_COROUTINE_SUSPENDED())
      return tmp_1;
    return tmp_1;
  };
  protoOf(AbstractChannel).tryReceive_y3ovg2_k$ = function () {
    var result = this.pollInternal_ml771g_k$();
    if (result === get_POLL_FAILED())
      return Companion_getInstance_1().failure_q0nifh_k$();
    if (result instanceof Closed)
      return Companion_getInstance_1().closed_xuwu5z_k$(result.closeCause_1);
    var tmp = Companion_getInstance_1();
    return tmp.success_tizbw6_k$((result == null ? true : !(result == null)) ? result : THROW_CCE());
  };
  protoOf(AbstractChannel).cancel_e74who_k$ = function (cause) {
    return this.cancelInternal_2g5741_k$(cause);
  };
  protoOf(AbstractChannel).cancel_hkmm2i_k$ = function (cause) {
    if (this.get_isClosedForReceive_v0r77d_k$())
      return Unit_getInstance();
    this.cancelInternal_2g5741_k$(cause == null ? CancellationException_init_$Create$(get_classSimpleName(this) + ' was cancelled') : cause);
  };
  protoOf(AbstractChannel).cancelInternal_2g5741_k$ = function (cause) {
    // Inline function 'kotlin.also' call
    var this_0 = this.close_ukldxa_k$(cause);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.cancelInternal.<anonymous>' call
    this.onCancelIdempotent_u08yt9_k$(this_0);
    return this_0;
  };
  protoOf(AbstractChannel).onCancelIdempotent_u08yt9_k$ = function (wasClosed) {
    var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Cannot happen';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var closed = tmp;
    var list = _InlineList___init__impl__z8n56();
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var previous = closed.get__prev_inntnt_k$();
      if (previous instanceof LinkedListHead) {
        break $l$loop_0;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      if (!previous.remove_fgfybg_k$()) {
        previous.helpRemove_v3bmp7_k$();
        continue $l$loop_0;
      }
      var tmp_0 = list;
      list = InlineList__plus_impl_nuetvo(tmp_0, previous instanceof Send ? previous : THROW_CCE());
    }
    this.onCancelIdempotentList_y9g36l_k$(list, closed);
  };
  protoOf(AbstractChannel).onCancelIdempotentList_y9g36l_k$ = function (list, closed) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          ((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()).resumeSendClosed_wm9642_k$(closed);
        } else {
          var tmp_0 = _get_holder__f6h5pd(list);
          var list_0 = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable = list_0.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
              list_0.get_c1px32_k$(i).resumeSendClosed_wm9642_k$(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
  };
  protoOf(AbstractChannel).iterator_jk1svi_k$ = function () {
    return new Itr(this);
  };
  protoOf(AbstractChannel).describeTryPoll_k2m4a9_k$ = function () {
    return new TryPollDesc(this.queue_1);
  };
  protoOf(AbstractChannel).get_onReceive_mimw11_k$ = function () {
    return new AbstractChannel$onReceive$1(this);
  };
  protoOf(AbstractChannel).get_onReceiveCatching_ajg9xa_k$ = function () {
    return new AbstractChannel$onReceiveCatching$1(this);
  };
  protoOf(AbstractChannel).takeFirstReceiveOrPeekClosed_ri9e84_k$ = function () {
    // Inline function 'kotlin.also' call
    var this_0 = protoOf(AbstractSendChannel).takeFirstReceiveOrPeekClosed_ri9e84_k$.call(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
    var tmp;
    if (!(this_0 == null)) {
      tmp = !(this_0 instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.onReceiveDequeued_4w5qpk_k$();
    }
    return this_0;
  };
  protoOf(AbstractChannel).onReceiveEnqueued_xthhlc_k$ = function () {
  };
  protoOf(AbstractChannel).onReceiveDequeued_4w5qpk_k$ = function () {
  };
  function _get_onCloseHandler__k3p6yi($this) {
    return $this.onCloseHandler_1;
  }
  function SendBufferedDesc(queue, element) {
    AddLastDesc.call(this, queue, new SendBuffered(element));
  }
  protoOf(SendBufferedDesc).failure_wmd2f3_k$ = function (affected) {
    var tmp;
    if (affected instanceof Closed) {
      tmp = affected;
    } else {
      if (isInterface(affected, ReceiveOrClosed)) {
        tmp = get_OFFER_FAILED();
      } else {
        tmp = null;
      }
    }
    return tmp;
  };
  function _get_isFullImpl__v905xu($this) {
    var tmp;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp_0 = $this.queue_1.get__next_inmai1_k$();
    if (!isInterface(tmp_0, ReceiveOrClosed)) {
      tmp = $this.get_isBufferFull_xv8jm_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function helpCloseAndGetSendException($this, closed) {
    helpClose($this, closed);
    return closed.get_sendException_qpq1ry_k$();
  }
  function helpCloseAndGetSendException_0($this, element, closed) {
    helpClose($this, closed);
    var tmp0_safe_receiver = $this.onUndeliveredElement_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      addSuppressed(tmp1_safe_receiver, closed.get_sendException_qpq1ry_k$());
      throw tmp1_safe_receiver;
    }
    return closed.get_sendException_qpq1ry_k$();
  }
  function sendSuspend($this, element, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.sendSuspend.<anonymous>' call
      loop: while (true) {
        if (_get_isFullImpl__v905xu($this)) {
          var send = $this.onUndeliveredElement_1 == null ? new SendElement(element, cancellable) : new SendElementWithUndeliveredHandler(element, cancellable, $this.onUndeliveredElement_1);
          var enqueueResult = $this.enqueueSend_zbz1i1_k$(send);
          if (enqueueResult == null) {
            removeOnCancellation(cancellable, send);
            break $l$block_2;
          } else {
            if (enqueueResult instanceof Closed) {
              helpCloseAndResumeWithSendException(cancellable, $this, element, enqueueResult);
              break $l$block_2;
            } else {
              if (enqueueResult !== get_ENQUEUE_FAILED()) {
                if (!(enqueueResult instanceof Receive)) {
                  var message = 'enqueueSend returned ' + toString_0(enqueueResult);
                  throw IllegalStateException_init_$Create$(toString(message));
                }
              }
            }
          }
        }
        var offerResult = $this.offerInternal_34p2n9_k$(element);
        if (offerResult === get_OFFER_SUCCESS()) {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          Companion_getInstance();
          var tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
          cancellable.resumeWith_dtxwbr_k$(tmp$ret$1);
          break $l$block_2;
        } else {
          if (offerResult === get_OFFER_FAILED())
            continue loop;
          else {
            if (offerResult instanceof Closed) {
              helpCloseAndResumeWithSendException(cancellable, $this, element, offerResult);
              break $l$block_2;
            } else {
              var message_0 = 'offerInternal returned ' + toString(offerResult);
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
          }
        }
      }
    }
    return cancellable.getResult_clfhg3_k$();
  }
  function helpCloseAndResumeWithSendException(_this__u8e3s4, $this, element, closed) {
    helpClose($this, closed);
    var sendException = closed.get_sendException_qpq1ry_k$();
    var tmp0_safe_receiver = $this.onUndeliveredElement_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      addSuppressed(tmp1_safe_receiver, sendException);
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_safe_receiver));
      _this__u8e3s4.resumeWith_dtxwbr_k$(tmp$ret$0);
      return Unit_getInstance();
    }
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    Companion_getInstance();
    var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(sendException));
    _this__u8e3s4.resumeWith_dtxwbr_k$(tmp$ret$3);
  }
  function invokeOnCloseHandler($this, cause) {
    var handler = $this.onCloseHandler_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if ((!(handler === null) ? !(handler === get_HANDLER_INVOKED()) : false) ? $this.onCloseHandler_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
      ((!(handler == null) ? typeof handler === 'function' : false) ? handler : THROW_CCE())(cause);
    }
  }
  function helpClose($this, closed) {
    var closedList = _InlineList___init__impl__z8n56();
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp = closed.get__prev_inntnt_k$();
      var tmp0_elvis_lhs = tmp instanceof Receive ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$loop_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var previous = tmp_0;
      if (!previous.remove_fgfybg_k$()) {
        previous.helpRemove_v3bmp7_k$();
        continue $l$loop_0;
      }
      closedList = InlineList__plus_impl_nuetvo(closedList, previous);
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var this_0 = closedList;
      var tmp0_subject = _get_holder__f6h5pd(this_0);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
          var tmp_1 = _get_holder__f6h5pd(this_0);
          ((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE()).resumeReceiveClosed_dlsk5t_k$(closed);
        } else {
          var tmp_2 = _get_holder__f6h5pd(this_0);
          var list = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
              list.get_c1px32_k$(i).resumeReceiveClosed_dlsk5t_k$(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
    $this.onClosedIdempotent_elfckp_k$(closed);
  }
  function TryOfferDesc(element, queue) {
    RemoveFirstDesc.call(this, queue);
    this.element_1 = element;
  }
  protoOf(TryOfferDesc).get_element_q8gf71_k$ = function () {
    return this.element_1;
  };
  protoOf(TryOfferDesc).failure_wmd2f3_k$ = function (affected) {
    var tmp;
    if (affected instanceof Closed) {
      tmp = affected;
    } else {
      if (!isInterface(affected, ReceiveOrClosed)) {
        tmp = get_OFFER_FAILED();
      } else {
        tmp = null;
      }
    }
    return tmp;
  };
  protoOf(TryOfferDesc).onPrepare_8o6h9r_k$ = function (prepareOp) {
    var tmp = prepareOp.get_affected_lutt4z_k$();
    var affected = isInterface(tmp, ReceiveOrClosed) ? tmp : THROW_CCE();
    var tmp0_elvis_lhs = affected.tryResumeReceive_hyboij_k$(this.element_1, prepareOp);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return get_REMOVE_PREPARED();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var token = tmp_0;
    if (token === get_RETRY_ATOMIC())
      return get_RETRY_ATOMIC();
    // Inline function 'kotlinx.coroutines.assert' call
    return null;
  };
  function registerSelectSend($this, select, element, block) {
    while (true) {
      if (select.get_isSelected_dl432q_k$())
        return Unit_getInstance();
      if (_get_isFullImpl__v905xu($this)) {
        var node = new SendSelect(element, $this, select, block);
        var enqueueResult = $this.enqueueSend_zbz1i1_k$(node);
        if (enqueueResult == null) {
          select.disposeOnSelect_wqqrl8_k$(node);
          return Unit_getInstance();
        } else {
          if (enqueueResult instanceof Closed)
            throw recoverStackTrace_0(helpCloseAndGetSendException_0($this, element, enqueueResult));
          else {
            if (enqueueResult !== get_ENQUEUE_FAILED()) {
              if (!(enqueueResult instanceof Receive)) {
                var message = 'enqueueSend returned ' + toString_0(enqueueResult) + ' ';
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
      var offerResult = $this.offerSelectInternal_vegbw0_k$(element, select);
      if (offerResult === get_ALREADY_SELECTED())
        return Unit_getInstance();
      else {
        if (offerResult !== get_OFFER_FAILED()) {
          if (offerResult !== get_RETRY_ATOMIC()) {
            if (offerResult === get_OFFER_SUCCESS()) {
              startCoroutineUnintercepted_0(block, $this, select.get_completion_t4gxwb_k$());
              return Unit_getInstance();
            } else {
              if (offerResult instanceof Closed)
                throw recoverStackTrace_0(helpCloseAndGetSendException_0($this, element, offerResult));
              else {
                var message_0 = 'offerSelectInternal returned ' + toString(offerResult);
                throw IllegalStateException_init_$Create$(toString(message_0));
              }
            }
          }
        }
      }
    }
  }
  function _get_queueDebugStateString__k7jj75($this) {
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var head = $this.queue_1.get__next_inmai1_k$();
    if (head === $this.queue_1)
      return 'EmptyQueue';
    var tmp;
    if (head instanceof Closed) {
      tmp = toString(head);
    } else {
      if (head instanceof Receive) {
        tmp = 'ReceiveQueued';
      } else {
        if (head instanceof Send) {
          tmp = 'SendQueued';
        } else {
          tmp = 'UNEXPECTED:' + head;
        }
      }
    }
    var result = tmp;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tail = $this.queue_1.get__prev_inntnt_k$();
    if (!(tail === head)) {
      result = result + (',queueSize=' + countQueueSize($this));
      if (tail instanceof Closed)
        result = result + (',closedForSend=' + tail);
    }
    return result;
  }
  function countQueueSize($this) {
    var size = 0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var this_0 = $this.queue_1;
    var cur = this_0.get__next_inmai1_k$();
    while (!equals(cur, this_0)) {
      if (cur instanceof LinkedListNode) {
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.countQueueSize.<anonymous>' call
        size = size + 1 | 0;
      }
      cur = cur.get__next_inmai1_k$();
    }
    return size;
  }
  function SendSelect(pollResult, channel, select, block) {
    Send.call(this);
    this.pollResult_1 = pollResult;
    this.channel_1 = channel;
    this.select_1 = select;
    this.block_1 = block;
  }
  protoOf(SendSelect).get_pollResult_t5mkl7_k$ = function () {
    return this.pollResult_1;
  };
  protoOf(SendSelect).get_channel_dhi7tm_k$ = function () {
    return this.channel_1;
  };
  protoOf(SendSelect).get_select_jfcyrp_k$ = function () {
    return this.select_1;
  };
  protoOf(SendSelect).get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  protoOf(SendSelect).tryResumeSend_j2jt7y_k$ = function (otherOp) {
    var tmp = this.select_1.trySelectOther_xxnvgp_k$(otherOp);
    return (tmp == null ? true : tmp instanceof Symbol) ? tmp : THROW_CCE();
  };
  protoOf(SendSelect).completeResumeSend_upbxpe_k$ = function () {
    startCoroutineCancellable(this.block_1, this.channel_1, this.select_1.get_completion_t4gxwb_k$());
  };
  protoOf(SendSelect).dispose_3nnxhr_k$ = function () {
    if (!this.remove_fgfybg_k$())
      return Unit_getInstance();
    this.undeliveredElement_dj8lsv_k$();
  };
  protoOf(SendSelect).resumeSendClosed_wm9642_k$ = function (closed) {
    if (this.select_1.trySelect_1ivjiv_k$()) {
      this.select_1.resumeSelectWithException_pyrj5t_k$(closed.get_sendException_qpq1ry_k$());
    }
  };
  protoOf(SendSelect).undeliveredElement_dj8lsv_k$ = function () {
    var tmp0_safe_receiver = this.channel_1.onUndeliveredElement_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, this.pollResult_1, this.select_1.get_completion_t4gxwb_k$().get_context_h02k06_k$());
    }
  };
  protoOf(SendSelect).toString = function () {
    return 'SendSelect@' + get_hexAddress(this) + '(' + this.pollResult_1 + ')[' + this.channel_1 + ', ' + this.select_1 + ']';
  };
  function SendBuffered(element) {
    Send.call(this);
    this.element_1 = element;
  }
  protoOf(SendBuffered).get_element_q8gf71_k$ = function () {
    return this.element_1;
  };
  protoOf(SendBuffered).get_pollResult_t5mkl7_k$ = function () {
    return this.element_1;
  };
  protoOf(SendBuffered).tryResumeSend_j2jt7y_k$ = function (otherOp) {
    // Inline function 'kotlin.also' call
    var this_0 = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.SendBuffered.tryResumeSend.<anonymous>' call
    if (otherOp == null)
      null;
    else {
      otherOp.finishPrepare_o8sfrw_k$();
    }
    return this_0;
  };
  protoOf(SendBuffered).completeResumeSend_upbxpe_k$ = function () {
  };
  protoOf(SendBuffered).resumeSendClosed_wm9642_k$ = function (closed) {
    // Inline function 'kotlinx.coroutines.assert' call
  };
  protoOf(SendBuffered).toString = function () {
    return 'SendBuffered@' + get_hexAddress(this) + '(' + this.element_1 + ')';
  };
  function AbstractSendChannel$onSend$1(this$0) {
    this.this$0__1 = this$0;
  }
  protoOf(AbstractSendChannel$onSend$1).registerSelectClause2_6iqtil_k$ = function (select, param, block) {
    registerSelectSend(this.this$0__1, select, param, block);
  };
  protoOf(AbstractSendChannel$onSend$1).registerSelectClause2_mg7cy6_k$ = function (select, param, block) {
    return this.registerSelectClause2_6iqtil_k$(select, (param == null ? true : !(param == null)) ? param : THROW_CCE(), block);
  };
  function AbstractSendChannel(onUndeliveredElement) {
    this.onUndeliveredElement_1 = onUndeliveredElement;
    this.queue_1 = new LinkedListHead();
    this.onCloseHandler_1 = atomic$ref$1(null);
  }
  protoOf(AbstractSendChannel).get_onUndeliveredElement_a8l4w7_k$ = function () {
    return this.onUndeliveredElement_1;
  };
  protoOf(AbstractSendChannel).get_queue_ixn208_k$ = function () {
    return this.queue_1;
  };
  protoOf(AbstractSendChannel).offerInternal_34p2n9_k$ = function (element) {
    while (true) {
      var tmp0_elvis_lhs = this.takeFirstReceiveOrPeekClosed_ri9e84_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_OFFER_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var receive = tmp;
      var token = receive.tryResumeReceive_hyboij_k$(element, null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        receive.completeResumeReceive_362bu9_k$(element);
        return receive.get_offerResult_jdi2i8_k$();
      }
    }
  };
  protoOf(AbstractSendChannel).offerSelectInternal_vegbw0_k$ = function (element, select) {
    var offerOp = this.describeTryOffer_oznkk2_k$(element);
    var failure = select.performAtomicTrySelect_k28gsj_k$(offerOp);
    if (!(failure == null))
      return failure;
    var receive = offerOp.get_result_iyg5d2_k$();
    receive.completeResumeReceive_362bu9_k$(element);
    return receive.get_offerResult_jdi2i8_k$();
  };
  protoOf(AbstractSendChannel).get_closedForSend_4r8ipo_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp = this.queue_1.get__prev_inntnt_k$();
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForSend>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp_0 = tmp0_safe_receiver;
    }
    return tmp_0;
  };
  protoOf(AbstractSendChannel).get_closedForReceive_iep3v5_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp = this.queue_1.get__next_inmai1_k$();
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForReceive>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp_0 = tmp0_safe_receiver;
    }
    return tmp_0;
  };
  protoOf(AbstractSendChannel).takeFirstSendOrPeekClosed_h7sgez_k$ = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var this_0 = this.queue_1;
      var next = this_0.get__next_inmai1_k$();
      if (next === this_0) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!(next instanceof Send)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstSendOrPeekClosed.<anonymous>' call
      if (next instanceof Closed) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!next.removeImpl_i5v938_k$()) {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        var message = 'Should remove';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractSendChannel).sendBuffered_jwv295_k$ = function (element) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var this_0 = this.queue_1;
      var node = new SendBuffered(element);
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.sendBuffered.<anonymous>' call
      var prev = this_0.get__prev_inntnt_k$();
      if (isInterface(prev, ReceiveOrClosed))
        return prev;
      if (!true) {
        break $l$block;
      }
      this_0.addLast_mio4hw_k$(node);
    }
    return null;
  };
  protoOf(AbstractSendChannel).describeSendBuffered_86ubho_k$ = function (element) {
    return new SendBufferedDesc(this.queue_1, element);
  };
  protoOf(AbstractSendChannel).get_isClosedForSend_ajczci_k$ = function () {
    return !(this.get_closedForSend_4r8ipo_k$() == null);
  };
  protoOf(AbstractSendChannel).send_44jogj_k$ = function (element, $completion) {
    if (this.offerInternal_34p2n9_k$(element) === get_OFFER_SUCCESS())
      return Unit_getInstance();
    return sendSuspend(this, element, $completion);
  };
  protoOf(AbstractSendChannel).offer_uqgnr2_k$ = function (element) {
    try {
      return offer.call(this, element);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        var tmp0_safe_receiver = this.onUndeliveredElement_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp1_safe_receiver, e);
          throw tmp1_safe_receiver;
        }
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(AbstractSendChannel).trySend_62dpg8_k$ = function (element) {
    var result = this.offerInternal_34p2n9_k$(element);
    var tmp;
    if (result === get_OFFER_SUCCESS()) {
      tmp = Companion_getInstance_1().success_tizbw6_k$(Unit_getInstance());
    } else {
      if (result === get_OFFER_FAILED()) {
        var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return Companion_getInstance_1().failure_q0nifh_k$();
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var closedForSend = tmp_0;
        tmp = Companion_getInstance_1().closed_xuwu5z_k$(helpCloseAndGetSendException(this, closedForSend));
      } else {
        if (result instanceof Closed) {
          tmp = Companion_getInstance_1().closed_xuwu5z_k$(helpCloseAndGetSendException(this, result));
        } else {
          var message = 'trySend returned ' + toString(result);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp;
  };
  protoOf(AbstractSendChannel).enqueueSend_zbz1i1_k$ = function (send) {
    if (this.get_isBufferAlwaysFull_v6nbtb_k$()) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
        var this_0 = this.queue_1;
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        var prev = this_0.get__prev_inntnt_k$();
        if (isInterface(prev, ReceiveOrClosed))
          return prev;
        if (!true) {
          break $l$block;
        }
        this_0.addLast_mio4hw_k$(send);
      }
    } else {
      var tmp$ret$3;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf' call
        var this_1 = this.queue_1;
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        var prev_0 = this_1.get__prev_inntnt_k$();
        if (isInterface(prev_0, ReceiveOrClosed))
          return prev_0;
        if (!true) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        if (!this.get_isBufferFull_xv8jm_k$()) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        this_1.addLast_mio4hw_k$(send);
        tmp$ret$3 = true;
      }
      if (!tmp$ret$3)
        return get_ENQUEUE_FAILED();
    }
    return null;
  };
  protoOf(AbstractSendChannel).close_ukldxa_k$ = function (cause) {
    var closed = new Closed(cause);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var this_0 = this.queue_1;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.close.<anonymous>' call
      if (!!(this_0.get__prev_inntnt_k$() instanceof Closed)) {
        tmp$ret$1 = false;
        break $l$block;
      }
      this_0.addLast_mio4hw_k$(closed);
      tmp$ret$1 = true;
    }
    var closeAdded = tmp$ret$1;
    var tmp;
    if (closeAdded) {
      tmp = closed;
    } else {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp_0 = this.queue_1.get__prev_inntnt_k$();
      tmp = tmp_0 instanceof Closed ? tmp_0 : THROW_CCE();
    }
    var actuallyClosed = tmp;
    helpClose(this, actuallyClosed);
    if (closeAdded) {
      invokeOnCloseHandler(this, cause);
    }
    return closeAdded;
  };
  protoOf(AbstractSendChannel).invokeOnClose_xlde4o_k$ = function (handler) {
    if (!this.onCloseHandler_1.atomicfu$compareAndSet(null, handler)) {
      var value = this.onCloseHandler_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (value === get_HANDLER_INVOKED()) {
        throw IllegalStateException_init_$Create$('Another handler was already registered and successfully invoked');
      }
      throw IllegalStateException_init_$Create$('Another handler was already registered: ' + toString_0(value));
    } else {
      var closedToken = this.get_closedForSend_4r8ipo_k$();
      if (!(closedToken == null) ? this.onCloseHandler_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
        handler(closedToken.closeCause_1);
      }
    }
  };
  protoOf(AbstractSendChannel).onClosedIdempotent_elfckp_k$ = function (closed) {
  };
  protoOf(AbstractSendChannel).takeFirstReceiveOrPeekClosed_ri9e84_k$ = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var this_0 = this.queue_1;
      var next = this_0.get__next_inmai1_k$();
      if (next === this_0) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!isInterface(next, ReceiveOrClosed)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
      if (next instanceof Closed) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!next.removeImpl_i5v938_k$()) {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        var message = 'Should remove';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractSendChannel).describeTryOffer_oznkk2_k$ = function (element) {
    return new TryOfferDesc(element, this.queue_1);
  };
  protoOf(AbstractSendChannel).get_onSend_hnoo40_k$ = function () {
    return new AbstractSendChannel$onSend$1(this);
  };
  protoOf(AbstractSendChannel).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '{' + _get_queueDebugStateString__k7jj75(this) + '}' + this.get_bufferDebugString_66mwn9_k$();
  };
  protoOf(AbstractSendChannel).get_bufferDebugString_66mwn9_k$ = function () {
    return '';
  };
  function Send() {
    LinkedListNode.call(this);
  }
  protoOf(Send).undeliveredElement_dj8lsv_k$ = function () {
  };
  function ReceiveOrClosed() {
  }
  function Closed(closeCause) {
    Send.call(this);
    this.closeCause_1 = closeCause;
  }
  protoOf(Closed).get_closeCause_gbqkm2_k$ = function () {
    return this.closeCause_1;
  };
  protoOf(Closed).get_sendException_qpq1ry_k$ = function () {
    var tmp0_elvis_lhs = this.closeCause_1;
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  protoOf(Closed).get_receiveException_nqbiq3_k$ = function () {
    var tmp0_elvis_lhs = this.closeCause_1;
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  protoOf(Closed).get_offerResult_jdi2i8_k$ = function () {
    return this;
  };
  protoOf(Closed).get_pollResult_t5mkl7_k$ = function () {
    return this;
  };
  protoOf(Closed).tryResumeSend_j2jt7y_k$ = function (otherOp) {
    // Inline function 'kotlin.also' call
    var this_0 = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeSend.<anonymous>' call
    if (otherOp == null)
      null;
    else {
      otherOp.finishPrepare_o8sfrw_k$();
    }
    return this_0;
  };
  protoOf(Closed).completeResumeSend_upbxpe_k$ = function () {
  };
  protoOf(Closed).tryResumeReceive_hyboij_k$ = function (value, otherOp) {
    // Inline function 'kotlin.also' call
    var this_0 = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeReceive.<anonymous>' call
    if (otherOp == null)
      null;
    else {
      otherOp.finishPrepare_o8sfrw_k$();
    }
    return this_0;
  };
  protoOf(Closed).completeResumeReceive_362bu9_k$ = function (value) {
  };
  protoOf(Closed).resumeSendClosed_wm9642_k$ = function (closed) {
    return Unit_getInstance();
  };
  protoOf(Closed).toString = function () {
    return 'Closed@' + get_hexAddress(this) + '[' + this.closeCause_1 + ']';
  };
  function get_RECEIVE_THROWS_ON_CLOSE() {
    return RECEIVE_THROWS_ON_CLOSE;
  }
  var RECEIVE_THROWS_ON_CLOSE;
  function Receive() {
    LinkedListNode.call(this);
  }
  protoOf(Receive).get_offerResult_jdi2i8_k$ = function () {
    return get_OFFER_SUCCESS();
  };
  protoOf(Receive).resumeOnCancellationFun_ar0rhq_k$ = function (value) {
    return null;
  };
  function toResult(_this__u8e3s4) {
    _init_properties_AbstractChannel_kt__sw8o27();
    var tmp;
    if (_this__u8e3s4 instanceof Closed) {
      tmp = Companion_getInstance_1().closed_xuwu5z_k$(_this__u8e3s4.closeCause_1);
    } else {
      var tmp_0 = Companion_getInstance_1();
      tmp = tmp_0.success_tizbw6_k$((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
    }
    return tmp;
  }
  function get_RECEIVE_RESULT() {
    return RECEIVE_RESULT;
  }
  var RECEIVE_RESULT;
  function toResult_0(_this__u8e3s4) {
    _init_properties_AbstractChannel_kt__sw8o27();
    return Companion_getInstance_1().closed_xuwu5z_k$(_this__u8e3s4.closeCause_1);
  }
  function SendElement(pollResult, cont) {
    Send.call(this);
    this.pollResult_1 = pollResult;
    this.cont_1 = cont;
  }
  protoOf(SendElement).get_pollResult_t5mkl7_k$ = function () {
    return this.pollResult_1;
  };
  protoOf(SendElement).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(SendElement).tryResumeSend_j2jt7y_k$ = function (otherOp) {
    var tmp1_elvis_lhs = this.cont_1.tryResume_8iaqti_k$(Unit_getInstance(), otherOp == null ? null : otherOp.get_desc_woknve_k$());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    // Inline function 'kotlinx.coroutines.assert' call
    if (otherOp == null)
      null;
    else {
      otherOp.finishPrepare_o8sfrw_k$();
    }
    return get_RESUME_TOKEN();
  };
  protoOf(SendElement).completeResumeSend_upbxpe_k$ = function () {
    return this.cont_1.completeResume_fabtk_k$(get_RESUME_TOKEN());
  };
  protoOf(SendElement).resumeSendClosed_wm9642_k$ = function (closed) {
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var this_0 = this.cont_1;
    var exception = closed.get_sendException_qpq1ry_k$();
    // Inline function 'kotlin.Companion.failure' call
    Companion_getInstance();
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
    this_0.resumeWith_dtxwbr_k$(tmp$ret$0);
    return Unit_getInstance();
  };
  protoOf(SendElement).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '(' + this.get_pollResult_t5mkl7_k$() + ')';
  };
  function SendElementWithUndeliveredHandler(pollResult, cont, onUndeliveredElement) {
    SendElement.call(this, pollResult, cont);
    this.onUndeliveredElement_1 = onUndeliveredElement;
  }
  protoOf(SendElementWithUndeliveredHandler).get_onUndeliveredElement_a8l4w7_k$ = function () {
    return this.onUndeliveredElement_1;
  };
  protoOf(SendElementWithUndeliveredHandler).remove_fgfybg_k$ = function () {
    if (!protoOf(SendElement).remove_fgfybg_k$.call(this))
      return false;
    this.undeliveredElement_dj8lsv_k$();
    return true;
  };
  protoOf(SendElementWithUndeliveredHandler).undeliveredElement_dj8lsv_k$ = function () {
    callUndeliveredElement(this.onUndeliveredElement_1, this.get_pollResult_t5mkl7_k$(), this.cont_1.get_context_h02k06_k$());
  };
  var properties_initialized_AbstractChannel_kt_uwqnpt;
  function _init_properties_AbstractChannel_kt__sw8o27() {
    if (!properties_initialized_AbstractChannel_kt_uwqnpt) {
      properties_initialized_AbstractChannel_kt_uwqnpt = true;
      EMPTY = new Symbol('EMPTY');
      OFFER_SUCCESS = new Symbol('OFFER_SUCCESS');
      OFFER_FAILED = new Symbol('OFFER_FAILED');
      POLL_FAILED = new Symbol('POLL_FAILED');
      ENQUEUE_FAILED = new Symbol('ENQUEUE_FAILED');
      HANDLER_INVOKED = new Symbol('ON_CLOSE_HANDLER_INVOKED');
    }
  }
  function _get_capacity__a9k9f3($this) {
    return $this.capacity_1;
  }
  function _get_onBufferOverflow__4ha2pi($this) {
    return $this.onBufferOverflow_1;
  }
  function _get_lock__d9xa4g($this) {
    return $this.lock_1;
  }
  function _set_buffer__uxh4x5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_head__9nromv($this, _set____db54di) {
    $this.head_1 = _set____db54di;
  }
  function _get_head__d7jo8b($this) {
    return $this.head_1;
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function updateBufferSize($this, currentSize) {
    if (currentSize < $this.capacity_1) {
      $this.size_1.set_kotlinx$atomicfu$value_nm6d3_k$(currentSize + 1 | 0);
      return null;
    }
    var tmp;
    switch ($this.onBufferOverflow_1.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = get_OFFER_FAILED();
        break;
      case 2:
        tmp = get_OFFER_SUCCESS();
        break;
      case 1:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function enqueueElement($this, currentSize, element) {
    if (currentSize < $this.capacity_1) {
      ensureCapacity($this, currentSize);
      $this.buffer_1[($this.head_1 + currentSize | 0) % $this.buffer_1.length | 0] = element;
    } else {
      // Inline function 'kotlinx.coroutines.assert' call
      $this.buffer_1[$this.head_1 % $this.buffer_1.length | 0] = null;
      $this.buffer_1[($this.head_1 + currentSize | 0) % $this.buffer_1.length | 0] = element;
      $this.head_1 = ($this.head_1 + 1 | 0) % $this.buffer_1.length | 0;
    }
  }
  function ensureCapacity($this, currentSize) {
    if (currentSize >= $this.buffer_1.length) {
      // Inline function 'kotlin.math.min' call
      var a = imul($this.buffer_1.length, 2);
      var b = $this.capacity_1;
      var newSize = Math.min(a, b);
      // Inline function 'kotlin.arrayOfNulls' call
      var newBuffer = fillArrayVal(Array(newSize), null);
      var inductionVariable = 0;
      if (inductionVariable < currentSize)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          newBuffer[i] = $this.buffer_1[($this.head_1 + i | 0) % $this.buffer_1.length | 0];
        }
         while (inductionVariable < currentSize);
      fill(newBuffer, get_EMPTY(), currentSize, newSize);
      $this.buffer_1 = newBuffer;
      $this.head_1 = 0;
    }
  }
  function ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.capacity_1 = capacity;
    this.onBufferOverflow_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.capacity_1 >= 1)) {
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<anonymous>' call
      var message = 'ArrayChannel capacity must be at least 1, but ' + this.capacity_1 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.lock_1 = new NoOpLock();
    var tmp = this;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.math.min' call
    var a = this.capacity_1;
    var size = Math.min(a, 8);
    var this_0 = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.buffer.<anonymous>' call
    fill(this_0, get_EMPTY());
    tmp.buffer_1 = this_0;
    this.head_1 = 0;
    this.size_1 = atomic$int$1(0);
  }
  protoOf(ArrayChannel).get_isBufferAlwaysEmpty_ross6j_k$ = function () {
    return false;
  };
  protoOf(ArrayChannel).get_isBufferEmpty_t57jne_k$ = function () {
    return this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$() === 0;
  };
  protoOf(ArrayChannel).get_isBufferAlwaysFull_v6nbtb_k$ = function () {
    return false;
  };
  protoOf(ArrayChannel).get_isBufferFull_xv8jm_k$ = function () {
    return this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$() === this.capacity_1 ? this.onBufferOverflow_1.equals(BufferOverflow_SUSPEND_getInstance()) : false;
  };
  protoOf(ArrayChannel).get_isEmpty_zauvru_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<get-isEmpty>.<anonymous>' call
    return this.get_isEmptyImpl_9w6w0q_k$();
  };
  protoOf(ArrayChannel).get_isClosedForReceive_v0r77d_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<get-isClosedForReceive>.<anonymous>' call
    return protoOf(AbstractChannel).get_isClosedForReceive_v0r77d_k$.call(this);
  };
  protoOf(ArrayChannel).offerInternal_34p2n9_k$ = function (element) {
    var receive = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.offerInternal.<anonymous>' call
      var size = this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_safe_receiver = this.get_closedForSend_4r8ipo_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var tmp1_safe_receiver = updateBufferSize(this, size);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp1_safe_receiver;
      }
      if (size === 0) {
        loop: while (true) {
          var tmp2_elvis_lhs = this.takeFirstReceiveOrPeekClosed_ri9e84_k$();
          var tmp;
          if (tmp2_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp2_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            this.size_1.set_kotlinx$atomicfu$value_nm6d3_k$(size);
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).tryResumeReceive_hyboij_k$(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            this.size_1.set_kotlinx$atomicfu$value_nm6d3_k$(size);
            break $l$block;
          }
        }
      }
      enqueueElement(this, size, element);
      return get_OFFER_SUCCESS();
    }
    ensureNotNull(receive).completeResumeReceive_362bu9_k$(element);
    return ensureNotNull(receive).get_offerResult_jdi2i8_k$();
  };
  protoOf(ArrayChannel).offerSelectInternal_vegbw0_k$ = function (element, select) {
    var receive = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.offerSelectInternal.<anonymous>' call
      var size = this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_safe_receiver = this.get_closedForSend_4r8ipo_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var tmp1_safe_receiver = updateBufferSize(this, size);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp1_safe_receiver;
      }
      if (size === 0) {
        loop: while (true) {
          var offerOp = this.describeTryOffer_oznkk2_k$(element);
          var failure = select.performAtomicTrySelect_k28gsj_k$(offerOp);
          if (failure == null) {
            this.size_1.set_kotlinx$atomicfu$value_nm6d3_k$(size);
            receive = offerOp.get_result_iyg5d2_k$();
            break $l$block;
          } else {
            if (failure === get_OFFER_FAILED())
              break loop;
            else {
              if (failure !== get_RETRY_ATOMIC()) {
                var tmp;
                if (failure === get_ALREADY_SELECTED()) {
                  tmp = true;
                } else {
                  tmp = failure instanceof Closed;
                }
                if (tmp) {
                  this.size_1.set_kotlinx$atomicfu$value_nm6d3_k$(size);
                  return failure;
                } else {
                  var message = 'performAtomicTrySelect(describeTryOffer) returned ' + toString_0(failure);
                  throw IllegalStateException_init_$Create$(toString(message));
                }
              }
            }
          }
        }
      }
      if (!select.trySelect_1ivjiv_k$()) {
        this.size_1.set_kotlinx$atomicfu$value_nm6d3_k$(size);
        return get_ALREADY_SELECTED();
      }
      enqueueElement(this, size, element);
      return get_OFFER_SUCCESS();
    }
    ensureNotNull(receive).completeResumeReceive_362bu9_k$(element);
    return ensureNotNull(receive).get_offerResult_jdi2i8_k$();
  };
  protoOf(ArrayChannel).enqueueSend_zbz1i1_k$ = function (send) {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.enqueueSend.<anonymous>' call
    return protoOf(AbstractChannel).enqueueSend_zbz1i1_k$.call(this, send);
  };
  protoOf(ArrayChannel).pollInternal_ml771g_k$ = function () {
    var send = null;
    var resumed = false;
    var result = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    var size = this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (size === 0) {
      var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.buffer_1[this.head_1];
    this.buffer_1[this.head_1] = null;
    this.size_1.set_kotlinx$atomicfu$value_nm6d3_k$(size - 1 | 0);
    var replacement = get_POLL_FAILED();
    if (size === this.capacity_1) {
      loop: while (true) {
        var tmp1_elvis_lhs = this.takeFirstSendOrPeekClosed_h7sgez_k$();
        var tmp;
        if (tmp1_elvis_lhs == null) {
          break loop;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        send = tmp;
        var token = ensureNotNull(send).tryResumeSend_j2jt7y_k$(null);
        if (!(token == null)) {
          // Inline function 'kotlinx.coroutines.assert' call
          resumed = true;
          replacement = ensureNotNull(send).get_pollResult_t5mkl7_k$();
          break loop;
        }
        ensureNotNull(send).undeliveredElement_dj8lsv_k$();
      }
    }
    var tmp_0;
    if (!(replacement === get_POLL_FAILED())) {
      tmp_0 = !(replacement instanceof Closed);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.size_1.set_kotlinx$atomicfu$value_nm6d3_k$(size);
      this.buffer_1[(this.head_1 + size | 0) % this.buffer_1.length | 0] = replacement;
    }
    this.head_1 = (this.head_1 + 1 | 0) % this.buffer_1.length | 0;
    if (resumed) {
      ensureNotNull(send).completeResumeSend_upbxpe_k$();
    }
    return result;
  };
  protoOf(ArrayChannel).pollSelectInternal_v3uf2p_k$ = function (select) {
    var send = null;
    var success = false;
    var result = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    var size = this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (size === 0) {
      var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.buffer_1[this.head_1];
    this.buffer_1[this.head_1] = null;
    this.size_1.set_kotlinx$atomicfu$value_nm6d3_k$(size - 1 | 0);
    var replacement = get_POLL_FAILED();
    if (size === this.capacity_1) {
      loop: while (true) {
        var pollOp = this.describeTryPoll_k2m4a9_k$();
        var failure = select.performAtomicTrySelect_k28gsj_k$(pollOp);
        if (failure == null) {
          send = pollOp.get_result_iyg5d2_k$();
          success = true;
          replacement = ensureNotNull(send).get_pollResult_t5mkl7_k$();
          break loop;
        } else {
          if (failure === get_POLL_FAILED())
            break loop;
          else {
            if (failure !== get_RETRY_ATOMIC()) {
              if (failure === get_ALREADY_SELECTED()) {
                this.size_1.set_kotlinx$atomicfu$value_nm6d3_k$(size);
                this.buffer_1[this.head_1] = result;
                return failure;
              } else {
                if (failure instanceof Closed) {
                  send = failure;
                  success = true;
                  replacement = failure;
                  break loop;
                } else {
                  var message = 'performAtomicTrySelect(describeTryOffer) returned ' + toString_0(failure);
                  throw IllegalStateException_init_$Create$(toString(message));
                }
              }
            }
          }
        }
      }
    }
    var tmp;
    if (!(replacement === get_POLL_FAILED())) {
      tmp = !(replacement instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.size_1.set_kotlinx$atomicfu$value_nm6d3_k$(size);
      this.buffer_1[(this.head_1 + size | 0) % this.buffer_1.length | 0] = replacement;
    } else {
      if (!select.trySelect_1ivjiv_k$()) {
        this.size_1.set_kotlinx$atomicfu$value_nm6d3_k$(size);
        this.buffer_1[this.head_1] = result;
        return get_ALREADY_SELECTED();
      }
    }
    this.head_1 = (this.head_1 + 1 | 0) % this.buffer_1.length | 0;
    if (success) {
      ensureNotNull(send).completeResumeSend_upbxpe_k$();
    }
    return result;
  };
  protoOf(ArrayChannel).enqueueReceiveInternal_djlvn7_k$ = function (receive) {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.enqueueReceiveInternal.<anonymous>' call
    return protoOf(AbstractChannel).enqueueReceiveInternal_djlvn7_k$.call(this, receive);
  };
  protoOf(ArrayChannel).onCancelIdempotent_u08yt9_k$ = function (wasClosed) {
    var onUndeliveredElement = this.get_onUndeliveredElement_a8l4w7_k$();
    var undeliveredElementException = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    // Inline function 'kotlin.repeat' call
    var times = this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.channels.ArrayChannel.onCancelIdempotent.<anonymous>.<anonymous>' call
        var value = this.buffer_1[this.head_1];
        if (!(onUndeliveredElement == null) ? !(value === get_EMPTY()) : false) {
          undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, (value == null ? true : !(value == null)) ? value : THROW_CCE(), undeliveredElementException);
        }
        this.buffer_1[this.head_1] = get_EMPTY();
        this.head_1 = (this.head_1 + 1 | 0) % this.buffer_1.length | 0;
      }
       while (inductionVariable < times);
    this.size_1.set_kotlinx$atomicfu$value_nm6d3_k$(0);
    protoOf(AbstractChannel).onCancelIdempotent_u08yt9_k$.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  protoOf(ArrayChannel).get_bufferDebugString_66mwn9_k$ = function () {
    return '(buffer:capacity=' + this.capacity_1 + ',size=' + this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$() + ')';
  };
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  function values_0() {
    return [BufferOverflow_SUSPEND_getInstance(), BufferOverflow_DROP_OLDEST_getInstance(), BufferOverflow_DROP_LATEST_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'SUSPEND':
        return BufferOverflow_SUSPEND_getInstance();
      case 'DROP_OLDEST':
        return BufferOverflow_DROP_OLDEST_getInstance();
      case 'DROP_LATEST':
        return BufferOverflow_DROP_LATEST_getInstance();
      default:
        BufferOverflow_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_getInstance();
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function Factory() {
    Factory_instance = this;
    this.UNLIMITED_1 = 2147483647;
    this.RENDEZVOUS_1 = 0;
    this.CONFLATED_1 = -1;
    this.BUFFERED_1 = -2;
    this.OPTIONAL_CHANNEL_1 = -3;
    this.DEFAULT_BUFFER_PROPERTY_NAME_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.CHANNEL_DEFAULT_CAPACITY_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  protoOf(Factory).get_UNLIMITED_eshsm0_k$ = function () {
    return this.UNLIMITED_1;
  };
  protoOf(Factory).get_RENDEZVOUS_7qhqgu_k$ = function () {
    return this.RENDEZVOUS_1;
  };
  protoOf(Factory).get_CONFLATED_tox14f_k$ = function () {
    return this.CONFLATED_1;
  };
  protoOf(Factory).get_BUFFERED_qzy754_k$ = function () {
    return this.BUFFERED_1;
  };
  protoOf(Factory).get_OPTIONAL_CHANNEL_c6wrw3_k$ = function () {
    return this.OPTIONAL_CHANNEL_1;
  };
  protoOf(Factory).get_DEFAULT_BUFFER_PROPERTY_NAME_rafy59_k$ = function () {
    return this.DEFAULT_BUFFER_PROPERTY_NAME_1;
  };
  protoOf(Factory).get_CHANNEL_DEFAULT_CAPACITY_4xco1p_k$ = function () {
    return this.CHANNEL_DEFAULT_CAPACITY_1;
  };
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel() {
  }
  function ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt($block, resultContinuation) {
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt).invoke_4b566r_k$ = function (it, $completion) {
    var tmp = this.create_98qqhl_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_4b566r_k$(p1 instanceof ChannelResult ? p1.holder_1 : THROW_CCE(), $completion);
  };
  protoOf(ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp0_safe_receiver = ChannelResult__exceptionOrNull_impl_16ei30(this.it_1);
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$block_1(ChannelResult__getOrNull_impl_f5e07h(this.it_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt).create_98qqhl_k$ = function (it, completion) {
    var i = new ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt(this.$block_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt).create_wyq9v6_k$ = function (value, completion) {
    return this.create_98qqhl_k$(value instanceof ChannelResult ? value.holder_1 : THROW_CCE(), completion);
  };
  function ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt_0($block, resultContinuation) {
    var i = new ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt($block, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_4b566r_k$(it.holder_1, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ReceiveChannel$onReceiveOrNull$1(this$0) {
    this.this$0__1 = this$0;
  }
  protoOf(ReceiveChannel$onReceiveOrNull$1).registerSelectClause1_bw9c1d_k$ = function (select, block) {
    var tmp = this.this$0__1.get_onReceiveCatching_ajg9xa_k$();
    tmp.registerSelectClause1_5i5exy_k$(select, ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt_0(block, null));
  };
  protoOf(ReceiveChannel$onReceiveOrNull$1).registerSelectClause1_5i5exy_k$ = function (select, block) {
    return this.registerSelectClause1_bw9c1d_k$(select, block);
  };
  function $receiveOrNullCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($receiveOrNullCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.receiveCatching_golgg7_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 1:
            var unboxed = suspendResult.holder_1;
            suspendResult = new ChannelResult(unboxed);
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult.holder_1;
            return ChannelResult__getOrNull_impl_f5e07h(ARGUMENT);
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function ReceiveChannel() {
  }
  function SendChannel() {
  }
  function _get_failed__jtpc32($this) {
    return $this.failed_1;
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isFailure__impl__nz6ehu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Failed;
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed_0;
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw($this);
      tmp = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChannelResult__getOrThrow_impl_od1axs($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp instanceof Failed)) {
      var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
      return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    var tmp_1;
    var tmp_2 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (tmp_2 instanceof Closed_0) {
      tmp_1 = !(_ChannelResult___get_holder__impl__pm9gzw($this).cause_1 == null);
    } else {
      tmp_1 = false;
    }
    if (tmp_1)
      throw _ChannelResult___get_holder__impl__pm9gzw($this).cause_1;
    // Inline function 'kotlin.error' call
    var message = "Trying to call 'getOrThrow' on a failed channel result: " + toString_0(_ChannelResult___get_holder__impl__pm9gzw($this));
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed_0 ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cause_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed_0(cause) {
    Failed.call(this);
    this.cause_1 = cause;
  }
  protoOf(Closed_0).get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  protoOf(Closed_0).equals = function (other) {
    var tmp;
    if (other instanceof Closed_0) {
      tmp = equals(this.cause_1, other.cause_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed_0).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.cause_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed_0).toString = function () {
    return 'Closed(' + this.cause_1 + ')';
  };
  function Companion() {
    Companion_instance = this;
    this.failed_1 = new Failed();
  }
  protoOf(Companion).success_tizbw6_k$ = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).failure_q0nifh_k$ = function () {
    return _ChannelResult___init__impl__siwsuf(this.failed_1);
  };
  protoOf(Companion).closed_xuwu5z_k$ = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed_0(cause));
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp;
    if (_ChannelResult___get_holder__impl__pm9gzw($this) instanceof Closed_0) {
      tmp = toString(_ChannelResult___get_holder__impl__pm9gzw($this));
    } else {
      tmp = 'Value(' + toString_0(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.holder_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_1();
    this.holder_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.holder_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.holder_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.holder_1, other);
  };
  function $next0COROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($next0COROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.hasNext_nhy1w3_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              throw new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE());
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            return this._this__u8e3s4__1.next_20eer_k$();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function ChannelIterator() {
  }
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function Channel_0(capacity, onBufferOverflow, onUndeliveredElement) {
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp;
    switch (capacity) {
      case 0:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new RendezvousChannel(onUndeliveredElement) : new ArrayChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      case -1:
        // Inline function 'kotlin.require' call

        // Inline function 'kotlin.contracts.contract' call

        if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
          // Inline function 'kotlinx.coroutines.channels.Channel.<anonymous>' call
          var message = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }

        tmp = new ConflatedChannel(onUndeliveredElement);
        break;
      case 2147483647:
        tmp = new LinkedListChannel(onUndeliveredElement);
        break;
      case -2:
        tmp = new ArrayChannel(onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? Factory_getInstance().CHANNEL_DEFAULT_CAPACITY_1 : 1, onBufferOverflow, onUndeliveredElement);
        break;
      default:
        tmp = (capacity === 1 ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) ? new ConflatedChannel(onUndeliveredElement) : new ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement);
        break;
    }
    return tmp;
  }
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this._channel_1 = _channel;
  }
  protoOf(ChannelCoroutine).get__channel_jf1gul_k$ = function () {
    return this._channel_1;
  };
  protoOf(ChannelCoroutine).get_isClosedForReceive_v0r77d_k$ = function () {
    return this._channel_1.get_isClosedForReceive_v0r77d_k$();
  };
  protoOf(ChannelCoroutine).get_isClosedForSend_ajczci_k$ = function () {
    return this._channel_1.get_isClosedForSend_ajczci_k$();
  };
  protoOf(ChannelCoroutine).get_isEmpty_zauvru_k$ = function () {
    return this._channel_1.get_isEmpty_zauvru_k$();
  };
  protoOf(ChannelCoroutine).get_onReceive_mimw11_k$ = function () {
    return this._channel_1.get_onReceive_mimw11_k$();
  };
  protoOf(ChannelCoroutine).get_onReceiveCatching_ajg9xa_k$ = function () {
    return this._channel_1.get_onReceiveCatching_ajg9xa_k$();
  };
  protoOf(ChannelCoroutine).get_onReceiveOrNull_5u62it_k$ = function () {
    return this._channel_1.get_onReceiveOrNull_5u62it_k$();
  };
  protoOf(ChannelCoroutine).get_onSend_hnoo40_k$ = function () {
    return this._channel_1.get_onSend_hnoo40_k$();
  };
  protoOf(ChannelCoroutine).close_ukldxa_k$ = function (cause) {
    return this._channel_1.close_ukldxa_k$(cause);
  };
  protoOf(ChannelCoroutine).invokeOnClose_xlde4o_k$ = function (handler) {
    this._channel_1.invokeOnClose_xlde4o_k$(handler);
  };
  protoOf(ChannelCoroutine).iterator_jk1svi_k$ = function () {
    return this._channel_1.iterator_jk1svi_k$();
  };
  protoOf(ChannelCoroutine).offer_uqgnr2_k$ = function (element) {
    return this._channel_1.offer_uqgnr2_k$(element);
  };
  protoOf(ChannelCoroutine).poll_21vi7_k$ = function () {
    return this._channel_1.poll_21vi7_k$();
  };
  protoOf(ChannelCoroutine).receive_awoumx_k$ = function ($completion) {
    return this._channel_1.receive_awoumx_k$($completion);
  };
  protoOf(ChannelCoroutine).receiveCatching_golgg7_k$ = function ($completion) {
    var tmp = this._channel_1.receiveCatching_golgg7_k$($completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(ChannelCoroutine).receiveOrNull_7f8d4k_k$ = function ($completion) {
    return this._channel_1.receiveOrNull_7f8d4k_k$($completion);
  };
  protoOf(ChannelCoroutine).send_44jogj_k$ = function (element, $completion) {
    return this._channel_1.send_44jogj_k$(element, $completion);
  };
  protoOf(ChannelCoroutine).tryReceive_y3ovg2_k$ = function () {
    return this._channel_1.tryReceive_y3ovg2_k$();
  };
  protoOf(ChannelCoroutine).trySend_62dpg8_k$ = function (element) {
    return this._channel_1.trySend_62dpg8_k$(element);
  };
  protoOf(ChannelCoroutine).get_channel_dhi7tm_k$ = function () {
    return this;
  };
  protoOf(ChannelCoroutine).cancel_2l89ey_k$ = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
    var tmp$ret$0 = new JobCancellationException(null == null ? this.cancellationExceptionMessage_a64063_k$() : null, null, this);
    this.cancelInternal_fraw7c_k$(tmp$ret$0);
  };
  protoOf(ChannelCoroutine).cancel_e74who_k$ = function (cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
    var tmp$ret$0 = new JobCancellationException(null == null ? this.cancellationExceptionMessage_a64063_k$() : null, null, this);
    this.cancelInternal_fraw7c_k$(tmp$ret$0);
    return true;
  };
  protoOf(ChannelCoroutine).cancel$default_2ouzfv_k$ = function (cause, $super) {
    return this.cancel$default_w08z00_k$(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).cancel_hkmm2i_k$ = function (cause) {
    if (this.get_isCancelled_trk8pu_k$())
      return Unit_getInstance();
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.cancellationExceptionMessage_a64063_k$() : null, null, this);
    } else {
      tmp = cause;
    }
    this.cancelInternal_fraw7c_k$(tmp);
  };
  protoOf(ChannelCoroutine).cancel$default_880p35_k$ = function (cause, $super) {
    return this.cancel$default_8haxne_k$(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).cancelInternal_fraw7c_k$ = function (cause) {
    var exception = this.toCancellationException$default_cbdcg1_k$(cause);
    this._channel_1.cancel_hkmm2i_k$(exception);
    this.cancelCoroutine_rpko3c_k$(exception);
  };
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp;
    if (cause == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.cancelConsumed.<anonymous>' call
      var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
      tmp = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', cause) : tmp0_elvis_lhs;
    }
    _this__u8e3s4.cancel_hkmm2i_k$(tmp);
  }
  function _get_lock__d9xa4g_0($this) {
    return $this.lock_1;
  }
  function _set_value__lx0xdg($this, _set____db54di) {
    $this.value_1 = _set____db54di;
  }
  function _get_value__a43j40($this) {
    return $this.value_1;
  }
  function updateValueLocked($this, element) {
    var old = $this.value_1;
    var tmp;
    if (old === get_EMPTY()) {
      tmp = null;
    } else {
      var tmp0_safe_receiver = $this.get_onUndeliveredElement_a8l4w7_k$();
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp_0 = callUndeliveredElementCatchingException(tmp0_safe_receiver, (old == null ? true : !(old == null)) ? old : THROW_CCE());
      }
      tmp = tmp_0;
    }
    var undeliveredElementException = tmp;
    $this.value_1 = element;
    return undeliveredElementException;
  }
  function ConflatedChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.lock_1 = new NoOpLock();
    this.value_1 = get_EMPTY();
  }
  protoOf(ConflatedChannel).get_isBufferAlwaysEmpty_ross6j_k$ = function () {
    return false;
  };
  protoOf(ConflatedChannel).get_isBufferEmpty_t57jne_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-isBufferEmpty>.<anonymous>' call
    return this.value_1 === get_EMPTY();
  };
  protoOf(ConflatedChannel).get_isBufferAlwaysFull_v6nbtb_k$ = function () {
    return false;
  };
  protoOf(ConflatedChannel).get_isBufferFull_xv8jm_k$ = function () {
    return false;
  };
  protoOf(ConflatedChannel).get_isEmpty_zauvru_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-isEmpty>.<anonymous>' call
    return this.get_isEmptyImpl_9w6w0q_k$();
  };
  protoOf(ConflatedChannel).offerInternal_34p2n9_k$ = function (element) {
    var receive = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.offerInternal.<anonymous>' call
      var tmp0_safe_receiver = this.get_closedForSend_4r8ipo_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      if (this.value_1 === get_EMPTY()) {
        loop: while (true) {
          var tmp1_elvis_lhs = this.takeFirstReceiveOrPeekClosed_ri9e84_k$();
          var tmp;
          if (tmp1_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp1_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).tryResumeReceive_hyboij_k$(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            break $l$block;
          }
        }
      }
      var tmp2_safe_receiver = updateValueLocked(this, element);
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp2_safe_receiver;
      }
      return get_OFFER_SUCCESS();
    }
    ensureNotNull(receive).completeResumeReceive_362bu9_k$(element);
    return ensureNotNull(receive).get_offerResult_jdi2i8_k$();
  };
  protoOf(ConflatedChannel).offerSelectInternal_vegbw0_k$ = function (element, select) {
    var receive = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.offerSelectInternal.<anonymous>' call
      var tmp0_safe_receiver = this.get_closedForSend_4r8ipo_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      if (this.value_1 === get_EMPTY()) {
        loop: while (true) {
          var offerOp = this.describeTryOffer_oznkk2_k$(element);
          var failure = select.performAtomicTrySelect_k28gsj_k$(offerOp);
          if (failure == null) {
            receive = offerOp.get_result_iyg5d2_k$();
            break $l$block;
          } else {
            if (failure === get_OFFER_FAILED())
              break loop;
            else {
              if (failure !== get_RETRY_ATOMIC()) {
                var tmp;
                if (failure === get_ALREADY_SELECTED()) {
                  tmp = true;
                } else {
                  tmp = failure instanceof Closed;
                }
                if (tmp)
                  return failure;
                else {
                  var message = 'performAtomicTrySelect(describeTryOffer) returned ' + toString_0(failure);
                  throw IllegalStateException_init_$Create$(toString(message));
                }
              }
            }
          }
        }
      }
      if (!select.trySelect_1ivjiv_k$()) {
        return get_ALREADY_SELECTED();
      }
      var tmp1_safe_receiver = updateValueLocked(this, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp1_safe_receiver;
      }
      return get_OFFER_SUCCESS();
    }
    ensureNotNull(receive).completeResumeReceive_362bu9_k$(element);
    return ensureNotNull(receive).get_offerResult_jdi2i8_k$();
  };
  protoOf(ConflatedChannel).pollInternal_ml771g_k$ = function () {
    var result = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    if (this.value_1 === get_EMPTY()) {
      var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.value_1;
    this.value_1 = get_EMPTY();
    return result;
  };
  protoOf(ConflatedChannel).pollSelectInternal_v3uf2p_k$ = function (select) {
    var result = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    if (this.value_1 === get_EMPTY()) {
      var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    if (!select.trySelect_1ivjiv_k$())
      return get_ALREADY_SELECTED();
    result = this.value_1;
    this.value_1 = get_EMPTY();
    return result;
  };
  protoOf(ConflatedChannel).onCancelIdempotent_u08yt9_k$ = function (wasClosed) {
    var undeliveredElementException = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    undeliveredElementException = updateValueLocked(this, get_EMPTY());
    protoOf(AbstractChannel).onCancelIdempotent_u08yt9_k$.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  protoOf(ConflatedChannel).enqueueReceiveInternal_djlvn7_k$ = function (receive) {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.enqueueReceiveInternal.<anonymous>' call
    return protoOf(AbstractChannel).enqueueReceiveInternal_djlvn7_k$.call(this, receive);
  };
  protoOf(ConflatedChannel).get_bufferDebugString_66mwn9_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-bufferDebugString>.<anonymous>' call
    return '(value=' + toString_0(this.value_1) + ')';
  };
  function LinkedListChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  protoOf(LinkedListChannel).get_isBufferAlwaysEmpty_ross6j_k$ = function () {
    return true;
  };
  protoOf(LinkedListChannel).get_isBufferEmpty_t57jne_k$ = function () {
    return true;
  };
  protoOf(LinkedListChannel).get_isBufferAlwaysFull_v6nbtb_k$ = function () {
    return false;
  };
  protoOf(LinkedListChannel).get_isBufferFull_xv8jm_k$ = function () {
    return false;
  };
  protoOf(LinkedListChannel).offerInternal_34p2n9_k$ = function (element) {
    while (true) {
      var result = protoOf(AbstractChannel).offerInternal_34p2n9_k$.call(this, element);
      if (result === get_OFFER_SUCCESS())
        return get_OFFER_SUCCESS();
      else {
        if (result === get_OFFER_FAILED()) {
          var sendResult = this.sendBuffered_jwv295_k$(element);
          if (sendResult == null)
            return get_OFFER_SUCCESS();
          else {
            if (sendResult instanceof Closed)
              return sendResult;
          }
        } else {
          if (result instanceof Closed)
            return result;
          else {
            var message = 'Invalid offerInternal result ' + toString(result);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
    }
  };
  protoOf(LinkedListChannel).offerSelectInternal_vegbw0_k$ = function (element, select) {
    while (true) {
      var tmp;
      if (this.get_hasReceiveOrClosed_wl54xr_k$()) {
        tmp = protoOf(AbstractChannel).offerSelectInternal_vegbw0_k$.call(this, element, select);
      } else {
        var tmp0_elvis_lhs = select.performAtomicTrySelect_k28gsj_k$(this.describeSendBuffered_86ubho_k$(element));
        tmp = tmp0_elvis_lhs == null ? get_OFFER_SUCCESS() : tmp0_elvis_lhs;
      }
      var result = tmp;
      if (result === get_ALREADY_SELECTED())
        return get_ALREADY_SELECTED();
      else {
        if (result === get_OFFER_SUCCESS())
          return get_OFFER_SUCCESS();
        else {
          if (result !== get_OFFER_FAILED()) {
            if (result !== get_RETRY_ATOMIC()) {
              if (result instanceof Closed)
                return result;
              else {
                var message = 'Invalid result ' + toString(result);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  };
  protoOf(LinkedListChannel).onCancelIdempotentList_y9g36l_k$ = function (list, closed) {
    var undeliveredElementException = null;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          if (it instanceof SendBuffered) {
            var tmp1_safe_receiver = this.get_onUndeliveredElement_a8l4w7_k$();
            var tmp_0;
            if (tmp1_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp_1 = it.get_element_q8gf71_k$();
              tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE(), undeliveredElementException);
            }
            undeliveredElementException = tmp_0;
          } else {
            it.resumeSendClosed_wm9642_k$(closed);
          }
        } else {
          var tmp_2 = _get_holder__f6h5pd(list);
          var list_0 = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list_0.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
              var it_0 = list_0.get_c1px32_k$(i);
              if (it_0 instanceof SendBuffered) {
                var tmp1_safe_receiver_0 = this.get_onUndeliveredElement_a8l4w7_k$();
                var tmp_3;
                if (tmp1_safe_receiver_0 == null) {
                  tmp_3 = null;
                } else {
                  var tmp_4 = it_0.get_element_q8gf71_k$();
                  tmp_3 = callUndeliveredElementCatchingException(tmp1_safe_receiver_0, (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE(), undeliveredElementException);
                }
                undeliveredElementException = tmp_3;
              } else {
                it_0.resumeSendClosed_wm9642_k$(closed);
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  function ProducerScope() {
  }
  function produce(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    onCompletion = onCompletion === VOID ? null : onCompletion;
    var channel = Channel_0(capacity, onBufferOverflow);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.invokeOnCompletion_n6cffu_k$(onCompletion);
    }
    coroutine.start_rn6v44_k$(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).get_isActive_quafmh_k$ = function () {
    return protoOf(ChannelCoroutine).get_isActive_quafmh_k$.call(this);
  };
  protoOf(ProducerCoroutine).onCompleted_pl6y9g_k$ = function (value) {
    this.get__channel_jf1gul_k$().close$default_kcbl7u_k$();
  };
  protoOf(ProducerCoroutine).onCompleted_whnx9v_k$ = function (value) {
    return this.onCompleted_pl6y9g_k$(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).onCancelled_gb68wi_k$ = function (cause, handled) {
    var processed = this.get__channel_jf1gul_k$().close_ukldxa_k$(cause);
    if (!processed ? !handled : false) {
      handleCoroutineException(this.get_context_h02k06_k$(), cause);
    }
  };
  protoOf(ProducerCoroutine).cancel$default_2ouzfv_k$ = function (cause, $super) {
    return this.cancel$default_w08z00_k$(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ProducerCoroutine).cancel$default_880p35_k$ = function (cause, $super) {
    return this.cancel$default_8haxne_k$(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  function RendezvousChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  protoOf(RendezvousChannel).get_isBufferAlwaysEmpty_ross6j_k$ = function () {
    return true;
  };
  protoOf(RendezvousChannel).get_isBufferEmpty_t57jne_k$ = function () {
    return true;
  };
  protoOf(RendezvousChannel).get_isBufferAlwaysFull_v6nbtb_k$ = function () {
    return true;
  };
  protoOf(RendezvousChannel).get_isBufferFull_xv8jm_k$ = function () {
    return true;
  };
  function emitAll(_this__u8e3s4, channel, $completion) {
    return emitAllImpl(_this__u8e3s4, channel, true, $completion);
  }
  function emitAllImpl(_this__u8e3s4, channel, consume, $completion) {
    var tmp = new $emitAllImplCOROUTINE$3(_this__u8e3s4, channel, consume, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $emitAllImplCOROUTINE$3(_this__u8e3s4, channel, consume, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.channel_1 = channel;
    this.consume_1 = consume;
  }
  protoOf($emitAllImplCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(11);
            ensureActive_1(this._this__u8e3s4__1);
            this.cause0__1 = null;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(9);
            this.set_exceptionState_fex74n_k$(8);
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            if (!true) {
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            }

            var tmp_0 = this;
            tmp_0.this2__1 = this._this__u8e3s4__1;
            var tmp_1 = this;
            tmp_1.$this$run3__1 = this.this2__1;
            this.set_state_rjd8d0_k$(3);
            suspendResult = this.channel_1.receiveCatching_golgg7_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 3:
            this.unboxed4__1 = suspendResult.holder_1;
            suspendResult = new ChannelResult(this.unboxed4__1);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.result5__1 = suspendResult.holder_1;
            if (_ChannelResult___get_isClosed__impl__mg7kuu(this.result5__1)) {
              var tmp0_safe_receiver = ChannelResult__exceptionOrNull_impl_16ei30(this.result5__1);
              if (tmp0_safe_receiver == null)
                null;
              else {
                throw tmp0_safe_receiver;
              }
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

          case 5:
            this.set_state_rjd8d0_k$(6);
            suspendResult = this._this__u8e3s4__1.emit_t92u1f_k$(ChannelResult__getOrThrow_impl_od1axs(this.result5__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 7:
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(11);
            this.set_state_rjd8d0_k$(10);
            continue $sm;
          case 8:
            this.set_exceptionState_fex74n_k$(9);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_3 = this;
              this.cause0__1 = e;
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 9:
            this.set_exceptionState_fex74n_k$(11);
            var t = this.get_exception_x0n6w6_k$();
            if (this.consume_1) {
              cancelConsumed(this.channel_1, this.cause0__1);
            }

            throw t;
          case 10:
            this.set_exceptionState_fex74n_k$(11);
            if (this.consume_1) {
              cancelConsumed(this.channel_1, this.cause0__1);
            }

            return Unit_getInstance();
          case 11:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 11) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function Flow() {
  }
  function FlowCollector() {
  }
  function get_NO_VALUE() {
    _init_properties_SharedFlow_kt__umasnn();
    return NO_VALUE;
  }
  var NO_VALUE;
  function MutableSharedFlow() {
  }
  function SharedFlow() {
  }
  function fuseSharedFlow(_this__u8e3s4, context, capacity, onBufferOverflow) {
    _init_properties_SharedFlow_kt__umasnn();
    if ((capacity === Factory_getInstance().get_RENDEZVOUS_7qhqgu_k$() ? true : capacity === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$()) ? onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) : false) {
      return _this__u8e3s4;
    }
    return new ChannelFlowOperatorImpl(_this__u8e3s4, context, capacity, onBufferOverflow);
  }
  function _get_replay__f4ufwc($this) {
    return $this.replay_1;
  }
  function _get_bufferCapacity__1egje9($this) {
    return $this.bufferCapacity_1;
  }
  function _get_onBufferOverflow__4ha2pi_0($this) {
    return $this.onBufferOverflow_1;
  }
  function _set_buffer__uxh4x5_0($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_0($this) {
    return $this.buffer_1;
  }
  function _set_replayIndex__ufyvqy($this, _set____db54di) {
    $this.replayIndex_1 = _set____db54di;
  }
  function _get_replayIndex__aaqzwa($this) {
    return $this.replayIndex_1;
  }
  function _set_minCollectorIndex__ukunhq($this, _set____db54di) {
    $this.minCollectorIndex_1 = _set____db54di;
  }
  function _get_minCollectorIndex__8v1r7e($this) {
    return $this.minCollectorIndex_1;
  }
  function _set_bufferSize__x9ue96($this, _set____db54di) {
    $this.bufferSize_1 = _set____db54di;
  }
  function _get_bufferSize__mp12kq($this) {
    return $this.bufferSize_1;
  }
  function _set_queueSize__jc2i7h($this, _set____db54di) {
    $this.queueSize_1 = _set____db54di;
  }
  function _get_queueSize__9yry73($this) {
    return $this.queueSize_1;
  }
  function _get_head__d7jo8b_0($this) {
    // Inline function 'kotlin.comparisons.minOf' call
    var a = $this.minCollectorIndex_1;
    var b = $this.replayIndex_1;
    return a.compareTo_9jj042_k$(b) <= 0 ? a : b;
  }
  function _get_replaySize__dxgnb1($this) {
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b_0($this);
    var other = $this.bufferSize_1;
    return this_0.plus_r93sks_k$(toLong(other)).minus_mfbszm_k$($this.replayIndex_1).toInt_1tsl84_k$();
  }
  function _get_totalSize__xhdb3o($this) {
    return $this.bufferSize_1 + $this.queueSize_1 | 0;
  }
  function _get_bufferEndIndex__d2rk18($this) {
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b_0($this);
    var other = $this.bufferSize_1;
    return this_0.plus_r93sks_k$(toLong(other));
  }
  function _get_queueEndIndex__4m025l($this) {
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b_0($this);
    var other = $this.bufferSize_1;
    var this_1 = this_0.plus_r93sks_k$(toLong(other));
    var other_0 = $this.queueSize_1;
    return this_1.plus_r93sks_k$(toLong(other_0));
  }
  function tryEmitLocked($this, value) {
    if ($this.get_nCollectors_gh2yp7_k$() === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.bufferSize_1 >= $this.bufferCapacity_1 ? $this.minCollectorIndex_1.compareTo_9jj042_k$($this.replayIndex_1) <= 0 : false) {
      switch ($this.onBufferOverflow_1.get_ordinal_ip24qg_k$()) {
        case 0:
          return false;
        case 2:
          return true;
        case 1:
          break;
      }
    }
    enqueueLocked($this, value);
    $this.bufferSize_1 = $this.bufferSize_1 + 1 | 0;
    if ($this.bufferSize_1 > $this.bufferCapacity_1) {
      dropOldestLocked($this);
    }
    if (_get_replaySize__dxgnb1($this) > $this.replay_1) {
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$0 = $this.replayIndex_1.plus_r93sks_k$(toLong(1));
      updateBufferLocked($this, tmp$ret$0, $this.minCollectorIndex_1, _get_bufferEndIndex__d2rk18($this), _get_queueEndIndex__4m025l($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    // Inline function 'kotlinx.coroutines.assert' call
    if ($this.replay_1 === 0)
      return true;
    enqueueLocked($this, value);
    $this.bufferSize_1 = $this.bufferSize_1 + 1 | 0;
    if ($this.bufferSize_1 > $this.replay_1) {
      dropOldestLocked($this);
    }
    var tmp = $this;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b_0($this);
    var other = $this.bufferSize_1;
    tmp.minCollectorIndex_1 = this_0.plus_r93sks_k$(toLong(other));
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.buffer_1), _get_head__d7jo8b_0($this), null);
    $this.bufferSize_1 = $this.bufferSize_1 - 1 | 0;
    // Inline function 'kotlin.Long.plus' call
    var newHead = _get_head__d7jo8b_0($this).plus_r93sks_k$(toLong(1));
    if ($this.replayIndex_1.compareTo_9jj042_k$(newHead) < 0)
      $this.replayIndex_1 = newHead;
    if ($this.minCollectorIndex_1.compareTo_9jj042_k$(newHead) < 0) {
      correctCollectorIndexesOnDropOldest($this, newHead);
    }
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.get_nCollectors_gh2yp7_k$() === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = $this.get_slots_iyl3po_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.correctCollectorIndexesOnDropOldest.<anonymous>' call
            if (element.index_1.compareTo_9jj042_k$(new Long(0, 0)) >= 0 ? element.index_1.compareTo_9jj042_k$(newHead) < 0 : false) {
              element.index_1 = newHead;
            }
          }
        }
      }
    }
    $this.minCollectorIndex_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__xhdb3o($this);
    var curBuffer = $this.buffer_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0 = _get_head__d7jo8b_0($this).plus_r93sks_k$(toLong(curSize));
    setBufferAt(buffer, tmp$ret$0, item);
  }
  function growBuffer($this, curBuffer, curSize, newSize) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(newSize > 0)) {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
      var message = 'Buffer size overflow';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.arrayOfNulls' call
    var this_0 = fillArrayVal(Array(newSize), null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
    $this.buffer_1 = this_0;
    var newBuffer = this_0;
    if (curBuffer == null)
      return newBuffer;
    var head = _get_head__d7jo8b_0($this);
    var inductionVariable = 0;
    if (inductionVariable < curSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.Long.plus' call
        var tmp = head.plus_r93sks_k$(toLong(i));
        // Inline function 'kotlin.Long.plus' call
        var tmp$ret$4 = head.plus_r93sks_k$(toLong(i));
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$4));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function emitSuspend($this, value, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.initCancellability_shqc60_k$();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>' call
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>' call
      if (tryEmitLocked($this, value)) {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.resumeWith_dtxwbr_k$(tmp$ret$0);
        resumes = findSlotsToResumeLocked($this, resumes);
        tmp$ret$2 = null;
        break $l$block;
      }
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.Long.plus' call
      var this_0 = _get_head__d7jo8b_0($this);
      var other = _get_totalSize__xhdb3o($this);
      var tmp$ret$3 = this_0.plus_r93sks_k$(toLong(other));
      var this_1 = new Emitter($this, tmp$ret$3, value, cancellable);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>.<anonymous>' call
      enqueueLocked($this, this_1);
      $this.queueSize_1 = $this.queueSize_1 + 1 | 0;
      if ($this.bufferCapacity_1 === 0)
        resumes = findSlotsToResumeLocked($this, resumes);
      tmp$ret$2 = this_1;
    }
    var emitter = tmp$ret$2;
    if (emitter == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      disposeOnCancellation(cancellable, emitter);
    }
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var r = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (r == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        var tmp$ret$7 = _Result___init__impl__xyqfz8(Unit_getInstance());
        r.resumeWith_dtxwbr_k$(tmp$ret$7);
      }
    }
    return cancellable.getResult_clfhg3_k$();
  }
  function cancelEmitter($this, emitter) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (emitter.index_1.compareTo_9jj042_k$(_get_head__d7jo8b_0($this)) < 0)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.buffer_1);
    if (!(getBufferAt(buffer, emitter.index_1) === emitter))
      return Unit_getInstance();
    setBufferAt(buffer, emitter.index_1, get_NO_VALUE());
    cleanupTailLocked($this);
    return Unit_getInstance();
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    // Inline function 'kotlin.comparisons.minOf' call
    var newHead = newMinCollectorIndex.compareTo_9jj042_k$(newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
    // Inline function 'kotlinx.coroutines.assert' call
    var inductionVariable = _get_head__d7jo8b_0($this);
    if (inductionVariable.compareTo_9jj042_k$(newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable.plus_r93sks_k$(new Long(1, 0));
        setBufferAt(ensureNotNull($this.buffer_1), index, null);
      }
       while (inductionVariable.compareTo_9jj042_k$(newHead) < 0);
    $this.replayIndex_1 = newReplayIndex;
    $this.minCollectorIndex_1 = newMinCollectorIndex;
    $this.bufferSize_1 = newBufferEndIndex.minus_mfbszm_k$(newHead).toInt_1tsl84_k$();
    $this.queueSize_1 = newQueueEndIndex.minus_mfbszm_k$(newBufferEndIndex).toInt_1tsl84_k$();
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function cleanupTailLocked($this) {
    if ($this.bufferCapacity_1 === 0 ? $this.queueSize_1 <= 1 : false)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.buffer_1);
    $l$loop: while (true) {
      var tmp;
      if ($this.queueSize_1 > 0) {
        // Inline function 'kotlin.Long.minus' call
        // Inline function 'kotlin.Long.plus' call
        var this_0 = _get_head__d7jo8b_0($this);
        var other = _get_totalSize__xhdb3o($this);
        var tmp$ret$1 = this_0.plus_r93sks_k$(toLong(other)).minus_mfbszm_k$(toLong(1));
        tmp = getBufferAt(buffer, tmp$ret$1) === get_NO_VALUE();
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      $this.queueSize_1 = $this.queueSize_1 - 1 | 0;
      // Inline function 'kotlin.Long.plus' call
      var this_1 = _get_head__d7jo8b_0($this);
      var other_0 = _get_totalSize__xhdb3o($this);
      var tmp$ret$2 = this_1.plus_r93sks_k$(toLong(other_0));
      setBufferAt(buffer, tmp$ret$2, null);
    }
  }
  function tryTakeValue($this, slot) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryTakeValue.<anonymous>' call
    var index = tryPeekLocked($this, slot);
    var tmp;
    if (index.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      tmp = get_NO_VALUE();
    } else {
      var oldIndex = slot.index_1;
      var newValue = getPeekedValueLockedAt($this, index);
      var tmp_0 = slot;
      // Inline function 'kotlin.Long.plus' call
      tmp_0.index_1 = index.plus_r93sks_k$(toLong(1));
      resumes = $this.updateCollectorIndexLocked_zeer6y_k$(oldIndex);
      tmp = newValue;
    }
    var value = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var resume = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (resume == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        resume.resumeWith_dtxwbr_k$(tmp$ret$3);
      }
    }
    return value;
  }
  function tryPeekLocked($this, slot) {
    var index = slot.index_1;
    if (index.compareTo_9jj042_k$(_get_bufferEndIndex__d2rk18($this)) < 0)
      return index;
    if ($this.bufferCapacity_1 > 0)
      return new Long(-1, -1);
    if (index.compareTo_9jj042_k$(_get_head__d7jo8b_0($this)) > 0)
      return new Long(-1, -1);
    if ($this.queueSize_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function getPeekedValueLockedAt($this, index) {
    var item = getBufferAt(ensureNotNull($this.buffer_1), index);
    var tmp;
    if (item instanceof Emitter) {
      tmp = item.value_1;
    } else {
      tmp = item;
    }
    return tmp;
  }
  function awaitValue($this, slot, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.initCancellability_shqc60_k$();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>' call
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>.<anonymous>' call
      var index = tryPeekLocked($this, slot);
      if (index.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
        slot.cont_1 = cancellable;
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.resumeWith_dtxwbr_k$(tmp$ret$0);
        break $l$block;
      }
      slot.cont_1 = cancellable;
    }
    return cancellable.getResult_clfhg3_k$();
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.get_nCollectors_gh2yp7_k$() === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = $this.get_slots_iyl3po_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            $l$block_1: {
              // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.findSlotsToResumeLocked.<anonymous>' call
              var tmp0_elvis_lhs = element.cont_1;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                break $l$block_1;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var cont = tmp;
              if (tryPeekLocked($this, element).compareTo_9jj042_k$(new Long(0, 0)) < 0) {
                break $l$block_1;
              }
              if (resumeCount >= resumes.length) {
                var tmp_0 = resumes;
                // Inline function 'kotlin.comparisons.maxOf' call
                var b = imul(2, resumes.length);
                var tmp$ret$2 = Math.max(2, b);
                resumes = copyOf(tmp_0, tmp$ret$2);
              }
              var tmp_1 = resumes;
              var tmp1 = resumeCount;
              resumeCount = tmp1 + 1 | 0;
              tmp_1[tmp1] = cont;
              element.cont_1 = null;
            }
          }
        }
      }
    }
    return resumes;
  }
  function Emitter(flow, index, value, cont) {
    this.flow_1 = flow;
    this.index_1 = index;
    this.value_1 = value;
    this.cont_1 = cont;
  }
  protoOf(Emitter).get_flow_wom2yf_k$ = function () {
    return this.flow_1;
  };
  protoOf(Emitter).set_index_qwvax5_k$ = function (_set____db54di) {
    this.index_1 = _set____db54di;
  };
  protoOf(Emitter).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(Emitter).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Emitter).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(Emitter).dispose_3nnxhr_k$ = function () {
    return cancelEmitter(this.flow_1, this);
  };
  function $collectCOROUTINE$4(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(13);
            this.slot0__1 = this._this__u8e3s4__1.allocateSlot_67zie3_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(12);
            var tmp_0 = this.collector_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this.collector_1.onSubscription_q7qr5n_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.collectorJob2__1 = this.get_context_h02k06_k$().get_y2st91_k$(Key_getInstance_2());
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            if (!true) {
              this.set_state_rjd8d0_k$(10);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            if (!true) {
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            }

            this.newValue3__1 = tryTakeValue(this._this__u8e3s4__1, this.slot0__1);
            if (!(this.newValue3__1 === get_NO_VALUE())) {
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            }

          case 6:
            this.set_state_rjd8d0_k$(7);
            suspendResult = awaitValue(this._this__u8e3s4__1, this.slot0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 8:
            var tmp0_safe_receiver = this.collectorJob2__1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            this.set_state_rjd8d0_k$(9);
            var tmp_2 = this.newValue3__1;
            suspendResult = this.collector_1.emit_t92u1f_k$((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 10:
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(13);
            this.set_state_rjd8d0_k$(11);
            continue $sm;
          case 11:
            this.set_exceptionState_fex74n_k$(13);
            this._this__u8e3s4__1.freeSlot_95hriy_k$(this.slot0__1);
            return Unit_getInstance();
          case 12:
            this.set_exceptionState_fex74n_k$(13);
            var t = this.get_exception_x0n6w6_k$();
            this._this__u8e3s4__1.freeSlot_95hriy_k$(this.slot0__1);
            throw t;
          case 13:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 13) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function SharedFlowImpl(replay, bufferCapacity, onBufferOverflow) {
    AbstractSharedFlow.call(this);
    this.replay_1 = replay;
    this.bufferCapacity_1 = bufferCapacity;
    this.onBufferOverflow_1 = onBufferOverflow;
    this.buffer_1 = null;
    this.replayIndex_1 = new Long(0, 0);
    this.minCollectorIndex_1 = new Long(0, 0);
    this.bufferSize_1 = 0;
    this.queueSize_1 = 0;
  }
  protoOf(SharedFlowImpl).get_replayCache_uwub8y_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.<get-replayCache>.<anonymous>' call
    var replaySize = _get_replaySize__dxgnb1(this);
    if (replaySize === 0)
      return emptyList();
    var result = ArrayList_init_$Create$(replaySize);
    var buffer = ensureNotNull(this.buffer_1);
    var inductionVariable = 0;
    if (inductionVariable < replaySize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'kotlin.Long.plus' call
        var tmp$ret$0 = this.replayIndex_1.plus_r93sks_k$(toLong(i));
        var tmp = getBufferAt(buffer, tmp$ret$0);
        var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        result.add_utx5q5_k$(element);
      }
       while (inductionVariable < replaySize);
    return result;
  };
  protoOf(SharedFlowImpl).get_lastReplayedLocked_pnaey7_k$ = function () {
    var tmp = ensureNotNull(this.buffer_1);
    // Inline function 'kotlin.Long.minus' call
    // Inline function 'kotlin.Long.plus' call
    var this_0 = this.replayIndex_1;
    var other = _get_replaySize__dxgnb1(this);
    var tmp$ret$1 = this_0.plus_r93sks_k$(toLong(other)).minus_mfbszm_k$(toLong(1));
    var tmp_0 = getBufferAt(tmp, tmp$ret$1);
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(SharedFlowImpl).collect_ve9kyv_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$4(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SharedFlowImpl).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_ve9kyv_k$(collector, $completion);
  };
  protoOf(SharedFlowImpl).tryEmit_ru0jrz_k$ = function (value) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryEmit.<anonymous>' call
    var tmp;
    if (tryEmitLocked(this, value)) {
      resumes = findSlotsToResumeLocked(this, resumes);
      tmp = true;
    } else {
      tmp = false;
    }
    var emitted = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cont.resumeWith_dtxwbr_k$(tmp$ret$2);
      }
    }
    return emitted;
  };
  protoOf(SharedFlowImpl).emit_t92u1f_k$ = function (value, $completion) {
    if (this.tryEmit_ru0jrz_k$(value))
      return Unit_getInstance();
    return emitSuspend(this, value, $completion);
  };
  protoOf(SharedFlowImpl).updateNewCollectorIndexLocked_xl3tlm_k$ = function () {
    var index = this.replayIndex_1;
    if (index.compareTo_9jj042_k$(this.minCollectorIndex_1) < 0)
      this.minCollectorIndex_1 = index;
    return index;
  };
  protoOf(SharedFlowImpl).updateCollectorIndexLocked_zeer6y_k$ = function (oldIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (oldIndex.compareTo_9jj042_k$(this.minCollectorIndex_1) > 0)
      return get_EMPTY_RESUMES();
    var head = _get_head__d7jo8b_0(this);
    // Inline function 'kotlin.Long.plus' call
    var other = this.bufferSize_1;
    var newMinCollectorIndex = head.plus_r93sks_k$(toLong(other));
    if (this.bufferCapacity_1 === 0 ? this.queueSize_1 > 0 : false) {
      newMinCollectorIndex = newMinCollectorIndex.inc_28ke_k$();
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if (this.get_nCollectors_gh2yp7_k$() === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = this.get_slots_iyl3po_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.updateCollectorIndexLocked.<anonymous>' call
            if (element.index_1.compareTo_9jj042_k$(new Long(0, 0)) >= 0 ? element.index_1.compareTo_9jj042_k$(newMinCollectorIndex) < 0 : false)
              newMinCollectorIndex = element.index_1;
          }
        }
      }
    }
    // Inline function 'kotlinx.coroutines.assert' call
    if (newMinCollectorIndex.compareTo_9jj042_k$(this.minCollectorIndex_1) <= 0)
      return get_EMPTY_RESUMES();
    var newBufferEndIndex = _get_bufferEndIndex__d2rk18(this);
    var tmp;
    if (this.get_nCollectors_gh2yp7_k$() > 0) {
      var newBufferSize0 = newBufferEndIndex.minus_mfbszm_k$(newMinCollectorIndex).toInt_1tsl84_k$();
      // Inline function 'kotlin.comparisons.minOf' call
      var a = this.queueSize_1;
      var b = this.bufferCapacity_1 - newBufferSize0 | 0;
      tmp = Math.min(a, b);
    } else {
      tmp = this.queueSize_1;
    }
    var maxResumeCount = tmp;
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlin.Long.plus' call
    var this_0 = newBufferEndIndex;
    var other_0 = this.queueSize_1;
    var newQueueEndIndex = this_0.plus_r93sks_k$(toLong(other_0));
    if (maxResumeCount > 0) {
      // Inline function 'kotlin.arrayOfNulls' call
      resumes = fillArrayVal(Array(maxResumeCount), null);
      var resumeCount = 0;
      var buffer = ensureNotNull(this.buffer_1);
      var inductionVariable_0 = newBufferEndIndex;
      if (inductionVariable_0.compareTo_9jj042_k$(newQueueEndIndex) < 0)
        $l$loop: do {
          var curEmitterIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0.plus_r93sks_k$(new Long(1, 0));
          var emitter = getBufferAt(buffer, curEmitterIndex);
          if (!(emitter === get_NO_VALUE())) {
            if (!(emitter instanceof Emitter))
              THROW_CCE();
            var tmp_0 = resumes;
            var tmp2 = resumeCount;
            resumeCount = tmp2 + 1 | 0;
            tmp_0[tmp2] = emitter.cont_1;
            setBufferAt(buffer, curEmitterIndex, get_NO_VALUE());
            setBufferAt(buffer, newBufferEndIndex, emitter.value_1);
            newBufferEndIndex = newBufferEndIndex.inc_28ke_k$();
            if (resumeCount >= maxResumeCount)
              break $l$loop;
          }
        }
         while (inductionVariable_0.compareTo_9jj042_k$(newQueueEndIndex) < 0);
    }
    var newBufferSize1 = newBufferEndIndex.minus_mfbszm_k$(head).toInt_1tsl84_k$();
    if (this.get_nCollectors_gh2yp7_k$() === 0)
      newMinCollectorIndex = newBufferEndIndex;
    // Inline function 'kotlin.comparisons.maxOf' call
    var a_0 = this.replayIndex_1;
    // Inline function 'kotlin.Long.minus' call
    var this_1 = newBufferEndIndex;
    // Inline function 'kotlin.comparisons.minOf' call
    var a_1 = this.replay_1;
    var other_1 = Math.min(a_1, newBufferSize1);
    var b_0 = this_1.minus_mfbszm_k$(toLong(other_1));
    var newReplayIndex = a_0.compareTo_9jj042_k$(b_0) >= 0 ? a_0 : b_0;
    if ((this.bufferCapacity_1 === 0 ? newReplayIndex.compareTo_9jj042_k$(newQueueEndIndex) < 0 : false) ? equals(getBufferAt(ensureNotNull(this.buffer_1), newReplayIndex), get_NO_VALUE()) : false) {
      newBufferEndIndex = newBufferEndIndex.inc_28ke_k$();
      newReplayIndex = newReplayIndex.inc_28ke_k$();
    }
    updateBufferLocked(this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex);
    cleanupTailLocked(this);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(resumes.length === 0))
      resumes = findSlotsToResumeLocked(this, resumes);
    return resumes;
  };
  protoOf(SharedFlowImpl).createSlot_mn6f4q_k$ = function () {
    return new SharedFlowSlot();
  };
  protoOf(SharedFlowImpl).createSlotArray_10rtp5_k$ = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  };
  protoOf(SharedFlowImpl).resetReplayCache_u0fxh8_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    updateBufferLocked(this, _get_bufferEndIndex__d2rk18(this), this.minCollectorIndex_1, _get_bufferEndIndex__d2rk18(this), _get_queueEndIndex__4m025l(this));
    return Unit_getInstance();
  };
  protoOf(SharedFlowImpl).fuse_gny1ac_k$ = function (context, capacity, onBufferOverflow) {
    return fuseSharedFlow(this, context, capacity, onBufferOverflow);
  };
  function SharedFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.index_1 = new Long(-1, -1);
    this.cont_1 = null;
  }
  protoOf(SharedFlowSlot).set_index_qwvax5_k$ = function (_set____db54di) {
    this.index_1 = _set____db54di;
  };
  protoOf(SharedFlowSlot).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(SharedFlowSlot).set_cont_vzgc77_k$ = function (_set____db54di) {
    this.cont_1 = _set____db54di;
  };
  protoOf(SharedFlowSlot).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(SharedFlowSlot).allocateLocked_8q8et0_k$ = function (flow) {
    if (this.index_1.compareTo_9jj042_k$(new Long(0, 0)) >= 0)
      return false;
    this.index_1 = flow.updateNewCollectorIndexLocked_xl3tlm_k$();
    return true;
  };
  protoOf(SharedFlowSlot).allocateLocked_z5itrq_k$ = function (flow) {
    return this.allocateLocked_8q8et0_k$(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  protoOf(SharedFlowSlot).freeLocked_z0adlp_k$ = function (flow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var oldIndex = this.index_1;
    this.index_1 = new Long(-1, -1);
    this.cont_1 = null;
    return flow.updateCollectorIndexLocked_zeer6y_k$(oldIndex);
  };
  protoOf(SharedFlowSlot).freeLocked_1gezd3_k$ = function (flow) {
    return this.freeLocked_z0adlp_k$(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  function getBufferAt(_this__u8e3s4, index) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.toInt_1tsl84_k$() & (_this__u8e3s4.length - 1 | 0)];
  }
  function setBufferAt(_this__u8e3s4, index, item) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.toInt_1tsl84_k$() & (_this__u8e3s4.length - 1 | 0)] = item;
  }
  var properties_initialized_SharedFlow_kt_tmefor;
  function _init_properties_SharedFlow_kt__umasnn() {
    if (!properties_initialized_SharedFlow_kt_tmefor) {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow() {
  }
  function MutableStateFlow_0(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    return new StateFlowImpl(value == null ? get_NULL() : value);
  }
  function StateFlow() {
  }
  function _get__state__37adl3_1($this) {
    return $this._state_1;
  }
  function _set_sequence__iw30om($this, _set____db54di) {
    $this.sequence_1 = _set____db54di;
  }
  function _get_sequence__636p7u($this) {
    return $this.sequence_1;
  }
  function updateState($this, expectedState, newState) {
    var curSequence = 0;
    var curSlots = $this.get_slots_iyl3po_k$();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var oldState = $this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (!(expectedState == null) ? !equals(oldState, expectedState) : false)
      return false;
    if (equals(oldState, newState))
      return true;
    $this._state_1.set_kotlinx$atomicfu$value_508e3y_k$(newState);
    curSequence = $this.sequence_1;
    if ((curSequence & 1) === 0) {
      curSequence = curSequence + 1 | 0;
      $this.sequence_1 = curSequence;
    } else {
      $this.sequence_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.get_slots_iyl3po_k$();
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.StateFlowImpl.updateState.<anonymous>' call
          if (element == null)
            null;
          else {
            element.makePending_e7hvrb_k$();
          }
        }
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      if ($this.sequence_1 === curSequence) {
        $this.sequence_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.sequence_1;
      curSlots = $this.get_slots_iyl3po_k$();
    }
  }
  function $collectCOROUTINE$5(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(12);
            this.slot0__1 = this._this__u8e3s4__1.allocateSlot_67zie3_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(11);
            var tmp_0 = this.collector_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this.collector_1.onSubscription_q7qr5n_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.collectorJob2__1 = this.get_context_h02k06_k$().get_y2st91_k$(Key_getInstance_2());
            this.oldState3__1 = null;
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            if (!true) {
              this.set_state_rjd8d0_k$(9);
              continue $sm;
            }

            this.newState4__1 = this._this__u8e3s4__1._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
            var tmp0_safe_receiver = this.collectorJob2__1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            if (this.oldState3__1 == null ? true : !equals(this.oldState3__1, this.newState4__1)) {
              this.set_state_rjd8d0_k$(5);
              var this_0 = get_NULL();
              var value = this.newState4__1;
              var tmp_2;
              if (value === this_0) {
                tmp_2 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
              } else {
                tmp_2 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
              }
              suspendResult = this.collector_1.emit_t92u1f_k$(tmp_2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            }

          case 5:
            this.oldState3__1 = this.newState4__1;
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            if (!this.slot0__1.takePending_f3q49c_k$()) {
              this.set_state_rjd8d0_k$(7);
              suspendResult = this.slot0__1.awaitPending_uaxl06_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            }

          case 7:
            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 8:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 9:
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(12);
            this.set_state_rjd8d0_k$(10);
            continue $sm;
          case 10:
            this.set_exceptionState_fex74n_k$(12);
            this._this__u8e3s4__1.freeSlot_95hriy_k$(this.slot0__1);
            return Unit_getInstance();
          case 11:
            this.set_exceptionState_fex74n_k$(12);
            var t = this.get_exception_x0n6w6_k$();
            this._this__u8e3s4__1.freeSlot_95hriy_k$(this.slot0__1);
            throw t;
          case 12:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 12) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this._state_1 = atomic$ref$1(initialState);
    this.sequence_1 = 0;
  }
  protoOf(StateFlowImpl).set_value_v1vabv_k$ = function (value) {
    updateState(this, null, value == null ? get_NULL() : value);
  };
  protoOf(StateFlowImpl).get_value_j01efc_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var this_0 = get_NULL();
    var value = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var tmp;
    if (value === this_0) {
      tmp = (null == null ? true : !(null == null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : !(value == null)) ? value : THROW_CCE();
    }
    return tmp;
  };
  protoOf(StateFlowImpl).compareAndSet_l3595a_k$ = function (expect, update) {
    var tmp = expect == null ? get_NULL() : expect;
    return updateState(this, tmp, update == null ? get_NULL() : update);
  };
  protoOf(StateFlowImpl).get_replayCache_uwub8y_k$ = function () {
    return listOf(this.get_value_j01efc_k$());
  };
  protoOf(StateFlowImpl).tryEmit_ru0jrz_k$ = function (value) {
    this.set_value_v1vabv_k$(value);
    return true;
  };
  protoOf(StateFlowImpl).emit_t92u1f_k$ = function (value, $completion) {
    this.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  };
  protoOf(StateFlowImpl).resetReplayCache_u0fxh8_k$ = function () {
    throw UnsupportedOperationException_init_$Create$('MutableStateFlow.resetReplayCache is not supported');
  };
  protoOf(StateFlowImpl).collect_ve9kyv_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$5(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(StateFlowImpl).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_ve9kyv_k$(collector, $completion);
  };
  protoOf(StateFlowImpl).createSlot_mn6f4q_k$ = function () {
    return new StateFlowSlot();
  };
  protoOf(StateFlowImpl).createSlotArray_10rtp5_k$ = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  };
  protoOf(StateFlowImpl).fuse_gny1ac_k$ = function (context, capacity, onBufferOverflow) {
    return fuseStateFlow(this, context, capacity, onBufferOverflow);
  };
  function _get__state__37adl3_2($this) {
    return $this._state_1;
  }
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this._state_1 = atomic$ref$1(null);
  }
  protoOf(StateFlowSlot).allocateLocked_8qbrc6_k$ = function (flow) {
    if (!(this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null))
      return false;
    this._state_1.set_kotlinx$atomicfu$value_508e3y_k$(get_NONE());
    return true;
  };
  protoOf(StateFlowSlot).allocateLocked_z5itrq_k$ = function (flow) {
    return this.allocateLocked_8qbrc6_k$(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).freeLocked_vptyqx_k$ = function (flow) {
    this._state_1.set_kotlinx$atomicfu$value_508e3y_k$(null);
    return get_EMPTY_RESUMES();
  };
  protoOf(StateFlowSlot).freeLocked_1gezd3_k$ = function (flow) {
    return this.freeLocked_vptyqx_k$(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).makePending_e7hvrb_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.makePending.<anonymous>' call
      var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (state == null)
        return Unit_getInstance();
      else if (state === get_PENDING())
        return Unit_getInstance();
      else if (state === get_NONE()) {
        if (this._state_1.atomicfu$compareAndSet(state, get_PENDING()))
          return Unit_getInstance();
      } else {
        if (this._state_1.atomicfu$compareAndSet(state, get_NONE())) {
          // Inline function 'kotlin.coroutines.resume' call
          var this_1 = state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          // Inline function 'kotlin.Companion.success' call
          Companion_getInstance();
          var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
          this_1.resumeWith_dtxwbr_k$(tmp$ret$0);
          return Unit_getInstance();
        }
      }
    }
  };
  protoOf(StateFlowSlot).takePending_f3q49c_k$ = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.assert' call
    return ensureNotNull(this._state_1.atomicfu$getAndSet(get_NONE())) === get_PENDING();
  };
  protoOf(StateFlowSlot).awaitPending_uaxl06_k$ = function ($completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.initCancellability_shqc60_k$();
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.awaitPending.<anonymous>' call
      // Inline function 'kotlinx.coroutines.assert' call
      if (this._state_1.atomicfu$compareAndSet(get_NONE(), cancellable)) {
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
      cancellable.resumeWith_dtxwbr_k$(tmp$ret$1);
    }
    return cancellable.getResult_clfhg3_k$();
  };
  function fuseStateFlow(_this__u8e3s4, context, capacity, onBufferOverflow) {
    _init_properties_StateFlow_kt__eu9yi5();
    // Inline function 'kotlinx.coroutines.assert' call
    if (((0 <= capacity ? capacity <= 1 : false) ? true : capacity === Factory_getInstance().get_BUFFERED_qzy754_k$()) ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) {
      return _this__u8e3s4;
    }
    return fuseSharedFlow(_this__u8e3s4, context, capacity, onBufferOverflow);
  }
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (!properties_initialized_StateFlow_kt_nsqikx) {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function get_EMPTY_RESUMES() {
    _init_properties_AbstractSharedFlow_kt__h2xygb();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  function _set_slots__knzp9s($this, _set____db54di) {
    $this.slots_1 = _set____db54di;
  }
  function _set_nCollectors__60nrap($this, _set____db54di) {
    $this.nCollectors_1 = _set____db54di;
  }
  function _set_nextIndex__5mwvzu($this, _set____db54di) {
    $this.nextIndex_1 = _set____db54di;
  }
  function _get_nextIndex__nnxkeq($this) {
    return $this.nextIndex_1;
  }
  function _set__subscriptionCount__l7i64c($this, _set____db54di) {
    $this._subscriptionCount_1 = _set____db54di;
  }
  function _get__subscriptionCount__fvqkqg($this) {
    return $this._subscriptionCount_1;
  }
  function AbstractSharedFlow() {
    this.slots_1 = null;
    this.nCollectors_1 = 0;
    this.nextIndex_1 = 0;
    this._subscriptionCount_1 = null;
  }
  protoOf(AbstractSharedFlow).get_slots_iyl3po_k$ = function () {
    return this.slots_1;
  };
  protoOf(AbstractSharedFlow).get_nCollectors_gh2yp7_k$ = function () {
    return this.nCollectors_1;
  };
  protoOf(AbstractSharedFlow).get_subscriptionCount_9h9j93_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.<get-subscriptionCount>.<anonymous>' call
    var tmp0_elvis_lhs = this._subscriptionCount_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new SubscriptionCountStateFlow(this.nCollectors_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.<get-subscriptionCount>.<anonymous>.<anonymous>' call
      this._subscriptionCount_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractSharedFlow).allocateSlot_67zie3_k$ = function () {
    var subscriptionCount = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>' call
    var curSlots = this.slots_1;
    var tmp;
    if (curSlots == null) {
      // Inline function 'kotlin.also' call
      var this_0 = this.createSlotArray_10rtp5_k$(2);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
      this.slots_1 = this_0;
      tmp = this_0;
    } else {
      var tmp_0;
      if (this.nCollectors_1 >= curSlots.length) {
        // Inline function 'kotlin.also' call
        var this_1 = copyOf(curSlots, imul(2, curSlots.length));
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        this.slots_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = curSlots;
      }
      tmp = tmp_0;
    }
    var slots = tmp;
    var index = this.nextIndex_1;
    var slot;
    $l$loop: while (true) {
      var tmp0_elvis_lhs = slots[index];
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_2 = this.createSlot_mn6f4q_k$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        slots[index] = this_2;
        tmp_1 = this_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      slot = tmp_1;
      index = index + 1 | 0;
      if (index >= slots.length)
        index = 0;
      if ((slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).allocateLocked_z5itrq_k$(this))
        break $l$loop;
    }
    this.nextIndex_1 = index;
    this.nCollectors_1 = this.nCollectors_1 + 1 | 0;
    subscriptionCount = this._subscriptionCount_1;
    var slot_0 = slot;
    var tmp0_safe_receiver = subscriptionCount;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.increment_rp2k21_k$(1);
    return slot_0;
  };
  protoOf(AbstractSharedFlow).freeSlot_95hriy_k$ = function (slot) {
    var subscriptionCount = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.freeSlot.<anonymous>' call
    this.nCollectors_1 = this.nCollectors_1 - 1 | 0;
    subscriptionCount = this._subscriptionCount_1;
    if (this.nCollectors_1 === 0)
      this.nextIndex_1 = 0;
    var resumes = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).freeLocked_1gezd3_k$(this);
    var inductionVariable = 0;
    var last = resumes.length;
    while (inductionVariable < last) {
      var cont = resumes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cont.resumeWith_dtxwbr_k$(tmp$ret$2);
      }
    }
    var tmp2_safe_receiver = subscriptionCount;
    if (tmp2_safe_receiver == null)
      null;
    else
      tmp2_safe_receiver.increment_rp2k21_k$(-1);
  };
  protoOf(AbstractSharedFlow).forEachSlotLocked_4hw8um_k$ = function (block) {
    if (this.nCollectors_1 === 0)
      return Unit_getInstance();
    var tmp0_safe_receiver = this.slots_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.length;
      while (inductionVariable < last) {
        var element = tmp0_safe_receiver[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
        if (!(element == null))
          block(element);
      }
    }
  };
  function AbstractSharedFlowSlot() {
  }
  function SubscriptionCountStateFlow(initialValue) {
    SharedFlowImpl.call(this, 1, IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$(), BufferOverflow_DROP_OLDEST_getInstance());
    this.tryEmit_ru0jrz_k$(initialValue);
  }
  protoOf(SubscriptionCountStateFlow).get_value_j01efc_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.flow.internal.SubscriptionCountStateFlow.<get-value>.<anonymous>' call
    return this.get_lastReplayedLocked_pnaey7_k$();
  };
  protoOf(SubscriptionCountStateFlow).increment_rp2k21_k$ = function (delta) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.flow.internal.SubscriptionCountStateFlow.increment.<anonymous>' call
    return this.tryEmit_ru0jrz_k$(this.get_lastReplayedLocked_pnaey7_k$() + delta | 0);
  };
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function _init_properties_AbstractSharedFlow_kt__h2xygb() {
    if (!properties_initialized_AbstractSharedFlow_kt_2mpafr) {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_RESUMES = fillArrayVal(Array(0), null);
    }
  }
  function FusibleFlow() {
  }
  function ChannelFlowOperatorImpl(flow, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$() : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlowOperator.call(this, flow, context, capacity, onBufferOverflow);
  }
  protoOf(ChannelFlowOperatorImpl).create_lydvvb_k$ = function (context, capacity, onBufferOverflow) {
    return new ChannelFlowOperatorImpl(this.flow_1, context, capacity, onBufferOverflow);
  };
  protoOf(ChannelFlowOperatorImpl).dropChannelOperators_b7m5cr_k$ = function () {
    return this.flow_1;
  };
  protoOf(ChannelFlowOperatorImpl).flowCollect_ki1wtf_k$ = function (collector, $completion) {
    return this.flow_1.collect_aksokr_k$(collector, $completion);
  };
  function collectWithContextUndispatched($this, collector, newContext, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.get_context_h02k06_k$();
    var originalContextCollector = withUndispatchedContextCollector(collector, tmp$ret$0);
    return withContextUndispatched(newContext, originalContextCollector, VOID, ChannelFlowOperator$collectWithContextUndispatched$slambda_0($this, null), $completion);
  }
  function ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).invoke_ilgcjr_k$ = function (it, $completion) {
    var tmp = this.create_xc9ltn_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ilgcjr_k$((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.flowCollect_ki1wtf_k$(this.it_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).create_xc9ltn_k$ = function (it, completion) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_xc9ltn_k$((!(value == null) ? isInterface(value, FlowCollector) : false) ? value : THROW_CCE(), completion);
  };
  function ChannelFlowOperator$collectWithContextUndispatched$slambda_0(this$0, resultContinuation) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_ilgcjr_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$6(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$6).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(7);
            if (this._this__u8e3s4__1.capacity_1 === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$()) {
              var tmp_0 = this;
              tmp_0.collectContext0__1 = this.get_context_h02k06_k$();
              this.newContext1__1 = this.collectContext0__1.plus_s13ygv_k$(this._this__u8e3s4__1.context_1);
              if (equals(this.newContext1__1, this.collectContext0__1)) {
                this.set_state_rjd8d0_k$(6);
                suspendResult = this._this__u8e3s4__1.flowCollect_ki1wtf_k$(this.collector_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(1);
                continue $sm;
              }
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 1:
            if (equals(this.newContext1__1.get_y2st91_k$(Key_getInstance()), this.collectContext0__1.get_y2st91_k$(Key_getInstance()))) {
              this.set_state_rjd8d0_k$(5);
              suspendResult = collectWithContextUndispatched(this._this__u8e3s4__1, this.collector_1, this.newContext1__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(4);
            suspendResult = protoOf(ChannelFlow).collect_aksokr_k$.call(this._this__u8e3s4__1, this.collector_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            return Unit_getInstance();
          case 6:
            return Unit_getInstance();
          case 7:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function ChannelFlowOperator(flow, context, capacity, onBufferOverflow) {
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.flow_1 = flow;
  }
  protoOf(ChannelFlowOperator).get_flow_wom2yf_k$ = function () {
    return this.flow_1;
  };
  protoOf(ChannelFlowOperator).collectTo_qjwlth_k$ = function (scope, $completion) {
    return this.flowCollect_ki1wtf_k$(new SendingCollector(scope), $completion);
  };
  protoOf(ChannelFlowOperator).collect_aksokr_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$6(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelFlowOperator).toString = function () {
    return '' + this.flow_1 + ' -> ' + protoOf(ChannelFlow).toString.call(this);
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).invoke_c55cnc_k$ = function (it, $completion) {
    var tmp = this.create_8tn3fw_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_c55cnc_k$((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.collectTo_qjwlth_k$(this.it_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).create_8tn3fw_k$ = function (it, completion) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).create_wyq9v6_k$ = function (value, completion) {
    return this.create_8tn3fw_k$((!(value == null) ? isInterface(value, ProducerScope) : false) ? value : THROW_CCE(), completion);
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this$0, resultContinuation) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_c55cnc_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow$collect$slambda($collector, this$0, resultContinuation) {
    this.$collector_1 = $collector;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$collect$slambda).invoke_d9fzmj_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelFlow$collect$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = emitAll(this.$collector_1, this.this$0__1.produceImpl_qjsv5i_k$(this.$this$coroutineScope_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(ChannelFlow$collect$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new ChannelFlow$collect$slambda(this.$collector_1, this.this$0__1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(ChannelFlow$collect$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ChannelFlow$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new ChannelFlow$collect$slambda($collector, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_d9fzmj_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow(context, capacity, onBufferOverflow) {
    this.context_1 = context;
    this.capacity_1 = capacity;
    this.onBufferOverflow_1 = onBufferOverflow;
    // Inline function 'kotlinx.coroutines.assert' call
  }
  protoOf(ChannelFlow).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(ChannelFlow).get_capacity_wxbgcd_k$ = function () {
    return this.capacity_1;
  };
  protoOf(ChannelFlow).get_onBufferOverflow_51en86_k$ = function () {
    return this.onBufferOverflow_1;
  };
  protoOf(ChannelFlow).get_collectToFun_va2loj_k$ = function () {
    return ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this, null);
  };
  protoOf(ChannelFlow).get_produceCapacity_7smiwf_k$ = function () {
    return this.capacity_1 === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$() ? Factory_getInstance().get_BUFFERED_qzy754_k$() : this.capacity_1;
  };
  protoOf(ChannelFlow).dropChannelOperators_b7m5cr_k$ = function () {
    return null;
  };
  protoOf(ChannelFlow).fuse_gny1ac_k$ = function (context, capacity, onBufferOverflow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var newContext = context.plus_s13ygv_k$(this.context_1);
    var newCapacity;
    var newOverflow;
    if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
      newCapacity = capacity;
      newOverflow = onBufferOverflow;
    } else {
      var tmp;
      if (this.capacity_1 === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$()) {
        tmp = capacity;
      } else if (capacity === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$()) {
        tmp = this.capacity_1;
      } else if (this.capacity_1 === Factory_getInstance().get_BUFFERED_qzy754_k$()) {
        tmp = capacity;
      } else if (capacity === Factory_getInstance().get_BUFFERED_qzy754_k$()) {
        tmp = this.capacity_1;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        // Inline function 'kotlinx.coroutines.assert' call
        var sum = this.capacity_1 + capacity | 0;
        tmp = sum >= 0 ? sum : Factory_getInstance().get_UNLIMITED_eshsm0_k$();
      }
      newCapacity = tmp;
      newOverflow = this.onBufferOverflow_1;
    }
    if ((equals(newContext, this.context_1) ? newCapacity === this.capacity_1 : false) ? newOverflow.equals(this.onBufferOverflow_1) : false)
      return this;
    return this.create_lydvvb_k$(newContext, newCapacity, newOverflow);
  };
  protoOf(ChannelFlow).produceImpl_qjsv5i_k$ = function (scope) {
    return produce(scope, this.context_1, this.get_produceCapacity_7smiwf_k$(), this.onBufferOverflow_1, CoroutineStart_ATOMIC_getInstance(), VOID, this.get_collectToFun_va2loj_k$());
  };
  protoOf(ChannelFlow).collect_aksokr_k$ = function (collector, $completion) {
    return coroutineScope(ChannelFlow$collect$slambda_0(collector, this, null), $completion);
  };
  protoOf(ChannelFlow).additionalToStringProps_j3cp6l_k$ = function () {
    return null;
  };
  protoOf(ChannelFlow).toString = function () {
    var props = ArrayList_init_$Create$(4);
    var tmp0_safe_receiver = this.additionalToStringProps_j3cp6l_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.ChannelFlow.toString.<anonymous>' call
      props.add_utx5q5_k$(tmp0_safe_receiver);
    }
    if (!(this.context_1 === EmptyCoroutineContext_getInstance())) {
      props.add_utx5q5_k$('context=' + this.context_1);
    }
    if (!(this.capacity_1 === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$())) {
      props.add_utx5q5_k$('capacity=' + this.capacity_1);
    }
    if (!this.onBufferOverflow_1.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.add_utx5q5_k$('onBufferOverflow=' + this.onBufferOverflow_1);
    }
    return get_classSimpleName(this) + '[' + joinToString(props, ', ') + ']';
  };
  function withUndispatchedContextCollector(_this__u8e3s4, emitContext) {
    var tmp;
    var tmp_0;
    if (_this__u8e3s4 instanceof SendingCollector) {
      tmp_0 = true;
    } else {
      tmp_0 = _this__u8e3s4 instanceof NopCollector;
    }
    if (tmp_0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = new UndispatchedContextCollector(_this__u8e3s4, emitContext);
    }
    return tmp;
  }
  function withContextUndispatched(newContext, value, countOrElement, block, $completion) {
    countOrElement = countOrElement === VOID ? threadContextElements(newContext) : countOrElement;
    // Inline function 'kotlinx.coroutines.flow.internal.withContextUndispatched.<anonymous>' call
    // Inline function 'kotlinx.coroutines.withCoroutineContext' call
    // Inline function 'kotlinx.coroutines.flow.internal.withContextUndispatched.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
    var completion = new StackFrameContinuation($completion, newContext);
    // Inline function 'kotlin.js.asDynamic' call
    var a = block;
    return typeof a === 'function' ? a(value, completion) : block.invoke_qns8j1_k$(value, completion);
  }
  function _get_emitContext__5m2ab9($this) {
    return $this.emitContext_1;
  }
  function _get_countOrElement__mr0q9r($this) {
    return $this.countOrElement_1;
  }
  function _get_emitRef__jc7zqn($this) {
    return $this.emitRef_1;
  }
  function UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation) {
    this.$downstream_1 = $downstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UndispatchedContextCollector$emitRef$slambda).invoke_oz8tte_k$ = function (it, $completion) {
    var tmp = this.create_zam77m_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_oz8tte_k$((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$downstream_1.emit_t92u1f_k$(this.it_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).create_zam77m_k$ = function (it, completion) {
    var i = new UndispatchedContextCollector$emitRef$slambda(this.$downstream_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_zam77m_k$((value == null ? true : !(value == null)) ? value : THROW_CCE(), completion);
  };
  function UndispatchedContextCollector$emitRef$slambda_0($downstream, resultContinuation) {
    var i = new UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_oz8tte_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UndispatchedContextCollector(downstream, emitContext) {
    this.emitContext_1 = emitContext;
    this.countOrElement_1 = threadContextElements(this.emitContext_1);
    var tmp = this;
    tmp.emitRef_1 = UndispatchedContextCollector$emitRef$slambda_0(downstream, null);
  }
  protoOf(UndispatchedContextCollector).emit_t92u1f_k$ = function (value, $completion) {
    return withContextUndispatched(this.emitContext_1, value, this.countOrElement_1, this.emitRef_1, $completion);
  };
  function _get_uCont__b1l76e($this) {
    return $this.uCont_1;
  }
  function StackFrameContinuation(uCont, context) {
    this.uCont_1 = uCont;
    this.context_1 = context;
  }
  protoOf(StackFrameContinuation).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(StackFrameContinuation).get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.uCont_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  protoOf(StackFrameContinuation).resumeWith_dtxwbr_k$ = function (result) {
    this.uCont_1.resumeWith_dtxwbr_k$(result);
  };
  protoOf(StackFrameContinuation).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  function checkOwnership(_this__u8e3s4, owner) {
    if (!(_this__u8e3s4.get_owner_iwkx3e_k$() === owner))
      throw _this__u8e3s4;
  }
  function NopCollector() {
    NopCollector_instance = this;
  }
  protoOf(NopCollector).emit_53hnst_k$ = function (value, $completion) {
    return Unit_getInstance();
  };
  protoOf(NopCollector).emit_t92u1f_k$ = function (value, $completion) {
    return this.emit_53hnst_k$((value == null ? true : !(value == null)) ? value : THROW_CCE(), $completion);
  };
  var NopCollector_instance;
  function NopCollector_getInstance() {
    if (NopCollector_instance == null)
      new NopCollector();
    return NopCollector_instance;
  }
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  function get_UNINITIALIZED() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return UNINITIALIZED;
  }
  var UNINITIALIZED;
  function get_DONE() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return DONE;
  }
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (!properties_initialized_NullSurrogate_kt_39v8bl) {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function unsafeFlow(block) {
    return new _no_name_provided__qut3iv(block);
  }
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.fold_j2vaxd_k$(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.get_collectContextSize_pumapd_k$())) {
      // Inline function 'kotlin.error' call
      var message = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + _this__u8e3s4.get_collectContext_m0m2mq_k$() + ',\n') + ('\t\tbut emission happened in ' + currentContext + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function transitiveCoroutineParent(_this__u8e3s4, collectJob) {
    var $this = _this__u8e3s4;
    var collectJob_0 = collectJob;
    $l$1: do {
      $l$0: do {
        if ($this === null)
          return null;
        if ($this === collectJob_0)
          return $this;
        if (!($this instanceof ScopeCoroutine))
          return $this;
        $this = $this.get_parent_hy4reb_k$();
        collectJob_0 = collectJob_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function _no_name_provided__qut3iv($block) {
    this.$block_1 = $block;
  }
  protoOf(_no_name_provided__qut3iv).collect_aksokr_k$ = function (collector, $completion) {
    return this.$block_1(collector, $completion);
  };
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.get_key_18j28a_k$();
      var collectElement = $this_checkContext.get_collectContext_m0m2mq_k$().get_y2st91_k$(key);
      var tmp;
      if (!(key === Key_getInstance_2())) {
        return !(element === collectElement) ? IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$() : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        var message = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + emissionParentJob + ', expected child of ' + collectJob + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function _get_channel__c6e3yq($this) {
    return $this.channel_1;
  }
  function SendingCollector(channel) {
    this.channel_1 = channel;
  }
  protoOf(SendingCollector).emit_t92u1f_k$ = function (value, $completion) {
    return this.channel_1.send_44jogj_k$(value, $completion);
  };
  function CancellableFlow() {
  }
  function get_defaultKeySelector() {
    _init_properties_Distinct_kt__4eindw();
    return defaultKeySelector;
  }
  var defaultKeySelector;
  function get_defaultAreEquivalent() {
    _init_properties_Distinct_kt__4eindw();
    return defaultAreEquivalent;
  }
  var defaultAreEquivalent;
  function defaultKeySelector$lambda(it) {
    _init_properties_Distinct_kt__4eindw();
    return it;
  }
  function defaultAreEquivalent$lambda(old, new_0) {
    _init_properties_Distinct_kt__4eindw();
    return equals(old, new_0);
  }
  var properties_initialized_Distinct_kt_uy8c72;
  function _init_properties_Distinct_kt__4eindw() {
    if (!properties_initialized_Distinct_kt_uy8c72) {
      properties_initialized_Distinct_kt_uy8c72 = true;
      defaultKeySelector = defaultKeySelector$lambda;
      defaultAreEquivalent = defaultAreEquivalent$lambda;
    }
  }
  function ensureActive_1(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof ThrowingCollector)
      throw _this__u8e3s4.e_1;
  }
  function ThrowingCollector(e) {
    this.e_1 = e;
  }
  protoOf(ThrowingCollector).get_e_1mhr5o_k$ = function () {
    return this.e_1;
  };
  protoOf(ThrowingCollector).emit_53hnst_k$ = function (value, $completion) {
    throw this.e_1;
  };
  protoOf(ThrowingCollector).emit_t92u1f_k$ = function (value, $completion) {
    return this.emit_53hnst_k$((value == null ? true : !(value == null)) ? value : THROW_CCE(), $completion);
  };
  function takeWhile(_this__u8e3s4, predicate) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_1(_this__u8e3s4, predicate);
  }
  function collectWhile(_this__u8e3s4, predicate, $completion) {
    var tmp = new $collectWhileCOROUTINE$7(_this__u8e3s4, predicate, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $emitCOROUTINE$9(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.value_1 = value;
  }
  protoOf($emitCOROUTINE$9).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            tmp_0.value0__1 = this.value_1;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.$predicate_1(this.value0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this._this__u8e3s4__1.$$this$unsafeFlow_1.emit_t92u1f_k$(this.value0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.WHEN_RESULT1__1 = false;
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 2:
            this.WHEN_RESULT1__1 = true;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            var ARGUMENT = this.WHEN_RESULT1__1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this._this__u8e3s4__1);
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function _no_name_provided__qut3iv_0($predicate, $$this$unsafeFlow) {
    this.$predicate_1 = $predicate;
    this.$$this$unsafeFlow_1 = $$this$unsafeFlow;
  }
  protoOf(_no_name_provided__qut3iv_0).emit_t92u1f_k$ = function (value, $completion) {
    var tmp = new $emitCOROUTINE$9(this, value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function $collectCOROUTINE$8(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$8).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this;
            tmp_0.$this$unsafeFlow0__1 = this.collector_1;
            var tmp_1 = this;
            tmp_1.this1__1 = this._this__u8e3s4__1.$this_takeWhile_1;
            var tmp_2 = this;
            tmp_2.collector2__1 = new _no_name_provided__qut3iv_0(this._this__u8e3s4__1.$predicate_1, this.$this$unsafeFlow0__1);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this1__1.collect_aksokr_k$(this.collector2__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof AbortFlowException) {
              var e = this.get_exception_x0n6w6_k$();
              checkOwnership(e, this.collector2__1);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function _no_name_provided__qut3iv_1($this_takeWhile, $predicate) {
    this.$this_takeWhile_1 = $this_takeWhile;
    this.$predicate_1 = $predicate;
  }
  protoOf(_no_name_provided__qut3iv_1).collect_aksokr_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$8(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function $emitCOROUTINE$10(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.value_1 = value;
  }
  protoOf($emitCOROUTINE$10).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.$predicate_1(this.value_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              throw new AbortFlowException(this._this__u8e3s4__1);
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function _no_name_provided__qut3iv_2($predicate) {
    this.$predicate_1 = $predicate;
  }
  protoOf(_no_name_provided__qut3iv_2).emit_t92u1f_k$ = function (value, $completion) {
    var tmp = new $emitCOROUTINE$10(this, value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function $collectWhileCOROUTINE$7(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.predicate_1 = predicate;
  }
  protoOf($collectWhileCOROUTINE$7).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this;
            tmp_0.collector0__1 = new _no_name_provided__qut3iv_2(this.predicate_1);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.collect_aksokr_k$(this.collector0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof AbortFlowException) {
              var e = this.get_exception_x0n6w6_k$();
              checkOwnership(e, this.collector0__1);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function get_DEFAULT_CONCURRENCY() {
    _init_properties_Merge_kt__cbpr96();
    return DEFAULT_CONCURRENCY;
  }
  var DEFAULT_CONCURRENCY;
  function get_DEFAULT_CONCURRENCY_PROPERTY_NAME() {
    return DEFAULT_CONCURRENCY_PROPERTY_NAME;
  }
  var DEFAULT_CONCURRENCY_PROPERTY_NAME;
  var properties_initialized_Merge_kt_dhn6vs;
  function _init_properties_Merge_kt__cbpr96() {
    if (!properties_initialized_Merge_kt_dhn6vs) {
      properties_initialized_Merge_kt_dhn6vs = true;
      DEFAULT_CONCURRENCY = systemProp('kotlinx.coroutines.flow.defaultConcurrency', 16, 1, IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$());
    }
  }
  function _get_collector__klro10($this) {
    return $this.collector_1;
  }
  function _get_action__ikx8yd($this) {
    return $this.action_1;
  }
  function $onSubscriptionCOROUTINE$11(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($onSubscriptionCOROUTINE$11).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(7);
            var tmp_0 = this;
            tmp_0.safeCollector0__1 = new SafeCollector(this._this__u8e3s4__1.collector_1, this.get_context_h02k06_k$());
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this._this__u8e3s4__1.action_1(this.safeCollector0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$01__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(7);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(7);
            this.safeCollector0__1.releaseIntercepted_5cyqh6_k$();
            var tmp_1 = this._this__u8e3s4__1.collector_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this.set_state_rjd8d0_k$(4);
              suspendResult = this._this__u8e3s4__1.collector_1.onSubscription_q7qr5n_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

          case 4:
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            this.set_exceptionState_fex74n_k$(7);
            var t = this.get_exception_x0n6w6_k$();
            this.safeCollector0__1.releaseIntercepted_5cyqh6_k$();
            throw t;
          case 7:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function SubscribedFlowCollector(collector, action) {
    this.collector_1 = collector;
    this.action_1 = action;
  }
  protoOf(SubscribedFlowCollector).emit_t92u1f_k$ = function (value, $completion) {
    return this.collector_1.emit_t92u1f_k$(value, $completion);
  };
  protoOf(SubscribedFlowCollector).onSubscription_q7qr5n_k$ = function ($completion) {
    var tmp = new $onSubscriptionCOROUTINE$11(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function collect(_this__u8e3s4, $completion) {
    return _this__u8e3s4.collect_aksokr_k$(NopCollector_getInstance(), $completion);
  }
  function first(_this__u8e3s4, predicate, $completion) {
    var tmp = new $firstCOROUTINE$12(_this__u8e3s4, predicate, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $emitCOROUTINE$13(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.value_1 = value;
  }
  protoOf($emitCOROUTINE$13).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_0 = this;
            tmp_0.it0__1 = this.value_1;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.$predicate_1(this.it0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_1 = this;
              this._this__u8e3s4__1.$result_1._v = this.it0__1;
              tmp_1.WHEN_RESULT1__1 = false;
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            } else {
              var tmp_2 = this;
              tmp_2.WHEN_RESULT1__1 = true;
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            var ARGUMENT = this.WHEN_RESULT1__1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this._this__u8e3s4__1);
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function _no_name_provided__qut3iv_3($predicate, $result) {
    this.$predicate_1 = $predicate;
    this.$result_1 = $result;
  }
  protoOf(_no_name_provided__qut3iv_3).emit_t92u1f_k$ = function (value, $completion) {
    var tmp = new $emitCOROUTINE$13(this, value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function $firstCOROUTINE$12(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.predicate_1 = predicate;
  }
  protoOf($firstCOROUTINE$12).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.result0__1 = {_v: get_NULL()};
            var tmp_0 = this;
            tmp_0.this1__1 = this._this__u8e3s4__1;
            var tmp_1 = this;
            tmp_1.collector2__1 = new _no_name_provided__qut3iv_3(this.predicate_1, this.result0__1);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this1__1.collect_aksokr_k$(this.collector2__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof AbortFlowException) {
              var e = this.get_exception_x0n6w6_k$();
              checkOwnership(e, this.collector2__1);
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            if (this.result0__1._v === get_NULL())
              throw NoSuchElementException_init_$Create$('Expected at least one element matching the predicate ' + this.predicate_1);
            var tmp_3 = this.result0__1._v;
            return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function _set_elements__x18af4($this, _set____db54di) {
    $this.elements_1 = _set____db54di;
  }
  function _get_elements__k8byyc($this) {
    return $this.elements_1;
  }
  function _set_head__9nromv_0($this, _set____db54di) {
    $this.head_1 = _set____db54di;
  }
  function _get_head__d7jo8b_1($this) {
    return $this.head_1;
  }
  function _set_tail__9uatxj($this, _set____db54di) {
    $this.tail_1 = _set____db54di;
  }
  function _get_tail__de2tiz($this) {
    return $this.tail_1;
  }
  function ensureCapacity_0($this) {
    var currentSize = $this.elements_1.length;
    var newCapacity = currentSize << 1;
    // Inline function 'kotlin.arrayOfNulls' call
    var newElements = fillArrayVal(Array(newCapacity), null);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.elements_1;
    var startIndex = $this.head_1;
    var endIndex = this_0.length;
    arrayCopy(this_0, newElements, 0, startIndex, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.elements_1;
    var destinationOffset = $this.elements_1.length - $this.head_1 | 0;
    var endIndex_0 = $this.head_1;
    arrayCopy(this_1, newElements, destinationOffset, 0, endIndex_0);
    $this.elements_1 = newElements;
    $this.head_1 = 0;
    $this.tail_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.elements_1 = fillArrayVal(Array(16), null);
    this.head_1 = 0;
    this.tail_1 = 0;
  }
  protoOf(ArrayQueue).get_isEmpty_zauvru_k$ = function () {
    return this.head_1 === this.tail_1;
  };
  protoOf(ArrayQueue).addLast_pk466f_k$ = function (element) {
    this.elements_1[this.tail_1] = element;
    this.tail_1 = (this.tail_1 + 1 | 0) & (this.elements_1.length - 1 | 0);
    if (this.tail_1 === this.head_1) {
      ensureCapacity_0(this);
    }
  };
  protoOf(ArrayQueue).removeFirstOrNull_eges3a_k$ = function () {
    if (this.head_1 === this.tail_1)
      return null;
    var element = this.elements_1[this.head_1];
    this.elements_1[this.head_1] = null;
    this.head_1 = (this.head_1 + 1 | 0) & (this.elements_1.length - 1 | 0);
    return !(element == null) ? element : THROW_CCE();
  };
  protoOf(ArrayQueue).clear_j9egeb_k$ = function () {
    this.head_1 = 0;
    this.tail_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.elements_1.length;
    tmp.elements_1 = fillArrayVal(Array(size), null);
  };
  function get_NO_DECISION() {
    _init_properties_Atomic_kt__5uvtv9();
    return NO_DECISION;
  }
  var NO_DECISION;
  function get_RETRY_ATOMIC() {
    _init_properties_Atomic_kt__5uvtv9();
    return RETRY_ATOMIC;
  }
  var RETRY_ATOMIC;
  function OpDescriptor() {
  }
  protoOf(OpDescriptor).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  protoOf(OpDescriptor).isEarlierThan_2p83h1_k$ = function (that) {
    var tmp0_elvis_lhs = this.get_atomicOp_p2pkuj_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var thisOp = tmp;
    var tmp1_elvis_lhs = that.get_atomicOp_p2pkuj_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var thatOp = tmp_0;
    return thisOp.get_opSequence_bttwhh_k$().compareTo_9jj042_k$(thatOp.get_opSequence_bttwhh_k$()) < 0;
  };
  function _get__consensus__nhzvjh($this) {
    return $this._consensus_1;
  }
  function AtomicOp() {
    OpDescriptor.call(this);
    this._consensus_1 = atomic$ref$1(get_NO_DECISION());
  }
  protoOf(AtomicOp).get_consensus_1b3g0e_k$ = function () {
    return this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(AtomicOp).get_isDecided_ofk0qx_k$ = function () {
    return !(this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$() === get_NO_DECISION());
  };
  protoOf(AtomicOp).get_opSequence_bttwhh_k$ = function () {
    return new Long(0, 0);
  };
  protoOf(AtomicOp).get_atomicOp_p2pkuj_k$ = function () {
    return this;
  };
  protoOf(AtomicOp).decide_ydi1rd_k$ = function (decision) {
    // Inline function 'kotlinx.coroutines.assert' call
    var current = this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (!(current === get_NO_DECISION()))
      return current;
    if (this._consensus_1.atomicfu$compareAndSet(get_NO_DECISION(), decision))
      return decision;
    return this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(AtomicOp).perform_8emi3i_k$ = function (affected) {
    var decision = this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (decision === get_NO_DECISION()) {
      decision = this.decide_ydi1rd_k$(this.prepare_226la0_k$((affected == null ? true : !(affected == null)) ? affected : THROW_CCE()));
    }
    this.complete_4av0gr_k$((affected == null ? true : !(affected == null)) ? affected : THROW_CCE(), decision);
    return decision;
  };
  function AtomicDesc() {
  }
  protoOf(AtomicDesc).set_atomicOp_6ozz4y_k$ = function (_set____db54di) {
    this.atomicOp_1 = _set____db54di;
  };
  protoOf(AtomicDesc).get_atomicOp_p2pkuj_k$ = function () {
    var tmp = this.atomicOp_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('atomicOp');
    }
  };
  var properties_initialized_Atomic_kt_vn225v;
  function _init_properties_Atomic_kt__5uvtv9() {
    if (!properties_initialized_Atomic_kt_vn225v) {
      properties_initialized_Atomic_kt_vn225v = true;
      NO_DECISION = new Symbol('NO_DECISION');
      RETRY_ATOMIC = new Symbol('RETRY_ATOMIC');
    }
  }
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function _init_properties_ConcurrentLinkedList_kt__5gcgzy() {
    if (!properties_initialized_ConcurrentLinkedList_kt_kwt434) {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (_this__u8e3s4.dispatcher_1.isDispatchNeeded_ft82v4_k$(_this__u8e3s4.get_context_h02k06_k$())) {
        _this__u8e3s4._state_1 = state;
        _this__u8e3s4.set_resumeMode_yy1myt_k$(get_MODE_CANCELLABLE());
        _this__u8e3s4.dispatcher_1.dispatch_qa3n0o_k$(_this__u8e3s4.get_context_h02k06_k$(), _this__u8e3s4);
        tmp_0 = Unit_getInstance();
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var mode = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
          if (false ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false) {
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
            _this__u8e3s4._state_1 = state;
            _this__u8e3s4.set_resumeMode_yy1myt_k$(mode);
            eventLoop.dispatchUnconfined_o79kaq_k$(_this__u8e3s4);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.incrementUseCount_jadqvy_k$(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.get_context_h02k06_k$().get_y2st91_k$(Key_getInstance_2());
                if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
                  var cause = job.getCancellationException_8i1q6u_k$();
                  _this__u8e3s4.cancelCompletedResult_yo9rw0_k$(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  Companion_getInstance();
                  var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.resumeWith_dtxwbr_k$(tmp$ret$1);
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.continuation_1;
                _this__u8e3s4.countOrElement_1;
                _this__u8e3s4.continuation_1.resumeWith_dtxwbr_k$(result);
              }
              $l$loop: while (eventLoop.processUnconfinedEvent_mypjl6_k$()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.handleFatalException_k305p9_k$(e, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.decrementUseCount_x8i8ca_k$(true);
            }
            tmp_1 = false;
          }
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.resumeWith_dtxwbr_k$(result);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function _get__reusableCancellableContinuation__ic28e($this) {
    return $this._reusableCancellableContinuation_1;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this._reusableCancellableContinuation_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.dispatcher_1 = dispatcher;
    this.continuation_1 = continuation;
    this._state_1 = get_UNDEFINED();
    this.countOrElement_1 = threadContextElements(this.get_context_h02k06_k$());
    this._reusableCancellableContinuation_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).get_dispatcher_usy1bk_k$ = function () {
    return this.dispatcher_1;
  };
  protoOf(DispatchedContinuation).get_continuation_7yron4_k$ = function () {
    return this.continuation_1;
  };
  protoOf(DispatchedContinuation).get_context_h02k06_k$ = function () {
    return this.continuation_1.get_context_h02k06_k$();
  };
  protoOf(DispatchedContinuation).set__state_9ushq8_k$ = function (_set____db54di) {
    this._state_1 = _set____db54di;
  };
  protoOf(DispatchedContinuation).get__state_a6aoij_k$ = function () {
    return this._state_1;
  };
  protoOf(DispatchedContinuation).get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.continuation_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  protoOf(DispatchedContinuation).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  protoOf(DispatchedContinuation).get_countOrElement_ut92s3_k$ = function () {
    return this.countOrElement_1;
  };
  protoOf(DispatchedContinuation).isReusable_hrfetn_k$ = function () {
    return !(this._reusableCancellableContinuation_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null);
  };
  protoOf(DispatchedContinuation).awaitReusability_ia6fh_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      if (!(this_0.get_kotlinx$atomicfu$value_vi2am5_k$() === get_REUSABLE_CLAIMED()))
        return Unit_getInstance();
    }
  };
  protoOf(DispatchedContinuation).release_wu5yyf_k$ = function () {
    this.awaitReusability_ia6fh_k$();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.detachChild_qd9itj_k$();
    }
  };
  protoOf(DispatchedContinuation).claimReusableCancellableContinuation_oatv30_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (state === null) {
        this._reusableCancellableContinuation_1.set_kotlinx$atomicfu$value_508e3y_k$(get_REUSABLE_CLAIMED());
        return null;
      } else {
        if (state instanceof CancellableContinuationImpl) {
          if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(state, get_REUSABLE_CLAIMED())) {
            return state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          }
        } else {
          if (state !== get_REUSABLE_CLAIMED()) {
            if (!(state instanceof Error)) {
              var message = 'Inconsistent state ' + toString_0(state);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).tryReleaseClaimedContinuation_ijjil1_k$ = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (state === get_REUSABLE_CLAIMED()) {
        if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!this._reusableCancellableContinuation_1.atomicfu$compareAndSet(state, null)) {
            // Inline function 'kotlin.require.<anonymous>' call
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).postponeCancellation_ibg312_k$ = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).takeState_olvzuy_k$ = function () {
    var state = this._state_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this._state_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).get_delegate_i94tki_k$ = function () {
    return this;
  };
  protoOf(DispatchedContinuation).resumeWith_dtxwbr_k$ = function (result) {
    var context = this.continuation_1.get_context_h02k06_k$();
    var state = toState_0(result);
    if (this.dispatcher_1.isDispatchNeeded_ft82v4_k$(context)) {
      this._state_1 = state;
      this.set_resumeMode_yy1myt_k$(get_MODE_ATOMIC());
      this.dispatcher_1.dispatch_qa3n0o_k$(context, this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var mode = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
        if (false ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
          this._state_1 = state;
          this.set_resumeMode_yy1myt_k$(mode);
          eventLoop.dispatchUnconfined_o79kaq_k$(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.incrementUseCount_jadqvy_k$(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.get_context_h02k06_k$();
            this.countOrElement_1;
            this.continuation_1.resumeWith_dtxwbr_k$(result);
            $l$loop: while (eventLoop.processUnconfinedEvent_mypjl6_k$()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.handleFatalException_k305p9_k$(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.decrementUseCount_x8i8ca_k$(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).resumeCancellableWith_2mg828_k$ = function (result, onCancellation) {
    var state = toState_0(result, onCancellation);
    if (this.dispatcher_1.isDispatchNeeded_ft82v4_k$(this.get_context_h02k06_k$())) {
      this._state_1 = state;
      this.set_resumeMode_yy1myt_k$(get_MODE_CANCELLABLE());
      this.dispatcher_1.dispatch_qa3n0o_k$(this.get_context_h02k06_k$(), this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var mode = get_MODE_CANCELLABLE();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
        if (false ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
          this._state_1 = state;
          this.set_resumeMode_yy1myt_k$(mode);
          eventLoop.dispatchUnconfined_o79kaq_k$(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.incrementUseCount_jadqvy_k$(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
            var tmp$ret$3;
            $l$block_0: {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
              var job = this.get_context_h02k06_k$().get_y2st91_k$(Key_getInstance_2());
              if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
                var cause = job.getCancellationException_8i1q6u_k$();
                this.cancelCompletedResult_yo9rw0_k$(state, cause);
                // Inline function 'kotlin.coroutines.resumeWithException' call
                // Inline function 'kotlin.Companion.failure' call
                Companion_getInstance();
                var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                this.resumeWith_dtxwbr_k$(tmp$ret$1);
                tmp$ret$3 = true;
                break $l$block_0;
              }
              tmp$ret$3 = false;
            }
            if (!tmp$ret$3) {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
              // Inline function 'kotlinx.coroutines.withContinuationContext' call
              this.continuation_1;
              this.countOrElement_1;
              this.continuation_1.resumeWith_dtxwbr_k$(result);
            }
            $l$loop: while (eventLoop.processUnconfinedEvent_mypjl6_k$()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.handleFatalException_k305p9_k$(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.decrementUseCount_x8i8ca_k$(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).cancelCompletedResult_yo9rw0_k$ = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.get_onCancellation_no7t6d_k$()(cause);
    }
  };
  protoOf(DispatchedContinuation).resumeCancelled_vc1wm3_k$ = function (state) {
    var job = this.get_context_h02k06_k$().get_y2st91_k$(Key_getInstance_2());
    if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
      var cause = job.getCancellationException_8i1q6u_k$();
      this.cancelCompletedResult_yo9rw0_k$(state, cause);
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
      this.resumeWith_dtxwbr_k$(tmp$ret$0);
      return true;
    }
    return false;
  };
  protoOf(DispatchedContinuation).resumeUndispatchedWith_7f8tix_k$ = function (result) {
    // Inline function 'kotlinx.coroutines.withContinuationContext' call
    this.continuation_1;
    this.countOrElement_1;
    this.continuation_1.resumeWith_dtxwbr_k$(result);
  };
  protoOf(DispatchedContinuation).dispatchYield_x4jq2j_k$ = function (context, value) {
    this._state_1 = value;
    this.set_resumeMode_yy1myt_k$(get_MODE_CANCELLABLE());
    this.dispatcher_1.dispatchYield_t7bwip_k$(context, this);
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.dispatcher_1 + ', ' + toDebugString(this.continuation_1) + ']';
  };
  function executeUnconfined(_this__u8e3s4, contState, mode, doYield, block) {
    doYield = doYield === VOID ? false : doYield;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    // Inline function 'kotlinx.coroutines.assert' call
    var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
    if (doYield ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false)
      return false;
    var tmp;
    if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
      _this__u8e3s4._state_1 = contState;
      _this__u8e3s4.set_resumeMode_yy1myt_k$(mode);
      eventLoop.dispatchUnconfined_o79kaq_k$(_this__u8e3s4);
      tmp = true;
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.incrementUseCount_jadqvy_k$(true);
      try {
        block();
        $l$loop: while (eventLoop.processUnconfinedEvent_mypjl6_k$()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.handleFatalException_k305p9_k$(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.decrementUseCount_x8i8ca_k$(true);
      }
      tmp = false;
    }
    return tmp;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.resumeMode_1 = resumeMode;
  }
  protoOf(DispatchedTask).set_resumeMode_yy1myt_k$ = function (_set____db54di) {
    this.resumeMode_1 = _set____db54di;
  };
  protoOf(DispatchedTask).get_resumeMode_te1i4n_k$ = function () {
    return this.resumeMode_1;
  };
  protoOf(DispatchedTask).cancelCompletedResult_yo9rw0_k$ = function (takenState, cause) {
  };
  protoOf(DispatchedTask).getSuccessfulResult_t876z0_k$ = function (state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).getExceptionalResult_bnge6_k$ = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_cause_iplhs0_k$();
  };
  protoOf(DispatchedTask).run_mvkpxh_k$ = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_getInstance();
    var fatalException = null;
    try {
      var tmp = this.get_delegate_i94tki_k$();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.get_continuation_7yron4_k$();
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.get_countOrElement_ut92s3_k$();
      var context = continuation.get_context_h02k06_k$();
      var state = this.takeState_olvzuy_k$();
      var exception = this.getExceptionalResult_bnge6_k$(state);
      var job = (exception == null ? get_isCancellableMode(this.resumeMode_1) : false) ? context.get_y2st91_k$(Key_getInstance_2()) : null;
      var tmp_0;
      if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
        var cause = job.getCancellationException_8i1q6u_k$();
        this.cancelCompletedResult_yo9rw0_k$(state, cause);
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.resumeWith_dtxwbr_k$(tmp$ret$0);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp_1;
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.resumeWith_dtxwbr_k$(tmp$ret$1);
          tmp_1 = Unit_getInstance();
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          var value = this.getSuccessfulResult_t876z0_k$(state);
          // Inline function 'kotlin.Companion.success' call
          Companion_getInstance();
          var tmp$ret$3 = _Result___init__impl__xyqfz8(value);
          continuation.resumeWith_dtxwbr_k$(tmp$ret$3);
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        // Inline function 'kotlinx.coroutines.DispatchedTask.run.<anonymous>' call
        // Inline function 'kotlinx.coroutines.afterTask' call
        tmp_2 = _Result___init__impl__xyqfz8(Unit_getInstance());
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var e_0 = $p;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          tmp_3 = _Result___init__impl__xyqfz8(createFailure(e_0));
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      var result = tmp_2;
      this.handleFatalException_k305p9_k$(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  protoOf(DispatchedTask).handleFatalException_k305p9_k$ = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var cause = exception == null ? finallyException : exception;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.get_delegate_i94tki_k$().get_context_h02k06_k$(), reason);
  };
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_MODE_CANCELLABLE_REUSABLE() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.get_delegate_i94tki_k$();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.resumeMode_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.get_dispatcher_usy1bk_k$();
      var context = delegate.get_context_h02k06_k$();
      if (dispatcher.isDispatchNeeded_ft82v4_k$(context)) {
        dispatcher.dispatch_qa3n0o_k$(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_UNDISPATCHED() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function runUnconfinedEventLoop(_this__u8e3s4, eventLoop, block) {
    eventLoop.incrementUseCount_jadqvy_k$(true);
    try {
      block();
      $l$loop: while (eventLoop.processUnconfinedEvent_mypjl6_k$()) {
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        _this__u8e3s4.handleFatalException_k305p9_k$(e, null);
      } else {
        throw $p;
      }
    }
    finally {
      eventLoop.decrementUseCount_x8i8ca_k$(true);
    }
  }
  function resumeWithStackTrace(_this__u8e3s4, exception) {
    // Inline function 'kotlin.Companion.failure' call
    Companion_getInstance();
    var exception_0 = recoverStackTrace(exception, _this__u8e3s4);
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception_0));
    _this__u8e3s4.resumeWith_dtxwbr_k$(tmp$ret$0);
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
    if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
      eventLoop.dispatchUnconfined_o79kaq_k$(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.incrementUseCount_jadqvy_k$(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.get_delegate_i94tki_k$(), true);
        $l$loop: while (eventLoop.processUnconfinedEvent_mypjl6_k$()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.handleFatalException_k305p9_k$(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.decrementUseCount_x8i8ca_k$(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.takeState_olvzuy_k$();
    var exception = _this__u8e3s4.getExceptionalResult_bnge6_k$(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var value = _this__u8e3s4.getSuccessfulResult_t876z0_k$(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.get_continuation_7yron4_k$();
      this_0.get_countOrElement_ut92s3_k$();
      this_0.get_continuation_7yron4_k$().resumeWith_dtxwbr_k$(result);
    } else {
      delegate.resumeWith_dtxwbr_k$(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    holder = holder === VOID ? null : holder;
    return holder;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).add_utx5q5_k$(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.add_utx5q5_k$((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
        list.add_utx5q5_k$(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function InlineList__forEachReversed_impl_jituug($this, action) {
    var tmp0_subject = _get_holder__f6h5pd($this);
    if (tmp0_subject == null)
      return Unit_getInstance();
    else {
      if (!(tmp0_subject instanceof ArrayList)) {
        var tmp = _get_holder__f6h5pd($this);
        action((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE());
      } else {
        var tmp_0 = _get_holder__f6h5pd($this);
        var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
        var inductionVariable = list.get_size_woubt6_k$() - 1 | 0;
        if (0 <= inductionVariable)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            action(list.get_c1px32_k$(i));
          }
           while (0 <= inductionVariable);
      }
    }
  }
  function InlineList__toString_impl_1aej86($this) {
    return 'InlineList(holder=' + toString_0($this) + ')';
  }
  function InlineList__hashCode_impl_n1kg11($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function InlineList__equals_impl_wwe0i1($this, other) {
    if (!(other instanceof InlineList))
      return false;
    var tmp0_other_with_cast = other instanceof InlineList ? other.holder_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function InlineList(holder) {
    this.holder_1 = holder;
  }
  protoOf(InlineList).toString = function () {
    return InlineList__toString_impl_1aej86(this.holder_1);
  };
  protoOf(InlineList).hashCode = function () {
    return InlineList__hashCode_impl_n1kg11(this.holder_1);
  };
  protoOf(InlineList).equals = function (other) {
    return InlineList__equals_impl_wwe0i1(this.holder_1, other);
  };
  function checkParallelism(_this__u8e3s4) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!(_this__u8e3s4 >= 1)) {
      // Inline function 'kotlinx.coroutines.internal.checkParallelism.<anonymous>' call
      var message = 'Expected positive parallelism level, but got ' + _this__u8e3s4;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function _get_dispatcher__dketks($this) {
    return $this.dispatcher_1;
  }
  function _get_parallelism__25q2h7($this) {
    return $this.parallelism_1;
  }
  function _set_runningWorkers__ctf6jl($this, _set____db54di) {
    $this.runningWorkers_1 = _set____db54di;
  }
  function _get_runningWorkers__wolfe3($this) {
    return $this.runningWorkers_1;
  }
  function _get_queue__c6g84g($this) {
    return $this.queue_1;
  }
  function _get_workerAllocationLock__l5417m($this) {
    return $this.workerAllocationLock_1;
  }
  function dispatchInternal($this, block, dispatch) {
    if (addAndTryDispatching($this, block))
      return Unit_getInstance();
    if (!tryAllocateWorker($this))
      return Unit_getInstance();
    dispatch();
  }
  function tryAllocateWorker($this) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    $this.workerAllocationLock_1;
    if ($this.runningWorkers_1 >= $this.parallelism_1)
      return false;
    $this.runningWorkers_1 = $this.runningWorkers_1 + 1 | 0;
    return true;
  }
  function addAndTryDispatching($this, block) {
    $this.queue_1.addLast_3381om_k$(block);
    return $this.runningWorkers_1 >= $this.parallelism_1;
  }
  function LimitedDispatcher(dispatcher, parallelism) {
    CoroutineDispatcher.call(this);
    this.dispatcher_1 = dispatcher;
    this.parallelism_1 = parallelism;
    var tmp = this;
    var tmp0_elvis_lhs = isInterface(dispatcher, Delay) ? dispatcher : null;
    tmp.$$delegate_0__1 = tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
    this.runningWorkers_1 = 0;
    this.queue_1 = new LockFreeTaskQueue(false);
    this.workerAllocationLock_1 = new Object();
  }
  protoOf(LimitedDispatcher).delay_xigjxo_k$ = function (time, $completion) {
    return this.$$delegate_0__1.delay_xigjxo_k$(time, $completion);
  };
  protoOf(LimitedDispatcher).invokeOnTimeout_x4e3ys_k$ = function (timeMillis, block, context) {
    return this.$$delegate_0__1.invokeOnTimeout_x4e3ys_k$(timeMillis, block, context);
  };
  protoOf(LimitedDispatcher).scheduleResumeAfterDelay_ohc91i_k$ = function (timeMillis, continuation) {
    this.$$delegate_0__1.scheduleResumeAfterDelay_ohc91i_k$(timeMillis, continuation);
  };
  protoOf(LimitedDispatcher).limitedParallelism_b7nunq_k$ = function (parallelism) {
    checkParallelism(parallelism);
    if (parallelism >= this.parallelism_1)
      return this;
    return protoOf(CoroutineDispatcher).limitedParallelism_b7nunq_k$.call(this, parallelism);
  };
  protoOf(LimitedDispatcher).run_mvkpxh_k$ = function () {
    var fairnessCounter = 0;
    $l$loop: while (true) {
      var task = this.queue_1.removeFirstOrNull_eges3a_k$();
      if (!(task == null)) {
        try {
          task.run_mvkpxh_k$();
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            handleCoroutineException(EmptyCoroutineContext_getInstance(), e);
          } else {
            throw $p;
          }
        }
        var tmp;
        fairnessCounter = fairnessCounter + 1 | 0;
        if (fairnessCounter >= 16) {
          tmp = this.dispatcher_1.isDispatchNeeded_ft82v4_k$(this);
        } else {
          tmp = false;
        }
        if (tmp) {
          this.dispatcher_1.dispatch_qa3n0o_k$(this, this);
          return Unit_getInstance();
        }
        continue $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      this.workerAllocationLock_1;
      this.runningWorkers_1 = this.runningWorkers_1 - 1 | 0;
      if (this.queue_1.get_size_woubt6_k$() === 0)
        return Unit_getInstance();
      this.runningWorkers_1 = this.runningWorkers_1 + 1 | 0;
      fairnessCounter = 0;
    }
  };
  protoOf(LimitedDispatcher).dispatch_qa3n0o_k$ = function (context, block) {
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatchInternal' call
      if (addAndTryDispatching(this, block)) {
        break $l$block_0;
      }
      if (!tryAllocateWorker(this)) {
        break $l$block_0;
      }
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatch.<anonymous>' call
      this.dispatcher_1.dispatch_qa3n0o_k$(this, this);
    }
  };
  protoOf(LimitedDispatcher).dispatchYield_t7bwip_k$ = function (context, block) {
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatchInternal' call
      if (addAndTryDispatching(this, block)) {
        break $l$block_0;
      }
      if (!tryAllocateWorker(this)) {
        break $l$block_0;
      }
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatchYield.<anonymous>' call
      this.dispatcher_1.dispatchYield_t7bwip_k$(this, this);
    }
  };
  function get_REMOVE_PREPARED() {
    _init_properties_LockFreeLinkedList_common_kt__j1bptz();
    return REMOVE_PREPARED;
  }
  var REMOVE_PREPARED;
  var properties_initialized_LockFreeLinkedList_common_kt_b0cmf9;
  function _init_properties_LockFreeLinkedList_common_kt__j1bptz() {
    if (!properties_initialized_LockFreeLinkedList_common_kt_b0cmf9) {
      properties_initialized_LockFreeLinkedList_common_kt_b0cmf9 = true;
      REMOVE_PREPARED = new Symbol('REMOVE_PREPARED');
    }
  }
  function _get__cur__d2ko2y($this) {
    return $this._cur_1;
  }
  function LockFreeTaskQueue(singleConsumer) {
    this._cur_1 = atomic$ref$1(new LockFreeTaskQueueCore(8, singleConsumer));
  }
  protoOf(LockFreeTaskQueue).get_isEmpty_zauvru_k$ = function () {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().get_isEmpty_zauvru_k$();
  };
  protoOf(LockFreeTaskQueue).get_size_woubt6_k$ = function () {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().get_size_woubt6_k$();
  };
  protoOf(LockFreeTaskQueue).close_yn9xrc_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._cur_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueue.close.<anonymous>' call
      var cur = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (cur.close_1keygo_k$())
        return Unit_getInstance();
      this._cur_1.atomicfu$compareAndSet(cur, cur.next_20eer_k$());
    }
  };
  protoOf(LockFreeTaskQueue).addLast_3381om_k$ = function (element) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._cur_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueue.addLast.<anonymous>' call
      var cur = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      switch (cur.addLast_3381om_k$(element)) {
        case 0:
          return true;
        case 2:
          return false;
        case 1:
          this._cur_1.atomicfu$compareAndSet(cur, cur.next_20eer_k$());
          break;
      }
    }
  };
  protoOf(LockFreeTaskQueue).removeFirstOrNull_eges3a_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._cur_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueue.removeFirstOrNull.<anonymous>' call
      var cur = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      var result = cur.removeFirstOrNull_eges3a_k$();
      if (!(result === Companion_getInstance_2().REMOVE_FROZEN_1)) {
        return (result == null ? true : !(result == null)) ? result : THROW_CCE();
      }
      this._cur_1.atomicfu$compareAndSet(cur, cur.next_20eer_k$());
    }
  };
  protoOf(LockFreeTaskQueue).map_pbuh9c_k$ = function (transform) {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().map_pbuh9c_k$(transform);
  };
  protoOf(LockFreeTaskQueue).isClosed_baxhhm_k$ = function () {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().isClosed_baxhhm_k$();
  };
  function _get_capacity__a9k9f3_0($this) {
    return $this.capacity_1;
  }
  function _get_singleConsumer__485sb7($this) {
    return $this.singleConsumer_1;
  }
  function _get_mask__da8grj($this) {
    return $this.mask_1;
  }
  function _get__next__kt3wsh($this) {
    return $this._next_1;
  }
  function _get__state__37adl3_3($this) {
    return $this._state_1;
  }
  function _get_array__jslnqg($this) {
    return $this.array_1;
  }
  function fillPlaceholder($this, index, element) {
    var old = $this.array_1.atomicfu$get(index & $this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
    var tmp;
    if (old instanceof Placeholder) {
      tmp = old.index_1 === index;
    } else {
      tmp = false;
    }
    if (tmp) {
      $this.array_1.atomicfu$get(index & $this.mask_1).set_kotlinx$atomicfu$value_508e3y_k$(element);
      return $this;
    }
    return null;
  }
  function removeSlowPath($this, oldHead, newHead) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.removeSlowPath.<anonymous>' call
      var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
      Companion_getInstance_2();
      var head = state.and_4spn93_k$(new Long(1073741823, 0)).shr_9fl3wl_k$(0).toInt_1tsl84_k$();
      var tail = state.and_4spn93_k$(new Long(-1073741824, 268435455)).shr_9fl3wl_k$(30).toInt_1tsl84_k$();
      // Inline function 'kotlinx.coroutines.assert' call
      if (!state.and_4spn93_k$(new Long(0, 268435456)).equals(new Long(0, 0))) {
        return $this.next_20eer_k$();
      }
      var tmp;
      if ($this._state_1.atomicfu$compareAndSet(state, Companion_getInstance_2().updateHead_ucn5bz_k$(state, newHead))) {
        $this.array_1.atomicfu$get(head & $this.mask_1).set_kotlinx$atomicfu$value_508e3y_k$(null);
        return null;
      }
    }
  }
  function markFrozen($this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.updateAndGet' call
      var this_0 = $this._state_1;
      while (true) {
        var cur = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.markFrozen.<anonymous>' call
        if (!cur.and_4spn93_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
          return cur;
        var upd = cur.or_v7fvkl_k$(new Long(0, 268435456));
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = upd;
          break $l$block;
        }
      }
    }
    return tmp$ret$1;
  }
  function allocateOrGetNextCopy($this, state) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this._next_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.allocateOrGetNextCopy.<anonymous>' call
      var next = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!(next == null))
        return next;
      $this._next_1.atomicfu$compareAndSet(null, allocateNextCopy($this, state));
    }
  }
  function allocateNextCopy($this, state) {
    var next = new LockFreeTaskQueueCore(imul($this.capacity_1, 2), $this.singleConsumer_1);
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    Companion_getInstance_2();
    var head = state.and_4spn93_k$(new Long(1073741823, 0)).shr_9fl3wl_k$(0).toInt_1tsl84_k$();
    var tail = state.and_4spn93_k$(new Long(-1073741824, 268435455)).shr_9fl3wl_k$(30).toInt_1tsl84_k$();
    var index = head;
    while (!((index & $this.mask_1) === (tail & $this.mask_1))) {
      var tmp0_elvis_lhs = $this.array_1.atomicfu$get(index & $this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
      var value = tmp0_elvis_lhs == null ? new Placeholder(index) : tmp0_elvis_lhs;
      next.array_1.atomicfu$get(index & next.mask_1).set_kotlinx$atomicfu$value_508e3y_k$(value);
      index = index + 1 | 0;
    }
    next._state_1.set_kotlinx$atomicfu$value_22wj1v_k$(Companion_getInstance_2().wo_pxb82u_k$(state, new Long(0, 268435456)));
    return next;
  }
  function Placeholder(index) {
    this.index_1 = index;
  }
  protoOf(Placeholder).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.INITIAL_CAPACITY_1 = 8;
    this.CAPACITY_BITS_1 = 30;
    this.MAX_CAPACITY_MASK_1 = 1073741823;
    this.HEAD_SHIFT_1 = 0;
    this.HEAD_MASK_1 = new Long(1073741823, 0);
    this.TAIL_SHIFT_1 = 30;
    this.TAIL_MASK_1 = new Long(-1073741824, 268435455);
    this.FROZEN_SHIFT_1 = 60;
    this.FROZEN_MASK_1 = new Long(0, 268435456);
    this.CLOSED_SHIFT_1 = 61;
    this.CLOSED_MASK_1 = new Long(0, 536870912);
    this.MIN_ADD_SPIN_CAPACITY_1 = 1024;
    this.REMOVE_FROZEN_1 = new Symbol('REMOVE_FROZEN');
    this.ADD_SUCCESS_1 = 0;
    this.ADD_FROZEN_1 = 1;
    this.ADD_CLOSED_1 = 2;
  }
  protoOf(Companion_0).get_INITIAL_CAPACITY_tvo5ku_k$ = function () {
    return this.INITIAL_CAPACITY_1;
  };
  protoOf(Companion_0).get_CAPACITY_BITS_m7bade_k$ = function () {
    return this.CAPACITY_BITS_1;
  };
  protoOf(Companion_0).get_MAX_CAPACITY_MASK_bnmlt9_k$ = function () {
    return this.MAX_CAPACITY_MASK_1;
  };
  protoOf(Companion_0).get_HEAD_SHIFT_ww01xo_k$ = function () {
    return this.HEAD_SHIFT_1;
  };
  protoOf(Companion_0).get_HEAD_MASK_jkay7y_k$ = function () {
    return this.HEAD_MASK_1;
  };
  protoOf(Companion_0).get_TAIL_SHIFT_z9ya0s_k$ = function () {
    return this.TAIL_SHIFT_1;
  };
  protoOf(Companion_0).get_TAIL_MASK_h71l4e_k$ = function () {
    return this.TAIL_MASK_1;
  };
  protoOf(Companion_0).get_FROZEN_SHIFT_9ve6oc_k$ = function () {
    return this.FROZEN_SHIFT_1;
  };
  protoOf(Companion_0).get_FROZEN_MASK_gcrlj6_k$ = function () {
    return this.FROZEN_MASK_1;
  };
  protoOf(Companion_0).get_CLOSED_SHIFT_v5gopk_k$ = function () {
    return this.CLOSED_SHIFT_1;
  };
  protoOf(Companion_0).get_CLOSED_MASK_agddhm_k$ = function () {
    return this.CLOSED_MASK_1;
  };
  protoOf(Companion_0).get_MIN_ADD_SPIN_CAPACITY_z2m7z7_k$ = function () {
    return this.MIN_ADD_SPIN_CAPACITY_1;
  };
  protoOf(Companion_0).get_REMOVE_FROZEN_w56qum_k$ = function () {
    return this.REMOVE_FROZEN_1;
  };
  protoOf(Companion_0).get_ADD_SUCCESS_vnro04_k$ = function () {
    return this.ADD_SUCCESS_1;
  };
  protoOf(Companion_0).get_ADD_FROZEN_bsr1ax_k$ = function () {
    return this.ADD_FROZEN_1;
  };
  protoOf(Companion_0).get_ADD_CLOSED_db6t8t_k$ = function () {
    return this.ADD_CLOSED_1;
  };
  protoOf(Companion_0).wo_pxb82u_k$ = function (_this__u8e3s4, other) {
    return _this__u8e3s4.and_4spn93_k$(other.inv_28kx_k$());
  };
  protoOf(Companion_0).updateHead_ucn5bz_k$ = function (_this__u8e3s4, newHead) {
    return this.wo_pxb82u_k$(_this__u8e3s4, new Long(1073741823, 0)).or_v7fvkl_k$(toLong(newHead).shl_bg8if3_k$(0));
  };
  protoOf(Companion_0).updateTail_keq27l_k$ = function (_this__u8e3s4, newTail) {
    return this.wo_pxb82u_k$(_this__u8e3s4, new Long(-1073741824, 268435455)).or_v7fvkl_k$(toLong(newTail).shl_bg8if3_k$(30));
  };
  protoOf(Companion_0).withState_mvgy67_k$ = function (_this__u8e3s4, block) {
    var head = _this__u8e3s4.and_4spn93_k$(new Long(1073741823, 0)).shr_9fl3wl_k$(0).toInt_1tsl84_k$();
    var tail = _this__u8e3s4.and_4spn93_k$(new Long(-1073741824, 268435455)).shr_9fl3wl_k$(30).toInt_1tsl84_k$();
    return block(head, tail);
  };
  protoOf(Companion_0).addFailReason_vnyta5_k$ = function (_this__u8e3s4) {
    return !_this__u8e3s4.and_4spn93_k$(new Long(0, 536870912)).equals(new Long(0, 0)) ? 2 : 1;
  };
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function LockFreeTaskQueueCore(capacity, singleConsumer) {
    Companion_getInstance_2();
    this.capacity_1 = capacity;
    this.singleConsumer_1 = singleConsumer;
    this.mask_1 = this.capacity_1 - 1 | 0;
    this._next_1 = atomic$ref$1(null);
    this._state_1 = atomic$long$1(new Long(0, 0));
    this.array_1 = atomicfu$AtomicRefArray$ofNulls(this.capacity_1);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.mask_1 <= 1073741823)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((this.capacity_1 & this.mask_1) === 0)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message_0 = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  }
  protoOf(LockFreeTaskQueueCore).get_isEmpty_zauvru_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    Companion_getInstance_2();
    var this_0 = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var head = this_0.and_4spn93_k$(new Long(1073741823, 0)).shr_9fl3wl_k$(0).toInt_1tsl84_k$();
    var tail = this_0.and_4spn93_k$(new Long(-1073741824, 268435455)).shr_9fl3wl_k$(30).toInt_1tsl84_k$();
    // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.<get-isEmpty>.<anonymous>' call
    return head === tail;
  };
  protoOf(LockFreeTaskQueueCore).get_size_woubt6_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    Companion_getInstance_2();
    var this_0 = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var head = this_0.and_4spn93_k$(new Long(1073741823, 0)).shr_9fl3wl_k$(0).toInt_1tsl84_k$();
    var tail = this_0.and_4spn93_k$(new Long(-1073741824, 268435455)).shr_9fl3wl_k$(30).toInt_1tsl84_k$();
    // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.<get-size>.<anonymous>' call
    return (tail - head | 0) & 1073741823;
  };
  protoOf(LockFreeTaskQueueCore).close_1keygo_k$ = function () {
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = this._state_1;
      while (true) {
        var cur = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.close.<anonymous>' call
        if (!cur.and_4spn93_k$(new Long(0, 536870912)).equals(new Long(0, 0)))
          return true;
        if (!cur.and_4spn93_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
          return false;
        var upd = cur.or_v7fvkl_k$(new Long(0, 536870912));
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    return true;
  };
  protoOf(LockFreeTaskQueueCore).addLast_3381om_k$ = function (element) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._state_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.addLast.<anonymous>' call
        var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
        if (!state.and_4spn93_k$(new Long(0, 805306368)).equals(new Long(0, 0)))
          return Companion_getInstance_2().addFailReason_vnyta5_k$(state);
        // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
        Companion_getInstance_2();
        var head = state.and_4spn93_k$(new Long(1073741823, 0)).shr_9fl3wl_k$(0).toInt_1tsl84_k$();
        var tail = state.and_4spn93_k$(new Long(-1073741824, 268435455)).shr_9fl3wl_k$(30).toInt_1tsl84_k$();
        var mask = this.mask_1;
        if (((tail + 2 | 0) & mask) === (head & mask))
          return 1;
        if (!this.singleConsumer_1 ? !(this.array_1.atomicfu$get(tail & mask).get_kotlinx$atomicfu$value_vi2am5_k$() == null) : false) {
          if (this.capacity_1 < 1024 ? true : ((tail - head | 0) & 1073741823) > this.capacity_1 >> 1) {
            return 1;
          }
          break $l$block;
        }
        var newTail = (tail + 1 | 0) & 1073741823;
        var tmp;
        if (this._state_1.atomicfu$compareAndSet(state, Companion_getInstance_2().updateTail_keq27l_k$(state, newTail))) {
          this.array_1.atomicfu$get(tail & mask).set_kotlinx$atomicfu$value_508e3y_k$(element);
          var cur = this;
          $l$loop_0: while (!cur._state_1.get_kotlinx$atomicfu$value_vi2am5_k$().and_4spn93_k$(new Long(0, 268435456)).equals(new Long(0, 0))) {
            var tmp0_elvis_lhs = fillPlaceholder(cur.next_20eer_k$(), tail, element);
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              break $l$loop_0;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }
            cur = tmp_0;
          }
          return 0;
        }
      }
    }
  };
  protoOf(LockFreeTaskQueueCore).removeFirstOrNull_eges3a_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._state_1;
    while (true) {
      $l$block_0: {
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.removeFirstOrNull.<anonymous>' call
        var state = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
        if (!state.and_4spn93_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
          return Companion_getInstance_2().REMOVE_FROZEN_1;
        // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
        Companion_getInstance_2();
        var head = state.and_4spn93_k$(new Long(1073741823, 0)).shr_9fl3wl_k$(0).toInt_1tsl84_k$();
        var tail = state.and_4spn93_k$(new Long(-1073741824, 268435455)).shr_9fl3wl_k$(30).toInt_1tsl84_k$();
        if ((tail & this.mask_1) === (head & this.mask_1))
          return null;
        var element = this.array_1.atomicfu$get(head & this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
        if (element == null) {
          if (this.singleConsumer_1)
            return null;
          break $l$block_0;
        }
        if (element instanceof Placeholder)
          return null;
        var newHead = (head + 1 | 0) & 1073741823;
        if (this._state_1.atomicfu$compareAndSet(state, Companion_getInstance_2().updateHead_ucn5bz_k$(state, newHead))) {
          this.array_1.atomicfu$get(head & this.mask_1).set_kotlinx$atomicfu$value_508e3y_k$(null);
          return element;
        }
        if (!this.singleConsumer_1) {
          break $l$block_0;
        }
        var cur = this;
        while (true) {
          var tmp0_elvis_lhs = removeSlowPath(cur, head, newHead);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return element;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          cur = tmp;
        }
      }
    }
  };
  protoOf(LockFreeTaskQueueCore).next_20eer_k$ = function () {
    return allocateOrGetNextCopy(this, markFrozen(this));
  };
  protoOf(LockFreeTaskQueueCore).map_pbuh9c_k$ = function (transform) {
    var res = ArrayList_init_$Create$(this.capacity_1);
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    Companion_getInstance_2();
    var this_0 = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var head = this_0.and_4spn93_k$(new Long(1073741823, 0)).shr_9fl3wl_k$(0).toInt_1tsl84_k$();
    var tail = this_0.and_4spn93_k$(new Long(-1073741824, 268435455)).shr_9fl3wl_k$(30).toInt_1tsl84_k$();
    var index = head;
    while (!((index & this.mask_1) === (tail & this.mask_1))) {
      var element = this.array_1.atomicfu$get(index & this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp;
      if (!(element == null)) {
        tmp = !(element instanceof Placeholder);
      } else {
        tmp = false;
      }
      if (tmp) {
        res.add_utx5q5_k$(transform(!(element == null) ? element : THROW_CCE()));
      }
      index = index + 1 | 0;
    }
    return res;
  };
  protoOf(LockFreeTaskQueueCore).isClosed_baxhhm_k$ = function () {
    return !this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$().and_4spn93_k$(new Long(0, 536870912)).equals(new Long(0, 0));
  };
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    undeliveredElementException = undeliveredElementException === VOID ? null : undeliveredElementException;
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        if (!(undeliveredElementException == null) ? !(undeliveredElementException.cause === ex) : false) {
          // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + element, ex);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      handleCoroutineException(context, tmp0_safe_receiver);
    }
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_getInstance();
    };
  }
  function ContextScope(context) {
    this.coroutineContext_1 = context;
  }
  protoOf(ContextScope).get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.coroutineContext_1 + ')';
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.uCont_1 = uCont;
  }
  protoOf(ScopeCoroutine).get_uCont_iyyiam_k$ = function () {
    return this.uCont_1;
  };
  protoOf(ScopeCoroutine).get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.uCont_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  protoOf(ScopeCoroutine).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  protoOf(ScopeCoroutine).get_isScopedCoroutine_rwmmff_k$ = function () {
    return true;
  };
  protoOf(ScopeCoroutine).get_parent_hy4reb_k$ = function () {
    var tmp0_safe_receiver = this.get_parentHandle_gmoqez_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_parent_hy4reb_k$();
  };
  protoOf(ScopeCoroutine).afterCompletion_2p0irt_k$ = function (state) {
    resumeCancellableWith(intercepted(this.uCont_1), recoverResult(state, this.uCont_1));
  };
  protoOf(ScopeCoroutine).afterResume_ugh2hm_k$ = function (state) {
    this.uCont_1.resumeWith_dtxwbr_k$(recoverResult(state, this.uCont_1));
  };
  function Symbol(symbol) {
    this.symbol_1 = symbol;
  }
  protoOf(Symbol).get_symbol_jqdfoh_k$ = function () {
    return this.symbol_1;
  };
  protoOf(Symbol).toString = function () {
    return '<' + this.symbol_1 + '>';
  };
  protoOf(Symbol).unbox_4pmzbj_k$ = function (value) {
    var tmp;
    if (value === this) {
      tmp = (null == null ? true : !(null == null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : !(value == null)) ? value : THROW_CCE();
    }
    return tmp;
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxValue;
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).toInt_1tsl84_k$();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    maxValue = maxValue === VOID ? Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$() : maxValue;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.compareTo_9jj042_k$(parsed) <= 0 ? parsed.compareTo_9jj042_k$(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var message_0 = "System property '" + propertyName + "' should be in range " + minValue.toString() + '..' + maxValue.toString() + ", but is '" + parsed.toString() + "'";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(completion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, completion) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted_0(_this__u8e3s4, completion));
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(completion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function runSafely(completion, block) {
    try {
      block();
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(completion, e);
      } else {
        throw $p;
      }
    }
  }
  function dispatcherFailure(completion, e) {
    // Inline function 'kotlin.Companion.failure' call
    Companion_getInstance();
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.resumeWith_dtxwbr_k$(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_1(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(fatalCompletion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$paksz7(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startCoroutineUnintercepted(_this__u8e3s4, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUnintercepted.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = _this__u8e3s4;
        tmp = typeof a === 'function' ? a(actualCompletion) : _this__u8e3s4.invoke_ib42db_k$(actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.resumeWith_dtxwbr_k$(tmp$ret$4);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        var tmp$ret$7 = _Result___init__impl__xyqfz8(value_0);
        actualCompletion.resumeWith_dtxwbr_k$(tmp$ret$7);
      }
    }
  }
  function startCoroutineUnintercepted_0(_this__u8e3s4, receiver, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUnintercepted.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = _this__u8e3s4;
        tmp = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.invoke_qns8j1_k$(receiver, actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.resumeWith_dtxwbr_k$(tmp$ret$4);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        var tmp$ret$7 = _Result___init__impl__xyqfz8(value_0);
        actualCompletion.resumeWith_dtxwbr_k$(tmp$ret$7);
      }
    }
  }
  function startDirect(completion, block) {
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    var actualCompletion = completion;
    var tmp;
    try {
      tmp = block(actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(e));
        actualCompletion.resumeWith_dtxwbr_k$(tmp$ret$1);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      // Inline function 'kotlin.coroutines.resume' call
      var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp$ret$3 = _Result___init__impl__xyqfz8(value_0);
      actualCompletion.resumeWith_dtxwbr_k$(tmp$ret$3);
    }
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = block;
        tmp = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.invoke_qns8j1_k$(receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.makeCompletingOnce_b13xy2_k$(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        state.get_cause_iplhs0_k$();
        if (true) {
          throw recoverStackTrace(state.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function undispatchedResult(_this__u8e3s4, shouldThrow, startBlock) {
    var tmp;
    try {
      tmp = startBlock();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        tmp_0 = new CompletedExceptionally(e);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var result = tmp;
    if (result === get_COROUTINE_SUSPENDED())
      return get_COROUTINE_SUSPENDED();
    var state = _this__u8e3s4.makeCompletingOnce_b13xy2_k$(result);
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return get_COROUTINE_SUSPENDED();
    var tmp_1;
    if (state instanceof CompletedExceptionally) {
      var tmp_2;
      if (shouldThrow(state.get_cause_iplhs0_k$())) {
        throw recoverStackTrace(state.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
      } else {
        if (result instanceof CompletedExceptionally) {
          throw recoverStackTrace(result.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
        } else {
          tmp_2 = result;
        }
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = unboxState(state);
    }
    return tmp_1;
  }
  function startCoroutineUndispatched(_this__u8e3s4, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        completion.get_context_h02k06_k$();
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = _this__u8e3s4;
        tmp = typeof a === 'function' ? a(actualCompletion) : _this__u8e3s4.invoke_ib42db_k$(actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          var tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.resumeWith_dtxwbr_k$(tmp$ret$6);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        var tmp$ret$9 = _Result___init__impl__xyqfz8(value_0);
        actualCompletion.resumeWith_dtxwbr_k$(tmp$ret$9);
      }
    }
  }
  function startCoroutineUndispatched_0(_this__u8e3s4, receiver, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        completion.get_context_h02k06_k$();
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = _this__u8e3s4;
        tmp = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.invoke_qns8j1_k$(receiver, actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          var tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.resumeWith_dtxwbr_k$(tmp$ret$6);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        var tmp$ret$9 = _Result___init__impl__xyqfz8(value_0);
        actualCompletion.resumeWith_dtxwbr_k$(tmp$ret$9);
      }
    }
  }
  function get_NOT_SELECTED() {
    _init_properties_Select_kt__zhm2jg();
    return NOT_SELECTED;
  }
  var NOT_SELECTED;
  function get_ALREADY_SELECTED() {
    _init_properties_Select_kt__zhm2jg();
    return ALREADY_SELECTED;
  }
  var ALREADY_SELECTED;
  function get_UNDECIDED_1() {
    _init_properties_Select_kt__zhm2jg();
    return UNDECIDED_1;
  }
  var UNDECIDED_1;
  function get_RESUMED_1() {
    _init_properties_Select_kt__zhm2jg();
    return RESUMED_1;
  }
  var RESUMED_1;
  function get_selectOpSequenceNumber() {
    _init_properties_Select_kt__zhm2jg();
    return selectOpSequenceNumber;
  }
  var selectOpSequenceNumber;
  function SelectClause0() {
  }
  function SelectInstance() {
  }
  function _get_number__4pkqn6($this) {
    return $this.number_1;
  }
  function SeqNumber() {
    this.number_1 = atomic$long$1(new Long(1, 0));
  }
  protoOf(SeqNumber).next_20eer_k$ = function () {
    return this.number_1.atomicfu$incrementAndGet$long();
  };
  function SelectClause1() {
  }
  function SelectClause2() {
  }
  var properties_initialized_Select_kt_7rpl36;
  function _init_properties_Select_kt__zhm2jg() {
    if (!properties_initialized_Select_kt_7rpl36) {
      properties_initialized_Select_kt_7rpl36 = true;
      NOT_SELECTED = new Symbol('NOT_SELECTED');
      ALREADY_SELECTED = new Symbol('ALREADY_SELECTED');
      UNDECIDED_1 = new Symbol('UNDECIDED');
      RESUMED_1 = new Symbol('RESUMED');
      selectOpSequenceNumber = new SeqNumber();
    }
  }
  function get_LOCK_FAIL() {
    _init_properties_Mutex_kt__jod56b();
    return LOCK_FAIL;
  }
  var LOCK_FAIL;
  function get_UNLOCK_FAIL() {
    _init_properties_Mutex_kt__jod56b();
    return UNLOCK_FAIL;
  }
  var UNLOCK_FAIL;
  function get_LOCKED() {
    _init_properties_Mutex_kt__jod56b();
    return LOCKED;
  }
  var LOCKED;
  function get_UNLOCKED() {
    _init_properties_Mutex_kt__jod56b();
    return UNLOCKED;
  }
  var UNLOCKED;
  function get_EMPTY_LOCKED() {
    _init_properties_Mutex_kt__jod56b();
    return EMPTY_LOCKED;
  }
  var EMPTY_LOCKED;
  function get_EMPTY_UNLOCKED() {
    _init_properties_Mutex_kt__jod56b();
    return EMPTY_UNLOCKED;
  }
  var EMPTY_UNLOCKED;
  function Empty_0(locked) {
    this.locked_1 = locked;
  }
  protoOf(Empty_0).get_locked_g9dxjn_k$ = function () {
    return this.locked_1;
  };
  protoOf(Empty_0).toString = function () {
    return 'Empty[' + toString(this.locked_1) + ']';
  };
  var properties_initialized_Mutex_kt_yv4p3j;
  function _init_properties_Mutex_kt__jod56b() {
    if (!properties_initialized_Mutex_kt_yv4p3j) {
      properties_initialized_Mutex_kt_yv4p3j = true;
      LOCK_FAIL = new Symbol('LOCK_FAIL');
      UNLOCK_FAIL = new Symbol('UNLOCK_FAIL');
      LOCKED = new Symbol('LOCKED');
      UNLOCKED = new Symbol('UNLOCKED');
      EMPTY_LOCKED = new Empty_0(get_LOCKED());
      EMPTY_UNLOCKED = new Empty_0(get_UNLOCKED());
    }
  }
  function get_MAX_SPIN_CYCLES() {
    _init_properties_Semaphore_kt__t514r6();
    return MAX_SPIN_CYCLES;
  }
  var MAX_SPIN_CYCLES;
  function get_PERMIT() {
    _init_properties_Semaphore_kt__t514r6();
    return PERMIT;
  }
  var PERMIT;
  function get_TAKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return TAKEN;
  }
  var TAKEN;
  function get_BROKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return BROKEN;
  }
  var BROKEN;
  function get_CANCELLED() {
    _init_properties_Semaphore_kt__t514r6();
    return CANCELLED;
  }
  var CANCELLED;
  function get_SEGMENT_SIZE() {
    _init_properties_Semaphore_kt__t514r6();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  var properties_initialized_Semaphore_kt_uqcwok;
  function _init_properties_Semaphore_kt__t514r6() {
    if (!properties_initialized_Semaphore_kt_uqcwok) {
      properties_initialized_Semaphore_kt_uqcwok = true;
      MAX_SPIN_CYCLES = systemProp('kotlinx.coroutines.semaphore.maxSpinCycles', 100);
      PERMIT = new Symbol('PERMIT');
      TAKEN = new Symbol('TAKEN');
      BROKEN = new Symbol('BROKEN');
      CANCELLED = new Symbol('CANCELLED');
      SEGMENT_SIZE = systemProp('kotlinx.coroutines.semaphore.segmentSize', 16);
    }
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  function invokeIt(_this__u8e3s4, cause) {
    if (typeof _this__u8e3s4 === 'function')
      _this__u8e3s4(cause);
    else {
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.invoke(cause);
    }
  }
  function get_asHandler(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4;
  }
  function get_asHandler_0(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4;
  }
  function CancelHandlerBase() {
  }
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function withCoroutineContext(context, countOrElement, block) {
    return block();
  }
  function withContinuationContext(continuation, countOrElement, block) {
    return block();
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().get_Default_goqax4_k$();
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function get_UNDEFINED_0() {
    return UNDEFINED_0;
  }
  var UNDEFINED_0;
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.get_coroutineContext_115oqo_k$().plus_s13ygv_k$(context);
    return (!(combined === Dispatchers_getInstance().get_Default_goqax4_k$()) ? combined.get_y2st91_k$(Key_getInstance()) == null : false) ? combined.plus_s13ygv_k$(Dispatchers_getInstance().get_Default_goqax4_k$()) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.plus_s13ygv_k$(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).afterResume_ugh2hm_k$ = function (state) {
    return this.get_uCont_iyyiam_k$().resumeWith_dtxwbr_k$(recoverResult(state, this.get_uCont_iyyiam_k$()));
  };
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  function set_counter(_set____db54di) {
    counter = _set____db54di;
  }
  function get_counter() {
    return counter;
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).get_simpleName_r6f8py_k$();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function assert(value) {
  }
  function _get_mainDispatcher__sm5ex7($this) {
    return $this.mainDispatcher_1;
  }
  function _set_injectedMainDispatcher__9278zd($this, _set____db54di) {
    $this.injectedMainDispatcher_1 = _set____db54di;
  }
  function _get_injectedMainDispatcher__d6w7gb($this) {
    return $this.injectedMainDispatcher_1;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.Default_1 = createDefaultDispatcher();
    this.Unconfined_1 = Unconfined_getInstance();
    this.mainDispatcher_1 = new JsMainDispatcher(this.Default_1, false);
    this.injectedMainDispatcher_1 = null;
  }
  protoOf(Dispatchers).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  protoOf(Dispatchers).get_Main_wo5vz6_k$ = function () {
    var tmp0_elvis_lhs = this.injectedMainDispatcher_1;
    return tmp0_elvis_lhs == null ? this.mainDispatcher_1 : tmp0_elvis_lhs;
  };
  protoOf(Dispatchers).get_Unconfined_sfvx0q_k$ = function () {
    return this.Unconfined_1;
  };
  protoOf(Dispatchers).injectMain_1yvy48_k$ = function (dispatcher) {
    this.injectedMainDispatcher_1 = dispatcher;
  };
  protoOf(Dispatchers).resetInjectedMain_6cbeag_k$ = function () {
    this.injectedMainDispatcher_1 = null;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function _get_invokeImmediately__pxbc17($this) {
    return $this.invokeImmediately_1;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.delegate_1 = delegate;
    this.invokeImmediately_1 = invokeImmediately;
    this.immediate_1 = this.invokeImmediately_1 ? this : new JsMainDispatcher(this.delegate_1, true);
  }
  protoOf(JsMainDispatcher).get_delegate_i94tki_k$ = function () {
    return this.delegate_1;
  };
  protoOf(JsMainDispatcher).get_immediate_r3y8eg_k$ = function () {
    return this.immediate_1;
  };
  protoOf(JsMainDispatcher).isDispatchNeeded_ft82v4_k$ = function (context) {
    return !this.invokeImmediately_1;
  };
  protoOf(JsMainDispatcher).dispatch_qa3n0o_k$ = function (context, block) {
    return this.delegate_1.dispatch_qa3n0o_k$(context, block);
  };
  protoOf(JsMainDispatcher).dispatchYield_t7bwip_k$ = function (context, block) {
    return this.delegate_1.dispatchYield_t7bwip_k$(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_hcqz93_k$();
    return tmp0_elvis_lhs == null ? this.delegate_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).dispatch_qa3n0o_k$ = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function get_RECOVER_STACK_TRACES() {
    return RECOVER_STACK_TRACES;
  }
  var RECOVER_STACK_TRACES;
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.job_1 = job;
  }
  protoOf(JobCancellationException).get_job_18j2r0_k$ = function () {
    return this.job_1;
  };
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + this.job_1;
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.job_1, this.job_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.job_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function addSuppressedThrowable(_this__u8e3s4, other) {
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).scheduleQueueProcessing_nxtlcz_k$ = function () {
    process.nextTick(this.messageQueue_1.processQueue_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).scheduleQueueProcessing_nxtlcz_k$ = function () {
    setTimeout(this.messageQueue_1.processQueue_1, 0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.process_myqcf5_k$();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.$this_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.processQueue_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).get_processQueue_xqf7it_k$ = function () {
    return this.processQueue_1;
  };
  protoOf(ScheduledMessageQueue).schedule_o777if_k$ = function () {
    this.$this_1.scheduleQueueProcessing_nxtlcz_k$();
  };
  protoOf(ScheduledMessageQueue).reschedule_mhlssa_k$ = function () {
    setTimeout(this.processQueue_1, 0);
  };
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.run_mvkpxh_k$();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.resumeUndispatched_tyhwz7_k$(this$0, Unit_getInstance());
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.messageQueue_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).get_messageQueue_gxtffx_k$ = function () {
    return this.messageQueue_1;
  };
  protoOf(SetTimeoutBasedDispatcher).limitedParallelism_b7nunq_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  protoOf(SetTimeoutBasedDispatcher).dispatch_qa3n0o_k$ = function (context, block) {
    this.messageQueue_1.enqueue_uiib2n_k$(block);
  };
  protoOf(SetTimeoutBasedDispatcher).invokeOnTimeout_x4e3ys_k$ = function (timeMillis, block, context) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).scheduleResumeAfterDelay_ohc91i_k$ = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ClearTimeout(handle);
    continuation.invokeOnCancellation_kffkqp_k$(tmp$ret$1);
  };
  function _set_scheduled__8qlfaw($this, _set____db54di) {
    $this.scheduled_1 = _set____db54di;
  }
  function _get_scheduled__wzo69o($this) {
    return $this.scheduled_1;
  }
  function MessageQueue() {
    ArrayQueue.call(this);
    this.yieldEvery_1 = 16;
    this.scheduled_1 = false;
  }
  protoOf(MessageQueue).get_yieldEvery_1qy12h_k$ = function () {
    return this.yieldEvery_1;
  };
  protoOf(MessageQueue).enqueue_uiib2n_k$ = function (element) {
    this.addLast_pk466f_k$(element);
    if (!this.scheduled_1) {
      this.scheduled_1 = true;
      this.schedule_o777if_k$();
    }
  };
  protoOf(MessageQueue).process_myqcf5_k$ = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.yieldEvery_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = this.removeFirstOrNull_eges3a_k$();
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.run_mvkpxh_k$();
        }
         while (inductionVariable < times);
    }finally {
      if (this.get_isEmpty_zauvru_k$()) {
        this.scheduled_1 = false;
      } else {
        this.reschedule_mhlssa_k$();
      }
    }
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).toInt_1tsl84_k$();
  }
  function _get_handle__ls055p_0($this) {
    return $this.handle_1;
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.handle_1 = handle;
  }
  protoOf(ClearTimeout).dispose_3nnxhr_k$ = function () {
    clearTimeout(this.handle_1);
  };
  protoOf(ClearTimeout).invoke_py2q9a_k$ = function (cause) {
    this.dispose_3nnxhr_k$();
  };
  protoOf(ClearTimeout).invoke = function (cause) {
    return this.invoke_py2q9a_k$(cause);
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.handle_1 + ']';
  };
  function get_MAX_DELAY() {
    return MAX_DELAY;
  }
  var MAX_DELAY;
  function _get_window__ax0zxh($this) {
    return $this.window_1;
  }
  function _get_queue__c6g84g_0($this) {
    return $this.queue_1;
  }
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.resumeUndispatched_tyhwz7_k$(this$0, Unit_getInstance());
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.run_mvkpxh_k$();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$1(this$0, $handle) {
    this.this$0__1 = this$0;
    this.$handle_1 = $handle;
  }
  protoOf(WindowDispatcher$invokeOnTimeout$1).dispose_3nnxhr_k$ = function () {
    this.this$0__1.window_1.clearTimeout(this.$handle_1);
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.window_1 = window_0;
    this.queue_1 = new WindowMessageQueue(this.window_1);
  }
  protoOf(WindowDispatcher).dispatch_qa3n0o_k$ = function (context, block) {
    return this.queue_1.enqueue_uiib2n_k$(block);
  };
  protoOf(WindowDispatcher).scheduleResumeAfterDelay_ohc91i_k$ = function (timeMillis, continuation) {
    this.window_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
  };
  protoOf(WindowDispatcher).invokeOnTimeout_x4e3ys_k$ = function (timeMillis, block, context) {
    var handle = this.window_1.setTimeout(WindowDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new WindowDispatcher$invokeOnTimeout$1(this, handle);
  };
  function _get_window__ax0zxh_0($this) {
    return $this.window_1;
  }
  function _get_messageName__5th09r($this) {
    return $this.messageName_1;
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.window_1 ? event.data == this$0.messageName_1 : false) {
        event.stopPropagation();
        this$0.process_myqcf5_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.process_myqcf5_k$();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.window_1 = window_0;
    this.messageName_1 = 'dispatchCoroutine';
    this.window_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).schedule_o777if_k$ = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).reschedule_mhlssa_k$ = function () {
    this.window_1.postMessage(this.messageName_1, '*');
  };
  function Runnable() {
  }
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function afterTask(_this__u8e3s4) {
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbortFlowException(owner) {
    CancellationException_init_$Init$('Flow was aborted, no more elements needed', this);
    captureStack(this, AbortFlowException);
    this.owner_1 = owner;
  }
  protoOf(AbortFlowException).get_owner_iwkx3e_k$ = function () {
    return this.owner_1;
  };
  function _set_lastEmissionContext__smyz7($this, _set____db54di) {
    $this.lastEmissionContext_1 = _set____db54di;
  }
  function _get_lastEmissionContext__e3d7vj($this) {
    return $this.lastEmissionContext_1;
  }
  function SafeCollector$collectContextSize$lambda(count, _anonymous_parameter_1__qggqgd) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.collector_1 = collector;
    this.collectContext_1 = collectContext;
    var tmp = this;
    tmp.collectContextSize_1 = this.collectContext_1.fold_j2vaxd_k$(0, SafeCollector$collectContextSize$lambda);
    this.lastEmissionContext_1 = null;
  }
  protoOf(SafeCollector).get_collector_vd7hgc_k$ = function () {
    return this.collector_1;
  };
  protoOf(SafeCollector).get_collectContext_m0m2mq_k$ = function () {
    return this.collectContext_1;
  };
  protoOf(SafeCollector).get_collectContextSize_pumapd_k$ = function () {
    return this.collectContextSize_1;
  };
  protoOf(SafeCollector).emit_t92u1f_k$ = function (value, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.get_context_h02k06_k$();
    ensureActive(currentContext);
    if (!(this.lastEmissionContext_1 === currentContext)) {
      checkContext(this, currentContext);
      this.lastEmissionContext_1 = currentContext;
    }
    return this.collector_1.emit_t92u1f_k$(value, $completion);
  };
  protoOf(SafeCollector).releaseIntercepted_5cyqh6_k$ = function () {
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function NoOpLock() {
  }
  protoOf(NoOpLock).tryLock_hapj0a_k$ = function () {
    return true;
  };
  protoOf(NoOpLock).unlock_85w96c_k$ = function () {
  };
  function withLock(_this__u8e3s4, action) {
    return action();
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  protoOf(LinkedListHead).get_isEmpty_zauvru_k$ = function () {
    return this._next_1 === this;
  };
  protoOf(LinkedListHead).remove_fgfybg_k$ = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  function LinkedListNode() {
    this._next_1 = this;
    this._prev_1 = this;
    this._removed_1 = false;
  }
  protoOf(LinkedListNode).set__next_lymhye_k$ = function (_set____db54di) {
    this._next_1 = _set____db54di;
  };
  protoOf(LinkedListNode).get__next_inmai1_k$ = function () {
    return this._next_1;
  };
  protoOf(LinkedListNode).set__prev_7t03x6_k$ = function (_set____db54di) {
    this._prev_1 = _set____db54di;
  };
  protoOf(LinkedListNode).get__prev_inntnt_k$ = function () {
    return this._prev_1;
  };
  protoOf(LinkedListNode).set__removed_m6jidl_k$ = function (_set____db54di) {
    this._removed_1 = _set____db54di;
  };
  protoOf(LinkedListNode).get__removed_p9514a_k$ = function () {
    return this._removed_1;
  };
  protoOf(LinkedListNode).get_nextNode_88zlwi_k$ = function () {
    return this._next_1;
  };
  protoOf(LinkedListNode).get_prevNode_i5bmvy_k$ = function () {
    return this._prev_1;
  };
  protoOf(LinkedListNode).get_isRemoved_gzdz59_k$ = function () {
    return this._removed_1;
  };
  protoOf(LinkedListNode).addLast_mio4hw_k$ = function (node) {
    var prev = this._prev_1;
    node._next_1 = this;
    node._prev_1 = prev;
    prev._next_1 = node;
    this._prev_1 = node;
  };
  protoOf(LinkedListNode).remove_fgfybg_k$ = function () {
    return this.removeImpl_i5v938_k$();
  };
  protoOf(LinkedListNode).removeImpl_i5v938_k$ = function () {
    if (this._removed_1)
      return false;
    var prev = this._prev_1;
    var next = this._next_1;
    prev._next_1 = next;
    next._prev_1 = prev;
    this._removed_1 = true;
    return true;
  };
  protoOf(LinkedListNode).addOneIfEmpty_tlweqo_k$ = function (node) {
    if (!(this._next_1 === this))
      return false;
    this.addLast_mio4hw_k$(node);
    return true;
  };
  protoOf(LinkedListNode).addLastIf_a5363k_k$ = function (node, condition) {
    if (!condition())
      return false;
    this.addLast_mio4hw_k$(node);
    return true;
  };
  protoOf(LinkedListNode).addLastIfPrev_ow5sq5_k$ = function (node, predicate) {
    if (!predicate(this._prev_1))
      return false;
    this.addLast_mio4hw_k$(node);
    return true;
  };
  protoOf(LinkedListNode).addLastIfPrevAndIf_scp2l8_k$ = function (node, predicate, condition) {
    if (!predicate(this._prev_1))
      return false;
    if (!condition())
      return false;
    this.addLast_mio4hw_k$(node);
    return true;
  };
  protoOf(LinkedListNode).helpRemove_v3bmp7_k$ = function () {
  };
  protoOf(LinkedListNode).removeFirstOrNull_eges3a_k$ = function () {
    var next = this._next_1;
    if (next === this)
      return null;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!next.removeImpl_i5v938_k$()) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstOrNull.<anonymous>' call
      var message = 'Should remove';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return next;
  };
  function PrepareOp(affected, desc, atomicOp) {
    OpDescriptor.call(this);
    this.affected_1 = affected;
    this.desc_1 = desc;
    this.atomicOp_1 = atomicOp;
  }
  protoOf(PrepareOp).get_affected_lutt4z_k$ = function () {
    return this.affected_1;
  };
  protoOf(PrepareOp).get_desc_woknve_k$ = function () {
    return this.desc_1;
  };
  protoOf(PrepareOp).get_atomicOp_p2pkuj_k$ = function () {
    return this.atomicOp_1;
  };
  protoOf(PrepareOp).perform_8emi3i_k$ = function (affected) {
    return null;
  };
  protoOf(PrepareOp).finishPrepare_o8sfrw_k$ = function () {
  };
  function AbstractAtomicDesc() {
    AtomicDesc.call(this);
  }
  protoOf(AbstractAtomicDesc).onPrepare_8o6h9r_k$ = function (prepareOp) {
    this.finishPrepare_r98wtp_k$(prepareOp);
    return null;
  };
  protoOf(AbstractAtomicDesc).onRemoved_cq10ti_k$ = function (affected) {
  };
  protoOf(AbstractAtomicDesc).prepare_xdwl64_k$ = function (op) {
    var affected = this.get_affectedNode_2377z5_k$();
    var failure = this.failure_wmd2f3_k$(affected);
    if (!(failure == null))
      return failure;
    return this.onPrepare_8o6h9r_k$(new PrepareOp(affected, this, op));
  };
  protoOf(AbstractAtomicDesc).complete_dfn503_k$ = function (op, failure) {
    return this.onComplete_9lqbvc_k$();
  };
  protoOf(AbstractAtomicDesc).failure_wmd2f3_k$ = function (affected) {
    return null;
  };
  protoOf(AbstractAtomicDesc).retry_9jyo1r_k$ = function (affected, next) {
    return false;
  };
  function RemoveFirstDesc(queue) {
    AbstractAtomicDesc.call(this);
    this.queue_1 = queue;
    var tmp = this;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    tmp.affectedNode_1 = this.queue_1._next_1;
  }
  protoOf(RemoveFirstDesc).get_queue_ixn208_k$ = function () {
    return this.queue_1;
  };
  protoOf(RemoveFirstDesc).get_result_iyg5d2_k$ = function () {
    var tmp = this.get_affectedNode_2377z5_k$();
    return !(tmp == null) ? tmp : THROW_CCE();
  };
  protoOf(RemoveFirstDesc).get_affectedNode_2377z5_k$ = function () {
    return this.affectedNode_1;
  };
  protoOf(RemoveFirstDesc).finishPrepare_r98wtp_k$ = function (prepareOp) {
  };
  protoOf(RemoveFirstDesc).onComplete_9lqbvc_k$ = function () {
    this.queue_1.removeFirstOrNull_eges3a_k$();
  };
  protoOf(RemoveFirstDesc).finishOnSuccess_svp38r_k$ = function (affected, next) {
    return Unit_getInstance();
  };
  function AddLastDesc(queue, node) {
    AbstractAtomicDesc.call(this);
    this.queue_1 = queue;
    this.node_1 = node;
  }
  protoOf(AddLastDesc).get_queue_ixn208_k$ = function () {
    return this.queue_1;
  };
  protoOf(AddLastDesc).get_node_wor8sr_k$ = function () {
    return this.node_1;
  };
  protoOf(AddLastDesc).get_affectedNode_2377z5_k$ = function () {
    return this.queue_1._prev_1;
  };
  protoOf(AddLastDesc).finishPrepare_r98wtp_k$ = function (prepareOp) {
  };
  protoOf(AddLastDesc).onComplete_9lqbvc_k$ = function () {
    return this.queue_1.addLast_mio4hw_k$(this.node_1);
  };
  protoOf(AddLastDesc).finishOnSuccess_svp38r_k$ = function (affected, next) {
    return Unit_getInstance();
  };
  function probeCoroutineCreated(completion) {
    return completion;
  }
  function unwrap(exception) {
    return exception;
  }
  function recoverAndThrow(exception, $completion) {
    throw exception;
  }
  function initCause(_this__u8e3s4, cause) {
  }
  function CoroutineStackFrame() {
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function synchronized(lock, block) {
    return block();
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function _set_value__lx0xdg_0($this, _set____db54di) {
    $this.value_1 = _set____db54di;
  }
  function _get_value__a43j40_0($this) {
    return $this.value_1;
  }
  function CommonThreadLocal() {
    this.value_1 = null;
  }
  protoOf(CommonThreadLocal).get_26vq_k$ = function () {
    var tmp = this.value_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).set_tg4fwj_k$ = function (value) {
    this.value_1 = value;
  };
  //region block: post-declaration
  protoOf(JobSupport).invokeOnCompletion$default_1v3utx_k$ = invokeOnCompletion$default;
  protoOf(JobSupport).cancel$default_8haxne_k$ = cancel$default;
  protoOf(JobSupport).cancel$default_w08z00_k$ = cancel$default_0;
  protoOf(JobSupport).cancel_2l89ey_k$ = cancel;
  protoOf(JobSupport).plus_x16axj_k$ = plus_0;
  protoOf(JobSupport).plus_s13ygv_k$ = plus;
  protoOf(JobSupport).get_y2st91_k$ = get_0;
  protoOf(JobSupport).fold_j2vaxd_k$ = fold;
  protoOf(JobSupport).minusKey_9i5ggf_k$ = minusKey_0;
  protoOf(CancellableContinuationImpl).cancel$default_vwdpyq_k$ = cancel$default_1;
  protoOf(CancellableContinuationImpl).tryResume$default_cgwzli_k$ = tryResume$default;
  protoOf(CoroutineDispatcher).get_y2st91_k$ = get;
  protoOf(CoroutineDispatcher).minusKey_9i5ggf_k$ = minusKey;
  protoOf(Itr).next0_gvc0h9_k$ = next0;
  protoOf(AbstractSendChannel).close$default_kcbl7u_k$ = close$default;
  protoOf(AbstractChannel).cancel$default_2ouzfv_k$ = cancel$default_3;
  protoOf(AbstractChannel).cancel$default_880p35_k$ = cancel$default_2;
  protoOf(AbstractChannel).cancel_2l89ey_k$ = cancel_0;
  protoOf(AbstractChannel).poll_21vi7_k$ = poll;
  protoOf(AbstractChannel).receiveOrNull_7f8d4k_k$ = receiveOrNull;
  protoOf(AbstractChannel).get_onReceiveOrNull_5u62it_k$ = get_onReceiveOrNull;
  protoOf(ChannelCoroutine).close$default_kcbl7u_k$ = close$default;
  protoOf(SharedFlowImpl).fuse$default_3fvd2g_k$ = fuse$default;
  protoOf(StateFlowImpl).fuse$default_3fvd2g_k$ = fuse$default;
  protoOf(ChannelFlow).fuse$default_3fvd2g_k$ = fuse$default;
  protoOf(SetTimeoutBasedDispatcher).delay_xigjxo_k$ = delay;
  protoOf(WindowDispatcher).delay_xigjxo_k$ = delay;
  //endregion
  //region block: init
  UNDECIDED = 0;
  SUSPENDED = 1;
  RESUMED = 2;
  UNDECIDED_0 = 0;
  SUSPENDED_0 = 1;
  RESUMED_0 = 2;
  FALSE = 0;
  TRUE = 1;
  RETRY = -1;
  RECEIVE_THROWS_ON_CLOSE = 0;
  RECEIVE_RESULT = 1;
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  DEFAULT_CONCURRENCY_PROPERTY_NAME = 'kotlinx.coroutines.flow.defaultConcurrency';
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  UNDEFINED_0 = 'undefined';
  counter = 0;
  DEBUG = false;
  RECOVER_STACK_TRACES = false;
  MAX_DELAY = new Long(2147483647, 0);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.b = collect;
  _.$_$.c = first;
  _.$_$.d = cancelAndJoin;
  _.$_$.e = coroutineScope;
  _.$_$.f = withContext;
  _.$_$.g = Key_getInstance_2;
  _.$_$.h = MutableStateFlow_0;
  _.$_$.i = takeWhile;
  _.$_$.j = CancellableContinuationImpl;
  _.$_$.k = CompletableDeferred_0;
  _.$_$.l = CoroutineDispatcher;
  _.$_$.m = CoroutineScope_0;
  _.$_$.n = CoroutineScope;
  _.$_$.o = Job_0;
  _.$_$.p = get_MODE_CANCELLABLE;
  _.$_$.q = SupervisorJob;
  _.$_$.r = asCoroutineDispatcher;
  _.$_$.s = cancel_1;
  _.$_$.t = get_job;
  _.$_$.u = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map
