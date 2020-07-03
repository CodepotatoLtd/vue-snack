(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueTwackPlugin = factory());
}(this, (function () { 'use strict';

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);

  return css;
}

___$insertStyle(".twackbar {\n  --primary: #4299E1;\n  --background: #2D3748;\n  --text: #E3E3E3;\n  --font: sans-serif;\n  --times: 1rem;\n  --padd: 1rem;\n  --radius: 0.25rem; }\n\n.twackbar {\n  font-size: 1rem;\n  background-color: var(--background);\n  color: var(--text);\n  font-family: var(--font);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: fixed;\n  min-height: var(--times);\n  padding: var(--padd);\n  border-radius: var(--radius); }\n  @media screen and (max-width: 576px) {\n    .twackbar {\n      border-radius: 0;\n      width: calc(100% - (2 * var(--padd))); } }\n  @media screen and (min-width: 576px) {\n    .twackbar.top, .twackbar.bottom {\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      left: 50%; }\n      .twackbar.top-left, .twackbar.bottom-left {\n        left: 1rem; }\n      .twackbar.top-right, .twackbar.bottom-right {\n        right: 1rem; } }\n  .twackbar[class*=\"bottom\"] {\n    bottom: 1rem; }\n  .twackbar[class*=\"top\"] {\n    top: 1rem; }\n  @media screen and (max-width: 576px) {\n    .twackbar {\n      left: 0; }\n      .twackbar[class*=\"bottom\"] {\n        bottom: 0; }\n      .twackbar[class*=\"top\"] {\n        top: 0; } }\n  .twackbar .twackbar__text {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  .twackbar .twackbar__action {\n    text-transform: uppercase;\n    font-weight: 500;\n    margin: 0 0 0 1rem;\n    color: var(--primary);\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  .twackbar .times {\n    cursor: pointer;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: var(--times);\n    width: var(--times);\n    margin-left: 1rem;\n    -webkit-transform: scale(1.25);\n            transform: scale(1.25);\n    position: relative; }\n    .twackbar .times:before {\n      display: block;\n      content: '';\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      -webkit-transform: scale(0.9);\n              transform: scale(0.9);\n      border-radius: 50%;\n      -webkit-transition: -webkit-transform .1s ease-in;\n      transition: -webkit-transform .1s ease-in;\n      transition: transform .1s ease-in;\n      transition: transform .1s ease-in, -webkit-transform .1s ease-in; }\n    .twackbar .times:hover:before {\n      background-color: rgba(255, 255, 255, 0.2);\n      -webkit-transform: scale(2);\n              transform: scale(2); }\n\n.snack-enter-active, .snack-leave-active {\n  -webkit-transition: all .4s ease;\n  transition: all .4s ease; }\n\n.snack-enter, .snack-leave-to {\n  opacity: 0; }\n  @media screen and (min-width: 576px) {\n    .snack-enter.bottom, .snack-leave-to.bottom {\n      -webkit-transform: translateY(100%) translateX(-50%);\n              transform: translateY(100%) translateX(-50%); }\n    .snack-enter.top, .snack-leave-to.top {\n      -webkit-transform: translateY(-100%) translateX(-50%);\n              transform: translateY(-100%) translateX(-50%); } }\n  @media screen and (max-width: 576px) {\n    .snack-enter[class*=\"top\"], .snack-leave-to[class*=\"top\"] {\n      -webkit-transform: translateY(-100%);\n              transform: translateY(-100%); } }\n  @media screen and (max-width: 576px) {\n    .snack-enter[class*=\"bottom\"], .snack-leave-to[class*=\"bottom\"] {\n      -webkit-transform: translateY(100%);\n              transform: translateY(100%); } }\n  @media screen and (min-width: 576px) {\n    .snack-enter[class*=\"-left\"], .snack-leave-to[class*=\"-left\"] {\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); } }\n  @media screen and (min-width: 576px) {\n    .snack-enter[class*=\"-right\"], .snack-leave-to[class*=\"-right\"] {\n      -webkit-transform: translateX(50%);\n              transform: translateX(50%); } }\n");

var Twack = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "snack" } }, [_vm.active ? _c('div', { staticClass: "twackbar", class: _vm.config.position, style: _vm.styles }, [_c('div', { staticClass: "twackbar__text" }, [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _vm.button ? [_c('div', { staticClass: "twackbar__action", on: { "click": function click($event) {
          $event.preventDefault();return _vm.action($event);
        } } }, [_vm._v(_vm._s(_vm.button))])] : _vm._e(), _vm._v(" "), _vm.config.close ? [_c('div', { staticClass: "times", on: { "click": function click($event) {
          _vm.$emit('close');
        } } }, [_c('svg', { attrs: { "xmlns": "http://www.w3.org/2000/svg", "width": "24", "height": "24", "viewBox": "0 0 24 24" } }, [_c('path', { attrs: { "fill": "#E3E3E3", "d": "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" } }), _vm._v(" "), _c('path', { attrs: { "d": "M0 0h24v24H0z", "fill": "none" } })])])] : _vm._e()], 2) : _vm._e()]);
  }, staticRenderFns: [],
  name: 'Twackbar',
  props: {
    config: Object
  },
  data: function data(_) {
    return {
      active: false,
      text: '',
      button: '',
      theme: 'default',
      action: null
    };
  },
  computed: {
    styles: function styles() {
      return "--primary: " + this.config[this.theme].primary;
    }
  }
};

