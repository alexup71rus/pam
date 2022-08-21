/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/classes/Dimension.js":
/*!*********************************!*\
  !*** ./js/classes/Dimension.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dimension; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);




var Dimension = /*#__PURE__*/function () {
  function Dimension() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Dimension);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "measureContainer", false);

    this.image = new Image();
    this.canvas = document.createElement('canvas');
    this.colorHold = 8;
    this.imgData = [];
    this.x = 0;
    this.y = 0;
    this.top = 0;
    this.bottom = 0;
    this.left = 0;
    this.right = 0;
    this.screenWidth = 0;
    this.screenHeight = 0;
    this.debounceUpdate = {
      timer: 0,
      rangeX: 0,
      rangeY: 0
    };
    this.midColor = {
      r: 255,
      g: 255,
      b: 255,
      a: 255
    };
    this.create();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Dimension, [{
    key: "create",
    value: function create() {
      var html = "\n        <div class=\"js-dimension\" style=\"left: 0px; top: 0px;\">\n            <div class=\"x js-dimension__axis\" style=\"left: 0px; width: 0px;\"></div>\n            <div class=\"y js-dimension__axis\" style=\"top: 0px; height: 0px;\"></div>\n            <div class=\"js-dimension__tooltip\"></div>\n        </div>\n        <div class=\"dimension__nocursor\"></div>\n        ";
      document.body.insertAdjacentHTML('beforeend', html);
      this.nodes = {
        point: document.querySelector('.js-dimension'),
        x: document.querySelector('.js-dimension__axis.x'),
        y: document.querySelector('.js-dimension__axis.y'),
        tooltip: document.querySelector('.js-dimension__tooltip')
      };
    }
  }, {
    key: "stop",
    value: function stop() {
      this.imgData = [];
      this.screenWidth = 0;
      this.screenHeight = 0;
      this.debounceUpdate = {
        timer: 0,
        rangeX: 0,
        rangeY: 0
      };
      this.nodes.tooltip.innerHTML = '';
      this.nodes.point.classList.remove('on');
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(ev) {
      var _this = this;

      this.x = ev.clientX;
      this.y = ev.clientY;

      if (this.debounceUpdate.timer) {
        clearTimeout(this.debounceUpdate.timer);
        this.debounceUpdate.timer = 0;
      }

      if (this.imgData && this.imgData.length) {
        if (ev.clientX > this.debounceUpdate.rangeX + 5 || ev.clientX < this.debounceUpdate.rangeX - 5 || ev.clientY > this.debounceUpdate.rangeY + 5 || ev.clientY < this.debounceUpdate.rangeY - 5) {
          this.debounceUpdate.timer = setTimeout(function () {
            _this.update();
          }, 5);
        } else {
          this.debounceUpdate.timer = setTimeout(function () {
            _this.update();
          }, 1);
        }
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.debounceUpdate.rangeX = this.x;
      this.debounceUpdate.rangeY = this.y;
      this.measureArea();
      this.draw(this.debounceUpdate.rangeX, this.debounceUpdate.rangeY);
    }
  }, {
    key: "measureArea",
    value: function measureArea() {
      var x = this.x;
      var y = this.y;
      this.midColor = this.getColorCursorPoint();
      this.parse(x, y, 'top');
      this.parse(x, y, 'bottom');
      this.parse(x, y, 'left');
      this.parse(x, y, 'right');
    }
  }, {
    key: "parse",
    value: function parse(x, y, type) {
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var maxStep = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5000;

      switch (type) {
        case 'top':
          y = y - 1;
          break;

        case 'bottom':
          y = y + 1;
          break;

        case 'left':
          x = x + 1;
          break;

        case 'right':
          x = x - 1;
          break;
      }

      var length = this.inBoundaries(x, y) ? (y * this.screenWidth + x) * 4 : -1;

      if (length > -1) {
        var RGBA = {
          r: this.imgData[length],
          g: this.imgData[length + 1],
          b: this.imgData[length + 2],
          a: this.imgData[length + 3]
        };
        var isSame = RGBA.r < this.midColor.r + this.colorHold && RGBA.r > this.midColor.r - this.colorHold && RGBA.g < this.midColor.g + this.colorHold && RGBA.g > this.midColor.g - this.colorHold && RGBA.b < this.midColor.b + this.colorHold && RGBA.b > this.midColor.b - this.colorHold && RGBA.a < this.midColor.a + this.colorHold && RGBA.a > this.midColor.a - this.colorHold;

        if (isSame) {
          if (maxStep) {
            this.parse(x, y, type, ++i, --maxStep);
          } else {}
        } else {
          this[type] = i;
        }
      } else {
        this[type] = i;
      }
    }
  }, {
    key: "draw",
    value: function draw(clientX, clientY) {
      var x = clientX;
      var y = clientY;
      var noCursorDiv = document.querySelector('.dimension__nocursor');

      if (clientX + 100 > window.innerWidth) {
        this.nodes.tooltip.classList.add('translateX');
      } else {
        this.nodes.tooltip.classList.remove('translateX');
      }

      if (clientY - 100 < 0) {
        this.nodes.tooltip.classList.add('translateY');
      } else {
        this.nodes.tooltip.classList.remove('translateY');
      }

      if (this.measureContainer) {
        var elemOverCursor = document.elementFromPoint(x, y);

        if (elemOverCursor) {
          if (noCursorDiv) {
            noCursorDiv.classList.add('dimension__nocursor_hide');
          }

          var top = elemOverCursor.getBoundingClientRect().top;
          var left = elemOverCursor.getBoundingClientRect().left;
          var width = elemOverCursor.getBoundingClientRect().width;
          var height = elemOverCursor.getBoundingClientRect().height;
          this.top = this.top + 1;
          this.left = this.left + 1;
          this.nodes.point.classList.add('on');
          this.nodes.point.style.top = top + height / 2 + 'px';
          this.nodes.point.style.left = left + width / 2 + 'px';
          this.nodes.tooltip.innerHTML = "".concat(width, " x ").concat(height);
          this.nodes.y.style.marginTop = -(height / 2) + 'px';
          this.nodes.y.style.height = height + 'px';
          this.nodes.x.style.marginLeft = -(width / 2) + 'px';
          this.nodes.x.style.width = width + 'px';
        } else {
          if (noCursorDiv) {
            noCursorDiv.classList.remove('dimension__nocursor_hide');
          }

          this.top = this.top + 1;
          this.left = this.left + 1;
          this.nodes.point.classList.add('on');
          this.nodes.point.style.top = clientY + 'px';
          this.nodes.point.style.left = clientX + 'px';
          this.nodes.tooltip.innerHTML = "".concat(this.left + this.right, " x ").concat(this.top + this.bottom);
          this.nodes.y.style.marginTop = '-' + this.top + 'px';
          this.nodes.y.style.height = this.top + this.bottom + 'px';
          this.nodes.x.style.marginLeft = '-' + this.right + 'px';
          this.nodes.x.style.width = this.left + this.right + 'px';
        }
      } else {
        if (noCursorDiv) {
          noCursorDiv.classList.remove('dimension__nocursor_hide');
        }

        this.top = this.top + 1;
        this.left = this.left + 1;
        this.nodes.point.classList.add('on');
        this.nodes.point.style.top = clientY + 'px';
        this.nodes.point.style.left = clientX + 'px';
        this.nodes.tooltip.innerHTML = "".concat(this.left + this.right, " x ").concat(this.top + this.bottom);
        this.nodes.y.style.marginTop = '-' + this.top + 'px';
        this.nodes.y.style.height = this.top + this.bottom + 'px';
        this.nodes.x.style.marginLeft = '-' + this.right + 'px';
        this.nodes.x.style.width = this.left + this.right + 'px';
      }
    }
  }, {
    key: "fixPositionRails",
    value: function fixPositionRails() {
      var isAllSet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      //
      var rectX = this.nodes.x.getBoundingClientRect();
      var rectY = this.nodes.y.getBoundingClientRect();

      if (isAllSet) {
        var railX = document.createElement('div');
        railX.classList.add('js-rail');
        railX.classList.add('rail-x');
        railX.style.width = this.nodes.x.style.width;
        railX.style.top = window.scrollY + rectX.top + 'px';
        railX.style.left = window.scrollX + rectX.left + 'px';
        railX.title = this.nodes.x.style.width;
        document.body.appendChild(railX);
        var railY = document.createElement('div');
        railY.classList.add('js-rail');
        railY.classList.add('rail-y');
        railY.style.height = this.nodes.y.style.height;
        railY.style.top = window.scrollY + rectY.top + 'px';
        railY.style.left = window.scrollX + rectY.left + 'px';
        railY.title = this.nodes.y.style.height;
        document.body.appendChild(railY);
      } else {
        var rail = document.createElement('div');
        rail.classList.add('js-rail');

        if (parseInt(this.nodes.x.style.width) < parseInt(this.nodes.y.style.height)) {
          rail.classList.add('rail-x');
          rail.style.width = this.nodes.x.style.width;
          rail.style.top = window.scrollY + rectX.top + 'px';
          rail.style.left = window.scrollX + rectX.left + 'px';
          rail.title = this.nodes.x.style.width;
        } else {
          rail.classList.add('rail-y');
          rail.style.height = this.nodes.y.style.height;
          rail.style.top = window.scrollY + rectY.top + 'px';
          rail.style.left = window.scrollX + rectY.left + 'px';
          rail.title = this.nodes.y.style.height;
        }

        document.body.appendChild(rail);
      }
    }
  }, {
    key: "clearRails",
    value: function clearRails() {
      var rails = document.querySelectorAll('.js-rail');

      if (rails) {
        rails.forEach(function (rail) {
          rail.remove();
        });
      }
    }
  }, {
    key: "showWindowWH",
    value: function showWindowWH() {
      var divContainer = document.createElement('div');
      divContainer.classList.add('js-window-wh');
      divContainer.classList.add('window-wh');
      divContainer.classList.add('window-wh_show');
      divContainer.innerHTML = window.innerWidth + 'x' + window.innerHeight;
      document.body.appendChild(divContainer);
      setTimeout(function () {
        if (divContainer) {
          divContainer.classList.remove('window-wh_show');
        }
      }, 800);
      setTimeout(function () {
        if (divContainer) {
          divContainer.remove();
        }
      }, 1000);
    }
  }, {
    key: "showDocumentWH",
    value: function showDocumentWH() {
      var divContainer = document.createElement('div');
      var body = document.body;
      var html = document.documentElement;
      var width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
      var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      var windowWHs = document.querySelectorAll('.js-window-wh');

      if (windowWHs) {
        windowWHs.forEach(function (div) {
          div.remove();
        });
      }

      divContainer.classList.add('js-window-wh');
      divContainer.classList.add('window-wh');
      divContainer.classList.add('window-wh_show');
      divContainer.innerHTML = width + 'x' + height;
      document.body.appendChild(divContainer);
      setTimeout(function () {
        divContainer.classList.remove('window-wh_show');
      }, 1000);
      setTimeout(function () {
        divContainer.remove();
      }, 1200);
    }
  }, {
    key: "hideWHs",
    value: function hideWHs() {
      var windowWHs = document.querySelectorAll('.js-window-wh');

      if (windowWHs) {
        windowWHs.forEach(function (div) {
          div.remove();
        });
      }
    }
  }, {
    key: "parseScreenshot",
    value: function parseScreenshot(png) {
      this.image.onload = this.loadImage(this.screenshotProcessed.bind(this));
      this.image.src = png;
    }
  }, {
    key: "inBoundaries",
    value: function inBoundaries(x, y) {
      return x >= 0 && x < this.screenWidth && y >= 0 && y < this.screenHeight;
    }
  }, {
    key: "getLightnessAt",
    value: function getLightnessAt() {
      // получает позицию курсора в массиве
      return this.inBoundaries(this.x, this.y) ? this.y * this.screenWidth + this.x : -1;
    }
  }, {
    key: "screenshotProcessed",
    value: function screenshotProcessed(data) {
      // получает свойства скриншота и вызывает методы вычисления
      this.imgData = new Uint8ClampedArray(data.imgData);
      this.screenWidth = data.width;
      this.screenHeight = data.height;
    }
  }, {
    key: "getColorCursorPoint",
    value: function getColorCursorPoint() {
      // получает цвет пикселя под курсором
      var length = this.getLightnessAt() * 4;
      var RGBA = {
        r: this.imgData[length],
        g: this.imgData[length + 1],
        b: this.imgData[length + 2],
        a: this.imgData[length + 3]
      };
      return RGBA;
    }
  }, {
    key: "loadImage",
    value: function loadImage(fn) {
      var _this2 = this;

      setTimeout(function () {
        if (window.innerWidth && window.innerHeight) {
          _this2.ctx = _this2.canvas.getContext('2d');
          _this2.canvas.width = window.innerWidth;
          _this2.canvas.height = window.innerHeight;

          _this2.ctx.drawImage(_this2.image, 0, 0, _this2.canvas.width, _this2.canvas.height);

          var imgData = _this2.ctx.getImageData(0, 0, _this2.canvas.width, _this2.canvas.height).data;

          fn({
            type: 'imgData',
            imgData: imgData.buffer,
            width: _this2.canvas.width,
            height: _this2.canvas.height
          });

          _this2.update();
        }
      }, 100);
    }
  }]);

  return Dimension;
}();



