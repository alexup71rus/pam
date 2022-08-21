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
    value: function parseScreenshot(png, hold) {
      this.colorHold = hold;
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
    dimension.parseScreenshot(request.screenPng, request.hold);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9EaW1lbnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9SZWN0YW5nbGVSdWxlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJEaW1lbnNpb24iLCJpbWFnZSIsIkltYWdlIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29sb3JIb2xkIiwiaW1nRGF0YSIsIngiLCJ5IiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJkZWJvdW5jZVVwZGF0ZSIsInRpbWVyIiwicmFuZ2VYIiwicmFuZ2VZIiwibWlkQ29sb3IiLCJyIiwiZyIsImIiLCJhIiwiY3JlYXRlIiwiaHRtbCIsImJvZHkiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJub2RlcyIsInBvaW50IiwicXVlcnlTZWxlY3RvciIsInRvb2x0aXAiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJldiIsImNsaWVudFgiLCJjbGllbnRZIiwiY2xlYXJUaW1lb3V0IiwibGVuZ3RoIiwic2V0VGltZW91dCIsInVwZGF0ZSIsIm1lYXN1cmVBcmVhIiwiZHJhdyIsImdldENvbG9yQ3Vyc29yUG9pbnQiLCJwYXJzZSIsInR5cGUiLCJpIiwibWF4U3RlcCIsImluQm91bmRhcmllcyIsIlJHQkEiLCJpc1NhbWUiLCJub0N1cnNvckRpdiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGQiLCJtZWFzdXJlQ29udGFpbmVyIiwiZWxlbU92ZXJDdXJzb3IiLCJlbGVtZW50RnJvbVBvaW50IiwiTWF0aCIsImNlaWwiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImlzQWxsU2V0IiwicmVjdFgiLCJyZWN0WSIsInJhaWxYIiwic2Nyb2xsWSIsInNjcm9sbFgiLCJ0aXRsZSIsImFwcGVuZENoaWxkIiwicmFpbFkiLCJyYWlsIiwicGFyc2VJbnQiLCJyYWlscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZGl2Q29udGFpbmVyIiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJtYXgiLCJzY3JvbGxXaWR0aCIsIm9mZnNldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJ3aW5kb3dXSHMiLCJkaXYiLCJwbmciLCJob2xkIiwib25sb2FkIiwibG9hZEltYWdlIiwic2NyZWVuc2hvdFByb2Nlc3NlZCIsImJpbmQiLCJzcmMiLCJkYXRhIiwiVWludDhDbGFtcGVkQXJyYXkiLCJnZXRMaWdodG5lc3NBdCIsImZuIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsImdldEltYWdlRGF0YSIsImJ1ZmZlciIsIlJlY3RhbmdsZVJ1bGVyIiwiYWN0aW9uIiwicmVzaXplU2lkZSIsInJlY3QiLCJyZWN0YW5nbGVOb2RlIiwidG9vbHRpcFNpemVOb2RlIiwidG9vbHRpcFBvc05vZGUiLCJtb3VzZVgiLCJtb3VzZVkiLCJpc0F1dG9TZXQiLCJydWxlcnMiLCJjb250YWluZXIiLCJwaW4iLCJydWxlck5vZGUiLCJ0cmlnZ2VyTW91c2VFdmVudCIsInRhcmdldCIsInNlbGVjdG9yIiwiY29udGFpbnMiLCJydWxlciIsImNsb3Nlc3QiLCJyZXN1bHQiLCJhZGRFdmVudExpc3RlbmVyIiwibW91c2VEb3duIiwibW91c2VVcCIsIm1vdXNlTW92ZSIsImtleURvd24iLCJub2RlIiwiZXZlbnRUeXBlIiwiY2xpY2tFdmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImdldFJ1bGVyIiwiZGF0YXNldCIsInJlc2l6ZSIsInN0YXJ0TGVmdCIsInN0YXJ0VG9wIiwic2hpZnRYIiwic2hpZnRZIiwic3RhcnRYIiwic3RhcnRZIiwic2hpZnRXaWR0aCIsInNoaWZ0SGVpZ2h0IiwiZGVib3VuY2UiLCJzaG93UG9zIiwib2Zmc2V0WSIsIm9mZnNldFgiLCJidG4iLCJwYWdlWSIsInBhZ2VYIiwidXBkYXRlVG9vbHRpcCIsImhpZGVQb3MiLCJuZXdMZWZ0IiwibmV3VG9wIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyZXBsYWNlIiwicmVjdGFuZ2xlIiwidG9vbHRpcFNpemUiLCJ0b29sdGlwUG9zIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImZ1bmMiLCJkZWxheSIsImRlYklkIiwiZGltZW5zaW9uIiwicmVjdGFuZ2xlUnVsZXIiLCJzZXRLZXlzIiwiYWN0aXZlIiwicXVpY2tLZXlzIiwic3RvcCIsImhpZGVXSHMiLCJjbGVhclJhaWxzIiwiZml4UG9zaXRpb25SYWlscyIsInNob3dEb2N1bWVudFdIIiwic2hvd1dpbmRvd1dIIiwiYWN0aW9ucyIsInJlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJwYXJzZVNjcmVlbnNob3QiLCJzY3JlZW5QbmciLCJjaHJvbWUiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJwdXNoIiwiY29kZSIsImpvaW4iLCJzZW5kTWVzc2FnZSIsIm9wdGlvbkFjdGl2YXRlIiwiaGFuZGxlTW91c2VNb3ZlIiwic2Nyb2xsU2NyZWVuRGVib3VuY2UiLCJzY3JvbGxTY3JlZW5Qcm9jZXNzIiwibGlzdGVuZXIiLCJoYW5kbGVTY3JlZW5DaGFuZ2UiLCJ0aW1lb3V0RGViIiwidGltZW91dFNjcmVlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRnFCQSxTO0FBR2pCLHVCQUFjO0FBQUE7O0FBQUEsMkdBRkssS0FFTDs7QUFDVixTQUFLQyxLQUFMLEdBQWEsSUFBSUMsS0FBSixFQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUtDLENBQUwsR0FBUyxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLQyxHQUFMLEdBQVcsQ0FBWDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EsU0FBS0MsSUFB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RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtHOzs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsNEc7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0c7Ozs7Ozs7Ozs7O0FDZkEsdUMiLCJmaWxlIjoiLi9hcHAvanMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGltZW5zaW9uIHtcbiAgICBtZWFzdXJlQ29udGFpbmVyID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmNvbG9ySG9sZCA9IDg7XG4gICAgICAgIHRoaXMuaW1nRGF0YSA9IFtdO1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLnRvcCA9IDA7XG4gICAgICAgIHRoaXMuYm90dG9tID0gMDtcbiAgICAgICAgdGhpcy5sZWZ0ID0gMDtcbiAgICAgICAgdGhpcy5yaWdodCA9IDA7XG4gICAgICAgIHRoaXMuc2NyZWVuV2lkdGggPSAwO1xuICAgICAgICB0aGlzLnNjcmVlbkhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuZGVib3VuY2VVcGRhdGUgPSB7XG4gICAgICAgICAgICB0aW1lcjogMCxcbiAgICAgICAgICAgIHJhbmdlWDogMCxcbiAgICAgICAgICAgIHJhbmdlWTogMCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5taWRDb2xvciA9IHtyOjI1NSwgZzoyNTUsIGI6MjU1LCBhOjI1NX07XG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICBjb25zdCBodG1sID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwianMtZGltZW5zaW9uXCIgc3R5bGU9XCJsZWZ0OiAwcHg7IHRvcDogMHB4O1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIngganMtZGltZW5zaW9uX19heGlzXCIgc3R5bGU9XCJsZWZ0OiAwcHg7IHdpZHRoOiAwcHg7XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwieSBqcy1kaW1lbnNpb25fX2F4aXNcIiBzdHlsZT1cInRvcDogMHB4OyBoZWlnaHQ6IDBweDtcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqcy1kaW1lbnNpb25fX3Rvb2x0aXBcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaW1lbnNpb25fX25vY3Vyc29yXCI+PC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sKTtcblxuICAgICAgICB0aGlzLm5vZGVzID0ge1xuICAgICAgICAgICAgcG9pbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1kaW1lbnNpb24nKSxcbiAgICAgICAgICAgIHg6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1kaW1lbnNpb25fX2F4aXMueCcpLFxuICAgICAgICAgICAgeTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWRpbWVuc2lvbl9fYXhpcy55JyksXG4gICAgICAgICAgICB0b29sdGlwOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZGltZW5zaW9uX190b29sdGlwJyksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5pbWdEYXRhID0gW107XG4gICAgICAgIHRoaXMuc2NyZWVuV2lkdGggPSAwO1xuICAgICAgICB0aGlzLnNjcmVlbkhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuZGVib3VuY2VVcGRhdGUgPSB7XG4gICAgICAgICAgICB0aW1lcjogMCxcbiAgICAgICAgICAgIHJhbmdlWDogMCxcbiAgICAgICAgICAgIHJhbmdlWTogMCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm5vZGVzLnRvb2x0aXAuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMubm9kZXMucG9pbnQuY2xhc3NMaXN0LnJlbW92ZSgnb24nKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU1vdmUoZXYpIHtcbiAgICAgICAgdGhpcy54ID0gZXYuY2xpZW50WDtcbiAgICAgICAgdGhpcy55ID0gZXYuY2xpZW50WTtcblxuICAgICAgICBpZiAodGhpcy5kZWJvdW5jZVVwZGF0ZS50aW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VVcGRhdGUudGltZXIpO1xuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZVVwZGF0ZS50aW1lciA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbWdEYXRhICYmIHRoaXMuaW1nRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBldi5jbGllbnRYID4gKHRoaXMuZGVib3VuY2VVcGRhdGUucmFuZ2VYICsgNSkgfHxcbiAgICAgICAgICAgICAgICBldi5jbGllbnRYIDwgKHRoaXMuZGVib3VuY2VVcGRhdGUucmFuZ2VYIC0gNSkgfHxcbiAgICAgICAgICAgICAgICBldi5jbGllbnRZID4gKHRoaXMuZGVib3VuY2VVcGRhdGUucmFuZ2VZICsgNSkgfHxcbiAgICAgICAgICAgICAgICBldi5jbGllbnRZIDwgKHRoaXMuZGVib3VuY2VVcGRhdGUucmFuZ2VZIC0gNSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2VVcGRhdGUudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9LCA1KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWJvdW5jZVVwZGF0ZS50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmRlYm91bmNlVXBkYXRlLnJhbmdlWCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy5kZWJvdW5jZVVwZGF0ZS5yYW5nZVkgPSB0aGlzLnk7XG5cbiAgICAgICAgdGhpcy5tZWFzdXJlQXJlYSgpO1xuICAgICAgICB0aGlzLmRyYXcodGhpcy5kZWJvdW5jZVVwZGF0ZS5yYW5nZVgsIHRoaXMuZGVib3VuY2VVcGRhdGUucmFuZ2VZKTtcbiAgICB9XG5cbiAgICBtZWFzdXJlQXJlYSgpIHtcbiAgICAgICAgbGV0IHggPSB0aGlzLng7XG4gICAgICAgIGxldCB5ID0gdGhpcy55O1xuXG4gICAgICAgIHRoaXMubWlkQ29sb3IgPSB0aGlzLmdldENvbG9yQ3Vyc29yUG9pbnQoKTtcbiAgICAgICAgdGhpcy5wYXJzZSh4LCB5LCAndG9wJyk7XG4gICAgICAgIHRoaXMucGFyc2UoeCwgeSwgJ2JvdHRvbScpO1xuICAgICAgICB0aGlzLnBhcnNlKHgsIHksICdsZWZ0Jyk7XG4gICAgICAgIHRoaXMucGFyc2UoeCwgeSwgJ3JpZ2h0Jyk7XG4gICAgfVxuXG4gICAgcGFyc2UoeCwgeSwgdHlwZSwgaSA9IDAsIG1heFN0ZXAgPSA1MDAwKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICB5ID0geS0xO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgICB5ID0geSsxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgeCA9IHgrMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICB4ID0geC0xO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5pbkJvdW5kYXJpZXMoeCwgeSkgPyAoKHkgKiB0aGlzLnNjcmVlbldpZHRoICsgeCkgKiA0KSA6IC0xO1xuXG4gICAgICAgIGlmIChsZW5ndGggPiAtMSkge1xuICAgICAgICAgICAgY29uc3QgUkdCQSA9IHtcbiAgICAgICAgICAgICAgICByOiB0aGlzLmltZ0RhdGFbbGVuZ3RoXSwgZzogdGhpcy5pbWdEYXRhW2xlbmd0aCArIDFdLCBiOiB0aGlzLmltZ0RhdGFbbGVuZ3RoICsgMl0sIGE6IHRoaXMuaW1nRGF0YVtsZW5ndGggKyAzXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGlzU2FtZSA9IChcbiAgICAgICAgICAgICAgICAoUkdCQS5yIDwgdGhpcy5taWRDb2xvci5yICsgdGhpcy5jb2xvckhvbGQgJiYgUkdCQS5yID4gdGhpcy5taWRDb2xvci5yIC0gdGhpcy5jb2xvckhvbGQpICYmXG4gICAgICAgICAgICAgICAgKFJHQkEuZyA8IHRoaXMubWlkQ29sb3IuZyArIHRoaXMuY29sb3JIb2xkICYmIFJHQkEuZyA+IHRoaXMubWlkQ29sb3IuZyAtIHRoaXMuY29sb3JIb2xkKSAmJlxuICAgICAgICAgICAgICAgIChSR0JBLmIgPCB0aGlzLm1pZENvbG9yLmIgKyB0aGlzLmNvbG9ySG9sZCAmJiBSR0JBLmIgPiB0aGlzLm1pZENvbG9yLmIgLSB0aGlzLmNvbG9ySG9sZCkgJiZcbiAgICAgICAgICAgICAgICAoUkdCQS5hIDwgdGhpcy5taWRDb2xvci5hICsgdGhpcy5jb2xvckhvbGQgJiYgUkdCQS5hID4gdGhpcy5taWRDb2xvci5hIC0gdGhpcy5jb2xvckhvbGQpXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChpc1NhbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4U3RlcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlKHgsIHksIHR5cGUsICsraSwgLS1tYXhTdGVwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpc1t0eXBlXSA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzW3R5cGVdID0gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXcoY2xpZW50WCwgY2xpZW50WSkge1xuICAgICAgICBsZXQgeCA9IGNsaWVudFg7XG4gICAgICAgIGxldCB5ID0gY2xpZW50WTtcbiAgICAgICAgY29uc3Qgbm9DdXJzb3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGltZW5zaW9uX19ub2N1cnNvcicpO1xuXG4gICAgICAgIGlmIChjbGllbnRYICsgMTAwID4gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZXMudG9vbHRpcC5jbGFzc0xpc3QuYWRkKCd0cmFuc2xhdGVYJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLnRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNsYXRlWCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsaWVudFkgLSAxMDAgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLnRvb2x0aXAuY2xhc3NMaXN0LmFkZCgndHJhbnNsYXRlWScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLnRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNsYXRlWScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWVhc3VyZUNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29uc3QgZWxlbU92ZXJDdXJzb3IgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpO1xuXG4gICAgICAgICAgICBpZiAoZWxlbU92ZXJDdXJzb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9DdXJzb3JEaXYpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9DdXJzb3JEaXYuY2xhc3NMaXN0LmFkZCgnZGltZW5zaW9uX19ub2N1cnNvcl9oaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wID0gTWF0aC5jZWlsKGVsZW1PdmVyQ3Vyc29yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IE1hdGguY2VpbChlbGVtT3ZlckN1cnNvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KTtcbiAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IE1hdGguY2VpbChlbGVtT3ZlckN1cnNvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5jZWlsKGVsZW1PdmVyQ3Vyc29yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRvcCA9IHRoaXMudG9wKzE7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5sZWZ0KzE7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy5wb2ludC5jbGFzc0xpc3QuYWRkKCdvbicpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMucG9pbnQuc3R5bGUudG9wID0gKHRvcCArIChoZWlnaHQvMikpICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnBvaW50LnN0eWxlLmxlZnQgPSAobGVmdCArICh3aWR0aC8yKSkgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMudG9vbHRpcC5pbm5lckhUTUwgPSBgJHt3aWR0aH0geCAke2hlaWdodH1gO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy55LnN0eWxlLm1hcmdpblRvcCA9IC0oaGVpZ2h0LzIpICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnkuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMueC5zdHlsZS5tYXJnaW5MZWZ0ID0gLSh3aWR0aC8yKSArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy54LnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobm9DdXJzb3JEaXYpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9DdXJzb3JEaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGltZW5zaW9uX19ub2N1cnNvcl9oaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy50b3AgPSB0aGlzLnRvcCsxO1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCsxO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMucG9pbnQuY2xhc3NMaXN0LmFkZCgnb24nKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnBvaW50LnN0eWxlLnRvcCA9IGNsaWVudFkgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMucG9pbnQuc3R5bGUubGVmdCA9IGNsaWVudFggKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMudG9vbHRpcC5pbm5lckhUTUwgPSBgJHt0aGlzLmxlZnQgKyB0aGlzLnJpZ2h0fSB4ICR7dGhpcy50b3AgKyB0aGlzLmJvdHRvbX1gO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ub2Rlcy55LnN0eWxlLm1hcmdpblRvcCA9ICctJyArIHRoaXMudG9wICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnkuc3R5bGUuaGVpZ2h0ID0gdGhpcy50b3AgKyB0aGlzLmJvdHRvbSArICdweCc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzLnguc3R5bGUubWFyZ2luTGVmdCA9ICctJyArIHRoaXMucmlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMueC5zdHlsZS53aWR0aCA9IHRoaXMubGVmdCArIHRoaXMucmlnaHQgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG5vQ3Vyc29yRGl2KSB7XG4gICAgICAgICAgICAgICAgbm9DdXJzb3JEaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGltZW5zaW9uX19ub2N1cnNvcl9oaWRlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudG9wID0gdGhpcy50b3ArMTtcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCsxO1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy5wb2ludC5jbGFzc0xpc3QuYWRkKCdvbicpO1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy5wb2ludC5zdHlsZS50b3AgPSBjbGllbnRZICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMubm9kZXMucG9pbnQuc3R5bGUubGVmdCA9IGNsaWVudFggKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy50b29sdGlwLmlubmVySFRNTCA9IGAke3RoaXMubGVmdCArIHRoaXMucmlnaHR9IHggJHt0aGlzLnRvcCArIHRoaXMuYm90dG9tfWA7XG5cbiAgICAgICAgICAgIHRoaXMubm9kZXMueS5zdHlsZS5tYXJnaW5Ub3AgPSAnLScgKyB0aGlzLnRvcCArICdweCc7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLnkuc3R5bGUuaGVpZ2h0ID0gdGhpcy50b3AgKyB0aGlzLmJvdHRvbSArICdweCc7XG5cbiAgICAgICAgICAgIHRoaXMubm9kZXMueC5zdHlsZS5tYXJnaW5MZWZ0ID0gJy0nICsgdGhpcy5yaWdodCArICdweCc7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLnguc3R5bGUud2lkdGggPSB0aGlzLmxlZnQgKyB0aGlzLnJpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpeFBvc2l0aW9uUmFpbHMoaXNBbGxTZXQgPSBmYWxzZSkgeyAvL1xuICAgICAgICBjb25zdCByZWN0WCA9IHRoaXMubm9kZXMueC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcmVjdFkgPSB0aGlzLm5vZGVzLnkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgaWYgKGlzQWxsU2V0KSB7XG4gICAgICAgICAgICBjb25zdCByYWlsWCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmFpbFguY2xhc3NMaXN0LmFkZCgnanMtcmFpbCcpO1xuICAgICAgICAgICAgcmFpbFguY2xhc3NMaXN0LmFkZCgncmFpbC14Jyk7XG4gICAgICAgICAgICByYWlsWC5zdHlsZS53aWR0aCA9IHRoaXMubm9kZXMueC5zdHlsZS53aWR0aDtcbiAgICAgICAgICAgIHJhaWxYLnN0eWxlLnRvcCA9IHdpbmRvdy5zY3JvbGxZICsgcmVjdFgudG9wICsgJ3B4JztcbiAgICAgICAgICAgIHJhaWxYLnN0eWxlLmxlZnQgPSB3aW5kb3cuc2Nyb2xsWCArIHJlY3RYLmxlZnQgKyAncHgnO1xuICAgICAgICAgICAgcmFpbFgudGl0bGUgPSB0aGlzLm5vZGVzLnguc3R5bGUud2lkdGg7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJhaWxYKTtcblxuICAgICAgICAgICAgY29uc3QgcmFpbFkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJhaWxZLmNsYXNzTGlzdC5hZGQoJ2pzLXJhaWwnKTtcbiAgICAgICAgICAgIHJhaWxZLmNsYXNzTGlzdC5hZGQoJ3JhaWwteScpO1xuICAgICAgICAgICAgcmFpbFkuc3R5bGUuaGVpZ2h0ID0gdGhpcy5ub2Rlcy55LnN0eWxlLmhlaWdodDtcbiAgICAgICAgICAgIHJhaWxZLnN0eWxlLnRvcCA9IHdpbmRvdy5zY3JvbGxZICsgcmVjdFkudG9wICsgJ3B4JztcbiAgICAgICAgICAgIHJhaWxZLnN0eWxlLmxlZnQgPSB3aW5kb3cuc2Nyb2xsWCArIHJlY3RZLmxlZnQgKyAncHgnO1xuICAgICAgICAgICAgcmFpbFkudGl0bGUgPSB0aGlzLm5vZGVzLnkuc3R5bGUuaGVpZ2h0O1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyYWlsWSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJhaWwuY2xhc3NMaXN0LmFkZCgnanMtcmFpbCcpO1xuXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5ub2Rlcy54LnN0eWxlLndpZHRoKSA8IHBhcnNlSW50KHRoaXMubm9kZXMueS5zdHlsZS5oZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgcmFpbC5jbGFzc0xpc3QuYWRkKCdyYWlsLXgnKTtcbiAgICAgICAgICAgICAgICByYWlsLnN0eWxlLndpZHRoID0gdGhpcy5ub2Rlcy54LnN0eWxlLndpZHRoO1xuICAgICAgICAgICAgICAgIHJhaWwuc3R5bGUudG9wID0gd2luZG93LnNjcm9sbFkgKyByZWN0WC50b3AgKyAncHgnO1xuICAgICAgICAgICAgICAgIHJhaWwuc3R5bGUubGVmdCA9IHdpbmRvdy5zY3JvbGxYICsgcmVjdFgubGVmdCArICdweCc7XG4gICAgICAgICAgICAgICAgcmFpbC50aXRsZSA9IHRoaXMubm9kZXMueC5zdHlsZS53aWR0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmFpbC5jbGFzc0xpc3QuYWRkKCdyYWlsLXknKTtcbiAgICAgICAgICAgICAgICByYWlsLnN0eWxlLmhlaWdodCA9IHRoaXMubm9kZXMueS5zdHlsZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgcmFpbC5zdHlsZS50b3AgPSB3aW5kb3cuc2Nyb2xsWSArIHJlY3RZLnRvcCArICdweCc7XG4gICAgICAgICAgICAgICAgcmFpbC5zdHlsZS5sZWZ0ID0gd2luZG93LnNjcm9sbFggKyByZWN0WS5sZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICByYWlsLnRpdGxlID0gdGhpcy5ub2Rlcy55LnN0eWxlLmhlaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyYWlsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyUmFpbHMoKSB7XG4gICAgICAgIGNvbnN0IHJhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXJhaWwnKTtcblxuICAgICAgICBpZiAocmFpbHMpIHtcbiAgICAgICAgICAgIHJhaWxzLmZvckVhY2gocmFpbCA9PiB7XG4gICAgICAgICAgICAgICAgcmFpbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1dpbmRvd1dIKCkge1xuICAgICAgICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBkaXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnanMtd2luZG93LXdoJyk7XG4gICAgICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3aW5kb3ctd2gnKTtcbiAgICAgICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dpbmRvdy13aF9zaG93Jyk7XG4gICAgICAgIGRpdkNvbnRhaW5lci5pbm5lckhUTUwgPSB3aW5kb3cuaW5uZXJXaWR0aCArICd4JyArIHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdkNvbnRhaW5lcik7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGl2Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3dpbmRvdy13aF9zaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDgwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRpdkNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGRpdkNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgc2hvd0RvY3VtZW50V0goKSB7XG4gICAgICAgIGNvbnN0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heChib2R5LnNjcm9sbFdpZHRoLCBib2R5Lm9mZnNldFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBodG1sLnNjcm9sbFdpZHRoLFxuICAgICAgICAgICAgaHRtbC5vZmZzZXRXaWR0aCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KGJvZHkuc2Nyb2xsSGVpZ2h0LCBib2R5Lm9mZnNldEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGh0bWwuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgaHRtbC5vZmZzZXRIZWlnaHQpO1xuICAgICAgICBjb25zdCB3aW5kb3dXSHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtd2luZG93LXdoJyk7XG5cbiAgICAgICAgaWYgKHdpbmRvd1dIcykge1xuICAgICAgICAgICAgd2luZG93V0hzLmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgICAgICAgICBkaXYucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2pzLXdpbmRvdy13aCcpO1xuICAgICAgICBkaXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2luZG93LXdoJyk7XG4gICAgICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3aW5kb3ctd2hfc2hvdycpO1xuICAgICAgICBkaXZDb250YWluZXIuaW5uZXJIVE1MID0gd2lkdGggKyAneCcgKyBoZWlnaHQ7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXZDb250YWluZXIpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3dpbmRvdy13aF9zaG93Jyk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRpdkNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfSwgMTIwMCk7XG4gICAgfVxuXG4gICAgaGlkZVdIcygpIHtcbiAgICAgICAgY29uc3Qgd2luZG93V0hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXdpbmRvdy13aCcpO1xuXG4gICAgICAgIGlmICh3aW5kb3dXSHMpIHtcbiAgICAgICAgICAgIHdpbmRvd1dIcy5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgICAgICAgICAgZGl2LnJlbW92ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlU2NyZWVuc2hvdChwbmcsIGhvbGQpIHtcbiAgICAgICAgdGhpcy5jb2xvckhvbGQgPSBob2xkO1xuICAgICAgICB0aGlzLmltYWdlLm9ubG9hZCA9IHRoaXMubG9hZEltYWdlKHRoaXMuc2NyZWVuc2hvdFByb2Nlc3NlZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBwbmc7XG4gICAgfVxuXG4gICAgaW5Cb3VuZGFyaWVzKHgsIHkpe1xuICAgICAgICByZXR1cm4gKHggPj0gMCAmJiB4IDwgdGhpcy5zY3JlZW5XaWR0aCAmJiB5ID49IDAgJiYgeSA8IHRoaXMuc2NyZWVuSGVpZ2h0KTtcbiAgICB9XG5cbiAgICBnZXRMaWdodG5lc3NBdCgpIHsgLy8g0L/QvtC70YPRh9Cw0LXRgiDQv9C+0LfQuNGG0LjRjiDQutGD0YDRgdC+0YDQsCDQsiDQvNCw0YHRgdC40LLQtVxuICAgICAgICByZXR1cm4gdGhpcy5pbkJvdW5kYXJpZXModGhpcy54LCB0aGlzLnkpID8odGhpcy55ICogdGhpcy5zY3JlZW5XaWR0aCArIHRoaXMueCkgOiAtMTtcbiAgICB9XG5cbiAgICBzY3JlZW5zaG90UHJvY2Vzc2VkKGRhdGEpIHsgLy8g0L/QvtC70YPRh9Cw0LXRgiDRgdCy0L7QudGB0YLQstCwINGB0LrRgNC40L3RiNC+0YLQsCDQuCDQstGL0LfRi9Cy0LDQtdGCINC80LXRgtC+0LTRiyDQstGL0YfQuNGB0LvQtdC90LjRj1xuICAgICAgICB0aGlzLmltZ0RhdGEgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoZGF0YS5pbWdEYXRhKTtcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aCA9IGRhdGEud2lkdGg7XG4gICAgICAgIHRoaXMuc2NyZWVuSGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0Q29sb3JDdXJzb3JQb2ludCgpIHsgLy8g0L/QvtC70YPRh9Cw0LXRgiDRhtCy0LXRgiDQv9C40LrRgdC10LvRjyDQv9C+0LQg0LrRg9GA0YHQvtGA0L7QvFxuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExpZ2h0bmVzc0F0KCkgKiA0O1xuICAgICAgICBjb25zdCBSR0JBID0ge1xuICAgICAgICAgICAgcjogdGhpcy5pbWdEYXRhW2xlbmd0aF0sIGc6IHRoaXMuaW1nRGF0YVtsZW5ndGggKyAxXSwgYjogdGhpcy5pbWdEYXRhW2xlbmd0aCArIDJdLCBhOiB0aGlzLmltZ0RhdGFbbGVuZ3RoICsgM11cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gUkdCQTtcbiAgICB9XG5cbiAgICBsb2FkSW1hZ2UoZm4pIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggJiYgd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgaW1nRGF0YSA9IHRoaXMuY3R4LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KS5kYXRhO1xuXG4gICAgICAgICAgICAgICAgZm4oe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW1nRGF0YScsXG4gICAgICAgICAgICAgICAgICAgIGltZ0RhdGE6IGltZ0RhdGEuYnVmZmVyLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5jYW52YXMud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5jYW52YXMuaGVpZ2h0XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZVJ1bGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy5yZXNpemVTaWRlID0gJyc7XG4gICAgICAgIHRoaXMucmVjdCA9IHt9O1xuICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b29sdGlwU2l6ZU5vZGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b29sdGlwUG9zTm9kZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1vdXNlWCA9IDA7XG4gICAgICAgIHRoaXMubW91c2VZID0gMDtcblxuICAgICAgICB0aGlzLmJpbmQoKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoaXNBdXRvU2V0KSB7XG4gICAgICAgIGNvbnN0IHJ1bGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1yZWN0YW5nbGUtcnVsZXInKTtcbiAgICAgICAgbGV0IHRvcCA9IDEwMDtcbiAgICAgICAgbGV0IGxlZnQgPSAxMDA7XG4gICAgICAgIGxldCB3aWR0aCA9IDIwMDtcbiAgICAgICAgbGV0IGhlaWdodCA9IDEwMDtcblxuICAgICAgICBpZiAoaXNBdXRvU2V0KSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtT3ZlckN1cnNvciA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQodGhpcy5tb3VzZVgsIHRoaXMubW91c2VZKTtcblxuICAgICAgICAgICAgaWYgKGVsZW1PdmVyQ3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgdG9wID0gd2luZG93LnNjcm9sbFkgKyBlbGVtT3ZlckN1cnNvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgICAgICAgICAgbGVmdCA9IHdpbmRvdy5zY3JvbGxYICsgZWxlbU92ZXJDdXJzb3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IGVsZW1PdmVyQ3Vyc29yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICAgICAgICAgIGhlaWdodCA9IGVsZW1PdmVyQ3Vyc29yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChydWxlcnMpIHtcbiAgICAgICAgICAgIHRvcCA9IDEwMCArIChydWxlcnMubGVuZ3RoICogMTApO1xuICAgICAgICAgICAgbGVmdCA9IDEwMCArIChydWxlcnMubGVuZ3RoICogMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9wID0gTWF0aC5jZWlsKHRvcCk7XG4gICAgICAgIGxlZnQgPSBNYXRoLmNlaWwobGVmdCk7XG4gICAgICAgIHdpZHRoID0gTWF0aC5jZWlsKHdpZHRoKTtcbiAgICAgICAgaGVpZ2h0ID0gTWF0aC5jZWlsKGhlaWdodCk7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdqcy1yZWN0YW5nbGUtcnVsZXInKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JlY3RhbmdsZS1ydWxlcicpO1xuXG4gICAgICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwianMtcmVjdGFuZ2xlIHJlY3RhbmdsZS1ydWxlcl9fcmVjdGFuZ2xlIHVpLXJlc2l6YWJsZVwiIGRhdGEtYWN0aW9uPVwibW92ZVwiIHN0eWxlPVwiJHtcbiAgICAgICAgICAgICAgICAndG9wOicgKyB0b3AgKyAncHg7J1xuICAgICAgICAgICAgICAgICsgJ2xlZnQ6JyArIGxlZnQgKyAncHg7J1xuICAgICAgICAgICAgICAgICsgJ3dpZHRoOicgKyB3aWR0aCArICdweDsnXG4gICAgICAgICAgICAgICAgKyAnaGVpZ2h0OicgKyBoZWlnaHQgKyAncHg7J1xuICAgICAgICAgICAgfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0YW5nbGUtcnVsZXJfX25hdlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwianMtcmVjdGFuZ2xlLWNsb3NlIHJlY3RhbmdsZS1jbG9zZVwiIGRhdGEtYWN0aW9uPVwiY2xvc2VcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImpzLXJlY3RhbmdsZS1waW4gcmVjdGFuZ2xlLXBpblwiIGRhdGEtYWN0aW9uPVwicGluXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3RhbmdsZS1ydWxlcl9fdG9vbHRpcFwiIGRhdGEtYWN0aW9uPVwibW92ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwianMtcmVjdGFuZ2xlLXRvb2x0aXAtc2l6ZSByZWN0YW5nbGUtdG9vbHRpcF9fc2l6ZSB0b29sdGlwX19ib3R0b20gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA+IDEyMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGhlaWdodCA+IDUwXG4gICAgICAgICAgICAgICAgICAgICAgICApID8gJ3JlY3RhbmdsZS10b29sdGlwX2NlbnRlcicgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XCIgZGF0YS1hY3Rpb249XCJtb3ZlXCI+JHt3aWR0aH14JHtoZWlnaHR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqcy1yZWN0YW5nbGUtdG9vbHRpcC1wb3MgcmVjdGFuZ2xlLXRvb2x0aXBfX3BvcyB0b29sdGlwX19ib3R0b20gaGlkZVwiIGRhdGEtYWN0aW9uPVwibW92ZVwiPiR7dG9wfXgke2xlZnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLXJlc2l6YWJsZS1uXCIgZGF0YS1hY3Rpb249XCJyZXNpemVcIiBkYXRhLXJlc2l6ZT1cIm5cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktcmVzaXphYmxlLXdcIiBkYXRhLWFjdGlvbj1cInJlc2l6ZVwiIGRhdGEtcmVzaXplPVwid1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1yZXNpemFibGUtc1wiIGRhdGEtYWN0aW9uPVwicmVzaXplXCIgZGF0YS1yZXNpemU9XCJzXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLXJlc2l6YWJsZS1lXCIgZGF0YS1hY3Rpb249XCJyZXNpemVcIiBkYXRhLXJlc2l6ZT1cImVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktcmVzaXphYmxlLXNlXCIgZGF0YS1hY3Rpb249XCJyZXNpemVcIiBkYXRhLXJlc2l6ZT1cInNlXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0YW5nbGUtcnVsZXJfX25vLWN1cnNvclwiPjwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgaWYgKGlzQXV0b1NldCkge1xuICAgICAgICAgICAgY29uc3QgcGluID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWN0YW5nbGUtcGluJyk7XG5cbiAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gJ3Bpbic7XG4gICAgICAgICAgICB0aGlzLnJ1bGVyTm9kZSA9IGNvbnRhaW5lcjtcbiAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZSA9IHRoaXMucnVsZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWN0YW5nbGUnKTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlck1vdXNlRXZlbnQocGluLCAnbW91c2V1cCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UnVsZXIodGFyZ2V0LCBzZWxlY3Rvcikge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcnVsZXIgPSB0YXJnZXQuY2xvc2VzdCgnLmpzLXJlY3RhbmdsZS1ydWxlcicpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3IgPT09ICdqcy1yZWN0YW5nbGUtcnVsZXInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGVyO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChydWxlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICBydWxlci5xdWVyeVNlbGVjdG9yKCcuJyArIHNlbGVjdG9yKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5tb3VzZVVwLmJpbmQodGhpcykpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcykpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24uYmluZCh0aGlzKSlcbiAgICB9XG5cbiAgICB0cmlnZ2VyTW91c2VFdmVudChub2RlLCBldmVudFR5cGUpIHtcbiAgICAgICAgbGV0IGNsaWNrRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudHMnKTtcbiAgICAgICAgY2xpY2tFdmVudC5pbml0RXZlbnQoZXZlbnRUeXBlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgbm9kZS5kaXNwYXRjaEV2ZW50KGNsaWNrRXZlbnQpO1xuICAgIH1cblxuICAgIG1vdXNlRG93bihldikge1xuICAgICAgICB0aGlzLnJ1bGVyTm9kZSA9IHRoaXMuZ2V0UnVsZXIoZXYudGFyZ2V0LCAnanMtcmVjdGFuZ2xlLXJ1bGVyJyk7XG5cbiAgICAgICAgaWYgKHRoaXMucnVsZXJOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUgPSB0aGlzLnJ1bGVyTm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtcmVjdGFuZ2xlJyk7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBTaXplTm9kZSA9IHRoaXMucnVsZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWN0YW5nbGUtdG9vbHRpcC1zaXplJyk7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBQb3NOb2RlID0gdGhpcy5ydWxlck5vZGUucXVlcnlTZWxlY3RvcignLmpzLXJlY3RhbmdsZS10b29sdGlwLXBvcycpO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBldi50YXJnZXQuZGF0YXNldD8uYWN0aW9uO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gJiYgdGhpcy5yZWN0YW5nbGVOb2RlICYmIHRoaXMudG9vbHRpcFNpemVOb2RlICYmIHRoaXMudG9vbHRpcFBvc05vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT09ICdyZXNpemUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc2l6ZSA9IGV2LnRhcmdldC5kYXRhc2V0Py5yZXNpemU7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRMZWZ0OiB0aGlzLnJlY3RhbmdsZU5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWN0YW5nbGUtcnVsZXJfX3JlY3RhbmdsZV9maXgnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gd2luZG93LnNjcm9sbFggKyB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFRvcDogdGhpcy5yZWN0YW5nbGVOb2RlLmNsYXNzTGlzdC5jb250YWlucygncmVjdGFuZ2xlLXJ1bGVyX19yZWN0YW5nbGVfZml4JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHdpbmRvdy5zY3JvbGxZICsgdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0WDogd2luZG93LnNjcm9sbFggKyAoZXYuY2xpZW50WCAtIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0WTogd2luZG93LnNjcm9sbFkgKyAoZXYuY2xpZW50WSAtIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRYOiBldi5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRZOiBldi5jbGllbnRZLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRXaWR0aDogdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRIZWlnaHQ6IHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzaXplU2lkZSA9IHJlc2l6ZSA/IHJlc2l6ZSA6ICcnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpb24gPT09ICdtb3ZlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydExlZnQ6IHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRUb3A6IHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdFg6IHRoaXMucmVjdGFuZ2xlTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ3JlY3RhbmdsZS1ydWxlcl9fcmVjdGFuZ2xlX2ZpeCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoZXYuY2xpZW50WCAtIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogd2luZG93LnNjcm9sbFggKyAoZXYuY2xpZW50WCAtIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0WTogdGhpcy5yZWN0YW5nbGVOb2RlLmNsYXNzTGlzdC5jb250YWlucygncmVjdGFuZ2xlLXJ1bGVyX19yZWN0YW5nbGVfZml4JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChldi5jbGllbnRZIC0gdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHdpbmRvdy5zY3JvbGxZICsgKGV2LmNsaWVudFkgLSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0WDogZXYuY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0WTogZXYuY2xpZW50WSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0V2lkdGg6IHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0SGVpZ2h0OiB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2UodGhpcy5zaG93UG9zLmJpbmQodGhpcyksIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50b29sdGlwU2l6ZU5vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcFBvc05vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gJyc7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZVNpZGUgPSAnJztcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0WSA9IDA7XG4gICAgICAgICAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW91c2VVcChldikge1xuICAgICAgICBpZiAodGhpcy5hY3Rpb24gJiYgdGhpcy5ydWxlck5vZGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ2Nsb3NlJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJ1bGVyTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bGVyTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aW9uID09PSAncGluJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ0biA9IHRoaXMucmVjdGFuZ2xlTm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtcmVjdGFuZ2xlLXBpbicpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGJ0bikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSB3aW5kb3cuc2Nyb2xsWSArIChldi5jbGllbnRZIC0gdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gd2luZG93LnNjcm9sbFggKyAoZXYuY2xpZW50WCAtIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS50b3AgPSAoZXYucGFnZVkgLSB5KSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUubGVmdCA9IChldi5wYWdlWCAtIHgpICsgJ3B4JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3JlY3RhbmdsZS1ydWxlcl9fcmVjdGFuZ2xlX2ZpeCcpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IChldi5jbGllbnRZIC0gdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gKGV2LmNsaWVudFggLSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUudG9wID0gKGV2LnBhZ2VZIC0geSkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLmxlZnQgPSAoZXYucGFnZVggLSB4KSArICdweCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5jbGFzc0xpc3QuYWRkKCdyZWN0YW5nbGUtcnVsZXJfX3JlY3RhbmdsZV9maXgnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb29sdGlwKHRoaXMucmVjdGFuZ2xlTm9kZSwgdGhpcy50b29sdGlwU2l6ZU5vZGUsIHRoaXMudG9vbHRpcFBvc05vZGUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kZWJvdW5jZSh0aGlzLmhpZGVQb3MuYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnJlc2l6ZVNpZGUgPSAnJztcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gMDtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gMDtcbiAgICB9XG5cbiAgICBzaG93UG9zKCkge1xuICAgICAgICB0aGlzLnRvb2x0aXBQb3NOb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgdGhpcy50b29sdGlwU2l6ZU5vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cblxuICAgIGhpZGVQb3MoKSB7XG4gICAgICAgIHRoaXMudG9vbHRpcFBvc05vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB0aGlzLnRvb2x0aXBTaXplTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgbW91c2VNb3ZlKGV2KSB7XG4gICAgICAgIHRoaXMubW91c2VYID0gZXYuY2xpZW50WDtcbiAgICAgICAgdGhpcy5tb3VzZVkgPSBldi5jbGllbnRZO1xuXG4gICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ21vdmUnKSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUudG9wID0gKGV2LnBhZ2VZIC0gdGhpcy5yZWN0LnNoaWZ0WSkgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLmxlZnQgPSAoZXYucGFnZVggLSB0aGlzLnJlY3Quc2hpZnRYKSArICdweCc7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9vbHRpcCh0aGlzLnJlY3RhbmdsZU5vZGUsIHRoaXMudG9vbHRpcFNpemVOb2RlLCB0aGlzLnRvb2x0aXBQb3NOb2RlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGlvbiA9PT0gJ3Jlc2l6ZScpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggPiAxMjBcbiAgICAgICAgICAgICAgICAmJiB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ID4gNTBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9vbHRpcFNpemVOb2RlLmNsYXNzTGlzdC5hZGQoJ3JlY3RhbmdsZS10b29sdGlwX2NlbnRlcicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvb2x0aXBTaXplTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdyZWN0YW5nbGUtdG9vbHRpcF9jZW50ZXInKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5yZXNpemVTaWRlID09PSAnc2UnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLndpZHRoID0gKHRoaXMucmVjdC5zaGlmdFdpZHRoICsgZXYuY2xpZW50WCAtIHRoaXMucmVjdC5zdGFydFgpICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUuaGVpZ2h0ID0gKHRoaXMucmVjdC5zaGlmdEhlaWdodCArIGV2LmNsaWVudFkgLSB0aGlzLnJlY3Quc3RhcnRZKSArICdweCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzaXplU2lkZSA9PT0gJ2UnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLndpZHRoID0gKHRoaXMucmVjdC5zaGlmdFdpZHRoICsgZXYuY2xpZW50WCAtIHRoaXMucmVjdC5zdGFydFgpICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNpemVTaWRlID09PSAncycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUuaGVpZ2h0ID0gKHRoaXMucmVjdC5zaGlmdEhlaWdodCArIGV2LmNsaWVudFkgLSB0aGlzLnJlY3Quc3RhcnRZKSArICdweCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzaXplU2lkZSA9PT0gJ3cnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TGVmdCA9IChldi5wYWdlWCAtIHRoaXMucmVjdC5zaGlmdFgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLmxlZnQgPSBuZXdMZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUud2lkdGggPSAodGhpcy5yZWN0LnNoaWZ0V2lkdGggKyAodGhpcy5yZWN0LnN0YXJ0TGVmdCAtIG5ld0xlZnQpKSArICdweCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzaXplU2lkZSA9PT0gJ24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VG9wID0gKHRoaXMucmVjdGFuZ2xlTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ3JlY3RhbmdsZS1ydWxlcl9fcmVjdGFuZ2xlX2ZpeCcpKVxuICAgICAgICAgICAgICAgICAgICA/IHdpbmRvdy5zY3JvbGxZICsgKGV2LnBhZ2VZIC0gdGhpcy5yZWN0LnNoaWZ0WSlcbiAgICAgICAgICAgICAgICAgICAgOiAoZXYucGFnZVkgLSB0aGlzLnJlY3Quc2hpZnRZKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS50b3AgPSBuZXdUb3AgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS5oZWlnaHQgPSAodGhpcy5yZWN0LnNoaWZ0SGVpZ2h0ICsgKHRoaXMucmVjdC5zdGFydFRvcCAtIG5ld1RvcCkpICsgJ3B4JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy51cGRhdGVUb29sdGlwKHRoaXMucmVjdGFuZ2xlTm9kZSwgdGhpcy50b29sdGlwU2l6ZU5vZGUsIHRoaXMudG9vbHRpcFBvc05vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAga2V5RG93bihldikge1xuICAgICAgICBpZiAodGhpcy5yZWN0YW5nbGVOb2RlKSB7XG4gICAgICAgICAgICBpZiAoZXYua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS50b3AgPSArdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLnRvcFxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgncHgnLCAnJykgLSAxICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvb2x0aXAodGhpcy5yZWN0YW5nbGVOb2RlLCB0aGlzLnRvb2x0aXBTaXplTm9kZSwgdGhpcy50b29sdGlwUG9zTm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWJvdW5jZSh0aGlzLmhpZGVQb3MuYmluZCh0aGlzKSwgNTAwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXYua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLnRvcCA9ICt0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUudG9wXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSArIDEgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcygpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9vbHRpcCh0aGlzLnJlY3RhbmdsZU5vZGUsIHRoaXMudG9vbHRpcFNpemVOb2RlLCB0aGlzLnRvb2x0aXBQb3NOb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlKHRoaXMuaGlkZVBvcy5iaW5kKHRoaXMpLCA1MDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldi5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUubGVmdCA9ICt0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUubGVmdFxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgncHgnLCAnJykgLSAxICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvb2x0aXAodGhpcy5yZWN0YW5nbGVOb2RlLCB0aGlzLnRvb2x0aXBTaXplTm9kZSwgdGhpcy50b29sdGlwUG9zTm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWJvdW5jZSh0aGlzLmhpZGVQb3MuYmluZCh0aGlzKSwgNTAwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXYua2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS5sZWZ0ID0gK3RoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS5sZWZ0XG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSArIDEgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcygpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9vbHRpcCh0aGlzLnJlY3RhbmdsZU5vZGUsIHRoaXMudG9vbHRpcFNpemVOb2RlLCB0aGlzLnRvb2x0aXBQb3NOb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlKHRoaXMuaGlkZVBvcy5iaW5kKHRoaXMpLCA1MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlVG9vbHRpcChyZWN0YW5nbGUsIHRvb2x0aXBTaXplLCB0b29sdGlwUG9zKSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgdG9vbHRpcFNpemUuaW5uZXJIVE1MID0gcmVjdC53aWR0aCArICd4JyArIHJlY3QuaGVpZ2h0O1xuXG4gICAgICAgIGlmICh0aGlzLnJlY3RhbmdsZU5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWN0YW5nbGUtcnVsZXJfX3JlY3RhbmdsZV9maXgnKSkge1xuICAgICAgICAgICAgdG9vbHRpcFBvcy5pbm5lckhUTUwgPSByZWN0YW5nbGUub2Zmc2V0TGVmdCArICd4JyArIHJlY3RhbmdsZS5vZmZzZXRUb3A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b29sdGlwUG9zLmlubmVySFRNTCA9IHJlY3QubGVmdCArICd4JyArIHJlY3QudG9wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVib3VuY2UoZnVuYywgZGVsYXkpIHtcbiAgICAgICAgaWYgKHRoaXMuZGViSWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlYklkKTtcbiAgICAgICAgICAgIHRoaXMuZGViSWQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZWJJZCA9IHNldFRpbWVvdXQoZnVuYywgZGVsYXkpO1xuICAgIH1cbn0iLCJpbXBvcnQgRGltZW5zaW9uIGZyb20gJy4vY2xhc3Nlcy9EaW1lbnNpb24nO1xuaW1wb3J0IFJlY3RhbmdsZVJ1bGVyIGZyb20gXCIuL2NsYXNzZXMvUmVjdGFuZ2xlUnVsZXJcIjtcblxuY29uc3QgZGltZW5zaW9uID0gbmV3IERpbWVuc2lvbigpO1xuY29uc3QgcmVjdGFuZ2xlUnVsZXIgPSBuZXcgUmVjdGFuZ2xlUnVsZXIoKTtcblxubGV0IHNldEtleXMgPSBbXTtcbmxldCBhY3RpdmUgPSAnJztcbmNvbnN0IHF1aWNrS2V5cyA9IHtcbiAgICAnQWx0TGVmdCArIEtleVonOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGtleSA9ICdkaW1lbnNpb25zJztcblxuICAgICAgICBpZiAoYWN0aXZlID09PSBrZXkpIHtcbiAgICAgICAgICAgIGFjdGl2ZSA9ICcnO1xuICAgICAgICAgICAgZGltZW5zaW9uLnN0b3AoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3RpdmUgPT09ICcnKSB7XG4gICAgICAgICAgICBhY3RpdmUgPSBrZXk7XG4gICAgICAgICAgICBkaW1lbnNpb24uaGlkZVdIcygpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgICdBbHRMZWZ0ICsgS2V5WCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVjdGFuZ2xlUnVsZXIuY3JlYXRlKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgICdBbHRMZWZ0ICsgS2V5Qyc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGltZW5zaW9uLmNsZWFyUmFpbHMoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgJ0FsdExlZnQgKyBLZXlEJzogZnVuY3Rpb24gKCkge1xuICAgICAgICBkaW1lbnNpb24uZml4UG9zaXRpb25SYWlscyh0cnVlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgJ0FsdExlZnQgKyBLZXlTJzogZnVuY3Rpb24gKCkge1xuICAgICAgICBkaW1lbnNpb24uZml4UG9zaXRpb25SYWlscygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICAnQWx0TGVmdCArIFNoaWZ0TGVmdCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGFjdGl2ZSA9PT0gJ2RpbWVuc2lvbnMnKSB7XG4gICAgICAgICAgICBkaW1lbnNpb24ubWVhc3VyZUNvbnRhaW5lciA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlID09PSAnJykge1xuICAgICAgICAgICAgZGltZW5zaW9uLnNob3dEb2N1bWVudFdIKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICAnQWx0TGVmdCArIFNoaWZ0TGVmdCArIEtleVgnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChhY3RpdmUgPT09ICcnKSB7XG4gICAgICAgICAgICByZWN0YW5nbGVSdWxlci5jcmVhdGUodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICAnQWx0TGVmdCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGFjdGl2ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGRpbWVuc2lvbi5zaG93V2luZG93V0goKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbn07XG5jb25zdCBhY3Rpb25zID0ge1xuICAgICd0YWtlU2NyZWVuc2hvdCc6IGZ1bmN0aW9uIChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICBkaW1lbnNpb24ucGFyc2VTY3JlZW5zaG90KHJlcXVlc3Quc2NyZWVuUG5nLCByZXF1ZXN0LmhvbGQpO1xuICAgIH0sXG59XG5cbi8vIHJlY2VpdmVXb3JrZXJNZXNzYWdlXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICBpZiAocmVxdWVzdC5hY3Rpb24gJiYgdHlwZW9mIGFjdGlvbnNbIHJlcXVlc3QuYWN0aW9uIF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYWN0aW9uc1sgcmVxdWVzdC5hY3Rpb24gXShyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXYpID0+IHtcbiAgICBzZXRLZXlzLnB1c2goZXYuY29kZSk7XG5cbiAgICBpZiAoc2V0S2V5cy5sZW5ndGggPj0gMSAmJiB0eXBlb2YgcXVpY2tLZXlzWyBzZXRLZXlzLmpvaW4oJyArICcpIF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKHF1aWNrS2V5c1sgc2V0S2V5cy5qb2luKCcgKyAnKSBdKCkpIHtcbiAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtvcHRpb25BY3RpdmF0ZTogYWN0aXZlfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2KSA9PiB7XG4gICAgc2V0S2V5cyA9IFtdO1xuICAgIGRpbWVuc2lvbi5tZWFzdXJlQ29udGFpbmVyID0gZmFsc2U7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldikgPT4ge1xuICAgIGRpbWVuc2lvbi5oYW5kbGVNb3VzZU1vdmUoZXYpO1xufSk7XG5cbmxldCBzY3JvbGxTY3JlZW5EZWJvdW5jZSA9IDA7XG5sZXQgc2Nyb2xsU2NyZWVuUHJvY2VzcyA9IGZhbHNlO1xuXG5bJ3Njcm9sbCcsICdtb3VzZXdoZWVsJ10uZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIobGlzdGVuZXIsIChldikgPT4ge1xuICAgICAgICBpZiAobGlzdGVuZXIgPT09ICdtb3VzZXdoZWVsJykge1xuICAgICAgICAgICAgaGFuZGxlU2NyZWVuQ2hhbmdlKDgwMCwgMTAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciA9PT0gJ3Njcm9sbCcpIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZVNjcmVlbkNoYW5nZSgxMDAsIDUwKTtcbiAgICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbn0pO1xuXG5mdW5jdGlvbiBoYW5kbGVTY3JlZW5DaGFuZ2UodGltZW91dERlYiwgdGltZW91dFNjcmVlbikge1xuICAgIGlmIChhY3RpdmUgPT09ICdkaW1lbnNpb25zJyAmJiBzY3JvbGxTY3JlZW5Qcm9jZXNzID09PSBmYWxzZSkge1xuICAgICAgICBzY3JvbGxTY3JlZW5Qcm9jZXNzID0gdHJ1ZTtcblxuICAgICAgICBpZiAoc2Nyb2xsU2NyZWVuRGVib3VuY2UpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChzY3JvbGxTY3JlZW5EZWJvdW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzY3JvbGxTY3JlZW5EZWJvdW5jZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcXVpY2tLZXlzWydBbHRMZWZ0ICsgS2V5WiddKCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChxdWlja0tleXNbJ0FsdExlZnQgKyBLZXlaJ10oKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2Nyb2xsU2NyZWVuRGVib3VuY2UgLSAyJywgYWN0aXZlKVxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7b3B0aW9uQWN0aXZhdGU6IGFjdGl2ZX0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFNjcmVlblByb2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aW1lb3V0U2NyZWVuKVxuICAgICAgICB9LCB0aW1lb3V0RGViKTtcbiAgICB9XG59IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9