var Default = {
  default: {
    primary: '#4299E1'
  },
  success: {
    primary: '#68D391'
  },
  danger: {
    primary: '#E53E3E'
  },
  background: '#2D3748',
  text: '#EDF2F7',
  time: 7500,
  position: 'bottom',
  close: false
};

//
// vue PlugIn
//
var Constructor = void 0;
var component = null;
var timeout = null;
var closing = null;
var options = null;
var config = {};
var methods = {
  danger: 'danger',
  show: 'default',
  success: 'success'
};

var sleep = function sleep(time) {
  return new Promise(function (resolve, reject) {
    return setTimeout(function (_) {
      return resolve();
    }, time);
  });
};

var create = function create(parent) {
  document.addEventListener('DOMContentLoaded', function (event) {
    var div = document.createElement('div');
    div.id = 'twackbar-' + Date.now();
    document.body.appendChild(div);
    config.config = Default;
    component = new Constructor({
      propsData: config
      // parent
    });
    component.$on('close', function (_) {
      return close();
    });
    component.$mount('#' + div.id);
  });
};

var close = function close() {
  component.active = false;
  clearTimeout(timeout);
};

var actions = async function actions(params, theme) {
  options = params;
  if (component.active && closing) {
    return;
  }
  if (component.active) {
    close();
    closing = true;
    await sleep(400);
    closing = false;
  }
  if (typeof options === 'string') {
    options = { text: options };
  }
  var fn = options.action;
  options.action = async function () {
    if (!fn) {
      return close();
    }
    fn();
    close();
  };

  Object.assign(config.config, Default[theme]);
  Object.assign(component, Object.assign({}, options, { theme: theme }));
  component.active = true;
  timeout = setTimeout(close, Default.time);
};

var $twack = function $twack(opt) {
  var news = {};
  var themes = {};
  opt.methods = opt.methods || [];
  opt.methods.forEach(function (item) {
    news[item.name] = item.name;
    themes[item.name] = {
      primary: item.color || Default.default.primary
    };
  });
  Object.assign(Default, themes);
  var all = {};
  var meth = Object.assign({}, methods, news);

  var _loop = function _loop(m) {
    all[m] = function (params) {
      return actions(params, meth[m]);
    };
  };

  for (var m in meth) {
    _loop(m);
  }
  return all;
};

var plugin$1 = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Constructor = Vue.extend(Twack);
    create();
    Object.assign(Default, options);
    Vue.prototype.$twack = $twack(options);
  }
};

// Auto-install
var _Vue = null;
if (typeof window !== 'undefined') {
  _Vue = window.Vue;
} else if (typeof global !== 'undefined') {
  _Vue = global.Vue;
}
if (_Vue) {
  _Vue.use(plugin$1);
}

