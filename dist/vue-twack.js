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

___$insertStyle(".twackbar {\n  --primary: #4299E1;\n  --background: #2D3748;\n  --text: #E3E3E3;\n  --font: sans-serif;\n  --times: 1rem;\n  --padd: 1rem;\n  --radius: 0.25rem; }\n\n@media screen and (max-width: 576px) {\n  .twackbar {\n    border-radius: 0;\n    width: calc(100% - (2 * var(--padd))); } }\n\n@media screen and (min-width: 576px) {\n  .twackbar.top, .twackbar.bottom {\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    left: 50%; }\n    .twackbar.top-left, .twackbar.bottom-left {\n      left: 1rem; }\n    .twackbar.top-right, .twackbar.bottom-right {\n      right: 1rem; } }\n\n.twackbar[class*=\"bottom\"] {\n  bottom: 1rem; }\n\n.twackbar[class*=\"top\"] {\n  top: 1rem; }\n\n@media screen and (max-width: 576px) {\n  .twackbar {\n    left: 0; }\n    .twackbar[class*=\"bottom\"] {\n      bottom: 0; }\n    .twackbar[class*=\"top\"] {\n      top: 0; } }\n\n.twackbar .times {\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: var(--times);\n  width: var(--times);\n  margin-left: 1rem;\n  -webkit-transform: scale(1.25);\n          transform: scale(1.25);\n  position: relative; }\n  .twackbar .times:before {\n    display: block;\n    content: '';\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n    border-radius: 50%;\n    -webkit-transition: -webkit-transform .1s ease-in;\n    transition: -webkit-transform .1s ease-in;\n    transition: transform .1s ease-in;\n    transition: transform .1s ease-in, -webkit-transform .1s ease-in; }\n  .twackbar .times:hover:before {\n    background-color: rgba(255, 255, 255, 0.2);\n    -webkit-transform: scale(2);\n            transform: scale(2); }\n\n.snack-enter-active, .snack-leave-active {\n  -webkit-transition: all .4s ease;\n  transition: all .4s ease; }\n\n.snack-enter, .snack-leave-to {\n  opacity: 0; }\n  @media screen and (min-width: 576px) {\n    .snack-enter.bottom, .snack-leave-to.bottom {\n      -webkit-transform: translateY(100%) translateX(-50%);\n              transform: translateY(100%) translateX(-50%); }\n    .snack-enter.top, .snack-leave-to.top {\n      -webkit-transform: translateY(-100%) translateX(-50%);\n              transform: translateY(-100%) translateX(-50%); } }\n  @media screen and (max-width: 576px) {\n    .snack-enter[class*=\"top\"], .snack-leave-to[class*=\"top\"] {\n      -webkit-transform: translateY(-100%);\n              transform: translateY(-100%); } }\n  @media screen and (max-width: 576px) {\n    .snack-enter[class*=\"bottom\"], .snack-leave-to[class*=\"bottom\"] {\n      -webkit-transform: translateY(100%);\n              transform: translateY(100%); } }\n  @media screen and (min-width: 576px) {\n    .snack-enter[class*=\"-left\"], .snack-leave-to[class*=\"-left\"] {\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); } }\n  @media screen and (min-width: 576px) {\n    .snack-enter[class*=\"-right\"], .snack-leave-to[class*=\"-right\"] {\n      -webkit-transform: translateX(50%);\n              transform: translateX(50%); } }\n");