/***/ }),

/***/ "./js/classes/RectangleRuler.js":
/*!**************************************!*\
  !*** ./js/classes/RectangleRuler.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RectangleRuler; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var RectangleRuler = /*#__PURE__*/function () {
  function RectangleRuler() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RectangleRuler);

    this.action = '';
    this.resizeSide = '';
    this.rect = {};
    this.rectangleNode = false;
    this.tooltipSizeNode = false;
    this.tooltipPosNode = false;
    this.mouseX = 0;
    this.mouseY = 0;
    this.bind();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RectangleRuler, [{
    key: "create",
    value: function create(isAutoSet) {
      var rulers = document.querySelectorAll('.js-rectangle-ruler');
      var top = 100;
      var left = 100;
      var width = 200;
      var height = 100;

      if (isAutoSet) {
        var elemOverCursor = document.elementFromPoint(this.mouseX, this.mouseY);

        if (elemOverCursor) {
          top = window.scrollY + elemOverCursor.getBoundingClientRect().top;
          left = window.scrollX + elemOverCursor.getBoundingClientRect().left;
          width = elemOverCursor.getBoundingClientRect().width;
          height = elemOverCursor.getBoundingClientRect().height;
        }
      } else if (rulers) {
        top = 100 + rulers.length * 10;
        left = 100 + rulers.length * 10;
      }

      top = Math.ceil(top);
      left = Math.ceil(left);
      width = Math.ceil(width);
      height = Math.ceil(height);
      var container = document.createElement('div');
      container.classList.add('js-rectangle-ruler');
      container.classList.add('rectangle-ruler');
      var html = "\n            <div class=\"js-rectangle rectangle-ruler__rectangle ui-resizable\" data-action=\"move\" style=\"".concat('top:' + top + 'px;' + 'left:' + left + 'px;' + 'width:' + width + 'px;' + 'height:' + height + 'px;', "\">\n                <div class=\"rectangle-ruler__nav\">\n                    <div class=\"js-rectangle-close rectangle-close\" data-action=\"close\"></div>\n                    <div class=\"js-rectangle-pin rectangle-pin\" data-action=\"pin\"></div>\n                </div>\n                <div class=\"rectangle-ruler__tooltip\" data-action=\"move\">\n                    <div class=\"js-rectangle-tooltip-size rectangle-tooltip__size tooltip__bottom rectangle-tooltip_center\" data-action=\"move\">").concat(width, "x").concat(height, "</div>\n                    <div class=\"js-rectangle-tooltip-pos rectangle-tooltip__pos tooltip__bottom hide\" data-action=\"move\">").concat(top, "x").concat(left, "</div>\n                </div>\n                <div class=\"ui-resizable-n\" data-action=\"resize\" data-resize=\"n\"></div>\n                <div class=\"ui-resizable-w\" data-action=\"resize\" data-resize=\"w\"></div>\n                <div class=\"ui-resizable-s\" data-action=\"resize\" data-resize=\"s\"></div>\n                <div class=\"ui-resizable-e\" data-action=\"resize\" data-resize=\"e\"></div>\n                <div class=\"ui-resizable-se\" data-action=\"resize\" data-resize=\"se\"></div>\n            </div>\n            <div class=\"rectangle-ruler__no-cursor\"></div>\n        ");
      container.insertAdjacentHTML('beforeend', html);
      document.body.appendChild(container);

      if (isAutoSet) {
        var pin = container.querySelector('.js-rectangle-pin');
        this.action = 'pin';
        this.rulerNode = container;
        this.rectangleNode = this.rulerNode.querySelector('.js-rectangle');
        this.triggerMouseEvent(pin, 'mouseup');
      }
    }
  }, {
    key: "getRuler",
    value: function getRuler(target, selector) {
      var container = false;

      if (target.classList.contains(selector)) {
        return target;
      } else {
        var ruler = target.closest('.js-rectangle-ruler');

        if (selector === 'js-rectangle-ruler') {
          return ruler;
        } else if (ruler) {
          var result = ruler.querySelector('.' + selector);

          if (result) {
            return result;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
  }, {
    key: "bind",
    value: function bind() {
      document.addEventListener('mousedown', this.mouseDown.bind(this));
      document.addEventListener('mouseup', this.mouseUp.bind(this));
      document.addEventListener('mousemove', this.mouseMove.bind(this));
      document.addEventListener('keydown', this.keyDown.bind(this));
    }
  }, {
    key: "triggerMouseEvent",
    value: function triggerMouseEvent(node, eventType) {
      var clickEvent = document.createEvent('MouseEvents');
      clickEvent.initEvent(eventType, true, true);
      node.dispatchEvent(clickEvent);
    }
  }, {
    key: "mouseDown",
    value: function mouseDown(ev) {
      this.rulerNode = this.getRuler(ev.target, 'js-rectangle-ruler');

      if (this.rulerNode) {
        var _ev$target$dataset;

        this.rectangleNode = this.rulerNode.querySelector('.js-rectangle');
        this.tooltipSizeNode = this.rulerNode.querySelector('.js-rectangle-tooltip-size');
        this.tooltipPosNode = this.rulerNode.querySelector('.js-rectangle-tooltip-pos');
        this.action = (_ev$target$dataset = ev.target.dataset) === null || _ev$target$dataset === void 0 ? void 0 : _ev$target$dataset.action;

        if (this.action && this.rectangleNode && this.tooltipSizeNode && this.tooltipPosNode) {
          if (this.action === 'resize') {
            var _ev$target$dataset2;

            var resize = (_ev$target$dataset2 = ev.target.dataset) === null || _ev$target$dataset2 === void 0 ? void 0 : _ev$target$dataset2.resize;
            this.rect = {
              startLeft: this.rectangleNode.classList.contains('rectangle-ruler__rectangle_fix') ? window.scrollX + this.rectangleNode.getBoundingClientRect().left : this.rectangleNode.getBoundingClientRect().left,
              startTop: this.rectangleNode.classList.contains('rectangle-ruler__rectangle_fix') ? window.scrollY + this.rectangleNode.getBoundingClientRect().top : this.rectangleNode.getBoundingClientRect().top,
              shiftX: window.scrollX + (ev.clientX - this.rectangleNode.getBoundingClientRect().left),
              shiftY: window.scrollY + (ev.clientY - this.rectangleNode.getBoundingClientRect().top),
              startX: ev.clientX,
              startY: ev.clientY,
              shiftWidth: this.rectangleNode.getBoundingClientRect().width,
              shiftHeight: this.rectangleNode.getBoundingClientRect().height
            };
            this.resizeSide = resize ? resize : '';
          } else if (this.action === 'move') {
            this.rect = {
              startLeft: this.rectangleNode.getBoundingClientRect().left,
              startTop: this.rectangleNode.getBoundingClientRect().top,
              shiftX: this.rectangleNode.classList.contains('rectangle-ruler__rectangle_fix') ? ev.clientX - this.rectangleNode.getBoundingClientRect().left : window.scrollX + (ev.clientX - this.rectangleNode.getBoundingClientRect().left),
              shiftY: this.rectangleNode.classList.contains('rectangle-ruler__rectangle_fix') ? ev.clientY - this.rectangleNode.getBoundingClientRect().top : window.scrollY + (ev.clientY - this.rectangleNode.getBoundingClientRect().top),
              startX: ev.clientX,
              startY: ev.clientY,
              shiftWidth: this.rectangleNode.getBoundingClientRect().width,
              shiftHeight: this.rectangleNode.getBoundingClientRect().height
            };
            this.debounce(this.showPos.bind(this), 0);
          }
        }
      } else {
        this.rectangleNode = false;
        this.tooltipSizeNode = false;
        this.tooltipPosNode = false;
        this.action = '';
        this.resizeSide = '';
        this.offsetY = 0;
        this.offsetX = 0;
      }
    }
  }, {
    key: "mouseUp",
    value: function mouseUp(ev) {
      if (this.action && this.rulerNode) {
        if (this.action === 'close') {
          if (this.rulerNode) {
            this.rulerNode.remove();
          }
        } else if (this.action === 'pin') {
          var btn = this.rectangleNode.querySelector('.js-rectangle-pin');

          if (btn) {
            if (btn.classList.contains('active')) {
              var y = window.scrollY + (ev.clientY - this.rectangleNode.getBoundingClientRect().top);
              var x = window.scrollX + (ev.clientX - this.rectangleNode.getBoundingClientRect().left);
              this.rectangleNode.style.top = ev.pageY - y + 'px';
              this.rectangleNode.style.left = ev.pageX - x + 'px';
              btn.classList.remove('active');
              this.rectangleNode.classList.remove('rectangle-ruler__rectangle_fix');
            } else {
              var _y = ev.clientY - this.rectangleNode.getBoundingClientRect().top;

              var _x = ev.clientX - this.rectangleNode.getBoundingClientRect().left;

              this.rectangleNode.style.top = ev.pageY - _y + 'px';
              this.rectangleNode.style.left = ev.pageX - _x + 'px';
              btn.classList.add('active');
              this.rectangleNode.classList.add('rectangle-ruler__rectangle_fix');
            }
          } else {
            debugger;
          }
        } else {
          this.updateTooltip(this.rectangleNode, this.tooltipSizeNode, this.tooltipPosNode);
          this.debounce(this.hidePos.bind(this), 1000);
        }
      }

      this.action = '';
      this.resizeSide = '';
      this.offsetY = 0;
      this.offsetX = 0;
    }
  }, {
    key: "showPos",
    value: function showPos() {
      this.tooltipPosNode.classList.remove('hide');
      this.tooltipSizeNode.classList.add('hide');
    }
  }, {
    key: "hidePos",
    value: function hidePos() {
      this.tooltipPosNode.classList.add('hide');
      this.tooltipSizeNode.classList.remove('hide');
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(ev) {
      this.mouseX = ev.clientX;
      this.mouseY = ev.clientY;

      if (this.action === 'move') {
        var rect = this.rectangleNode.getBoundingClientRect();
        this.rectangleNode.style.top = ev.pageY - this.rect.shiftY + 'px';
        this.rectangleNode.style.left = ev.pageX - this.rect.shiftX + 'px';
        this.updateTooltip(this.rectangleNode, this.tooltipSizeNode, this.tooltipPosNode);
      } else if (this.action === 'resize') {
        if (this.rectangleNode.getBoundingClientRect().width > 120 && this.rectangleNode.getBoundingClientRect().height > 50) {
          this.tooltipSizeNode.classList.add('rectangle-tooltip_center');
        } else {
          this.tooltipSizeNode.classList.remove('rectangle-tooltip_center');
        }

        if (this.resizeSide === 'se') {
          this.rectangleNode.style.width = this.rect.shiftWidth + ev.clientX - this.rect.startX + 'px';
          this.rectangleNode.style.height = this.rect.shiftHeight + ev.clientY - this.rect.startY + 'px';
        } else if (this.resizeSide === 'e') {
          this.rectangleNode.style.width = this.rect.shiftWidth + ev.clientX - this.rect.startX + 'px';
        } else if (this.resizeSide === 's') {
          this.rectangleNode.style.height = this.rect.shiftHeight + ev.clientY - this.rect.startY + 'px';
        } else if (this.resizeSide === 'w') {
          var newLeft = ev.pageX - this.rect.shiftX;
          this.rectangleNode.style.left = newLeft + 'px';
          this.rectangleNode.style.width = this.rect.shiftWidth + (this.rect.startLeft - newLeft) + 'px';
        } else if (this.resizeSide === 'n') {
          var newTop = this.rectangleNode.classList.contains('rectangle-ruler__rectangle_fix') ? window.scrollY + (ev.pageY - this.rect.shiftY) : ev.pageY - this.rect.shiftY;
          this.rectangleNode.style.top = newTop + 'px';
          this.rectangleNode.style.height = this.rect.shiftHeight + (this.rect.startTop - newTop) + 'px';
        }

        this.updateTooltip(this.rectangleNode, this.tooltipSizeNode, this.tooltipPosNode);
      }
    }
  }, {
    key: "keyDown",
    value: function keyDown(ev) {
      if (this.rectangleNode) {
        if (ev.key === 'ArrowUp') {
          ev.preventDefault();
          ev.stopPropagation();
          this.rectangleNode.style.top = +this.rectangleNode.style.top.replace('px', '') - 1 + 'px';
          this.showPos();
          this.updateTooltip(this.rectangleNode, this.tooltipSizeNode, this.tooltipPosNode);
          this.debounce(this.hidePos.bind(this), 500);
        } else if (ev.key === 'ArrowDown') {
          ev.preventDefault();
          ev.stopPropagation();
          this.rectangleNode.style.top = +this.rectangleNode.style.top.replace('px', '') + 1 + 'px';
          this.showPos();
          this.updateTooltip(this.rectangleNode, this.tooltipSizeNode, this.tooltipPosNode);
          this.debounce(this.hidePos.bind(this), 500);
        } else if (ev.key === 'ArrowLeft') {
          ev.preventDefault();
          ev.stopPropagation();
          this.rectangleNode.style.left = +this.rectangleNode.style.left.replace('px', '') - 1 + 'px';
          this.showPos();
          this.updateTooltip(this.rectangleNode, this.tooltipSizeNode, this.tooltipPosNode);
          this.debounce(this.hidePos.bind(this), 500);
        } else if (ev.key === 'ArrowRight') {
          ev.preventDefault();
          ev.stopPropagation();
          this.rectangleNode.style.left = +this.rectangleNode.style.left.replace('px', '') + 1 + 'px';
          this.showPos();
          this.updateTooltip(this.rectangleNode, this.tooltipSizeNode, this.tooltipPosNode);
          this.debounce(this.hidePos.bind(this), 500);
        }
      }
    }
  }, {
    key: "updateTooltip",
    value: function updateTooltip(rectangle, tooltipSize, tooltipPos) {
      var rect = rectangle.getBoundingClientRect();
      tooltipSize.innerHTML = rect.width + 'x' + rect.height;

      if (this.rectangleNode.classList.contains('rectangle-ruler__rectangle_fix')) {
        tooltipPos.innerHTML = rectangle.offsetLeft + 'x' + rectangle.offsetTop;
      } else {
        tooltipPos.innerHTML = rect.left + 'x' + rect.top;
      }
    }
  }, {
    key: "debounce",
    value: function debounce(func, delay) {
      if (this.debId) {
        clearTimeout(this.debId);
        this.debId = 0;
      }

      this.debId = setTimeout(func, delay);
    }
  }]);

  return RectangleRuler;
}();



/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Dimension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Dimension */ "./js/classes/Dimension.js");
/* harmony import */ var _classes_RectangleRuler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/RectangleRuler */ "./js/classes/RectangleRuler.js");


var dimension = new _classes_Dimension__WEBPACK_IMPORTED_MODULE_0__["default"]();
var rectangleRuler = new _classes_RectangleRuler__WEBPACK_IMPORTED_MODULE_1__["default"]();
var setKeys = [];
var active = '';
var quickKeys = {
  'AltLeft + KeyZ': function AltLeftKeyZ() {
    var key = 'dimensions';

    if (active === key) {
      active = '';
      dimension.stop();
      return false;
    } else if (active === '') {
      active = key;
      dimension.hideWHs();
      return true;
    }
  },
  'AltLeft + KeyX': function AltLeftKeyX() {
    rectangleRuler.create();
    return false;
  },
  'AltLeft + KeyC': function AltLeftKeyC() {
    dimension.clearRails();
    return false;
  },
  'AltLeft + KeyD': function AltLeftKeyD() {
    dimension.fixPositionRails(true);
    return false;
  },
  'AltLeft + KeyS': function AltLeftKeyS() {
    dimension.fixPositionRails();
    return false;
  },
  'AltLeft + ShiftLeft': function AltLeftShiftLeft() {
    if (active === 'dimensions') {
      dimension.measureContainer = true;
    } else if (active === '') {
      dimension.showDocumentWH();
    }

    return false;
  },
  'AltLeft + ShiftLeft + KeyX': function AltLeftShiftLeftKeyX() {
    if (active === '') {
      rectangleRuler.create(true);
    }

    return false;
  },
  'AltLeft': function AltLeft() {
    if (active === '') {
      dimension.showWindowWH();
    }

    return false;
  }
};
var actions = {
  'takeScreenshot': function takeScreenshot(request, sender, sendResponse) {
    dimension.parseScreenshot(request.screenPng);
  }
}; // receiveWorkerMessage

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action && typeof actions[request.action] === 'function') {
    actions[request.action](request, sender, sendResponse);
  }

  return true;
});
window.addEventListener('keydown', function (ev) {
  setKeys.push(ev.code);

  if (setKeys.length >= 1 && typeof quickKeys[setKeys.join(' + ')] === 'function') {
    if (quickKeys[setKeys.join(' + ')]()) {
      chrome.runtime.sendMessage({
        optionActivate: active
      });
    }
  }
});
window.addEventListener('keyup', function (ev) {
  setKeys = [];
  dimension.measureContainer = false;
});
window.addEventListener('mousemove', function (ev) {
  dimension.handleMouseMove(ev);
});
var scrollScreenDebounce = 0;
var scrollScreenProcess = false;
['scroll', 'mousewheel'].forEach(function (listener) {
  window.addEventListener(listener, function (ev) {
    if (listener === 'mousewheel') {
      handleScreenChange(800, 100);
    } else if (listener === 'scroll') {// handleScreenChange(100, 50);
    }
  }, false);
});

