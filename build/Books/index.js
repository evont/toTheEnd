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

	var $app_template$ = __webpack_require__(10)
	var $app_style$ = __webpack_require__(11)
	var $app_script$ = __webpack_require__(12)
	
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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "refresh",
	  "attr": {
	    "refreshing": function () {return this.isRefreshing}
	  },
	  "events": {
	    "refresh": "refresh"
	  },
	  "children": [
	    {
	      "type": "list",
	      "attr": {},
	      "classList": [
	        "book-list"
	      ],
	      "events": {
	        "scrollbottom": "loadMore"
	      },
	      "children": [
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "loading"
	          },
	          "shown": function () {return this.isRefreshing},
	          "classList": [
	            "loading"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "书架读取中..."
	              }
	            }
	          ]
	        },
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "book-item"
	          },
	          "shown": function () {return !(this.isRefreshing)},
	          "repeat": function () {return this.list},
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "book-item"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.$item.cover}
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
	                        "value": function () {return this.$item.name}
	                      },
	                      "classList": [
	                        "intro-title"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.$item.author}
	                      },
	                      "classList": [
	                        "intro-author"
	                      ]
	                    },
	                    {
	                      "type": "a",
	                      "attr": {
	                        "value": "查看目录"
	                      },
	                      "classList": [
	                        "btn"
	                      ],
	                      "events": {
	                        "click": function (evt) {this.goCatelog(this.$item,evt)}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 11 */
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
	  ".book-list": {
	    "flexDirection": "column",
	    "flex": 1
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.fetch');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.router');
	
	var _system4 = _interopRequireDefault(_system3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: {
	        list: [],
	        page: 1,
	        isRefreshing: false
	    },
	    onInit: function onInit() {
	        this.refresh({ refreshing: true });
	        this.fetchBooks();
	    },
	    refresh: function refresh(evt) {
	        this.isRefreshing = evt.refreshing;
	        this.page = 1;
	        this.fetchBooks();
	    },
	    fetchBooks: function fetchBooks() {
	        var _self = this;
	        var page = this.page;
	        _system2.default.fetch({
	            url: 'http://daren.vipc.me/api/book/list/' + page,
	            success: function success(res) {
	                var model = JSON.parse(res.data).model;
	                if (page > 1) {
	                    _self.list = _self.list.concat(model.list);
	                } else {
	                    _self.list = model.list;
	                    _self.isRefreshing = false;
	                }
	            },
	            fail: function fail(data, code) {
	                console.log("handling fail, code=" + code);
	            }
	        });
	    },
	    loadMore: function loadMore() {
	        this.page += 1;
	        this.fetchBooks();
	    },
	    goCatelog: function goCatelog(item) {
	        var info = {
	            bid: item.bid,
	            cover: item.cover,
	            name: item.name,
	            author: item.author
	        };
	        _system4.default.push({
	            uri: '/Books/Catelog',
	            params: {
	                bid: item.bid,
	                cover: item.cover,
	                name: item.name,
	                author: item.author
	            }
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