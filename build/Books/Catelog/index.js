(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(7)
	var $app_style$ = __webpack_require__(8)
	var $app_script$ = __webpack_require__(9)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "catelog"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "book-item",
	        "book-item_grey"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.cover}
	          }
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "intro"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.name}
	              },
	              "classList": [
	                "intro-title"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.author}
	              },
	              "classList": [
	                "intro-author"
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "list",
	      "attr": {},
	      "classList": [
	        "catelog-list"
	      ],
	      "children": [
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "catelog-item"
	          },
	          "classList": [
	            "catelog-item"
	          ],
	          "repeat": function () {return this.list},
	          "events": {
	            "click": function (evt) {this.goArticle(this.$item,evt)}
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.$item.title}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  ".loading": {
	    "height": "300px",
	    "width": "100%",
	    "color": "#999999",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  ".loading text": {
	    "fontSize": "32px",
	    "textAlign": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "loading"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  },
	  ".book-item": {
	    "width": "100%",
	    "height": "380px",
	    "paddingTop": "0px",
	    "paddingRight": "30px",
	    "paddingBottom": "0px",
	    "paddingLeft": "30px",
	    "backgroundColor": "#ffffff",
	    "borderTopWidth": "0px",
	    "borderRightWidth": "0px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "0px",
	    "borderTopColor": "#dddddd",
	    "borderRightColor": "#dddddd",
	    "borderBottomColor": "#dddddd",
	    "borderLeftColor": "#dddddd",
	    "alignItems": "center"
	  },
	  ".book-item_grey": {
	    "backgroundColor": "#f3f3f3"
	  },
	  ".book-item image": {
	    "height": "300px",
	    "width": "220px",
	    "resizeMode": "contain",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "image"
	        }
	      ]
	    }
	  },
	  ".book-item .intro": {
	    "flexDirection": "column",
	    "paddingLeft": "30px",
	    "justifyContent": "center",
	    "height": "300px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "intro"
	        }
	      ]
	    }
	  },
	  ".book-item .intro-title": {
	    "fontSize": "40px",
	    "color": "#333333",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "intro-title"
	        }
	      ]
	    }
	  },
	  ".book-item .intro-author": {
	    "marginTop": "20px",
	    "fontSize": "22px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "intro-author"
	        }
	      ]
	    }
	  },
	  ".book-item .btn": {
	    "height": "60px",
	    "width": "160px",
	    "marginTop": "40px",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#999999",
	    "borderRightColor": "#999999",
	    "borderBottomColor": "#999999",
	    "borderLeftColor": "#999999",
	    "borderRadius": "30px",
	    "textAlign": "center",
	    "color": "#999999",
	    "backgroundColor": "#f3f3f3",
	    "fontSize": "20px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "book-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "btn"
	        }
	      ]
	    }
	  },
	  ".catelog": {
	    "flexDirection": "column",
	    "flex": 1
	  },
	  ".catelog-item": {
	    "paddingTop": "30px",
	    "paddingRight": "30px",
	    "paddingBottom": "30px",
	    "paddingLeft": "30px",
	    "backgroundColor": "#ffffff",
	    "borderTopWidth": "0px",
	    "borderRightWidth": "0px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "0px",
	    "borderTopColor": "#dddddd",
	    "borderRightColor": "#dddddd",
	    "borderBottomColor": "#dddddd",
	    "borderLeftColor": "#dddddd"
	  },
	  ".catelog-item text": {
	    "color": "#333333",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "catelog-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.fetch');
	
	var _system4 = _interopRequireDefault(_system3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  protected: {
	    bid: '',
	    cover: '',
	    name: '',
	    author: '',
	    list: []
	  },
	  onInit: function onInit() {
	    this.$page.setTitleBar({ text: this.name });
	    this.fetchCateLog();
	  },
	  fetchCateLog: function fetchCateLog() {
	    var bid = this.bid,
	        _self = this;
	    _system4.default.fetch({
	      url: 'http://daren.vipc.me/api/book/catelog/' + bid,
	      success: function success(res) {
	        var model = JSON.parse(res.data).model;
	        _self.list = model.catelog;
	      },
	      fail: function fail(data, code) {
	        console.log("handling fail, code=" + code);
	      }
	    });
	  },
	  goArticle: function goArticle(item) {
	    _system2.default.push({
	      uri: '/Books/Article',
	      params: { cid: item.cid, bid: this.bid, title: item.title }
	    });
	  }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map