var Twack = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "snack" } }, [_vm.button ? [_vm.active ? _c('div', { staticClass: "twackbar fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end", class: _vm.config.position, style: _vm.styles }, [_c('div', { staticClass: "max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto" }, [_c('div', { staticClass: "rounded-lg shadow-xs overflow-hidden" }, [_c('div', { staticClass: "p-4" }, [_c('div', { staticClass: "flex items-center" }, [_c('div', { staticClass: "w-0 flex-1 flex justify-between" }, [_c('div', { staticClass: "w-0 flex-1 text-sm leading-5 font-medium text-gray-900" }, [_c('div', { staticClass: "twackbar__text" }, [_vm._v(_vm._s(_vm.text))])]), _vm._v(" "), _c('button', { staticClass: "twackbar__action ml-3 flex-shrink-0 text-sm leading-5 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150", on: { "click": function click($event) {
          $event.preventDefault();return _vm.action($event);
        } } }, [_vm._v(" " + _vm._s(_vm.button) + " ")])]), _vm._v(" "), _c('div', { staticClass: "ml-4 flex-shrink-0 flex" }, [_c('button', { staticClass: "inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150" }, [_c('svg', { staticClass: "h-5 w-5", attrs: { "viewBox": "0 0 20 20", "fill": "currentColor" } }, [_c('path', { attrs: { "fill-rule": "evenodd", "d": "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", "clip-rule": "evenodd" } })])])])])])])])]) : _vm._e()] : _vm._e(), _vm._v(" "), _vm.config.close ? [_c('div', { staticClass: "times", on: { "click": function click($event) {
          _vm.$emit('close');
        } } }, [_c('svg', { attrs: { "xmlns": "http://www.w3.org/2000/svg", "width": "24", "height": "24", "viewBox": "0 0 24 24" } }, [_c('path', { attrs: { "fill": "#E3E3E3", "d": "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" } }), _vm._v(" "), _c('path', { attrs: { "d": "M0 0h24v24H0z", "fill": "none" } })])])] : _vm._e()], 2);
  }, staticRenderFns: [],
  name: 'Twackbar',
  props: {
    config: Object
  },
  data: function data() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLXR3YWNrLmpzIiwic291cmNlcyI6WyIuLi9zcmMvcGx1Z2luL1R3YWNrYmFyLnZ1ZSIsIi4uL3NyYy9wbHVnaW4vZGVmYXVsdHMuanMiLCIuLi9zcmMvcGx1Z2luL2luZGV4LmpzIiwiLi4vbGliZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8dHJhbnNpdGlvbiBuYW1lPVwic25hY2tcIj5cbiAgICA8dGVtcGxhdGUgdi1pZj1cImJ1dHRvblwiPlxuICAgICAgPGRpdiB2LWlmPVwiYWN0aXZlXCJcbiAgICAgICAgICAgOnN0eWxlPVwic3R5bGVzXCJcbiAgICAgICAgICAgOmNsYXNzPVwiY29uZmlnLnBvc2l0aW9uXCJcbiAgICAgICAgICAgY2xhc3M9XCJ0d2Fja2JhciBmaXhlZCBpbnNldC0wIGZsZXggaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyIHB4LTQgcHktNiBwb2ludGVyLWV2ZW50cy1ub25lIHNtOnAtNiBzbTppdGVtcy1zdGFydCBzbTpqdXN0aWZ5LWVuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWF4LXctc20gdy1mdWxsIGJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLWxnIHBvaW50ZXItZXZlbnRzLWF1dG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91bmRlZC1sZyBzaGFkb3cteHMgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTAgZmxleC0xIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0wIGZsZXgtMSB0ZXh0LXNtIGxlYWRpbmctNSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0d2Fja2Jhcl9fdGV4dFwiPnt7IHRleHQgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2sucHJldmVudD1cImFjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidHdhY2tiYXJfX2FjdGlvbiBtbC0zIGZsZXgtc2hyaW5rLTAgdGV4dC1zbSBsZWFkaW5nLTUgZm9udC1tZWRpdW0gdGV4dC1pbmRpZ28tNjAwIGhvdmVyOnRleHQtaW5kaWdvLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6dW5kZXJsaW5lIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMTUwXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGJ1dHRvbiB9fVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1sLTQgZmxleC1zaHJpbmstMCBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5saW5lLWZsZXggdGV4dC1ncmF5LTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6dGV4dC1ncmF5LTUwMCB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTE1MFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaC01IHctNVwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk00LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gICAgPHRlbXBsYXRlIHYtaWY9XCJjb25maWcuY2xvc2VcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ2Nsb3NlJylcIlxuICAgICAgICBjbGFzcz1cInRpbWVzXCI+XG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI0UzRTNFM1wiXG4gICAgICAgICAgICAgICAgZD1cIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XCIvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC90cmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdUd2Fja2JhcicsXG4gICAgcHJvcHM6IHtcbiAgICAgIGNvbmZpZzogT2JqZWN0XG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgdGV4dDogJycsXG4gICAgICAgIGJ1dHRvbjogJycsXG4gICAgICAgIHRoZW1lOiAnZGVmYXVsdCcsXG4gICAgICAgIGFjdGlvbjogbnVsbFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIHN0eWxlcygpIHtcbiAgICAgICAgcmV0dXJuIGAtLXByaW1hcnk6ICR7dGhpcy5jb25maWdbdGhpcy50aGVtZV0ucHJpbWFyeX1gXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmYXVsdDoge1xuICAgIHByaW1hcnk6ICcjNDI5OUUxJ1xuICB9LFxuICBzdWNjZXNzOiB7XG4gICAgcHJpbWFyeTogJyM2OEQzOTEnXG4gIH0sXG4gIGRhbmdlcjoge1xuICAgIHByaW1hcnk6ICcjRTUzRTNFJyxcbiAgfSxcbiAgYmFja2dyb3VuZDogJyMyRDM3NDgnLFxuICB0ZXh0OiAnI0VERjJGNycsXG4gIHRpbWU6IDc1MDAsXG4gIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgY2xvc2U6IGZhbHNlXG59XG4iLCIvL1xuLy8gdnVlIFBsdWdJblxuLy9cbmltcG9ydCBUd2FjayBmcm9tICcuL1R3YWNrYmFyLnZ1ZSdcbmltcG9ydCBEZWZhdWx0IGZyb20gJy4vZGVmYXVsdHMnXG5cbmxldCBDb25zdHJ1Y3RvclxubGV0IGNvbXBvbmVudCA9IG51bGxcbmxldCB0aW1lb3V0ID0gbnVsbFxubGV0IGNsb3NpbmcgPSBudWxsXG5sZXQgb3B0aW9ucyA9IG51bGxcbmNvbnN0IGNvbmZpZyA9IHt9XG5jb25zdCBtZXRob2RzID0ge1xuICBkYW5nZXI6ICdkYW5nZXInLFxuICBzaG93OiAnZGVmYXVsdCcsXG4gIHN1Y2Nlc3M6ICdzdWNjZXNzJ1xufVxuXG5jb25zdCBzbGVlcCA9IHRpbWUgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gc2V0VGltZW91dChfID0+IHJlc29sdmUoKSwgdGltZSkpXG5cbmNvbnN0IGNyZWF0ZSA9IHBhcmVudCA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBldmVudCA9PiB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LmlkID0gJ3R3YWNrYmFyLScgKyBEYXRlLm5vdygpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG4gICAgY29uZmlnLmNvbmZpZyA9IERlZmF1bHRcbiAgICBjb21wb25lbnQgPSBuZXcgQ29uc3RydWN0b3Ioe1xuICAgICAgcHJvcHNEYXRhOiBjb25maWdcbiAgICAgIC8vIHBhcmVudFxuICAgIH0pXG4gICAgY29tcG9uZW50LiRvbignY2xvc2UnLCBfID0+IGNsb3NlKCkpXG4gICAgY29tcG9uZW50LiRtb3VudCgnIycgKyBkaXYuaWQpXG4gIH0pXG59XG5cbmNvbnN0IGNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBjb21wb25lbnQuYWN0aXZlID0gZmFsc2VcbiAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG59XG5cbmNvbnN0IGFjdGlvbnMgPSBhc3luYyAocGFyYW1zLCB0aGVtZSkgPT4ge1xuICBvcHRpb25zID0gcGFyYW1zXG4gIGlmIChjb21wb25lbnQuYWN0aXZlICYmIGNsb3NpbmcpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoY29tcG9uZW50LmFjdGl2ZSkge1xuICAgIGNsb3NlKClcbiAgICBjbG9zaW5nID0gdHJ1ZVxuICAgIGF3YWl0IHNsZWVwKDQwMClcbiAgICBjbG9zaW5nID0gZmFsc2VcbiAgfVxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgb3B0aW9ucyA9IHt0ZXh0OiBvcHRpb25zfVxuICB9XG4gIGxldCBmbiA9IG9wdGlvbnMuYWN0aW9uXG4gIG9wdGlvbnMuYWN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghZm4pIHtcbiAgICAgIHJldHVybiBjbG9zZSgpXG4gICAgfVxuICAgIGZuKClcbiAgICBjbG9zZSgpXG4gIH1cblxuICBPYmplY3QuYXNzaWduKGNvbmZpZy5jb25maWcsIERlZmF1bHRbdGhlbWVdKVxuICBPYmplY3QuYXNzaWduKGNvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge3RoZW1lfSkpXG4gIGNvbXBvbmVudC5hY3RpdmUgPSB0cnVlXG4gIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsb3NlLCBEZWZhdWx0LnRpbWUpXG59XG5cbmNvbnN0ICR0d2FjayA9IChvcHQpID0+IHtcbiAgbGV0IG5ld3MgPSB7fVxuICBsZXQgdGhlbWVzID0ge31cbiAgb3B0Lm1ldGhvZHMgPSBvcHQubWV0aG9kcyB8fCBbXVxuICBvcHQubWV0aG9kcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIG5ld3NbaXRlbS5uYW1lXSA9IGl0ZW0ubmFtZVxuICAgIHRoZW1lc1tpdGVtLm5hbWVdID0ge1xuICAgICAgcHJpbWFyeTogaXRlbS5jb2xvciB8fCBEZWZhdWx0LmRlZmF1bHQucHJpbWFyeVxuICAgIH1cbiAgfSlcbiAgT2JqZWN0LmFzc2lnbihEZWZhdWx0LCB0aGVtZXMpXG4gIGxldCBhbGwgPSB7fVxuICBsZXQgbWV0aCA9IE9iamVjdC5hc3NpZ24oe30sIG1ldGhvZHMsIG5ld3MpXG4gIGZvciAobGV0IG0gaW4gbWV0aCkge1xuICAgIGFsbFttXSA9IHBhcmFtcyA9PiBhY3Rpb25zKHBhcmFtcywgbWV0aFttXSlcbiAgfVxuICByZXR1cm4gYWxsXG59XG5cbmNvbnN0IHBsdWdpbiA9IHtcbiAgaW5zdGFsbChWdWUsIG9wdGlvbnMgPSB7fSkge1xuICAgIENvbnN0cnVjdG9yID0gVnVlLmV4dGVuZChUd2FjaylcbiAgICBjcmVhdGUoKVxuICAgIE9iamVjdC5hc3NpZ24oRGVmYXVsdCwgb3B0aW9ucylcbiAgICBWdWUucHJvdG90eXBlLiR0d2FjayA9ICR0d2FjayhvcHRpb25zKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG4iLCJpbXBvcnQgJy4vc3JjL3N0eWxlcy9zdHlsZXMuc2NzcydcbmltcG9ydCBwbHVnaW4gZnJvbSAnLi9zcmMvcGx1Z2luL2luZGV4LmpzJ1xuZXhwb3J0IGRlZmF1bHQgcGx1Z2luXG5cbi8vIEF1dG8taW5zdGFsbFxubGV0IF9WdWUgPSBudWxsXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgX1Z1ZSA9IHdpbmRvdy5WdWVcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgX1Z1ZSA9IGdsb2JhbC5WdWVcbn1cbmlmIChfVnVlKSB7XG4gIF9WdWUudXNlKHBsdWdpbilcbn1cbiJdLCJuYW1lcyI6WyJyZW5kZXIiLCJPYmplY3QiLCJjb25maWciLCJ0aGVtZSIsInByaW1hcnkiLCJDb25zdHJ1Y3RvciIsImNvbXBvbmVudCIsInRpbWVvdXQiLCJjbG9zaW5nIiwib3B0aW9ucyIsIm1ldGhvZHMiLCJzbGVlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInRpbWUiLCJjcmVhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJEYXRlIiwibm93IiwiYm9keSIsImFwcGVuZENoaWxkIiwiRGVmYXVsdCIsIiRvbiIsImNsb3NlIiwiJG1vdW50IiwiYWN0aXZlIiwiYWN0aW9ucyIsInBhcmFtcyIsInRleHQiLCJmbiIsImFjdGlvbiIsImFzc2lnbiIsIiR0d2FjayIsIm9wdCIsIm5ld3MiLCJ0aGVtZXMiLCJmb3JFYWNoIiwiaXRlbSIsIm5hbWUiLCJjb2xvciIsImRlZmF1bHQiLCJhbGwiLCJtZXRoIiwibSIsInBsdWdpbiIsIlZ1ZSIsImV4dGVuZCIsIlR3YWNrIiwicHJvdG90eXBlIiwiX1Z1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
