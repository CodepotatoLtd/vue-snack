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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLXR3YWNrLmpzIiwic291cmNlcyI6WyIuLi9zcmMvcGx1Z2luL1R3YWNrYmFyLnZ1ZSIsIi4uL3NyYy9wbHVnaW4vZGVmYXVsdHMuanMiLCIuLi9zcmMvcGx1Z2luL2luZGV4LmpzIiwiLi4vbGliZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8dHJhbnNpdGlvbiBuYW1lPVwic25hY2tcIj5cbiAgICA8dGVtcGxhdGUgdi1pZj1cImJ1dHRvblwiPlxuICAgICAgPGRpdiB2LWlmPVwiYWN0aXZlXCJcbiAgICAgICAgICAgOnN0eWxlPVwic3R5bGVzXCJcbiAgICAgICAgICAgOmNsYXNzPVwiY29uZmlnLnBvc2l0aW9uXCJcbiAgICAgICAgICAgY2xhc3M9XCJ0d2Fja2JhciBmaXhlZCBpbnNldC0wIGZsZXggaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyIHB4LTQgcHktNiBwb2ludGVyLWV2ZW50cy1ub25lIHNtOnAtNiBzbTppdGVtcy1zdGFydCBzbTpqdXN0aWZ5LWVuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWF4LXctc20gdy1mdWxsIGJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLWxnIHBvaW50ZXItZXZlbnRzLWF1dG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91bmRlZC1sZyBzaGFkb3cteHMgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTAgZmxleC0xIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0wIGZsZXgtMSB0ZXh0LXNtIGxlYWRpbmctNSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0d2Fja2Jhcl9fdGV4dFwiPnt7IHRleHQgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2sucHJldmVudD1cImFjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidHdhY2tiYXJfX2FjdGlvbiBtbC0zIGZsZXgtc2hyaW5rLTAgdGV4dC1zbSBsZWFkaW5nLTUgZm9udC1tZWRpdW0gdGV4dC1pbmRpZ28tNjAwIGhvdmVyOnRleHQtaW5kaWdvLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6dW5kZXJsaW5lIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMTUwXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGJ1dHRvbiB9fVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1sLTQgZmxleC1zaHJpbmstMCBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5saW5lLWZsZXggdGV4dC1ncmF5LTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6dGV4dC1ncmF5LTUwMCB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTE1MFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaC01IHctNVwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk00LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gICAgPHRlbXBsYXRlIHYtaWY9XCJjb25maWcuY2xvc2VcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ2Nsb3NlJylcIlxuICAgICAgICBjbGFzcz1cInRpbWVzXCI+XG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI0UzRTNFM1wiXG4gICAgICAgICAgICAgICAgZD1cIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XCIvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC90cmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdUd2Fja2JhcicsXG4gICAgcHJvcHM6IHtcbiAgICAgIGNvbmZpZzogT2JqZWN0XG4gICAgfSxcbiAgICBkYXRhOiBfID0+ICh7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgdGV4dDogJycsXG4gICAgICBidXR0b246ICcnLFxuICAgICAgdGhlbWU6ICdkZWZhdWx0JyxcbiAgICAgIGFjdGlvbjogbnVsbFxuICAgIH0pLFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBzdHlsZXMoKSB7XG4gICAgICAgIHJldHVybiBgLS1wcmltYXJ5OiAke3RoaXMuY29uZmlnW3RoaXMudGhlbWVdLnByaW1hcnl9YFxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGRlZmF1bHQ6IHtcbiAgICBwcmltYXJ5OiAnIzQyOTlFMSdcbiAgfSxcbiAgc3VjY2Vzczoge1xuICAgIHByaW1hcnk6ICcjNjhEMzkxJ1xuICB9LFxuICBkYW5nZXI6IHtcbiAgICBwcmltYXJ5OiAnI0U1M0UzRScsXG4gIH0sXG4gIGJhY2tncm91bmQ6ICcjMkQzNzQ4JyxcbiAgdGV4dDogJyNFREYyRjcnLFxuICB0aW1lOiA3NTAwLFxuICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gIGNsb3NlOiBmYWxzZVxufVxuIiwiLy9cbi8vIHZ1ZSBQbHVnSW5cbi8vXG5pbXBvcnQgVHdhY2sgZnJvbSAnLi9Ud2Fja2Jhci52dWUnXG5pbXBvcnQgRGVmYXVsdCBmcm9tICcuL2RlZmF1bHRzJ1xuXG5sZXQgQ29uc3RydWN0b3JcbmxldCBjb21wb25lbnQgPSBudWxsXG5sZXQgdGltZW91dCA9IG51bGxcbmxldCBjbG9zaW5nID0gbnVsbFxubGV0IG9wdGlvbnMgPSBudWxsXG5jb25zdCBjb25maWcgPSB7fVxuY29uc3QgbWV0aG9kcyA9IHtcbiAgZGFuZ2VyOiAnZGFuZ2VyJyxcbiAgc2hvdzogJ2RlZmF1bHQnLFxuICBzdWNjZXNzOiAnc3VjY2Vzcydcbn1cblxuY29uc3Qgc2xlZXAgPSB0aW1lID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHNldFRpbWVvdXQoXyA9PiByZXNvbHZlKCksIHRpbWUpKVxuXG5jb25zdCBjcmVhdGUgPSBwYXJlbnQgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZXZlbnQgPT4ge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdi5pZCA9ICd0d2Fja2Jhci0nICsgRGF0ZS5ub3coKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIGNvbmZpZy5jb25maWcgPSBEZWZhdWx0XG4gICAgY29tcG9uZW50ID0gbmV3IENvbnN0cnVjdG9yKHtcbiAgICAgIHByb3BzRGF0YTogY29uZmlnXG4gICAgICAvLyBwYXJlbnRcbiAgICB9KVxuICAgIGNvbXBvbmVudC4kb24oJ2Nsb3NlJywgXyA9PiBjbG9zZSgpKVxuICAgIGNvbXBvbmVudC4kbW91bnQoJyMnICsgZGl2LmlkKVxuICB9KVxufVxuXG5jb25zdCBjbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29tcG9uZW50LmFjdGl2ZSA9IGZhbHNlXG4gIGNsZWFyVGltZW91dCh0aW1lb3V0KVxufVxuXG5jb25zdCBhY3Rpb25zID0gYXN5bmMgKHBhcmFtcywgdGhlbWUpID0+IHtcbiAgb3B0aW9ucyA9IHBhcmFtc1xuICBpZiAoY29tcG9uZW50LmFjdGl2ZSAmJiBjbG9zaW5nKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKGNvbXBvbmVudC5hY3RpdmUpIHtcbiAgICBjbG9zZSgpXG4gICAgY2xvc2luZyA9IHRydWVcbiAgICBhd2FpdCBzbGVlcCg0MDApXG4gICAgY2xvc2luZyA9IGZhbHNlXG4gIH1cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgIG9wdGlvbnMgPSB7dGV4dDogb3B0aW9uc31cbiAgfVxuICBsZXQgZm4gPSBvcHRpb25zLmFjdGlvblxuICBvcHRpb25zLmFjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWZuKSB7XG4gICAgICByZXR1cm4gY2xvc2UoKVxuICAgIH1cbiAgICBmbigpXG4gICAgY2xvc2UoKVxuICB9XG5cbiAgT2JqZWN0LmFzc2lnbihjb25maWcuY29uZmlnLCBEZWZhdWx0W3RoZW1lXSlcbiAgT2JqZWN0LmFzc2lnbihjb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHt0aGVtZX0pKVxuICBjb21wb25lbnQuYWN0aXZlID0gdHJ1ZVxuICB0aW1lb3V0ID0gc2V0VGltZW91dChjbG9zZSwgRGVmYXVsdC50aW1lKVxufVxuXG5jb25zdCAkdHdhY2sgPSAob3B0KSA9PiB7XG4gIGxldCBuZXdzID0ge31cbiAgbGV0IHRoZW1lcyA9IHt9XG4gIG9wdC5tZXRob2RzID0gb3B0Lm1ldGhvZHMgfHwgW11cbiAgb3B0Lm1ldGhvZHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICBuZXdzW2l0ZW0ubmFtZV0gPSBpdGVtLm5hbWVcbiAgICB0aGVtZXNbaXRlbS5uYW1lXSA9IHtcbiAgICAgIHByaW1hcnk6IGl0ZW0uY29sb3IgfHwgRGVmYXVsdC5kZWZhdWx0LnByaW1hcnlcbiAgICB9XG4gIH0pXG4gIE9iamVjdC5hc3NpZ24oRGVmYXVsdCwgdGhlbWVzKVxuICBsZXQgYWxsID0ge31cbiAgbGV0IG1ldGggPSBPYmplY3QuYXNzaWduKHt9LCBtZXRob2RzLCBuZXdzKVxuICBmb3IgKGxldCBtIGluIG1ldGgpIHtcbiAgICBhbGxbbV0gPSBwYXJhbXMgPT4gYWN0aW9ucyhwYXJhbXMsIG1ldGhbbV0pXG4gIH1cbiAgcmV0dXJuIGFsbFxufVxuXG5jb25zdCBwbHVnaW4gPSB7XG4gIGluc3RhbGwoVnVlLCBvcHRpb25zID0ge30pIHtcbiAgICBDb25zdHJ1Y3RvciA9IFZ1ZS5leHRlbmQoVHdhY2spXG4gICAgY3JlYXRlKClcbiAgICBPYmplY3QuYXNzaWduKERlZmF1bHQsIG9wdGlvbnMpXG4gICAgVnVlLnByb3RvdHlwZS4kdHdhY2sgPSAkdHdhY2sob3B0aW9ucylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwbHVnaW5cblxuIiwiaW1wb3J0ICcuL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3MnXG5pbXBvcnQgcGx1Z2luIGZyb20gJy4vc3JjL3BsdWdpbi9pbmRleC5qcydcbmV4cG9ydCBkZWZhdWx0IHBsdWdpblxuXG4vLyBBdXRvLWluc3RhbGxcbmxldCBfVnVlID0gbnVsbFxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIF9WdWUgPSB3aW5kb3cuVnVlXG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIF9WdWUgPSBnbG9iYWwuVnVlXG59XG5pZiAoX1Z1ZSkge1xuICBfVnVlLnVzZShwbHVnaW4pXG59XG4iXSwibmFtZXMiOlsicmVuZGVyIiwiT2JqZWN0IiwiY29uZmlnIiwidGhlbWUiLCJwcmltYXJ5IiwiQ29uc3RydWN0b3IiLCJjb21wb25lbnQiLCJ0aW1lb3V0IiwiY2xvc2luZyIsIm9wdGlvbnMiLCJtZXRob2RzIiwic2xlZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJ0aW1lIiwiY3JlYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwiRGF0ZSIsIm5vdyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIkRlZmF1bHQiLCIkb24iLCJjbG9zZSIsIiRtb3VudCIsImFjdGl2ZSIsImFjdGlvbnMiLCJwYXJhbXMiLCJ0ZXh0IiwiZm4iLCJhY3Rpb24iLCJhc3NpZ24iLCIkdHdhY2siLCJvcHQiLCJuZXdzIiwidGhlbWVzIiwiZm9yRWFjaCIsIml0ZW0iLCJuYW1lIiwiY29sb3IiLCJkZWZhdWx0IiwiYWxsIiwibWV0aCIsIm0iLCJwbHVnaW4iLCJWdWUiLCJleHRlbmQiLCJUd2FjayIsInByb3RvdHlwZSIsIl9WdWUiLCJ3aW5kb3ciLCJnbG9iYWwiLCJ1c2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsWUFBZSxFQUFDQTs7Ozs7O0dBQUQscUJBQUE7UUFDUCxVQURPO1NBRU47WUFDR0M7R0FIRztRQUtQO1dBQU07Y0FDRixLQURFO1lBRUosRUFGSTtjQUdGLEVBSEU7YUFJSCxTQUpHO2NBS0Y7S0FMSjtHQUxPO1lBWUg7VUFBQSxvQkFDQzs2QkFDYyxLQUFLQyxNQUFMLENBQVksS0FBS0MsS0FBakIsRUFBd0JDLE9BQTdDOzs7Q0FkTjs7QUNuREEsY0FBZTtXQUNKO2FBQ0U7R0FGRTtXQUlKO2FBQ0U7R0FMRTtVQU9MO2FBQ0c7R0FSRTtjQVVELFNBVkM7UUFXUCxTQVhPO1FBWVAsSUFaTztZQWFILFFBYkc7U0FjTjtDQWRUOztBQ0FBOzs7QUFHQSxBQUdBLElBQUlDLG9CQUFKO0FBQ0EsSUFBSUMsWUFBWSxJQUFoQjtBQUNBLElBQUlDLFVBQVUsSUFBZDtBQUNBLElBQUlDLFVBQVUsSUFBZDtBQUNBLElBQUlDLFVBQVUsSUFBZDtBQUNBLElBQU1QLFNBQVMsRUFBZjtBQUNBLElBQU1RLFVBQVU7VUFDTixRQURNO1FBRVIsU0FGUTtXQUdMO0NBSFg7O0FBTUEsSUFBTUMsUUFBUSxTQUFSQSxLQUFRO1NBQVEsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVjtXQUFxQkMsV0FBVzthQUFLRixTQUFMO0tBQVgsRUFBMkJHLElBQTNCLENBQXJCO0dBQVosQ0FBUjtDQUFkOztBQUVBLElBQU1DLFNBQVMsU0FBVEEsTUFBUyxTQUFVO1dBQ2RDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxpQkFBUztRQUNqREMsTUFBTUMsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFWO1FBQ0lDLEVBQUosR0FBUyxjQUFjQyxLQUFLQyxHQUFMLEVBQXZCO2FBQ1NDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQlAsR0FBMUI7V0FDT2pCLE1BQVAsR0FBZ0J5QixPQUFoQjtnQkFDWSxJQUFJdEIsV0FBSixDQUFnQjtpQkFDZkg7O0tBREQsQ0FBWjtjQUlVMEIsR0FBVixDQUFjLE9BQWQsRUFBdUI7YUFBS0MsT0FBTDtLQUF2QjtjQUNVQyxNQUFWLENBQWlCLE1BQU1YLElBQUlHLEVBQTNCO0dBVkY7Q0FERjs7QUFlQSxJQUFNTyxRQUFRLFNBQVJBLEtBQVEsR0FBWTtZQUNkRSxNQUFWLEdBQW1CLEtBQW5CO2VBQ2F4QixPQUFiO0NBRkY7O0FBS0EsSUFBTXlCLFVBQVUsZUFBVkEsT0FBVSxDQUFPQyxNQUFQLEVBQWU5QixLQUFmLEVBQXlCO1lBQzdCOEIsTUFBVjtNQUNJM0IsVUFBVXlCLE1BQVYsSUFBb0J2QixPQUF4QixFQUFpQzs7O01BRzdCRixVQUFVeUIsTUFBZCxFQUFzQjs7Y0FFVixJQUFWO1VBQ01wQixNQUFNLEdBQU4sQ0FBTjtjQUNVLEtBQVY7O01BRUUsT0FBT0YsT0FBUCxLQUFtQixRQUF2QixFQUFpQztjQUNyQixFQUFDeUIsTUFBTXpCLE9BQVAsRUFBVjs7TUFFRTBCLEtBQUsxQixRQUFRMkIsTUFBakI7VUFDUUEsTUFBUixHQUFpQixrQkFBWTtRQUN2QixDQUFDRCxFQUFMLEVBQVM7YUFDQU4sT0FBUDs7OztHQUZKOztTQVFPUSxNQUFQLENBQWNuQyxPQUFPQSxNQUFyQixFQUE2QnlCLFFBQVF4QixLQUFSLENBQTdCO1NBQ09rQyxNQUFQLENBQWMvQixTQUFkLEVBQXlCTCxPQUFPb0MsTUFBUCxDQUFjLEVBQWQsRUFBa0I1QixPQUFsQixFQUEyQixFQUFDTixZQUFELEVBQTNCLENBQXpCO1lBQ1U0QixNQUFWLEdBQW1CLElBQW5CO1lBQ1VoQixXQUFXYyxLQUFYLEVBQWtCRixRQUFRWCxJQUExQixDQUFWO0NBMUJGOztBQTZCQSxJQUFNc0IsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEdBQUQsRUFBUztNQUNsQkMsT0FBTyxFQUFYO01BQ0lDLFNBQVMsRUFBYjtNQUNJL0IsT0FBSixHQUFjNkIsSUFBSTdCLE9BQUosSUFBZSxFQUE3QjtNQUNJQSxPQUFKLENBQVlnQyxPQUFaLENBQW9CLGdCQUFRO1NBQ3JCQyxLQUFLQyxJQUFWLElBQWtCRCxLQUFLQyxJQUF2QjtXQUNPRCxLQUFLQyxJQUFaLElBQW9CO2VBQ1RELEtBQUtFLEtBQUwsSUFBY2xCLFFBQVFtQixPQUFSLENBQWdCMUM7S0FEekM7R0FGRjtTQU1PaUMsTUFBUCxDQUFjVixPQUFkLEVBQXVCYyxNQUF2QjtNQUNJTSxNQUFNLEVBQVY7TUFDSUMsT0FBTy9DLE9BQU9vQyxNQUFQLENBQWMsRUFBZCxFQUFrQjNCLE9BQWxCLEVBQTJCOEIsSUFBM0IsQ0FBWDs7NkJBQ1NTLENBYmE7UUFjaEJBLENBQUosSUFBUzthQUFVakIsUUFBUUMsTUFBUixFQUFnQmUsS0FBS0MsQ0FBTCxDQUFoQixDQUFWO0tBQVQ7OztPQURHLElBQUlBLENBQVQsSUFBY0QsSUFBZCxFQUFvQjtVQUFYQyxDQUFXOztTQUdiRixHQUFQO0NBaEJGOztBQW1CQSxJQUFNRyxXQUFTO1NBQUEsbUJBQ0xDLEdBREssRUFDYztRQUFkMUMsT0FBYyx1RUFBSixFQUFJOztrQkFDWDBDLElBQUlDLE1BQUosQ0FBV0MsS0FBWCxDQUFkOztXQUVPaEIsTUFBUCxDQUFjVixPQUFkLEVBQXVCbEIsT0FBdkI7UUFDSTZDLFNBQUosQ0FBY2hCLE1BQWQsR0FBdUJBLE9BQU83QixPQUFQLENBQXZCOztDQUxKOztBQ3BGQTtBQUNBLElBQUk4QyxPQUFPLElBQVg7QUFDQSxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7U0FDMUJBLE9BQU9MLEdBQWQ7Q0FERixNQUVPLElBQUksT0FBT00sTUFBUCxLQUFrQixXQUF0QixFQUFtQztTQUNqQ0EsT0FBT04sR0FBZDs7QUFFRixJQUFJSSxJQUFKLEVBQVU7T0FDSEcsR0FBTCxDQUFTUixRQUFUOzs7Ozs7Ozs7In0=
