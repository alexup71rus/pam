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

          var top = Math.ceil(elemOverCursor.getBoundingClientRect().top);
          var left = Math.ceil(elemOverCursor.getBoundingClientRect().left);
          var width = Math.ceil(elemOverCursor.getBoundingClientRect().width);
          var height = Math.ceil(elemOverCursor.getBoundingClientRect().height);
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
      var html = "\n            <div class=\"js-rectangle rectangle-ruler__rectangle ui-resizable\" data-action=\"move\" style=\"".concat('top:' + top + 'px;' + 'left:' + left + 'px;' + 'width:' + width + 'px;' + 'height:' + height + 'px;', "\">\n                <div class=\"rectangle-ruler__nav\">\n                    <div class=\"js-rectangle-close rectangle-close\" data-action=\"close\"></div>\n                    <div class=\"js-rectangle-pin rectangle-pin\" data-action=\"pin\"></div>\n                </div>\n                <div class=\"rectangle-ruler__tooltip\" data-action=\"move\">\n                    <div class=\"js-rectangle-tooltip-size rectangle-tooltip__size tooltip__bottom ").concat(width > 120 && height > 50 ? 'rectangle-tooltip_center' : '', "\" data-action=\"move\">").concat(width, "x").concat(height, "</div>\n                    <div class=\"js-rectangle-tooltip-pos rectangle-tooltip__pos tooltip__bottom hide\" data-action=\"move\">").concat(top, "x").concat(left, "</div>\n                </div>\n                <div class=\"ui-resizable-n\" data-action=\"resize\" data-resize=\"n\"></div>\n                <div class=\"ui-resizable-w\" data-action=\"resize\" data-resize=\"w\"></div>\n                <div class=\"ui-resizable-s\" data-action=\"resize\" data-resize=\"s\"></div>\n                <div class=\"ui-resizable-e\" data-action=\"resize\" data-resize=\"e\"></div>\n                <div class=\"ui-resizable-se\" data-action=\"resize\" data-resize=\"se\"></div>\n            </div>\n            <div class=\"rectangle-ruler__no-cursor\"></div>\n        ");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9EaW1lbnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9SZWN0YW5nbGVSdWxlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJEaW1lbnNpb24iLCJpbWFnZSIsIkltYWdlIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29sb3JIb2xkIiwiaW1nRGF0YSIsIngiLCJ5IiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJkZWJvdW5jZVVwZGF0ZSIsInRpbWVyIiwicmFuZ2VYIiwicmFuZ2VZIiwibWlkQ29sb3IiLCJyIiwiZyIsImIiLCJhIiwiY3JlYXRlIiwiaHRtbCIsImJvZHkiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJub2RlcyIsInBvaW50IiwicXVlcnlTZWxlY3RvciIsInRvb2x0aXAiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJldiIsImNsaWVudFgiLCJjbGllbnRZIiwiY2xlYXJUaW1lb3V0IiwibGVuZ3RoIiwic2V0VGltZW91dCIsInVwZGF0ZSIsIm1lYXN1cmVBcmVhIiwiZHJhdyIsImdldENvbG9yQ3Vyc29yUG9pbnQiLCJwYXJzZSIsInR5cGUiLCJpIiwibWF4U3RlcCIsImluQm91bmRhcmllcyIsIlJHQkEiLCJpc1NhbWUiLCJub0N1cnNvckRpdiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGQiLCJtZWFzdXJlQ29udGFpbmVyIiwiZWxlbU92ZXJDdXJzb3IiLCJlbGVtZW50RnJvbVBvaW50IiwiTWF0aCIsImNlaWwiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImlzQWxsU2V0IiwicmVjdFgiLCJyZWN0WSIsInJhaWxYIiwic2Nyb2xsWSIsInNjcm9sbFgiLCJ0aXRsZSIsImFwcGVuZENoaWxkIiwicmFpbFkiLCJyYWlsIiwicGFyc2VJbnQiLCJyYWlscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZGl2Q29udGFpbmVyIiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJtYXgiLCJzY3JvbGxXaWR0aCIsIm9mZnNldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJ3aW5kb3dXSHMiLCJkaXYiLCJwbmciLCJvbmxvYWQiLCJsb2FkSW1hZ2UiLCJzY3JlZW5zaG90UHJvY2Vzc2VkIiwiYmluZCIsInNyYyIsImRhdGEiLCJVaW50OENsYW1wZWRBcnJheSIsImdldExpZ2h0bmVzc0F0IiwiZm4iLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiZ2V0SW1hZ2VEYXRhIiwiYnVmZmVyIiwiUmVjdGFuZ2xlUnVsZXIiLCJhY3Rpb24iLCJyZXNpemVTaWRlIiwicmVjdCIsInJlY3RhbmdsZU5vZGUiLCJ0b29sdGlwU2l6ZU5vZGUiLCJ0b29sdGlwUG9zTm9kZSIsIm1vdXNlWCIsIm1vdXNlWSIsImlzQXV0b1NldCIsInJ1bGVycyIsImNvbnRhaW5lciIsInBpbiIsInJ1bGVyTm9kZSIsInRyaWdnZXJNb3VzZUV2ZW50IiwidGFyZ2V0Iiwic2VsZWN0b3IiLCJjb250YWlucyIsInJ1bGVyIiwiY2xvc2VzdCIsInJlc3VsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3VzZURvd24iLCJtb3VzZVVwIiwibW91c2VNb3ZlIiwia2V5RG93biIsIm5vZGUiLCJldmVudFR5cGUiLCJjbGlja0V2ZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiZ2V0UnVsZXIiLCJkYXRhc2V0IiwicmVzaXplIiwic3RhcnRMZWZ0Iiwic3RhcnRUb3AiLCJzaGlmdFgiLCJzaGlmdFkiLCJzdGFydFgiLCJzdGFydFkiLCJzaGlmdFdpZHRoIiwic2hpZnRIZWlnaHQiLCJkZWJvdW5jZSIsInNob3dQb3MiLCJvZmZzZXRZIiwib2Zmc2V0WCIsImJ0biIsInBhZ2VZIiwicGFnZVgiLCJ1cGRhdGVUb29sdGlwIiwiaGlkZVBvcyIsIm5ld0xlZnQiLCJuZXdUb3AiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlcGxhY2UiLCJyZWN0YW5nbGUiLCJ0b29sdGlwU2l6ZSIsInRvb2x0aXBQb3MiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwiZnVuYyIsImRlbGF5IiwiZGViSWQiLCJkaW1lbnNpb24iLCJyZWN0YW5nbGVSdWxlciIsInNldEtleXMiLCJhY3RpdmUiLCJxdWlja0tleXMiLCJzdG9wIiwiaGlkZVdIcyIsImNsZWFyUmFpbHMiLCJmaXhQb3NpdGlvblJhaWxzIiwic2hvd0RvY3VtZW50V0giLCJzaG93V2luZG93V0giLCJhY3Rpb25zIiwicmVxdWVzdCIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsInBhcnNlU2NyZWVuc2hvdCIsInNjcmVlblBuZyIsImNocm9tZSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInB1c2giLCJjb2RlIiwiam9pbiIsInNlbmRNZXNzYWdlIiwib3B0aW9uQWN0aXZhdGUiLCJoYW5kbGVNb3VzZU1vdmUiLCJzY3JvbGxTY3JlZW5EZWJvdW5jZSIsInNjcm9sbFNjcmVlblByb2Nlc3MiLCJsaXN0ZW5lciIsImhhbmRsZVNjcmVlbkNoYW5nZSIsInRpbWVvdXREZWIiLCJ0aW1lb3V0U2NyZWVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGcUJBLFM7QUFHakIsdUJBQWM7QUFBQTs7QUFBQSwyR0FGSyxLQUVMOztBQUNWLFNBQUtDLEtBQUwsR0FBYSxJQUFJQyxLQUFKLEVBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVMsQ0FBVDtBQUNBLFNBQUtDLEdBQUwsR0FBVyxDQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxTQUFLQyxJQUFMLEdBQVks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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDRHOzs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtHOzs7Ozs7Ozs7OztBQ2ZBLHVDIiwiZmlsZSI6Ii4vYXBwL2pzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpbWVuc2lvbiB7XG4gICAgbWVhc3VyZUNvbnRhaW5lciA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jb2xvckhvbGQgPSA4O1xuICAgICAgICB0aGlzLmltZ0RhdGEgPSBbXTtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy50b3AgPSAwO1xuICAgICAgICB0aGlzLmJvdHRvbSA9IDA7XG4gICAgICAgIHRoaXMubGVmdCA9IDA7XG4gICAgICAgIHRoaXMucmlnaHQgPSAwO1xuICAgICAgICB0aGlzLnNjcmVlbldpZHRoID0gMDtcbiAgICAgICAgdGhpcy5zY3JlZW5IZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLmRlYm91bmNlVXBkYXRlID0ge1xuICAgICAgICAgICAgdGltZXI6IDAsXG4gICAgICAgICAgICByYW5nZVg6IDAsXG4gICAgICAgICAgICByYW5nZVk6IDAsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWlkQ29sb3IgPSB7cjoyNTUsIGc6MjU1LCBiOjI1NSwgYToyNTV9O1xuICAgICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImpzLWRpbWVuc2lvblwiIHN0eWxlPVwibGVmdDogMHB4OyB0b3A6IDBweDtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ4IGpzLWRpbWVuc2lvbl9fYXhpc1wiIHN0eWxlPVwibGVmdDogMHB4OyB3aWR0aDogMHB4O1wiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInkganMtZGltZW5zaW9uX19heGlzXCIgc3R5bGU9XCJ0b3A6IDBweDsgaGVpZ2h0OiAwcHg7XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwianMtZGltZW5zaW9uX190b29sdGlwXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGltZW5zaW9uX19ub2N1cnNvclwiPjwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG5cbiAgICAgICAgdGhpcy5ub2RlcyA9IHtcbiAgICAgICAgICAgIHBvaW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZGltZW5zaW9uJyksXG4gICAgICAgICAgICB4OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZGltZW5zaW9uX19heGlzLngnKSxcbiAgICAgICAgICAgIHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1kaW1lbnNpb25fX2F4aXMueScpLFxuICAgICAgICAgICAgdG9vbHRpcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWRpbWVuc2lvbl9fdG9vbHRpcCcpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuaW1nRGF0YSA9IFtdO1xuICAgICAgICB0aGlzLnNjcmVlbldpZHRoID0gMDtcbiAgICAgICAgdGhpcy5zY3JlZW5IZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLmRlYm91bmNlVXBkYXRlID0ge1xuICAgICAgICAgICAgdGltZXI6IDAsXG4gICAgICAgICAgICByYW5nZVg6IDAsXG4gICAgICAgICAgICByYW5nZVk6IDAsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5ub2Rlcy50b29sdGlwLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0aGlzLm5vZGVzLnBvaW50LmNsYXNzTGlzdC5yZW1vdmUoJ29uJyk7XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VNb3ZlKGV2KSB7XG4gICAgICAgIHRoaXMueCA9IGV2LmNsaWVudFg7XG4gICAgICAgIHRoaXMueSA9IGV2LmNsaWVudFk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGVib3VuY2VVcGRhdGUudGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVXBkYXRlLnRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuZGVib3VuY2VVcGRhdGUudGltZXIgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW1nRGF0YSAmJiB0aGlzLmltZ0RhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZXYuY2xpZW50WCA+ICh0aGlzLmRlYm91bmNlVXBkYXRlLnJhbmdlWCArIDUpIHx8XG4gICAgICAgICAgICAgICAgZXYuY2xpZW50WCA8ICh0aGlzLmRlYm91bmNlVXBkYXRlLnJhbmdlWCAtIDUpIHx8XG4gICAgICAgICAgICAgICAgZXYuY2xpZW50WSA+ICh0aGlzLmRlYm91bmNlVXBkYXRlLnJhbmdlWSArIDUpIHx8XG4gICAgICAgICAgICAgICAgZXYuY2xpZW50WSA8ICh0aGlzLmRlYm91bmNlVXBkYXRlLnJhbmdlWSAtIDUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlVXBkYXRlLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfSwgNSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2VVcGRhdGUudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5kZWJvdW5jZVVwZGF0ZS5yYW5nZVggPSB0aGlzLng7XG4gICAgICAgIHRoaXMuZGVib3VuY2VVcGRhdGUucmFuZ2VZID0gdGhpcy55O1xuXG4gICAgICAgIHRoaXMubWVhc3VyZUFyZWEoKTtcbiAgICAgICAgdGhpcy5kcmF3KHRoaXMuZGVib3VuY2VVcGRhdGUucmFuZ2VYLCB0aGlzLmRlYm91bmNlVXBkYXRlLnJhbmdlWSk7XG4gICAgfVxuXG4gICAgbWVhc3VyZUFyZWEoKSB7XG4gICAgICAgIGxldCB4ID0gdGhpcy54O1xuICAgICAgICBsZXQgeSA9IHRoaXMueTtcblxuICAgICAgICB0aGlzLm1pZENvbG9yID0gdGhpcy5nZXRDb2xvckN1cnNvclBvaW50KCk7XG4gICAgICAgIHRoaXMucGFyc2UoeCwgeSwgJ3RvcCcpO1xuICAgICAgICB0aGlzLnBhcnNlKHgsIHksICdib3R0b20nKTtcbiAgICAgICAgdGhpcy5wYXJzZSh4LCB5LCAnbGVmdCcpO1xuICAgICAgICB0aGlzLnBhcnNlKHgsIHksICdyaWdodCcpO1xuICAgIH1cblxuICAgIHBhcnNlKHgsIHksIHR5cGUsIGkgPSAwLCBtYXhTdGVwID0gNTAwMCkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgeSA9IHktMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgICAgeSA9IHkrMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIHggPSB4KzE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgeCA9IHgtMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuaW5Cb3VuZGFyaWVzKHgsIHkpID8gKCh5ICogdGhpcy5zY3JlZW5XaWR0aCArIHgpICogNCkgOiAtMTtcblxuICAgICAgICBpZiAobGVuZ3RoID4gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IFJHQkEgPSB7XG4gICAgICAgICAgICAgICAgcjogdGhpcy5pbWdEYXRhW2xlbmd0aF0sIGc6IHRoaXMuaW1nRGF0YVtsZW5ndGggKyAxXSwgYjogdGhpcy5pbWdEYXRhW2xlbmd0aCArIDJdLCBhOiB0aGlzLmltZ0RhdGFbbGVuZ3RoICsgM11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBpc1NhbWUgPSAoXG4gICAgICAgICAgICAgICAgKFJHQkEuciA8IHRoaXMubWlkQ29sb3IuciArIHRoaXMuY29sb3JIb2xkICYmIFJHQkEuciA+IHRoaXMubWlkQ29sb3IuciAtIHRoaXMuY29sb3JIb2xkKSAmJlxuICAgICAgICAgICAgICAgIChSR0JBLmcgPCB0aGlzLm1pZENvbG9yLmcgKyB0aGlzLmNvbG9ySG9sZCAmJiBSR0JBLmcgPiB0aGlzLm1pZENvbG9yLmcgLSB0aGlzLmNvbG9ySG9sZCkgJiZcbiAgICAgICAgICAgICAgICAoUkdCQS5iIDwgdGhpcy5taWRDb2xvci5iICsgdGhpcy5jb2xvckhvbGQgJiYgUkdCQS5iID4gdGhpcy5taWRDb2xvci5iIC0gdGhpcy5jb2xvckhvbGQpICYmXG4gICAgICAgICAgICAgICAgKFJHQkEuYSA8IHRoaXMubWlkQ29sb3IuYSArIHRoaXMuY29sb3JIb2xkICYmIFJHQkEuYSA+IHRoaXMubWlkQ29sb3IuYSAtIHRoaXMuY29sb3JIb2xkKVxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAoaXNTYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heFN0ZXApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZSh4LCB5LCB0eXBlLCArK2ksIC0tbWF4U3RlcCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXNbdHlwZV0gPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpc1t0eXBlXSA9IGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3KGNsaWVudFgsIGNsaWVudFkpIHtcbiAgICAgICAgbGV0IHggPSBjbGllbnRYO1xuICAgICAgICBsZXQgeSA9IGNsaWVudFk7XG4gICAgICAgIGNvbnN0IG5vQ3Vyc29yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpbWVuc2lvbl9fbm9jdXJzb3InKTtcblxuICAgICAgICBpZiAoY2xpZW50WCArIDEwMCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLnRvb2x0aXAuY2xhc3NMaXN0LmFkZCgndHJhbnNsYXRlWCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy50b29sdGlwLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zbGF0ZVgnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGllbnRZIC0gMTAwIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy50b29sdGlwLmNsYXNzTGlzdC5hZGQoJ3RyYW5zbGF0ZVknKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy50b29sdGlwLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zbGF0ZVknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1lYXN1cmVDb250YWluZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1PdmVyQ3Vyc29yID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcblxuICAgICAgICAgICAgaWYgKGVsZW1PdmVyQ3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vQ3Vyc29yRGl2KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vQ3Vyc29yRGl2LmNsYXNzTGlzdC5hZGQoJ2RpbWVuc2lvbl9fbm9jdXJzb3JfaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvcCA9IE1hdGguY2VpbChlbGVtT3ZlckN1cnNvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBNYXRoLmNlaWwoZWxlbU92ZXJDdXJzb3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBNYXRoLmNlaWwoZWxlbU92ZXJDdXJzb3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGguY2VpbChlbGVtT3ZlckN1cnNvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50b3AgPSB0aGlzLnRvcCsxO1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCsxO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMucG9pbnQuY2xhc3NMaXN0LmFkZCgnb24nKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnBvaW50LnN0eWxlLnRvcCA9ICh0b3AgKyAoaGVpZ2h0LzIpKSArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy5wb2ludC5zdHlsZS5sZWZ0ID0gKGxlZnQgKyAod2lkdGgvMikpICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnRvb2x0aXAuaW5uZXJIVE1MID0gYCR7d2lkdGh9IHggJHtoZWlnaHR9YDtcblxuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMueS5zdHlsZS5tYXJnaW5Ub3AgPSAtKGhlaWdodC8yKSArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy55LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnguc3R5bGUubWFyZ2luTGVmdCA9IC0od2lkdGgvMikgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMueC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vQ3Vyc29yRGl2KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vQ3Vyc29yRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2RpbWVuc2lvbl9fbm9jdXJzb3JfaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudG9wID0gdGhpcy50b3ArMTtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQrMTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnBvaW50LmNsYXNzTGlzdC5hZGQoJ29uJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy5wb2ludC5zdHlsZS50b3AgPSBjbGllbnRZICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnBvaW50LnN0eWxlLmxlZnQgPSBjbGllbnRYICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnRvb2x0aXAuaW5uZXJIVE1MID0gYCR7dGhpcy5sZWZ0ICsgdGhpcy5yaWdodH0geCAke3RoaXMudG9wICsgdGhpcy5ib3R0b219YDtcblxuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMueS5zdHlsZS5tYXJnaW5Ub3AgPSAnLScgKyB0aGlzLnRvcCArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy55LnN0eWxlLmhlaWdodCA9IHRoaXMudG9wICsgdGhpcy5ib3R0b20gKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy54LnN0eWxlLm1hcmdpbkxlZnQgPSAnLScgKyB0aGlzLnJpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnguc3R5bGUud2lkdGggPSB0aGlzLmxlZnQgKyB0aGlzLnJpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChub0N1cnNvckRpdikge1xuICAgICAgICAgICAgICAgIG5vQ3Vyc29yRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2RpbWVuc2lvbl9fbm9jdXJzb3JfaGlkZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRvcCA9IHRoaXMudG9wKzE7XG4gICAgICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQrMTtcbiAgICAgICAgICAgIHRoaXMubm9kZXMucG9pbnQuY2xhc3NMaXN0LmFkZCgnb24nKTtcbiAgICAgICAgICAgIHRoaXMubm9kZXMucG9pbnQuc3R5bGUudG9wID0gY2xpZW50WSArICdweCc7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLnBvaW50LnN0eWxlLmxlZnQgPSBjbGllbnRYICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMubm9kZXMudG9vbHRpcC5pbm5lckhUTUwgPSBgJHt0aGlzLmxlZnQgKyB0aGlzLnJpZ2h0fSB4ICR7dGhpcy50b3AgKyB0aGlzLmJvdHRvbX1gO1xuXG4gICAgICAgICAgICB0aGlzLm5vZGVzLnkuc3R5bGUubWFyZ2luVG9wID0gJy0nICsgdGhpcy50b3AgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy55LnN0eWxlLmhlaWdodCA9IHRoaXMudG9wICsgdGhpcy5ib3R0b20gKyAncHgnO1xuXG4gICAgICAgICAgICB0aGlzLm5vZGVzLnguc3R5bGUubWFyZ2luTGVmdCA9ICctJyArIHRoaXMucmlnaHQgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy54LnN0eWxlLndpZHRoID0gdGhpcy5sZWZ0ICsgdGhpcy5yaWdodCArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXhQb3NpdGlvblJhaWxzKGlzQWxsU2V0ID0gZmFsc2UpIHsgLy9cbiAgICAgICAgY29uc3QgcmVjdFggPSB0aGlzLm5vZGVzLnguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHJlY3RZID0gdGhpcy5ub2Rlcy55LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGlmIChpc0FsbFNldCkge1xuICAgICAgICAgICAgY29uc3QgcmFpbFggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJhaWxYLmNsYXNzTGlzdC5hZGQoJ2pzLXJhaWwnKTtcbiAgICAgICAgICAgIHJhaWxYLmNsYXNzTGlzdC5hZGQoJ3JhaWwteCcpO1xuICAgICAgICAgICAgcmFpbFguc3R5bGUud2lkdGggPSB0aGlzLm5vZGVzLnguc3R5bGUud2lkdGg7XG4gICAgICAgICAgICByYWlsWC5zdHlsZS50b3AgPSB3aW5kb3cuc2Nyb2xsWSArIHJlY3RYLnRvcCArICdweCc7XG4gICAgICAgICAgICByYWlsWC5zdHlsZS5sZWZ0ID0gd2luZG93LnNjcm9sbFggKyByZWN0WC5sZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgIHJhaWxYLnRpdGxlID0gdGhpcy5ub2Rlcy54LnN0eWxlLndpZHRoO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyYWlsWCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJhaWxZID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByYWlsWS5jbGFzc0xpc3QuYWRkKCdqcy1yYWlsJyk7XG4gICAgICAgICAgICByYWlsWS5jbGFzc0xpc3QuYWRkKCdyYWlsLXknKTtcbiAgICAgICAgICAgIHJhaWxZLnN0eWxlLmhlaWdodCA9IHRoaXMubm9kZXMueS5zdHlsZS5oZWlnaHQ7XG4gICAgICAgICAgICByYWlsWS5zdHlsZS50b3AgPSB3aW5kb3cuc2Nyb2xsWSArIHJlY3RZLnRvcCArICdweCc7XG4gICAgICAgICAgICByYWlsWS5zdHlsZS5sZWZ0ID0gd2luZG93LnNjcm9sbFggKyByZWN0WS5sZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgIHJhaWxZLnRpdGxlID0gdGhpcy5ub2Rlcy55LnN0eWxlLmhlaWdodDtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmFpbFkpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByYWlsLmNsYXNzTGlzdC5hZGQoJ2pzLXJhaWwnKTtcblxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMubm9kZXMueC5zdHlsZS53aWR0aCkgPCBwYXJzZUludCh0aGlzLm5vZGVzLnkuc3R5bGUuaGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgIHJhaWwuY2xhc3NMaXN0LmFkZCgncmFpbC14Jyk7XG4gICAgICAgICAgICAgICAgcmFpbC5zdHlsZS53aWR0aCA9IHRoaXMubm9kZXMueC5zdHlsZS53aWR0aDtcbiAgICAgICAgICAgICAgICByYWlsLnN0eWxlLnRvcCA9IHdpbmRvdy5zY3JvbGxZICsgcmVjdFgudG9wICsgJ3B4JztcbiAgICAgICAgICAgICAgICByYWlsLnN0eWxlLmxlZnQgPSB3aW5kb3cuc2Nyb2xsWCArIHJlY3RYLmxlZnQgKyAncHgnO1xuICAgICAgICAgICAgICAgIHJhaWwudGl0bGUgPSB0aGlzLm5vZGVzLnguc3R5bGUud2lkdGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhaWwuY2xhc3NMaXN0LmFkZCgncmFpbC15Jyk7XG4gICAgICAgICAgICAgICAgcmFpbC5zdHlsZS5oZWlnaHQgPSB0aGlzLm5vZGVzLnkuc3R5bGUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHJhaWwuc3R5bGUudG9wID0gd2luZG93LnNjcm9sbFkgKyByZWN0WS50b3AgKyAncHgnO1xuICAgICAgICAgICAgICAgIHJhaWwuc3R5bGUubGVmdCA9IHdpbmRvdy5zY3JvbGxYICsgcmVjdFkubGVmdCArICdweCc7XG4gICAgICAgICAgICAgICAgcmFpbC50aXRsZSA9IHRoaXMubm9kZXMueS5zdHlsZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmFpbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclJhaWxzKCkge1xuICAgICAgICBjb25zdCByYWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1yYWlsJyk7XG5cbiAgICAgICAgaWYgKHJhaWxzKSB7XG4gICAgICAgICAgICByYWlscy5mb3JFYWNoKHJhaWwgPT4ge1xuICAgICAgICAgICAgICAgIHJhaWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dXaW5kb3dXSCgpIHtcbiAgICAgICAgY29uc3QgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2pzLXdpbmRvdy13aCcpO1xuICAgICAgICBkaXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2luZG93LXdoJyk7XG4gICAgICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3aW5kb3ctd2hfc2hvdycpO1xuICAgICAgICBkaXZDb250YWluZXIuaW5uZXJIVE1MID0gd2luZG93LmlubmVyV2lkdGggKyAneCcgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXZDb250YWluZXIpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRpdkNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd3aW5kb3ctd2hfc2hvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA4MDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChkaXZDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBkaXZDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIHNob3dEb2N1bWVudFdIKCkge1xuICAgICAgICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoYm9keS5zY3JvbGxXaWR0aCwgYm9keS5vZmZzZXRXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgaHRtbC5zY3JvbGxXaWR0aCxcbiAgICAgICAgICAgIGh0bWwub2Zmc2V0V2lkdGgpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heChib2R5LnNjcm9sbEhlaWdodCwgYm9keS5vZmZzZXRIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBodG1sLnNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIGh0bWwub2Zmc2V0SGVpZ2h0KTtcbiAgICAgICAgY29uc3Qgd2luZG93V0hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXdpbmRvdy13aCcpO1xuXG4gICAgICAgIGlmICh3aW5kb3dXSHMpIHtcbiAgICAgICAgICAgIHdpbmRvd1dIcy5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgICAgICAgICAgZGl2LnJlbW92ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqcy13aW5kb3ctd2gnKTtcbiAgICAgICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dpbmRvdy13aCcpO1xuICAgICAgICBkaXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2luZG93LXdoX3Nob3cnKTtcbiAgICAgICAgZGl2Q29udGFpbmVyLmlubmVySFRNTCA9IHdpZHRoICsgJ3gnICsgaGVpZ2h0O1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2Q29udGFpbmVyKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd3aW5kb3ctd2hfc2hvdycpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkaXZDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIH0sIDEyMDApO1xuICAgIH1cblxuICAgIGhpZGVXSHMoKSB7XG4gICAgICAgIGNvbnN0IHdpbmRvd1dIcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy13aW5kb3ctd2gnKTtcblxuICAgICAgICBpZiAod2luZG93V0hzKSB7XG4gICAgICAgICAgICB3aW5kb3dXSHMuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICAgICAgICAgIGRpdi5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZVNjcmVlbnNob3QocG5nKSB7XG4gICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gdGhpcy5sb2FkSW1hZ2UodGhpcy5zY3JlZW5zaG90UHJvY2Vzc2VkLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHBuZztcbiAgICB9XG5cbiAgICBpbkJvdW5kYXJpZXMoeCwgeSl7XG4gICAgICAgIHJldHVybiAoeCA+PSAwICYmIHggPCB0aGlzLnNjcmVlbldpZHRoICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5zY3JlZW5IZWlnaHQpO1xuICAgIH1cblxuICAgIGdldExpZ2h0bmVzc0F0KCkgeyAvLyDQv9C+0LvRg9GH0LDQtdGCINC/0L7Qt9C40YbQuNGOINC60YPRgNGB0L7RgNCwINCyINC80LDRgdGB0LjQstC1XG4gICAgICAgIHJldHVybiB0aGlzLmluQm91bmRhcmllcyh0aGlzLngsIHRoaXMueSkgPyh0aGlzLnkgKiB0aGlzLnNjcmVlbldpZHRoICsgdGhpcy54KSA6IC0xO1xuICAgIH1cblxuICAgIHNjcmVlbnNob3RQcm9jZXNzZWQoZGF0YSkgeyAvLyDQv9C+0LvRg9GH0LDQtdGCINGB0LLQvtC50YHRgtCy0LAg0YHQutGA0LjQvdGI0L7RgtCwINC4INCy0YvQt9GL0LLQsNC10YIg0LzQtdGC0L7QtNGLINCy0YvRh9C40YHQu9C10L3QuNGPXG4gICAgICAgIHRoaXMuaW1nRGF0YSA9IG5ldyBVaW50OENsYW1wZWRBcnJheShkYXRhLmltZ0RhdGEpO1xuICAgICAgICB0aGlzLnNjcmVlbldpZHRoID0gZGF0YS53aWR0aDtcbiAgICAgICAgdGhpcy5zY3JlZW5IZWlnaHQgPSBkYXRhLmhlaWdodDtcbiAgICB9XG5cbiAgICBnZXRDb2xvckN1cnNvclBvaW50KCkgeyAvLyDQv9C+0LvRg9GH0LDQtdGCINGG0LLQtdGCINC/0LjQutGB0LXQu9GPINC/0L7QtCDQutGD0YDRgdC+0YDQvtC8XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGlnaHRuZXNzQXQoKSAqIDQ7XG4gICAgICAgIGNvbnN0IFJHQkEgPSB7XG4gICAgICAgICAgICByOiB0aGlzLmltZ0RhdGFbbGVuZ3RoXSwgZzogdGhpcy5pbWdEYXRhW2xlbmd0aCArIDFdLCBiOiB0aGlzLmltZ0RhdGFbbGVuZ3RoICsgMl0sIGE6IHRoaXMuaW1nRGF0YVtsZW5ndGggKyAzXVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBSR0JBO1xuICAgIH1cblxuICAgIGxvYWRJbWFnZShmbikge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCAmJiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIGxldCBpbWdEYXRhID0gdGhpcy5jdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpLmRhdGE7XG5cbiAgICAgICAgICAgICAgICBmbih7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbWdEYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgaW1nRGF0YTogaW1nRGF0YS5idWZmZXIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMClcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlUnVsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFjdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnJlc2l6ZVNpZGUgPSAnJztcbiAgICAgICAgdGhpcy5yZWN0ID0ge307XG4gICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvb2x0aXBTaXplTm9kZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvb2x0aXBQb3NOb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW91c2VYID0gMDtcbiAgICAgICAgdGhpcy5tb3VzZVkgPSAwO1xuXG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgIH1cblxuICAgIGNyZWF0ZShpc0F1dG9TZXQpIHtcbiAgICAgICAgY29uc3QgcnVsZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXJlY3RhbmdsZS1ydWxlcicpO1xuICAgICAgICBsZXQgdG9wID0gMTAwO1xuICAgICAgICBsZXQgbGVmdCA9IDEwMDtcbiAgICAgICAgbGV0IHdpZHRoID0gMjAwO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gMTAwO1xuXG4gICAgICAgIGlmIChpc0F1dG9TZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1PdmVyQ3Vyc29yID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0aGlzLm1vdXNlWCwgdGhpcy5tb3VzZVkpO1xuXG4gICAgICAgICAgICBpZiAoZWxlbU92ZXJDdXJzb3IpIHtcbiAgICAgICAgICAgICAgICB0b3AgPSB3aW5kb3cuc2Nyb2xsWSArIGVsZW1PdmVyQ3Vyc29yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gd2luZG93LnNjcm9sbFggKyBlbGVtT3ZlckN1cnNvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICAgICAgICAgIHdpZHRoID0gZWxlbU92ZXJDdXJzb3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gZWxlbU92ZXJDdXJzb3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJ1bGVycykge1xuICAgICAgICAgICAgdG9wID0gMTAwICsgKHJ1bGVycy5sZW5ndGggKiAxMCk7XG4gICAgICAgICAgICBsZWZ0ID0gMTAwICsgKHJ1bGVycy5sZW5ndGggKiAxMCk7XG4gICAgICAgIH1cblxuICAgICAgICB0b3AgPSBNYXRoLmNlaWwodG9wKTtcbiAgICAgICAgbGVmdCA9IE1hdGguY2VpbChsZWZ0KTtcbiAgICAgICAgd2lkdGggPSBNYXRoLmNlaWwod2lkdGgpO1xuICAgICAgICBoZWlnaHQgPSBNYXRoLmNlaWwoaGVpZ2h0KTtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2pzLXJlY3RhbmdsZS1ydWxlcicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmVjdGFuZ2xlLXJ1bGVyJyk7XG5cbiAgICAgICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqcy1yZWN0YW5nbGUgcmVjdGFuZ2xlLXJ1bGVyX19yZWN0YW5nbGUgdWktcmVzaXphYmxlXCIgZGF0YS1hY3Rpb249XCJtb3ZlXCIgc3R5bGU9XCIke1xuICAgICAgICAgICAgICAgICd0b3A6JyArIHRvcCArICdweDsnXG4gICAgICAgICAgICAgICAgKyAnbGVmdDonICsgbGVmdCArICdweDsnXG4gICAgICAgICAgICAgICAgKyAnd2lkdGg6JyArIHdpZHRoICsgJ3B4OydcbiAgICAgICAgICAgICAgICArICdoZWlnaHQ6JyArIGhlaWdodCArICdweDsnXG4gICAgICAgICAgICB9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3RhbmdsZS1ydWxlcl9fbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqcy1yZWN0YW5nbGUtY2xvc2UgcmVjdGFuZ2xlLWNsb3NlXCIgZGF0YS1hY3Rpb249XCJjbG9zZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwianMtcmVjdGFuZ2xlLXBpbiByZWN0YW5nbGUtcGluXCIgZGF0YS1hY3Rpb249XCJwaW5cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjdGFuZ2xlLXJ1bGVyX190b29sdGlwXCIgZGF0YS1hY3Rpb249XCJtb3ZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqcy1yZWN0YW5nbGUtdG9vbHRpcC1zaXplIHJlY3RhbmdsZS10b29sdGlwX19zaXplIHRvb2x0aXBfX2JvdHRvbSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID4gMTIwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgaGVpZ2h0ID4gNTBcbiAgICAgICAgICAgICAgICAgICAgICAgICkgPyAncmVjdGFuZ2xlLXRvb2x0aXBfY2VudGVyJyA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cIiBkYXRhLWFjdGlvbj1cIm1vdmVcIj4ke3dpZHRofXgke2hlaWdodH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImpzLXJlY3RhbmdsZS10b29sdGlwLXBvcyByZWN0YW5nbGUtdG9vbHRpcF9fcG9zIHRvb2x0aXBfX2JvdHRvbSBoaWRlXCIgZGF0YS1hY3Rpb249XCJtb3ZlXCI+JHt0b3B9eCR7bGVmdH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktcmVzaXphYmxlLW5cIiBkYXRhLWFjdGlvbj1cInJlc2l6ZVwiIGRhdGEtcmVzaXplPVwiblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1yZXNpemFibGUtd1wiIGRhdGEtYWN0aW9uPVwicmVzaXplXCIgZGF0YS1yZXNpemU9XCJ3XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLXJlc2l6YWJsZS1zXCIgZGF0YS1hY3Rpb249XCJyZXNpemVcIiBkYXRhLXJlc2l6ZT1cInNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktcmVzaXphYmxlLWVcIiBkYXRhLWFjdGlvbj1cInJlc2l6ZVwiIGRhdGEtcmVzaXplPVwiZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1yZXNpemFibGUtc2VcIiBkYXRhLWFjdGlvbj1cInJlc2l6ZVwiIGRhdGEtcmVzaXplPVwic2VcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3RhbmdsZS1ydWxlcl9fbm8tY3Vyc29yXCI+PC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICBpZiAoaXNBdXRvU2V0KSB7XG4gICAgICAgICAgICBjb25zdCBwaW4gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmpzLXJlY3RhbmdsZS1waW4nKTtcblxuICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSAncGluJztcbiAgICAgICAgICAgIHRoaXMucnVsZXJOb2RlID0gY29udGFpbmVyO1xuICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlID0gdGhpcy5ydWxlck5vZGUucXVlcnlTZWxlY3RvcignLmpzLXJlY3RhbmdsZScpO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyTW91c2VFdmVudChwaW4sICdtb3VzZXVwJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRSdWxlcih0YXJnZXQsIHNlbGVjdG9yKSB7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBydWxlciA9IHRhcmdldC5jbG9zZXN0KCcuanMtcmVjdGFuZ2xlLXJ1bGVyJyk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RvciA9PT0gJ2pzLXJlY3RhbmdsZS1ydWxlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcnVsZXI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJ1bGVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gIHJ1bGVyLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc2VsZWN0b3IpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duLmJpbmQodGhpcykpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bi5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIHRyaWdnZXJNb3VzZUV2ZW50KG5vZGUsIGV2ZW50VHlwZSkge1xuICAgICAgICBsZXQgY2xpY2tFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuICAgICAgICBjbGlja0V2ZW50LmluaXRFdmVudChldmVudFR5cGUsIHRydWUsIHRydWUpO1xuICAgICAgICBub2RlLmRpc3BhdGNoRXZlbnQoY2xpY2tFdmVudCk7XG4gICAgfVxuXG4gICAgbW91c2VEb3duKGV2KSB7XG4gICAgICAgIHRoaXMucnVsZXJOb2RlID0gdGhpcy5nZXRSdWxlcihldi50YXJnZXQsICdqcy1yZWN0YW5nbGUtcnVsZXInKTtcblxuICAgICAgICBpZiAodGhpcy5ydWxlck5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZSA9IHRoaXMucnVsZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWN0YW5nbGUnKTtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcFNpemVOb2RlID0gdGhpcy5ydWxlck5vZGUucXVlcnlTZWxlY3RvcignLmpzLXJlY3RhbmdsZS10b29sdGlwLXNpemUnKTtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcFBvc05vZGUgPSB0aGlzLnJ1bGVyTm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtcmVjdGFuZ2xlLXRvb2x0aXAtcG9zJyk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbiA9IGV2LnRhcmdldC5kYXRhc2V0Py5hY3Rpb247XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiAmJiB0aGlzLnJlY3RhbmdsZU5vZGUgJiYgdGhpcy50b29sdGlwU2l6ZU5vZGUgJiYgdGhpcy50b29sdGlwUG9zTm9kZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ3Jlc2l6ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzaXplID0gZXYudGFyZ2V0LmRhdGFzZXQ/LnJlc2l6ZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydExlZnQ6IHRoaXMucmVjdGFuZ2xlTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ3JlY3RhbmdsZS1ydWxlcl9fcmVjdGFuZ2xlX2ZpeCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB3aW5kb3cuc2Nyb2xsWCArIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VG9wOiB0aGlzLnJlY3RhbmdsZU5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWN0YW5nbGUtcnVsZXJfX3JlY3RhbmdsZV9maXgnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gd2luZG93LnNjcm9sbFkgKyB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRYOiB3aW5kb3cuc2Nyb2xsWCArIChldi5jbGllbnRYIC0gdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRZOiB3aW5kb3cuc2Nyb2xsWSArIChldi5jbGllbnRZIC0gdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFg6IGV2LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFk6IGV2LmNsaWVudFksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdFdpZHRoOiB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdEhlaWdodDogdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNpemVTaWRlID0gcmVzaXplID8gcmVzaXplIDogJyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGlvbiA9PT0gJ21vdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0TGVmdDogdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFRvcDogdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0WDogdGhpcy5yZWN0YW5nbGVOb2RlLmNsYXNzTGlzdC5jb250YWlucygncmVjdGFuZ2xlLXJ1bGVyX19yZWN0YW5nbGVfZml4JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChldi5jbGllbnRYIC0gdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB3aW5kb3cuc2Nyb2xsWCArIChldi5jbGllbnRYIC0gdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRZOiB0aGlzLnJlY3RhbmdsZU5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWN0YW5nbGUtcnVsZXJfX3JlY3RhbmdsZV9maXgnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGV2LmNsaWVudFkgLSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogd2luZG93LnNjcm9sbFkgKyAoZXYuY2xpZW50WSAtIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRYOiBldi5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRZOiBldi5jbGllbnRZLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRXaWR0aDogdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRIZWlnaHQ6IHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWJvdW5jZSh0aGlzLnNob3dQb3MuYmluZCh0aGlzKSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBTaXplTm9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50b29sdGlwUG9zTm9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSAnJztcbiAgICAgICAgICAgIHRoaXMucmVzaXplU2lkZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXRZID0gMDtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0WCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3VzZVVwKGV2KSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGlvbiAmJiB0aGlzLnJ1bGVyTm9kZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAnY2xvc2UnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucnVsZXJOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVsZXJOb2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpb24gPT09ICdwaW4nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnRuID0gdGhpcy5yZWN0YW5nbGVOb2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWN0YW5nbGUtcGluJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYnRuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IHdpbmRvdy5zY3JvbGxZICsgKGV2LmNsaWVudFkgLSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSB3aW5kb3cuc2Nyb2xsWCArIChldi5jbGllbnRYIC0gdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLnRvcCA9IChldi5wYWdlWSAtIHkpICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS5sZWZ0ID0gKGV2LnBhZ2VYIC0geCkgKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuY2xhc3NMaXN0LnJlbW92ZSgncmVjdGFuZ2xlLXJ1bGVyX19yZWN0YW5nbGVfZml4Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gKGV2LmNsaWVudFkgLSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSAoZXYuY2xpZW50WCAtIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS50b3AgPSAoZXYucGFnZVkgLSB5KSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUubGVmdCA9IChldi5wYWdlWCAtIHgpICsgJ3B4JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLmNsYXNzTGlzdC5hZGQoJ3JlY3RhbmdsZS1ydWxlcl9fcmVjdGFuZ2xlX2ZpeCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvb2x0aXAodGhpcy5yZWN0YW5nbGVOb2RlLCB0aGlzLnRvb2x0aXBTaXplTm9kZSwgdGhpcy50b29sdGlwUG9zTm9kZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlKHRoaXMuaGlkZVBvcy5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMucmVzaXplU2lkZSA9ICcnO1xuICAgICAgICB0aGlzLm9mZnNldFkgPSAwO1xuICAgICAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgIH1cblxuICAgIHNob3dQb3MoKSB7XG4gICAgICAgIHRoaXMudG9vbHRpcFBvc05vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB0aGlzLnRvb2x0aXBTaXplTm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgaGlkZVBvcygpIHtcbiAgICAgICAgdGhpcy50b29sdGlwUG9zTm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHRoaXMudG9vbHRpcFNpemVOb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBtb3VzZU1vdmUoZXYpIHtcbiAgICAgICAgdGhpcy5tb3VzZVggPSBldi5jbGllbnRYO1xuICAgICAgICB0aGlzLm1vdXNlWSA9IGV2LmNsaWVudFk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAnbW92ZScpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS50b3AgPSAoZXYucGFnZVkgLSB0aGlzLnJlY3Quc2hpZnRZKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUubGVmdCA9IChldi5wYWdlWCAtIHRoaXMucmVjdC5zaGlmdFgpICsgJ3B4JztcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVUb29sdGlwKHRoaXMucmVjdGFuZ2xlTm9kZSwgdGhpcy50b29sdGlwU2l6ZU5vZGUsIHRoaXMudG9vbHRpcFBvc05vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aW9uID09PSAncmVzaXplJykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA+IDEyMFxuICAgICAgICAgICAgICAgICYmIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgPiA1MFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b29sdGlwU2l6ZU5vZGUuY2xhc3NMaXN0LmFkZCgncmVjdGFuZ2xlLXRvb2x0aXBfY2VudGVyJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudG9vbHRpcFNpemVOb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3JlY3RhbmdsZS10b29sdGlwX2NlbnRlcicpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2l6ZVNpZGUgPT09ICdzZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUud2lkdGggPSAodGhpcy5yZWN0LnNoaWZ0V2lkdGggKyBldi5jbGllbnRYIC0gdGhpcy5yZWN0LnN0YXJ0WCkgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS5oZWlnaHQgPSAodGhpcy5yZWN0LnNoaWZ0SGVpZ2h0ICsgZXYuY2xpZW50WSAtIHRoaXMucmVjdC5zdGFydFkpICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNpemVTaWRlID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUud2lkdGggPSAodGhpcy5yZWN0LnNoaWZ0V2lkdGggKyBldi5jbGllbnRYIC0gdGhpcy5yZWN0LnN0YXJ0WCkgKyAncHgnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc2l6ZVNpZGUgPT09ICdzJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS5oZWlnaHQgPSAodGhpcy5yZWN0LnNoaWZ0SGVpZ2h0ICsgZXYuY2xpZW50WSAtIHRoaXMucmVjdC5zdGFydFkpICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNpemVTaWRlID09PSAndycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdMZWZ0ID0gKGV2LnBhZ2VYIC0gdGhpcy5yZWN0LnNoaWZ0WCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUubGVmdCA9IG5ld0xlZnQgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS53aWR0aCA9ICh0aGlzLnJlY3Quc2hpZnRXaWR0aCArICh0aGlzLnJlY3Quc3RhcnRMZWZ0IC0gbmV3TGVmdCkpICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNpemVTaWRlID09PSAnbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUb3AgPSAodGhpcy5yZWN0YW5nbGVOb2RlLmNsYXNzTGlzdC5jb250YWlucygncmVjdGFuZ2xlLXJ1bGVyX19yZWN0YW5nbGVfZml4JykpXG4gICAgICAgICAgICAgICAgICAgID8gd2luZG93LnNjcm9sbFkgKyAoZXYucGFnZVkgLSB0aGlzLnJlY3Quc2hpZnRZKVxuICAgICAgICAgICAgICAgICAgICA6IChldi5wYWdlWSAtIHRoaXMucmVjdC5zaGlmdFkpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLnRvcCA9IG5ld1RvcCArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLmhlaWdodCA9ICh0aGlzLnJlY3Quc2hpZnRIZWlnaHQgKyAodGhpcy5yZWN0LnN0YXJ0VG9wIC0gbmV3VG9wKSkgKyAncHgnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRvb2x0aXAodGhpcy5yZWN0YW5nbGVOb2RlLCB0aGlzLnRvb2x0aXBTaXplTm9kZSwgdGhpcy50b29sdGlwUG9zTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBrZXlEb3duKGV2KSB7XG4gICAgICAgIGlmICh0aGlzLnJlY3RhbmdsZU5vZGUpIHtcbiAgICAgICAgICAgIGlmIChldi5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLnRvcCA9ICt0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUudG9wXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSAtIDEgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcygpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9vbHRpcCh0aGlzLnJlY3RhbmdsZU5vZGUsIHRoaXMudG9vbHRpcFNpemVOb2RlLCB0aGlzLnRvb2x0aXBQb3NOb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlKHRoaXMuaGlkZVBvcy5iaW5kKHRoaXMpLCA1MDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldi5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUudG9wID0gK3RoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS50b3BcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3B4JywgJycpICsgMSArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UG9zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb29sdGlwKHRoaXMucmVjdGFuZ2xlTm9kZSwgdGhpcy50b29sdGlwU2l6ZU5vZGUsIHRoaXMudG9vbHRpcFBvc05vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2UodGhpcy5oaWRlUG9zLmJpbmQodGhpcyksIDUwMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2LmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS5sZWZ0ID0gK3RoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS5sZWZ0XG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSAtIDEgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcygpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9vbHRpcCh0aGlzLnJlY3RhbmdsZU5vZGUsIHRoaXMudG9vbHRpcFNpemVOb2RlLCB0aGlzLnRvb2x0aXBQb3NOb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlKHRoaXMuaGlkZVBvcy5iaW5kKHRoaXMpLCA1MDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldi5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLmxlZnQgPSArdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLmxlZnRcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3B4JywgJycpICsgMSArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UG9zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb29sdGlwKHRoaXMucmVjdGFuZ2xlTm9kZSwgdGhpcy50b29sdGlwU2l6ZU5vZGUsIHRoaXMudG9vbHRpcFBvc05vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2UodGhpcy5oaWRlUG9zLmJpbmQodGhpcyksIDUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVUb29sdGlwKHJlY3RhbmdsZSwgdG9vbHRpcFNpemUsIHRvb2x0aXBQb3MpIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICB0b29sdGlwU2l6ZS5pbm5lckhUTUwgPSByZWN0LndpZHRoICsgJ3gnICsgcmVjdC5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRoaXMucmVjdGFuZ2xlTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ3JlY3RhbmdsZS1ydWxlcl9fcmVjdGFuZ2xlX2ZpeCcpKSB7XG4gICAgICAgICAgICB0b29sdGlwUG9zLmlubmVySFRNTCA9IHJlY3RhbmdsZS5vZmZzZXRMZWZ0ICsgJ3gnICsgcmVjdGFuZ2xlLm9mZnNldFRvcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvb2x0aXBQb3MuaW5uZXJIVE1MID0gcmVjdC5sZWZ0ICsgJ3gnICsgcmVjdC50b3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWJvdW5jZShmdW5jLCBkZWxheSkge1xuICAgICAgICBpZiAodGhpcy5kZWJJZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGViSWQpO1xuICAgICAgICAgICAgdGhpcy5kZWJJZCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlYklkID0gc2V0VGltZW91dChmdW5jLCBkZWxheSk7XG4gICAgfVxufSIsImltcG9ydCBEaW1lbnNpb24gZnJvbSAnLi9jbGFzc2VzL0RpbWVuc2lvbic7XG5pbXBvcnQgUmVjdGFuZ2xlUnVsZXIgZnJvbSBcIi4vY2xhc3Nlcy9SZWN0YW5nbGVSdWxlclwiO1xuXG5jb25zdCBkaW1lbnNpb24gPSBuZXcgRGltZW5zaW9uKCk7XG5jb25zdCByZWN0YW5nbGVSdWxlciA9IG5ldyBSZWN0YW5nbGVSdWxlcigpO1xuXG5sZXQgc2V0S2V5cyA9IFtdO1xubGV0IGFjdGl2ZSA9ICcnO1xuY29uc3QgcXVpY2tLZXlzID0ge1xuICAgICdBbHRMZWZ0ICsgS2V5Wic6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gJ2RpbWVuc2lvbnMnO1xuXG4gICAgICAgIGlmIChhY3RpdmUgPT09IGtleSkge1xuICAgICAgICAgICAgYWN0aXZlID0gJyc7XG4gICAgICAgICAgICBkaW1lbnNpb24uc3RvcCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGl2ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGFjdGl2ZSA9IGtleTtcbiAgICAgICAgICAgIGRpbWVuc2lvbi5oaWRlV0hzKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgJ0FsdExlZnQgKyBLZXlYJzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZWN0YW5nbGVSdWxlci5jcmVhdGUoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgJ0FsdExlZnQgKyBLZXlDJzogZnVuY3Rpb24gKCkge1xuICAgICAgICBkaW1lbnNpb24uY2xlYXJSYWlscygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICAnQWx0TGVmdCArIEtleUQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpbWVuc2lvbi5maXhQb3NpdGlvblJhaWxzKHRydWUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICAnQWx0TGVmdCArIEtleVMnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpbWVuc2lvbi5maXhQb3NpdGlvblJhaWxzKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgICdBbHRMZWZ0ICsgU2hpZnRMZWZ0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYWN0aXZlID09PSAnZGltZW5zaW9ucycpIHtcbiAgICAgICAgICAgIGRpbWVuc2lvbi5tZWFzdXJlQ29udGFpbmVyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3RpdmUgPT09ICcnKSB7XG4gICAgICAgICAgICBkaW1lbnNpb24uc2hvd0RvY3VtZW50V0goKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgICdBbHRMZWZ0ICsgU2hpZnRMZWZ0ICsgS2V5WCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGFjdGl2ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJlY3RhbmdsZVJ1bGVyLmNyZWF0ZSh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgICdBbHRMZWZ0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYWN0aXZlID09PSAnJykge1xuICAgICAgICAgICAgZGltZW5zaW9uLnNob3dXaW5kb3dXSCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxufTtcbmNvbnN0IGFjdGlvbnMgPSB7XG4gICAgJ3Rha2VTY3JlZW5zaG90JzogZnVuY3Rpb24gKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIGRpbWVuc2lvbi5wYXJzZVNjcmVlbnNob3QocmVxdWVzdC5zY3JlZW5QbmcpO1xuICAgIH0sXG59XG5cbi8vIHJlY2VpdmVXb3JrZXJNZXNzYWdlXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICBpZiAocmVxdWVzdC5hY3Rpb24gJiYgdHlwZW9mIGFjdGlvbnNbIHJlcXVlc3QuYWN0aW9uIF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYWN0aW9uc1sgcmVxdWVzdC5hY3Rpb24gXShyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXYpID0+IHtcbiAgICBzZXRLZXlzLnB1c2goZXYuY29kZSk7XG5cbiAgICBpZiAoc2V0S2V5cy5sZW5ndGggPj0gMSAmJiB0eXBlb2YgcXVpY2tLZXlzWyBzZXRLZXlzLmpvaW4oJyArICcpIF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKHF1aWNrS2V5c1sgc2V0S2V5cy5qb2luKCcgKyAnKSBdKCkpIHtcbiAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtvcHRpb25BY3RpdmF0ZTogYWN0aXZlfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2KSA9PiB7XG4gICAgc2V0S2V5cyA9IFtdO1xuICAgIGRpbWVuc2lvbi5tZWFzdXJlQ29udGFpbmVyID0gZmFsc2U7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldikgPT4ge1xuICAgIGRpbWVuc2lvbi5oYW5kbGVNb3VzZU1vdmUoZXYpO1xufSk7XG5cbmxldCBzY3JvbGxTY3JlZW5EZWJvdW5jZSA9IDA7XG5sZXQgc2Nyb2xsU2NyZWVuUHJvY2VzcyA9IGZhbHNlO1xuXG5bJ3Njcm9sbCcsICdtb3VzZXdoZWVsJ10uZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIobGlzdGVuZXIsIChldikgPT4ge1xuICAgICAgICBpZiAobGlzdGVuZXIgPT09ICdtb3VzZXdoZWVsJykge1xuICAgICAgICAgICAgaGFuZGxlU2NyZWVuQ2hhbmdlKDgwMCwgMTAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciA9PT0gJ3Njcm9sbCcpIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZVNjcmVlbkNoYW5nZSgxMDAsIDUwKTtcbiAgICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbn0pO1xuXG5mdW5jdGlvbiBoYW5kbGVTY3JlZW5DaGFuZ2UodGltZW91dERlYiwgdGltZW91dFNjcmVlbikge1xuICAgIGlmIChhY3RpdmUgPT09ICdkaW1lbnNpb25zJyAmJiBzY3JvbGxTY3JlZW5Qcm9jZXNzID09PSBmYWxzZSkge1xuICAgICAgICBzY3JvbGxTY3JlZW5Qcm9jZXNzID0gdHJ1ZTtcblxuICAgICAgICBpZiAoc2Nyb2xsU2NyZWVuRGVib3VuY2UpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChzY3JvbGxTY3JlZW5EZWJvdW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzY3JvbGxTY3JlZW5EZWJvdW5jZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcXVpY2tLZXlzWydBbHRMZWZ0ICsgS2V5WiddKCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChxdWlja0tleXNbJ0FsdExlZnQgKyBLZXlaJ10oKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2Nyb2xsU2NyZWVuRGVib3VuY2UgLSAyJywgYWN0aXZlKVxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7b3B0aW9uQWN0aXZhdGU6IGFjdGl2ZX0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFNjcmVlblByb2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aW1lb3V0U2NyZWVuKVxuICAgICAgICB9LCB0aW1lb3V0RGViKTtcbiAgICB9XG59IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9