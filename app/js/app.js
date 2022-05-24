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
      this.midColor = this.getColorCursorPoint();
      this.parse(this.x, this.y, 'top');
      this.parse(this.x, this.y, 'bottom');
      this.parse(this.x, this.y, 'left');
      this.parse(this.x, this.y, 'right');
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
      var html = "\n        <div class=\"js-rectangle-ruler rectangle-ruler\" style=\"\">\n            <div class=\"js-rectangle rectangle-ruler__rectangle ui-resizable\" data-action=\"move\">\n                <div class=\"js-rectangle-close rectangle-close\" data-action=\"close\"></div>\n                <div class=\"rectangle-ruler__tooltip\" data-action=\"move\">\n                    <div class=\"js-rectangle-tooltip-size rectangle-tooltip__size tooltip__bottom\" data-action=\"move\">500x300</div>\n                    <div class=\"js-rectangle-tooltip-pos rectangle-tooltip__pos tooltip__bottom hide\" data-action=\"move\">500x300</div>\n                </div>\n                <div class=\"ui-resizable-n\" data-action=\"resize\" data-resize=\"n\"></div>\n                <div class=\"ui-resizable-w\" data-action=\"resize\" data-resize=\"w\"></div>\n                <div class=\"ui-resizable-s\" data-action=\"resize\" data-resize=\"s\"></div>\n                <div class=\"ui-resizable-e\" data-action=\"resize\" data-resize=\"e\"></div>\n                <div class=\"ui-resizable-se\" data-action=\"resize\" data-resize=\"se\"></div>\n            </div>\n            <div class=\"rectangle-ruler__no-cursor\"></div>\n        </div>\n        ";
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
              startLeft: this.rectangleNode.getBoundingClientRect().left,
              startTop: this.rectangleNode.getBoundingClientRect().top,
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
              shiftX: window.scrollX + (ev.clientX - this.rectangleNode.getBoundingClientRect().left),
              shiftY: window.scrollY + (ev.clientY - this.rectangleNode.getBoundingClientRect().top),
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
          var newTop = ev.pageY - this.rect.shiftY;
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
      tooltipPos.innerHTML = rect.left + 'x' + rect.top;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9EaW1lbnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9SZWN0YW5nbGVSdWxlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJEaW1lbnNpb24iLCJpbWFnZSIsIkltYWdlIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29sb3JIb2xkIiwiaW1nRGF0YSIsIngiLCJ5IiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJkZWJvdW5jZVVwZGF0ZSIsInRpbWVyIiwicmFuZ2VYIiwicmFuZ2VZIiwibWlkQ29sb3IiLCJyIiwiZyIsImIiLCJhIiwiY3JlYXRlIiwiaHRtbCIsImJvZHkiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJub2RlcyIsInBvaW50IiwicXVlcnlTZWxlY3RvciIsInRvb2x0aXAiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJldiIsImNsaWVudFgiLCJjbGllbnRZIiwiY2xlYXJUaW1lb3V0IiwibGVuZ3RoIiwic2V0VGltZW91dCIsInVwZGF0ZSIsIm1lYXN1cmVBcmVhIiwiZHJhdyIsImdldENvbG9yQ3Vyc29yUG9pbnQiLCJwYXJzZSIsInR5cGUiLCJpIiwibWF4U3RlcCIsImluQm91bmRhcmllcyIsIlJHQkEiLCJpc1NhbWUiLCJhZGQiLCJzdHlsZSIsIm1hcmdpblRvcCIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImRyYXdMaW5lcyIsInBuZyIsIm9ubG9hZCIsImxvYWRJbWFnZSIsInNjcmVlbnNob3RQcm9jZXNzZWQiLCJiaW5kIiwic3JjIiwiZGF0YSIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiZ2V0TGlnaHRuZXNzQXQiLCJmbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJnZXRJbWFnZURhdGEiLCJidWZmZXIiLCJSZWN0YW5nbGVSdWxlciIsImFjdGlvbiIsInJlc2l6ZVNpZGUiLCJyZWN0IiwicmVjdGFuZ2xlTm9kZSIsInRvb2x0aXBTaXplTm9kZSIsInRvb2x0aXBQb3NOb2RlIiwidGFyZ2V0Iiwic2VsZWN0b3IiLCJjb250YWluZXIiLCJjb250YWlucyIsInJ1bGVyIiwiY2xvc2VzdCIsInJlc3VsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3VzZURvd24iLCJtb3VzZVVwIiwibW91c2VNb3ZlIiwia2V5RG93biIsInJ1bGVyTm9kZSIsImdldFJ1bGVyIiwiZGF0YXNldCIsInJlc2l6ZSIsInN0YXJ0TGVmdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInN0YXJ0VG9wIiwic2hpZnRYIiwic2Nyb2xsWCIsInNoaWZ0WSIsInNjcm9sbFkiLCJzdGFydFgiLCJzdGFydFkiLCJzaGlmdFdpZHRoIiwic2hpZnRIZWlnaHQiLCJkZWJvdW5jZSIsInNob3dQb3MiLCJvZmZzZXRZIiwib2Zmc2V0WCIsInVwZGF0ZVRvb2x0aXAiLCJoaWRlUG9zIiwicGFnZVkiLCJwYWdlWCIsIm5ld0xlZnQiLCJuZXdUb3AiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlcGxhY2UiLCJyZWN0YW5nbGUiLCJ0b29sdGlwU2l6ZSIsInRvb2x0aXBQb3MiLCJmdW5jIiwiZGVsYXkiLCJkZWJJZCIsImRpbWVuc2lvbiIsInJlY3RhbmdsZVJ1bGVyIiwic2V0S2V5cyIsImFjdGl2ZSIsInF1aWNrS2V5cyIsInN0b3AiLCJhY3Rpb25zIiwicmVxdWVzdCIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsInBhcnNlU2NyZWVuc2hvdCIsInNjcmVlblBuZyIsImNocm9tZSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInB1c2giLCJjb2RlIiwiam9pbiIsInNlbmRNZXNzYWdlIiwib3B0aW9uQWN0aXZhdGUiLCJoYW5kbGVNb3VzZU1vdmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRnFCQSxTO0FBQ2pCLHVCQUFjO0FBQUE7O0FBQ1YsU0FBS0MsS0FBTCxHQUFhLElBQUlDLEtBQUosRUFBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLQyxDQUFM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ZU0sV0FBZixDQUEyQjtBQUFDQyxzQkFBYyxFQUFFakI7QUFBakIsT0FBM0I7QUFDSDtBQUNKO0FBQ0osQ0FSRDtBQVVBakUsTUFBTSxDQUFDc0IsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQ3hELEVBQUQsRUFBUTtBQUNyQ2tHLFNBQU8sR0FBRyxFQUFWO0FBQ0gsQ0FGRDtBQUlBaEUsTUFBTSxDQUFDc0IsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsVUFBQ3hELEVBQUQsRUFBUTtBQUN6Q2dHLFdBQVMsQ0FBQ3FCLGVBQVYsQ0FBMEJySCxFQUExQjtBQUNILENBRkQsRTs7Ozs7Ozs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrRzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDRHOzs7Ozs7Ozs7OztBQ25CQSx1QyIsImZpbGUiOiIuL2FwcC9qcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaW1lbnNpb24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY29sb3JIb2xkID0gODtcbiAgICAgICAgdGhpcy5pbWdEYXRhID0gW107XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMudG9wID0gMDtcbiAgICAgICAgdGhpcy5ib3R0b20gPSAwO1xuICAgICAgICB0aGlzLmxlZnQgPSAwO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aCA9IDA7XG4gICAgICAgIHRoaXMuc2NyZWVuSGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5kZWJvdW5jZVVwZGF0ZSA9IHtcbiAgICAgICAgICAgIHRpbWVyOiAwLFxuICAgICAgICAgICAgcmFuZ2VYOiAwLFxuICAgICAgICAgICAgcmFuZ2VZOiAwLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1pZENvbG9yID0ge3I6MjU1LCBnOjI1NSwgYjoyNTUsIGE6MjU1fTtcbiAgICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJqcy1kaW1lbnNpb25cIiBzdHlsZT1cImxlZnQ6IDBweDsgdG9wOiAwcHg7XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwieCBqcy1kaW1lbnNpb25fX2F4aXNcIiBzdHlsZT1cImxlZnQ6IDBweDsgd2lkdGg6IDBweDtcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5IGpzLWRpbWVuc2lvbl9fYXhpc1wiIHN0eWxlPVwidG9wOiAwcHg7IGhlaWdodDogMHB4O1wiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImpzLWRpbWVuc2lvbl9fdG9vbHRpcFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRpbWVuc2lvbl9fbm9jdXJzb3JcIj48L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuXG4gICAgICAgIHRoaXMubm9kZXMgPSB7XG4gICAgICAgICAgICBwb2ludDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWRpbWVuc2lvbicpLFxuICAgICAgICAgICAgeDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWRpbWVuc2lvbl9fYXhpcy54JyksXG4gICAgICAgICAgICB5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZGltZW5zaW9uX19heGlzLnknKSxcbiAgICAgICAgICAgIHRvb2x0aXA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1kaW1lbnNpb25fX3Rvb2x0aXAnKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmltZ0RhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aCA9IDA7XG4gICAgICAgIHRoaXMuc2NyZWVuSGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5kZWJvdW5jZVVwZGF0ZSA9IHtcbiAgICAgICAgICAgIHRpbWVyOiAwLFxuICAgICAgICAgICAgcmFuZ2VYOiAwLFxuICAgICAgICAgICAgcmFuZ2VZOiAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubm9kZXMudG9vbHRpcC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5ub2Rlcy5wb2ludC5jbGFzc0xpc3QucmVtb3ZlKCdvbicpO1xuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlTW92ZShldikge1xuICAgICAgICB0aGlzLnggPSBldi5jbGllbnRYO1xuICAgICAgICB0aGlzLnkgPSBldi5jbGllbnRZO1xuXG4gICAgICAgIGlmICh0aGlzLmRlYm91bmNlVXBkYXRlLnRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVVwZGF0ZS50aW1lcik7XG4gICAgICAgICAgICB0aGlzLmRlYm91bmNlVXBkYXRlLnRpbWVyID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmltZ0RhdGEgJiYgdGhpcy5pbWdEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGV2LmNsaWVudFggPiAodGhpcy5kZWJvdW5jZVVwZGF0ZS5yYW5nZVggKyA1KSB8fFxuICAgICAgICAgICAgICAgIGV2LmNsaWVudFggPCAodGhpcy5kZWJvdW5jZVVwZGF0ZS5yYW5nZVggLSA1KSB8fFxuICAgICAgICAgICAgICAgIGV2LmNsaWVudFkgPiAodGhpcy5kZWJvdW5jZVVwZGF0ZS5yYW5nZVkgKyA1KSB8fFxuICAgICAgICAgICAgICAgIGV2LmNsaWVudFkgPCAodGhpcy5kZWJvdW5jZVVwZGF0ZS5yYW5nZVkgLSA1KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWJvdW5jZVVwZGF0ZS50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0sIDUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlVXBkYXRlLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZGVib3VuY2VVcGRhdGUucmFuZ2VYID0gdGhpcy54O1xuICAgICAgICB0aGlzLmRlYm91bmNlVXBkYXRlLnJhbmdlWSA9IHRoaXMueTtcblxuICAgICAgICB0aGlzLm1lYXN1cmVBcmVhKCk7XG4gICAgICAgIHRoaXMuZHJhdyh0aGlzLmRlYm91bmNlVXBkYXRlLnJhbmdlWCwgdGhpcy5kZWJvdW5jZVVwZGF0ZS5yYW5nZVkpO1xuICAgIH1cblxuICAgIG1lYXN1cmVBcmVhKCkge1xuICAgICAgICB0aGlzLm1pZENvbG9yID0gdGhpcy5nZXRDb2xvckN1cnNvclBvaW50KCk7XG4gICAgICAgIHRoaXMucGFyc2UodGhpcy54LCB0aGlzLnksICd0b3AnKTtcbiAgICAgICAgdGhpcy5wYXJzZSh0aGlzLngsIHRoaXMueSwgJ2JvdHRvbScpO1xuICAgICAgICB0aGlzLnBhcnNlKHRoaXMueCwgdGhpcy55LCAnbGVmdCcpO1xuICAgICAgICB0aGlzLnBhcnNlKHRoaXMueCwgdGhpcy55LCAncmlnaHQnKTtcbiAgICB9XG5cbiAgICBwYXJzZSh4LCB5LCB0eXBlLCBpID0gMCwgbWF4U3RlcCA9IDUwMDApIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgICAgIHkgPSB5LTE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgIHkgPSB5KzE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICB4ID0geCsxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIHggPSB4LTE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmluQm91bmRhcmllcyh4LCB5KSA/ICgoeSAqIHRoaXMuc2NyZWVuV2lkdGggKyB4KSAqIDQpIDogLTE7XG5cbiAgICAgICAgaWYgKGxlbmd0aCA+IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBSR0JBID0ge1xuICAgICAgICAgICAgICAgIHI6IHRoaXMuaW1nRGF0YVtsZW5ndGhdLCBnOiB0aGlzLmltZ0RhdGFbbGVuZ3RoICsgMV0sIGI6IHRoaXMuaW1nRGF0YVtsZW5ndGggKyAyXSwgYTogdGhpcy5pbWdEYXRhW2xlbmd0aCArIDNdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgaXNTYW1lID0gKFxuICAgICAgICAgICAgICAgIChSR0JBLnIgPCB0aGlzLm1pZENvbG9yLnIgKyB0aGlzLmNvbG9ySG9sZCAmJiBSR0JBLnIgPiB0aGlzLm1pZENvbG9yLnIgLSB0aGlzLmNvbG9ySG9sZCkgJiZcbiAgICAgICAgICAgICAgICAoUkdCQS5nIDwgdGhpcy5taWRDb2xvci5nICsgdGhpcy5jb2xvckhvbGQgJiYgUkdCQS5nID4gdGhpcy5taWRDb2xvci5nIC0gdGhpcy5jb2xvckhvbGQpICYmXG4gICAgICAgICAgICAgICAgKFJHQkEuYiA8IHRoaXMubWlkQ29sb3IuYiArIHRoaXMuY29sb3JIb2xkICYmIFJHQkEuYiA+IHRoaXMubWlkQ29sb3IuYiAtIHRoaXMuY29sb3JIb2xkKSAmJlxuICAgICAgICAgICAgICAgIChSR0JBLmEgPCB0aGlzLm1pZENvbG9yLmEgKyB0aGlzLmNvbG9ySG9sZCAmJiBSR0JBLmEgPiB0aGlzLm1pZENvbG9yLmEgLSB0aGlzLmNvbG9ySG9sZClcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKGlzU2FtZSkge1xuICAgICAgICAgICAgICAgIGlmIChtYXhTdGVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2UoeCwgeSwgdHlwZSwgKytpLCAtLW1heFN0ZXApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzW3R5cGVdID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNbdHlwZV0gPSBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhdyhjbGllbnRYLCBjbGllbnRZKSB7XG4gICAgICAgIHRoaXMudG9wID0gdGhpcy50b3ArMTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5sZWZ0KzE7XG4gICAgICAgIHRoaXMubm9kZXMucG9pbnQuY2xhc3NMaXN0LmFkZCgnb24nKTtcbiAgICAgICAgdGhpcy5ub2Rlcy5wb2ludC5zdHlsZS50b3AgPSBjbGllbnRZICsgJ3B4JztcbiAgICAgICAgdGhpcy5ub2Rlcy5wb2ludC5zdHlsZS5sZWZ0ID0gY2xpZW50WCArICdweCc7XG4gICAgICAgIHRoaXMubm9kZXMudG9vbHRpcC5pbm5lckhUTUwgPSBgJHt0aGlzLmxlZnQgKyB0aGlzLnJpZ2h0fSB4ICR7dGhpcy50b3AgKyB0aGlzLmJvdHRvbX1gO1xuXG4gICAgICAgIHRoaXMubm9kZXMueS5zdHlsZS5tYXJnaW5Ub3AgPSAnLScgKyB0aGlzLnRvcCArICdweCc7XG4gICAgICAgIHRoaXMubm9kZXMueS5zdHlsZS5oZWlnaHQgPSB0aGlzLnRvcCArIHRoaXMuYm90dG9tICsgJ3B4JztcblxuICAgICAgICB0aGlzLm5vZGVzLnguc3R5bGUubWFyZ2luTGVmdCA9ICctJyArIHRoaXMucmlnaHQgKyAncHgnO1xuICAgICAgICB0aGlzLm5vZGVzLnguc3R5bGUud2lkdGggPSB0aGlzLmxlZnQgKyB0aGlzLnJpZ2h0ICsgJ3B4JztcblxuICAgICAgICB0aGlzLmRyYXdMaW5lcygpO1xuICAgIH1cblxuICAgIGRyYXdMaW5lcygpIHsgLy9cbiAgICB9XG5cbiAgICBwYXJzZVNjcmVlbnNob3QocG5nKSB7XG4gICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gdGhpcy5sb2FkSW1hZ2UodGhpcy5zY3JlZW5zaG90UHJvY2Vzc2VkLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHBuZztcbiAgICB9XG5cbiAgICBpbkJvdW5kYXJpZXMoeCwgeSl7XG4gICAgICAgIHJldHVybiAoeCA+PSAwICYmIHggPCB0aGlzLnNjcmVlbldpZHRoICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5zY3JlZW5IZWlnaHQpO1xuICAgIH1cblxuICAgIGdldExpZ2h0bmVzc0F0KCkgeyAvLyDQv9C+0LvRg9GH0LDQtdGCINC/0L7Qt9C40YbQuNGOINC60YPRgNGB0L7RgNCwINCyINC80LDRgdGB0LjQstC1XG4gICAgICAgIHJldHVybiB0aGlzLmluQm91bmRhcmllcyh0aGlzLngsIHRoaXMueSkgPyh0aGlzLnkgKiB0aGlzLnNjcmVlbldpZHRoICsgdGhpcy54KSA6IC0xO1xuICAgIH1cblxuICAgIHNjcmVlbnNob3RQcm9jZXNzZWQoZGF0YSkgeyAvLyDQv9C+0LvRg9GH0LDQtdGCINGB0LLQvtC50YHRgtCy0LAg0YHQutGA0LjQvdGI0L7RgtCwINC4INCy0YvQt9GL0LLQsNC10YIg0LzQtdGC0L7QtNGLINCy0YvRh9C40YHQu9C10L3QuNGPXG4gICAgICAgIHRoaXMuaW1nRGF0YSA9IG5ldyBVaW50OENsYW1wZWRBcnJheShkYXRhLmltZ0RhdGEpO1xuICAgICAgICB0aGlzLnNjcmVlbldpZHRoID0gZGF0YS53aWR0aDtcbiAgICAgICAgdGhpcy5zY3JlZW5IZWlnaHQgPSBkYXRhLmhlaWdodDtcbiAgICB9XG5cbiAgICBnZXRDb2xvckN1cnNvclBvaW50KCkgeyAvLyDQv9C+0LvRg9GH0LDQtdGCINGG0LLQtdGCINC/0LjQutGB0LXQu9GPINC/0L7QtCDQutGD0YDRgdC+0YDQvtC8XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGlnaHRuZXNzQXQoKSAqIDQ7XG4gICAgICAgIGNvbnN0IFJHQkEgPSB7XG4gICAgICAgICAgICByOiB0aGlzLmltZ0RhdGFbbGVuZ3RoXSwgZzogdGhpcy5pbWdEYXRhW2xlbmd0aCArIDFdLCBiOiB0aGlzLmltZ0RhdGFbbGVuZ3RoICsgMl0sIGE6IHRoaXMuaW1nRGF0YVtsZW5ndGggKyAzXVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBSR0JBO1xuICAgIH1cblxuICAgIGxvYWRJbWFnZShmbikge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCAmJiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIGxldCBpbWdEYXRhID0gdGhpcy5jdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpLmRhdGE7XG5cbiAgICAgICAgICAgICAgICBmbih7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpbWdEYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgaW1nRGF0YTogaW1nRGF0YS5idWZmZXIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMClcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlUnVsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFjdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLnJlc2l6ZVNpZGUgPSAnJztcbiAgICAgICAgdGhpcy5yZWN0ID0ge307XG4gICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvb2x0aXBTaXplTm9kZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvb2x0aXBQb3NOb2RlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5iaW5kKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICBjb25zdCBodG1sID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwianMtcmVjdGFuZ2xlLXJ1bGVyIHJlY3RhbmdsZS1ydWxlclwiIHN0eWxlPVwiXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwianMtcmVjdGFuZ2xlIHJlY3RhbmdsZS1ydWxlcl9fcmVjdGFuZ2xlIHVpLXJlc2l6YWJsZVwiIGRhdGEtYWN0aW9uPVwibW92ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqcy1yZWN0YW5nbGUtY2xvc2UgcmVjdGFuZ2xlLWNsb3NlXCIgZGF0YS1hY3Rpb249XCJjbG9zZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0YW5nbGUtcnVsZXJfX3Rvb2x0aXBcIiBkYXRhLWFjdGlvbj1cIm1vdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImpzLXJlY3RhbmdsZS10b29sdGlwLXNpemUgcmVjdGFuZ2xlLXRvb2x0aXBfX3NpemUgdG9vbHRpcF9fYm90dG9tXCIgZGF0YS1hY3Rpb249XCJtb3ZlXCI+NTAweDMwMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwianMtcmVjdGFuZ2xlLXRvb2x0aXAtcG9zIHJlY3RhbmdsZS10b29sdGlwX19wb3MgdG9vbHRpcF9fYm90dG9tIGhpZGVcIiBkYXRhLWFjdGlvbj1cIm1vdmVcIj41MDB4MzAwPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLXJlc2l6YWJsZS1uXCIgZGF0YS1hY3Rpb249XCJyZXNpemVcIiBkYXRhLXJlc2l6ZT1cIm5cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktcmVzaXphYmxlLXdcIiBkYXRhLWFjdGlvbj1cInJlc2l6ZVwiIGRhdGEtcmVzaXplPVwid1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1yZXNpemFibGUtc1wiIGRhdGEtYWN0aW9uPVwicmVzaXplXCIgZGF0YS1yZXNpemU9XCJzXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLXJlc2l6YWJsZS1lXCIgZGF0YS1hY3Rpb249XCJyZXNpemVcIiBkYXRhLXJlc2l6ZT1cImVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktcmVzaXphYmxlLXNlXCIgZGF0YS1hY3Rpb249XCJyZXNpemVcIiBkYXRhLXJlc2l6ZT1cInNlXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0YW5nbGUtcnVsZXJfX25vLWN1cnNvclwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuICAgIH1cblxuICAgIGdldFJ1bGVyKHRhcmdldCwgc2VsZWN0b3IpIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVyID0gdGFyZ2V0LmNsb3Nlc3QoJy5qcy1yZWN0YW5nbGUtcnVsZXInKTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdG9yID09PSAnanMtcmVjdGFuZ2xlLXJ1bGVyJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBydWxlcjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocnVsZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSAgcnVsZXIucXVlcnlTZWxlY3RvcignLicgKyBzZWxlY3Rvcik7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMubW91c2VVcC5iaW5kKHRoaXMpKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duLmJpbmQodGhpcykpXG4gICAgfVxuXG4gICAgbW91c2VEb3duKGV2KSB7XG4gICAgICAgIHRoaXMucnVsZXJOb2RlID0gdGhpcy5nZXRSdWxlcihldi50YXJnZXQsICdqcy1yZWN0YW5nbGUtcnVsZXInKTtcblxuICAgICAgICBpZiAodGhpcy5ydWxlck5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZSA9IHRoaXMucnVsZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWN0YW5nbGUnKTtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcFNpemVOb2RlID0gdGhpcy5ydWxlck5vZGUucXVlcnlTZWxlY3RvcignLmpzLXJlY3RhbmdsZS10b29sdGlwLXNpemUnKTtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcFBvc05vZGUgPSB0aGlzLnJ1bGVyTm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtcmVjdGFuZ2xlLXRvb2x0aXAtcG9zJyk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbiA9IGV2LnRhcmdldC5kYXRhc2V0Py5hY3Rpb247XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiAmJiB0aGlzLnJlY3RhbmdsZU5vZGUgJiYgdGhpcy50b29sdGlwU2l6ZU5vZGUgJiYgdGhpcy50b29sdGlwUG9zTm9kZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ3Jlc2l6ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzaXplID0gZXYudGFyZ2V0LmRhdGFzZXQ/LnJlc2l6ZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydExlZnQ6IHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRUb3A6IHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdFg6IHdpbmRvdy5zY3JvbGxYICsgKGV2LmNsaWVudFggLSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdFk6IHdpbmRvdy5zY3JvbGxZICsgKGV2LmNsaWVudFkgLSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0WDogZXYuY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0WTogZXYuY2xpZW50WSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0V2lkdGg6IHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0SGVpZ2h0OiB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZVNpZGUgPSByZXNpemUgPyByZXNpemUgOiAnJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aW9uID09PSAnbW92ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRMZWZ0OiB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VG9wOiB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRYOiB3aW5kb3cuc2Nyb2xsWCArIChldi5jbGllbnRYIC0gdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRZOiB3aW5kb3cuc2Nyb2xsWSArIChldi5jbGllbnRZIC0gdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFg6IGV2LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFk6IGV2LmNsaWVudFksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdFdpZHRoOiB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdEhlaWdodDogdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlKHRoaXMuc2hvd1Bvcy5iaW5kKHRoaXMpLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcFNpemVOb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBQb3NOb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbiA9ICcnO1xuICAgICAgICAgICAgdGhpcy5yZXNpemVTaWRlID0gJyc7XG4gICAgICAgICAgICB0aGlzLm9mZnNldFkgPSAwO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXRYID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdXNlVXAoZXYpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uICYmIHRoaXMucnVsZXJOb2RlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT09ICdjbG9zZScpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ydWxlck5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ydWxlck5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvb2x0aXAodGhpcy5yZWN0YW5nbGVOb2RlLCB0aGlzLnRvb2x0aXBTaXplTm9kZSwgdGhpcy50b29sdGlwUG9zTm9kZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlKHRoaXMuaGlkZVBvcy5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMucmVzaXplU2lkZSA9ICcnO1xuICAgICAgICB0aGlzLm9mZnNldFkgPSAwO1xuICAgICAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgIH1cblxuICAgIHNob3dQb3MoKSB7XG4gICAgICAgIHRoaXMudG9vbHRpcFBvc05vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB0aGlzLnRvb2x0aXBTaXplTm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgaGlkZVBvcygpIHtcbiAgICAgICAgdGhpcy50b29sdGlwUG9zTm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHRoaXMudG9vbHRpcFNpemVOb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBtb3VzZU1vdmUoZXYpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAnbW92ZScpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS50b3AgPSAoZXYucGFnZVkgLSB0aGlzLnJlY3Quc2hpZnRZKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUubGVmdCA9IChldi5wYWdlWCAtIHRoaXMucmVjdC5zaGlmdFgpICsgJ3B4JztcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVUb29sdGlwKHRoaXMucmVjdGFuZ2xlTm9kZSwgdGhpcy50b29sdGlwU2l6ZU5vZGUsIHRoaXMudG9vbHRpcFBvc05vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aW9uID09PSAncmVzaXplJykge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzaXplU2lkZSA9PT0gJ3NlJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS53aWR0aCA9ICh0aGlzLnJlY3Quc2hpZnRXaWR0aCArIGV2LmNsaWVudFggLSB0aGlzLnJlY3Quc3RhcnRYKSArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLmhlaWdodCA9ICh0aGlzLnJlY3Quc2hpZnRIZWlnaHQgKyBldi5jbGllbnRZIC0gdGhpcy5yZWN0LnN0YXJ0WSkgKyAncHgnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc2l6ZVNpZGUgPT09ICdlJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS53aWR0aCA9ICh0aGlzLnJlY3Quc2hpZnRXaWR0aCArIGV2LmNsaWVudFggLSB0aGlzLnJlY3Quc3RhcnRYKSArICdweCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzaXplU2lkZSA9PT0gJ3MnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLmhlaWdodCA9ICh0aGlzLnJlY3Quc2hpZnRIZWlnaHQgKyBldi5jbGllbnRZIC0gdGhpcy5yZWN0LnN0YXJ0WSkgKyAncHgnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc2l6ZVNpZGUgPT09ICd3Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xlZnQgPSAoZXYucGFnZVggLSB0aGlzLnJlY3Quc2hpZnRYKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUubGVmdCA9IG5ld0xlZnQgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS53aWR0aCA9ICh0aGlzLnJlY3Quc2hpZnRXaWR0aCArICh0aGlzLnJlY3Quc3RhcnRMZWZ0IC0gbmV3TGVmdCkpICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNpemVTaWRlID09PSAnbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUb3AgPSAoZXYucGFnZVkgLSB0aGlzLnJlY3Quc2hpZnRZKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUudG9wID0gbmV3VG9wICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUuaGVpZ2h0ID0gKHRoaXMucmVjdC5zaGlmdEhlaWdodCArICh0aGlzLnJlY3Quc3RhcnRUb3AgLSBuZXdUb3ApKSArICdweCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9vbHRpcCh0aGlzLnJlY3RhbmdsZU5vZGUsIHRoaXMudG9vbHRpcFNpemVOb2RlLCB0aGlzLnRvb2x0aXBQb3NOb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtleURvd24oZXYpIHtcbiAgICAgICAgaWYgKHRoaXMucmVjdGFuZ2xlTm9kZSkge1xuICAgICAgICAgICAgaWYgKGV2LmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUudG9wID0gK3RoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS50b3BcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3B4JywgJycpIC0gMSArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UG9zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb29sdGlwKHRoaXMucmVjdGFuZ2xlTm9kZSwgdGhpcy50b29sdGlwU2l6ZU5vZGUsIHRoaXMudG9vbHRpcFBvc05vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2UodGhpcy5oaWRlUG9zLmJpbmQodGhpcyksIDUwMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS50b3AgPSArdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLnRvcFxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgncHgnLCAnJykgKyAxICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvb2x0aXAodGhpcy5yZWN0YW5nbGVOb2RlLCB0aGlzLnRvb2x0aXBTaXplTm9kZSwgdGhpcy50b29sdGlwUG9zTm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWJvdW5jZSh0aGlzLmhpZGVQb3MuYmluZCh0aGlzKSwgNTAwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXYua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLmxlZnQgPSArdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLmxlZnRcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3B4JywgJycpIC0gMSArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UG9zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb29sdGlwKHRoaXMucmVjdGFuZ2xlTm9kZSwgdGhpcy50b29sdGlwU2l6ZU5vZGUsIHRoaXMudG9vbHRpcFBvc05vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2UodGhpcy5oaWRlUG9zLmJpbmQodGhpcyksIDUwMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2LmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUubGVmdCA9ICt0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUubGVmdFxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgncHgnLCAnJykgKyAxICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvb2x0aXAodGhpcy5yZWN0YW5nbGVOb2RlLCB0aGlzLnRvb2x0aXBTaXplTm9kZSwgdGhpcy50b29sdGlwUG9zTm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWJvdW5jZSh0aGlzLmhpZGVQb3MuYmluZCh0aGlzKSwgNTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVRvb2x0aXAocmVjdGFuZ2xlLCB0b29sdGlwU2l6ZSwgdG9vbHRpcFBvcykge1xuICAgICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIHRvb2x0aXBTaXplLmlubmVySFRNTCA9IHJlY3Qud2lkdGggKyAneCcgKyByZWN0LmhlaWdodDtcbiAgICAgICAgdG9vbHRpcFBvcy5pbm5lckhUTUwgPSByZWN0LmxlZnQgKyAneCcgKyByZWN0LnRvcDtcbiAgICB9XG5cbiAgICBkZWJvdW5jZShmdW5jLCBkZWxheSkge1xuICAgICAgICBpZiAodGhpcy5kZWJJZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGViSWQpO1xuICAgICAgICAgICAgdGhpcy5kZWJJZCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlYklkID0gc2V0VGltZW91dChmdW5jLCBkZWxheSk7XG4gICAgfVxufSIsImltcG9ydCBEaW1lbnNpb24gZnJvbSAnLi9jbGFzc2VzL0RpbWVuc2lvbic7XG5pbXBvcnQgUmVjdGFuZ2xlUnVsZXIgZnJvbSBcIi4vY2xhc3Nlcy9SZWN0YW5nbGVSdWxlclwiO1xuXG5jb25zdCBkaW1lbnNpb24gPSBuZXcgRGltZW5zaW9uKCk7XG5jb25zdCByZWN0YW5nbGVSdWxlciA9IG5ldyBSZWN0YW5nbGVSdWxlcigpO1xuXG5sZXQgc2V0S2V5cyA9IFtdO1xubGV0IGFjdGl2ZSA9ICcnO1xuY29uc3QgcXVpY2tLZXlzID0ge1xuICAgICdBbHRMZWZ0ICsgS2V5Wic6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gJ2RpbWVuc2lvbnMnO1xuXG4gICAgICAgIGlmIChhY3RpdmUgPT09IGtleSkge1xuICAgICAgICAgICAgYWN0aXZlID0gJyc7XG4gICAgICAgICAgICBkaW1lbnNpb24uc3RvcCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGl2ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGFjdGl2ZSA9IGtleTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAnQWx0TGVmdCArIEtleVgnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlY3RhbmdsZVJ1bGVyLmNyZWF0ZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbn07XG5jb25zdCBhY3Rpb25zID0ge1xuICAgICd0YWtlU2NyZWVuc2hvdCc6IGZ1bmN0aW9uIChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICBkaW1lbnNpb24ucGFyc2VTY3JlZW5zaG90KHJlcXVlc3Quc2NyZWVuUG5nKTtcbiAgICB9LFxufVxuXG4vLyByZWNlaXZlV29ya2VyTWVzc2FnZVxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKFxuICAgIGZ1bmN0aW9uKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXF1ZXN0LmFjdGlvbiAmJiB0eXBlb2YgYWN0aW9uc1sgcmVxdWVzdC5hY3Rpb24gXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYWN0aW9uc1sgcmVxdWVzdC5hY3Rpb24gXShyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldikgPT4ge1xuICAgIHNldEtleXMucHVzaChldi5jb2RlKTtcblxuICAgIGlmIChzZXRLZXlzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgcXVpY2tLZXlzWyBzZXRLZXlzLmpvaW4oJyArICcpIF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKHF1aWNrS2V5c1sgc2V0S2V5cy5qb2luKCcgKyAnKSBdKCkpIHtcbiAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtvcHRpb25BY3RpdmF0ZTogYWN0aXZlfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2KSA9PiB7XG4gICAgc2V0S2V5cyA9IFtdO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXYpID0+IHtcbiAgICBkaW1lbnNpb24uaGFuZGxlTW91c2VNb3ZlKGV2KTtcbn0pOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==