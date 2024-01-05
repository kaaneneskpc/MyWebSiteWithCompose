(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-runtime.js', './html-internal-html-core-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-frontend-kobweb-silk.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-compose-html-ext.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.example.mywebsite:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.example.mywebsite:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'com.example.mywebsite:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'com.example.mywebsite:site'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'com.example.mywebsite:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'com.example.mywebsite:site'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.example.mywebsite:site'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'com.example.mywebsite:site'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.example.mywebsite:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'com.example.mywebsite:site'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'com.example.mywebsite:site'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'com.example.mywebsite:site'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'com.example.mywebsite:site'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'com.example.mywebsite:site'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'com.example.mywebsite:site'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'com.example.mywebsite:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'com.example.mywebsite:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'com.example.mywebsite:site'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'com.example.mywebsite:site'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'com.example.mywebsite:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'com.example.mywebsite:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'com.example.mywebsite:site'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'com.example.mywebsite:site'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'com.example.mywebsite:site'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'com.example.mywebsite:site'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'com.example.mywebsite:site'.");
    }
    root['com.example.mywebsite:site'] = factory(typeof this['com.example.mywebsite:site'] === 'undefined' ? {} : this['com.example.mywebsite:site'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-core'], this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-runtime'], this['html-internal-html-core-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-silk-widgets-kobweb'], this['kobweb-frontend-kobweb-silk'], this['html-html-core'], this['kobweb-frontend-kobweb-compose'], this['kobweb-frontend-compose-html-ext'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var ensureNotNull = kotlin_kotlin.$_$.pe;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var removePrefix = kotlin_kotlin.$_$.lc;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var AppGlobals_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var to = kotlin_kotlin.$_$.af;
  var mapOf = kotlin_kotlin.$_$.h7;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable$composable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Unit_getInstance = kotlin_kotlin.$_$.j4;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var THROW_CCE = kotlin_kotlin.$_$.xd;
  var renderWithDeferred$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var protoOf = kotlin_kotlin.$_$.bb;
  var objectMeta = kotlin_kotlin.$_$.ab;
  var setMetadataFor = kotlin_kotlin.$_$.cb;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var toString = kotlin_kotlin.$_$.ze;
  var toInt = kotlin_kotlin.$_$.ad;
  var charSequenceLength = kotlin_kotlin.$_$.r9;
  var toBoolean = kotlin_kotlin.$_$.yc;
  var isBlank = kotlin_kotlin.$_$.fc;
  var VOID = kotlin_kotlin.$_$.e;
  var removeSuffix = kotlin_kotlin.$_$.mc;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.i;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.c;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var get_button = kotlin_com_varabyte_kobweb_silk_widgets.$_$.k;
  var SilkApp$composable = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var toModifier$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.v4;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var Surface$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var THROW_IAE = kotlin_kotlin.$_$.yd;
  var enumEntries = kotlin_kotlin.$_$.i9;
  var Enum = kotlin_kotlin.$_$.md;
  var classMeta = kotlin_kotlin.$_$.s9;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.q4;
  var Link$composable = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var Image$composable = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var Box$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var Start_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var CenterHorizontally_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var Column$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var SpanText$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var contains = kotlin_kotlin.$_$.xb;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var background = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.o4;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var LG_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.l;
  var Button$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var Start_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var Row$composable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var rememberBreakpoint$composable = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var numColumns = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var thenIf = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var SimpleGrid$composable = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var zIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var Top_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var End_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r1;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var Direction_ToRight_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c2;
  var linearGradient = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var backgroundImage = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var Center_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var KMutableProperty0 = kotlin_kotlin.$_$.pb;
  var THROW_ISE = kotlin_kotlin.$_$.zd;
  var getLocalDelegateReference = kotlin_kotlin.$_$.y9;
  var CoroutineImpl = kotlin_kotlin.$_$.d9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var isInterface = kotlin_kotlin.$_$.na;
  var valueOf = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var SuspendFunction1 = kotlin_kotlin.$_$.e9;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var Companion_getInstance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.k4;
  var CSSTransition = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var KProperty0 = kotlin_kotlin.$_$.rb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.aa;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var get_deg = kotlin_org_jetbrains_compose_html_html_core.$_$.p3;
  var rotate = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var Companion_getInstance_10 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  setMetadataFor(SocialIcon, 'SocialIcon', classMeta, Enum);
  setMetadataFor(ComposableSingletons$LeftSideKt, 'ComposableSingletons$LeftSideKt', objectMeta);
  setMetadataFor(ComposableSingletons$RightSideKt, 'ComposableSingletons$RightSideKt', objectMeta);
  setMetadataFor(HomePage$composable$slambda, 'HomePage$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(Theme, 'Theme', classMeta, Enum);
  setMetadataFor(Icon, 'Icon', objectMeta);
  setMetadataFor(Image, 'Image', objectMeta);
  setMetadataFor(String_0, 'String', objectMeta);
  setMetadataFor(Dimens, 'Dimens', objectMeta);
  setMetadataFor(Res, 'Res', objectMeta);
  //endregion
  function forceReloadNow() {
    window.stop();
    window.location.reload();
  }
  function handleServerStatusEvents() {
    var status = ensureNotNull(document.getElementById('status'));
    var lastVersion = {_v: null};
    var shouldReload = {_v: false};
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = status.children[0];
    var warningIcon = ensureNotNull(tmp$ret$1);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = status.children[1];
    var spinnerIcon = ensureNotNull(tmp$ret$3);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = status.children[2];
    var statusText = ensureNotNull(tmp$ret$5);
    status.addEventListener('transitionend', handleServerStatusEvents$lambda(status, shouldReload));
    // Inline function 'org.w3c.dom.EventSourceInit' call
    var o = {};
    o['withCredentials'] = true;
    var eventSource = new EventSource('/api/kobweb-status', o);
    eventSource.addEventListener('version', handleServerStatusEvents$lambda_0(lastVersion, status, shouldReload));
    eventSource.addEventListener('status', handleServerStatusEvents$lambda_1(warningIcon, spinnerIcon, statusText, status));
    eventSource.onerror = handleServerStatusEvents$lambda_2(eventSource);
  }
  function main() {
    handleServerStatusEvents();
    get_api(window).set_logOnError_wi584t_k$(true);
    Companion_getInstance().set_wjk6wo_k$('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.addRouteInterceptor_kgq7h7_k$(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.navigateTo$default_onbd51_k$(removePrefix(window.location.href, window.location.origin), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    AppGlobals_getInstance().initialize_8ufbf0_k$(mapOf(to('title', 'MyWebsite')));
    renderComposable$composable('root', ComposableLambda$invoke$ref_2(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-994802423, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:85)');
      }
      HomePage$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(353715515, $dirty, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (main.kt:114)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1429661405, true, ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75(it));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it_0;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      renderWithDeferred$composable(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1429661405, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous> (main.kt:114)');
        }
        $it($composer_0, 0);
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
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-994802423, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(353715515, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function handleServerStatusEvents$lambda($status, $shouldReload) {
    return function (it) {
      var tmp;
      if (hasClass($status, 'fade-out')) {
        removeClass($status, ['fade-out']);
        var tmp_0;
        if ($shouldReload._v) {
          forceReloadNow();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = $status.className;
        if (charSequenceLength(this_0) > 0) {
          $shouldReload._v = true;
          tmp_1 = Unit_getInstance();
        } else {
          forceReloadNow();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_1($warningIcon, $spinnerIcon, $statusText, $status) {
    return function (evt) {
      var tmp = JSON;
      var values = tmp.parse(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp_0 = values.text;
      var text = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = values.isError;
      var isError = toBoolean((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(text)) {
        $warningIcon.className = isError ? 'visible' : 'hidden';
        $spinnerIcon.className = isError ? 'hidden' : 'visible';
        $statusText.innerHTML = '<i>' + text + '<\/i>';
        $status.className = 'fade-in';
        tmp_2 = Unit_getInstance();
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_getInstance();
        }
        tmp_2 = tmp_3;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_getInstance();
    };
  }
  function main$lambda(ctx) {
    ctx.get_router_j3zccy_k$().register$composable$default_1eoqzg_k$('/', VOID, ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
    return Unit_getInstance();
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.set_path_tgrnnc_k$(removeSuffix(removeSuffix($this$addRouteInterceptor.get_path_wos8ry_k$(), '.html'), '.htm'));
    return Unit_getInstance();
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_ButtonStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_SocialIconStyle());
    ctx.get_theme_iz24rk_k$().registerComponentStyle_covb7k_k$(get_ThemeIconStyle());
    overrideSilkTheme(ctx);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1460047695, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:114)');
        }
        $router.renderActivePage$composable_z512mx_k$(ComposableSingletons$MainKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 6, 0);
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
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1108811911, $changed, -1, 'main.<anonymous> (main.kt:113)');
        }
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'main.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, -1460047695, true, main$lambda$lambda($router));
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
        var tmp_1;
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        MyApp$composable(tmp0, $composer_0, 6);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function MyApp(content) {
    illegalDecoyCallException('MyApp');
  }
  function overrideSilkTheme(context) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.example.mywebsite.overrideSilkTheme.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_0 = context.get_theme_iz24rk_k$().get_palettes_f7ft27_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.example.mywebsite.overrideSilkTheme.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.get_light_iuogdp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.example.mywebsite.overrideSilkTheme.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_2 = get_button(this_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.example.mywebsite.overrideSilkTheme.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this_2.set_default_r70t7m_k$(Theme_BLUE_getInstance().get_color_ipu8u2_k$());
    this_2.set_hover_2oswrh_k$(Theme_BLUE_getInstance().get_color_ipu8u2_k$());
    this_2.set_pressed_58wx37_k$(Theme_BLUE_getInstance().get_color_ipu8u2_k$());
    // Inline function 'kotlin.apply' call
    var this_3 = this_0.get_dark_wokkvz_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.example.mywebsite.overrideSilkTheme.<anonymous>.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_4 = get_button(this_3);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.example.mywebsite.overrideSilkTheme.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this_4.set_default_r70t7m_k$(Theme_LIGHT_BLUE_getInstance().get_color_ipu8u2_k$());
    this_4.set_hover_2oswrh_k$(Theme_LIGHT_BLUE_getInstance().get_color_ipu8u2_k$());
    this_4.set_pressed_58wx37_k$(Theme_LIGHT_BLUE_getInstance().get_color_ipu8u2_k$());
  }
  function MyApp$composable(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1163515402);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1163515402, $dirty, -1, 'com.example.mywebsite.MyApp$composable (AppEntry.kt:17)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.mywebsite.MyApp$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 1017149217, true, MyApp$composable$lambda(content));
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
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.mywebsite.MyApp$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      SilkApp$composable(tmp0, $composer_0, 6);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(MyApp$composable$lambda_0(content, $changed));
    }
  }
  function MyApp$composable$lambda$lambda($content) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-266787013, $changed, -1, 'com.example.mywebsite.MyApp$composable.<anonymous>.<anonymous> (AppEntry.kt:20)');
        }
        $content($composer_0, 0);
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
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function MyApp$composable$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1017149217, $changed, -1, 'com.example.mywebsite.MyApp$composable.<anonymous> (AppEntry.kt:19)');
        }
        var tmp_0 = minHeight(toModifier$composable(get_SmoothColorStyle(), [], $composer_0, 64), get_vh(100));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.mywebsite.MyApp$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -266787013, true, MyApp$composable$lambda$lambda($content));
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
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.mywebsite.MyApp$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Surface$composable(tmp_0, null, null, null, null, tmp0, $composer_0, 196608, 30);
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
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function MyApp$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      MyApp$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function IconButton(modifier, colorMode, link, icon, iconSize, onClick) {
    illegalDecoyCallException('IconButton');
  }
  var SocialIcon_Github_instance;
  var SocialIcon_GithubLight_instance;
  var SocialIcon_Gitlab_instance;
  var SocialIcon_GitlabLight_instance;
  var SocialIcon_Instagram_instance;
  var SocialIcon_InstagramLight_instance;
  var SocialIcon_Linkedin_instance;
  var SocialIcon_LinkedinLight_instance;
  function values() {
    return [SocialIcon_Github_getInstance(), SocialIcon_GithubLight_getInstance(), SocialIcon_Gitlab_getInstance(), SocialIcon_GitlabLight_getInstance(), SocialIcon_Instagram_getInstance(), SocialIcon_InstagramLight_getInstance(), SocialIcon_Linkedin_getInstance(), SocialIcon_LinkedinLight_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Github':
        return SocialIcon_Github_getInstance();
      case 'GithubLight':
        return SocialIcon_GithubLight_getInstance();
      case 'Gitlab':
        return SocialIcon_Gitlab_getInstance();
      case 'GitlabLight':
        return SocialIcon_GitlabLight_getInstance();
      case 'Instagram':
        return SocialIcon_Instagram_getInstance();
      case 'InstagramLight':
        return SocialIcon_InstagramLight_getInstance();
      case 'Linkedin':
        return SocialIcon_Linkedin_getInstance();
      case 'LinkedinLight':
        return SocialIcon_LinkedinLight_getInstance();
      default:
        SocialIcon_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var SocialIcon_entriesInitialized;
  function SocialIcon_initEntries() {
    if (SocialIcon_entriesInitialized)
      return Unit_getInstance();
    SocialIcon_entriesInitialized = true;
    SocialIcon_Github_instance = new SocialIcon('Github', 0, Icon_getInstance().get_GITHUB_1ugkr8_k$(), 'https://github.com/kaaneneskpc');
    SocialIcon_GithubLight_instance = new SocialIcon('GithubLight', 1, Icon_getInstance().get_GITHUB_LIGHT_kqoyqr_k$(), 'https://github.com/kaaneneskpc');
    SocialIcon_Gitlab_instance = new SocialIcon('Gitlab', 2, Icon_getInstance().get_GITLAB_1ugi9o_k$(), 'https://gitlab.com');
    SocialIcon_GitlabLight_instance = new SocialIcon('GitlabLight', 3, Icon_getInstance().get_GITLAB_LIGHT_z0vy4b_k$(), 'https://gitlab.com');
    SocialIcon_Instagram_instance = new SocialIcon('Instagram', 4, Icon_getInstance().get_INSTAGRAM_fybcif_k$(), 'https://www.instagram.com/kaaneneskpc');
    SocialIcon_InstagramLight_instance = new SocialIcon('InstagramLight', 5, Icon_getInstance().get_INSTAGRAM_LIGHT_ba8c0w_k$(), 'https://www.instagram.com/kaaneneskpc');
    SocialIcon_Linkedin_instance = new SocialIcon('Linkedin', 6, Icon_getInstance().get_LINKEDIN_LIGHT_8ex18e_k$(), 'https://www.linkedin.com/in/kaaneneskpc/');
    SocialIcon_LinkedinLight_instance = new SocialIcon('LinkedinLight', 7, Icon_getInstance().get_LINKEDIN_wb2yv_k$(), 'https://www.linkedin.com/in/kaaneneskpc/');
  }
  var $ENTRIES;
  function SocialIcon(name, ordinal, icon, link) {
    Enum.call(this, name, ordinal);
    this.icon_1 = icon;
    this.link_1 = link;
  }
  protoOf(SocialIcon).get_icon_wont8i_k$ = function () {
    return this.icon_1;
  };
  protoOf(SocialIcon).get_link_wopumb_k$ = function () {
    return this.link_1;
  };
  function IconButton$composable(modifier, colorMode, link, icon, iconSize, onClick, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var link_0 = {_v: link};
    var iconSize_0 = {_v: iconSize};
    var onClick_0 = {_v: onClick};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-235735219);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(colorMode) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(link_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(icon) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.changed_ga7h3f_k$(iconSize_0._v) : false) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick_0._v) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance_1();
        }
        if (!(($default & 4) === 0)) {
          link_0._v = '';
        }
        if (!(($default & 16) === 0)) {
          iconSize_0._v = get_px(Dimens_getInstance().get_ICON_SIZE_w3c7z2_k$());
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          onClick_0._v = null;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(-235735219, $dirty, -1, 'com.example.mywebsite.components.IconButton$composable (IconButton.kt:25)');
      }
      var tmp = link_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.mywebsite.components.IconButton$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1722735498, true, IconButton$composable$lambda(modifier_0, colorMode, onClick_0, iconSize_0, icon));
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
      var tmp_1;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.mywebsite.components.IconButton$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_7(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Link$composable(tmp, null, null, null, null, false, null, tmp0, $composer_0, 12582912 | 14 & $dirty >> 6, 126);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(IconButton$composable$lambda_0(modifier_0, colorMode, link_0, icon, iconSize_0, onClick_0, $changed, $default));
    }
  }
  function IconButton$composable$lambda$lambda($onClick) {
    return function (it) {
      var tmp0_safe_receiver = $onClick._v;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver();
      return Unit_getInstance();
    };
  }
  function IconButton$composable$lambda$lambda_0($iconSize, $icon) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1323523216, $changed, -1, 'com.example.mywebsite.components.IconButton$composable.<anonymous>.<anonymous> (IconButton.kt:40)');
        }
        var tmp0_modifier = size(Companion_getInstance_1(), $iconSize._v);
        Image$composable($icon, tmp0_modifier, null, null, null, null, false, null, $composer_0, 0, 252);
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
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function IconButton$composable$lambda($modifier, $colorMode, $onClick, $iconSize, $icon) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1722735498, $changed, -1, 'com.example.mywebsite.components.IconButton$composable.<anonymous> (IconButton.kt:27)');
        }
        var tmp_0 = cursor(borderRadius(padding($modifier._v, get_px(8)), get_px(Dimens_getInstance().get_BORDER_RADIUS_a3cxt0_k$())), Companion_getInstance_2().get_Pointer_m64vg4_k$());
        var tmp_1 = get_px(1);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
        Companion_getInstance_3();
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = border(tmp_0, tmp_1, 'solid', $colorMode.get_isLight_zemp0j_k$() ? Theme_SOCIAL_ICON_BACKGROUND_LIGHT_getInstance().get_color_ipu8u2_k$() : Theme_SOCIAL_ICON_BACKGROUND_DARK_getInstance().get_color_ipu8u2_k$());
        $composer_0.startReplaceableGroup_ip860b_k$(-1274763012);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changedInstance_s1wkiy_k$($onClick._v);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.mywebsite.components.IconButton$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = IconButton$composable$lambda$lambda($onClick);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmpCache = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        var tmp_5 = onClick(tmp_2, tmpCache);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.mywebsite.components.IconButton$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_6 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_6, 1323523216, true, IconButton$composable$lambda$lambda_0($iconSize, $icon));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_7;
        if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.mywebsite.components.IconButton$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_6(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = it_0;
        }
        var tmp_8 = tmp_7;
        var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Box$composable(tmp_5, null, null, tmp0, $composer_0, 3072, 6);
        var tmp_9;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_9 = Unit_getInstance();
        }
        tmp = tmp_9;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function IconButton$composable$lambda_0($modifier, $colorMode, $link, $icon, $iconSize, $onClick, $$changed, $$default) {
    return function ($composer, $force) {
      IconButton$composable($modifier._v, $colorMode, $link._v, $icon, $iconSize._v, $onClick._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SocialIcon_Github_getInstance() {
    SocialIcon_initEntries();
    return SocialIcon_Github_instance;
  }
  function SocialIcon_GithubLight_getInstance() {
    SocialIcon_initEntries();
    return SocialIcon_GithubLight_instance;
  }
  function SocialIcon_Gitlab_getInstance() {
    SocialIcon_initEntries();
    return SocialIcon_Gitlab_instance;
  }
  function SocialIcon_GitlabLight_getInstance() {
    SocialIcon_initEntries();
    return SocialIcon_GitlabLight_instance;
  }
  function SocialIcon_Instagram_getInstance() {
    SocialIcon_initEntries();
    return SocialIcon_Instagram_instance;
  }
  function SocialIcon_InstagramLight_getInstance() {
    SocialIcon_initEntries();
    return SocialIcon_InstagramLight_instance;
  }
  function SocialIcon_Linkedin_getInstance() {
    SocialIcon_initEntries();
    return SocialIcon_Linkedin_instance;
  }
  function SocialIcon_LinkedinLight_getInstance() {
    SocialIcon_initEntries();
    return SocialIcon_LinkedinLight_instance;
  }
  function LeftSide(colorMode, breakpoint) {
    illegalDecoyCallException('LeftSide');
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$LeftSideKt$lambda_1$lambda_5wjafm($this$Surface, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(791635518, $changed, -1, 'com.example.mywebsite.components.ComposableSingletons$LeftSideKt.lambda-1.<anonymous> (LeftSide.kt:74)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$LeftSideKt() {
    ComposableSingletons$LeftSideKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(791635518, false, ComposableSingletons$LeftSideKt$lambda_1$lambda_5wjafm));
  }
  protoOf(ComposableSingletons$LeftSideKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$LeftSideKt_instance;
  function ComposableSingletons$LeftSideKt_getInstance() {
    if (ComposableSingletons$LeftSideKt_instance == null)
      new ComposableSingletons$LeftSideKt();
    return ComposableSingletons$LeftSideKt_instance;
  }
  function LeftSide$composable(colorMode, breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(156569243);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(colorMode) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(156569243, $dirty, -1, 'com.example.mywebsite.components.LeftSide$composable (LeftSide.kt:31)');
      }
      var tmp = padding(fillMaxSize(Companion_getInstance_1()), get_px(50));
      var tmp_0 = Center_getInstance();
      var tmp_1 = breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) <= 0 ? CenterHorizontally_getInstance() : Start_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.mywebsite.components.LeftSide$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 2000894756, true, LeftSide$composable$lambda(colorMode, breakpoint));
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
      var tmp_3;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.mywebsite.components.LeftSide$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_11(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_3 = value;
      } else {
        tmp_3 = it;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column$composable(tmp, tmp_0, tmp_1, null, tmp0, $composer_0, 24624, 8);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(LeftSide$composable$lambda_0(colorMode, breakpoint, $changed));
    }
  }
  function LeftSide$composable$lambda$lambda(it) {
    window.location.href = String_getInstance().get_MY_EMAIL_blk9hq_k$();
    return Unit_getInstance();
  }
  function LeftSide$composable$lambda$lambda_0($colorMode) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1458010828, $changed, -1, 'com.example.mywebsite.components.LeftSide$composable.<anonymous>.<anonymous> (LeftSide.kt:95)');
        }
        var tmp0_modifier = margin(Companion_getInstance_1(), VOID, get_px(12));
        var tmp1_src = $colorMode.get_isLight_zemp0j_k$() ? Icon_getInstance().get_EMAIL_LIGHT_uahkay_k$() : Icon_getInstance().get_EMAIL_DARK_a4zb36_k$();
        Image$composable(tmp1_src, tmp0_modifier, null, null, null, null, false, null, $composer_0, 0, 252);
        var tmp2_modifier = fontFamily(fontWeight(color(fontSize(Companion_getInstance_1(), get_px(14)), $colorMode.get_isLight_zemp0j_k$() ? Colors_getInstance().get_White_ij46ow_k$() : Theme_GRADIENT_ONE_DARK_getInstance().get_color_ipu8u2_k$()), Companion_getInstance_4().get_Bold_wnz5ke_k$()), [String_getInstance().get_ROBOTO_REGULAR_ghge4r_k$()]);
        var tmp3_text = String_getInstance().get_BUTTON_TEXT_kw3t81_k$();
        SpanText$composable(tmp3_text, tmp2_modifier, null, null, $composer_0, 6, 12);
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
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function LeftSide$composable$lambda$lambda_1($colorMode) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(834441985, $changed, -1, 'com.example.mywebsite.components.LeftSide$composable.<anonymous>.<anonymous> (LeftSide.kt:119)');
        }
        // Inline function 'kotlin.collections.forEach' call
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterTo' call
        var this_0 = get_entries();
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.example.mywebsite.components.LeftSide$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if ($colorMode.get_isLight_zemp0j_k$() ? !contains(element.get_name_woqyms_k$(), 'Light') : contains(element.get_name_woqyms_k$(), 'Light')) {
            destination.add_utx5q5_k$(element);
          }
        }
        var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'com.example.mywebsite.components.LeftSide$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp0_modifier = toModifier$composable(get_SocialIconStyle(), [], $composer_0, 64);
          var tmp1_icon = element_0.get_icon_wont8i_k$();
          var tmp2_link = element_0.get_link_wopumb_k$();
          IconButton$composable(tmp0_modifier, $colorMode, tmp2_link, tmp1_icon, null, null, $composer_0, 0, 48);
        }
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
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function LeftSide$composable$lambda($colorMode, $breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Column) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(2000894756, $dirty, -1, 'com.example.mywebsite.components.LeftSide$composable.<anonymous> (LeftSide.kt:40)');
        }
        var tmp_1 = String_getInstance().get_NAME_wo5uj8_k$();
        var tmp_2 = textAlign(fontWeight(fontSize(color(fontFamily(margin_0(Companion_getInstance_1(), VOID, VOID, get_px(12)), [String_getInstance().get_ROBOTO_CONDENSED_j3kcyy_k$()]), $colorMode.get_isLight_zemp0j_k$() ? Colors_getInstance().get_Black_i7mvue_k$() : Colors_getInstance().get_White_ij46ow_k$()), get_px(50)), Companion_getInstance_4().get_Bold_wnz5ke_k$()), $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) <= 0 ? Companion_getInstance_5().get_Center_3arb0i_k$() : Companion_getInstance_5().get_Start_ih4i6x_k$());
        SpanText$composable(tmp_1, tmp_2, null, null, $composer_0, 6, 12);
        var tmp_3 = String_getInstance().get_PROFESSION_w5zyij_k$();
        var tmp_4 = fontSize(color(fontFamily(margin_0(Companion_getInstance_1(), VOID, VOID, get_px(24)), [String_getInstance().get_ROBOTO_REGULAR_ghge4r_k$()]), $colorMode.get_isLight_zemp0j_k$() ? Colors_getInstance().get_Black_i7mvue_k$() : Colors_getInstance().get_White_ij46ow_k$()), get_px(18));
        SpanText$composable(tmp_3, tmp_4, null, null, $composer_0, 6, 12);
        var tmp_5 = $this$Column.align_45bqjp_k$(background(margin_0(width(height(Companion_getInstance_1(), get_px(4)), get_px(40)), VOID, VOID, get_px(24)), $colorMode.get_isLight_zemp0j_k$() ? Theme_BLUE_getInstance().get_color_ipu8u2_k$() : Theme_LIGHT_BLUE_getInstance().get_color_ipu8u2_k$(), []), $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) <= 0 ? CenterHorizontally_getInstance() : Start_getInstance());
        Surface$composable(tmp_5, null, null, null, null, ComposableSingletons$LeftSideKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 196608, 30);
        var tmp0_modifier = textAlign(margin_0(lineHeight(opacity(color(fontSize(fontFamily(Companion_getInstance_1(), [String_getInstance().get_ROBOTO_REGULAR_ghge4r_k$()]), get_px(14)), $colorMode.get_isLight_zemp0j_k$() ? Colors_getInstance().get_Black_i7mvue_k$() : Colors_getInstance().get_White_ij46ow_k$()), get_percent(50)), 2), VOID, VOID, get_px(36)), $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) <= 0 ? Companion_getInstance_5().get_Center_3arb0i_k$() : Companion_getInstance_5().get_Start_ih4i6x_k$());
        var tmp1_text = String_getInstance().get_ABOUT_ME_7x5wtv_k$();
        SpanText$composable(tmp1_text, tmp0_modifier, null, null, $composer_0, 6, 12);
        var tmp2_modifier = margin_0(toModifier$composable(get_ButtonStyle(), [], $composer_0, 64), VOID, VOID, get_px(50));
        var tmp3_size = LG_getInstance();
        $composer_0.startReplaceableGroup_ip860b_k$(1426379120);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.mywebsite.components.LeftSide$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = LeftSide$composable$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_6 = value;
        } else {
          tmp_6 = it;
        }
        var tmp_7 = tmp_6;
        var tmpCache = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.mywebsite.components.LeftSide$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_8 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_8, -1458010828, true, LeftSide$composable$lambda$lambda_0($colorMode));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_9;
        if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.mywebsite.components.LeftSide$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_9(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_9 = value_0;
        } else {
          tmp_9 = it_0;
        }
        var tmp_10 = tmp_9;
        var tmp0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Button$composable(tmpCache, tmp2_modifier, null, null, false, tmp3_size, null, null, null, tmp0, $composer_0, 805502976, 476);
        var tmp_11 = gap(fillMaxWidth(Companion_getInstance_1()), get_px(12));
        var tmp_12 = $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) <= 0 ? Center_getInstance() : Start_getInstance_0();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.mywebsite.components.LeftSide$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_13 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_13, 834441985, true, LeftSide$composable$lambda$lambda_1($colorMode));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_14;
        if (invalid_0 ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.mywebsite.components.LeftSide$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_10(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_1);
          tmp_14 = value_1;
        } else {
          tmp_14 = it_1;
        }
        var tmp_15 = tmp_14;
        var tmp0_0 = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        Row$composable(tmp_11, tmp_12, null, null, tmp0_0, $composer_0, 24576, 12);
        var tmp_16;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_16 = Unit_getInstance();
        }
        tmp_0 = tmp_16;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function LeftSide$composable$lambda_0($colorMode, $breakpoint, $$changed) {
    return function ($composer, $force) {
      LeftSide$composable($colorMode, $breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ProfileCard(colorMode) {
    illegalDecoyCallException('ProfileCard');
  }
  function ProfileCard$composable(colorMode, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(55127963);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(colorMode) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(55127963, $dirty, -1, 'com.example.mywebsite.components.ProfileCard$composable (ProfileCard.kt:17)');
      }
      var breakpoint = rememberBreakpoint$composable($composer_0, 0);
      var tmp = numColumns(1, VOID, 2);
      var tmp0_$receiver = thenIf(fillMaxWidth(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) <= 0 ? get_percent(100) : get_px(Dimens_getInstance().get_MAX_CARD_WIDTH_tzcivv_k$())), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0, height(Companion_getInstance_1(), get_px(Dimens_getInstance().get_MAX_CARD_HEIGHT_14h166_k$())));
      var tmp1_color = Colors_getInstance().get_Black_i7mvue_k$().copy$default_mtju0j_k$(VOID, VOID, VOID, 10);
      var tmp2_blurRadius = get_px(50);
      var tmp3_spreadRadius = get_px(50);
      var tmp_0 = background(borderRadius(padding(boxShadow(tmp0_$receiver, VOID, VOID, tmp2_blurRadius, tmp3_spreadRadius, tmp1_color), get_px(12)), get_px(Dimens_getInstance().get_BORDER_RADIUS_a3cxt0_k$())), colorMode.get_isLight_zemp0j_k$() ? Colors_getInstance().get_White_ij46ow_k$() : Theme_DARK_BLUE_getInstance().get_color_ipu8u2_k$(), []);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.mywebsite.components.ProfileCard$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1199285179, true, ProfileCard$composable$lambda(colorMode, breakpoint));
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
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.mywebsite.components.ProfileCard$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_12(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      SimpleGrid$composable(tmp, tmp_0, null, null, tmp0, $composer_0, 24576, 12);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(ProfileCard$composable$lambda_0(colorMode, $changed));
    }
  }
  function ProfileCard$composable$lambda($colorMode, $breakpoint) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1199285179, $changed, -1, 'com.example.mywebsite.components.ProfileCard$composable.<anonymous> (ProfileCard.kt:42)');
        }
        LeftSide$composable($colorMode, $breakpoint, $composer_0, 0);
        RightSide$composable($breakpoint, $composer_0, 0);
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
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ProfileCard$composable$lambda_0($colorMode, $$changed) {
    return function ($composer, $force) {
      ProfileCard$composable($colorMode, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function RightSide(breakpoint) {
    illegalDecoyCallException('RightSide');
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$RightSideKt$lambda_1$lambda_aifiuh($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-78540995, $changed, -1, 'com.example.mywebsite.components.ComposableSingletons$RightSideKt.lambda-1.<anonymous> (RightSide.kt:26)');
      }
      var tmp0_modifier = objectFit(fillMaxSize(Companion_getInstance_1()), Companion_getInstance_6().get_Cover_i8910u_k$());
      var tmp1_src = Image_getInstance().get_PROFILE_PHOTO_hfe98t_k$();
      Image$composable(tmp1_src, tmp0_modifier, null, null, null, null, false, null, $composer_0, 6, 252);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RightSideKt() {
    ComposableSingletons$RightSideKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-78540995, false, ComposableSingletons$RightSideKt$lambda_1$lambda_aifiuh));
  }
  protoOf(ComposableSingletons$RightSideKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$RightSideKt_instance;
  function ComposableSingletons$RightSideKt_getInstance() {
    if (ComposableSingletons$RightSideKt_instance == null)
      new ComposableSingletons$RightSideKt();
    return ComposableSingletons$RightSideKt_instance;
  }
  function RightSide$composable(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-126266026);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-126266026, $dirty, -1, 'com.example.mywebsite.components.RightSide$composable (RightSide.kt:17)');
      }
      var tmp = thenIf(fillMaxWidth(Companion_getInstance_1()), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0, height(Companion_getInstance_1(), get_px(Dimens_getInstance().get_MAX_CARD_HEIGHT_14h166_k$() - 24 | 0)));
      Box$composable(tmp, null, null, ComposableSingletons$RightSideKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3072, 6);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(RightSide$composable$lambda(breakpoint, $changed));
    }
  }
  function RightSide$composable$lambda($breakpoint, $$changed) {
    return function ($composer, $force) {
      RightSide$composable($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ThemeSwitchButton(colorMode, onClick) {
    illegalDecoyCallException('ThemeSwitchButton');
  }
  function ThemeSwitchButton$composable(colorMode, onClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-160046036);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(colorMode) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-160046036, $dirty, -1, 'com.example.mywebsite.components.ThemeSwitchButton$composable (ThemeSwitchButton.kt:27)');
      }
      var breakpoint = rememberBreakpoint$composable($composer_0, 0);
      var tmp = fillMaxSize(Companion_getInstance_1());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      Companion_getInstance_7();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = zIndex(position(tmp, 'fixed'), 1);
      $composer_0.startReplaceableGroup_ip860b_k$(-617992450);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.mywebsite.components.ThemeSwitchButton$composable.<anonymous>' call
        var value = ThemeSwitchButton$composable$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_3 = styleModifier(tmp_0, tmpCache);
      var tmp_4 = Top_getInstance();
      var tmp_5 = End_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.mywebsite.components.ThemeSwitchButton$composable.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_6, -1544214955, true, ThemeSwitchButton$composable$lambda_0(breakpoint, colorMode, onClick));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.mywebsite.components.ThemeSwitchButton$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_14(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_7 = value_0;
      } else {
        tmp_7 = it_0;
      }
      var tmp_8 = tmp_7;
      var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column$composable(tmp_3, tmp_4, tmp_5, null, tmp0, $composer_0, 25008, 8);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(ThemeSwitchButton$composable$lambda_1(colorMode, onClick, $changed));
    }
  }
  function ThemeSwitchButton$composable$lambda($this$styleModifier) {
    $this$styleModifier.property_wcrait_k$('pointer-events', 'none');
    return Unit_getInstance();
  }
  function ThemeSwitchButton$composable$lambda$lambda($this$styleModifier) {
    $this$styleModifier.property_wcrait_k$('pointer-events', 'auto');
    return Unit_getInstance();
  }
  function ThemeSwitchButton$composable$lambda_0($breakpoint, $colorMode, $onClick) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1544214955, $changed, -1, 'com.example.mywebsite.components.ThemeSwitchButton$composable.<anonymous> (ThemeSwitchButton.kt:40)');
        }
        var tmp_0 = margin_1(toModifier$composable(get_ThemeIconStyle(), [], $composer_0, 64), $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) > 0 ? get_px(24) : get_px(16));
        $composer_0.startReplaceableGroup_ip860b_k$(-617992101);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.mywebsite.components.ThemeSwitchButton$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = ThemeSwitchButton$composable$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmpCache = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        var tmp_3 = styleModifier(tmp_0, tmpCache);
        IconButton$composable(tmp_3, $colorMode, null, $colorMode.get_isLight_zemp0j_k$() ? Icon_getInstance().get_SUN_18jkfx_k$() : Icon_getInstance().get_MOON_wo5hze_k$(), $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) > 0 ? get_px(Dimens_getInstance().get_ICON_SIZE_LG_he0w4_k$()) : get_px(Dimens_getInstance().get_ICON_SIZE_w3c7z2_k$()), $onClick, $composer_0, 0, 4);
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
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ThemeSwitchButton$composable$lambda_1($colorMode, $onClick, $$changed) {
    return function ($composer, $force) {
      ThemeSwitchButton$composable($colorMode, $onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HomePage() {
    illegalDecoyCallException('HomePage');
  }
  function HomePage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(691499624);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(691499624, $changed, -1, 'com.example.mywebsite.pages.HomePage$composable (Index.kt:19)');
      }
      var colorMode$delegate = Companion_getInstance_8().$get_currentState$$composable_9iiwnt_k$($composer_0, 6);
      var tmp = HomePage$composable$lambda(colorMode$delegate);
      $composer_0.startReplaceableGroup_ip860b_k$(-584273964);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changed_ga7h3f_k$(colorMode$delegate);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.mywebsite.pages.HomePage$composable.<anonymous>' call
        var value = HomePage$composable$slambda_0(colorMode$delegate, null);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      LaunchedEffect$composable(tmp, tmpCache, $composer_0, 0);
      var tmp_2 = HomePage$composable$lambda(colorMode$delegate);
      $composer_0.startReplaceableGroup_ip860b_k$(-584273739);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid_0 = $composer_0.changed_ga7h3f_k$(colorMode$delegate);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.mywebsite.pages.HomePage$composable.<anonymous>' call
        var value_0 = HomePage$composable$lambda_1(colorMode$delegate);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmpCache_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      ThemeSwitchButton$composable(tmp_2, tmpCache_0, $composer_0, 0);
      var tmp_5 = backgroundImage(fillMaxSize(Companion_getInstance_1()), linearGradient(Direction_ToRight_getInstance(), HomePage$composable$lambda(colorMode$delegate).get_isLight_zemp0j_k$() ? Theme_GRADIENT_ONE_getInstance().get_color_ipu8u2_k$() : Theme_GRADIENT_ONE_DARK_getInstance().get_color_ipu8u2_k$(), HomePage$composable$lambda(colorMode$delegate).get_isLight_zemp0j_k$() ? Theme_GRADIENT_TWO_getInstance().get_color_ipu8u2_k$() : Theme_GRADIENT_TWO_DARK_getInstance().get_color_ipu8u2_k$()));
      var tmp_6 = Center_getInstance_0();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.mywebsite.pages.HomePage$composable.<anonymous>' call
      var tmp_7 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_7, -1608065818, true, HomePage$composable$lambda_2(colorMode$delegate));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_8;
      if (invalid_1 ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.mywebsite.pages.HomePage$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_15(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_8 = value_1;
      } else {
        tmp_8 = it_1;
      }
      var tmp_9 = tmp_8;
      var tmp0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Box$composable(tmp_5, tmp_6, null, tmp0, $composer_0, 3120, 4);
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
      tmp0_safe_receiver.updateScope_t8jcf_k$(HomePage$composable$lambda_3($changed));
    }
  }
  function HomePage$composable$lambda($colorMode$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('colorMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $colorMode$delegate.get_value_j01efc_k$();
  }
  function HomePage$composable$lambda_0($colorMode$delegate, value) {
    getLocalDelegateReference('colorMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $colorMode$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function HomePage$composable$slambda($colorMode$delegate, resultContinuation) {
    this.$colorMode$delegate_1 = $colorMode$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HomePage$composable$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(HomePage$composable$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HomePage$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp0_elvis_lhs = localStorage.getItem(String_getInstance().get_SAVED_THEME_fqhk8_k$());
          var savedTheme = tmp0_elvis_lhs == null ? 'LIGHT' : tmp0_elvis_lhs;
          HomePage$composable$lambda_0(this.$colorMode$delegate_1, valueOf(savedTheme));
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HomePage$composable$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new HomePage$composable$slambda(this.$colorMode$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(HomePage$composable$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function HomePage$composable$slambda_0($colorMode$delegate, resultContinuation) {
    var i = new HomePage$composable$slambda($colorMode$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HomePage$composable$lambda_1($colorMode$delegate) {
    return function () {
      HomePage$composable$lambda_0($colorMode$delegate, HomePage$composable$lambda($colorMode$delegate).get_opposite_ywslzk_k$());
      localStorage.setItem(String_getInstance().get_SAVED_THEME_fqhk8_k$(), HomePage$composable$lambda($colorMode$delegate).get_name_woqyms_k$());
      return Unit_getInstance();
    };
  }
  function HomePage$composable$lambda_2($colorMode$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1608065818, $changed, -1, 'com.example.mywebsite.pages.HomePage$composable.<anonymous> (Index.kt:49)');
        }
        ProfileCard$composable(HomePage$composable$lambda($colorMode$delegate), $composer_0, 0);
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
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function HomePage$composable$lambda_3($$changed) {
    return function ($composer, $force) {
      HomePage$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_ButtonStyle() {
    _init_properties_ButtonStyle_kt__gkuc2b();
    return ButtonStyle$delegate.getValue_fbnwi2_k$(null, ButtonStyle$factory());
  }
  var ButtonStyle$delegate;
  function ButtonStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_ButtonStyle_kt__gkuc2b();
    $this$ComponentStyle.base_y8uu8g_k$(ButtonStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle);
    tmp.invoke_ts7809_k$(ButtonStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function ButtonStyle$delegate$lambda$lambda() {
    _init_properties_ButtonStyle_kt__gkuc2b();
    return transition(padding_0(Companion_getInstance_1(), VOID, get_px(12)), [new CSSTransition(Companion_getInstance_9().get_All_18jx7s_k$(), get_ms(300))]);
  }
  function ButtonStyle$delegate$lambda$lambda_0() {
    _init_properties_ButtonStyle_kt__gkuc2b();
    return padding_0(Companion_getInstance_1(), VOID, get_px(20));
  }
  function ButtonStyle$factory() {
    return getPropertyCallableRef('ButtonStyle', 0, KProperty0, function () {
      return get_ButtonStyle();
    }, null);
  }
  var properties_initialized_ButtonStyle_kt_79ocgh;
  function _init_properties_ButtonStyle_kt__gkuc2b() {
    if (!properties_initialized_ButtonStyle_kt_79ocgh) {
      properties_initialized_ButtonStyle_kt_79ocgh = true;
      ButtonStyle$delegate = ComponentStyle(VOID, VOID, ButtonStyle$delegate$lambda);
    }
  }
  function get_SocialIconStyle() {
    _init_properties_IconStyle_kt__l78sai();
    return SocialIconStyle$delegate.getValue_fbnwi2_k$(null, SocialIconStyle$factory());
  }
  var SocialIconStyle$delegate;
  function get_ThemeIconStyle() {
    _init_properties_IconStyle_kt__l78sai();
    return ThemeIconStyle$delegate.getValue_fbnwi2_k$(null, ThemeIconStyle$factory());
  }
  var ThemeIconStyle$delegate;
  function SocialIconStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_IconStyle_kt__l78sai();
    $this$ComponentStyle.base_y8uu8g_k$(SocialIconStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle);
    tmp.invoke_ts7809_k$(SocialIconStyle$delegate$lambda$lambda_0($this$ComponentStyle));
    return Unit_getInstance();
  }
  function SocialIconStyle$delegate$lambda$lambda() {
    _init_properties_IconStyle_kt__l78sai();
    return transition(background(rotate(Companion_getInstance_1(), get_deg(0)), Colors_getInstance().get_Transparent_cxh4g9_k$(), []), [CSSTransition_init_$Create$('rotate', get_ms(300)), CSSTransition_init_$Create$('background', get_ms(300))]);
  }
  function SocialIconStyle$delegate$lambda$lambda_0($this_ComponentStyle) {
    return function () {
      return background(rotate(Companion_getInstance_1(), get_deg(10)), $this_ComponentStyle.get_colorMode_trbg8z_k$().get_isLight_zemp0j_k$() ? Theme_SOCIAL_ICON_BACKGROUND_LIGHT_getInstance().get_color_ipu8u2_k$() : Theme_SOCIAL_ICON_BACKGROUND_DARK_getInstance().get_color_ipu8u2_k$(), []);
    };
  }
  function ThemeIconStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_IconStyle_kt__l78sai();
    $this$ComponentStyle.base_y8uu8g_k$(ThemeIconStyle$delegate$lambda$lambda($this$ComponentStyle));
    var tmp = get_hover($this$ComponentStyle);
    tmp.invoke_ts7809_k$(ThemeIconStyle$delegate$lambda$lambda_0($this$ComponentStyle));
    return Unit_getInstance();
  }
  function ThemeIconStyle$delegate$lambda$lambda($this_ComponentStyle) {
    return function () {
      return transition(background(Companion_getInstance_1(), $this_ComponentStyle.get_colorMode_trbg8z_k$().get_isLight_zemp0j_k$() ? Colors_getInstance().get_White_ij46ow_k$() : Theme_DARK_BLUE_getInstance().get_color_ipu8u2_k$(), []), [CSSTransition_init_$Create$('background', get_ms(300))]);
    };
  }
  function ThemeIconStyle$delegate$lambda$lambda_0($this_ComponentStyle) {
    return function () {
      return background(Companion_getInstance_1(), $this_ComponentStyle.get_colorMode_trbg8z_k$().get_isLight_zemp0j_k$() ? Theme_SOCIAL_ICON_BACKGROUND_LIGHT_getInstance().get_color_ipu8u2_k$() : Theme_SOCIAL_ICON_BACKGROUND_DARK_getInstance().get_color_ipu8u2_k$(), []);
    };
  }
  function SocialIconStyle$factory() {
    return getPropertyCallableRef('SocialIconStyle', 0, KProperty0, function () {
      return get_SocialIconStyle();
    }, null);
  }
  function ThemeIconStyle$factory() {
    return getPropertyCallableRef('ThemeIconStyle', 0, KProperty0, function () {
      return get_ThemeIconStyle();
    }, null);
  }
  var properties_initialized_IconStyle_kt_mmvpug;
  function _init_properties_IconStyle_kt__l78sai() {
    if (!properties_initialized_IconStyle_kt_mmvpug) {
      properties_initialized_IconStyle_kt_mmvpug = true;
      SocialIconStyle$delegate = ComponentStyle(VOID, VOID, SocialIconStyle$delegate$lambda);
      ThemeIconStyle$delegate = ComponentStyle(VOID, VOID, ThemeIconStyle$delegate$lambda);
    }
  }
  var Theme_BLUE_instance;
  var Theme_LIGHT_BLUE_instance;
  var Theme_DARK_BLUE_instance;
  var Theme_SOCIAL_ICON_BACKGROUND_LIGHT_instance;
  var Theme_SOCIAL_ICON_BACKGROUND_DARK_instance;
  var Theme_GRADIENT_ONE_instance;
  var Theme_GRADIENT_ONE_DARK_instance;
  var Theme_GRADIENT_TWO_instance;
  var Theme_GRADIENT_TWO_DARK_instance;
  function values_0() {
    return [Theme_BLUE_getInstance(), Theme_LIGHT_BLUE_getInstance(), Theme_DARK_BLUE_getInstance(), Theme_SOCIAL_ICON_BACKGROUND_LIGHT_getInstance(), Theme_SOCIAL_ICON_BACKGROUND_DARK_getInstance(), Theme_GRADIENT_ONE_getInstance(), Theme_GRADIENT_ONE_DARK_getInstance(), Theme_GRADIENT_TWO_getInstance(), Theme_GRADIENT_TWO_DARK_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'BLUE':
        return Theme_BLUE_getInstance();
      case 'LIGHT_BLUE':
        return Theme_LIGHT_BLUE_getInstance();
      case 'DARK_BLUE':
        return Theme_DARK_BLUE_getInstance();
      case 'SOCIAL_ICON_BACKGROUND_LIGHT':
        return Theme_SOCIAL_ICON_BACKGROUND_LIGHT_getInstance();
      case 'SOCIAL_ICON_BACKGROUND_DARK':
        return Theme_SOCIAL_ICON_BACKGROUND_DARK_getInstance();
      case 'GRADIENT_ONE':
        return Theme_GRADIENT_ONE_getInstance();
      case 'GRADIENT_ONE_DARK':
        return Theme_GRADIENT_ONE_DARK_getInstance();
      case 'GRADIENT_TWO':
        return Theme_GRADIENT_TWO_getInstance();
      case 'GRADIENT_TWO_DARK':
        return Theme_GRADIENT_TWO_DARK_getInstance();
      default:
        Theme_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Theme_entriesInitialized;
  function Theme_initEntries() {
    if (Theme_entriesInitialized)
      return Unit_getInstance();
    Theme_entriesInitialized = true;
    Theme_BLUE_instance = new Theme('BLUE', 0, Companion_getInstance_10().rgb_udwlgr_k$(33, 150, 243));
    Theme_LIGHT_BLUE_instance = new Theme('LIGHT_BLUE', 1, Companion_getInstance_10().rgb_udwlgr_k$(168, 236, 255));
    Theme_DARK_BLUE_instance = new Theme('DARK_BLUE', 2, Companion_getInstance_10().rgb_udwlgr_k$(34, 63, 94));
    Theme_SOCIAL_ICON_BACKGROUND_LIGHT_instance = new Theme('SOCIAL_ICON_BACKGROUND_LIGHT', 3, Companion_getInstance_10().rgb_udwlgr_k$(230, 230, 230));
    Theme_SOCIAL_ICON_BACKGROUND_DARK_instance = new Theme('SOCIAL_ICON_BACKGROUND_DARK', 4, Companion_getInstance_10().rgb_udwlgr_k$(48, 82, 118));
    Theme_GRADIENT_ONE_instance = new Theme('GRADIENT_ONE', 5, Companion_getInstance_10().rgb_udwlgr_k$(161, 196, 253));
    Theme_GRADIENT_ONE_DARK_instance = new Theme('GRADIENT_ONE_DARK', 6, Companion_getInstance_10().rgb_udwlgr_k$(19, 38, 58));
    Theme_GRADIENT_TWO_instance = new Theme('GRADIENT_TWO', 7, Companion_getInstance_10().rgb_udwlgr_k$(194, 233, 251));
    Theme_GRADIENT_TWO_DARK_instance = new Theme('GRADIENT_TWO_DARK', 8, Companion_getInstance_10().rgb_udwlgr_k$(20, 46, 73));
  }
  var $ENTRIES_0;
  function get_$stableprop() {
    return 0;
  }
  function get_$stableprop_0() {
    return 0;
  }
  function get_$stableprop_1() {
    return 0;
  }
  function get_$stableprop_2() {
    return 0;
  }
  function Theme(name, ordinal, color) {
    Enum.call(this, name, ordinal);
    this.color_1 = color;
  }
  protoOf(Theme).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  function Icon() {
    Icon_instance = this;
    this.EMAIL_LIGHT_1 = 'mail.svg';
    this.EMAIL_DARK_1 = 'mail_light.svg';
    this.GITHUB_1 = 'github.svg';
    this.GITHUB_LIGHT_1 = 'github_light.svg';
    this.INSTAGRAM_1 = 'instagram.svg';
    this.INSTAGRAM_LIGHT_1 = 'instagram_light.svg';
    this.GITLAB_1 = 'gitlab.svg';
    this.GITLAB_LIGHT_1 = 'gitlab_light.svg';
    this.LINKEDIN_1 = 'linkedin.svg';
    this.LINKEDIN_LIGHT_1 = 'linkedin_light.svg';
    this.SUN_1 = 'sun.svg';
    this.MOON_1 = 'moon.svg';
    this.$stable_1 = 0;
  }
  protoOf(Icon).get_EMAIL_LIGHT_uahkay_k$ = function () {
    return this.EMAIL_LIGHT_1;
  };
  protoOf(Icon).get_EMAIL_DARK_a4zb36_k$ = function () {
    return this.EMAIL_DARK_1;
  };
  protoOf(Icon).get_GITHUB_1ugkr8_k$ = function () {
    return this.GITHUB_1;
  };
  protoOf(Icon).get_GITHUB_LIGHT_kqoyqr_k$ = function () {
    return this.GITHUB_LIGHT_1;
  };
  protoOf(Icon).get_INSTAGRAM_fybcif_k$ = function () {
    return this.INSTAGRAM_1;
  };
  protoOf(Icon).get_INSTAGRAM_LIGHT_ba8c0w_k$ = function () {
    return this.INSTAGRAM_LIGHT_1;
  };
  protoOf(Icon).get_GITLAB_1ugi9o_k$ = function () {
    return this.GITLAB_1;
  };
  protoOf(Icon).get_GITLAB_LIGHT_z0vy4b_k$ = function () {
    return this.GITLAB_LIGHT_1;
  };
  protoOf(Icon).get_LINKEDIN_wb2yv_k$ = function () {
    return this.LINKEDIN_1;
  };
  protoOf(Icon).get_LINKEDIN_LIGHT_8ex18e_k$ = function () {
    return this.LINKEDIN_LIGHT_1;
  };
  protoOf(Icon).get_SUN_18jkfx_k$ = function () {
    return this.SUN_1;
  };
  protoOf(Icon).get_MOON_wo5hze_k$ = function () {
    return this.MOON_1;
  };
  var Icon_instance;
  function Icon_getInstance() {
    if (Icon_instance == null)
      new Icon();
    return Icon_instance;
  }
  function Image() {
    Image_instance = this;
    this.PROFILE_PHOTO_1 = 'photo.jpg';
    this.$stable_1 = 0;
  }
  protoOf(Image).get_PROFILE_PHOTO_hfe98t_k$ = function () {
    return this.PROFILE_PHOTO_1;
  };
  var Image_instance;
  function Image_getInstance() {
    if (Image_instance == null)
      new Image();
    return Image_instance;
  }
  function String_0() {
    String_instance = this;
    this.NAME_1 = 'Kaan Enes KAPICI';
    this.PROFESSION_1 = 'Mobile App Engineer Specialist';
    this.ABOUT_ME_1 = "Hey, I''m Kaan.\nI am a Google Developer Community Lead for Kotlin, Technical Writer and Speaker. I also build open-source software on GitHub to make everyone's use and implement their projects.\nWhen I'm not coding, I'm into football \u26BD, video games \uD83C\uDF89, Formula 1 \uD83C\uDFCE\uFE0F and entrepreneurship jobs \uD83D\uDE80\n";
    this.BUTTON_TEXT_1 = 'Get in touch';
    this.ROBOTO_CONDENSED_1 = 'RobotoCondensedBold';
    this.ROBOTO_REGULAR_1 = 'RobotoRegular';
    this.MY_EMAIL_1 = 'mailto:kaaneneskpc1@gmail.com';
    this.SAVED_THEME_1 = 'theme';
    this.$stable_1 = 0;
  }
  protoOf(String_0).get_NAME_wo5uj8_k$ = function () {
    return this.NAME_1;
  };
  protoOf(String_0).get_PROFESSION_w5zyij_k$ = function () {
    return this.PROFESSION_1;
  };
  protoOf(String_0).get_ABOUT_ME_7x5wtv_k$ = function () {
    return this.ABOUT_ME_1;
  };
  protoOf(String_0).get_BUTTON_TEXT_kw3t81_k$ = function () {
    return this.BUTTON_TEXT_1;
  };
  protoOf(String_0).get_ROBOTO_CONDENSED_j3kcyy_k$ = function () {
    return this.ROBOTO_CONDENSED_1;
  };
  protoOf(String_0).get_ROBOTO_REGULAR_ghge4r_k$ = function () {
    return this.ROBOTO_REGULAR_1;
  };
  protoOf(String_0).get_MY_EMAIL_blk9hq_k$ = function () {
    return this.MY_EMAIL_1;
  };
  protoOf(String_0).get_SAVED_THEME_fqhk8_k$ = function () {
    return this.SAVED_THEME_1;
  };
  var String_instance;
  function String_getInstance() {
    if (String_instance == null)
      new String_0();
    return String_instance;
  }
  function Dimens() {
    Dimens_instance = this;
    this.BORDER_RADIUS_1 = 8;
    this.MAX_CARD_WIDTH_1 = 1000;
    this.MAX_CARD_HEIGHT_1 = 600;
    this.ICON_SIZE_1 = 24;
    this.ICON_SIZE_LG_1 = 32;
    this.$stable_1 = 0;
  }
  protoOf(Dimens).get_BORDER_RADIUS_a3cxt0_k$ = function () {
    return this.BORDER_RADIUS_1;
  };
  protoOf(Dimens).get_MAX_CARD_WIDTH_tzcivv_k$ = function () {
    return this.MAX_CARD_WIDTH_1;
  };
  protoOf(Dimens).get_MAX_CARD_HEIGHT_14h166_k$ = function () {
    return this.MAX_CARD_HEIGHT_1;
  };
  protoOf(Dimens).get_ICON_SIZE_w3c7z2_k$ = function () {
    return this.ICON_SIZE_1;
  };
  protoOf(Dimens).get_ICON_SIZE_LG_he0w4_k$ = function () {
    return this.ICON_SIZE_LG_1;
  };
  var Dimens_instance;
  function Dimens_getInstance() {
    if (Dimens_instance == null)
      new Dimens();
    return Dimens_instance;
  }
  function get_$stableprop_3() {
    return 0;
  }
  function Theme_BLUE_getInstance() {
    Theme_initEntries();
    return Theme_BLUE_instance;
  }
  function Theme_LIGHT_BLUE_getInstance() {
    Theme_initEntries();
    return Theme_LIGHT_BLUE_instance;
  }
  function Theme_DARK_BLUE_getInstance() {
    Theme_initEntries();
    return Theme_DARK_BLUE_instance;
  }
  function Theme_SOCIAL_ICON_BACKGROUND_LIGHT_getInstance() {
    Theme_initEntries();
    return Theme_SOCIAL_ICON_BACKGROUND_LIGHT_instance;
  }
  function Theme_SOCIAL_ICON_BACKGROUND_DARK_getInstance() {
    Theme_initEntries();
    return Theme_SOCIAL_ICON_BACKGROUND_DARK_instance;
  }
  function Theme_GRADIENT_ONE_getInstance() {
    Theme_initEntries();
    return Theme_GRADIENT_ONE_instance;
  }
  function Theme_GRADIENT_ONE_DARK_getInstance() {
    Theme_initEntries();
    return Theme_GRADIENT_ONE_DARK_instance;
  }
  function Theme_GRADIENT_TWO_getInstance() {
    Theme_initEntries();
    return Theme_GRADIENT_TWO_instance;
  }
  function Theme_GRADIENT_TWO_DARK_getInstance() {
    Theme_initEntries();
    return Theme_GRADIENT_TWO_DARK_instance;
  }
  function Res() {
    Res_instance = this;
    this.$stable_1 = 0;
  }
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  main();
  return _;
}));

//# sourceMappingURL=mywebsite.js.map