return plugin$1;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLXR3YWNrLmpzIiwic291cmNlcyI6WyIuLi9zcmMvcGx1Z2luL1R3YWNrYmFyLnZ1ZSIsIi4uL3NyYy9wbHVnaW4vZGVmYXVsdHMuanMiLCIuLi9zcmMvcGx1Z2luL2luZGV4LmpzIiwiLi4vbGliZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8dHJhbnNpdGlvbiBuYW1lPVwic25hY2tcIj5cbiAgICA8ZGl2XG4gICAgICB2LWlmPVwiYWN0aXZlXCJcbiAgICAgIDpzdHlsZT1cInN0eWxlc1wiXG4gICAgICBjbGFzcz1cInR3YWNrYmFyXCJcbiAgICAgIDpjbGFzcz1cImNvbmZpZy5wb3NpdGlvblwiPlxuICAgICAgPGRpdiBjbGFzcz1cInR3YWNrYmFyX190ZXh0XCI+e3sgdGV4dCB9fTwvZGl2PlxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJidXR0b25cIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIEBjbGljay5wcmV2ZW50PVwiYWN0aW9uXCJcbiAgICAgICAgICBjbGFzcz1cInR3YWNrYmFyX19hY3Rpb25cIj57eyBidXR0b24gfX08L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1pZj1cImNvbmZpZy5jbG9zZVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ2Nsb3NlJylcIlxuICAgICAgICAgIGNsYXNzPVwidGltZXNcIj5cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiI0UzRTNFM1wiIGQ9XCJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyelwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgPC90cmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1R3YWNrYmFyJyxcbiAgcHJvcHM6IHtcbiAgICBjb25maWc6IE9iamVjdFxuICB9LFxuICBkYXRhOiBfID0+ICh7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICB0ZXh0OiAnJyxcbiAgICBidXR0b246ICcnLFxuICAgIHRoZW1lOiAnZGVmYXVsdCcsXG4gICAgYWN0aW9uOiBudWxsXG4gIH0pLFxuICBjb21wdXRlZDoge1xuICAgIHN0eWxlcyAoKSB7XG4gICAgICByZXR1cm4gYC0tcHJpbWFyeTogJHt0aGlzLmNvbmZpZ1t0aGlzLnRoZW1lXS5wcmltYXJ5fWBcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBkZWZhdWx0OiB7XG4gICAgcHJpbWFyeTogJyM0Mjk5RTEnXG4gIH0sXG4gIHN1Y2Nlc3M6IHtcbiAgICBwcmltYXJ5OiAnIzY4RDM5MSdcbiAgfSxcbiAgZGFuZ2VyOiB7XG4gICAgcHJpbWFyeTogJyNFNTNFM0UnLFxuICB9LFxuICBiYWNrZ3JvdW5kOiAnIzJEMzc0OCcsXG4gIHRleHQ6ICcjRURGMkY3JyxcbiAgdGltZTogNzUwMCxcbiAgcG9zaXRpb246ICdib3R0b20nLFxuICBjbG9zZTogZmFsc2Vcbn1cbiIsIi8vXG4vLyB2dWUgUGx1Z0luXG4vL1xuaW1wb3J0IFR3YWNrIGZyb20gJy4vVHdhY2tiYXIudnVlJ1xuaW1wb3J0IERlZmF1bHQgZnJvbSAnLi9kZWZhdWx0cydcblxubGV0IENvbnN0cnVjdG9yXG5sZXQgY29tcG9uZW50ID0gbnVsbFxubGV0IHRpbWVvdXQgPSBudWxsXG5sZXQgY2xvc2luZyA9IG51bGxcbmxldCBvcHRpb25zID0gbnVsbFxuY29uc3QgY29uZmlnID0ge31cbmNvbnN0IG1ldGhvZHMgPSB7XG4gIGRhbmdlcjogJ2RhbmdlcicsXG4gIHNob3c6ICdkZWZhdWx0JyxcbiAgc3VjY2VzczogJ3N1Y2Nlc3MnXG59XG5cbmNvbnN0IHNsZWVwID0gdGltZSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBzZXRUaW1lb3V0KF8gPT4gcmVzb2x2ZSgpLCB0aW1lKSlcblxuY29uc3QgY3JlYXRlID0gcGFyZW50ID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGV2ZW50ID0+IHsgXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LmlkID0gJ3R3YWNrYmFyLScgKyBEYXRlLm5vdygpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG4gICAgY29uZmlnLmNvbmZpZyA9IERlZmF1bHRcbiAgICBjb21wb25lbnQgPSBuZXcgQ29uc3RydWN0b3Ioe1xuICAgICAgcHJvcHNEYXRhOiBjb25maWdcbiAgICAgIC8vIHBhcmVudFxuICAgIH0pXG4gICAgY29tcG9uZW50LiRvbignY2xvc2UnLCBfID0+IGNsb3NlKCkpXG4gICAgY29tcG9uZW50LiRtb3VudCgnIycgKyBkaXYuaWQpXG4gIH0pXG59XG5cbmNvbnN0IGNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBjb21wb25lbnQuYWN0aXZlID0gZmFsc2VcbiAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG59XG5cbmNvbnN0IGFjdGlvbnMgPSBhc3luYyAocGFyYW1zLCB0aGVtZSkgPT4ge1xuICBvcHRpb25zID0gcGFyYW1zXG4gIGlmIChjb21wb25lbnQuYWN0aXZlICYmIGNsb3NpbmcpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoY29tcG9uZW50LmFjdGl2ZSkge1xuICAgIGNsb3NlKClcbiAgICBjbG9zaW5nID0gdHJ1ZVxuICAgIGF3YWl0IHNsZWVwKDQwMClcbiAgICBjbG9zaW5nID0gZmFsc2VcbiAgfVxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgb3B0aW9ucyA9IHsgdGV4dDogb3B0aW9ucyB9XG4gIH1cbiAgbGV0IGZuID0gb3B0aW9ucy5hY3Rpb25cbiAgb3B0aW9ucy5hY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFmbikge1xuICAgICAgcmV0dXJuIGNsb3NlKClcbiAgICB9XG4gICAgZm4oKVxuICAgIGNsb3NlKClcbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24oY29uZmlnLmNvbmZpZywgRGVmYXVsdFt0aGVtZV0pXG4gIE9iamVjdC5hc3NpZ24oY29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7IHRoZW1lIH0pKVxuICBjb21wb25lbnQuYWN0aXZlID0gdHJ1ZVxuICB0aW1lb3V0ID0gc2V0VGltZW91dChjbG9zZSwgRGVmYXVsdC50aW1lKVxufVxuXG5jb25zdCAkdHdhY2sgPSAob3B0KSA9PiB7XG4gIGxldCB2bSA9IHRoaXNcbiAgbGV0IG5ld3MgPSB7fVxuICBsZXQgdGhlbWVzID0ge31cbiAgb3B0Lm1ldGhvZHMgPSBvcHQubWV0aG9kcyB8fCBbXVxuICBvcHQubWV0aG9kcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIG5ld3NbaXRlbS5uYW1lXSA9IGl0ZW0ubmFtZVxuICAgIHRoZW1lc1tpdGVtLm5hbWVdID0ge1xuICAgICAgcHJpbWFyeTogaXRlbS5jb2xvciB8fCBEZWZhdWx0LmRlZmF1bHQucHJpbWFyeVxuICAgIH1cbiAgfSlcbiAgT2JqZWN0LmFzc2lnbihEZWZhdWx0LCB0aGVtZXMpXG4gIGxldCBhbGwgPSB7fVxuICBsZXQgbWV0aCA9IE9iamVjdC5hc3NpZ24oe30sIG1ldGhvZHMsIG5ld3MpXG4gIGZvciAobGV0IG0gaW4gbWV0aCkge1xuICAgIGFsbFttXSA9IHBhcmFtcyA9PiBhY3Rpb25zKHBhcmFtcywgbWV0aFttXSlcbiAgfVxuICByZXR1cm4gYWxsXG59XG5cbmNvbnN0IHBsdWdpbiA9IHtcbiAgaW5zdGFsbCAoVnVlLCBvcHRpb25zID0ge30pIHtcbiAgICBDb25zdHJ1Y3RvciA9IFZ1ZS5leHRlbmQoVHdhY2spXG4gICAgY3JlYXRlKClcbiAgICBPYmplY3QuYXNzaWduKERlZmF1bHQsIG9wdGlvbnMpXG4gICAgVnVlLnByb3RvdHlwZS4kdHdhY2sgPSAkdHdhY2sob3B0aW9ucylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuIiwiaW1wb3J0ICcuL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3MnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vc3JjL3BsdWdpbi9pbmRleC5qcydcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG4vLyBBdXRvLWluc3RhbGxcbmxldCBfVnVlID0gbnVsbFxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIF9WdWUgPSB3aW5kb3cuVnVlXG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIF9WdWUgPSBnbG9iYWwuVnVlXG59XG5pZiAoX1Z1ZSkge1xuICBfVnVlLnVzZShwbHVnaW4pXG59XG4iXSwibmFtZXMiOlsicmVuZGVyIiwiT2JqZWN0IiwiY29uZmlnIiwidGhlbWUiLCJwcmltYXJ5IiwiQ29uc3RydWN0b3IiLCJjb21wb25lbnQiLCJ0aW1lb3V0IiwiY2xvc2luZyIsIm9wdGlvbnMiLCJtZXRob2RzIiwic2xlZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJ0aW1lIiwiY3JlYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwiRGF0ZSIsIm5vdyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIkRlZmF1bHQiLCIkb24iLCJjbG9zZSIsIiRtb3VudCIsImFjdGl2ZSIsImFjdGlvbnMiLCJwYXJhbXMiLCJ0ZXh0IiwiZm4iLCJhY3Rpb24iLCJhc3NpZ24iLCIkdHdhY2siLCJvcHQiLCJuZXdzIiwidGhlbWVzIiwiZm9yRWFjaCIsIml0ZW0iLCJuYW1lIiwiY29sb3IiLCJkZWZhdWx0IiwiYWxsIiwibWV0aCIsIm0iLCJwbHVnaW4iLCJWdWUiLCJleHRlbmQiLCJUd2FjayIsInByb3RvdHlwZSIsIl9WdWUiLCJ3aW5kb3ciLCJnbG9iYWwiLCJ1c2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkEsWUFBZSxFQUFDQTs7Ozs7O0dBQUQscUJBQUE7UUFDUCxVQURPO1NBRU47WUFDR0M7R0FIRztRQUtQO1dBQU07Y0FDRixLQURFO1lBRUosRUFGSTtjQUdGLEVBSEU7YUFJSCxTQUpHO2NBS0Y7S0FMSjtHQUxPO1lBWUg7VUFBQSxvQkFDRTs2QkFDYSxLQUFLQyxNQUFMLENBQVksS0FBS0MsS0FBakIsRUFBd0JDLE9BQTdDOzs7Q0FkTjs7QUM1QkEsY0FBZTtXQUNKO2FBQ0U7R0FGRTtXQUlKO2FBQ0U7R0FMRTtVQU9MO2FBQ0c7R0FSRTtjQVVELFNBVkM7UUFXUCxTQVhPO1FBWVAsSUFaTztZQWFILFFBYkc7U0FjTjtDQWRUOztBQ0FBOzs7QUFHQSxBQUdBLElBQUlDLG9CQUFKO0FBQ0EsSUFBSUMsWUFBWSxJQUFoQjtBQUNBLElBQUlDLFVBQVUsSUFBZDtBQUNBLElBQUlDLFVBQVUsSUFBZDtBQUNBLElBQUlDLFVBQVUsSUFBZDtBQUNBLElBQU1QLFNBQVMsRUFBZjtBQUNBLElBQU1RLFVBQVU7VUFDTixRQURNO1FBRVIsU0FGUTtXQUdMO0NBSFg7O0FBTUEsSUFBTUMsUUFBUSxTQUFSQSxLQUFRO1NBQVEsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVjtXQUFxQkMsV0FBVzthQUFLRixTQUFMO0tBQVgsRUFBMkJHLElBQTNCLENBQXJCO0dBQVosQ0FBUjtDQUFkOztBQUVBLElBQU1DLFNBQVMsU0FBVEEsTUFBUyxTQUFVO1dBQ2RDLGdCQUFULENBQTBC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