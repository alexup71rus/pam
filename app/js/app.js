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



var Dimension = /*#__PURE__*/function () {
  function Dimension() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Dimension);

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
      this.drawLines();
    }
  }, {
    key: "drawLines",
    value: function drawLines() {//
    }
  }, {
    key: "fixPositionRails",
    value: function fixPositionRails() {
      //
      var rectX = this.nodes.x.getBoundingClientRect();
      var rectY = this.nodes.y.getBoundingClientRect();
      var rail = document.createElement('div');
      rail.classList.add('js-rail');
      console.log(this.nodes.y, this.nodes.y.style.width, this.nodes.y.style.height);

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
    this.bind();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RectangleRuler, [{
    key: "create",
    value: function create() {
      var html = "\n        <div class=\"js-rectangle-ruler rectangle-ruler\" style=\"\">\n            <div class=\"js-rectangle rectangle-ruler__rectangle ui-resizable\" data-action=\"move\">\n                <div class=\"rectangle-ruler__nav\">\n                    <div class=\"js-rectangle-close rectangle-close\" data-action=\"close\"></div>\n                    <div class=\"js-rectangle-pin rectangle-pin\" data-action=\"pin\"></div>\n                </div>\n                <div class=\"rectangle-ruler__tooltip\" data-action=\"move\">\n                    <div class=\"js-rectangle-tooltip-size rectangle-tooltip__size tooltip__bottom\" data-action=\"move\">500x300</div>\n                    <div class=\"js-rectangle-tooltip-pos rectangle-tooltip__pos tooltip__bottom hide\" data-action=\"move\">500x300</div>\n                </div>\n                <div class=\"ui-resizable-n\" data-action=\"resize\" data-resize=\"n\"></div>\n                <div class=\"ui-resizable-w\" data-action=\"resize\" data-resize=\"w\"></div>\n                <div class=\"ui-resizable-s\" data-action=\"resize\" data-resize=\"s\"></div>\n                <div class=\"ui-resizable-e\" data-action=\"resize\" data-resize=\"e\"></div>\n                <div class=\"ui-resizable-se\" data-action=\"resize\" data-resize=\"se\"></div>\n            </div>\n            <div class=\"rectangle-ruler__no-cursor\"></div>\n        </div>\n        ";
      document.body.insertAdjacentHTML('beforeend', html);
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
      if (this.action === 'move') {
        var rect = this.rectangleNode.getBoundingClientRect();
        this.rectangleNode.style.top = ev.pageY - this.rect.shiftY + 'px';
        this.rectangleNode.style.left = ev.pageX - this.rect.shiftX + 'px';
        this.updateTooltip(this.rectangleNode, this.tooltipSizeNode, this.tooltipPosNode);
      } else if (this.action === 'resize') {
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
          console.log(window.scrollY, newTop);
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
      return true;
    }
  },
  'AltLeft + KeyX': function AltLeftKeyX() {
    rectangleRuler.create();
    return false;
  },
  'AltLeft + KeyC': function AltLeftKeyC() {
    // rectangleRuler.create();
    return false;
  },
  'AltLeft + KeyS': function AltLeftKeyS() {
    dimension.fixPositionRails();
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

  if (setKeys.length === 2 && typeof quickKeys[setKeys.join(' + ')] === 'function') {
    if (quickKeys[setKeys.join(' + ')]()) {
      chrome.runtime.sendMessage({
        optionActivate: active
      });
    }
  }
});
window.addEventListener('keyup', function (ev) {
  setKeys = [];
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
      console.log('scrollScreenDebounce', active);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9EaW1lbnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9SZWN0YW5nbGVSdWxlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL21haW4uc2Nzcz80MzVlIl0sIm5hbWVzIjpbIkRpbWVuc2lvbiIsImltYWdlIiwiSW1hZ2UiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb2xvckhvbGQiLCJpbWdEYXRhIiwieCIsInkiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJzY3JlZW5XaWR0aCIsInNjcmVlbkhlaWdodCIsImRlYm91bmNlVXBkYXRlIiwidGltZXIiLCJyYW5nZVgiLCJyYW5nZVkiLCJtaWRDb2xvciIsInIiLCJnIiwiYiIsImEiLCJjcmVhdGUiLCJodG1sIiwiYm9keSIsImluc2VydEFkamFjZW50SFRNTCIsIm5vZGVzIiwicG9pbnQiLCJxdWVyeVNlbGVjdG9yIiwidG9vbHRpcCIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImV2IiwiY2xpZW50WCIsImNsaWVudFkiLCJjbGVhclRpbWVvdXQiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwidXBkYXRlIiwibWVhc3VyZUFyZWEiLCJkcmF3IiwiZ2V0Q29sb3JDdXJzb3JQb2ludCIsInBhcnNlIiwidHlwZSIsImkiLCJtYXhTdGVwIiwiaW5Cb3VuZGFyaWVzIiwiUkdCQSIsImlzU2FtZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGQiLCJzdHlsZSIsIm1hcmdpblRvcCIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImRyYXdMaW5lcyIsInJlY3RYIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmVjdFkiLCJyYWlsIiwiY29uc29sZSIsImxvZyIsInBhcnNlSW50Iiwic2Nyb2xsWSIsInNjcm9sbFgiLCJ0aXRsZSIsImFwcGVuZENoaWxkIiwicG5nIiwib25sb2FkIiwibG9hZEltYWdlIiwic2NyZWVuc2hvdFByb2Nlc3NlZCIsImJpbmQiLCJzcmMiLCJkYXRhIiwiVWludDhDbGFtcGVkQXJyYXkiLCJnZXRMaWdodG5lc3NBdCIsImZuIiwiaW5uZXJIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiZ2V0SW1hZ2VEYXRhIiwiYnVmZmVyIiwiUmVjdGFuZ2xlUnVsZXIiLCJhY3Rpb24iLCJyZXNpemVTaWRlIiwicmVjdCIsInJlY3RhbmdsZU5vZGUiLCJ0b29sdGlwU2l6ZU5vZGUiLCJ0b29sdGlwUG9zTm9kZSIsInRhcmdldCIsInNlbGVjdG9yIiwiY29udGFpbmVyIiwiY29udGFpbnMiLCJydWxlciIsImNsb3Nlc3QiLCJyZXN1bHQiLCJhZGRFdmVudExpc3RlbmVyIiwibW91c2VEb3duIiwibW91c2VVcCIsIm1vdXNlTW92ZSIsImtleURvd24iLCJydWxlck5vZGUiLCJnZXRSdWxlciIsImRhdGFzZXQiLCJyZXNpemUiLCJzdGFydExlZnQiLCJzdGFydFRvcCIsInNoaWZ0WCIsInNoaWZ0WSIsInN0YXJ0WCIsInN0YXJ0WSIsInNoaWZ0V2lkdGgiLCJzaGlmdEhlaWdodCIsImRlYm91bmNlIiwic2hvd1BvcyIsIm9mZnNldFkiLCJvZmZzZXRYIiwiYnRuIiwicGFnZVkiLCJwYWdlWCIsInVwZGF0ZVRvb2x0aXAiLCJoaWRlUG9zIiwibmV3TGVmdCIsIm5ld1RvcCIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicmVwbGFjZSIsInJlY3RhbmdsZSIsInRvb2x0aXBTaXplIiwidG9vbHRpcFBvcyIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJmdW5jIiwiZGVsYXkiLCJkZWJJZCIsImRpbWVuc2lvbiIsInJlY3RhbmdsZVJ1bGVyIiwic2V0S2V5cyIsImFjdGl2ZSIsInF1aWNrS2V5cyIsInN0b3AiLCJmaXhQb3NpdGlvblJhaWxzIiwiYWN0aW9ucyIsInJlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJwYXJzZVNjcmVlbnNob3QiLCJzY3JlZW5QbmciLCJjaHJvbWUiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJwdXNoIiwiY29kZSIsImpvaW4iLCJzZW5kTWVzc2FnZSIsIm9wdGlvbkFjdGl2YXRlIiwiaGFuZGxlTW91c2VNb3ZlIiwic2Nyb2xsU2NyZWVuRGVib3VuY2UiLCJzY3JvbGxTY3JlZW5Qcm9jZXNzIiwiZm9yRWFjaCIsImxpc3RlbmVyIiwiaGFuZGxlU2NyZWVuQ2hhbmdlIiwidGltZW91dERlYiIsInRpbWVvdXRTY3JlZW4iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFz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QkFBVSxDQUFDLFlBQU07QUFDYixZQUFJMEcsU0FBUyxDQUFDLGdCQUFELENBQVQsRUFBSixFQUFtQztBQUMvQmpGLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWixFQUF3QytFLE1BQXhDO0FBQ0FVLGdCQUFNLENBQUNDLE9BQVAsQ0FBZU0sV0FBZixDQUEyQjtBQUFDQywwQkFBYyxFQUFFbEI7QUFBakIsV0FBM0I7QUFFQXFCLDZCQUFtQixHQUFHLEtBQXRCO0FBQ0g7QUFDSixPQVBTLEVBT1BLLGFBUE8sQ0FBVjtBQVFILEtBYmdDLEVBYTlCRCxVQWI4QixDQUFqQztBQWNIO0FBQ0osQzs7Ozs7Ozs7Ozs7QUN2R0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrRzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDRHOzs7Ozs7Ozs7OztBQ25CQSx1QyIsImZpbGUiOiIuL2FwcC9qcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaW1lbnNpb24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY29sb3JIb2xkID0gODtcbiAgICAgICAgdGhpcy5pbWdEYXRhID0gW107XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMudG9wID0gMDtcbiAgICAgICAgdGhpcy5ib3R0b20gPSAwO1xuICAgICAgICB0aGlzLmxlZnQgPSAwO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aCA9IDA7XG4gICAgICAgIHRoaXMuc2NyZWVuSGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5kZWJvdW5jZVVwZGF0ZSA9IHtcbiAgICAgICAgICAgIHRpbWVyOiAwLFxuICAgICAgICAgICAgcmFuZ2VYOiAwLFxuICAgICAgICAgICAgcmFuZ2VZOiAwLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1pZENvbG9yID0ge3I6MjU1LCBnOjI1NSwgYjoyNTUsIGE6MjU1fTtcbiAgICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJqcy1kaW1lbnNpb25cIiBzdHlsZT1cImxlZnQ6IDBweDsgdG9wOiAwcHg7XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwieCBqcy1kaW1lbnNpb25fX2F4aXNcIiBzdHlsZT1cImxlZnQ6IDBweDsgd2lkdGg6IDBweDtcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5IGpzLWRpbWVuc2lvbl9fYXhpc1wiIHN0eWxlPVwidG9wOiAwcHg7IGhlaWdodDogMHB4O1wiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImpzLWRpbWVuc2lvbl9fdG9vbHRpcFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRpbWVuc2lvbl9fbm9jdXJzb3JcIj48L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuXG4gICAgICAgIHRoaXMubm9kZXMgPSB7XG4gICAgICAgICAgICBwb2ludDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWRpbWVuc2lvbicpLFxuICAgICAgICAgICAgeDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWRpbWVuc2lvbl9fYXhpcy54JyksXG4gICAgICAgICAgICB5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZGltZW5zaW9uX19heGlzLnknKSxcbiAgICAgICAgICAgIHRvb2x0aXA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1kaW1lbnNpb25fX3Rvb2x0aXAnKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmltZ0RhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aCA9IDA7XG4gICAgICAgIHRoaXMuc2NyZWVuSGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5kZWJvdW5jZVVwZGF0ZSA9IHtcbiAgICAgICAgICAgIHRpbWVyOiAwLFxuICAgICAgICAgICAgcmFuZ2VYOiAwLFxuICAgICAgICAgICAgcmFuZ2VZOiAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubm9kZXMudG9vbHRpcC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5ub2Rlcy5wb2ludC5jbGFzc0xpc3QucmVtb3ZlKCdvbicpO1xuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlTW92ZShldikge1xuICAgICAgICB0aGlzLnggPSBldi5jbGllbnRYO1xuICAgICAgICB0aGlzLnkgPSBldi5jbGllbnRZO1xuXG4gICAgICAgIGlmICh0aGlzLmRlYm91bmNlVXBkYXRlLnRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVVwZGF0ZS50aW1lcik7XG4gICAgICAgICAgICB0aGlzLmRlYm91bmNlVXBkYXRlLnRpbWVyID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmltZ0RhdGEgJiYgdGhpcy5pbWdEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGV2LmNsaWVudFggPiAodGhpcy5kZWJvdW5jZVVwZGF0ZS5yYW5nZVggKyA1KSB8fFxuICAgICAgICAgICAgICAgIGV2LmNsaWVudFggPCAodGhpcy5kZWJvdW5jZVVwZGF0ZS5yYW5nZVggLSA1KSB8fFxuICAgICAgICAgICAgICAgIGV2LmNsaWVudFkgPiAodGhpcy5kZWJvdW5jZVVwZGF0ZS5yYW5nZVkgKyA1KSB8fFxuICAgICAgICAgICAgICAgIGV2LmNsaWVudFkgPCAodGhpcy5kZWJvdW5jZVVwZGF0ZS5yYW5nZVkgLSA1KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWJvdW5jZVVwZGF0ZS50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0sIDUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlVXBkYXRlLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZGVib3VuY2VVcGRhdGUucmFuZ2VYID0gdGhpcy54O1xuICAgICAgICB0aGlzLmRlYm91bmNlVXBkYXRlLnJhbmdlWSA9IHRoaXMueTtcblxuICAgICAgICB0aGlzLm1lYXN1cmVBcmVhKCk7XG4gICAgICAgIHRoaXMuZHJhdyh0aGlzLmRlYm91bmNlVXBkYXRlLnJhbmdlWCwgdGhpcy5kZWJvdW5jZVVwZGF0ZS5yYW5nZVkpO1xuICAgIH1cblxuICAgIG1lYXN1cmVBcmVhKCkge1xuICAgICAgICBsZXQgeCA9IHRoaXMueDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLnk7XG5cbiAgICAgICAgdGhpcy5taWRDb2xvciA9IHRoaXMuZ2V0Q29sb3JDdXJzb3JQb2ludCgpO1xuICAgICAgICB0aGlzLnBhcnNlKHgsIHksICd0b3AnKTtcbiAgICAgICAgdGhpcy5wYXJzZSh4LCB5LCAnYm90dG9tJyk7XG4gICAgICAgIHRoaXMucGFyc2UoeCwgeSwgJ2xlZnQnKTtcbiAgICAgICAgdGhpcy5wYXJzZSh4LCB5LCAncmlnaHQnKTtcbiAgICB9XG5cbiAgICBwYXJzZSh4LCB5LCB0eXBlLCBpID0gMCwgbWF4U3RlcCA9IDUwMDApIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgICAgIHkgPSB5LTE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgIHkgPSB5KzE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICB4ID0geCsxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIHggPSB4LTE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmluQm91bmRhcmllcyh4LCB5KSA/ICgoeSAqIHRoaXMuc2NyZWVuV2lkdGggKyB4KSAqIDQpIDogLTE7XG5cbiAgICAgICAgaWYgKGxlbmd0aCA+IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBSR0JBID0ge1xuICAgICAgICAgICAgICAgIHI6IHRoaXMuaW1nRGF0YVtsZW5ndGhdLCBnOiB0aGlzLmltZ0RhdGFbbGVuZ3RoICsgMV0sIGI6IHRoaXMuaW1nRGF0YVtsZW5ndGggKyAyXSwgYTogdGhpcy5pbWdEYXRhW2xlbmd0aCArIDNdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgaXNTYW1lID0gKFxuICAgICAgICAgICAgICAgIChSR0JBLnIgPCB0aGlzLm1pZENvbG9yLnIgKyB0aGlzLmNvbG9ySG9sZCAmJiBSR0JBLnIgPiB0aGlzLm1pZENvbG9yLnIgLSB0aGlzLmNvbG9ySG9sZCkgJiZcbiAgICAgICAgICAgICAgICAoUkdCQS5nIDwgdGhpcy5taWRDb2xvci5nICsgdGhpcy5jb2xvckhvbGQgJiYgUkdCQS5nID4gdGhpcy5taWRDb2xvci5nIC0gdGhpcy5jb2xvckhvbGQpICYmXG4gICAgICAgICAgICAgICAgKFJHQkEuYiA8IHRoaXMubWlkQ29sb3IuYiArIHRoaXMuY29sb3JIb2xkICYmIFJHQkEuYiA+IHRoaXMubWlkQ29sb3IuYiAtIHRoaXMuY29sb3JIb2xkKSAmJlxuICAgICAgICAgICAgICAgIChSR0JBLmEgPCB0aGlzLm1pZENvbG9yLmEgKyB0aGlzLmNvbG9ySG9sZCAmJiBSR0JBLmEgPiB0aGlzLm1pZENvbG9yLmEgLSB0aGlzLmNvbG9ySG9sZClcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKGlzU2FtZSkge1xuICAgICAgICAgICAgICAgIGlmIChtYXhTdGVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2UoeCwgeSwgdHlwZSwgKytpLCAtLW1heFN0ZXApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzW3R5cGVdID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNbdHlwZV0gPSBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhdyhjbGllbnRYLCBjbGllbnRZKSB7XG4gICAgICAgIGxldCB4ID0gY2xpZW50WDtcbiAgICAgICAgbGV0IHkgPSBjbGllbnRZO1xuXG4gICAgICAgIGlmIChjbGllbnRYICsgMTAwID4gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZXMudG9vbHRpcC5jbGFzc0xpc3QuYWRkKCd0cmFuc2xhdGVYJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLnRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNsYXRlWCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsaWVudFkgLSAxMDAgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLnRvb2x0aXAuY2xhc3NMaXN0LmFkZCgndHJhbnNsYXRlWScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLnRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNsYXRlWScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50b3AgPSB0aGlzLnRvcCsxO1xuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnQrMTtcbiAgICAgICAgdGhpcy5ub2Rlcy5wb2ludC5jbGFzc0xpc3QuYWRkKCdvbicpO1xuICAgICAgICB0aGlzLm5vZGVzLnBvaW50LnN0eWxlLnRvcCA9IGNsaWVudFkgKyAncHgnO1xuICAgICAgICB0aGlzLm5vZGVzLnBvaW50LnN0eWxlLmxlZnQgPSBjbGllbnRYICsgJ3B4JztcbiAgICAgICAgdGhpcy5ub2Rlcy50b29sdGlwLmlubmVySFRNTCA9IGAke3RoaXMubGVmdCArIHRoaXMucmlnaHR9IHggJHt0aGlzLnRvcCArIHRoaXMuYm90dG9tfWA7XG5cbiAgICAgICAgdGhpcy5ub2Rlcy55LnN0eWxlLm1hcmdpblRvcCA9ICctJyArIHRoaXMudG9wICsgJ3B4JztcbiAgICAgICAgdGhpcy5ub2Rlcy55LnN0eWxlLmhlaWdodCA9IHRoaXMudG9wICsgdGhpcy5ib3R0b20gKyAncHgnO1xuXG4gICAgICAgIHRoaXMubm9kZXMueC5zdHlsZS5tYXJnaW5MZWZ0ID0gJy0nICsgdGhpcy5yaWdodCArICdweCc7XG4gICAgICAgIHRoaXMubm9kZXMueC5zdHlsZS53aWR0aCA9IHRoaXMubGVmdCArIHRoaXMucmlnaHQgKyAncHgnO1xuXG4gICAgICAgIHRoaXMuZHJhd0xpbmVzKCk7XG4gICAgfVxuXG4gICAgZHJhd0xpbmVzKCkgeyAvL1xuICAgIH1cblxuICAgIGZpeFBvc2l0aW9uUmFpbHMoKSB7IC8vXG4gICAgICAgIGNvbnN0IHJlY3RYID0gdGhpcy5ub2Rlcy54LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCByZWN0WSA9IHRoaXMubm9kZXMueS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByYWlsLmNsYXNzTGlzdC5hZGQoJ2pzLXJhaWwnKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vZGVzLnksIHRoaXMubm9kZXMueS5zdHlsZS53aWR0aCwgdGhpcy5ub2Rlcy55LnN0eWxlLmhlaWdodCk7XG5cbiAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMubm9kZXMueC5zdHlsZS53aWR0aCkgPCBwYXJzZUludCh0aGlzLm5vZGVzLnkuc3R5bGUuaGVpZ2h0KSkge1xuICAgICAgICAgICAgcmFpbC5jbGFzc0xpc3QuYWRkKCdyYWlsLXgnKTtcbiAgICAgICAgICAgIHJhaWwuc3R5bGUud2lkdGggPSB0aGlzLm5vZGVzLnguc3R5bGUud2lkdGg7XG4gICAgICAgICAgICByYWlsLnN0eWxlLnRvcCA9IHdpbmRvdy5zY3JvbGxZICsgcmVjdFgudG9wICsgJ3B4JztcbiAgICAgICAgICAgIHJhaWwuc3R5bGUubGVmdCA9IHdpbmRvdy5zY3JvbGxYICsgcmVjdFgubGVmdCArICdweCc7XG4gICAgICAgICAgICByYWlsLnRpdGxlID0gdGhpcy5ub2Rlcy54LnN0eWxlLndpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFpbC5jbGFzc0xpc3QuYWRkKCdyYWlsLXknKTtcbiAgICAgICAgICAgIHJhaWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5ub2Rlcy55LnN0eWxlLmhlaWdodDtcbiAgICAgICAgICAgIHJhaWwuc3R5bGUudG9wID0gd2luZG93LnNjcm9sbFkgKyByZWN0WS50b3AgKyAncHgnO1xuICAgICAgICAgICAgcmFpbC5zdHlsZS5sZWZ0ID0gd2luZG93LnNjcm9sbFggKyByZWN0WS5sZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgIHJhaWwudGl0bGUgPSB0aGlzLm5vZGVzLnkuc3R5bGUuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyYWlsKTtcbiAgICB9XG5cbiAgICBwYXJzZVNjcmVlbnNob3QocG5nKSB7XG4gICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gdGhpcy5sb2FkSW1hZ2UodGhpcy5zY3JlZW5zaG90UHJvY2Vzc2VkLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHBuZztcbiAgICB9XG5cbiAgICBpbkJvdW5kYXJpZXMoeCwgeSl7XG4gICAgICAgIHJldHVybiAoeCA+PSAwICYmIHggPCB0aGlzLnNjcmVlbldpZHRoICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5zY3JlZW5IZWlnaHQpO1xuICAgIH1cblxuICAgIGdldExpZ2h0bmVzc0F0KCkgeyAvLyDQv9C+0LvRg9GH0LDQtdGCINC/0L7Qt9C40YbQuNGOINC60YPRgNGB0L7RgNCwINCyINC80LDRgdGB0LjQstC1XG4gICAgICAgIHJldHVybiB0aGlzLmluQm91bmRhcmllcyh0aGlzLngsIHRoaXMueSkgPyh0aGlzLnkgKiB0aGlzLnNjcmVlbldpZHRoICsgdGhpcy54KSA6IC0xO1xuICAgIH1cblxuICAgIHNjcmVlbnNob3RQcm9jZXNzZWQoZGF0YSkgeyAvLyDQv9C+0LvRg9GH0LDQtdGCINGB0LLQvtC50YHRgtCy0LAg0YHQutGA0LjQvdGI0L7RgtCwINC4INCy0YvQt9GL0LLQsNC10YIg0LzQtdGC0L7QtNGLINCy0YvRh9C40YHQu9C10L3QuNGPXG4gICAgICAgIHRoaXMuaW1nRGF0YSA9IG5ldyBVaW50OENsYW1wZWRBcnJheShkYXRhLmltZ0RhdGEpO1xuICAgICAgICB0aGlzLnNjcmVlbldpZHRoID0gZGF0YS53aWR0aDtcbiAgICAgICAgdGhpcy5zY3JlZW5IZWlnaHQgPSBkYXRhLmhlaWdodDtcbiAgICB9XG5cbiAgICBnZXRDb2xvckN1cnNvclBvaW50KCkgeyAvLyDQv9C+0LvRg9GH0LDQtdGCINGG0LLQtdGCINC/0LjQutGB0LXQu9GPINC/0L7QtCDQutGD0YDRgdC+0YDQvtC8XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGlnaHRuZXNzQXQoKSAqIDQ7XG4gICAgICAgIGNvbnN0IFJHQkEgPSB7XG4gICAgICAgICAgICByOiB0aGlzLmltZ0RhdGFbbGVuZ3RoXSwgZzogdGhpcy5pbWdEYXRhW2xlbmd0aCArIDFdLCBiOiB0aGlzLmltZ0RhdGFbbGVuZ3RoICsgMl0sIGE6IHRoaXMuaW1nRGF0YVtsZW5ndGggKyAzXVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBSR0JBO1xuICAgIH1cblxuICAgIGxvYWRJbWFnZShmbikge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCAmJiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIGxldCBpbWdEYXRhID0gdGhpcy5jdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpLmRhdGE7XG5cbiAgICAgICAgICAgICAgICBmbih7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbWdEYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgaW1nRGF0YTogaW1nRGF0YS5idWZmZXIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMClcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlUnVsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFjdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnJlc2l6ZVNpZGUgPSAnJztcbiAgICAgICAgdGhpcy5yZWN0ID0ge307XG4gICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvb2x0aXBTaXplTm9kZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvb2x0aXBQb3NOb2RlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5iaW5kKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICBjb25zdCBodG1sID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwianMtcmVjdGFuZ2xlLXJ1bGVyIHJlY3RhbmdsZS1ydWxlclwiIHN0eWxlPVwiXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwianMtcmVjdGFuZ2xlIHJlY3RhbmdsZS1ydWxlcl9fcmVjdGFuZ2xlIHVpLXJlc2l6YWJsZVwiIGRhdGEtYWN0aW9uPVwibW92ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0YW5nbGUtcnVsZXJfX25hdlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwianMtcmVjdGFuZ2xlLWNsb3NlIHJlY3RhbmdsZS1jbG9zZVwiIGRhdGEtYWN0aW9uPVwiY2xvc2VcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImpzLXJlY3RhbmdsZS1waW4gcmVjdGFuZ2xlLXBpblwiIGRhdGEtYWN0aW9uPVwicGluXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3RhbmdsZS1ydWxlcl9fdG9vbHRpcFwiIGRhdGEtYWN0aW9uPVwibW92ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwianMtcmVjdGFuZ2xlLXRvb2x0aXAtc2l6ZSByZWN0YW5nbGUtdG9vbHRpcF9fc2l6ZSB0b29sdGlwX19ib3R0b21cIiBkYXRhLWFjdGlvbj1cIm1vdmVcIj41MDB4MzAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqcy1yZWN0YW5nbGUtdG9vbHRpcC1wb3MgcmVjdGFuZ2xlLXRvb2x0aXBfX3BvcyB0b29sdGlwX19ib3R0b20gaGlkZVwiIGRhdGEtYWN0aW9uPVwibW92ZVwiPjUwMHgzMDA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktcmVzaXphYmxlLW5cIiBkYXRhLWFjdGlvbj1cInJlc2l6ZVwiIGRhdGEtcmVzaXplPVwiblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1yZXNpemFibGUtd1wiIGRhdGEtYWN0aW9uPVwicmVzaXplXCIgZGF0YS1yZXNpemU9XCJ3XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLXJlc2l6YWJsZS1zXCIgZGF0YS1hY3Rpb249XCJyZXNpemVcIiBkYXRhLXJlc2l6ZT1cInNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktcmVzaXphYmxlLWVcIiBkYXRhLWFjdGlvbj1cInJlc2l6ZVwiIGRhdGEtcmVzaXplPVwiZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1yZXNpemFibGUtc2VcIiBkYXRhLWFjdGlvbj1cInJlc2l6ZVwiIGRhdGEtcmVzaXplPVwic2VcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlY3RhbmdsZS1ydWxlcl9fbm8tY3Vyc29yXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG4gICAgfVxuXG4gICAgZ2V0UnVsZXIodGFyZ2V0LCBzZWxlY3Rvcikge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcnVsZXIgPSB0YXJnZXQuY2xvc2VzdCgnLmpzLXJlY3RhbmdsZS1ydWxlcicpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3IgPT09ICdqcy1yZWN0YW5nbGUtcnVsZXInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGVyO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChydWxlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICBydWxlci5xdWVyeVNlbGVjdG9yKCcuJyArIHNlbGVjdG9yKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5tb3VzZVVwLmJpbmQodGhpcykpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcykpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleURvd24uYmluZCh0aGlzKSlcbiAgICB9XG5cbiAgICBtb3VzZURvd24oZXYpIHtcbiAgICAgICAgdGhpcy5ydWxlck5vZGUgPSB0aGlzLmdldFJ1bGVyKGV2LnRhcmdldCwgJ2pzLXJlY3RhbmdsZS1ydWxlcicpO1xuXG4gICAgICAgIGlmICh0aGlzLnJ1bGVyTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlID0gdGhpcy5ydWxlck5vZGUucXVlcnlTZWxlY3RvcignLmpzLXJlY3RhbmdsZScpO1xuICAgICAgICAgICAgdGhpcy50b29sdGlwU2l6ZU5vZGUgPSB0aGlzLnJ1bGVyTm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtcmVjdGFuZ2xlLXRvb2x0aXAtc2l6ZScpO1xuICAgICAgICAgICAgdGhpcy50b29sdGlwUG9zTm9kZSA9IHRoaXMucnVsZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWN0YW5nbGUtdG9vbHRpcC1wb3MnKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gZXYudGFyZ2V0LmRhdGFzZXQ/LmFjdGlvbjtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uICYmIHRoaXMucmVjdGFuZ2xlTm9kZSAmJiB0aGlzLnRvb2x0aXBTaXplTm9kZSAmJiB0aGlzLnRvb2x0aXBQb3NOb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAncmVzaXplJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNpemUgPSBldi50YXJnZXQuZGF0YXNldD8ucmVzaXplO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0TGVmdDogdGhpcy5yZWN0YW5nbGVOb2RlLmNsYXNzTGlzdC5jb250YWlucygncmVjdGFuZ2xlLXJ1bGVyX19yZWN0YW5nbGVfZml4JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHdpbmRvdy5zY3JvbGxYICsgdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRUb3A6IHRoaXMucmVjdGFuZ2xlTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ3JlY3RhbmdsZS1ydWxlcl9fcmVjdGFuZ2xlX2ZpeCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB3aW5kb3cuc2Nyb2xsWSArIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdFg6IHdpbmRvdy5zY3JvbGxYICsgKGV2LmNsaWVudFggLSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdFk6IHdpbmRvdy5zY3JvbGxZICsgKGV2LmNsaWVudFkgLSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0WDogZXYuY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0WTogZXYuY2xpZW50WSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0V2lkdGg6IHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0SGVpZ2h0OiB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZVNpZGUgPSByZXNpemUgPyByZXNpemUgOiAnJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aW9uID09PSAnbW92ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRMZWZ0OiB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VG9wOiB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRYOiB0aGlzLnJlY3RhbmdsZU5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWN0YW5nbGUtcnVsZXJfX3JlY3RhbmdsZV9maXgnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGV2LmNsaWVudFggLSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHdpbmRvdy5zY3JvbGxYICsgKGV2LmNsaWVudFggLSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdFk6IHRoaXMucmVjdGFuZ2xlTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ3JlY3RhbmdsZS1ydWxlcl9fcmVjdGFuZ2xlX2ZpeCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoZXYuY2xpZW50WSAtIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB3aW5kb3cuc2Nyb2xsWSArIChldi5jbGllbnRZIC0gdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFg6IGV2LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFk6IGV2LmNsaWVudFksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdFdpZHRoOiB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdEhlaWdodDogdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlKHRoaXMuc2hvd1Bvcy5iaW5kKHRoaXMpLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcFNpemVOb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBQb3NOb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbiA9ICcnO1xuICAgICAgICAgICAgdGhpcy5yZXNpemVTaWRlID0gJyc7XG4gICAgICAgICAgICB0aGlzLm9mZnNldFkgPSAwO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXRYID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdXNlVXAoZXYpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uICYmIHRoaXMucnVsZXJOb2RlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT09ICdjbG9zZScpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ydWxlck5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ydWxlck5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGlvbiA9PT0gJ3BpbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBidG4gPSB0aGlzLnJlY3RhbmdsZU5vZGUucXVlcnlTZWxlY3RvcignLmpzLXJlY3RhbmdsZS1waW4nKTtcblxuICAgICAgICAgICAgICAgIGlmIChidG4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gd2luZG93LnNjcm9sbFkgKyAoZXYuY2xpZW50WSAtIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IHdpbmRvdy5zY3JvbGxYICsgKGV2LmNsaWVudFggLSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUudG9wID0gKGV2LnBhZ2VZIC0geSkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLmxlZnQgPSAoZXYucGFnZVggLSB4KSArICdweCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdyZWN0YW5nbGUtcnVsZXJfX3JlY3RhbmdsZV9maXgnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSAoZXYuY2xpZW50WSAtIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IChldi5jbGllbnRYIC0gdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLnRvcCA9IChldi5wYWdlWSAtIHkpICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS5sZWZ0ID0gKGV2LnBhZ2VYIC0geCkgKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuY2xhc3NMaXN0LmFkZCgncmVjdGFuZ2xlLXJ1bGVyX19yZWN0YW5nbGVfZml4Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9vbHRpcCh0aGlzLnJlY3RhbmdsZU5vZGUsIHRoaXMudG9vbHRpcFNpemVOb2RlLCB0aGlzLnRvb2x0aXBQb3NOb2RlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2UodGhpcy5oaWRlUG9zLmJpbmQodGhpcyksIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy5yZXNpemVTaWRlID0gJyc7XG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IDA7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IDA7XG4gICAgfVxuXG4gICAgc2hvd1BvcygpIHtcbiAgICAgICAgdGhpcy50b29sdGlwUG9zTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIHRoaXMudG9vbHRpcFNpemVOb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBoaWRlUG9zKCkge1xuICAgICAgICB0aGlzLnRvb2x0aXBQb3NOb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgdGhpcy50b29sdGlwU2l6ZU5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH1cblxuICAgIG1vdXNlTW92ZShldikge1xuICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT09ICdtb3ZlJykge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLnRvcCA9IChldi5wYWdlWSAtIHRoaXMucmVjdC5zaGlmdFkpICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS5sZWZ0ID0gKGV2LnBhZ2VYIC0gdGhpcy5yZWN0LnNoaWZ0WCkgKyAncHgnO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRvb2x0aXAodGhpcy5yZWN0YW5nbGVOb2RlLCB0aGlzLnRvb2x0aXBTaXplTm9kZSwgdGhpcy50b29sdGlwUG9zTm9kZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpb24gPT09ICdyZXNpemUnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNpemVTaWRlID09PSAnc2UnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLndpZHRoID0gKHRoaXMucmVjdC5zaGlmdFdpZHRoICsgZXYuY2xpZW50WCAtIHRoaXMucmVjdC5zdGFydFgpICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUuaGVpZ2h0ID0gKHRoaXMucmVjdC5zaGlmdEhlaWdodCArIGV2LmNsaWVudFkgLSB0aGlzLnJlY3Quc3RhcnRZKSArICdweCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzaXplU2lkZSA9PT0gJ2UnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLndpZHRoID0gKHRoaXMucmVjdC5zaGlmdFdpZHRoICsgZXYuY2xpZW50WCAtIHRoaXMucmVjdC5zdGFydFgpICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNpemVTaWRlID09PSAncycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUuaGVpZ2h0ID0gKHRoaXMucmVjdC5zaGlmdEhlaWdodCArIGV2LmNsaWVudFkgLSB0aGlzLnJlY3Quc3RhcnRZKSArICdweCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzaXplU2lkZSA9PT0gJ3cnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TGVmdCA9IChldi5wYWdlWCAtIHRoaXMucmVjdC5zaGlmdFgpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS5sZWZ0ID0gbmV3TGVmdCArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLndpZHRoID0gKHRoaXMucmVjdC5zaGlmdFdpZHRoICsgKHRoaXMucmVjdC5zdGFydExlZnQgLSBuZXdMZWZ0KSkgKyAncHgnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc2l6ZVNpZGUgPT09ICduJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RvcCA9ICh0aGlzLnJlY3RhbmdsZU5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWN0YW5nbGUtcnVsZXJfX3JlY3RhbmdsZV9maXgnKSlcbiAgICAgICAgICAgICAgICAgICAgPyB3aW5kb3cuc2Nyb2xsWSArIChldi5wYWdlWSAtIHRoaXMucmVjdC5zaGlmdFkpXG4gICAgICAgICAgICAgICAgICAgIDogKGV2LnBhZ2VZIC0gdGhpcy5yZWN0LnNoaWZ0WSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LnNjcm9sbFksIG5ld1RvcClcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUudG9wID0gbmV3VG9wICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUuaGVpZ2h0ID0gKHRoaXMucmVjdC5zaGlmdEhlaWdodCArICh0aGlzLnJlY3Quc3RhcnRUb3AgLSBuZXdUb3ApKSArICdweCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9vbHRpcCh0aGlzLnJlY3RhbmdsZU5vZGUsIHRoaXMudG9vbHRpcFNpemVOb2RlLCB0aGlzLnRvb2x0aXBQb3NOb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtleURvd24oZXYpIHtcbiAgICAgICAgaWYgKHRoaXMucmVjdGFuZ2xlTm9kZSkge1xuICAgICAgICAgICAgaWYgKGV2LmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUudG9wID0gK3RoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS50b3BcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3B4JywgJycpIC0gMSArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UG9zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb29sdGlwKHRoaXMucmVjdGFuZ2xlTm9kZSwgdGhpcy50b29sdGlwU2l6ZU5vZGUsIHRoaXMudG9vbHRpcFBvc05vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2UodGhpcy5oaWRlUG9zLmJpbmQodGhpcyksIDUwMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS50b3AgPSArdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLnRvcFxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgncHgnLCAnJykgKyAxICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvb2x0aXAodGhpcy5yZWN0YW5nbGVOb2RlLCB0aGlzLnRvb2x0aXBTaXplTm9kZSwgdGhpcy50b29sdGlwUG9zTm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWJvdW5jZSh0aGlzLmhpZGVQb3MuYmluZCh0aGlzKSwgNTAwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXYua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLmxlZnQgPSArdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLmxlZnRcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3B4JywgJycpIC0gMSArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UG9zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb29sdGlwKHRoaXMucmVjdGFuZ2xlTm9kZSwgdGhpcy50b29sdGlwU2l6ZU5vZGUsIHRoaXMudG9vbHRpcFBvc05vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2UodGhpcy5oaWRlUG9zLmJpbmQodGhpcyksIDUwMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2LmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUubGVmdCA9ICt0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUubGVmdFxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgncHgnLCAnJykgKyAxICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvb2x0aXAodGhpcy5yZWN0YW5nbGVOb2RlLCB0aGlzLnRvb2x0aXBTaXplTm9kZSwgdGhpcy50b29sdGlwUG9zTm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWJvdW5jZSh0aGlzLmhpZGVQb3MuYmluZCh0aGlzKSwgNTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVRvb2x0aXAocmVjdGFuZ2xlLCB0b29sdGlwU2l6ZSwgdG9vbHRpcFBvcykge1xuICAgICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIHRvb2x0aXBTaXplLmlubmVySFRNTCA9IHJlY3Qud2lkdGggKyAneCcgKyByZWN0LmhlaWdodDtcblxuICAgICAgICBpZiAodGhpcy5yZWN0YW5nbGVOb2RlLmNsYXNzTGlzdC5jb250YWlucygncmVjdGFuZ2xlLXJ1bGVyX19yZWN0YW5nbGVfZml4JykpIHtcbiAgICAgICAgICAgIHRvb2x0aXBQb3MuaW5uZXJIVE1MID0gcmVjdGFuZ2xlLm9mZnNldExlZnQgKyAneCcgKyByZWN0YW5nbGUub2Zmc2V0VG9wO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9vbHRpcFBvcy5pbm5lckhUTUwgPSByZWN0LmxlZnQgKyAneCcgKyByZWN0LnRvcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlYm91bmNlKGZ1bmMsIGRlbGF5KSB7XG4gICAgICAgIGlmICh0aGlzLmRlYklkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJJZCk7XG4gICAgICAgICAgICB0aGlzLmRlYklkID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGViSWQgPSBzZXRUaW1lb3V0KGZ1bmMsIGRlbGF5KTtcbiAgICB9XG59IiwiaW1wb3J0IERpbWVuc2lvbiBmcm9tICcuL2NsYXNzZXMvRGltZW5zaW9uJztcbmltcG9ydCBSZWN0YW5nbGVSdWxlciBmcm9tIFwiLi9jbGFzc2VzL1JlY3RhbmdsZVJ1bGVyXCI7XG5cbmNvbnN0IGRpbWVuc2lvbiA9IG5ldyBEaW1lbnNpb24oKTtcbmNvbnN0IHJlY3RhbmdsZVJ1bGVyID0gbmV3IFJlY3RhbmdsZVJ1bGVyKCk7XG5cbmxldCBzZXRLZXlzID0gW107XG5sZXQgYWN0aXZlID0gJyc7XG5jb25zdCBxdWlja0tleXMgPSB7XG4gICAgJ0FsdExlZnQgKyBLZXlaJzogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBrZXkgPSAnZGltZW5zaW9ucyc7XG5cbiAgICAgICAgaWYgKGFjdGl2ZSA9PT0ga2V5KSB7XG4gICAgICAgICAgICBhY3RpdmUgPSAnJztcbiAgICAgICAgICAgIGRpbWVuc2lvbi5zdG9wKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlID09PSAnJykge1xuICAgICAgICAgICAgYWN0aXZlID0ga2V5O1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgICdBbHRMZWZ0ICsgS2V5WCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVjdGFuZ2xlUnVsZXIuY3JlYXRlKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgICdBbHRMZWZ0ICsgS2V5Qyc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gcmVjdGFuZ2xlUnVsZXIuY3JlYXRlKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgICdBbHRMZWZ0ICsgS2V5Uyc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGltZW5zaW9uLmZpeFBvc2l0aW9uUmFpbHMoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG59O1xuY29uc3QgYWN0aW9ucyA9IHtcbiAgICAndGFrZVNjcmVlbnNob3QnOiBmdW5jdGlvbiAocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgZGltZW5zaW9uLnBhcnNlU2NyZWVuc2hvdChyZXF1ZXN0LnNjcmVlblBuZyk7XG4gICAgfSxcbn1cblxuLy8gcmVjZWl2ZVdvcmtlck1lc3NhZ2VcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbihyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgIGlmIChyZXF1ZXN0LmFjdGlvbiAmJiB0eXBlb2YgYWN0aW9uc1sgcmVxdWVzdC5hY3Rpb24gXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhY3Rpb25zWyByZXF1ZXN0LmFjdGlvbiBdKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldikgPT4ge1xuICAgIHNldEtleXMucHVzaChldi5jb2RlKTtcblxuICAgIGlmIChzZXRLZXlzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgcXVpY2tLZXlzWyBzZXRLZXlzLmpvaW4oJyArICcpIF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKHF1aWNrS2V5c1sgc2V0S2V5cy5qb2luKCcgKyAnKSBdKCkpIHtcbiAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtvcHRpb25BY3RpdmF0ZTogYWN0aXZlfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2KSA9PiB7XG4gICAgc2V0S2V5cyA9IFtdO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXYpID0+IHtcbiAgICBkaW1lbnNpb24uaGFuZGxlTW91c2VNb3ZlKGV2KTtcbn0pO1xuXG5sZXQgc2Nyb2xsU2NyZWVuRGVib3VuY2UgPSAwO1xubGV0IHNjcm9sbFNjcmVlblByb2Nlc3MgPSBmYWxzZTtcblxuWydzY3JvbGwnLCAnbW91c2V3aGVlbCddLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGxpc3RlbmVyLCAoZXYpID0+IHtcbiAgICAgICAgaWYgKGxpc3RlbmVyID09PSAnbW91c2V3aGVlbCcpIHtcbiAgICAgICAgICAgIGhhbmRsZVNjcmVlbkNoYW5nZSg4MDAsIDEwMCk7XG4gICAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXIgPT09ICdzY3JvbGwnKSB7XG4gICAgICAgICAgICAvLyBoYW5kbGVTY3JlZW5DaGFuZ2UoMTAwLCA1MCk7XG4gICAgICAgIH1cbiAgICB9LCBmYWxzZSk7XG59KTtcblxuZnVuY3Rpb24gaGFuZGxlU2NyZWVuQ2hhbmdlKHRpbWVvdXREZWIsIHRpbWVvdXRTY3JlZW4pIHtcbiAgICBpZiAoYWN0aXZlID09PSAnZGltZW5zaW9ucycgJiYgc2Nyb2xsU2NyZWVuUHJvY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgc2Nyb2xsU2NyZWVuUHJvY2VzcyA9IHRydWU7XG5cbiAgICAgICAgaWYgKHNjcm9sbFNjcmVlbkRlYm91bmNlKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2Nyb2xsU2NyZWVuRGVib3VuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2Nyb2xsU2NyZWVuRGVib3VuY2UgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHF1aWNrS2V5c1snQWx0TGVmdCArIEtleVonXSgpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2Nyb2xsU2NyZWVuRGVib3VuY2UnLCBhY3RpdmUpXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChxdWlja0tleXNbJ0FsdExlZnQgKyBLZXlaJ10oKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2Nyb2xsU2NyZWVuRGVib3VuY2UgLSAyJywgYWN0aXZlKVxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7b3B0aW9uQWN0aXZhdGU6IGFjdGl2ZX0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFNjcmVlblByb2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aW1lb3V0U2NyZWVuKVxuICAgICAgICB9LCB0aW1lb3V0RGViKTtcbiAgICB9XG59IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9