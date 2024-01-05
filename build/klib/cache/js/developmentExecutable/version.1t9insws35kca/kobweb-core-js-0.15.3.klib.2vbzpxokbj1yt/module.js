(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-compose-html-ext.js', './compose-multiplatform-core-runtime.js', './html-html-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./compose-multiplatform-core-runtime.js'), require('./html-html-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-core'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-kobweb-core'.");
    }
    root['kobweb-frontend-kobweb-core'] = factory(typeof this['kobweb-frontend-kobweb-core'] === 'undefined' ? {} : this['kobweb-frontend-kobweb-core'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-compose-html-ext'], this['compose-multiplatform-core-runtime'], this['html-html-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d2;
  var charArrayOf = kotlin_kotlin.$_$.o9;
  var trimStart = kotlin_kotlin.$_$.ed;
  var get_http = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y1;
  var Unit_getInstance = kotlin_kotlin.$_$.j4;
  var protoOf = kotlin_kotlin.$_$.bb;
  var VOID = kotlin_kotlin.$_$.e;
  var classMeta = kotlin_kotlin.$_$.s9;
  var setMetadataFor = kotlin_kotlin.$_$.cb;
  var KProperty1 = kotlin_kotlin.$_$.sb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.aa;
  var KMutableProperty0 = kotlin_kotlin.$_$.pb;
  var KMutableProperty1 = kotlin_kotlin.$_$.qb;
  var lazy = kotlin_kotlin.$_$.re;
  var THROW_CCE = kotlin_kotlin.$_$.xd;
  var Annotation = kotlin_kotlin.$_$.jd;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Style$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.d5;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.q4;
  var padding = kotlin_org_jetbrains_compose_html_html_core.$_$.n4;
  var margin = kotlin_org_jetbrains_compose_html_html_core.$_$.g4;
  var boxSizing = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var objectMeta = kotlin_kotlin.$_$.ab;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ye;
  var toString = kotlin_kotlin.$_$.eb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var getValue = kotlin_kotlin.$_$.s6;
  var getStringHashCode = kotlin_kotlin.$_$.ba;
  var substringAfterLast = kotlin_kotlin.$_$.tc;
  var plus = kotlin_kotlin.$_$.l7;
  var equals = kotlin_kotlin.$_$.v9;
  var hashCode = kotlin_kotlin.$_$.ca;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var interfaceMeta = kotlin_kotlin.$_$.ea;
  var A$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.y4;
  var THROW_IAE = kotlin_kotlin.$_$.yd;
  var enumEntries = kotlin_kotlin.$_$.i9;
  var Enum = kotlin_kotlin.$_$.md;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var charSequenceLength = kotlin_kotlin.$_$.r9;
  var joinToString = kotlin_kotlin.$_$.w6;
  var objectCreate = kotlin_kotlin.$_$.za;
  var removePrefix = kotlin_kotlin.$_$.lc;
  var startsWith = kotlin_kotlin.$_$.rc;
  var drop = kotlin_kotlin.$_$.bc;
  var first = kotlin_kotlin.$_$.ec;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var split = kotlin_kotlin.$_$.pc;
  var getOrNull = kotlin_kotlin.$_$.r6;
  var Exception = kotlin_kotlin.$_$.od;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.h1;
  var captureStack = kotlin_kotlin.$_$.n9;
  var ensureNotNull = kotlin_kotlin.$_$.pe;
  var isBlank = kotlin_kotlin.$_$.fc;
  var startsWith_0 = kotlin_kotlin.$_$.sc;
  var endsWith = kotlin_kotlin.$_$.cc;
  var dropLast = kotlin_kotlin.$_$.ac;
  var CoroutineImpl = kotlin_kotlin.$_$.d9;
  var SequenceScope = kotlin_kotlin.$_$.ub;
  var mutableListOf = kotlin_kotlin.$_$.j7;
  var removeFirst = kotlin_kotlin.$_$.r7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.n8;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sequence = kotlin_kotlin.$_$.vb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var lastOrNull = kotlin_kotlin.$_$.b7;
  var last = kotlin_kotlin.$_$.c7;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var get_lastIndex = kotlin_kotlin.$_$.z6;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var Div$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.a5;
  var Text$composable = kotlin_org_jetbrains_compose_html_html_core.$_$.e5;
  var SuspendFunction1 = kotlin_kotlin.$_$.e9;
  var charSequenceGet = kotlin_kotlin.$_$.q9;
  var removeSuffix = kotlin_kotlin.$_$.mc;
  var substringAfter = kotlin_kotlin.$_$.vc;
  var contains = kotlin_kotlin.$_$.yb;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var toMutableMap = kotlin_kotlin.$_$.h8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ApiFetcher, 'ApiFetcher', classMeta, VOID, VOID, VOID, VOID, VOID, [4, 5]);
  setMetadataFor(App, 'App', classMeta, VOID, [Annotation]);
  setMetadataFor(DefaultStyleSheet, 'DefaultStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(AppGlobals, 'AppGlobals', objectMeta);
  setMetadataFor(Page, 'Page', classMeta, VOID, [Annotation]);
  setMetadataFor(RouteInfo, 'RouteInfo', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(PageContext, 'PageContext', classMeta);
  setMetadataFor(InitKobwebContext, 'InitKobwebContext', classMeta);
  setMetadataFor(KobwebConfig, 'KobwebConfig', interfaceMeta);
  setMetadataFor(MutableKobwebConfig, 'MutableKobwebConfig', classMeta, VOID, [KobwebConfig], MutableKobwebConfig);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(OpenLinkStrategies, 'OpenLinkStrategies', interfaceMeta);
  setMetadataFor(MutableOpenLinkStrategies, 'MutableOpenLinkStrategies', classMeta, VOID, [OpenLinkStrategies], MutableOpenLinkStrategies);
  setMetadataFor(OpenLinkStrategy, 'OpenLinkStrategy', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Route, 'Route', classMeta);
  setMetadataFor(RouteException, 'RouteException', classMeta, Exception);
  setMetadataFor(RoutePrefix, 'RoutePrefix', interfaceMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta, VOID, [RoutePrefix]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(RoutePrefixImpl, 'RoutePrefixImpl', classMeta, VOID, [RoutePrefix]);
  setMetadataFor(RouteTree$Node$_get_nodes_$slambda_9kqj3, 'RouteTree$Node$<get-nodes>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(Node, 'Node', classMeta);
  setMetadataFor(RootNode, 'RootNode', classMeta, Node, VOID, RootNode);
  setMetadataFor(StaticNode, 'StaticNode', classMeta, Node);
  setMetadataFor(DynamicNode, 'DynamicNode', classMeta, Node);
  setMetadataFor(ResolvedEntry, 'ResolvedEntry', classMeta);
  setMetadataFor(RouteTree, 'RouteTree', classMeta, VOID, VOID, RouteTree);
  setMetadataFor(PageData, 'PageData', classMeta);
  setMetadataFor(ComposableSingletons$RouteTreeKt, 'ComposableSingletons$RouteTreeKt', objectMeta);
  setMetadataFor(Router, 'Router', classMeta, VOID, VOID, Router);
  setMetadataFor(RouteInterceptorScope, 'RouteInterceptorScope', classMeta);
  setMetadataFor(UpdateHistoryMode, 'UpdateHistoryMode', classMeta, Enum);
  setMetadataFor(ComposableSingletons$RouterKt, 'ComposableSingletons$RouterKt', objectMeta);
  //endregion
  function get_api(_this__u8e3s4) {
    _init_properties_ApiFetcher_kt__epxlpv();
    // Inline function 'kotlin.getValue' call
    var this_0 = api$delegate;
    api$factory();
    return this_0.get_value_j01efc_k$();
  }
  var api$delegate;
  function _get_window__ax0zxh($this) {
    return $this.window_1;
  }
  function toResource($this, apiPath, autoPrefix) {
    return prependIf(Companion_getInstance_3(), autoPrefix, '/api/' + trimStart(apiPath, charArrayOf([_Char___init__impl__6a9atx(47)])));
  }
  function get_$stableprop() {
    return 8;
  }
  function ApiFetcher(window_0) {
    this.window_1 = window_0;
    this.logOnError$delegate_1 = logOnError$factory(get_http(this.window_1));
    this.$stable_1 = 8;
  }
  protoOf(ApiFetcher).set_logOnError_wi584t_k$ = function (_set____db54di) {
    var this_0 = this.logOnError$delegate_1;
    logOnError$factory_0();
    this_0.set(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(ApiFetcher).get_logOnError_4wpkhe_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.logOnError$delegate_1;
    logOnError$factory_1();
    return this_0.get();
  };
  protoOf(ApiFetcher).delete_yp0f36_k$ = function (apiPath, headers, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).delete_wslas5_k$(toResource(this, apiPath, autoPrefix), headers, abortController, $completion);
  };
  protoOf(ApiFetcher).delete$default_yx4ilb_k$ = function (apiPath, headers, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.delete_yp0f36_k$(apiPath, headers, abortController, autoPrefix, $completion) : $super.delete_yp0f36_k$.call(this, apiPath, headers, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryDelete_zg4ad0_k$ = function (apiPath, headers, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).tryDelete_m2u9f5_k$(toResource(this, apiPath, autoPrefix), headers, abortController, $completion);
  };
  protoOf(ApiFetcher).tryDelete$default_bbmzlr_k$ = function (apiPath, headers, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryDelete_zg4ad0_k$(apiPath, headers, abortController, autoPrefix, $completion) : $super.tryDelete_zg4ad0_k$.call(this, apiPath, headers, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).get_obqjpp_k$ = function (apiPath, headers, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).get_xhyvli_k$(toResource(this, apiPath, autoPrefix), headers, abortController, $completion);
  };
  protoOf(ApiFetcher).get$default_73xlmy_k$ = function (apiPath, headers, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.get_obqjpp_k$(apiPath, headers, abortController, autoPrefix, $completion) : $super.get_obqjpp_k$.call(this, apiPath, headers, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryGet_kjdt07_k$ = function (apiPath, headers, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).tryGet_45t258_k$(toResource(this, apiPath, autoPrefix), headers, abortController, $completion);
  };
  protoOf(ApiFetcher).tryGet$default_d9efpm_k$ = function (apiPath, headers, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryGet_kjdt07_k$(apiPath, headers, abortController, autoPrefix, $completion) : $super.tryGet_kjdt07_k$.call(this, apiPath, headers, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).head_q1mmaf_k$ = function (apiPath, headers, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).head_k8zolc_k$(toResource(this, apiPath, autoPrefix), headers, abortController, $completion);
  };
  protoOf(ApiFetcher).head$default_2ga0c_k$ = function (apiPath, headers, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.head_q1mmaf_k$(apiPath, headers, abortController, autoPrefix, $completion) : $super.head_q1mmaf_k$.call(this, apiPath, headers, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryHead_om73ih_k$ = function (apiPath, headers, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).tryHead_mqreyk_k$(toResource(this, apiPath, autoPrefix), headers, abortController, $completion);
  };
  protoOf(ApiFetcher).tryHead$default_1t2mc6_k$ = function (apiPath, headers, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryHead_om73ih_k$(apiPath, headers, abortController, autoPrefix, $completion) : $super.tryHead_om73ih_k$.call(this, apiPath, headers, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).options_h50kmj_k$ = function (apiPath, headers, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).options_lpliv2_k$(toResource(this, apiPath, autoPrefix), headers, abortController, $completion);
  };
  protoOf(ApiFetcher).options$default_uttsi_k$ = function (apiPath, headers, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.options_h50kmj_k$(apiPath, headers, abortController, autoPrefix, $completion) : $super.options_h50kmj_k$.call(this, apiPath, headers, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryOptions_6fgmkv_k$ = function (apiPath, headers, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).tryOptions_pcpqhg_k$(toResource(this, apiPath, autoPrefix), headers, abortController, $completion);
  };
  protoOf(ApiFetcher).tryOptions$default_j5urlu_k$ = function (apiPath, headers, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryOptions_6fgmkv_k$(apiPath, headers, abortController, autoPrefix, $completion) : $super.tryOptions_6fgmkv_k$.call(this, apiPath, headers, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).patch_czoydi_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).patch_xcksz5_k$(toResource(this, apiPath, autoPrefix), headers, body, abortController, $completion);
  };
  protoOf(ApiFetcher).patch$default_na61fg_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.patch_czoydi_k$(apiPath, headers, body, abortController, autoPrefix, $completion) : $super.patch_czoydi_k$.call(this, apiPath, headers, body, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryPatch_3a717s_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).tryPatch_e3fj7x_k$(toResource(this, apiPath, autoPrefix), headers, body, abortController, $completion);
  };
  protoOf(ApiFetcher).tryPatch$default_wpw0r4_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryPatch_3a717s_k$(apiPath, headers, body, abortController, autoPrefix, $completion) : $super.tryPatch_3a717s_k$.call(this, apiPath, headers, body, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).post_b3v8ha_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).post_8r1r07_k$(toResource(this, apiPath, autoPrefix), headers, body, abortController, $completion);
  };
  protoOf(ApiFetcher).post$default_xo6o9w_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.post_b3v8ha_k$(apiPath, headers, body, abortController, autoPrefix, $completion) : $super.post_b3v8ha_k$.call(this, apiPath, headers, body, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryPost_439oq2_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).tryPost_3n7omz_k$(toResource(this, apiPath, autoPrefix), headers, body, abortController, $completion);
  };
  protoOf(ApiFetcher).tryPost$default_wuh9jy_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryPost_439oq2_k$(apiPath, headers, body, abortController, autoPrefix, $completion) : $super.tryPost_439oq2_k$.call(this, apiPath, headers, body, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).put_3nc9jz_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).put_hgmsaw_k$(toResource(this, apiPath, autoPrefix), headers, body, abortController, $completion);
  };
  protoOf(ApiFetcher).put$default_x487qt_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.put_3nc9jz_k$(apiPath, headers, body, abortController, autoPrefix, $completion) : $super.put_3nc9jz_k$.call(this, apiPath, headers, body, abortController, autoPrefix, $completion);
  };
  protoOf(ApiFetcher).tryPut_rj8e7j_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion) {
    return get_http(this.window_1).tryPut_p0ou0k_k$(toResource(this, apiPath, autoPrefix), headers, body, abortController, $completion);
  };
  protoOf(ApiFetcher).tryPut$default_pptvdj_k$ = function (apiPath, headers, body, abortController, autoPrefix, $completion, $super) {
    headers = headers === VOID ? null : headers;
    body = body === VOID ? null : body;
    abortController = abortController === VOID ? null : abortController;
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    return $super === VOID ? this.tryPut_rj8e7j_k$(apiPath, headers, body, abortController, autoPrefix, $completion) : $super.tryPut_rj8e7j_k$.call(this, apiPath, headers, body, abortController, autoPrefix, $completion);
  };
  function api$delegate$lambda() {
    _init_properties_ApiFetcher_kt__epxlpv();
    return new ApiFetcher(window);
  }
  function api$factory() {
    return getPropertyCallableRef('api', 1, KProperty1, function (receiver) {
      return get_api(receiver);
    }, null);
  }
  function logOnError$factory($b0) {
    return getPropertyCallableRef('logOnError', 0, KMutableProperty0, function () {
      return $b0.get_logOnError_4wpkhe_k$();
    }, function (value) {
      return $b0.set_logOnError_wi584t_k$(value);
    });
  }
  function logOnError$factory_0() {
    return getPropertyCallableRef('logOnError', 1, KMutableProperty1, function (receiver) {
      return receiver.get_logOnError_4wpkhe_k$();
    }, function (receiver, value) {
      return receiver.set_logOnError_wi584t_k$(value);
    });
  }
  function logOnError$factory_1() {
    return getPropertyCallableRef('logOnError', 1, KMutableProperty1, function (receiver) {
      return receiver.get_logOnError_4wpkhe_k$();
    }, function (receiver, value) {
      return receiver.set_logOnError_wi584t_k$(value);
    });
  }
  var properties_initialized_ApiFetcher_kt_nwc4x;
  function _init_properties_ApiFetcher_kt__epxlpv() {
    if (!properties_initialized_ApiFetcher_kt_nwc4x) {
      properties_initialized_ApiFetcher_kt_nwc4x = true;
      api$delegate = lazy(api$delegate$lambda);
    }
  }
  function App() {
  }
  protoOf(App).equals = function (other) {
    if (!(other instanceof App))
      return false;
    other instanceof App || THROW_CCE();
    return true;
  };
  protoOf(App).hashCode = function () {
    return 0;
  };
  protoOf(App).toString = function () {
    return '@com.varabyte.kobweb.core.App()';
  };
  function KobwebApp$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1244630298);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1244630298, $dirty, -1, 'com.varabyte.kobweb.core.KobwebApp$composable (App.kt:39)');
      }
      // Inline function 'org.jetbrains.compose.web.css.Style$composable' call
      var styleSheet = DefaultStyleSheet_getInstance();
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-168645675);
      sourceInformation($composer_1, 'CC(Style$composable)');
      Style$composable(null, styleSheet.get_cssRules_jdoznh_k$(), $composer_1, 0, 1);
      $composer_1.endReplaceableGroup_ern0ak_k$();
      content($composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(KobwebApp$composable$lambda(content, $changed));
    }
  }
  function get_$stableprop_0() {
    return 0;
  }
  function DefaultStyleSheet$lambda($this$null) {
    padding($this$null, [get_px(0)]);
    margin($this$null, [get_px(0)]);
    return Unit_getInstance();
  }
  function DefaultStyleSheet$lambda_0($this$null) {
    boxSizing($this$null, 'border-box');
    return Unit_getInstance();
  }
  function DefaultStyleSheet() {
    DefaultStyleSheet_instance = this;
    StyleSheet.call(this);
    this.style_qsvaqb_k$('html, body', DefaultStyleSheet$lambda);
    this.style_qsvaqb_k$('*', DefaultStyleSheet$lambda_0);
    this.$stable_2 = 0;
  }
  protoOf(DefaultStyleSheet).style_r4zx12_k$ = function (selector, cssRule) {
    return this.style_pgxmpo_k$(selector, cssRule);
  };
  var DefaultStyleSheet_instance;
  function DefaultStyleSheet_getInstance() {
    if (DefaultStyleSheet_instance == null)
      new DefaultStyleSheet();
    return DefaultStyleSheet_instance;
  }
  function KobwebApp$composable$lambda($content, $$changed) {
    return function ($composer, $force) {
      KobwebApp$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function _set__values__wkt36s($this, _set____db54di) {
    $this._values_1 = _set____db54di;
  }
  function _get__values__6yksts($this) {
    var tmp = $this._values_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('_values');
    }
  }
  function get_$stableprop_1() {
    return 8;
  }
  function AppGlobals() {
    AppGlobals_instance = this;
    this.$stable_1 = 8;
  }
  protoOf(AppGlobals).initialize_8ufbf0_k$ = function (values) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!!(this._values_1 == null)) {
      // Inline function 'com.varabyte.kobweb.core.AppGlobals.initialize.<anonymous>' call
      var message = 'Cannot initialize AppGlobals more than once';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this._values_1 = values;
  };
  protoOf(AppGlobals).get_6bo4tg_k$ = function (key) {
    return _get__values__6yksts(this).get_wei43m_k$(key);
  };
  protoOf(AppGlobals).getValue_r24mvz_k$ = function (key) {
    return getValue(_get__values__6yksts(this), key);
  };
  var AppGlobals_instance;
  function AppGlobals_getInstance() {
    if (AppGlobals_instance == null)
      new AppGlobals();
    return AppGlobals_instance;
  }
  function Page(routeOverride) {
    routeOverride = routeOverride === VOID ? '' : routeOverride;
    this.routeOverride_1 = routeOverride;
  }
  protoOf(Page).get_routeOverride_6ld14k_k$ = function () {
    return this.routeOverride_1;
  };
  protoOf(Page).equals = function (other) {
    if (!(other instanceof Page))
      return false;
    var tmp0_other_with_cast = other instanceof Page ? other : THROW_CCE();
    if (!(this.routeOverride_1 === tmp0_other_with_cast.routeOverride_1))
      return false;
    return true;
  };
  protoOf(Page).hashCode = function () {
    return imul(getStringHashCode('routeOverride'), 127) ^ getStringHashCode(this.routeOverride_1);
  };
  protoOf(Page).toString = function () {
    return '@com.varabyte.kobweb.core.Page(routeOverride=' + this.routeOverride_1 + ')';
  };
  function get_PageContextLocal() {
    _init_properties_PageContext_kt__u2hiem();
    return PageContextLocal;
  }
  var PageContextLocal;
  function _get_route__bsf68o($this) {
    return $this.route_1;
  }
  function _get_dynamicParams__m1vbg($this) {
    return $this.dynamicParams_1;
  }
  function get_$stableprop_2() {
    return 0;
  }
  function RouteInfo(route, dynamicParams) {
    this.route_1 = route;
    this.dynamicParams_1 = dynamicParams;
    this.slug_1 = substringAfterLast(this.route_1.get_path_wos8ry_k$(), _Char___init__impl__6a9atx(47));
    this.path_1 = this.route_1.get_path_wos8ry_k$();
    this.params_1 = plus(this.route_1.get_queryParams_8o6v3v_k$(), this.dynamicParams_1);
    this.queryParams_1 = this.route_1.get_queryParams_8o6v3v_k$();
    this.fragment_1 = this.route_1.get_fragment_bxnb4p_k$();
    this.$stable_1 = 0;
  }
  protoOf(RouteInfo).get_slug_woudx0_k$ = function () {
    return this.slug_1;
  };
  protoOf(RouteInfo).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(RouteInfo).get_params_hy4oen_k$ = function () {
    return this.params_1;
  };
  protoOf(RouteInfo).get_queryParams_8o6v3v_k$ = function () {
    return this.queryParams_1;
  };
  protoOf(RouteInfo).get_fragment_bxnb4p_k$ = function () {
    return this.fragment_1;
  };
  protoOf(RouteInfo).toString = function () {
    return this.route_1.toString();
  };
  protoOf(RouteInfo).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof RouteInfo) {
      tmp_1 = other.path_1 === this.path_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(other.params_1, this.params_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.fragment_1 == this.fragment_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RouteInfo).hashCode = function () {
    var result = getStringHashCode(this.path_1);
    result = imul(31, result) + hashCode(this.params_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.fragment_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(RouteInfo).copy_bbhpbo_k$ = function (path, queryParams, fragment, dynamicParams) {
    return new RouteInfo(Route_init_$Create$(path, queryParams, fragment), dynamicParams);
  };
  protoOf(RouteInfo).copy$default_uhlh95_k$ = function (path, queryParams, fragment, dynamicParams, $super) {
    path = path === VOID ? this.route_1.get_path_wos8ry_k$() : path;
    queryParams = queryParams === VOID ? this.route_1.get_queryParams_8o6v3v_k$() : queryParams;
    fragment = fragment === VOID ? this.route_1.get_fragment_bxnb4p_k$() : fragment;
    dynamicParams = dynamicParams === VOID ? this.dynamicParams_1 : dynamicParams;
    return $super === VOID ? this.copy_bbhpbo_k$(path, queryParams, fragment, dynamicParams) : $super.copy_bbhpbo_k$.call(this, path, queryParams, fragment, dynamicParams);
  };
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).set_instance_nao43g_k$ = function (_set____db54di) {
    this.instance_1 = _set____db54di;
  };
  protoOf(Companion).get_instance_mmff6q_k$ = function () {
    var tmp = this.instance_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('instance');
    }
  };
  protoOf(Companion).init_wjgy2w_k$ = function (router) {
    this.instance_1 = new PageContext(router);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function get_$stableprop_3() {
    return 8;
  }
  function PageContext(router) {
    Companion_getInstance_0();
    this.router_1 = router;
    this.routeState_1 = mutableStateOf(null);
    this.$stable_1 = 8;
  }
  protoOf(PageContext).get_router_j3zccy_k$ = function () {
    return this.router_1;
  };
  protoOf(PageContext).get_routeState_59fhkf_k$ = function () {
    return this.routeState_1;
  };
  protoOf(PageContext).set_route_bdtx77_k$ = function (value) {
    this.routeState_1.set_value_v1vabv_k$(value);
  };
  protoOf(PageContext).get_route_iy3cio_k$ = function () {
    var tmp0_elvis_lhs = this.routeState_1.get_value_j01efc_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'PageContext route info is only valid within a @Page composable';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(PageContext).get_slug_woudx0_k$ = function () {
    return this.get_route_iy3cio_k$().slug_1;
  };
  protoOf(PageContext).get_params_hy4oen_k$ = function () {
    return this.get_route_iy3cio_k$().params_1;
  };
  protoOf(PageContext).get_fragment_bxnb4p_k$ = function () {
    return this.get_route_iy3cio_k$().fragment_1;
  };
  function rememberPageContext$composable($composer, $changed) {
    _init_properties_PageContext_kt__u2hiem();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1885592798);
    if (isTraceInProgress()) {
      traceEventStart(1885592798, $changed, -1, 'com.varabyte.kobweb.core.rememberPageContext$composable (PageContext.kt:163)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_PageContextLocal();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp;
    if (tmp0 == null) {
      var message = 'PageContext is only valid within a @Page composable';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0_0;
  }
  function PageContextLocal$lambda() {
    _init_properties_PageContext_kt__u2hiem();
    return null;
  }
  var properties_initialized_PageContext_kt_8ruj8w;
  function _init_properties_PageContext_kt__u2hiem() {
    if (!properties_initialized_PageContext_kt_8ruj8w) {
      properties_initialized_PageContext_kt_8ruj8w = true;
      PageContextLocal = staticCompositionLocalOf(PageContextLocal$lambda);
    }
  }
  function initKobweb(router, init) {
    var config = new MutableKobwebConfig();
    init(new InitKobwebContext(config, router));
    set_MutableKobwebConfigInstance(config);
  }
  function get_$stableprop_4() {
    return 8;
  }
  function InitKobwebContext(config, router) {
    this.config_1 = config;
    this.router_1 = router;
    this.$stable_1 = 8;
  }
  protoOf(InitKobwebContext).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(InitKobwebContext).get_router_j3zccy_k$ = function () {
    return this.router_1;
  };
  function set_MutableKobwebConfigInstance(_set____db54di) {
    _init_properties_KobwebConfig_kt__rz30d4();
    MutableKobwebConfigInstance = _set____db54di;
  }
  function get_MutableKobwebConfigInstance() {
    _init_properties_KobwebConfig_kt__rz30d4();
    return MutableKobwebConfigInstance;
  }
  var MutableKobwebConfigInstance;
  function get_$stableprop_5() {
    return 8;
  }
  function MutableKobwebConfig() {
    this.openLinkStrategies_1 = new MutableOpenLinkStrategies();
    this.$stable_1 = 8;
  }
  protoOf(MutableKobwebConfig).get_openLinkStrategies_sr8wv2_k$ = function () {
    return this.openLinkStrategies_1;
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).get_Instance_ljxvgi_k$ = function () {
    return get_MutableKobwebConfigInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function KobwebConfig() {
  }
  function get_$stableprop_6() {
    return 8;
  }
  function MutableOpenLinkStrategies(internal, external) {
    internal = internal === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : internal;
    external = external === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : external;
    this.internal_1 = internal;
    this.external_1 = external;
    this.$stable_1 = 8;
  }
  protoOf(MutableOpenLinkStrategies).set_internal_x2k4j8_k$ = function (_set____db54di) {
    this.internal_1 = _set____db54di;
  };
  protoOf(MutableOpenLinkStrategies).get_internal_mdbuyi_k$ = function () {
    return this.internal_1;
  };
  protoOf(MutableOpenLinkStrategies).set_external_q3km6y_k$ = function (_set____db54di) {
    this.external_1 = _set____db54di;
  };
  protoOf(MutableOpenLinkStrategies).get_external_945310_k$ = function () {
    return this.external_1;
  };
  function OpenLinkStrategies() {
  }
  var properties_initialized_KobwebConfig_kt_yaxikm;
  function _init_properties_KobwebConfig_kt__rz30d4() {
    if (!properties_initialized_KobwebConfig_kt_yaxikm) {
      properties_initialized_KobwebConfig_kt_yaxikm = true;
      MutableKobwebConfigInstance = new MutableKobwebConfig();
    }
  }
  function Anchor$composable(href, attrs, openInternalLinksStrategy, openExternalLinksStrategy, autoPrefix, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var autoPrefix_0 = {_v: autoPrefix};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1487018297);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(href) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(openInternalLinksStrategy_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(openExternalLinksStrategy_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(autoPrefix_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 32) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1487018297, $dirty, -1, 'com.varabyte.kobweb.navigation.Anchor$composable (Anchor.kt:39)');
      }
      var href_0 = prependIf(Companion_getInstance_3(), autoPrefix_0._v, href);
      var ctx = rememberPageContext$composable($composer_0, 0);
      A$composable(href_0, Anchor$composable$lambda(attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, ctx, href_0), content_0._v, $composer_0, 896 & $dirty >> 9, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Anchor$composable$lambda_0(href, attrs_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, autoPrefix_0, content_0, $changed, $default));
    }
  }
  function Anchor$composable$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href) {
    return function (evt) {
      var tmp0_elvis_lhs = $openInternalLinksStrategy._v;
      var openInternalLinksStrategy = tmp0_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_getInstance_1().get_Instance_ljxvgi_k$().get_openLinkStrategies_sr8wv2_k$().get_internal_mdbuyi_k$()) : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = $openExternalLinksStrategy._v;
      var openExternalLinksStrategy = tmp1_elvis_lhs == null ? toOpenLinkStrategy(evt, Companion_getInstance_1().get_Instance_ljxvgi_k$().get_openLinkStrategies_sr8wv2_k$().get_external_945310_k$()) : tmp1_elvis_lhs;
      $ctx.get_router_j3zccy_k$().navigateTo$default_onbd51_k$($href, VOID, openInternalLinksStrategy, openExternalLinksStrategy);
      evt.preventDefault_xs6po9_k$();
      evt.stopPropagation_5qf8uy_k$();
      return Unit_getInstance();
    };
  }
  function Anchor$composable$lambda($attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href) {
    return function ($this$A) {
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$A);
      }
      $this$A.onClick_q9cds6_k$(Anchor$composable$lambda$lambda($openInternalLinksStrategy, $openExternalLinksStrategy, $ctx, $href));
      return Unit_getInstance();
    };
  }
  function Anchor$composable$lambda_0($href, $attrs, $openInternalLinksStrategy, $openExternalLinksStrategy, $autoPrefix, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Anchor$composable($href, $attrs._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $autoPrefix._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var OpenLinkStrategy_IN_PLACE_instance;
  var OpenLinkStrategy_IN_NEW_TAB_instance;
  function values() {
    return [OpenLinkStrategy_IN_PLACE_getInstance(), OpenLinkStrategy_IN_NEW_TAB_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'IN_PLACE':
        return OpenLinkStrategy_IN_PLACE_getInstance();
      case 'IN_NEW_TAB':
        return OpenLinkStrategy_IN_NEW_TAB_getInstance();
      default:
        OpenLinkStrategy_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var OpenLinkStrategy_entriesInitialized;
  function OpenLinkStrategy_initEntries() {
    if (OpenLinkStrategy_entriesInitialized)
      return Unit_getInstance();
    OpenLinkStrategy_entriesInitialized = true;
    OpenLinkStrategy_IN_PLACE_instance = new OpenLinkStrategy('IN_PLACE', 0);
    OpenLinkStrategy_IN_NEW_TAB_instance = new OpenLinkStrategy('IN_NEW_TAB', 1);
  }
  var $ENTRIES;
  function OpenLinkStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function open(_this__u8e3s4, href, strategy) {
    var tmp0 = strategy.get_ordinal_ip24qg_k$();
    if (tmp0 === 0) {
      _this__u8e3s4.open(href, '_self');
    } else if (tmp0 === 1) {
      _this__u8e3s4.open(href, '_blank');
    }
  }
  function toOpenLinkStrategy(_this__u8e3s4, default_0) {
    default_0 = default_0 === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : default_0;
    return (_this__u8e3s4.get_ctrlKey_jfc6q3_k$() ? true : _this__u8e3s4.get_shiftKey_ujdkqu_k$()) ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : default_0;
  }
  function OpenLinkStrategy_IN_PLACE_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_PLACE_instance;
  }
  function OpenLinkStrategy_IN_NEW_TAB_getInstance() {
    OpenLinkStrategy_initEntries();
    return OpenLinkStrategy_IN_NEW_TAB_instance;
  }
  function Route_init_$Init$(path, queryParams, fragment, $this) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>' call
    this_0.append_22ad7x_k$(path);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!queryParams.isEmpty_y1axqb_k$()) {
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(63));
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(queryParams.get_size_woubt6_k$());
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = queryParams.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var key = item.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var value = item.get_value_j01efc_k$();
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.navigation.Route.<init>.<anonymous>.<anonymous>.<anonymous>' call
        this_1.append_22ad7x_k$(key);
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(value) > 0) {
          this_1.append_am5a4z_k$(_Char___init__impl__6a9atx(61));
          this_1.append_22ad7x_k$(value);
        }
        var tmp$ret$7 = this_1.toString();
        destination.add_utx5q5_k$(tmp$ret$7);
      }
      this_0.append_22ad7x_k$(joinToString(destination, '&'));
    }
    if (!(fragment == null)) {
      this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(35));
      this_0.append_22ad7x_k$(fragment);
    }
    var tmp$ret$11 = this_0.toString();
    Route.call($this, tmp$ret$11);
    return $this;
  }
  function Route_init_$Create$(path, queryParams, fragment) {
    return Route_init_$Init$(path, queryParams, fragment, objectCreate(protoOf(Route)));
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).isRoute_nlgap1_k$ = function (path) {
    return !(this.tryCreate_50aflp_k$(path) == null);
  };
  protoOf(Companion_1).tryCreate_50aflp_k$ = function (path) {
    var tmp;
    try {
      tmp = new Route(path);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof RouteException) {
        var ex = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_1).fromUrl_6grbna_k$ = function (url) {
    var tmp0_elvis_lhs = this.tryCreate_50aflp_k$(removePrefix(url.href, url.origin));
    return tmp0_elvis_lhs == null ? new Route('') : tmp0_elvis_lhs;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function _get_url__e6i4g2($this) {
    return $this.url_1;
  }
  function get_$stableprop_7() {
    return 8;
  }
  function Route(pathQueryAndFragment) {
    Companion_getInstance_2();
    var tmp;
    try {
      new URL(pathQueryAndFragment);
      tmp = false;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        tmp_0 = true;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var isValidRoute = tmp;
    if (!isValidRoute) {
      throw new RouteException(pathQueryAndFragment);
    }
    this.url_1 = new URL(pathQueryAndFragment, 'http://unused.com');
    var isAbsolute = startsWith(pathQueryAndFragment, '/');
    var tmp_1 = this;
    var tmp_2;
    if (isAbsolute) {
      tmp_2 = this.url_1.pathname;
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = drop(this.url_1.pathname, 1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(first(this.url_1.pathname) === _Char___init__impl__6a9atx(47))) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      tmp_2 = this_0;
    }
    tmp_1.path_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.mutableMapOf' call
    var this_1 = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
      // Inline function 'kotlin.text.isEmpty' call
      var this_2 = this.url_1.search;
      if (charSequenceLength(this_2) === 0) {
        break $l$block;
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = split(removePrefix(this.url_1.search, '?'), charArrayOf([_Char___init__impl__6a9atx(38)])).iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>.<anonymous>' call
        var keyValue = split(element, charArrayOf([_Char___init__impl__6a9atx(61)]), VOID, 2);
        var key = keyValue.get_c1px32_k$(0);
        // Inline function 'kotlin.collections.set' call
        // Inline function 'kotlin.collections.elementAtOrNull' call
        var tmp0_elvis_lhs = getOrNull(keyValue, 1);
        var value = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        this_1.put_4fpzoq_k$(key, value);
      }
    }
    tmp_3.queryParams_1 = this_1;
    var tmp_4 = this;
    // Inline function 'kotlin.takeIf' call
    var this_3 = this.url_1.hash;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_5;
    // Inline function 'com.varabyte.kobweb.navigation.Route.<anonymous>' call
    if (startsWith(this_3, '#')) {
      tmp_5 = this_3;
    } else {
      tmp_5 = null;
    }
    var tmp0_safe_receiver = tmp_5;
    tmp_4.fragment_1 = tmp0_safe_receiver == null ? null : removePrefix(tmp0_safe_receiver, '#');
    this.$stable_1 = 8;
  }
  protoOf(Route).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(Route).get_queryParams_8o6v3v_k$ = function () {
    return this.queryParams_1;
  };
  protoOf(Route).get_fragment_bxnb4p_k$ = function () {
    return this.fragment_1;
  };
  protoOf(Route).toString = function () {
    return this.path_1 + this.url_1.search + this.url_1.hash;
  };
  function get_$stableprop_8() {
    return 0;
  }
  function RouteException(value) {
    Exception_init_$Init$('Failed to create a route. Routes should be valid URLs without a leading domain. Got: ' + value, this);
    captureStack(this, RouteException);
    this.$stable_1 = 0;
  }
  function prependIf(_this__u8e3s4, condition, path) {
    return condition ? Companion_getInstance_3().prepend_osifcc_k$(path) : path;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).set_wjk6wo_k$ = function (value) {
    Companion_getInstance_4().set__instance_4ws2a9_k$(new RoutePrefixImpl(value));
  };
  protoOf(Companion_2).get_value_j01efc_k$ = function () {
    return Companion_getInstance_4().get_instance_mmff6q_k$().value_1;
  };
  protoOf(Companion_2).prepend_osifcc_k$ = function (path) {
    return Companion_getInstance_4().get_instance_mmff6q_k$().prepend_osifcc_k$(path);
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RoutePrefix() {
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this._instance_1 = null;
  }
  protoOf(Companion_3).set__instance_4ws2a9_k$ = function (value) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this._instance_1 == null)) {
      // Inline function 'com.varabyte.kobweb.navigation.Companion.<set-_instance>.<anonymous>' call
      var message = 'Cannot overwrite route prefix once set';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this._instance_1 = value;
  };
  protoOf(Companion_3).get__instance_j6x8p7_k$ = function () {
    if (this._instance_1 == null) {
      this._instance_1 = new RoutePrefixImpl('');
    }
    return this._instance_1;
  };
  protoOf(Companion_3).get_instance_mmff6q_k$ = function () {
    return ensureNotNull(this.get__instance_j6x8p7_k$());
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function get_$stableprop_9() {
    return 0;
  }
  function RoutePrefixImpl(value) {
    Companion_getInstance_4();
    var tmp = this;
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(value)) {
      tmp_0 = value;
    } else {
      tmp_0 = null;
    }
    var tmp0_safe_receiver = tmp_0;
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
      tmp_1 = startsWith_0(tmp0_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp0_safe_receiver : '/' + tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp_1;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.RoutePrefixImpl.value.<anonymous>' call
      tmp_2 = endsWith(tmp1_safe_receiver, _Char___init__impl__6a9atx(47)) ? tmp1_safe_receiver : tmp1_safe_receiver + '/';
    }
    var tmp2_elvis_lhs = tmp_2;
    tmp.value_1 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    this.$stable_1 = 0;
  }
  protoOf(RoutePrefixImpl).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(RoutePrefixImpl).prepend_osifcc_k$ = function (path) {
    if (isBlank(this.value_1))
      return path;
    if (!startsWith(path, '/'))
      return path;
    return dropLast(this.value_1, 1) + path;
  };
  protoOf(RoutePrefixImpl).toString = function () {
    return this.value_1;
  };
  function remove(_this__u8e3s4, path) {
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = _this__u8e3s4.get_value_j01efc_k$();
    if (charSequenceLength(this_0) > 0) {
      tmp = removePrefix(path, dropLast(_this__u8e3s4.get_value_j01efc_k$(), 1));
    } else {
      tmp = path;
    }
    return tmp;
  }
  function _get_children__my42wc($this) {
    return $this.children_1;
  }
  function get_$stableprop_10() {
    return 8;
  }
  function RouteTree$Node$_get_nodes_$slambda_9kqj3(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).invoke_qhgu63_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_9iddkf_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_qhgu63_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this;
            tmp_0.parents0__1 = LinkedHashMap_init_$Create$();
            this.nodeQueue1__1 = mutableListOf([this.this$0__1]);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!!this.nodeQueue1__1.isEmpty_y1axqb_k$()) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.node2__1 = removeFirst(this.nodeQueue1__1);
            var tmp_1 = this;
            tmp_1.nodePath3__1 = ArrayList_init_$Create$_0();
            this.nodePath3__1.add_utx5q5_k$(this.node2__1);
            this.parent4__1 = this.parents0__1.get_wei43m_k$(this.node2__1);
            while (!(this.parent4__1 == null)) {
              this.nodePath3__1.add_dl6gt3_k$(0, this.parent4__1);
              this.parent4__1 = this.parents0__1.get_wei43m_k$(this.parent4__1);
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.nodePath3__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_iterator = this.node2__1.children_1.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              var this_0 = this.parents0__1;
              var value = this.node2__1;
              this_0.put_4fpzoq_k$(element, value);
            }

            this.nodeQueue1__1.addAll_4lagoh_k$(this.node2__1.children_1);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return Unit_getInstance();
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
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).create_9iddkf_k$ = function ($this$sequence, completion) {
    var i = new RouteTree$Node$_get_nodes_$slambda_9kqj3(this.this$0__1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(RouteTree$Node$_get_nodes_$slambda_9kqj3).create_wyq9v6_k$ = function (value, completion) {
    return this.create_9iddkf_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function RouteTree$Node$_get_nodes_$slambda_9kqj3_0(this$0, resultContinuation) {
    var i = new RouteTree$Node$_get_nodes_$slambda_9kqj3(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_qhgu63_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function get_$stableprop_11() {
    return 0;
  }
  function get_$stableprop_12() {
    return 0;
  }
  function get_$stableprop_13() {
    return 0;
  }
  function Node(name, method) {
    illegalDecoyCallException('<init>');
  }
  protoOf(Node).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Node).set_method_g1218j_k$ = function (_set____db54di) {
    illegalDecoyCallException('<set-method>');
  };
  protoOf(Node).get_method_gl8esq_k$ = function () {
    return this.method_1;
  };
  protoOf(Node).matches_j19087_k$ = function (name) {
    return this.name_1 === name;
  };
  protoOf(Node).createChild_g5wzpt_k$ = function (routePart, method) {
    illegalDecoyCallException('createChild');
  };
  protoOf(Node).findChild_rhky47_k$ = function (routePart) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.children_1.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.navigation.Node.findChild.<anonymous>' call
        if (element.matches_j19087_k$(routePart)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  protoOf(Node).get_nodes_ivvt6w_k$ = function () {
    return sequence(RouteTree$Node$_get_nodes_$slambda_9kqj3_0(this, null));
  };
  function Node(name, method) {
    this.name_1 = name;
    this.method_1 = method;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.children_1 = ArrayList_init_$Create$_0();
    this.$stable_1 = 8;
  }
  protoOf(Node).$set_method$$composable_iofvi6_k$ = function (set__$_ezb9bk) {
    this.method_1 = set__$_ezb9bk;
  };
  protoOf(Node).createChild$composable_cp3r2_k$ = function (routePart, method) {
    var tmp;
    if (startsWith_0(routePart, _Char___init__impl__6a9atx(123)) ? endsWith(routePart, _Char___init__impl__6a9atx(125)) : false) {
      // Inline function 'kotlin.text.substring' call
      var endIndex = routePart.length - 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = routePart.substring(1, endIndex);
      tmp = new DynamicNode(tmp$ret$1, method);
    } else {
      tmp = new StaticNode(routePart, method);
    }
    var node = tmp;
    this.children_1.add_utx5q5_k$(node);
    return node;
  };
  function RootNode() {
    Node.call(this, '', null);
    this.$stable_2 = 0;
  }
  function StaticNode(name, method) {
    Node.call(this, name, method);
    illegalDecoyCallException('<init>');
  }
  function StaticNode(name, method) {
    Node.call(this, name, method);
    this.$stable_2 = 0;
  }
  function DynamicNode(name, method) {
    Node.call(this, name, method);
    illegalDecoyCallException('<init>');
  }
  protoOf(DynamicNode).matches_j19087_k$ = function (name) {
    return true;
  };
  function DynamicNode(name, method) {
    Node.call(this, name, method);
    this.$stable_2 = 0;
  }
  function ResolvedEntry(node, routePart) {
    this.node_1 = node;
    this.routePart_1 = routePart;
  }
  protoOf(ResolvedEntry).get_node_wor8sr_k$ = function () {
    return this.node_1;
  };
  protoOf(ResolvedEntry).get_routePart_ba9gz7_k$ = function () {
    return this.routePart_1;
  };
  function _get_root__dd8asp($this) {
    return $this.root_1;
  }
  function resolve($this, route) {
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    // Inline function 'kotlin.collections.mutableListOf' call
    var resolved = ArrayList_init_$Create$_0();
    var currNode = $this.root_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(routeParts.get_c1px32_k$(0) === $this.root_1.name_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last = routeParts.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.get_c1px32_k$(i);
        var tmp1_elvis_lhs = currNode.findChild_rhky47_k$(routePart);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        currNode = tmp;
        resolved.add_utx5q5_k$(new ResolvedEntry(currNode, routePart));
      }
       while (inductionVariable < last);
    return resolved;
  }
  function get_$stableprop_14() {
    return 8;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function RouteTree$createPageData$lambda(this$0) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-729357476, $changed, -1, 'com.varabyte.kobweb.navigation.RouteTree.createPageData.<anonymous> (RouteTree.kt:136)');
        }
        this$0.errorHandler_1(404, $composer_0, 6);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function RouteTree() {
    this.root_1 = new RootNode();
    this.errorHandler_1 = ComposableSingletons$RouteTreeKt_getInstance().lambda_1_r8sbbp_1;
    this.$stable_1 = 8;
  }
  protoOf(RouteTree).set_errorHandler_8w2i7i_k$ = function (_set____db54di) {
    illegalDecoyCallException('<set-errorHandler>');
  };
  protoOf(RouteTree).get_errorHandler_k3vn8r_k$ = function () {
    return this.errorHandler_1;
  };
  protoOf(RouteTree).isRegistered_1ncfv6_k$ = function (route) {
    var tmp0_safe_receiver = resolve(this, route);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : lastOrNull(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.node_1;
    return !((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.method_1) == null);
  };
  protoOf(RouteTree).register_tr0gbz_k$ = function (route, method) {
    illegalDecoyCallException('register');
  };
  protoOf(RouteTree).createPageData_su7bov_k$ = function (route) {
    var resolvedEntries = resolve(this, route.get_path_wos8ry_k$());
    var tmp1_safe_receiver = resolvedEntries == null ? null : last(resolvedEntries);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.node_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.method_1;
    var tmp;
    if (tmp3_elvis_lhs == null) {
      tmp = ComposableLambda$invoke$ref(composableLambdaInstance(-729357476, true, RouteTree$createPageData$lambda(this)));
    } else {
      tmp = tmp3_elvis_lhs;
    }
    var pageMethod = tmp;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var dynamicParams = LinkedHashMap_init_$Create$();
    if (resolvedEntries == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = resolvedEntries.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.navigation.RouteTree.createPageData.<anonymous>' call
        var tmp_0 = element.node_1;
        if (tmp_0 instanceof DynamicNode) {
          // Inline function 'kotlin.collections.set' call
          var key = element.node_1.name_1;
          var value = element.routePart_1;
          dynamicParams.put_4fpzoq_k$(key, value);
        }
      }
    }
    return new PageData(pageMethod, new RouteInfo(route, dynamicParams));
  };
  protoOf(RouteTree).get_nodes_ivvt6w_k$ = function () {
    return this.root_1.get_nodes_ivvt6w_k$();
  };
  protoOf(RouteTree).$set_errorHandler$$composable_958typ_k$ = function (set__$_ezb9bk) {
    this.errorHandler_1 = set__$_ezb9bk;
  };
  protoOf(RouteTree).register$composable_xismps_k$ = function (route, method) {
    if (!(resolve(this, route) == null))
      return false;
    var routeParts = split(route, charArrayOf([_Char___init__impl__6a9atx(47)]));
    var currNode = this.root_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(routeParts.get_c1px32_k$(0) === this.root_1.name_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 1;
    var last = routeParts.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var routePart = routeParts.get_c1px32_k$(i);
        var tmp1_elvis_lhs = currNode.findChild_rhky47_k$(routePart);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          var tmp_0 = currNode;
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_1;
          // Inline function 'com.varabyte.kobweb.navigation.RouteTree.register$composable.<anonymous>' call
          if (i === get_lastIndex(routeParts)) {
            tmp_1 = method;
          } else {
            tmp_1 = null;
          }
          var tmp$ret$2 = tmp_1;
          tmp = tmp_0.createChild$composable_cp3r2_k$(routePart, tmp$ret$2);
        } else {
          tmp = tmp1_elvis_lhs;
        }
        currNode = tmp;
      }
       while (inductionVariable < last);
    return true;
  };
  function get_$stableprop_15() {
    return 0;
  }
  function PageData(pageMethod, routeInfo) {
    illegalDecoyCallException('<init>');
  }
  protoOf(PageData).get_pageMethod_1yegx3_k$ = function () {
    return this.pageMethod_1;
  };
  protoOf(PageData).get_routeInfo_ba59f2_k$ = function () {
    return this.routeInfo_1;
  };
  function PageData(pageMethod, routeInfo) {
    this.pageMethod_1 = pageMethod;
    this.routeInfo_1 = routeInfo;
    this.$stable_1 = 0;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouteTreeKt$lambda_1$lambda_h43un7(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(errorCode) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-557678680, $dirty, -1, 'com.varabyte.kobweb.navigation.ComposableSingletons$RouteTreeKt.lambda-1.<anonymous> (RouteTree.kt:87)');
      }
      ErrorPage$composable(errorCode, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RouteTreeKt() {
    ComposableSingletons$RouteTreeKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-557678680, false, ComposableSingletons$RouteTreeKt$lambda_1$lambda_h43un7));
  }
  protoOf(ComposableSingletons$RouteTreeKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$RouteTreeKt_instance;
  function ComposableSingletons$RouteTreeKt_getInstance() {
    if (ComposableSingletons$RouteTreeKt_instance == null)
      new ComposableSingletons$RouteTreeKt();
    return ComposableSingletons$RouteTreeKt_instance;
  }
  function ErrorPage$composable(errorCode, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(24844165);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(errorCode) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(24844165, $dirty, -1, 'com.varabyte.kobweb.navigation.ErrorPage$composable (RouteTree.kt:21)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.ErrorPage$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 542436721, true, ErrorPage$composable$lambda(errorCode));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.navigation.ErrorPage$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div$composable(null, tmp0, $composer_0, 48, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ErrorPage$composable$lambda_0(errorCode, $changed));
    }
  }
  function ErrorPage$composable$lambda($errorCode) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(542436721, $changed, -1, 'com.varabyte.kobweb.navigation.ErrorPage$composable.<anonymous> (RouteTree.kt:23)');
        }
        Text$composable('Error code: ' + $errorCode, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ErrorPage$composable$lambda_0($errorCode, $$changed) {
    return function ($composer, $force) {
      ErrorPage$composable($errorCode, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function _set_activePageMethod__f6z3vj($this, _set____db54di) {
    illegalDecoyCallException('<set-activePageMethod>');
  }
  function _get_activePageMethod__dw5579($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.activePageMethod$delegate_1;
    activePageMethod$factory();
    return this_0.get_value_j01efc_k$();
  }
  function _get_routeTree__6p9yza($this) {
    return $this.routeTree_1;
  }
  function _get_interceptors__h4min7($this) {
    return $this.interceptors_1;
  }
  function updatePageContext(_this__u8e3s4, $this, pathQueryAndFragment) {
    if (startsWith(pathQueryAndFragment, '#')) {
      var tmp0_safe_receiver = _this__u8e3s4.get_routeState_59fhkf_k$().get_value_j01efc_k$();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _this__u8e3s4.get_routeState_59fhkf_k$().set_value_v1vabv_k$(tmp0_safe_receiver.copy$default_uhlh95_k$(VOID, VOID, removePrefix(pathQueryAndFragment, '#')));
        return true;
      }
      if (tmp == null) {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        return false;
      }
    }
    var route = Companion_getInstance_2().tryCreate_50aflp_k$(pathQueryAndFragment);
    var tmp_0;
    if (!(route == null)) {
      var data = $this.routeTree_1.createPageData_su7bov_k$(route);
      $set_activePageMethod$$composable_u4dzqq($this, data.get_pageMethod_1yegx3_k$());
      _this__u8e3s4.set_route_bdtx77_k$(data.get_routeInfo_ba59f2_k$());
      tmp_0 = true;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  }
  function normalize(_this__u8e3s4, $this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_getInstance_2().isRoute_nlgap1_k$(_this__u8e3s4)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var hrefResolved = Companion_getInstance_2().fromUrl_6grbna_k$(new URL(_this__u8e3s4, window.location.href)).toString();
    // Inline function 'kotlin.takeIf' call
    var this_0 = remove(Companion_getInstance_3(), hrefResolved);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.navigation.Router.normalize.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var withoutPrefix = tmp0_elvis_lhs == null ? '/' : tmp0_elvis_lhs;
    var hadPrefix = !(withoutPrefix === hrefResolved);
    var tmp_0 = Companion_getInstance_3();
    // Inline function 'kotlin.collections.fold' call
    var this_1 = $this.interceptors_1;
    var accumulator = (new Route(withoutPrefix)).toString();
    var tmp0_iterator = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.navigation.Router.normalize.<anonymous>' call
      var acc = accumulator;
      var interceptor = new RouteInterceptorScope(acc);
      element(interceptor);
      accumulator = interceptor.get_pathQueryAndFragment_8mv2zx_k$();
    }
    var tmp$ret$5 = accumulator;
    return prependIf(tmp_0, hadPrefix, tmp$ret$5);
  }
  function get_$stableprop_16() {
    return 8;
  }
  function $set_activePageMethod$$composable_u4dzqq($this, set__$_ezb9bk) {
    var this_0 = $this.activePageMethod$delegate_1;
    activePageMethod$factory_0();
    this_0.set_value_v1vabv_k$(set__$_ezb9bk);
    return Unit_getInstance();
  }
  function Router$lambda(this$0) {
    return function (it) {
      var tmp = Companion_getInstance_0().get_instance_mmff6q_k$();
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.navigation.Router.<anonymous>.<anonymous>' call
      var it_0 = ensureNotNull(document.location);
      var tmp$ret$1 = removePrefix(it_0.href, it_0.origin);
      return updatePageContext(tmp, this$0, tmp$ret$1);
    };
  }
  function Router$renderActivePage$composable$lambda$lambda($pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(613218228, $changed, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>.<anonymous> (Router.kt:137)');
        }
        $pageMethod($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function Router$renderActivePage$composable$lambda($pageWrapper, $pageMethod) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-628364167, $changed, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous> (Router.kt:136)');
        }
        var tmp_0 = $pageWrapper._v;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 613218228, true, Router$renderActivePage$composable$lambda$lambda($pageMethod));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        tmp_0(tmp0, $composer_0, 6);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function Router$renderActivePage$composable$lambda_0($tmp0_rcvr, $pageWrapper, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.renderActivePage$composable_z512mx_k$($pageWrapper._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Router() {
    this.activePageMethod$delegate_1 = mutableStateOf(null);
    this.routeTree_1 = new RouteTree();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.interceptors_1 = ArrayList_init_$Create$_0();
    Companion_getInstance_0().init_wjgy2w_k$(this);
    var tmp_0 = window;
    tmp_0.onpopstate = Router$lambda(this);
    this.$stable_1 = 8;
  }
  protoOf(Router).renderActivePage_ll5aps_k$ = function (pageWrapper) {
    illegalDecoyCallException('renderActivePage');
  };
  protoOf(Router).register_u7v0ae_k$ = function (route, autoPrefix, pageMethod) {
    illegalDecoyCallException('register');
  };
  protoOf(Router).setErrorHandler_pryezt_k$ = function (errorHandler) {
    illegalDecoyCallException('setErrorHandler');
  };
  protoOf(Router).addRouteInterceptor_kgq7h7_k$ = function (interceptor) {
    this.interceptors_1.add_utx5q5_k$(interceptor);
  };
  protoOf(Router).tryRoutingTo_5doa86_k$ = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy) {
    var extension = substringAfterLast(pathQueryAndFragment, _Char___init__impl__6a9atx(46), '');
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(extension) > 0) {
      tmp = !(extension === 'html');
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    }
    var pathQueryAndFragment_0 = pathQueryAndFragment;
    if (Companion_getInstance_2().isRoute_nlgap1_k$(pathQueryAndFragment_0)) {
      pathQueryAndFragment_0 = normalize(pathQueryAndFragment_0, this);
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var indexedObject = pathQueryAndFragment_0;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(indexedObject)) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.varabyte.kobweb.navigation.Router.tryRoutingTo.<anonymous>' call
          if (!(!(element === _Char___init__impl__6a9atx(35)) ? !(element === _Char___init__impl__6a9atx(63)) : false)) {
            tmp$ret$2 = false;
            break $l$block;
          }
        }
        tmp$ret$2 = true;
      }
      if (tmp$ret$2) {
        var route = pathQueryAndFragment_0;
        if (!this.routeTree_1.isRegistered_1ncfv6_k$(route)) {
          if (endsWith(route, _Char___init__impl__6a9atx(47))) {
            var withoutSlash = removeSuffix(route, '/');
            if (this.routeTree_1.isRegistered_1ncfv6_k$(withoutSlash))
              pathQueryAndFragment_0 = withoutSlash;
          } else {
            var withSlash = route + '/';
            if (this.routeTree_1.isRegistered_1ncfv6_k$(withSlash))
              pathQueryAndFragment_0 = withSlash;
          }
        }
      }
    }
    if (!openLinkStrategy.equals(OpenLinkStrategy_IN_PLACE_getInstance())) {
      open(window, pathQueryAndFragment_0, openLinkStrategy);
      return true;
    }
    var tmp_0;
    if (updatePageContext(Companion_getInstance_0().get_instance_mmff6q_k$(), this, pathQueryAndFragment_0)) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var url = window.location.origin + pathQueryAndFragment_0;
      if (!(window.location.href === url)) {
        var newPathname = !(window.location.pathname === Companion_getInstance_2().fromUrl_6grbna_k$(new URL(url)).get_path_wos8ry_k$());
        var tmp0 = updateHistoryMode.get_ordinal_ip24qg_k$();
        if (tmp0 === 0) {
          window.history.pushState(window.history.state, '', url);
        } else if (tmp0 === 1) {
          window.history.replaceState(window.history.state, '', url);
        }
        if (newPathname) {
          var tmp1_safe_receiver = document.documentElement;
          if (tmp1_safe_receiver != null) {
            tmp1_safe_receiver.scrollTop = 0.0;
          }
        }
      }
      var tmp_1;
      if (contains(url, _Char___init__impl__6a9atx(35))) {
        var tmp2_safe_receiver = document.getElementById(substringAfter(url, _Char___init__impl__6a9atx(35)));
        if (tmp2_safe_receiver == null)
          null;
        else {
          tmp2_safe_receiver.scrollIntoView({behavior: 'smooth'});
        }
        tmp_1 = Unit_getInstance();
      }
      tmp_0 = true;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(Router).tryRoutingTo$default_gm9buu_k$ = function (pathQueryAndFragment, updateHistoryMode, openLinkStrategy, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openLinkStrategy = openLinkStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openLinkStrategy;
    return $super === VOID ? this.tryRoutingTo_5doa86_k$(pathQueryAndFragment, updateHistoryMode, openLinkStrategy) : $super.tryRoutingTo_5doa86_k$.call(this, pathQueryAndFragment, updateHistoryMode, openLinkStrategy);
  };
  protoOf(Router).navigateTo_5oprea_k$ = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy) {
    if (!this.tryRoutingTo_5doa86_k$(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy)) {
      open(window, pathQueryAndFragment, openExternalLinksStrategy);
    }
  };
  protoOf(Router).navigateTo$default_onbd51_k$ = function (pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy, $super) {
    updateHistoryMode = updateHistoryMode === VOID ? UpdateHistoryMode_PUSH_getInstance() : updateHistoryMode;
    openInternalLinksStrategy = openInternalLinksStrategy === VOID ? OpenLinkStrategy_IN_PLACE_getInstance() : openInternalLinksStrategy;
    openExternalLinksStrategy = openExternalLinksStrategy === VOID ? OpenLinkStrategy_IN_NEW_TAB_getInstance() : openExternalLinksStrategy;
    var tmp;
    if ($super === VOID) {
      this.navigateTo_5oprea_k$(pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.navigateTo_5oprea_k$.call(this, pathQueryAndFragment, updateHistoryMode, openInternalLinksStrategy, openExternalLinksStrategy);
    }
    return tmp;
  };
  protoOf(Router).renderActivePage$composable_z512mx_k$ = function (pageWrapper, $composer, $changed, $default) {
    var pageWrapper_0 = {_v: pageWrapper};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1838195952);
    if (!(($default & 1) === 0)) {
      pageWrapper_0._v = ComposableSingletons$RouterKt_getInstance().lambda_1_r8sbbp_1;
    }
    if (isTraceInProgress()) {
      traceEventStart(1838195952, $changed, -1, 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable (Router.kt:129)');
    }
    var tmp0_elvis_lhs = _get_activePageMethod__dw5579(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Call 'navigateTo' at least once before calling 'renderActivePage'";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var pageMethod = tmp;
    var tmp_0 = [get_PageContextLocal().provides_3agxel_k$(Companion_getInstance_0().get_instance_mmff6q_k$())];
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>' call
    var tmp_1 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_1, -628364167, true, Router$renderActivePage$composable$lambda(pageWrapper_0, pageMethod));
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp_2;
    if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.navigation.Router.renderActivePage$composable.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp_2 = value;
    } else {
      tmp_2 = it;
    }
    var tmp_3 = tmp_2;
    var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    CompositionLocalProvider$composable(tmp_0, tmp0, $composer_0, 48);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(Router$renderActivePage$composable$lambda_0(this, pageWrapper_0, $changed, $default));
    }
  };
  protoOf(Router).register$composable_s48zgd_k$ = function (route, autoPrefix, pageMethod) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(Companion_getInstance_2().isRoute_nlgap1_k$(route) ? startsWith_0(route, _Char___init__impl__6a9atx(47)) : false)) {
      // Inline function 'com.varabyte.kobweb.navigation.Router.register$composable.<anonymous>' call
      var message = 'Registration only allowed for internal, rooted routes, e.g. /example/path. Got: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.routeTree_1.register$composable_xismps_k$(prependIf(Companion_getInstance_3(), autoPrefix, route), pageMethod)) {
      // Inline function 'com.varabyte.kobweb.navigation.Router.register$composable.<anonymous>' call
      var message_0 = 'Registration failure. Path is already registered: ' + route;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  };
  protoOf(Router).register$composable$default_1eoqzg_k$ = function (route, autoPrefix, pageMethod, $super) {
    autoPrefix = autoPrefix === VOID ? true : autoPrefix;
    var tmp;
    if ($super === VOID) {
      this.register$composable_s48zgd_k$(route, autoPrefix, pageMethod);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.register$composable_s48zgd_k$.call(this, route, autoPrefix, pageMethod);
    }
    return tmp;
  };
  protoOf(Router).setErrorHandler$composable_itb2tc_k$ = function (errorHandler) {
    this.routeTree_1.$set_errorHandler$$composable_958typ_k$(errorHandler);
  };
  function _get_route__bsf68o_0($this) {
    return $this.route_1;
  }
  function get_$stableprop_17() {
    return 8;
  }
  function RouteInterceptorScope(pathQueryAndFragment) {
    this.route_1 = new Route(pathQueryAndFragment);
    this.path_1 = this.route_1.get_path_wos8ry_k$();
    this.queryParams_1 = toMutableMap(this.route_1.get_queryParams_8o6v3v_k$());
    this.fragment_1 = this.route_1.get_fragment_bxnb4p_k$();
    this.$stable_1 = 8;
  }
  protoOf(RouteInterceptorScope).set_path_tgrnnc_k$ = function (value) {
    this.path_1 = startsWith_0(value, _Char___init__impl__6a9atx(47)) ? value : '/' + value;
  };
  protoOf(RouteInterceptorScope).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(RouteInterceptorScope).set_queryParams_v3ipd5_k$ = function (_set____db54di) {
    this.queryParams_1 = _set____db54di;
  };
  protoOf(RouteInterceptorScope).get_queryParams_8o6v3v_k$ = function () {
    return this.queryParams_1;
  };
  protoOf(RouteInterceptorScope).set_fragment_dufueu_k$ = function (_set____db54di) {
    this.fragment_1 = _set____db54di;
  };
  protoOf(RouteInterceptorScope).get_fragment_bxnb4p_k$ = function () {
    return this.fragment_1;
  };
  protoOf(RouteInterceptorScope).get_pathQueryAndFragment_8mv2zx_k$ = function () {
    return Route_init_$Create$(this.path_1, this.queryParams_1, this.fragment_1).toString();
  };
  var UpdateHistoryMode_PUSH_instance;
  var UpdateHistoryMode_REPLACE_instance;
  function values_0() {
    return [UpdateHistoryMode_PUSH_getInstance(), UpdateHistoryMode_REPLACE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'PUSH':
        return UpdateHistoryMode_PUSH_getInstance();
      case 'REPLACE':
        return UpdateHistoryMode_REPLACE_getInstance();
      default:
        UpdateHistoryMode_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var UpdateHistoryMode_entriesInitialized;
  function UpdateHistoryMode_initEntries() {
    if (UpdateHistoryMode_entriesInitialized)
      return Unit_getInstance();
    UpdateHistoryMode_entriesInitialized = true;
    UpdateHistoryMode_PUSH_instance = new UpdateHistoryMode('PUSH', 0);
    UpdateHistoryMode_REPLACE_instance = new UpdateHistoryMode('REPLACE', 1);
  }
  var $ENTRIES_0;
  function UpdateHistoryMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-12986461, $dirty, -1, 'com.varabyte.kobweb.navigation.ComposableSingletons$RouterKt.lambda-1.<anonymous> (Router.kt:129)');
      }
      it($composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RouterKt() {
    ComposableSingletons$RouterKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-12986461, false, ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7));
  }
  protoOf(ComposableSingletons$RouterKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$RouterKt_instance;
  function ComposableSingletons$RouterKt_getInstance() {
    if (ComposableSingletons$RouterKt_instance == null)
      new ComposableSingletons$RouterKt();
    return ComposableSingletons$RouterKt_instance;
  }
  function UpdateHistoryMode_PUSH_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_PUSH_instance;
  }
  function UpdateHistoryMode_REPLACE_getInstance() {
    UpdateHistoryMode_initEntries();
    return UpdateHistoryMode_REPLACE_instance;
  }
  function activePageMethod$factory() {
    return getPropertyCallableRef('activePageMethod', 1, KMutableProperty1, function (receiver) {
      return _get_activePageMethod__dw5579(receiver);
    }, function (receiver, value) {
      return _set_activePageMethod__f6z3vj(receiver, value);
    });
  }
  function activePageMethod$factory_0() {
    return getPropertyCallableRef('activePageMethod', 1, KMutableProperty1, function (receiver) {
      return _get_activePageMethod__dw5579(receiver);
    }, function (receiver, value) {
      return _set_activePageMethod__f6z3vj(receiver, value);
    });
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_api;
  _.$_$.b = initKobweb;
  _.$_$.c = KobwebApp$composable;
  _.$_$.d = Anchor$composable;
  _.$_$.e = Router;
  _.$_$.f = prependIf;
  _.$_$.g = UpdateHistoryMode_REPLACE_getInstance;
  _.$_$.h = AppGlobals_getInstance;
  _.$_$.i = Companion_getInstance_3;
  //endregion
  return _;
}));