function handleScreenChange(timeoutDeb, timeoutScreen) {
  if (active === 'dimensions' && scrollScreenProcess === false) {
    scrollScreenProcess = true;

    if (scrollScreenDebounce) {
      clearTimeout(scrollScreenDebounce);
    }

    scrollScreenDebounce = setTimeout(function () {
      quickKeys['AltLeft + KeyZ']();
      setTimeout(function () {
        if (quickKeys['AltLeft + KeyZ']()) {
          console.log('scrollScreenDebounce - 2', active);
          chrome.runtime.sendMessage({
            optionActivate: active
          });
          scrollScreenProcess = false;
        }
      }, timeoutScreen);
    }, timeoutDeb);
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./js/index.js ./scss/main.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./js/index.js */"./js/index.js");
module.exports = __webpack_require__(/*! ./scss/main.scss */"./scss/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9EaW1lbnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9SZWN0YW5nbGVSdWxlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJEaW1lbnNpb24iLCJpbWFnZSIsIkltYWdlIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29sb3JIb2xkIiwiaW1nRGF0YSIsIngiLCJ5IiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJkZWJvdW5jZVVwZGF0ZSIsInRpbWVyIiwicmFuZ2VYIiwicmFuZ2VZIiwibWlkQ29sb3IiLCJyIiwiZyIsImIiLCJhIiwiY3JlYXRlIiwiaHRtbCIsImJvZHkiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJub2RlcyIsInBvaW50IiwicXVlcnlTZWxlY3RvciIsInRvb2x0aXAiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJldiIsImNsaWVudFgiLCJjbGllbnRZIiwiY2xlYXJUaW1lb3V0IiwibGVuZ3RoIiwic2V0VGltZW91dCIsInVwZGF0ZSIsIm1lYXN1cmVBcmVhIiwiZHJhdyIsImdldENvbG9yQ3Vyc29yUG9pbnQiLCJwYXJzZSIsInR5cGUiLCJpIiwibWF4U3RlcCIsImluQm91bmRhcmllcyIsIlJHQkEiLCJpc1NhbWUiLCJub0N1cnNvckRpdiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGQiLCJtZWFzdXJlQ29udGFpbmVyIiwiZWxlbU92ZXJDdXJzb3IiLCJlbGVtZW50RnJvbVBvaW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJpc0FsbFNldCIsInJlY3RYIiwicmVjdFkiLCJyYWlsWCIsInNjcm9sbFkiLCJzY3JvbGxYIiwidGl0bGUiLCJhcHBlbmRDaGlsZCIsInJhaWxZIiwicmFpbCIsInBhcnNlSW50IiwicmFpbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImRpdkNvbnRhaW5lciIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiTWF0aCIsIm1heCIsInNjcm9sbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsIndpbmRvd1dIcyIsImRpdiIsInBuZyIsIm9ubG9hZCIsImxvYWRJbWFnZSIsInNjcmVlbnNob3RQcm9jZXNzZWQiLCJiaW5kIiwic3JjIiwiZGF0YSIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiZ2V0TGlnaHRuZXNzQXQiLCJmbiIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJnZXRJbWFnZURhdGEiLCJidWZmZXIiLCJSZWN0YW5nbGVSdWxlciIsImFjdGlvbiIsInJlc2l6ZVNpZGUiLCJyZWN0IiwicmVjdGFuZ2xlTm9kZSIsInRvb2x0aXBTaXplTm9kZSIsInRvb2x0aXBQb3NOb2RlIiwibW91c2VYIiwibW91c2VZIiwiaXNBdXRvU2V0IiwicnVsZXJzIiwiY2VpbCIsImNvbnRhaW5lciIsInBpbiIsInJ1bGVyTm9kZSIsInRyaWdnZXJNb3VzZUV2ZW50IiwidGFyZ2V0Iiwic2VsZWN0b3IiLCJjb250YWlucyIsInJ1bGVyIiwiY2xvc2VzdCIsInJlc3VsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3VzZURvd24iLCJtb3VzZVVwIiwibW91c2VNb3ZlIiwia2V5RG93biIsIm5vZGUiLCJldmVudFR5cGUiLCJjbGlja0V2ZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiZ2V0UnVsZXIiLCJkYXRhc2V0IiwicmVzaXplIiwic3RhcnRMZWZ0Iiwic3RhcnRUb3AiLCJzaGlmdFgiLCJzaGlmdFkiLCJzdGFydFgiLCJzdGFydFkiLCJzaGlmdFdpZHRoIiwic2hpZnRIZWlnaHQiLCJkZWJvdW5jZSIsInNob3dQb3MiLCJvZmZzZXRZIiwib2Zmc2V0WCIsImJ0biIsInBhZ2VZIiwicGFnZVgiLCJ1cGRhdGVUb29sdGlwIiwiaGlkZVBvcyIsIm5ld0xlZnQiLCJuZXdUb3AiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlcGxhY2UiLCJyZWN0YW5nbGUiLCJ0b29sdGlwU2l6ZSIsInRvb2x0aXBQb3MiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwiZnVuYyIsImRlbGF5IiwiZGViSWQiLCJkaW1lbnNpb24iLCJyZWN0YW5nbGVSdWxlciIsInNldEtleXMiLCJhY3RpdmUiLCJxdWlja0tleXMiLCJzdG9wIiwiaGlkZVdIcyIsImNsZWFyUmFpbHMiLCJmaXhQb3NpdGlvblJhaWxzIiwic2hvd0RvY3VtZW50V0giLCJzaG93V2luZG93V0giLCJhY3Rpb25zIiwicmVxdWVzdCIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsInBhcnNlU2NyZWVuc2hvdCIsInNjcmVlblBuZyIsImNocm9tZSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInB1c2giLCJjb2RlIiwiam9pbiIsInNlbmRNZXNzYWdlIiwib3B0aW9uQWN0aXZhdGUiLCJoYW5kbGVNb3VzZU1vdmUiLCJzY3JvbGxTY3JlZW5EZWJvdW5jZSIsInNjcm9sbFNjcmVlblByb2Nlc3MiLCJsaXN0ZW5lciIsImhhbmRsZVNjcmVlbkNoYW5nZSIsInRpbWVvdXREZWIiLCJ0aW1lb3V0U2NyZWVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGcUJBLFM7QUFHakIsdUJBQWM7QUFBQTs7QUFBQSwyR0FGSyxLQUVMOztBQUNWLFNBQUtDLEtBQUwsR0FBYSxJQUFJQyxLQUFKLEVBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVMsQ0FBVDtBQUNBLFNBQUtDLEdBQUwsR0FBVyxDQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxTQUFLQyxJQUFMLEdBQVks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Ozs7Ozs7Ozs7O0FDZkEsdUMiLCJmaWxlIjoiLi9hcHAvanMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGltZW5zaW9uIHtcbiAgICBtZWFzdXJlQ29udGFpbmVyID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmNvbG9ySG9sZCA9IDg7XG4gICAgICAgIHRoaXMuaW1nRGF0YSA9IFtdO1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLnRvcCA9IDA7XG4gICAgICAgIHRoaXMuYm90dG9tID0gMDtcbiAgICAgICAgdGhpcy5sZWZ0ID0gMDtcbiAgICAgICAgdGhpcy5yaWdodCA9IDA7XG4gICAgICAgIHRoaXMuc2NyZWVuV2lkdGggPSAwO1xuICAgICAgICB0aGlzLnNjcmVlbkhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuZGVib3VuY2VVcGRhdGUgPSB7XG4gICAgICAgICAgICB0aW1lcjogMCxcbiAgICAgICAgICAgIHJhbmdlWDogMCxcbiAgICAgICAgICAgIHJhbmdlWTogMCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5taWRDb2xvciA9IHtyOjI1NSwgZzoyNTUsIGI6MjU1LCBhOjI1NX07XG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICBjb25zdCBodG1sID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwianMtZGltZW5zaW9uXCIgc3R5bGU9XCJsZWZ0OiAwcHg7IHRvcDogMHB4O1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIngganMtZGltZW5zaW9uX19heGlzXCIgc3R5bGU9XCJsZWZ0OiAwcHg7IHdpZHRoOiAwcHg7XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwieSBqcy1kaW1lbnNpb25fX2F4aXNcIiBzdHlsZT1cInRvcDogMHB4OyBoZWlnaHQ6IDBweDtcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqcy1kaW1lbnNpb25fX3Rvb2x0aXBcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaW1lbnNpb25fX25vY3Vyc29yXCI+PC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sKTtcblxuICAgICAgICB0aGlzLm5vZGVzID0ge1xuICAgICAgICAgICAgcG9pbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1kaW1lbnNpb24nKSxcbiAgICAgICAgICAgIHg6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1kaW1lbnNpb25fX2F4aXMueCcpLFxuICAgICAgICAgICAgeTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWRpbWVuc2lvbl9fYXhpcy55JyksXG4gICAgICAgICAgICB0b29sdGlwOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZGltZW5zaW9uX190b29sdGlwJyksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5pbWdEYXRhID0gW107XG4gICAgICAgIHRoaXMuc2NyZWVuV2lkdGggPSAwO1xuICAgICAgICB0aGlzLnNjcmVlbkhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuZGVib3VuY2VVcGRhdGUgPSB7XG4gICAgICAgICAgICB0aW1lcjogMCxcbiAgICAgICAgICAgIHJhbmdlWDogMCxcbiAgICAgICAgICAgIHJhbmdlWTogMCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm5vZGVzLnRvb2x0aXAuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMubm9kZXMucG9pbnQuY2xhc3NMaXN0LnJlbW92ZSgnb24nKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU1vdmUoZXYpIHtcbiAgICAgICAgdGhpcy54ID0gZXYuY2xpZW50WDtcbiAgICAgICAgdGhpcy55ID0gZXYuY2xpZW50WTtcblxuICAgICAgICBpZiAodGhpcy5kZWJvdW5jZVVwZGF0ZS50aW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VVcGRhdGUudGltZXIpO1xuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZVVwZGF0ZS50aW1lciA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbWdEYXRhICYmIHRoaXMuaW1nRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBldi5jbGllbnRYID4gKHRoaXMuZGVib3VuY2VVcGRhdGUucmFuZ2VYICsgNSkgfHxcbiAgICAgICAgICAgICAgICBldi5jbGllbnRYIDwgKHRoaXMuZGVib3VuY2VVcGRhdGUucmFuZ2VYIC0gNSkgfHxcbiAgICAgICAgICAgICAgICBldi5jbGllbnRZID4gKHRoaXMuZGVib3VuY2VVcGRhdGUucmFuZ2VZICsgNSkgfHxcbiAgICAgICAgICAgICAgICBldi5jbGllbnRZIDwgKHRoaXMuZGVib3VuY2VVcGRhdGUucmFuZ2VZIC0gNSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2VVcGRhdGUudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9LCA1KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWJvdW5jZVVwZGF0ZS50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmRlYm91bmNlVXBkYXRlLnJhbmdlWCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy5kZWJvdW5jZVVwZGF0ZS5yYW5nZVkgPSB0aGlzLnk7XG5cbiAgICAgICAgdGhpcy5tZWFzdXJlQXJlYSgpO1xuICAgICAgICB0aGlzLmRyYXcodGhpcy5kZWJvdW5jZVVwZGF0ZS5yYW5nZVgsIHRoaXMuZGVib3VuY2VVcGRhdGUucmFuZ2VZKTtcbiAgICB9XG5cbiAgICBtZWFzdXJlQXJlYSgpIHtcbiAgICAgICAgbGV0IHggPSB0aGlzLng7XG4gICAgICAgIGxldCB5ID0gdGhpcy55O1xuXG4gICAgICAgIHRoaXMubWlkQ29sb3IgPSB0aGlzLmdldENvbG9yQ3Vyc29yUG9pbnQoKTtcbiAgICAgICAgdGhpcy5wYXJzZSh4LCB5LCAndG9wJyk7XG4gICAgICAgIHRoaXMucGFyc2UoeCwgeSwgJ2JvdHRvbScpO1xuICAgICAgICB0aGlzLnBhcnNlKHgsIHksICdsZWZ0Jyk7XG4gICAgICAgIHRoaXMucGFyc2UoeCwgeSwgJ3JpZ2h0Jyk7XG4gICAgfVxuXG4gICAgcGFyc2UoeCwgeSwgdHlwZSwgaSA9IDAsIG1heFN0ZXAgPSA1MDAwKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICB5ID0geS0xO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgICB5ID0geSsxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgeCA9IHgrMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICB4ID0geC0xO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5pbkJvdW5kYXJpZXMoeCwgeSkgPyAoKHkgKiB0aGlzLnNjcmVlbldpZHRoICsgeCkgKiA0KSA6IC0xO1xuXG4gICAgICAgIGlmIChsZW5ndGggPiAtMSkge1xuICAgICAgICAgICAgY29uc3QgUkdCQSA9IHtcbiAgICAgICAgICAgICAgICByOiB0aGlzLmltZ0RhdGFbbGVuZ3RoXSwgZzogdGhpcy5pbWdEYXRhW2xlbmd0aCArIDFdLCBiOiB0aGlzLmltZ0RhdGFbbGVuZ3RoICsgMl0sIGE6IHRoaXMuaW1nRGF0YVtsZW5ndGggKyAzXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGlzU2FtZSA9IChcbiAgICAgICAgICAgICAgICAoUkdCQS5yIDwgdGhpcy5taWRDb2xvci5yICsgdGhpcy5jb2xvckhvbGQgJiYgUkdCQS5yID4gdGhpcy5taWRDb2xvci5yIC0gdGhpcy5jb2xvckhvbGQpICYmXG4gICAgICAgICAgICAgICAgKFJHQkEuZyA8IHRoaXMubWlkQ29sb3IuZyArIHRoaXMuY29sb3JIb2xkICYmIFJHQkEuZyA+IHRoaXMubWlkQ29sb3IuZyAtIHRoaXMuY29sb3JIb2xkKSAmJlxuICAgICAgICAgICAgICAgIChSR0JBLmIgPCB0aGlzLm1pZENvbG9yLmIgKyB0aGlzLmNvbG9ySG9sZCAmJiBSR0JBLmIgPiB0aGlzLm1pZENvbG9yLmIgLSB0aGlzLmNvbG9ySG9sZCkgJiZcbiAgICAgICAgICAgICAgICAoUkdCQS5hIDwgdGhpcy5taWRDb2xvci5hICsgdGhpcy5jb2xvckhvbGQgJiYgUkdCQS5hID4gdGhpcy5taWRDb2xvci5hIC0gdGhpcy5jb2xvckhvbGQpXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChpc1NhbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4U3RlcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlKHgsIHksIHR5cGUsICsraSwgLS1tYXhTdGVwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpc1t0eXBlXSA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzW3R5cGVdID0gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXcoY2xpZW50WCwgY2xpZW50WSkge1xuICAgICAgICBsZXQgeCA9IGNsaWVudFg7XG4gICAgICAgIGxldCB5ID0gY2xpZW50WTtcbiAgICAgICAgY29uc3Qgbm9DdXJzb3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGltZW5zaW9uX19ub2N1cnNvcicpO1xuXG4gICAgICAgIGlmIChjbGllbnRYICsgMTAwID4gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZXMudG9vbHRpcC5jbGFzc0xpc3QuYWRkKCd0cmFuc2xhdGVYJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLnRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNsYXRlWCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsaWVudFkgLSAxMDAgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLnRvb2x0aXAuY2xhc3NMaXN0LmFkZCgndHJhbnNsYXRlWScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLnRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNsYXRlWScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWVhc3VyZUNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29uc3QgZWxlbU92ZXJDdXJzb3IgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpO1xuXG4gICAgICAgICAgICBpZiAoZWxlbU92ZXJDdXJzb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9DdXJzb3JEaXYpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9DdXJzb3JEaXYuY2xhc3NMaXN0LmFkZCgnZGltZW5zaW9uX19ub2N1cnNvcl9oaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wID0gZWxlbU92ZXJDdXJzb3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBlbGVtT3ZlckN1cnNvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZWxlbU92ZXJDdXJzb3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZWxlbU92ZXJDdXJzb3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgdGhpcy50b3AgPSB0aGlzLnRvcCsxO1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCsxO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMucG9pbnQuY2xhc3NMaXN0LmFkZCgnb24nKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnBvaW50LnN0eWxlLnRvcCA9ICh0b3AgKyAoaGVpZ2h0LzIpKSArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy5wb2ludC5zdHlsZS5sZWZ0ID0gKGxlZnQgKyAod2lkdGgvMikpICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnRvb2x0aXAuaW5uZXJIVE1MID0gYCR7d2lkdGh9IHggJHtoZWlnaHR9YDtcblxuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMueS5zdHlsZS5tYXJnaW5Ub3AgPSAtKGhlaWdodC8yKSArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy55LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnguc3R5bGUubWFyZ2luTGVmdCA9IC0od2lkdGgvMikgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMueC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vQ3Vyc29yRGl2KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vQ3Vyc29yRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2RpbWVuc2lvbl9fbm9jdXJzb3JfaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudG9wID0gdGhpcy50b3ArMTtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQrMTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnBvaW50LmNsYXNzTGlzdC5hZGQoJ29uJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy5wb2ludC5zdHlsZS50b3AgPSBjbGllbnRZICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnBvaW50LnN0eWxlLmxlZnQgPSBjbGllbnRYICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnRvb2x0aXAuaW5uZXJIVE1MID0gYCR7dGhpcy5sZWZ0ICsgdGhpcy5yaWdodH0geCAke3RoaXMudG9wICsgdGhpcy5ib3R0b219YDtcblxuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMueS5zdHlsZS5tYXJnaW5Ub3AgPSAnLScgKyB0aGlzLnRvcCArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy55LnN0eWxlLmhlaWdodCA9IHRoaXMudG9wICsgdGhpcy5ib3R0b20gKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy54LnN0eWxlLm1hcmdpbkxlZnQgPSAnLScgKyB0aGlzLnJpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnguc3R5bGUud2lkdGggPSB0aGlzLmxlZnQgKyB0aGlzLnJpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChub0N1cnNvckRpdikge1xuICAgICAgICAgICAgICAgIG5vQ3Vyc29yRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2RpbWVuc2lvbl9fbm9jdXJzb3JfaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRvcCA9IHRoaXMudG9wKzE7XG4gICAgICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQrMTtcbiAgICAgICAgICAgIHRoaXMubm9kZXMucG9pbnQuY2xhc3NMaXN0LmFkZCgnb24nKTtcbiAgICAgICAgICAgIHRoaXMubm9kZXMucG9pbnQuc3R5bGUudG9wID0gY2xpZW50WSArICdweCc7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLnBvaW50LnN0eWxlLmxlZnQgPSBjbGllbnRYICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMubm9kZXMudG9vbHRpcC5pbm5lckhUTUwgPSBgJHt0aGlzLmxlZnQgKyB0aGlzLnJpZ2h0fSB4ICR7dGhpcy50b3AgKyB0aGlzLmJvdHRvbX1gO1xuXG4gICAgICAgICAgICB0aGlzLm5vZGVzLnkuc3R5bGUubWFyZ2luVG9wID0gJy0nICsgdGhpcy50b3AgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy55LnN0eWxlLmhlaWdodCA9IHRoaXMudG9wICsgdGhpcy5ib3R0b20gKyAncHgnO1xuXG4gICAgICAgICAgICB0aGlzLm5vZGVzLnguc3R5bGUubWFyZ2luTGVmdCA9ICctJyArIHRoaXMucmlnaHQgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy54LnN0eWxlLndpZHRoID0gdGhpcy5sZWZ0ICsgdGhpcy5yaWdodCArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXhQb3NpdGlvblJhaWxzKGlzQWxsU2V0ID0gZmFsc2UpIHsgLy9cbiAgICAgICAgY29uc3QgcmVjdFggPSB0aGlzLm5vZGVzLnguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHJlY3RZID0gdGhpcy5ub2Rlcy55LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGlmIChpc0FsbFNldCkge1xuICAgICAgICAgICAgY29uc3QgcmFpbFggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJhaWxYLmNsYXNzTGlzdC5hZGQoJ2pzLXJhaWwnKTtcbiAgICAgICAgICAgIHJhaWxYLmNsYXNzTGlzdC5hZGQoJ3JhaWwteCcpO1xuICAgICAgICAgICAgcmFpbFguc3R5bGUud2lkdGggPSB0aGlzLm5vZGVzLnguc3R5bGUud2lkdGg7XG4gICAgICAgICAgICByYWlsWC5zdHlsZS50b3AgPSB3aW5kb3cuc2Nyb2xsWSArIHJlY3RYLnRvcCArICdweCc7XG4gICAgICAgICAgICByYWlsWC5zdHlsZS5sZWZ0ID0gd2luZG93LnNjcm9sbFggKyByZWN0WC5sZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgIHJhaWxYLnRpdGxlID0gdGhpcy5ub2Rlcy54LnN0eWxlLndpZHRoO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyYWlsWCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJhaWxZID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByYWlsWS5jbGFzc0xpc3QuYWRkKCdqcy1yYWlsJyk7XG4gICAgICAgICAgICByYWlsWS5jbGFzc0xpc3QuYWRkKCdyYWlsLXknKTtcbiAgICAgICAgICAgIHJhaWxZLnN0eWxlLmhlaWdodCA9IHRoaXMubm9kZXMueS5zdHlsZS5oZWlnaHQ7XG4gICAgICAgICAgICByYWlsWS5zdHlsZS50b3AgPSB3aW5kb3cuc2Nyb2xsWSArIHJlY3RZLnRvcCArICdweCc7XG4gICAgICAgICAgICByYWlsWS5zdHlsZS5sZWZ0ID0gd2luZG93LnNjcm9sbFggKyByZWN0WS5sZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgIHJhaWxZLnRpdGxlID0gdGhpcy5ub2Rlcy55LnN0eWxlLmhlaWdodDtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmFpbFkpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByYWlsLmNsYXNzTGlzdC5hZGQoJ2pzLXJhaWwnKTtcblxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMubm9kZXMueC5zdHlsZS53aWR0aCkgPCBwYXJzZUludCh0aGlzLm5vZGVzLnkuc3R5bGUuaGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgIHJhaWwuY2xhc3NMaXN0LmFkZCgncmFpbC14Jyk7XG4gICAgICAgICAgICAgICAgcmFpbC5zdHlsZS53aWR0aCA9IHRoaXMubm9kZXMueC5zdHlsZS53aWR0aDtcbiAgICAgICAgICAgICAgICByYWlsLnN0eWxlLnRvcCA9IHdpbmRvdy5zY3JvbGxZICsgcmVjdFgudG9wICsgJ3B4JztcbiAgICAgICAgICAgICAgICByYWlsLnN0eWxlLmxlZnQgPSB3aW5kb3cuc2Nyb2xsWCArIHJlY3RYLmxlZnQgKyAncHgnO1xuICAgICAgICAgICAgICAgIHJhaWwudGl0bGUgPSB0aGlzLm5vZGVzLnguc3R5bGUud2lkdGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhaWwuY2xhc3NMaXN0LmFkZCgncmFpbC15Jyk7XG4gICAgICAgICAgICAgICAgcmFpbC5zdHlsZS5oZWlnaHQgPSB0aGlzLm5vZGVzLnkuc3R5bGUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHJhaWwuc3R5bGUudG9wID0gd2luZG93LnNjcm9sbFkgKyByZWN0WS50b3AgKyAncHgnO1xuICAgICAgICAgICAgICAgIHJhaWwuc3R5bGUubGVmdCA9IHdpbmRvdy5zY3JvbGxYICsgcmVjdFkubGVmdCArICdweCc7XG4gICAgICAgICAgICAgICAgcmFpbC50aXRsZSA9IHRoaXMubm9kZXMueS5zdHlsZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmFpbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclJhaWxzKCkge1xuICAgICAgICBjb25zdCByYWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1yYWlsJyk7XG5cbiAgICAgICAgaWYgKHJhaWxzKSB7XG4gICAgICAgICAgICByYWlscy5mb3JFYWNoKHJhaWwgPT4ge1xuICAgICAgICAgICAgICAgIHJhaWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dXaW5kb3dXSCgpIHtcbiAgICAgICAgY29uc3QgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2pzLXdpbmRvdy13aCcpO1xuICAgICAgICBkaXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2luZG93LXdoJyk7XG4gICAgICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3aW5kb3ctd2hfc2hvdycpO1xuICAgICAgICBkaXZDb250YWluZXIuaW5uZXJIVE1MID0gd2luZG93LmlubmVyV2lkdGggKyAneCcgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXZDb250YWluZXIpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRpdkNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd3aW5kb3ctd2hfc2hvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA4MDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChkaXZDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBkaXZDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIHNob3dEb2N1bWVudFdIKCkge1xuICAgICAgICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoYm9keS5zY3JvbGxXaWR0aCwgYm9keS5vZmZzZXRXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgaHRtbC5zY3JvbGxXaWR0aCxcbiAgICAgICAgICAgIGh0bWwub2Zmc2V0V2lkdGgpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heChib2R5LnNjcm9sbEhlaWdodCwgYm9keS5vZmZzZXRIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBodG1sLnNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIGh0bWwub2Zmc2V0SGVpZ2h0KTtcbiAgICAgICAgY29uc3Qgd2luZG93V0hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXdpbmRvdy13aCcpO1xuXG4gICAgICAgIGlmICh3aW5kb3dXSHMpIHtcbiAgICAgICAgICAgIHdpbmRvd1dIcy5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgICAgICAgICAgZGl2LnJlbW92ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqcy13aW5kb3ctd2gnKTtcbiAgICAgICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dpbmRvdy13aCcpO1xuICAgICAgICBkaXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2luZG93LXdoX3Nob3cnKTtcbiAgICAgICAgZGl2Q29udGFpbmVyLmlubmVySFRNTCA9IHdpZHRoICsgJ3gnICsgaGVpZ2h0O1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2Q29udGFpbmVyKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd3aW5kb3ctd2hfc2hvdycpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXZDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIH0sIDEyMDApO1xuICAgIH1cblxuICAgIGhpZGVXSHMoKSB7XG4gICAgICAgIGNvbnN0IHdpbmRvd1dIcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy13aW5kb3ctd2gnKTtcblxuICAgICAgICBpZiAod2luZG93V0hzKSB7XG4gICAgICAgICAgICB3aW5kb3dXSHMuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICAgICAgICAgIGRpdi5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZVNjcmVlbnNob3QocG5nKSB7XG4gICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gdGhpcy5sb2FkSW1hZ2UodGhpcy5zY3JlZW5zaG90UHJvY2Vzc2VkLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHBuZztcbiAgICB9XG5cbiAgICBpbkJvdW5kYXJpZXMoeCwgeSl7XG4gICAgICAgIHJldHVybiAoeCA+PSAwICYmIHggPCB0aGlzLnNjcmVlbldpZHRoICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5zY3JlZW5IZWlnaHQpO1xuICAgIH1cblxuICAgIGdldExpZ2h0bmVzc0F0KCkgeyAvLyDQv9C+0LvRg9GH0LDQtdGCINC/0L7Qt9C40YbQuNGOINC60YPRgNGB0L7RgNCwINCyINC80LDRgdGB0LjQstC1XG4gICAgICAgIHJldHVybiB0aGlzLmluQm91bmRhcmllcyh0aGlzLngsIHRoaXMueSkgPyh0aGlzLnkgKiB0aGlzLnNjcmVlbldpZHRoICsgdGhpcy54KSA6IC0xO1xuICAgIH1cblxuICAgIHNjcmVlbnNob3RQcm9jZXNzZWQoZGF0YSkgeyAvLyDQv9C+0LvRg9GH0LDQtdGCINGB0LLQvtC50YHRgtCy0LAg0YHQutGA0LjQvdGI0L7RgtCwINC4INCy0YvQt9GL0LLQsNC10YIg0LzQtdGC0L7QtNGLINCy0YvRh9C40YHQu9C10L3QuNGPXG4gICAgICAgIHRoaXMuaW1nRGF0YSA9IG5ldyBVaW50OENsYW1wZWRBcnJheShkYXRhLmltZ0RhdGEpO1xuICAgICAgICB0aGlzLnNjcmVlbldpZHRoID0gZGF0YS53aWR0aDtcbiAgICAgICAgdGhpcy5zY3JlZW5IZWlnaHQgPSBkYXRhLmhlaWdodDtcbiAgICB9XG5cbiAgICBnZXRDb2xvckN1cnNvclBvaW50KCkgeyAvLyDQv9C+0LvRg9GH0LDQtdGCINGG0LLQtdGCINC/0LjQutGB0LXQu9GPINC/0L7QtCDQutGD0YDRgdC+0YDQvtC8XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGlnaHRuZXNzQXQoKSAqIDQ7XG4gICAgICAgIGNvbnN0IFJHQkEgPSB7XG4gICAgICAgICAgICByOiB0aGlzLmltZ0RhdGFbbGVuZ3RoXSwgZzogdGhpcy5pbWdEYXRhW2xlbmd0aCArIDFdLCBiOiB0aGlzLmltZ0RhdGFbbGVuZ3RoICsgMl0sIGE6IHRoaXMuaW1nRGF0YVtsZW5ndGggKyAzXVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBSR0JBO1xuICAgIH1cblxuICAgIGxvYWRJbWFnZShmbikge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCAmJiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIGxldCBpbWdEYXRhID0gdGhpcy5jdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpLmRhdGE7XG5cbiAgICAgICAgICAgICAgICBmbih7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbWdEYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgaW1nRGF0YTogaW1nRGF0YS5idWZmZXIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMClcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlUnVsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFjdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnJlc2l6ZVNpZGUgPSAnJztcbiAgICAgICAgdGhpcy5yZWN0ID0ge307XG4gICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvb2x0aXBTaXplTm9kZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvb2x0aXBQb3NOb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW91c2VYID0gMDtcbiAgICAgICAgdGhpcy5tb3VzZVkgPSAwO1xuXG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgIH1cblxuICAgIGNyZWF0ZShpc0F1dG9TZXQpIHtcbiAgICAgICAgY29uc3QgcnVsZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXJlY3RhbmdsZS1ydWxlcicpO1xuICAgICAgICBsZXQgdG9wID0gMTAwO1xuICAgICAgICBsZXQgbGVmdCA9IDEwMDtcbiAgICAgICAgbGV0IHdpZHRoID0gMjAwO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gMTAwO1xuXG4gICAgICAgIGlmIChpc0F1dG9TZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1PdmVyQ3Vyc29yID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0aGlzLm1vdXNlWCwgdGhpcy5tb3VzZVkpO1xuXG4gICAgICAgICAgICBpZiAoZWxlbU92ZXJDdXJzb3IpIHtcbiAgICAgICAgICAgICAgICB0b3AgPSB3aW5kb3cuc2Nyb2xsWSArIGVsZW1PdmVyQ3Vyc29yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gd2luZG93LnNjcm9sbFggKyBlbGVtT3ZlckN1cnNvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICAgICAgICAgIHdpZHRoID0gZWxlbU92ZXJDdXJzb3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gZWxlbU92ZXJDdXJzb3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJ1bGVycykge1xuICAgICAgICAgICAgdG9wID0gMTAwICsgKHJ1bGVycy5sZW5ndGggKiAxMCk7XG4gICAgICAgICAgICBsZWZ0ID0gMTAwICsgKHJ1bGVycy5sZW5ndGggKiAxMCk7XG4gICAgICAgIH1cblxuICAgICAgICB0b3AgPSBNYXRoLmNlaWwodG9wKTtcbiAgICAgICAgbGVmdCA9IE1hdGguY2VpbChsZWZ0KTtcbiAgICAgICAgd2lkdGggPSBNYXRoLmNlaWwod2lkdGgpO1xuICAgICAgICBoZWlnaHQgPSBNYXRoLmNlaWwoaGVpZ2h0KTtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2pzLXJlY3RhbmdsZS1ydWxlcicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmVjdGFuZ2xlLXJ1bGVyJyk7XG5cbiAgICAgICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqcy1yZWN0YW5nbGUgcmVjdGFuZ2xlLXJ1bGVyX19yZWN0YW5nbGUgdWktcmVzaXphYmxlXCIgZGF0YS1hY3Rpb249XCJtb3ZlXCIgc3R5bGU9XCIke1xuICAgICAgICAgICAgICAgICd0b3A6JyArIHRvcCArICdweDsnXG4gICAgICAgICAgICAgICAgKyAnbGVmdDonICsgbGVmdCArICdweDsnXG4gICAgICAgICAgICAgICAgKyAnd2lkdGg6JyArIHdpZHRoICsgJ3B4OydcbiAgICAgICAgICAgICAgICArICdoZWlnaHQ6JyArIGhlaWdodCArICdweDsnXG4gICAgICAgICAgICB9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3RhbmdsZS1ydWxlcl9fbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqcy1yZWN0YW5nbGUtY2xvc2UgcmVjdGFuZ2xlLWNsb3NlXCIgZGF0YS1hY3Rpb249XCJjbG9zZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwianMtcmVjdGFuZ2xlLXBpbiByZWN0YW5nbGUtcGluXCIgZGF0YS1hY3Rpb249XCJwaW5cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjdGFuZ2xlLXJ1bGVyX190b29sdGlwXCIgZGF0YS1hY3Rpb249XCJtb3ZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqcy1yZWN0YW5nbGUtdG9vbHRpcC1zaXplIHJlY3RhbmdsZS10b29sdGlwX19zaXplIHRvb2x0aXBfX2JvdHRvbSByZWN0YW5nbGUtdG9vbHRpcF9jZW50ZXJcIiBkYXRhLWFjdGlvbj1cIm1vdmVcIj4ke3dpZHRofXgke2hlaWdodH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImpzLXJlY3RhbmdsZS10b29sdGlwLXBvcyByZWN0YW5nbGUtdG9vbHRpcF9fcG9zIHRvb2x0aXBfX2JvdHRvbSBoaWRlXCIgZGF0YS1hY3Rpb249XCJtb3ZlXCI+JHt0b3B9eCR7bGVmdH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktcmVzaXphYmxlLW5cIiBkYXRhLWFjdGlvbj1cInJlc2l6ZVwiIGRhdGEtcmVzaXplPVwiblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1yZXNpemFibGUtd1wiIGRhdGEtYWN0aW9uPVwicmVzaXplXCIgZGF0YS1yZXNpemU9XCJ3XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLXJlc2l6YWJsZS1zXCIgZGF0YS1hY3Rpb249XCJyZXNpemVcIiBkYXRhLXJlc2l6ZT1cInNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktcmVzaXphYmxlLWVcIiBkYXRhLWFjdGlvbj1cInJlc2l6ZVwiIGRhdGEtcmVzaXplPVwiZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1yZXNpemFibGUtc2VcIiBkYXRhLWFjdGlvbj1cInJlc2l6ZVwiIGRhdGEtcmVzaXplPVwic2VcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3RhbmdsZS1ydWxlcl9fbm8tY3Vyc29yXCI+PC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICBpZiAoaXNBdXRvU2V0KSB7XG4gICAgICAgICAgICBjb25zdCBwaW4gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmpzLXJlY3RhbmdsZS1waW4nKTtcblxuICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSAncGluJztcbiAgICAgICAgICAgIHRoaXMucnVsZXJOb2RlID0gY29udGFpbmVyO1xuICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlID0gdGhpcy5ydWxlck5vZGUucXVlcnlTZWxlY3RvcignLmpzLXJlY3RhbmdsZScpO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyTW91c2VFdmVudChwaW4sICdtb3VzZXVwJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRSdWxlcih0YXJnZXQsIHNlbGVjdG9yKSB7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBydWxlciA9IHRhcmdldC5jbG9zZXN0KCcuanMtcmVjdGFuZ2xlLXJ1bGVyJyk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RvciA9PT0gJ2pzLXJlY3RhbmdsZS1ydWxlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcnVsZXI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJ1bGVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gIHJ1bGVyLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc2VsZWN0b3IpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duLmJpbmQodGhpcykpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bi5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIHRyaWdnZXJNb3VzZUV2ZW50KG5vZGUsIGV2ZW50VHlwZSkge1xuICAgICAgICBsZXQgY2xpY2tFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuICAgICAgICBjbGlja0V2ZW50LmluaXRFdmVudChldmVudFR5cGUsIHRydWUsIHRydWUpO1xuICAgICAgICBub2RlLmRpc3BhdGNoRXZlbnQoY2xpY2tFdmVudCk7XG4gICAgfVxuXG4gICAgbW91c2VEb3duKGV2KSB7XG4gICAgICAgIHRoaXMucnVsZXJOb2RlID0gdGhpcy5nZXRSdWxlcihldi50YXJnZXQsICdqcy1yZWN0YW5nbGUtcnVsZXInKTtcblxuICAgICAgICBpZiAodGhpcy5ydWxlck5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZSA9IHRoaXMucnVsZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWN0YW5nbGUnKTtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcFNpemVOb2RlID0gdGhpcy5ydWxlck5vZGUucXVlcnlTZWxlY3RvcignLmpzLXJlY3RhbmdsZS10b29sdGlwLXNpemUnKTtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcFBvc05vZGUgPSB0aGlzLnJ1bGVyTm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtcmVjdGFuZ2xlLXRvb2x0aXAtcG9zJyk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbiA9IGV2LnRhcmdldC5kYXRhc2V0Py5hY3Rpb247XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiAmJiB0aGlzLnJlY3RhbmdsZU5vZGUgJiYgdGhpcy50b29sdGlwU2l6ZU5vZGUgJiYgdGhpcy50b29sdGlwUG9zTm9kZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ3Jlc2l6ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzaXplID0gZXYudGFyZ2V0LmRhdGFzZXQ/LnJlc2l6ZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydExlZnQ6IHRoaXMucmVjdGFuZ2xlTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ3JlY3RhbmdsZS1ydWxlcl9fcmVjdGFuZ2xlX2ZpeCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB3aW5kb3cuc2Nyb2xsWCArIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VG9wOiB0aGlzLnJlY3RhbmdsZU5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWN0YW5nbGUtcnVsZXJfX3JlY3RhbmdsZV9maXgnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gd2luZG93LnNjcm9sbFkgKyB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRYOiB3aW5kb3cuc2Nyb2xsWCArIChldi5jbGllbnRYIC0gdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRZOiB3aW5kb3cuc2Nyb2xsWSArIChldi5jbGllbnRZIC0gdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFg6IGV2LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFk6IGV2LmNsaWVudFksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdFdpZHRoOiB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdEhlaWdodDogdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNpemVTaWRlID0gcmVzaXplID8gcmVzaXplIDogJyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGlvbiA9PT0gJ21vdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0TGVmdDogdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFRvcDogdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0WDogdGhpcy5yZWN0YW5nbGVOb2RlLmNsYXNzTGlzdC5jb250YWlucygncmVjdGFuZ2xlLXJ1bGVyX19yZWN0YW5nbGVfZml4JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChldi5jbGllbnRYIC0gdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB3aW5kb3cuc2Nyb2xsWCArIChldi5jbGllbnRYIC0gdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRZOiB0aGlzLnJlY3RhbmdsZU5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWN0YW5nbGUtcnVsZXJfX3JlY3RhbmdsZV9maXgnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGV2LmNsaWVudFkgLSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogd2luZG93LnNjcm9sbFkgKyAoZXYuY2xpZW50WSAtIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRYOiBldi5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRZOiBldi5jbGllbnRZLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRXaWR0aDogdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRIZWlnaHQ6IHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWJvdW5jZSh0aGlzLnNob3dQb3MuYmluZCh0aGlzKSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBTaXplTm9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50b29sdGlwUG9zTm9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSAnJztcbiAgICAgICAgICAgIHRoaXMucmVzaXplU2lkZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXRZID0gMDtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0WCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3VzZVVwKGV2KSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGlvbiAmJiB0aGlzLnJ1bGVyTm9kZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAnY2xvc2UnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucnVsZXJOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVsZXJOb2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpb24gPT09ICdwaW4nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnRuID0gdGhpcy5yZWN0YW5nbGVOb2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWN0YW5nbGUtcGluJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYnRuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IHdpbmRvdy5zY3JvbGxZICsgKGV2LmNsaWVudFkgLSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSB3aW5kb3cuc2Nyb2xsWCArIChldi5jbGllbnRYIC0gdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLnRvcCA9IChldi5wYWdlWSAtIHkpICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS5sZWZ0ID0gKGV2LnBhZ2VYIC0geCkgKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuY2xhc3NMaXN0LnJlbW92ZSgncmVjdGFuZ2xlLXJ1bGVyX19yZWN0YW5nbGVfZml4Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gKGV2LmNsaWVudFkgLSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSAoZXYuY2xpZW50WCAtIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS50b3AgPSAoZXYucGFnZVkgLSB5KSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUubGVmdCA9IChldi5wYWdlWCAtIHgpICsgJ3B4JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLmNsYXNzTGlzdC5hZGQoJ3JlY3RhbmdsZS1ydWxlcl9fcmVjdGFuZ2xlX2ZpeCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvb2x0aXAodGhpcy5yZWN0YW5nbGVOb2RlLCB0aGlzLnRvb2x0aXBTaXplTm9kZSwgdGhpcy50b29sdGlwUG9zTm9kZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlKHRoaXMuaGlkZVBvcy5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMucmVzaXplU2lkZSA9ICcnO1xuICAgICAgICB0aGlzLm9mZnNldFkgPSAwO1xuICAgICAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgIH1cblxuICAgIHNob3dQb3MoKSB7XG4gICAgICAgIHRoaXMudG9vbHRpcFBvc05vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB0aGlzLnRvb2x0aXBTaXplTm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgaGlkZVBvcygpIHtcbiAgICAgICAgdGhpcy50b29sdGlwUG9zTm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHRoaXMudG9vbHRpcFNpemVOb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBtb3VzZU1vdmUoZXYpIHtcbiAgICAgICAgdGhpcy5tb3VzZVggPSBldi5jbGllbnRYO1xuICAgICAgICB0aGlzLm1vdXNlWSA9IGV2LmNsaWVudFk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAnbW92ZScpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS50b3AgPSAoZXYucGFnZVkgLSB0aGlzLnJlY3Quc2hpZnRZKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUubGVmdCA9IChldi5wYWdlWCAtIHRoaXMucmVjdC5zaGlmdFgpICsgJ3B4JztcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVUb29sdGlwKHRoaXMucmVjdGFuZ2xlTm9kZSwgdGhpcy50b29sdGlwU2l6ZU5vZGUsIHRoaXMudG9vbHRpcFBvc05vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aW9uID09PSAncmVzaXplJykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA+IDEyMFxuICAgICAgICAgICAgICAgICYmIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgPiA1MFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b29sdGlwU2l6ZU5vZGUuY2xhc3NMaXN0LmFkZCgncmVjdGFuZ2xlLXRvb2x0aXBfY2VudGVyJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudG9vbHRpcFNpemVOb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3JlY3RhbmdsZS10b29sdGlwX2NlbnRlcicpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2l6ZVNpZGUgPT09ICdzZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUud2lkdGggPSAodGhpcy5yZWN0LnNoaWZ0V2lkdGggKyBldi5jbGllbnRYIC0gdGhpcy5yZWN0LnN0YXJ0WCkgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS5oZWlnaHQgPSAodGhpcy5yZWN0LnNoaWZ0SGVpZ2h0ICsgZXYuY2xpZW50WSAtIHRoaXMucmVjdC5zdGFydFkpICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNpemVTaWRlID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUud2lkdGggPSAodGhpcy5yZWN0LnNoaWZ0V2lkdGggKyBldi5jbGllbnRYIC0gdGhpcy5yZWN0LnN0YXJ0WCkgKyAncHgnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc2l6ZVNpZGUgPT09ICdzJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS5oZWlnaHQgPSAodGhpcy5yZWN0LnNoaWZ0SGVpZ2h0ICsgZXYuY2xpZW50WSAtIHRoaXMucmVjdC5zdGFydFkpICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNpemVTaWRlID09PSAndycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdMZWZ0ID0gKGV2LnBhZ2VYIC0gdGhpcy5yZWN0LnNoaWZ0WCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUubGVmdCA9IG5ld0xlZnQgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS53aWR0aCA9ICh0aGlzLnJlY3Quc2hpZnRXaWR0aCArICh0aGlzLnJlY3Quc3RhcnRMZWZ0IC0gbmV3TGVmdCkpICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNpemVTaWRlID09PSAnbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUb3AgPSAodGhpcy5yZWN0YW5nbGVOb2RlLmNsYXNzTGlzdC5jb250YWlucygncmVjdGFuZ2xlLXJ1bGVyX19yZWN0YW5nbGVfZml4JykpXG4gICAgICAgICAgICAgICAgICAgID8gd2luZG93LnNjcm9sbFkgKyAoZXYucGFnZVkgLSB0aGlzLnJlY3Quc2hpZnRZKVxuICAgICAgICAgICAgICAgICAgICA6IChldi5wYWdlWSAtIHRoaXMucmVjdC5zaGlmdFkpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLnRvcCA9IG5ld1RvcCArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLmhlaWdodCA9ICh0aGlzLnJlY3Quc2hpZnRIZWlnaHQgKyAodGhpcy5yZWN0LnN0YXJ0VG9wIC0gbmV3VG9wKSkgKyAncHgnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRvb2x0aXAodGhpcy5yZWN0YW5nbGVOb2RlLCB0aGlzLnRvb2x0aXBTaXplTm9kZSwgdGhpcy50b29sdGlwUG9zTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrZXlEb3duKGV2KSB7XG4gICAgICAgIGlmICh0aGlzLnJlY3RhbmdsZU5vZGUpIHtcbiAgICAgICAgICAgIGlmIChldi5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLnRvcCA9ICt0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUudG9wXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSAtIDEgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcygpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9vbHRpcCh0aGlzLnJlY3RhbmdsZU5vZGUsIHRoaXMudG9vbHRpcFNpemVOb2RlLCB0aGlzLnRvb2x0aXBQb3NOb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlKHRoaXMuaGlkZVBvcy5iaW5kKHRoaXMpLCA1MDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldi5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUudG9wID0gK3RoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS50b3BcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3B4JywgJycpICsgMSArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UG9zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb29sdGlwKHRoaXMucmVjdGFuZ2xlTm9kZSwgdGhpcy50b29sdGlwU2l6ZU5vZGUsIHRoaXMudG9vbHRpcFBvc05vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2UodGhpcy5oaWRlUG9zLmJpbmQodGhpcyksIDUwMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2LmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS5sZWZ0ID0gK3RoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS5sZWZ0XG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSAtIDEgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcygpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9vbHRpcCh0aGlzLnJlY3RhbmdsZU5vZGUsIHRoaXMudG9vbHRpcFNpemVOb2RlLCB0aGlzLnRvb2x0aXBQb3NOb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlKHRoaXMuaGlkZVBvcy5iaW5kKHRoaXMpLCA1MDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldi5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLmxlZnQgPSArdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLmxlZnRcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3B4JywgJycpICsgMSArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UG9zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb29sdGlwKHRoaXMucmVjdGFuZ2xlTm9kZSwgdGhpcy50b29sdGlwU2l6ZU5vZGUsIHRoaXMudG9vbHRpcFBvc05vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2UodGhpcy5oaWRlUG9zLmJpbmQodGhpcyksIDUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVUb29sdGlwKHJlY3RhbmdsZSwgdG9vbHRpcFNpemUsIHRvb2x0aXBQb3MpIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICB0b29sdGlwU2l6ZS5pbm5lckhUTUwgPSByZWN0LndpZHRoICsgJ3gnICsgcmVjdC5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRoaXMucmVjdGFuZ2xlTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ3JlY3RhbmdsZS1ydWxlcl9fcmVjdGFuZ2xlX2ZpeCcpKSB7XG4gICAgICAgICAgICB0b29sdGlwUG9zLmlubmVySFRNTCA9IHJlY3RhbmdsZS5vZmZzZXRMZWZ0ICsgJ3gnICsgcmVjdGFuZ2xlLm9mZnNldFRvcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvb2x0aXBQb3MuaW5uZXJIVE1MID0gcmVjdC5sZWZ0ICsgJ3gnICsgcmVjdC50b3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWJvdW5jZShmdW5jLCBkZWxheSkge1xuICAgICAgICBpZiAodGhpcy5kZWJJZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGViSWQpO1xuICAgICAgICAgICAgdGhpcy5kZWJJZCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlYklkID0gc2V0VGltZW91dChmdW5jLCBkZWxheSk7XG4gICAgfVxufSIsImltcG9ydCBEaW1lbnNpb24gZnJvbSAnLi9jbGFzc2VzL0RpbWVuc2lvbic7XG5pbXBvcnQgUmVjdGFuZ2xlUnVsZXIgZnJvbSBcIi4vY2xhc3Nlcy9SZWN0YW5nbGVSdWxlclwiO1xuXG5jb25zdCBkaW1lbnNpb24gPSBuZXcgRGltZW5zaW9uKCk7XG5jb25zdCByZWN0YW5nbGVSdWxlciA9IG5ldyBSZWN0YW5nbGVSdWxlcigpO1xuXG5sZXQgc2V0S2V5cyA9IFtdO1xubGV0IGFjdGl2ZSA9ICcnO1xuY29uc3QgcXVpY2tLZXlzID0ge1xuICAgICdBbHRMZWZ0ICsgS2V5Wic6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gJ2RpbWVuc2lvbnMnO1xuXG4gICAgICAgIGlmIChhY3RpdmUgPT09IGtleSkge1xuICAgICAgICAgICAgYWN0aXZlID0gJyc7XG4gICAgICAgICAgICBkaW1lbnNpb24uc3RvcCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGl2ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGFjdGl2ZSA9IGtleTtcbiAgICAgICAgICAgIGRpbWVuc2lvbi5oaWRlV0hzKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ0FsdExlZnQgKyBLZXlYJzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZWN0YW5nbGVSdWxlci5jcmVhdGUoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgJ0FsdExlZnQgKyBLZXlDJzogZnVuY3Rpb24gKCkge1xuICAgICAgICBkaW1lbnNpb24uY2xlYXJSYWlscygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICAnQWx0TGVmdCArIEtleUQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpbWVuc2lvbi5maXhQb3NpdGlvblJhaWxzKHRydWUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICAnQWx0TGVmdCArIEtleVMnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpbWVuc2lvbi5maXhQb3NpdGlvblJhaWxzKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgICdBbHRMZWZ0ICsgU2hpZnRMZWZ0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYWN0aXZlID09PSAnZGltZW5zaW9ucycpIHtcbiAgICAgICAgICAgIGRpbWVuc2lvbi5tZWFzdXJlQ29udGFpbmVyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3RpdmUgPT09ICcnKSB7XG4gICAgICAgICAgICBkaW1lbnNpb24uc2hvd0RvY3VtZW50V0goKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgICdBbHRMZWZ0ICsgU2hpZnRMZWZ0ICsgS2V5WCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGFjdGl2ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJlY3RhbmdsZVJ1bGVyLmNyZWF0ZSh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgICdBbHRMZWZ0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYWN0aXZlID09PSAnJykge1xuICAgICAgICAgICAgZGltZW5zaW9uLnNob3dXaW5kb3dXSCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxufTtcbmNvbnN0IGFjdGlvbnMgPSB7XG4gICAgJ3Rha2VTY3JlZW5zaG90JzogZnVuY3Rpb24gKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIGRpbWVuc2lvbi5wYXJzZVNjcmVlbnNob3QocmVxdWVzdC5zY3JlZW5QbmcpO1xuICAgIH0sXG59XG5cbi8vIHJlY2VpdmVXb3JrZXJNZXNzYWdlXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICBpZiAocmVxdWVzdC5hY3Rpb24gJiYgdHlwZW9mIGFjdGlvbnNbIHJlcXVlc3QuYWN0aW9uIF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYWN0aW9uc1sgcmVxdWVzdC5hY3Rpb24gXShyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXYpID0+IHtcbiAgICBzZXRLZXlzLnB1c2goZXYuY29kZSk7XG5cbiAgICBpZiAoc2V0S2V5cy5sZW5ndGggPj0gMSAmJiB0eXBlb2YgcXVpY2tLZXlzWyBzZXRLZXlzLmpvaW4oJyArICcpIF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKHF1aWNrS2V5c1sgc2V0S2V5cy5qb2luKCcgKyAnKSBdKCkpIHtcbiAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtvcHRpb25BY3RpdmF0ZTogYWN0aXZlfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2KSA9PiB7XG4gICAgc2V0S2V5cyA9IFtdO1xuICAgIGRpbWVuc2lvbi5tZWFzdXJlQ29udGFpbmVyID0gZmFsc2U7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldikgPT4ge1xuICAgIGRpbWVuc2lvbi5oYW5kbGVNb3VzZU1vdmUoZXYpO1xufSk7XG5cbmxldCBzY3JvbGxTY3JlZW5EZWJvdW5jZSA9IDA7XG5sZXQgc2Nyb2xsU2NyZWVuUHJvY2VzcyA9IGZhbHNlO1xuXG5bJ3Njcm9sbCcsICdtb3VzZXdoZWVsJ10uZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIobGlzdGVuZXIsIChldikgPT4ge1xuICAgICAgICBpZiAobGlzdGVuZXIgPT09ICdtb3VzZXdoZWVsJykge1xuICAgICAgICAgICAgaGFuZGxlU2NyZWVuQ2hhbmdlKDgwMCwgMTAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciA9PT0gJ3Njcm9sbCcpIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZVNjcmVlbkNoYW5nZSgxMDAsIDUwKTtcbiAgICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbn0pO1xuXG5mdW5jdGlvbiBoYW5kbGVTY3JlZW5DaGFuZ2UodGltZW91dERlYiwgdGltZW91dFNjcmVlbikge1xuICAgIGlmIChhY3RpdmUgPT09ICdkaW1lbnNpb25zJyAmJiBzY3JvbGxTY3JlZW5Qcm9jZXNzID09PSBmYWxzZSkge1xuICAgICAgICBzY3JvbGxTY3JlZW5Qcm9jZXNzID0gdHJ1ZTtcblxuICAgICAgICBpZiAoc2Nyb2xsU2NyZWVuRGVib3VuY2UpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChzY3JvbGxTY3JlZW5EZWJvdW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzY3JvbGxTY3JlZW5EZWJvdW5jZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcXVpY2tLZXlzWydBbHRMZWZ0ICsgS2V5WiddKCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChxdWlja0tleXNbJ0FsdExlZnQgKyBLZXlaJ10oKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2Nyb2xsU2NyZWVuRGVib3VuY2UgLSAyJywgYWN0aXZlKVxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7b3B0aW9uQWN0aXZhdGU6IGFjdGl2ZX0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFNjcmVlblByb2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aW1lb3V0U2NyZWVuKVxuICAgICAgICB9LCB0aW1lb3V0RGViKTtcbiAgICB9XG59IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9