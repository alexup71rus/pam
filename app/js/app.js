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
      var maxStep = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1000;

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
              shiftX: ev.clientX - this.rectangleNode.getBoundingClientRect().left,
              shiftY: ev.clientY - this.rectangleNode.getBoundingClientRect().top,
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
              shiftX: ev.clientX - this.rectangleNode.getBoundingClientRect().left,
              shiftY: ev.clientY - this.rectangleNode.getBoundingClientRect().top,
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
          this.debounce(this.hidePos.bind(this), 500);
        } else if (ev.key === 'ArrowDown') {
          ev.preventDefault();
          ev.stopPropagation();
          this.rectangleNode.style.top = +this.rectangleNode.style.top.replace('px', '') + 1 + 'px';
          this.showPos();
          this.debounce(this.hidePos.bind(this), 500);
        } else if (ev.key === 'ArrowLeft') {
          ev.preventDefault();
          ev.stopPropagation();
          this.rectangleNode.style.left = +this.rectangleNode.style.left.replace('px', '') - 1 + 'px';
          this.showPos();
          this.debounce(this.hidePos.bind(this), 500);
        } else if (ev.key === 'ArrowRight') {
          ev.preventDefault();
          ev.stopPropagation();
          this.rectangleNode.style.left = +this.rectangleNode.style.left.replace('px', '') + 1 + 'px';
          this.showPos();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9EaW1lbnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvY2xhc3Nlcy9SZWN0YW5nbGVSdWxlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJEaW1lbnNpb24iLCJpbWFnZSIsIkltYWdlIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29sb3JIb2xkIiwiaW1nRGF0YSIsIngiLCJ5IiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJkZWJvdW5jZVVwZGF0ZSIsInRpbWVyIiwicmFuZ2VYIiwicmFuZ2VZIiwibWlkQ29sb3IiLCJyIiwiZyIsImIiLCJhIiwiY3JlYXRlIiwiaHRtbCIsImJvZHkiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJub2RlcyIsInBvaW50IiwicXVlcnlTZWxlY3RvciIsInRvb2x0aXAiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJldiIsImNsaWVudFgiLCJjbGllbnRZIiwiY2xlYXJUaW1lb3V0IiwibGVuZ3RoIiwic2V0VGltZW91dCIsInVwZGF0ZSIsIm1lYXN1cmVBcmVhIiwiZHJhdyIsImdldENvbG9yQ3Vyc29yUG9pbnQiLCJwYXJzZSIsInR5cGUiLCJpIiwibWF4U3RlcCIsImluQm91bmRhcmllcyIsIlJHQkEiLCJpc1NhbWUiLCJhZGQiLCJzdHlsZSIsIm1hcmdpblRvcCIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImRyYXdMaW5lcyIsInBuZyIsIm9ubG9hZCIsImxvYWRJbWFnZSIsInNjcmVlbnNob3RQcm9jZXNzZWQiLCJiaW5kIiwic3JjIiwiZGF0YSIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiZ2V0TGlnaHRuZXNzQXQiLCJmbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJnZXRJbWFnZURhdGEiLCJidWZmZXIiLCJSZWN0YW5nbGVSdWxlciIsImFjdGlvbiIsInJlc2l6ZVNpZGUiLCJyZWN0IiwicmVjdGFuZ2xlTm9kZSIsInRvb2x0aXBTaXplTm9kZSIsInRvb2x0aXBQb3NOb2RlIiwidGFyZ2V0Iiwic2VsZWN0b3IiLCJjb250YWluZXIiLCJjb250YWlucyIsInJ1bGVyIiwiY2xvc2VzdCIsInJlc3VsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3VzZURvd24iLCJtb3VzZVVwIiwibW91c2VNb3ZlIiwia2V5RG93biIsInJ1bGVyTm9kZSIsImdldFJ1bGVyIiwiZGF0YXNldCIsInJlc2l6ZSIsInN0YXJ0TGVmdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInN0YXJ0VG9wIiwic2hpZnRYIiwic2hpZnRZIiwic3RhcnRYIiwic3RhcnRZIiwic2hpZnRXaWR0aCIsInNoaWZ0SGVpZ2h0IiwiZGVib3VuY2UiLCJzaG93UG9zIiwib2Zmc2V0WSIsIm9mZnNldFgiLCJ1cGRhdGVUb29sdGlwIiwiaGlkZVBvcyIsInBhZ2VZIiwicGFnZVgiLCJuZXdMZWZ0IiwibmV3VG9wIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyZXBsYWNlIiwicmVjdGFuZ2xlIiwidG9vbHRpcFNpemUiLCJ0b29sdGlwUG9zIiwiZnVuYyIsImRlbGF5IiwiZGViSWQiLCJkaW1lbnNpb24iLCJyZWN0YW5nbGVSdWxlciIsInNldEtleXMiLCJhY3RpdmUiLCJxdWlja0tleXMiLCJzdG9wIiwiYWN0aW9ucyIsInJlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJwYXJzZVNjcmVlbnNob3QiLCJzY3JlZW5QbmciLCJjaHJvbWUiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJwdXNoIiwiY29kZSIsImpvaW4iLCJzZW5kTWVzc2FnZSIsIm9wdGlvbkFjdGl2YXRlIiwiaGFuZGxlTW91c2VNb3ZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEZxQkEsUztBQUNqQix1QkFBYztBQUFBOztBQUNWLFNBQUtDLEtBQUwsR0FBYSxJQUFJQyxLQUFKLEVBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFL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QTs7QUFFQSw0Rzs7Ozs7Ozs7Ozs7QUNuQkEsdUMiLCJmaWxlIjoiLi9hcHAvanMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGltZW5zaW9uIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmNvbG9ySG9sZCA9IDg7XG4gICAgICAgIHRoaXMuaW1nRGF0YSA9IFtdO1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLnRvcCA9IDA7XG4gICAgICAgIHRoaXMuYm90dG9tID0gMDtcbiAgICAgICAgdGhpcy5sZWZ0ID0gMDtcbiAgICAgICAgdGhpcy5yaWdodCA9IDA7XG4gICAgICAgIHRoaXMuc2NyZWVuV2lkdGggPSAwO1xuICAgICAgICB0aGlzLnNjcmVlbkhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuZGVib3VuY2VVcGRhdGUgPSB7XG4gICAgICAgICAgICB0aW1lcjogMCxcbiAgICAgICAgICAgIHJhbmdlWDogMCxcbiAgICAgICAgICAgIHJhbmdlWTogMCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5taWRDb2xvciA9IHtyOjI1NSwgZzoyNTUsIGI6MjU1LCBhOjI1NX07XG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICBjb25zdCBodG1sID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwianMtZGltZW5zaW9uXCIgc3R5bGU9XCJsZWZ0OiAwcHg7IHRvcDogMHB4O1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIngganMtZGltZW5zaW9uX19heGlzXCIgc3R5bGU9XCJsZWZ0OiAwcHg7IHdpZHRoOiAwcHg7XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwieSBqcy1kaW1lbnNpb25fX2F4aXNcIiBzdHlsZT1cInRvcDogMHB4OyBoZWlnaHQ6IDBweDtcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqcy1kaW1lbnNpb25fX3Rvb2x0aXBcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaW1lbnNpb25fX25vY3Vyc29yXCI+PC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sKTtcblxuICAgICAgICB0aGlzLm5vZGVzID0ge1xuICAgICAgICAgICAgcG9pbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1kaW1lbnNpb24nKSxcbiAgICAgICAgICAgIHg6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1kaW1lbnNpb25fX2F4aXMueCcpLFxuICAgICAgICAgICAgeTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWRpbWVuc2lvbl9fYXhpcy55JyksXG4gICAgICAgICAgICB0b29sdGlwOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZGltZW5zaW9uX190b29sdGlwJyksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5pbWdEYXRhID0gW107XG4gICAgICAgIHRoaXMuc2NyZWVuV2lkdGggPSAwO1xuICAgICAgICB0aGlzLnNjcmVlbkhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuZGVib3VuY2VVcGRhdGUgPSB7XG4gICAgICAgICAgICB0aW1lcjogMCxcbiAgICAgICAgICAgIHJhbmdlWDogMCxcbiAgICAgICAgICAgIHJhbmdlWTogMCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm5vZGVzLnRvb2x0aXAuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMubm9kZXMucG9pbnQuY2xhc3NMaXN0LnJlbW92ZSgnb24nKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU1vdmUoZXYpIHtcbiAgICAgICAgdGhpcy54ID0gZXYuY2xpZW50WDtcbiAgICAgICAgdGhpcy55ID0gZXYuY2xpZW50WTtcblxuICAgICAgICBpZiAodGhpcy5kZWJvdW5jZVVwZGF0ZS50aW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VVcGRhdGUudGltZXIpO1xuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZVVwZGF0ZS50aW1lciA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbWdEYXRhICYmIHRoaXMuaW1nRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBldi5jbGllbnRYID4gKHRoaXMuZGVib3VuY2VVcGRhdGUucmFuZ2VYICsgNSkgfHxcbiAgICAgICAgICAgICAgICBldi5jbGllbnRYIDwgKHRoaXMuZGVib3VuY2VVcGRhdGUucmFuZ2VYIC0gNSkgfHxcbiAgICAgICAgICAgICAgICBldi5jbGllbnRZID4gKHRoaXMuZGVib3VuY2VVcGRhdGUucmFuZ2VZICsgNSkgfHxcbiAgICAgICAgICAgICAgICBldi5jbGllbnRZIDwgKHRoaXMuZGVib3VuY2VVcGRhdGUucmFuZ2VZIC0gNSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2VVcGRhdGUudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9LCA1KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWJvdW5jZVVwZGF0ZS50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmRlYm91bmNlVXBkYXRlLnJhbmdlWCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy5kZWJvdW5jZVVwZGF0ZS5yYW5nZVkgPSB0aGlzLnk7XG5cbiAgICAgICAgdGhpcy5tZWFzdXJlQXJlYSgpO1xuICAgICAgICB0aGlzLmRyYXcodGhpcy5kZWJvdW5jZVVwZGF0ZS5yYW5nZVgsIHRoaXMuZGVib3VuY2VVcGRhdGUucmFuZ2VZKTtcbiAgICB9XG5cbiAgICBtZWFzdXJlQXJlYSgpIHtcbiAgICAgICAgdGhpcy5taWRDb2xvciA9IHRoaXMuZ2V0Q29sb3JDdXJzb3JQb2ludCgpO1xuICAgICAgICB0aGlzLnBhcnNlKHRoaXMueCwgdGhpcy55LCAndG9wJyk7XG4gICAgICAgIHRoaXMucGFyc2UodGhpcy54LCB0aGlzLnksICdib3R0b20nKTtcbiAgICAgICAgdGhpcy5wYXJzZSh0aGlzLngsIHRoaXMueSwgJ2xlZnQnKTtcbiAgICAgICAgdGhpcy5wYXJzZSh0aGlzLngsIHRoaXMueSwgJ3JpZ2h0Jyk7XG4gICAgfVxuXG4gICAgcGFyc2UoeCwgeSwgdHlwZSwgaSA9IDAsIG1heFN0ZXAgPSAxMDAwKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICB5ID0geS0xO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgICB5ID0geSsxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgeCA9IHgrMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICB4ID0geC0xO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5pbkJvdW5kYXJpZXMoeCwgeSkgPyAoKHkgKiB0aGlzLnNjcmVlbldpZHRoICsgeCkgKiA0KSA6IC0xO1xuXG4gICAgICAgIGlmIChsZW5ndGggPiAtMSkge1xuICAgICAgICAgICAgY29uc3QgUkdCQSA9IHtcbiAgICAgICAgICAgICAgICByOiB0aGlzLmltZ0RhdGFbbGVuZ3RoXSwgZzogdGhpcy5pbWdEYXRhW2xlbmd0aCArIDFdLCBiOiB0aGlzLmltZ0RhdGFbbGVuZ3RoICsgMl0sIGE6IHRoaXMuaW1nRGF0YVtsZW5ndGggKyAzXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGlzU2FtZSA9IChcbiAgICAgICAgICAgICAgICAoUkdCQS5yIDwgdGhpcy5taWRDb2xvci5yICsgdGhpcy5jb2xvckhvbGQgJiYgUkdCQS5yID4gdGhpcy5taWRDb2xvci5yIC0gdGhpcy5jb2xvckhvbGQpICYmXG4gICAgICAgICAgICAgICAgKFJHQkEuZyA8IHRoaXMubWlkQ29sb3IuZyArIHRoaXMuY29sb3JIb2xkICYmIFJHQkEuZyA+IHRoaXMubWlkQ29sb3IuZyAtIHRoaXMuY29sb3JIb2xkKSAmJlxuICAgICAgICAgICAgICAgIChSR0JBLmIgPCB0aGlzLm1pZENvbG9yLmIgKyB0aGlzLmNvbG9ySG9sZCAmJiBSR0JBLmIgPiB0aGlzLm1pZENvbG9yLmIgLSB0aGlzLmNvbG9ySG9sZCkgJiZcbiAgICAgICAgICAgICAgICAoUkdCQS5hIDwgdGhpcy5taWRDb2xvci5hICsgdGhpcy5jb2xvckhvbGQgJiYgUkdCQS5hID4gdGhpcy5taWRDb2xvci5hIC0gdGhpcy5jb2xvckhvbGQpXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChpc1NhbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4U3RlcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlKHgsIHksIHR5cGUsICsraSwgLS1tYXhTdGVwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpc1t0eXBlXSA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzW3R5cGVdID0gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXcoY2xpZW50WCwgY2xpZW50WSkge1xuICAgICAgICB0aGlzLnRvcCA9IHRoaXMudG9wKzE7XG4gICAgICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdCsxO1xuICAgICAgICB0aGlzLm5vZGVzLnBvaW50LmNsYXNzTGlzdC5hZGQoJ29uJyk7XG4gICAgICAgIHRoaXMubm9kZXMucG9pbnQuc3R5bGUudG9wID0gY2xpZW50WSArICdweCc7XG4gICAgICAgIHRoaXMubm9kZXMucG9pbnQuc3R5bGUubGVmdCA9IGNsaWVudFggKyAncHgnO1xuICAgICAgICB0aGlzLm5vZGVzLnRvb2x0aXAuaW5uZXJIVE1MID0gYCR7dGhpcy5sZWZ0ICsgdGhpcy5yaWdodH0geCAke3RoaXMudG9wICsgdGhpcy5ib3R0b219YDtcblxuICAgICAgICB0aGlzLm5vZGVzLnkuc3R5bGUubWFyZ2luVG9wID0gJy0nICsgdGhpcy50b3AgKyAncHgnO1xuICAgICAgICB0aGlzLm5vZGVzLnkuc3R5bGUuaGVpZ2h0ID0gdGhpcy50b3AgKyB0aGlzLmJvdHRvbSArICdweCc7XG5cbiAgICAgICAgdGhpcy5ub2Rlcy54LnN0eWxlLm1hcmdpbkxlZnQgPSAnLScgKyB0aGlzLnJpZ2h0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5ub2Rlcy54LnN0eWxlLndpZHRoID0gdGhpcy5sZWZ0ICsgdGhpcy5yaWdodCArICdweCc7XG5cbiAgICAgICAgdGhpcy5kcmF3TGluZXMoKTtcbiAgICB9XG5cbiAgICBkcmF3TGluZXMoKSB7IC8vXG4gICAgfVxuXG4gICAgcGFyc2VTY3JlZW5zaG90KHBuZykge1xuICAgICAgICB0aGlzLmltYWdlLm9ubG9hZCA9IHRoaXMubG9hZEltYWdlKHRoaXMuc2NyZWVuc2hvdFByb2Nlc3NlZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBwbmc7XG4gICAgfVxuXG4gICAgaW5Cb3VuZGFyaWVzKHgsIHkpe1xuICAgICAgICByZXR1cm4gKHggPj0gMCAmJiB4IDwgdGhpcy5zY3JlZW5XaWR0aCAmJiB5ID49IDAgJiYgeSA8IHRoaXMuc2NyZWVuSGVpZ2h0KTtcbiAgICB9XG5cbiAgICBnZXRMaWdodG5lc3NBdCgpIHsgLy8g0L/QvtC70YPRh9Cw0LXRgiDQv9C+0LfQuNGG0LjRjiDQutGD0YDRgdC+0YDQsCDQsiDQvNCw0YHRgdC40LLQtVxuICAgICAgICByZXR1cm4gdGhpcy5pbkJvdW5kYXJpZXModGhpcy54LCB0aGlzLnkpID8odGhpcy55ICogdGhpcy5zY3JlZW5XaWR0aCArIHRoaXMueCkgOiAtMTtcbiAgICB9XG5cbiAgICBzY3JlZW5zaG90UHJvY2Vzc2VkKGRhdGEpIHsgLy8g0L/QvtC70YPRh9Cw0LXRgiDRgdCy0L7QudGB0YLQstCwINGB0LrRgNC40L3RiNC+0YLQsCDQuCDQstGL0LfRi9Cy0LDQtdGCINC80LXRgtC+0LTRiyDQstGL0YfQuNGB0LvQtdC90LjRj1xuICAgICAgICB0aGlzLmltZ0RhdGEgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoZGF0YS5pbWdEYXRhKTtcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aCA9IGRhdGEud2lkdGg7XG4gICAgICAgIHRoaXMuc2NyZWVuSGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0Q29sb3JDdXJzb3JQb2ludCgpIHsgLy8g0L/QvtC70YPRh9Cw0LXRgiDRhtCy0LXRgiDQv9C40LrRgdC10LvRjyDQv9C+0LQg0LrRg9GA0YHQvtGA0L7QvFxuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExpZ2h0bmVzc0F0KCkgKiA0O1xuICAgICAgICBjb25zdCBSR0JBID0ge1xuICAgICAgICAgICAgcjogdGhpcy5pbWdEYXRhW2xlbmd0aF0sIGc6IHRoaXMuaW1nRGF0YVtsZW5ndGggKyAxXSwgYjogdGhpcy5pbWdEYXRhW2xlbmd0aCArIDJdLCBhOiB0aGlzLmltZ0RhdGFbbGVuZ3RoICsgM11cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gUkdCQTtcbiAgICB9XG5cbiAgICBsb2FkSW1hZ2UoZm4pIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggJiYgd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgaW1nRGF0YSA9IHRoaXMuY3R4LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KS5kYXRhO1xuXG4gICAgICAgICAgICAgICAgZm4oe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW1nRGF0YScsXG4gICAgICAgICAgICAgICAgICAgIGltZ0RhdGE6IGltZ0RhdGEuYnVmZmVyLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5jYW52YXMud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5jYW52YXMuaGVpZ2h0XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZVJ1bGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy5yZXNpemVTaWRlID0gJyc7XG4gICAgICAgIHRoaXMucmVjdCA9IHt9O1xuICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b29sdGlwU2l6ZU5vZGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b29sdGlwUG9zTm9kZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImpzLXJlY3RhbmdsZS1ydWxlciByZWN0YW5nbGUtcnVsZXJcIiBzdHlsZT1cIlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImpzLXJlY3RhbmdsZSByZWN0YW5nbGUtcnVsZXJfX3JlY3RhbmdsZSB1aS1yZXNpemFibGVcIiBkYXRhLWFjdGlvbj1cIm1vdmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwianMtcmVjdGFuZ2xlLWNsb3NlIHJlY3RhbmdsZS1jbG9zZVwiIGRhdGEtYWN0aW9uPVwiY2xvc2VcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjdGFuZ2xlLXJ1bGVyX190b29sdGlwXCIgZGF0YS1hY3Rpb249XCJtb3ZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqcy1yZWN0YW5nbGUtdG9vbHRpcC1zaXplIHJlY3RhbmdsZS10b29sdGlwX19zaXplIHRvb2x0aXBfX2JvdHRvbVwiIGRhdGEtYWN0aW9uPVwibW92ZVwiPjUwMHgzMDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImpzLXJlY3RhbmdsZS10b29sdGlwLXBvcyByZWN0YW5nbGUtdG9vbHRpcF9fcG9zIHRvb2x0aXBfX2JvdHRvbSBoaWRlXCIgZGF0YS1hY3Rpb249XCJtb3ZlXCI+NTAweDMwMDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1yZXNpemFibGUtblwiIGRhdGEtYWN0aW9uPVwicmVzaXplXCIgZGF0YS1yZXNpemU9XCJuXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLXJlc2l6YWJsZS13XCIgZGF0YS1hY3Rpb249XCJyZXNpemVcIiBkYXRhLXJlc2l6ZT1cIndcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWktcmVzaXphYmxlLXNcIiBkYXRhLWFjdGlvbj1cInJlc2l6ZVwiIGRhdGEtcmVzaXplPVwic1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1yZXNpemFibGUtZVwiIGRhdGEtYWN0aW9uPVwicmVzaXplXCIgZGF0YS1yZXNpemU9XCJlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLXJlc2l6YWJsZS1zZVwiIGRhdGEtYWN0aW9uPVwicmVzaXplXCIgZGF0YS1yZXNpemU9XCJzZVwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjdGFuZ2xlLXJ1bGVyX19uby1jdXJzb3JcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sKTtcbiAgICB9XG5cbiAgICBnZXRSdWxlcih0YXJnZXQsIHNlbGVjdG9yKSB7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBydWxlciA9IHRhcmdldC5jbG9zZXN0KCcuanMtcmVjdGFuZ2xlLXJ1bGVyJyk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RvciA9PT0gJ2pzLXJlY3RhbmdsZS1ydWxlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcnVsZXI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJ1bGVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gIHJ1bGVyLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc2VsZWN0b3IpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duLmJpbmQodGhpcykpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bi5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIG1vdXNlRG93bihldikge1xuICAgICAgICB0aGlzLnJ1bGVyTm9kZSA9IHRoaXMuZ2V0UnVsZXIoZXYudGFyZ2V0LCAnanMtcmVjdGFuZ2xlLXJ1bGVyJyk7XG5cbiAgICAgICAgaWYgKHRoaXMucnVsZXJOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUgPSB0aGlzLnJ1bGVyTm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtcmVjdGFuZ2xlJyk7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBTaXplTm9kZSA9IHRoaXMucnVsZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWN0YW5nbGUtdG9vbHRpcC1zaXplJyk7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBQb3NOb2RlID0gdGhpcy5ydWxlck5vZGUucXVlcnlTZWxlY3RvcignLmpzLXJlY3RhbmdsZS10b29sdGlwLXBvcycpO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBldi50YXJnZXQuZGF0YXNldD8uYWN0aW9uO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gJiYgdGhpcy5yZWN0YW5nbGVOb2RlICYmIHRoaXMudG9vbHRpcFNpemVOb2RlICYmIHRoaXMudG9vbHRpcFBvc05vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT09ICdyZXNpemUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc2l6ZSA9IGV2LnRhcmdldC5kYXRhc2V0Py5yZXNpemU7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRMZWZ0OiB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VG9wOiB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRYOiBldi5jbGllbnRYIC0gdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdFk6IGV2LmNsaWVudFkgLSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRYOiBldi5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRZOiBldi5jbGllbnRZLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRXaWR0aDogdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRIZWlnaHQ6IHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzaXplU2lkZSA9IHJlc2l6ZSA/IHJlc2l6ZSA6ICcnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpb24gPT09ICdtb3ZlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydExlZnQ6IHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRUb3A6IHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdFg6IGV2LmNsaWVudFggLSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0WTogZXYuY2xpZW50WSAtIHRoaXMucmVjdGFuZ2xlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFg6IGV2LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFk6IGV2LmNsaWVudFksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdFdpZHRoOiB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdEhlaWdodDogdGhpcy5yZWN0YW5nbGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlKHRoaXMuc2hvd1Bvcy5iaW5kKHRoaXMpLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcFNpemVOb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXBQb3NOb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbiA9ICcnO1xuICAgICAgICAgICAgdGhpcy5yZXNpemVTaWRlID0gJyc7XG4gICAgICAgICAgICB0aGlzLm9mZnNldFkgPSAwO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXRYID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdXNlVXAoZXYpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uICYmIHRoaXMucnVsZXJOb2RlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT09ICdjbG9zZScpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ydWxlck5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ydWxlck5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvb2x0aXAodGhpcy5yZWN0YW5nbGVOb2RlLCB0aGlzLnRvb2x0aXBTaXplTm9kZSwgdGhpcy50b29sdGlwUG9zTm9kZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlKHRoaXMuaGlkZVBvcy5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMucmVzaXplU2lkZSA9ICcnO1xuICAgICAgICB0aGlzLm9mZnNldFkgPSAwO1xuICAgICAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgIH1cblxuICAgIHNob3dQb3MoKSB7XG4gICAgICAgIHRoaXMudG9vbHRpcFBvc05vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB0aGlzLnRvb2x0aXBTaXplTm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgaGlkZVBvcygpIHtcbiAgICAgICAgdGhpcy50b29sdGlwUG9zTm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHRoaXMudG9vbHRpcFNpemVOb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBtb3VzZU1vdmUoZXYpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAnbW92ZScpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLnJlY3RhbmdsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS50b3AgPSAoZXYucGFnZVkgLSB0aGlzLnJlY3Quc2hpZnRZKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUubGVmdCA9IChldi5wYWdlWCAtIHRoaXMucmVjdC5zaGlmdFgpICsgJ3B4JztcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVUb29sdGlwKHRoaXMucmVjdGFuZ2xlTm9kZSwgdGhpcy50b29sdGlwU2l6ZU5vZGUsIHRoaXMudG9vbHRpcFBvc05vZGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aW9uID09PSAncmVzaXplJykge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzaXplU2lkZSA9PT0gJ3NlJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS53aWR0aCA9ICh0aGlzLnJlY3Quc2hpZnRXaWR0aCArIGV2LmNsaWVudFggLSB0aGlzLnJlY3Quc3RhcnRYKSArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLmhlaWdodCA9ICh0aGlzLnJlY3Quc2hpZnRIZWlnaHQgKyBldi5jbGllbnRZIC0gdGhpcy5yZWN0LnN0YXJ0WSkgKyAncHgnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc2l6ZVNpZGUgPT09ICdlJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS53aWR0aCA9ICh0aGlzLnJlY3Quc2hpZnRXaWR0aCArIGV2LmNsaWVudFggLSB0aGlzLnJlY3Quc3RhcnRYKSArICdweCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzaXplU2lkZSA9PT0gJ3MnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLmhlaWdodCA9ICh0aGlzLnJlY3Quc2hpZnRIZWlnaHQgKyBldi5jbGllbnRZIC0gdGhpcy5yZWN0LnN0YXJ0WSkgKyAncHgnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc2l6ZVNpZGUgPT09ICd3Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xlZnQgPSAoZXYucGFnZVggLSB0aGlzLnJlY3Quc2hpZnRYKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUubGVmdCA9IG5ld0xlZnQgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS53aWR0aCA9ICh0aGlzLnJlY3Quc2hpZnRXaWR0aCArICh0aGlzLnJlY3Quc3RhcnRMZWZ0IC0gbmV3TGVmdCkpICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNpemVTaWRlID09PSAnbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUb3AgPSAoZXYucGFnZVkgLSB0aGlzLnJlY3Quc2hpZnRZKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUudG9wID0gbmV3VG9wICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUuaGVpZ2h0ID0gKHRoaXMucmVjdC5zaGlmdEhlaWdodCArICh0aGlzLnJlY3Quc3RhcnRUb3AgLSBuZXdUb3ApKSArICdweCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9vbHRpcCh0aGlzLnJlY3RhbmdsZU5vZGUsIHRoaXMudG9vbHRpcFNpemVOb2RlLCB0aGlzLnRvb2x0aXBQb3NOb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtleURvd24oZXYpIHtcbiAgICAgICAgaWYgKHRoaXMucmVjdGFuZ2xlTm9kZSkge1xuICAgICAgICAgICAgaWYgKGV2LmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUudG9wID0gK3RoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS50b3BcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3B4JywgJycpIC0gMSArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UG9zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWJvdW5jZSh0aGlzLmhpZGVQb3MuYmluZCh0aGlzKSwgNTAwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXYua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN0YW5nbGVOb2RlLnN0eWxlLnRvcCA9ICt0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUudG9wXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSArIDEgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2UodGhpcy5oaWRlUG9zLmJpbmQodGhpcyksIDUwMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2LmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS5sZWZ0ID0gK3RoaXMucmVjdGFuZ2xlTm9kZS5zdHlsZS5sZWZ0XG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSAtIDEgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2UodGhpcy5oaWRlUG9zLmJpbmQodGhpcyksIDUwMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2LmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUubGVmdCA9ICt0aGlzLnJlY3RhbmdsZU5vZGUuc3R5bGUubGVmdFxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgncHgnLCAnJykgKyAxICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlKHRoaXMuaGlkZVBvcy5iaW5kKHRoaXMpLCA1MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlVG9vbHRpcChyZWN0YW5nbGUsIHRvb2x0aXBTaXplLCB0b29sdGlwUG9zKSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgdG9vbHRpcFNpemUuaW5uZXJIVE1MID0gcmVjdC53aWR0aCArICd4JyArIHJlY3QuaGVpZ2h0O1xuICAgICAgICB0b29sdGlwUG9zLmlubmVySFRNTCA9IHJlY3QubGVmdCArICd4JyArIHJlY3QudG9wO1xuICAgIH1cblxuICAgIGRlYm91bmNlKGZ1bmMsIGRlbGF5KSB7XG4gICAgICAgIGlmICh0aGlzLmRlYklkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJJZCk7XG4gICAgICAgICAgICB0aGlzLmRlYklkID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGViSWQgPSBzZXRUaW1lb3V0KGZ1bmMsIGRlbGF5KTtcbiAgICB9XG59IiwiaW1wb3J0IERpbWVuc2lvbiBmcm9tICcuL2NsYXNzZXMvRGltZW5zaW9uJztcbmltcG9ydCBSZWN0YW5nbGVSdWxlciBmcm9tIFwiLi9jbGFzc2VzL1JlY3RhbmdsZVJ1bGVyXCI7XG5cbmNvbnN0IGRpbWVuc2lvbiA9IG5ldyBEaW1lbnNpb24oKTtcbmNvbnN0IHJlY3RhbmdsZVJ1bGVyID0gbmV3IFJlY3RhbmdsZVJ1bGVyKCk7XG5cbmxldCBzZXRLZXlzID0gW107XG5sZXQgYWN0aXZlID0gJyc7XG5jb25zdCBxdWlja0tleXMgPSB7XG4gICAgJ0FsdExlZnQgKyBLZXlaJzogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBrZXkgPSAnZGltZW5zaW9ucyc7XG5cbiAgICAgICAgaWYgKGFjdGl2ZSA9PT0ga2V5KSB7XG4gICAgICAgICAgICBhY3RpdmUgPSAnJztcbiAgICAgICAgICAgIGRpbWVuc2lvbi5zdG9wKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlID09PSAnJykge1xuICAgICAgICAgICAgYWN0aXZlID0ga2V5O1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgICdBbHRMZWZ0ICsgS2V5WCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVjdGFuZ2xlUnVsZXIuY3JlYXRlKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxufTtcbmNvbnN0IGFjdGlvbnMgPSB7XG4gICAgJ3Rha2VTY3JlZW5zaG90JzogZnVuY3Rpb24gKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIGRpbWVuc2lvbi5wYXJzZVNjcmVlbnNob3QocmVxdWVzdC5zY3JlZW5QbmcpO1xuICAgIH0sXG59XG5cbi8vIHJlY2VpdmVXb3JrZXJNZXNzYWdlXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoXG4gICAgZnVuY3Rpb24ocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlcXVlc3QuYWN0aW9uICYmIHR5cGVvZiBhY3Rpb25zWyByZXF1ZXN0LmFjdGlvbiBdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhY3Rpb25zWyByZXF1ZXN0LmFjdGlvbiBdKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2KSA9PiB7XG4gICAgc2V0S2V5cy5wdXNoKGV2LmNvZGUpO1xuXG4gICAgaWYgKHNldEtleXMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBxdWlja0tleXNbIHNldEtleXMuam9pbignICsgJykgXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAocXVpY2tLZXlzWyBzZXRLZXlzLmpvaW4oJyArICcpIF0oKSkge1xuICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe29wdGlvbkFjdGl2YXRlOiBhY3RpdmV9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXYpID0+IHtcbiAgICBzZXRLZXlzID0gW107XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldikgPT4ge1xuICAgIGRpbWVuc2lvbi5oYW5kbGVNb3VzZU1vdmUoZXYpO1xufSk7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9