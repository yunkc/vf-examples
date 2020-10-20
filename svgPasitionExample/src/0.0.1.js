(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["module"] = factory();
	else
		root["vf"] = root["vf"] || {}, root["vf"]["gui"] = root["vf"]["gui"] || {}, root["vf"]["gui"]["module"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/SVGPasition/src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/SVGPasition/src/index.ts":
/*!*******************************************!*\
  !*** ./packages/SVGPasition/src/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SVGPasition = exports.SVGPasitionOptions = void 0;
/**
 * 动画渐变
 */
var defaultEasing = vf.gui.Easing.Linear.None;
var SVGPasitionOptions = /** @class */ (function () {
    function SVGPasitionOptions() {
        this.duration = 1000;
        this.mustSvgData = true;
    }
    return SVGPasitionOptions;
}());
exports.SVGPasitionOptions = SVGPasitionOptions;
var SVGPasition = /** @class */ (function (_super) {
    __extends(SVGPasition, _super);
    function SVGPasition(option) {
        var _this = _super.call(this) || this;
        _this.MIM_CURVES_COUNT = 30;
        _this._beginTime = 0;
        _this._options = option;
        return _this;
    }
    Object.defineProperty(SVGPasition.prototype, "from", {
        get: function () {
            return this.options.from;
        },
        set: function (value) {
            this.options.from = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGPasition.prototype, "to", {
        get: function () {
            return this.options.to;
        },
        set: function (value) {
            this.options.to = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGPasition.prototype, "duration", {
        get: function () {
            return this.options.duration;
        },
        set: function (value) {
            this.options.duration = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGPasition.prototype, "onStart", {
        get: function () {
            return this.options.onStart;
        },
        set: function (value) {
            this.options.onStart = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGPasition.prototype, "onUpdate", {
        get: function () {
            return this.options.onUpdate;
        },
        set: function (value) {
            this.options.onUpdate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGPasition.prototype, "onEnd", {
        get: function () {
            return this.options.onEnd;
        },
        set: function (value) {
            this.options.onEnd = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGPasition.prototype, "easing", {
        get: function () {
            if (!this.options.easing) {
                return defaultEasing;
            }
            return this.options.easing;
        },
        set: function (value) {
            this.options.easing = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SVGPasition.prototype, "options", {
        get: function () {
            if (!this._options) {
                this._options = new SVGPasitionOptions();
            }
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 动画初始值
     */
    SVGPasition.prototype.play = function () {
        var _options = this._options;
        if (!_options) {
            return;
        }
        var pathA = vf.gui.Utils.path2shapes(_options.from);
        var pathB = vf.gui.Utils.path2shapes(_options.to);
        var pathArr = this._preprocessing(pathA, pathB);
        this._beginTime = vf.gui.Utils.now();
        this.emit('onStart');
        _options.onStart && _options.onStart(pathA);
        this._pathArr = pathArr;
        this._pathB = pathB;
        vf.gui.TickerShared.add(this.onUpdata, this);
    };
    /**
     * 刷新
     */
    SVGPasition.prototype.onUpdata = function (time) {
        var _options = this._options;
        if (!_options) {
            return;
        }
        var d = vf.gui.Utils.now();
        var dt = d - this._beginTime;
        var duration = _options.duration;
        if (dt >= duration) {
            var svgData_1 = _options.mustSvgData ? vf.gui.Utils.toSVGStr(this._pathB) : this._pathB;
            this.emit('onUpdata', svgData_1);
            _options.onUpdate && _options.onUpdate(svgData_1, 1);
            this.emit('onEnd');
            _options.onEnd && _options.onEnd();
            vf.gui.TickerShared.remove(this.onUpdata, this);
            return;
        }
        var percent = _options.easing ? _options.easing(dt / duration) : defaultEasing(dt / duration);
        var outShape = this._lerp(this._pathArr[0], this._pathArr[1], percent);
        var svgData = _options.mustSvgData ? vf.gui.Utils.toSVGStr(outShape) : outShape;
        this.emit('onUpdata', svgData);
        _options.onUpdate && _options.onUpdate(svgData, percent);
    };
    SVGPasition.prototype._lerp = function (pathA, pathB, t) {
        var _this = this;
        var shapes = [];
        pathA.forEach(function (curves, index) {
            var newCurves = [];
            curves.forEach(function (curve, curveIndex) {
                newCurves.push(_this.lerpCurve(curve, pathB[index][curveIndex], t));
            });
            shapes.push(newCurves);
        });
        return shapes;
    };
    SVGPasition.prototype.lerpCurve = function (pathA, pathB, t) {
        return this.lerpPoints(pathA[0], pathA[1], pathB[0], pathB[1], t)
            .concat(this.lerpPoints(pathA[2], pathA[3], pathB[2], pathB[3], t))
            .concat(this.lerpPoints(pathA[4], pathA[5], pathB[4], pathB[5], t))
            .concat(this.lerpPoints(pathA[6], pathA[7], pathB[6], pathB[7], t));
    };
    SVGPasition.prototype.lerpPoints = function (x1, y1, x2, y2, t) {
        return [x1 + (x2 - x1) * t, y1 + (y2 - y1) * t];
    };
    /**
     * 保持线条长度和关键点数相同
     */
    SVGPasition.prototype._preprocessing = function (pathA, pathB) {
        var _this = this;
        var lenA = pathA.length, lenB = pathB.length, clonePathB = JSON.parse(JSON.stringify(pathB));
        var clonePathA = JSON.parse(JSON.stringify(pathA));
        if (lenA > lenB) {
            this.sync(clonePathB, lenA - lenB);
        }
        else if (lenA < lenB) {
            this.sync(clonePathA, lenB - lenA);
        }
        clonePathA = this.sort(clonePathA, clonePathB);
        clonePathA.forEach(function (curves, index) {
            var lenA = curves.length, lenB = clonePathB[index].length;
            if (lenA > lenB) {
                if (lenA < _this.MIM_CURVES_COUNT) {
                    _this._splitCurves(curves, _this.MIM_CURVES_COUNT - lenA);
                    _this._splitCurves(clonePathB[index], _this.MIM_CURVES_COUNT - lenB);
                }
                else {
                    _this._splitCurves(clonePathB[index], lenA - lenB);
                }
            }
            else if (lenA < lenB) {
                if (lenB < _this.MIM_CURVES_COUNT) {
                    _this._splitCurves(curves, _this.MIM_CURVES_COUNT - lenA);
                    _this._splitCurves(clonePathB[index], _this.MIM_CURVES_COUNT - lenB);
                }
                else {
                    _this._splitCurves(curves, lenB - lenA);
                }
            }
        });
        clonePathA.forEach(function (curves, index) {
            clonePathA[index] = _this.sortCurves(curves, clonePathB[index]);
        });
        return [clonePathA, clonePathB];
    };
    SVGPasition.prototype._splitCurves = function (curves, count) {
        var i = 0, index = 0;
        for (; i < count; i++) {
            var curve = curves[index];
            var cs = this.split(curve[0], curve[1], curve[2], curve[3], curve[4], curve[5], curve[6], curve[7], 0.5);
            curves.splice(index, 1);
            curves.splice(index, 0, cs.left, cs.right);
            index += 2;
            if (index >= curves.length - 1) {
                index = 0;
            }
        }
    };
    SVGPasition.prototype.split = function (x1, y1, x2, y2, x3, y3, x4, y4, t) {
        return {
            left: this._split(x1, y1, x2, y2, x3, y3, x4, y4, t),
            right: this._split(x4, y4, x3, y3, x2, y2, x1, y1, 1 - t, true)
        };
    };
    SVGPasition.prototype._split = function (x1, y1, x2, y2, x3, y3, x4, y4, t, reverse) {
        if (reverse === void 0) { reverse = false; }
        var x12 = (x2 - x1) * t + x1;
        var y12 = (y2 - y1) * t + y1;
        var x23 = (x3 - x2) * t + x2;
        var y23 = (y3 - y2) * t + y2;
        var x34 = (x4 - x3) * t + x3;
        var y34 = (y4 - y3) * t + y3;
        var x123 = (x23 - x12) * t + x12;
        var y123 = (y23 - y12) * t + y12;
        var x234 = (x34 - x23) * t + x23;
        var y234 = (y34 - y23) * t + y23;
        var x1234 = (x234 - x123) * t + x123;
        var y1234 = (y234 - y123) * t + y123;
        if (reverse) {
            return [x1234, y1234, x123, y123, x12, y12, x1, y1];
        }
        return [x1, y1, x12, y12, x123, y123, x1234, y1234];
    };
    SVGPasition.prototype.sync = function (shapes, count) {
        var _loop_1 = function (i) {
            var shape = shapes[shapes.length - 1];
            var newShape = [];
            shape.forEach(function (curve) {
                newShape.push(curve.slice(0));
            });
            shapes.push(newShape);
        };
        for (var i = 0; i < count; i++) {
            _loop_1(i);
        }
    };
    /**
     * 取移动点最短距离的方案
     */
    SVGPasition.prototype.sort = function (pathA, pathB) {
        var _this = this;
        var arrList = this.permuteNum(pathA.length);
        var list = [];
        arrList.forEach(function (arr) {
            var distance = 0;
            arr.forEach(function (index) {
                distance += _this.boxDistance(_this.shapeBox(pathA[index]), _this.shapeBox(pathB[index]));
            });
            list.push({ index: arr, distance: distance });
        });
        list.sort(function (a, b) {
            return a.distance - b.distance;
        });
        var result = [];
        list[0].index.forEach(function (index) {
            result.push(pathA[index]);
        });
        return result;
    };
    SVGPasition.prototype.boxDistance = function (boxA, boxB) {
        return Math.sqrt(Math.pow(boxA[0] - boxB[0], 2) + Math.pow(boxA[1] - boxB[1], 2)) + Math.sqrt(Math.pow(boxA[2] - boxB[2], 2) + Math.pow(boxA[3] - boxB[3], 2));
    };
    SVGPasition.prototype.sortCurves = function (curvesA, curvesB) {
        var _this = this;
        var arrList = this.permuteCurveNum(curvesA.length);
        var list = [];
        arrList.forEach(function (arr) {
            var distance = 0;
            var i = 0;
            arr.forEach(function (index) {
                distance += _this.curveDistance(curvesA[index], curvesB[i++]);
            });
            list.push({ index: arr, distance: distance });
        });
        list.sort(function (a, b) {
            return a.distance - b.distance;
        });
        var result = [];
        list[0].index.forEach(function (index) {
            result.push(curvesA[index]);
        });
        return result;
    };
    SVGPasition.prototype.permuteCurveNum = function (num) {
        var arr = [];
        for (var i = 0; i < num; i++) {
            var indexArr = [];
            for (var j = 0; j < num; j++) {
                var index = j + i;
                if (index > num - 1)
                    index -= num;
                indexArr[index] = j;
            }
            arr.push(indexArr);
        }
        return arr;
    };
    SVGPasition.prototype.curveDistance = function (curveA, curveB) {
        var x1 = curveA[0], x2 = curveA[2], x3 = curveA[4], x4 = curveA[6], y1 = curveA[1], y2 = curveA[3], y3 = curveA[5], y4 = curveA[7], xb1 = curveB[0], xb2 = curveB[2], xb3 = curveB[4], xb4 = curveB[6], yb1 = curveB[1], yb2 = curveB[3], yb3 = curveB[5], yb4 = curveB[7];
        return Math.sqrt(Math.pow(xb1 - x1, 2) + Math.pow(yb1 - y1, 2)) +
            Math.sqrt(Math.pow(xb2 - x2, 2) + Math.pow(yb2 - y2, 2)) +
            Math.sqrt(Math.pow(xb3 - x3, 2) + Math.pow(yb3 - y3, 2)) +
            Math.sqrt(Math.pow(xb4 - x4, 2) + Math.pow(yb4 - y4, 2));
    };
    SVGPasition.prototype.shapeBox = function (shape) {
        var minX = shape[0][0], minY = shape[0][1], maxX = minX, maxY = minY;
        shape.forEach(function (curve) {
            var x1 = curve[0], x2 = curve[2], x3 = curve[4], x4 = curve[6], y1 = curve[1], y2 = curve[3], y3 = curve[5], y4 = curve[7];
            minX = Math.min(minX, x1, x2, x3, x4);
            minY = Math.min(minY, y1, y2, y3, y4);
            maxX = Math.max(maxX, x1, x2, x3, x4);
            maxY = Math.max(maxY, y1, y2, y3, y4);
        });
        return [minX, minY, maxX, maxY];
    };
    SVGPasition.prototype.permuteNum = function (num) {
        var arr = [];
        for (var i = 0; i < num; i++) {
            arr.push(i);
        }
        return [arr]; //this.permute(arr)
    };
    SVGPasition.prototype.permute = function (input) {
        var permArr = [], usedChars = [];
        function main(input) {
            var i, ch;
            for (i = 0; i < input.length; i++) {
                ch = input.splice(i, 1)[0];
                usedChars.push(ch);
                if (input.length == 0) {
                    permArr.push(usedChars.slice());
                }
                main(input);
                input.splice(i, 0, ch);
                usedChars.pop();
            }
            return permArr;
        }
        return main(input);
    };
    SVGPasition.prototype.release = function () {
        this._pathArr = undefined;
        this._options = undefined;
        this._pathB = undefined;
        vf.gui.TickerShared.remove(this.onUpdata, this);
        _super.prototype.release.call(this);
    };
    return SVGPasition;
}(vf.gui.DisplayObject));
exports.SVGPasition = SVGPasition;


/***/ })

/******/ });
});
//# sourceMappingURL=SVGPasition.js.map