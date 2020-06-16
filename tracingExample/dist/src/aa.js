"use strict";
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else {
        var a = factory();
        for (var i in a)
            (typeof exports === 'object' ? exports : root)[i] = a[i];
    }
})(window, function () {
    return (function (modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
            }
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function (exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, { enumerable: true, get: getter });
            }
        };
        __webpack_require__.r = function (exports) {
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            }
            Object.defineProperty(exports, '__esModule', { value: true });
        };
        __webpack_require__.t = function (value, mode) {
            if (mode & 1)
                value = __webpack_require__(value);
            if (mode & 8)
                return value;
            if ((mode & 4) && typeof value === 'object' && value && value.__esModule)
                return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, 'default', { enumerable: true, value: value });
            if (mode & 2 && typeof value != 'string')
                for (var key in value)
                    __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
            return ns;
        };
        __webpack_require__.n = function (module) {
            var getter = module && module.__esModule ?
                function getDefault() { return module['default']; } :
                function getModuleExports() { return module; };
            __webpack_require__.d(getter, 'a', getter);
            return getter;
        };
        __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = "./test/index.ts");
    })({
        "./test sync recursive ^\\.\\/.*$": (function (module, exports, __webpack_require__) {
            var map = {
                "./": "./test/index.ts",
                "./TestAlign": "./test/TestAlign.ts",
                "./TestAlign.ts": "./test/TestAlign.ts",
                "./TestApplication": "./test/TestApplication.ts",
                "./TestApplication.ts": "./test/TestApplication.ts",
                "./TestAudio": "./test/TestAudio.ts",
                "./TestAudio.ts": "./test/TestAudio.ts",
                "./TestButton": "./test/TestButton.ts",
                "./TestButton.ts": "./test/TestButton.ts",
                "./TestCheckBox": "./test/TestCheckBox.ts",
                "./TestCheckBox.ts": "./test/TestCheckBox.ts",
                "./TestCircle": "./test/TestCircle.ts",
                "./TestCircle.ts": "./test/TestCircle.ts",
                "./TestConnectLine": "./test/TestConnectLine.ts",
                "./TestConnectLine.ts": "./test/TestConnectLine.ts",
                "./TestContainer": "./test/TestContainer.ts",
                "./TestContainer.ts": "./test/TestContainer.ts",
                "./TestDrag": "./test/TestDrag.ts",
                "./TestDrag.ts": "./test/TestDrag.ts",
                "./TestFollowLine": "./test/TestFollowLine.ts",
                "./TestFollowLine.ts": "./test/TestFollowLine.ts",
                "./TestGridLayout": "./test/TestGridLayout.ts",
                "./TestGridLayout.ts": "./test/TestGridLayout.ts",
                "./TestImage": "./test/TestImage.ts",
                "./TestImage.ts": "./test/TestImage.ts",
                "./TestLabel": "./test/TestLabel.ts",
                "./TestLabel.ts": "./test/TestLabel.ts",
                "./TestMouseCursor": "./test/TestMouseCursor.ts",
                "./TestMouseCursor.ts": "./test/TestMouseCursor.ts",
                "./TestRect": "./test/TestRect.ts",
                "./TestRect.ts": "./test/TestRect.ts",
                "./TestScrollBar": "./test/TestScrollBar.ts",
                "./TestScrollBar.ts": "./test/TestScrollBar.ts",
                "./TestScrollingContainer": "./test/TestScrollingContainer.ts",
                "./TestScrollingContainer.ts": "./test/TestScrollingContainer.ts",
                "./TestSlider": "./test/TestSlider.ts",
                "./TestSlider.ts": "./test/TestSlider.ts",
                "./TestSortableList": "./test/TestSortableList.ts",
                "./TestSortableList.ts": "./test/TestSortableList.ts",
                "./TestSpriteAnimated": "./test/TestSpriteAnimated.ts",
                "./TestSpriteAnimated.ts": "./test/TestSpriteAnimated.ts",
                "./TestTextInput": "./test/TestTextInput.ts",
                "./TestTextInput.ts": "./test/TestTextInput.ts",
                "./TestTicker": "./test/TestTicker.ts",
                "./TestTicker.ts": "./test/TestTicker.ts",
                "./TestTimeLine": "./test/TestTimeLine.ts",
                "./TestTimeLine.ts": "./test/TestTimeLine.ts",
                "./TestTracing": "./test/TestTracing.ts",
                "./TestTracing.ts": "./test/TestTracing.ts",
                "./TestTween": "./test/TestTween.ts",
                "./TestTween.ts": "./test/TestTween.ts",
                "./TestTween2": "./test/TestTween2.ts",
                "./TestTween2.ts": "./test/TestTween2.ts",
                "./index": "./test/index.ts",
                "./index.ts": "./test/index.ts"
            };
            function webpackContext(req) {
                var id = webpackContextResolve(req);
                return __webpack_require__(id);
            }
            function webpackContextResolve(req) {
                if (!__webpack_require__.o(map, req)) {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                }
                return map[req];
            }
            webpackContext.keys = function webpackContextKeys() {
                return Object.keys(map);
            };
            webpackContext.resolve = webpackContextResolve;
            module.exports = webpackContext;
            webpackContext.id = "./test sync recursive ^\\.\\/.*$";
        }),
        "./test/TestAlign.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestAlign = (function () {
                function TestAlign(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestAlign.prototype.onLoad = function (app, uiStage) {
                    var container = new vf.gui.Container();
                    container.width = 800;
                    var titleBg = new vf.gui.Image();
                    titleBg.src = 'assets/titleBg.png';
                    var titleBgcontainer = new vf.gui.Container();
                    titleBgcontainer.addChild(titleBg);
                    var btnbg = new vf.gui.Image();
                    btnbg.src = 'assets/btnbg.png';
                    var btnbgcontainer = new vf.gui.Container();
                    btnbgcontainer.name = "btnbgcontainer";
                    btnbgcontainer.style.justifyContent = "center";
                    btnbgcontainer.addChild(btnbg);
                    container.addChild(titleBgcontainer);
                    container.addChild(btnbgcontainer);
                    uiStage.addChild(container);
                };
                return TestAlign;
            }());
            exports.default = TestAlign;
        }),
        "./test/TestApplication.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestApplication = (function () {
                function TestApplication(thisObj, callback) {
                    var resolution = window.devicePixelRatio || 1;
                    var app = new vf.Application({
                        width: document.body.offsetWidth / resolution,
                        height: document.body.offsetHeight / resolution,
                        antialias: true,
                        forceCanvas: false,
                        resolution: resolution
                    });
                    var uiStage = new vf.gui.Stage(app.view.width, app.view.height, app);
                    uiStage.scaleX = uiStage.scaleY = 1 / resolution;
                    console.log(uiStage.width);
                    document.body.appendChild(app.view);
                    callback.call(thisObj, app, uiStage);
                }
                return TestApplication;
            }());
            exports.default = TestApplication;
        }),
        "./test/TestAudio.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestAudio = (function () {
                function TestAudio(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestAudio.prototype.onLoad = function (app, uiStage) {
                    var a = new vf.gui.Audio();
                    var b = new vf.gui.Audio();
                    var c = new vf.gui.Audio();
                    var d = new vf.gui.Audio();
                    var e = new vf.gui.Audio();
                    b.src = "https://s.vipkidstatic.com/fe-static/learning-stages/assets/great-20191221.mp3";
                    c.src = "https://s.vipkidstatic.com/fe-static/learning-stages/assets/final-good-20191221.mp3";
                    d.src = "https://s.vipkidstatic.com/fe-static/learning-stages/assets/final-good-20191221.mp3";
                    e.src = "https://s.vipkidstatic.com/fe-static/learning-stages/assets/final-good-20191221.mp3";
                    uiStage.addChild(a);
                    uiStage.addChild(b);
                    uiStage.addChild(c);
                    uiStage.addChild(d);
                    uiStage.addChild(e);
                    a.loop = false;
                    a.autoplay = true;
                    a.src = "https://s.vipkidstatic.com/fe-static/learning-stages/assets/great-20191221.mp3";
                    a.on("ended", function () {
                        console.log("a play ended");
                    });
                    b.on("ended", function () {
                        console.log("b play ended");
                    });
                    c.on("ended", function () {
                        console.log("c play ended");
                    });
                    d.on("ended", function () {
                        console.log("d play ended");
                    });
                    a.interactabled = true;
                    a.on("canplaythrough", function () {
                        console.log("im ready");
                    });
                    setTimeout(function () {
                        a.stop();
                    }, 2000);
                    var basicText = new vf.gui.Label();
                    basicText.style.left = 15;
                    basicText.style.top = 50;
                    basicText.style.color = 0xffffff;
                    basicText.text = "点击我播放";
                    basicText.interactabled = true;
                    var t1 = new vf.gui.Label();
                    t1.style.left = 25;
                    t1.style.top = 100;
                    t1.style.color = 0xffffff;
                    t1.text = "t1";
                    t1.interactabled = true;
                    var t2 = new vf.gui.Label();
                    t2.style.left = 25;
                    t2.style.top = 150;
                    t2.style.color = 0xffffff;
                    t2.text = "t2";
                    t2.interactabled = true;
                    var t3 = new vf.gui.Label();
                    t3.style.left = 25;
                    t3.style.top = 200;
                    t3.style.color = 0xffffff;
                    t3.text = "t3";
                    t3.interactabled = true;
                    var t4 = new vf.gui.Label();
                    t4.style.left = 25;
                    t4.style.top = 250;
                    t4.style.color = 0xffffff;
                    t4.text = "t4";
                    t4.interactabled = true;
                    uiStage.addChild(basicText);
                    uiStage.addChild(t1);
                    uiStage.addChild(t2);
                    uiStage.addChild(t3);
                    uiStage.addChild(t4);
                    basicText.on('down', function () {
                        a.play();
                    });
                    t1.on('down', function () {
                        console.log("t1");
                        b.play();
                    });
                    t2.on('down', function () {
                        console.log("t2");
                        c.play();
                    });
                    t3.on('down', function () {
                        console.log("t3");
                        d.play();
                    });
                    t4.on('down', function () {
                        console.log("t4");
                        e.play();
                    });
                };
                return TestAudio;
            }());
            exports.default = TestAudio;
        }),
        "./test/TestButton.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestButton = (function () {
                function TestButton(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestButton.prototype.onLoad = function (app, uiStage) {
                    var button1 = new vf.gui.Button;
                    button1.style.left = 100;
                    button1.style.top = 100;
                    button1.style.width = 100;
                    button1.style.height = 50;
                    button1.text = "点我试试";
                    button1.up = "assets/skin/Button/button_up.png";
                    button1.down = "assets/skin/Button/button_down.png";
                    button1.move = "assets/skin/Button/button_move.png";
                    button1.on(vf.gui.Interaction.TouchMouseEvent.onClick, this.onClick, this);
                    button1.on(vf.gui.Interaction.TouchMouseEvent.onPress, this.onPress, this);
                    button1.on(vf.gui.Interaction.TouchMouseEvent.onHover, this.onHover, this);
                    uiStage.addChild(button1);
                    var button2 = new vf.gui.Button;
                    button2.style.left = 100;
                    button2.style.top = 200;
                    button2.style.width = 100;
                    button2.style.height = 50;
                    button2.text = "按钮颜色";
                    button2.label.style.color = [0x00ffff, 0xff00cc];
                    button2.up = "assets/skin/Button/button_up.png";
                    button2.down = "assets/skin/Button/button_down.png";
                    button2.move = "assets/skin/Button/button_move.png";
                    uiStage.addChild(button2);
                    var button3 = new vf.gui.Button;
                    button3.style.left = 100;
                    button3.style.top = 300;
                    button3.style.width = 100;
                    button3.style.height = 50;
                    button3.up = "assets/skin/Button/button_up.png";
                    button3.down = "assets/skin/Button/button_down.png";
                    button3.move = "assets/skin/Button/button_move.png";
                    button3.img.fillMode = "repeat";
                    button3.img.scale9Grid = [1, 1, 0, 0];
                    uiStage.addChild(button3);
                };
                TestButton.prototype.onClick = function (e, button) {
                    button.text = "点击" + e.type;
                };
                TestButton.prototype.onPress = function (e, button, isPress) {
                    if (isPress)
                        button.text = "按下" + e.type;
                    else
                        button.text = "弹起" + e.type;
                    console.log("onPress", isPress);
                };
                TestButton.prototype.onHover = function (e, button, over) {
                    console.log("onHover", over);
                    if (over)
                        button.text = "移入" + e.type;
                    else
                        button.text = "移出" + e.type;
                };
                return TestButton;
            }());
            exports.default = TestButton;
        }),
        "./test/TestCheckBox.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestCheckBox = (function () {
                function TestCheckBox(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestCheckBox.prototype.onLoad = function (app, uiStage) {
                    var checkbox = this.getNewCheckBox(uiStage);
                    checkbox.value = "1";
                    var checkbox2 = this.getNewCheckBox(uiStage);
                    checkbox2.value = "2";
                    checkbox2.style.left = 130;
                    var checkbox3 = this.getNewCheckBox(uiStage);
                    checkbox3.value = "3";
                    checkbox3.style.left = 160;
                    var radio = this.getNewRadio(uiStage);
                    radio.checked = true;
                    radio.value = "r1";
                    radio.checkGroup = "a1";
                    var radio2 = this.getNewRadio(uiStage);
                    radio2.value = "r2";
                    radio2.style.left = 130;
                    radio2.checkGroup = "a1";
                    var radio3 = this.getNewRadio(uiStage);
                    radio3.value = "r3";
                    radio3.style.left = 160;
                    radio3.checkGroup = "a1";
                };
                TestCheckBox.prototype.getNewCheckBox = function (uiStage) {
                    var checkbox = new vf.gui.CheckBox();
                    checkbox.style.top = 100;
                    checkbox.style.left = 100;
                    checkbox.style.width = 23;
                    checkbox.style.height = 23;
                    checkbox.up = "assets/skin/CheckBox/unselect.png";
                    checkbox.down = "assets/skin/CheckBox/unselect.png";
                    checkbox.move = "assets/skin/CheckBox/unselect.png";
                    checkbox.disabled = "assets/skin/CheckBox/unselect.png";
                    checkbox.upAndSelected = "assets/skin/CheckBox/select_up.png";
                    checkbox.downAndSelected = "assets/skin/CheckBox/select_down.png";
                    checkbox.moveAndSelected = "assets/skin/CheckBox/select_down.png";
                    checkbox.disabledAndSelected = "assets/skin/CheckBox/select_disabled.png";
                    checkbox.on(vf.gui.Interaction.ComponentEvent.CHANGE, this.onChange, this);
                    uiStage.addChild(checkbox);
                    return checkbox;
                };
                TestCheckBox.prototype.getNewRadio = function (uiStage) {
                    var radio = new vf.gui.CheckBox();
                    radio.style.top = 150;
                    radio.style.left = 100;
                    radio.style.width = 22;
                    radio.style.height = 22;
                    radio.up = "assets/skin/Radio/unselect.png";
                    radio.down = "assets/skin/Radio/unselect.png";
                    radio.move = "assets/skin/Radio/unselect.png";
                    radio.disabled = "assets/skin/Radio/unselect.png";
                    radio.upAndSelected = "assets/skin/Radio/select_up.png";
                    radio.downAndSelected = "assets/skin/Radio/select_down.png";
                    radio.moveAndSelected = "assets/skin/Radio/select_down.png";
                    radio.disabledAndSelected = "assets/skin/Radio/select_disabled.png";
                    radio.on(vf.gui.Interaction.ComponentEvent.CHANGE, this.onChange, this);
                    uiStage.addChild(radio);
                    return radio;
                };
                TestCheckBox.prototype.onChange = function (checkBox) {
                    console.log("->", checkBox.value, checkBox.checked);
                };
                return TestCheckBox;
            }());
            exports.default = TestCheckBox;
        }),
        "./test/TestCircle.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestCircle = (function () {
                function TestCircle(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestCircle.prototype.onLoad = function (app, uiStage) {
                    var circle = new vf.gui.Circle();
                    circle.anchorX = 0.1;
                    circle.anchorY = 0.1;
                    circle.color = 0xffffff;
                    circle.lineColor = 0xff00cc;
                    circle.lineWidth = 1;
                    circle.radius = 100;
                    uiStage.addChild(circle);
                    var circle1 = new vf.gui.Circle();
                    circle1.style.left = 150;
                    circle1.style.top = 350;
                    circle1.lineColor = 0xff00cc;
                    circle1.lineWidth = 1;
                    circle1.radius = 50;
                    uiStage.addChild(circle1);
                    var click = new vf.gui.Interaction.ClickEvent(circle, true);
                    circle.on(vf.gui.Interaction.TouchMouseEvent.onUp, this.onClick, this);
                    circle.on(vf.gui.Interaction.TouchMouseEvent.onDown, this.onClick, this);
                    circle.on(vf.gui.Interaction.TouchMouseEvent.onPress, this.onClick, this);
                    circle.on(vf.gui.Interaction.TouchMouseEvent.onMove, this.onClick, this);
                    circle.on(vf.gui.Interaction.TouchMouseEvent.onHover, this.onClick, this);
                    circle.on(vf.gui.Interaction.TouchMouseEvent.onClick, this.onClick, this);
                };
                TestCircle.prototype.onClick = function (e) {
                    console.log(e.type);
                };
                return TestCircle;
            }());
            exports.default = TestCircle;
        }),
        "./test/TestConnectLine.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestConnectLine = (function () {
                function TestConnectLine(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestConnectLine.prototype.onLoad = function (app, uiStage) {
                    var connectLine1 = new vf.gui.ConnectLine;
                    connectLine1.isAnimation = true;
                    connectLine1.sourcePostion = [15, 15];
                    connectLine1.targetPostion = [350, 15];
                    connectLine1.lineColor = 0xffffff;
                    connectLine1.lineWidth = 2;
                    uiStage.addChild(connectLine1);
                    var connectLine2 = new vf.gui.ConnectLine;
                    connectLine2.isAnimation = true;
                    connectLine2.sourcePostion = [15, 40];
                    connectLine2.targetPostion = [350, 40];
                    connectLine2.lineColor = 0xffff00;
                    connectLine2.lineWidth = 2;
                    connectLine2.autoPlay = false;
                    uiStage.addChild(connectLine2);
                    setTimeout(function () {
                        connectLine2.play = 2;
                    }, 3000);
                    var container = new vf.gui.Container();
                    container.x = 10;
                    container.y = 100;
                    uiStage.addChild(container);
                    var rect1 = this.getNewRect(container);
                    var rect2 = this.getNewRect(container, 240, 0);
                    var connectLine3 = new vf.gui.ConnectLine;
                    connectLine3.isAnimation = true;
                    connectLine3.source = rect1;
                    connectLine3.sourcePostion = 'center';
                    connectLine3.target = rect2;
                    connectLine3.targetPostion = 'center';
                    connectLine3.lineColor = 0xff00cc;
                    connectLine3.lineWidth = 2;
                    uiStage.addChild(connectLine3);
                    var e4Rect1 = this.getNewRect(container, 0, 160);
                    var e4Rect2 = this.getNewRect(container, 240, 280);
                    var e4Line1 = this.getNewConnectLine(container, e4Rect1, e4Rect2);
                    e4Rect1.on(vf.gui.Interaction.TouchMouseEvent.onClick, function () {
                        e4Line1.isClear = true;
                        e4Line1.lineColor = 0xffcc00;
                        e4Line1.play = 2;
                    });
                    e4Rect2.on(vf.gui.Interaction.TouchMouseEvent.onClick, function () {
                        e4Line1.isClear = true;
                        e4Line1.lineColor = 0xffffff;
                        e4Line1.play = 1;
                    });
                };
                TestConnectLine.prototype.getNewRect = function (parent, x, y) {
                    if (x === void 0) {
                        x = 0;
                    }
                    if (y === void 0) {
                        y = 0;
                    }
                    var rect = new vf.gui.Rect();
                    rect.isClick = true;
                    rect.x = x;
                    rect.y = y;
                    rect.width = 100;
                    rect.height = 100;
                    rect.color = 0xffffff;
                    rect.lineColor = 0xff00cc;
                    rect.lineWidth = 1;
                    parent.addChild(rect);
                    return rect;
                };
                TestConnectLine.prototype.getNewConnectLine = function (parent, source, target) {
                    var connectLine = new vf.gui.ConnectLine;
                    connectLine.isAnimation = true;
                    connectLine.source = source;
                    connectLine.sourcePostion = 'center';
                    connectLine.target = target;
                    connectLine.targetPostion = 'center';
                    connectLine.lineColor = 0xff00cc;
                    connectLine.lineWidth = 2;
                    connectLine.autoPlay = false;
                    parent.addChild(connectLine);
                    return connectLine;
                };
                return TestConnectLine;
            }());
            exports.default = TestConnectLine;
        }),
        "./test/TestContainer.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestContainer = (function () {
                function TestContainer(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestContainer.prototype.onLoad = function (app, uiStage) {
                    var container1 = new vf.gui.Container();
                    container1.style.display = "none";
                    container1.name = "1";
                    container1.x = 100;
                    container1.y = 100;
                    container1.width = 100;
                    container1.height = 100;
                    container1.style.left = 500;
                    container1.style.backgroundColor = 100;
                    uiStage.addChild(container1);
                    var container2 = new vf.gui.Container();
                    container2.name = "2";
                    container2.style.left = 240;
                    container2.style.top = 100;
                    container2.style.width = 100;
                    container2.style.height = 100;
                    container2.style.backgroundRepeat = "no-repeat";
                    container2.style.backgroundColor = 0xffffff;
                    container2.style.backgroundImage = "assets/btnbg.png";
                    container2.style.backgroundPositionX = 20;
                    container2.style.backgroundPositionY = 50;
                    container2.style.backgroundSize = [50, 50];
                    uiStage.addChild(container2);
                    var container3 = new vf.gui.Container();
                    container3.name = "3";
                    container3.style.left = 380;
                    container3.style.top = 100;
                    container3.style.width = 100;
                    container3.style.height = 100;
                    container3.style.backgroundRepeat = "repeat";
                    container3.style.backgroundColor = 0xffffff;
                    container3.style.backgroundImage = "assets/pc.png";
                    container3.style.backgroundPositionX = 20;
                    container3.style.backgroundPositionY = 0;
                    uiStage.addChild(container3);
                    var container4 = new vf.gui.Container();
                    container4.name = "4";
                    container4.style.left = 100 / (uiStage.width / 100) + "%";
                    container4.style.top = 250 / (uiStage.height / 100) + "%";
                    container4.style.width = 100 / (uiStage.width / 100) + "%";
                    container4.style.height = 100 / (uiStage.height / 100) + "%";
                    container4.style.backgroundColor = 0xffffff;
                    uiStage.addChild(container4);
                    var container5 = new vf.gui.Container();
                    container5.name = "5";
                    container5.style.left = 240;
                    container5.style.top = 250;
                    container5.style.width = 1006;
                    container5.style.height = 1006;
                    container5.style.maxWidth = 100;
                    container5.style.maxHeight = 100;
                    container5.style.backgroundColor = 0xffffff;
                    uiStage.addChild(container5);
                    var container6 = new vf.gui.Container();
                    container6.name = "6";
                    container6.style.left = 430;
                    container6.style.top = 300;
                    container6.style.width = 10;
                    container6.style.height = 10;
                    container6.style.minWidth = 100;
                    container6.style.minHeight = 100;
                    container6.style.backgroundColor = 0xffffff;
                    container6.style.pivotX = container6.style.pivotY = 50;
                    uiStage.addChild(container6);
                    var containerTop = new vf.gui.Container();
                    containerTop.name = "top";
                    containerTop.style.alpha = 0.7;
                    containerTop.style.top = 0;
                    containerTop.style.left = 0;
                    containerTop.style.right = 0;
                    containerTop.style.height = 50;
                    containerTop.style.backgroundColor = 0xffffff;
                    uiStage.addChild(containerTop);
                    var containerLeft = new vf.gui.Container();
                    containerLeft.name = "left";
                    containerLeft.style.alpha = 0.7;
                    containerLeft.style.left = 0;
                    containerLeft.style.top = 0;
                    containerLeft.style.bottom = 0;
                    containerLeft.style.width = 50;
                    containerLeft.style.backgroundColor = 0xf44336;
                    uiStage.addChild(containerLeft);
                    var containerRight = new vf.gui.Container();
                    containerRight.name = "right";
                    containerRight.style.alpha = 0.7;
                    containerRight.style.top = 0;
                    containerRight.style.right = 0;
                    containerRight.style.bottom = 0;
                    containerRight.style.width = 50;
                    containerRight.style.backgroundColor = 100;
                    uiStage.addChild(containerRight);
                    var containerBottom = new vf.gui.Container();
                    containerBottom.name = "bottom";
                    containerBottom.style.alpha = 0.7;
                    containerBottom.style.left = 0;
                    containerBottom.style.right = 0;
                    containerBottom.style.bottom = 0;
                    containerBottom.style.height = 50;
                    containerBottom.style.backgroundColor = 0x4caf50;
                    uiStage.addChild(containerBottom);
                    vf.gui.TickerShared.add(function () {
                        container6.rotation += 1;
                    }, this);
                    setTimeout(function () {
                        console.log('setTimeout');
                        container2.style.width = 200;
                    }, 5000);
                };
                return TestContainer;
            }());
            exports.default = TestContainer;
        }),
        "./test/TestDrag.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestDrag = (function () {
                function TestDrag(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestDrag.prototype.onLoad = function (app, uiStage) {
                    var c1 = this.getNewContainer("自由拖动");
                    c1.rect.name = "c1";
                    c1.container.x = 15;
                    c1.container.y = 15;
                    c1.rect.style.cursor = 'pointer';
                    uiStage.addChild(c1.container);
                    c1.rect.dragOption.draggable = true;
                    c1.rect.dragOption.dragContainer = uiStage;
                    var c2 = this.getNewContainer("限定X轴移动");
                    c2.container.x = 150;
                    c2.container.y = 15;
                    uiStage.addChild(c2.container);
                    c2.rect.dragOption.draggable = true;
                    c2.rect.dragOption.dragRestrictAxis = "x";
                    var c3 = this.getNewContainer("限定Y轴移动");
                    c3.container.x = 15;
                    c3.container.y = 130;
                    uiStage.addChild(c3.container);
                    c3.rect.dragOption.draggable = true;
                    c3.rect.dragOption.dragRestrictAxis = "y";
                    var c4 = this.getNewContainer("限定边界");
                    c4.container.x = 150;
                    c4.container.y = 130;
                    uiStage.addChild(c4.container);
                    c4.rect.dragOption.draggable = true;
                    c4.rect.dragOption.dragBoundary = true;
                    var c5 = this.getNewContainer("拖动回弹");
                    c5.container.x = 15;
                    c5.container.y = 250;
                    uiStage.addChild(c5.container);
                    c5.rect.dragOption.draggable = true;
                    c5.rect.dragOption.dragBounces = true;
                    var c7 = this.getNewContainer("接收容器", undefined, false);
                    c7.container.x = 150;
                    c7.container.y = 360;
                    c7.container.name = "c7";
                    c7.container.style.display = "grid";
                    c7.container.style.gridTemplateColumns = ["repeat", 3, 30];
                    c7.container.style.gridTemplateRows = ["repeat", 3, 30];
                    c7.container.style.gridColumnGap = 10;
                    c7.container.style.gridRowGap = 10;
                    c7.container.width = 100;
                    c7.container.height = 100;
                    uiStage.addChild(c7.container);
                    c7.container.dragOption.droppable = true;
                    c7.container.dragOption.dropGroup = "group1";
                    c7.container.on(vf.gui.Interaction.ComponentEvent.DROP_TARGET, function (container, source) {
                        console.log(container.name, source.name);
                    });
                    var c6 = this.getNewContainer("拖动到\n接收容器", undefined, false);
                    c6.container.name = "c6";
                    c6.container.x = 150;
                    c6.container.y = 250;
                    uiStage.addChild(c6.container);
                    var rect;
                    for (var i = 0; i < 5; i++) {
                        rect = new vf.gui.Rect();
                        rect.name = "rect" + i.toString();
                        new vf.gui.Interaction.ClickEvent(rect, true);
                        rect.width = 30;
                        rect.height = 30;
                        rect.color = 0xffcc66;
                        rect.x = 0;
                        rect.y = 0;
                        rect.dragOption.dragBounces = true;
                        rect.dragOption.draggable = true;
                        rect.dragOption.dragGroup = "group1";
                        rect.on(vf.gui.Interaction.ComponentEvent.DRAG_START, function (rect1) {
                            console.log("DRAG_START");
                            rect1.scaleX = rect1.scaleY = 1.5;
                        }, this);
                        rect.on(vf.gui.Interaction.ComponentEvent.DRAG_END, function (rect1) {
                            console.log("DRAG_END");
                            rect1.scaleX = rect1.scaleY = 1;
                        }, this);
                        rect.on(vf.gui.Interaction.ComponentEvent.DRAG_TARGET, function (rect1) {
                            console.log("DRAG_TARGET");
                            rect1.scaleX = rect1.scaleY = 1;
                            rect1.dragOption.draggable = false;
                        }, this);
                        c6.container.addChild(rect);
                    }
                    var c8 = this.getNewContainer("自由拖动同步");
                    c8.rect.name = "c8";
                    c8.container.x = 265;
                    c8.container.y = 15;
                    uiStage.addChild(c8.container);
                    c8.rect.dragOption.draggable = true;
                    c8.rect.dragOption.dragContainer = uiStage;
                    c8.rect.dragOption.dragBounces = true;
                    c8.rect.dragOption.dragGroup = "group1";
                    c1.rect.dragOption.dragGroup = "group1";
                    c1.rect.on(vf.gui.Interaction.ComponentEvent.DRAG_START, function () {
                        c8.rect.dragOption.actionData = c1.rect.dragOption.actionData;
                    }, this);
                    c1.rect.on(vf.gui.Interaction.ComponentEvent.DRAG_MOVE, function () {
                        c8.rect.dragOption.actionData = c1.rect.dragOption.actionData;
                    }, this);
                    c1.rect.on(vf.gui.Interaction.ComponentEvent.DRAG_END, function () {
                        c8.rect.dragOption.actionData = c1.rect.dragOption.actionData;
                    }, this);
                    c1.rect.on(vf.gui.Interaction.ComponentEvent.DRAG_TARGET, function () {
                        console.log('vf.gui.Interaction.ComponentEvent.DRAG_TARGET1');
                        c8.rect.dragOption.actionData = c1.rect.dragOption.actionData;
                    }, this);
                    c8.rect.on(vf.gui.Interaction.ComponentEvent.DRAG_TARGET, function () {
                        console.log('vf.gui.Interaction.ComponentEvent.DRAG_TARGET2');
                    }, this);
                    c8.rect.on(vf.gui.Interaction.ComponentEvent.DRAG_START, function () {
                        console.log('vf.gui.Interaction.ComponentEvent.DRAG_START');
                    }, this);
                    c8.rect.on(vf.gui.Interaction.ComponentEvent.DRAG_MOVE, function () {
                        console.log('vf.gui.Interaction.ComponentEvent.DRAG_MOVE');
                    }, this);
                };
                TestDrag.prototype.getNewContainer = function (str, color, rectVisible) {
                    if (color === void 0) {
                        color = 0xffffff;
                    }
                    if (rectVisible === void 0) {
                        rectVisible = true;
                    }
                    var childContainer = new vf.gui.Container();
                    new vf.gui.Interaction.ClickEvent(childContainer, true);
                    childContainer.width = 100;
                    childContainer.height = 100;
                    childContainer.style.backgroundColor = color;
                    var label = new vf.gui.Label();
                    label.style.justifyContent = "center";
                    label.style.alignContent = "center";
                    label.style.color = 0x000000;
                    label.style.fontSize = 24;
                    label.style.wordWrap = true;
                    label.style.wordWrapWidth = 100;
                    label.text = str;
                    childContainer.addChild(label);
                    var rect = new vf.gui.Rect();
                    rect.width = 30;
                    rect.height = 30;
                    rect.color = 0xffcc66;
                    rect.x = 0;
                    rect.y = 0;
                    if (rectVisible)
                        childContainer.addChild(rect);
                    return { container: childContainer, rect: rect };
                };
                return TestDrag;
            }());
            exports.default = TestDrag;
        }),
        "./test/TestFollowLine.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestFollowLine = (function () {
                function TestFollowLine(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestFollowLine.prototype.onLoad = function (app, uiStage) {
                    var messageList = [];
                    var eraseBtn = new vf.gui.Button();
                    eraseBtn.x = 15;
                    eraseBtn.y = 15;
                    eraseBtn.text = '擦除 false';
                    uiStage.addChild(eraseBtn);
                    var restorBtn = new vf.gui.Button();
                    restorBtn.x = 130;
                    restorBtn.y = 15;
                    restorBtn.text = '重置';
                    uiStage.addChild(restorBtn);
                    var followLineTop = new vf.gui.FollowLine(uiStage);
                    followLineTop.x = 15;
                    followLineTop.y = 50;
                    followLineTop.width = 340;
                    followLineTop.height = 200;
                    followLineTop.style.backgroundColor = 0xffffff;
                    followLineTop.role = "T";
                    uiStage.addChild(followLineTop);
                    var followLineDown = new vf.gui.FollowLine();
                    followLineDown.x = 15;
                    followLineDown.y = 270;
                    followLineDown.width = 340;
                    followLineDown.height = 200;
                    followLineDown.style.backgroundColor = 0xffffff;
                    followLineDown.role = "S";
                    uiStage.addChild(followLineDown);
                    var slider = new vf.gui.Slider();
                    slider.vertical = false;
                    slider.thumb = "assets/skin/Slider/thumb.png";
                    slider.track = "assets/skin/Slider/track.png";
                    slider.tracklight = "assets/skin/Slider/tracklight.png";
                    slider.width = 340;
                    slider.height = 10;
                    slider.x = 15;
                    slider.y = 480;
                    slider.value = 0;
                    slider.maxValue = messageList.length;
                    uiStage.addChild(slider);
                    slider.on(vf.gui.Interaction.ComponentEvent.CHANGE, function (slider, curValue) {
                        followLineDown.clear();
                        followLineTop.clear();
                        for (var i = 0; i < curValue; i++) {
                            if (messageList[i]) {
                                followLineDown.setData(messageList[i]);
                                followLineTop.setData(messageList[i]);
                            }
                        }
                    });
                    followLineTop.on(vf.gui.Interaction.ComponentEvent.COMPLETE, function (display, data) {
                        messageList.push(data);
                        slider.maxValue = messageList.length;
                        followLineDown.setData(data);
                    });
                    followLineDown.on(vf.gui.Interaction.ComponentEvent.COMPLETE, function (display, data) {
                        messageList.push(data);
                        slider.maxValue = messageList.length;
                        followLineTop.setData(data);
                    });
                    var isErasing = true;
                    eraseBtn.on(vf.gui.Interaction.TouchMouseEvent.onClick, function () {
                        followLineTop.isErasing = isErasing;
                        followLineDown.isErasing = isErasing;
                        eraseBtn.text = '擦除 ' + isErasing;
                        isErasing = !isErasing;
                    });
                    restorBtn.on(vf.gui.Interaction.TouchMouseEvent.onClick, function () {
                        followLineTop.reset();
                    });
                };
                return TestFollowLine;
            }());
            exports.default = TestFollowLine;
        }),
        "./test/TestGridLayout.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestGridLayout = (function () {
                function TestGridLayout(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestGridLayout.prototype.onLoad = function (app, uiStage) {
                    var _this = this;
                    var red = new vf.gui.Container();
                    red.name = "red";
                    red.style.display = "grid";
                    red.style.gridTemplateColumns = [100, 50, 100];
                    red.style.gridTemplateRows = [100, 50, 100];
                    red.style.gridColumnGap = 10;
                    red.style.gridRowGap = 10;
                    red.style.justifyContent = "flex-start";
                    red.style.alignContent = "flex-start";
                    uiStage.addChild(red);
                    this.addContent(red, 0xf44336);
                    var yellow = new vf.gui.Container();
                    yellow.name = "yellow";
                    yellow.style.display = "grid";
                    yellow.style.gridTemplateColumns = ["repeat", 5, 30];
                    yellow.style.gridTemplateRows = ["repeat", 100, 50];
                    yellow.style.gridColumnGap = 0;
                    yellow.style.gridRowGap = 0;
                    yellow.style.justifyContent = "center";
                    yellow.style.alignContent = "center";
                    uiStage.addChild(yellow);
                    this.addContent(yellow, 0xffeb3b);
                    window.setInterval(function () {
                        _this.addContent(yellow, 0xffeb3b, 1);
                    }, 1000);
                    var purple = new vf.gui.Container();
                    purple.name = "purple";
                    purple.style.display = "grid";
                    purple.style.gridTemplateColumns = [100];
                    purple.style.gridTemplateRows = ["repeat", 100, 70];
                    purple.style.gridColumnGap = 15;
                    purple.style.gridRowGap = 15;
                    purple.style.justifyContent = "flex-end";
                    purple.style.alignContent = "flex-end";
                    uiStage.addChild(purple);
                    this.addContent(purple, 0x9c27b0);
                };
                TestGridLayout.prototype.addContent = function (parent, color, len) {
                    if (len === void 0) {
                        len = 9;
                    }
                    var childContainer;
                    for (var i = 1; i <= len; i++) {
                        childContainer = new vf.gui.Container();
                        childContainer.name = i.toString() + "_" + color;
                        childContainer.style.backgroundColor = color;
                        parent.addChild(childContainer);
                        var label = new vf.gui.Label();
                        label.style.justifyContent = "center";
                        label.style.alignContent = "center";
                        label.text = i.toString();
                        childContainer.addChild(label);
                    }
                };
                return TestGridLayout;
            }());
            exports.default = TestGridLayout;
        }),
        "./test/TestImage.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestImage = (function () {
                function TestImage(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestImage.prototype.onLoad = function (app, uiStage) {
                    var img1 = new vf.gui.Image();
                    img1.style.left = 15;
                    img1.style.top = 15;
                    img1.style.width = 340;
                    img1.style.height = 160;
                    img1.src = "assets/mask/bg2.png";
                    uiStage.addChild(img1);
                    var img2 = new vf.gui.Image();
                    img2.style.left = 15;
                    img2.style.top = 15;
                    img2.style.width = 340;
                    img2.style.height = 160;
                    img2.style.maskImage = "assets/mask/clear1.png";
                    img2.style.maskSize = [100, 100];
                    img2.style.maskPosition = [-70, -70];
                    img2.src = "assets/mask/bg.jpg";
                    uiStage.addChild(img2);
                    var img3 = new vf.gui.Image();
                    img3.x = 15;
                    img3.y = 200;
                    img3.src = "assets/dino.png";
                    img3.tint = 0xffcc00;
                    uiStage.addChild(img3);
                    var rect = new vf.gui.Rect();
                    rect.color = 0xffffff;
                    rect.lineColor = 0xff00cc;
                    rect.lineWidth = 1;
                    rect.radius = 10;
                    var img4 = new vf.gui.Image();
                    img4.x = 150;
                    img4.y = 200;
                    img4.style.maskImage = rect;
                    img4.style.maskSize = [100, 50];
                    img4.style.maskPosition = [0, 20];
                    img4.src = "assets/dino.png";
                    uiStage.addChild(img4);
                    var count = 0;
                    vf.gui.TickerShared.add(function () {
                        if (count == 700) {
                            count = 0;
                        }
                        if (img2.style.maskSize && img2.style.maskSize[0] < 1200) {
                            img2.style.maskSize = [count, count];
                        }
                        count++;
                    }, this);
                };
                return TestImage;
            }());
            exports.default = TestImage;
        }),
        "./test/TestLabel.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestLabel = (function () {
                function TestLabel(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestLabel.prototype.onLoad = function (app, uiStage) {
                    var basicText = new vf.gui.Label();
                    basicText.style.left = 15;
                    basicText.style.top = 50;
                    basicText.style.color = 0xffffff;
                    basicText.text = "Basic text in vf-gui 33434";
                    uiStage.addChild(basicText);
                    var nText = new vf.gui.Label();
                    nText.style.left = 15;
                    nText.style.top = 100;
                    nText.style.color = [0xffffff, 0xffcc00];
                    nText.text = "你好，\n世界！";
                    uiStage.addChild(nText);
                    var richText = new vf.gui.Label();
                    richText.style.left = 15;
                    richText.style.top = 180;
                    richText.fontCssStyle = this.getFontCssStyle();
                    richText.text = '包含了换行与多种自定义样式的组件,包含了换行与多种自定义样式的组件,包含了换行与多种自定义样式的组件';
                    uiStage.addChild(richText);
                    var wText = new vf.gui.Label();
                    wText.style.left = 5;
                    wText.style.top = 400;
                    wText.style.color = [0xffffff, 0xffcc00];
                    wText.style.width = 300;
                    wText.style.textAlign = "right";
                    wText.text = "我限定了宽度与位置";
                    uiStage.addChild(wText);
                };
                TestLabel.prototype.getFontCssStyle = function () {
                    var fields = {};
                    fields.fontFamily = 'Arial';
                    fields.fontSize = 36;
                    fields.fontStyle = 'italic';
                    fields.fontWeight = 'bold';
                    fields.color = [0xffffff, 0x00ff99];
                    fields.stroke = 0x4a1850;
                    fields.strokeThickness = 5;
                    fields.dropShadow = true;
                    fields.dropShadowColor = 0x000000;
                    fields.dropShadowBlur = 4;
                    fields.dropShadowAngle = Math.PI / 6;
                    fields.dropShadowDistance = 6;
                    fields.wordWrap = true;
                    fields.wordWrapWidth = 600;
                    return fields;
                };
                return TestLabel;
            }());
            exports.default = TestLabel;
        }),
        "./test/TestMouseCursor.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestMouseCursor = (function () {
                function TestMouseCursor(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestMouseCursor.prototype.onLoad = function (app, uiStage) {
                    var help = this.getContainer();
                    help.x = 100;
                    help.y = 100;
                    help.interactive = true;
                    help.style.cursor = "help";
                    uiStage.addChild(help);
                    var wait = this.getContainer();
                    wait.x = 220;
                    wait.y = 100;
                    wait.interactive = true;
                    wait.style.cursor = "wait";
                    uiStage.addChild(wait);
                    var crosshair = this.getContainer();
                    crosshair.x = 340;
                    crosshair.y = 100;
                    crosshair.interactive = true;
                    crosshair.style.cursor = "crosshair";
                    uiStage.addChild(crosshair);
                    var notAllowed = this.getContainer();
                    notAllowed.x = 100;
                    notAllowed.y = 220;
                    notAllowed.interactive = true;
                    notAllowed.style.cursor = "not-allowed";
                    uiStage.addChild(notAllowed);
                    var zoomIn = this.getContainer();
                    zoomIn.x = 220;
                    zoomIn.y = 220;
                    zoomIn.interactive = true;
                    zoomIn.style.cursor = "zoom-in";
                    uiStage.addChild(zoomIn);
                    var grab = this.getContainer();
                    grab.x = 340;
                    grab.y = 220;
                    grab.interactive = true;
                    grab.style.cursor = "grab";
                    uiStage.addChild(grab);
                    var img = this.getContainer();
                    img.x = 100;
                    img.y = 340;
                    img.interactive = true;
                    img.style.cursor = "url(assets/pc.png), pointer";
                    uiStage.addChild(img);
                };
                TestMouseCursor.prototype.getContainer = function () {
                    var container = new vf.gui.Container();
                    container.width = 100;
                    container.height = 100;
                    container.style.backgroundColor = 100;
                    return container;
                };
                return TestMouseCursor;
            }());
            exports.default = TestMouseCursor;
        }),
        "./test/TestRect.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestRect = (function () {
                function TestRect(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestRect.prototype.onLoad = function (app, uiStage) {
                    var rect = new vf.gui.Rect();
                    rect.style.left = 100;
                    rect.style.top = 100;
                    rect.style.width = 100;
                    rect.style.height = 100;
                    rect.color = 0xffffff;
                    rect.lineColor = 0xff00cc;
                    rect.lineWidth = 1;
                    rect.radius = 10;
                    rect.anchorX = 0.5;
                    rect.anchorY = 0.5;
                    uiStage.addChild(rect);
                    var rectPoint = new vf.gui.Rect();
                    rectPoint.style.left = 100;
                    rectPoint.style.top = 100;
                    rectPoint.style.width = 5;
                    rectPoint.style.height = 5;
                    rectPoint.color = 0xff00cc;
                    rectPoint.lineColor = 0xff00cc;
                    rectPoint.lineWidth = 1;
                    uiStage.addChild(rectPoint);
                    var rect1 = new vf.gui.Rect();
                    rect1.style.left = 100;
                    rect1.style.top = 250;
                    rect1.style.width = 100;
                    rect1.style.height = 100;
                    rect1.lineColor = 0xff00cc;
                    rect1.lineWidth = 1;
                    rect1.radius = 40;
                    uiStage.addChild(rect1);
                    var click = new vf.gui.Interaction.ClickEvent(rect, true);
                    rect.on(vf.gui.Interaction.TouchMouseEvent.onUp, this.onClick, this);
                    rect.on(vf.gui.Interaction.TouchMouseEvent.onDown, this.onClick, this);
                    rect.on(vf.gui.Interaction.TouchMouseEvent.onPress, this.onClick, this);
                    rect.on(vf.gui.Interaction.TouchMouseEvent.onMove, this.onClick, this);
                    rect.on(vf.gui.Interaction.TouchMouseEvent.onHover, this.onClick, this);
                    rect.on(vf.gui.Interaction.TouchMouseEvent.onClick, this.onClick, this);
                };
                TestRect.prototype.onClick = function (e) {
                    console.log(e.type);
                };
                return TestRect;
            }());
            exports.default = TestRect;
        }),
        "./test/TestScrollBar.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestScrollBar = (function () {
                function TestScrollBar(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestScrollBar.prototype.onLoad = function (app, uiStage) {
                    var title = new vf.gui.Label("scrooll组件，配合ScrollingContainer使用");
                    title.x = 10;
                    title.y = 20;
                    uiStage.addChild(title);
                    var sc = this.getScrollingContainer(uiStage, 10, 100, "拖拽进度条或拖拽图片");
                    var vscrollBar = new vf.gui.ScrollBar();
                    vscrollBar.thumb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAIAAABvrngfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NEJCQkM0RjAxRjIxMUU1OUIxODkzNzZCOTg5NDdBQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NEJCQkM1MDAxRjIxMUU1OUIxODkzNzZCOTg5NDdBQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYxOUJGMjdFMDFGMDExRTU5QjE4OTM3NkI5ODk0N0FDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU0QkJCQzRFMDFGMjExRTU5QjE4OTM3NkI5ODk0N0FDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4wp+wAAABdJREFUeNpi0Wm5xoAKmBgwADWFAAIMAK5qAZXBXGqKAAAAAElFTkSuQmCC";
                    vscrollBar.track = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAIAAABvrngfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQ0JERjUzNDAxRUUxMUU1OUIxODkzNzZCOTg5NDdBQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQUExMDQ2QzAxRUYxMUU1OUIxODkzNzZCOTg5NDdBQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNDQkRGNTMyMDFFRTExRTU5QjE4OTM3NkI5ODk0N0FDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNDQkRGNTMzMDFFRTExRTU5QjE4OTM3NkI5ODk0N0FDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KKOhfwAAABdJREFUeNpiefHiBQMqYGLAANQUAggwADUDAscAbnM3AAAAAElFTkSuQmCC";
                    vscrollBar.x = 0;
                    vscrollBar.style.right = 0;
                    vscrollBar.width = 20;
                    vscrollBar.height = sc.height;
                    vscrollBar.source = sc;
                    vscrollBar.vertical = true;
                    vscrollBar.autohide = true;
                    vscrollBar.value = 0;
                    sc.addChild(vscrollBar);
                };
                TestScrollBar.prototype.getScrollingContainer = function (uiStage, x, y, label) {
                    var sc = new vf.gui.ScrollingContainer();
                    sc.style.backgroundColor = 0xffffff;
                    sc.x = x;
                    sc.y = y;
                    sc.width = 500;
                    sc.height = 300;
                    var img = new vf.gui.Image();
                    img.src = "assets/sprite.png";
                    img.y = 0;
                    sc.addChild(img);
                    var img2 = new vf.gui.Image();
                    img2.src = "assets/dino.png";
                    img2.x = 10;
                    img2.y = 700;
                    sc.addChild(img2);
                    var img3 = new vf.gui.Image();
                    img3.src = "assets/dino.png";
                    img3.x = 300;
                    img3.y = 780;
                    sc.addChild(img3);
                    var t = new vf.gui.Label(label);
                    t.style.color = 0x000000;
                    t.y = 0;
                    sc.addChild(t);
                    uiStage.addChild(sc);
                    return sc;
                };
                return TestScrollBar;
            }());
            exports.default = TestScrollBar;
        }),
        "./test/TestScrollingContainer.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestScrollingContainer = (function () {
                function TestScrollingContainer(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestScrollingContainer.prototype.onLoad = function (app, uiStage) {
                    var scX = this.addSc(uiStage, 50, 40, "水平拖动");
                    scX.scrollX = true;
                    scX.dragScrolling = true;
                    var scY = this.addSc(uiStage, 50, 260, "垂直拖动");
                    scY.dragScrolling = true;
                    scY.scrollY = true;
                    var scXY = this.addSc(uiStage, 50, 480, "任意拖动");
                    scXY.dragScrolling = true;
                    scXY.scrollX = true;
                    scXY.scrollY = true;
                };
                TestScrollingContainer.prototype.addSc = function (uiStage, x, y, label) {
                    var sc = new vf.gui.ScrollingContainer();
                    sc.style.left = x;
                    sc.style.top = y;
                    sc.style.width = 300;
                    sc.style.height = 200;
                    sc.expandMask = 2;
                    sc.softness = 0.2;
                    uiStage.addChild(sc);
                    var title = new vf.gui.Label(label);
                    title.style.color = 0xffcc00;
                    sc.addChild(title);
                    for (var i = 0; i < 5; i++) {
                        var sp = new vf.gui.Image();
                        sp.style.top = i * 620;
                        sp.src = "assets/sprite.png";
                        sc.addChild(sp);
                    }
                    return sc;
                };
                return TestScrollingContainer;
            }());
            exports.default = TestScrollingContainer;
        }),
        "./test/TestSlider.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestSlider = (function () {
                function TestSlider(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestSlider.prototype.onLoad = function (app, uiStage) {
                    var slider = new vf.gui.Slider();
                    slider.vertical = false;
                    slider.thumb = "assets/skin/Slider/thumb.png";
                    slider.track = "assets/skin/Slider/track.png";
                    slider.tracklight = "assets/skin/Slider/tracklight.png";
                    slider.style.width = 300;
                    slider.style.height = 10;
                    slider.style.top = 50;
                    slider.style.left = 50;
                    slider.value = 50;
                    uiStage.addChild(slider);
                    var slider2 = new vf.gui.Slider();
                    slider2.vertical = true;
                    slider2.thumb = "assets/skin/Slider/thumb.png";
                    slider2.track = "assets/skin/Slider/track.png";
                    slider2.tracklight = "assets/skin/Slider/tracklight.png";
                    slider2.style.width = 10;
                    slider2.style.height = 300;
                    slider2.style.top = 100;
                    slider2.style.left = 50;
                    slider2.value = 50;
                    uiStage.addChild(slider2);
                    var slider3 = new vf.gui.Slider();
                    slider3.vertical = false;
                    slider3.track = "assets/skin/Slider/track.png";
                    slider3.tracklight = "assets/skin/Slider/tracklight.png";
                    slider3.style.width = 300;
                    slider3.style.height = 10;
                    slider3.style.top = 450;
                    slider3.style.left = 50;
                    slider3.value = 50;
                    uiStage.addChild(slider3);
                    var changeText = new vf.gui.Label("slider");
                    changeText.style.top = 100;
                    changeText.style.left = 150;
                    changeText.style.color = 0xff00cc;
                    uiStage.addChild(changeText);
                    var changingText = new vf.gui.Label("slider2");
                    changingText.style.top = 150;
                    changingText.style.left = 150;
                    changingText.style.color = 0xff00cc;
                    uiStage.addChild(changingText);
                    var progressText = new vf.gui.Label("slider3");
                    progressText.style.top = 430;
                    progressText.style.left = 150;
                    progressText.style.color = 0xff00cc;
                    uiStage.addChild(progressText);
                    var count = 0;
                    vf.gui.TickerShared.add(function () {
                        if (count > 100) {
                            count = 0;
                        }
                        slider3.value = count;
                        count++;
                    }, this);
                    slider.on(vf.gui.Interaction.ComponentEvent.CHANGE, function (slider, curValue) {
                        changeText.text = "change:" + curValue;
                    });
                    slider.on(vf.gui.Interaction.ComponentEvent.CHANGEING, function (slider, curValue) {
                        changingText.text = "changing:" + curValue;
                    });
                    slider2.on(vf.gui.Interaction.ComponentEvent.CHANGE, function (slider, curValue) {
                        changeText.text = "change:" + curValue;
                    });
                    slider2.on(vf.gui.Interaction.ComponentEvent.CHANGEING, function (slider, curValue) {
                        changingText.text = "changing:" + curValue;
                    });
                    slider3.on(vf.gui.Interaction.ComponentEvent.CHANGE, function (slider, curValue) {
                        progressText.text = "progress:" + curValue;
                    });
                };
                return TestSlider;
            }());
            exports.default = TestSlider;
        }),
        "./test/TestSortableList.ts": (function (module, exports, __webpack_require__) {
            "use strict";
        }),
        "./test/TestSpriteAnimated.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestSpriteAnimated = (function () {
                function TestSpriteAnimated(app, uiStage) {
                    var _this = this;
                    var loader = vf.Loader.shared;
                    loader.add("role", 'assets/1_role2/1_role2.json').load(function (loader, resources) {
                        _this.onLoad(app, uiStage);
                    });
                }
                TestSpriteAnimated.prototype.onLoad = function (app, uiStage) {
                    var sheetAnimated = new vf.gui.SpriteAnimated();
                    sheetAnimated.style.left = 200;
                    sheetAnimated.style.top = 500;
                    sheetAnimated.animationSpeed = 0.1;
                    sheetAnimated.animationName = "1";
                    sheetAnimated.loop = true;
                    sheetAnimated.loopCount = 30;
                    sheetAnimated.src = vf.Loader.shared.resources["role"].spritesheet;
                    sheetAnimated.anchorX = 0.5;
                    sheetAnimated.anchorY = 1;
                    sheetAnimated.play();
                    uiStage.addChild(sheetAnimated);
                    sheetAnimated.isClick = true;
                    sheetAnimated.on(vf.gui.Interaction.TouchMouseEvent.onClick, function () {
                        if (sheetAnimated.animationName == "0") {
                            sheetAnimated.animationName = "1";
                        }
                        else {
                            sheetAnimated.animationName = "0";
                        }
                    });
                    sheetAnimated.on(vf.gui.Interaction.ComponentEvent.CHANGE, function (sa) {
                        console.log("CHANGE");
                    });
                    sheetAnimated.on(vf.gui.Interaction.ComponentEvent.LOOP, function (sa) {
                        console.log("LOOP");
                    });
                    sheetAnimated.on(vf.gui.Interaction.ComponentEvent.COMPLETE, function (sa) {
                        console.log("COMPLETE");
                    });
                };
                return TestSpriteAnimated;
            }());
            exports.default = TestSpriteAnimated;
        }),
        "./test/TestTextInput.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestTextInput = (function () {
                function TestTextInput(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestTextInput.prototype.onLoad = function (app, uiStage) {
                    var textInput = new vf.gui.TextInput(false);
                    textInput.style.left = 15;
                    textInput.style.top = 100;
                    textInput.style.width = 300;
                    textInput.style.height = 30;
                    textInput.style.fontSize = 24;
                    textInput.style.fontFamily = "微软雅黑";
                    textInput.style.color = 0x00ffcc;
                    textInput.placeholder = "单行输入文本...";
                    textInput.maxLength = 15;
                    textInput.restrict = new RegExp('\\w+');
                    textInput.up = "assets/skin/TextInput/up.png";
                    textInput.down = "assets/skin/TextInput/down.png";
                    textInput.move = "assets/skin/TextInput/down.png";
                    textInput.disabled = "assets/skin/TextInput/disabled.png";
                    uiStage.addChild(textInput);
                    var multilineInput = new vf.gui.TextInput(true);
                    multilineInput.style.top = 200;
                    multilineInput.style.left = 15;
                    multilineInput.style.width = 300;
                    multilineInput.style.height = 150;
                    multilineInput.style.fontSize = 24;
                    multilineInput.style.fontFamily = "微软雅黑";
                    multilineInput.style.color = 0xffffff;
                    multilineInput.placeholder = "多行输入文本...";
                    multilineInput.up = "assets/skin/TextInput/up.png";
                    multilineInput.down = "assets/skin/TextInput/down.png";
                    multilineInput.move = "assets/skin/TextInput/down.png";
                    uiStage.addChild(multilineInput);
                };
                return TestTextInput;
            }());
            exports.default = TestTextInput;
        }),
        "./test/TestTicker.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestTicker = (function () {
                function TestTicker(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestTicker.prototype.onLoad = function (app, uiStage) {
                    vf.gui.TickerShared.add(this.update, this);
                };
                TestTicker.prototype.update = function (n) {
                };
                return TestTicker;
            }());
            exports.default = TestTicker;
        }),
        "./test/TestTimeLine.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestTimeLine = (function () {
                function TestTimeLine(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestTimeLine.prototype.onLoad = function (app, uiStage) {
                    var sheep = new Sheep();
                    uiStage.addChild(sheep.shape);
                    var sheepline = new vf.gui.Timeline();
                    sheepline.setDefault(sheep, 3000, 30);
                    sheepline.addProperty("progress", 100, 30);
                    sheepline.addProperty("progress", 200, 40, vf.gui.Easing.Linear.None);
                    sheepline.addProperty("progress", 300, 50);
                    sheepline.addProperty("progress", 400, 60);
                    sheepline.addProperty("progress", 500, 70);
                    sheepline.addProperty("progress", 600, 80);
                    sheepline.addProperty("progress", 1000, 90);
                    sheepline.addProperty("y", 30, 60);
                    sheepline.addProperty("y", 0, 90);
                    sheepline.loop = true;
                    sheepline.load();
                    sheepline.on(vf.gui.Interaction.ComponentEvent.COMPLETE, function () {
                        console.log("COMPLETE");
                    });
                    sheepline.on(vf.gui.Interaction.ComponentEvent.LOOP, function () {
                        console.log("LOOP");
                    });
                    var slider = new vf.gui.Slider();
                    slider.vertical = false;
                    slider.thumb = "assets/skin/Slider/thumb.png";
                    slider.track = "assets/skin/Slider/track.png";
                    slider.tracklight = "assets/skin/Slider/tracklight.png";
                    slider.maxValue = 90;
                    slider.style.width = 500;
                    slider.style.height = 10;
                    slider.style.bottom = 50;
                    slider.style.left = 150;
                    slider.value = 0;
                    uiStage.addChild(slider);
                    var count = 0;
                    slider.on(vf.gui.Interaction.ComponentEvent.CHANGEING, function (slider, curValue) {
                        if (count == 0) {
                            count++;
                            return;
                        }
                        console.log(count);
                        sheepline.loop = false;
                        sheepline.gotoAndStop(curValue);
                    });
                };
                return TestTimeLine;
            }());
            exports.default = TestTimeLine;
            var Sheep = (function () {
                function Sheep() {
                    this._lastPoint = [];
                    this._paths = ("M 343.5 646.6 L 343.5 646.6 C 343.5 646.6 357.2 683.2 355.8 696.8 C 322.1 685.6 319.8 692.8 319.8 692.8 C 319.8 692.8 320.1 698.8 330.1 704.5 C 340.1 710.2 341.1 713.5 341.1 713.5 C 341.1 713.5 327 717.8 319.8 718.5 C 313.6 719.1 299.9 664 300.1 659.5 C 300.2 655.9 302.1 650 301.1 639 C 300.2 629.5 296.1 615.5 292.6 608.5 C 290.1 603.6 276.6 571.5 261.1 557.5 C 254.6 529.5 256.1 473.3 230.1 472.5 C 236.6 497 252.6 525.9 243.1 548 C 240.1 555 192.4 534.3 187.1 541.5 C 179.4 552 238.6 553.5 260.2 576.9 C 286.7 608 291.2 645.5 284.5 650.8 C 279.3 655 228.9 626.3 227.8 628.8 C 225.4 634.2 236.8 645.1 249.8 651.5 C 263.9 658.5 283.8 671 287.8 678.8 C 291.4 685.7 306.6 709.8 299.8 717.5 C 297.1 720.5 253.1 690.5 239.6 681.7 C 230.4 675.7 208.1 652.9 183.6 625.9 C 182.1 604.9 176.8 597.6 173.3 593.6 C 169.8 589.6 151.5 572.8 145.8 569.6 C 140.2 566.5 122.9 559.7 141 576.3 C 162.7 596.3 165.2 621.5 165.2 621.5 C 165.2 621.5 103.2 605.7 116.8 615.9 C 137.7 631.6 144.6 628.5 155.2 632.5 C 171.2 636.9 220.2 676.4 215.9 680.2 C 209.2 686 160.2 697.1 161.3 701 C 162.9 706.8 209.3 693.9 224.3 695.2 C 247.5 697.1 289.3 724.9 287.2 728.2 C 284.8 731.9 267.8 737.7 260.5 740.2 C 255.3 742 235.3 740.9 236.7 746.3 C 238 751.5 257.5 749.2 261.5 748.7 C 269.7 747.7 308.5 736.2 308.5 736.2 C 308.5 736.2 306.8 751.6 301 758.9 C 297.2 763.6 268.9 781.8 295 774.4 C 310.2 770.1 320.2 734.8 323.2 734.2 C 326 733.6 350.9 729.4 352.5 731.2 C 356.2 735.2 360.6 751.5 360.6 751.5 C 363.1 758.6 368.4 767.3 372.7 772.5 C 377.7 784.5 376.6 798.4 379.9 800.7 C 404 798.5 408.9 761.9 415.2 747.5 C 420.5 735.4 420.2 734.9 422.5 728.7 C 424.7 723.1 426.9 720 429.1 713 C 429.8 710.7 430.8 706.8 432 702.4 C 432.6 699.9 435.5 692.5 435.5 692.5 C 436.9 687.4 442.9 674.7 445 671.9 C 446.9 669.4 461.8 640.6 462.2 649.2 C 467.9 647.9 472.2 646.7 474.2 644.9 C 476.7 646.2 481.9 642.3 482.9 644.2 C 484.1 646.4 490.9 645.7 492.6 642.9 C 498.6 646.9 502.7 667 501.2 694.5 C 499.7 722 500.5 770.5 500.2 772.3 C 499.9 774.1 496.4 776.9 494.4 780.1 C 492.4 783.3 491.9 790.6 491.9 790.6 L 486.6 797.6 C 486.6 797.6 515.6 805.8 520.4 800.6 C 525.2 795.4 519.9 779.1 523.7 762.6 C 519.9 747.4 523.2 725.6 528.2 714.1 C 526.9 708.9 528.7 692.1 528.7 692.1 C 525.5 675.3 529.5 648.6 534 634.3 C 540 641.3 538.2 672.8 541 706.1 C 549.8 728.6 549 738.2 550.3 748.4 C 551.6 758.6 554.4 770.1 554.6 777.4 C 554.8 784.7 555.1 788.9 554.3 790.7 C 553.5 792.5 550 801 550 801 L 570.5 801.3 C 570.5 801.3 569 794 572.8 793.3 C 576.6 792.6 581.1 792.3 581.1 789.8 C 581.1 787.3 576.1 777.5 575.1 772.5 C 574.1 767.5 574.6 764.3 575.9 757.5 C 573.1 712 568.9 699.2 568.1 694.2 C 567.3 689.2 568.8 674.4 570.1 663.9 C 571.4 653.4 571.1 644.1 571.9 633.1 C 578.4 633.9 621 628.6 630.2 625.6 C 639.4 622.6 653.9 613.3 665.7 606.3 C 667.2 622.3 693.7 669.8 696.2 677.8 C 698.7 685.8 689 730.3 688.2 740.8 C 687.4 751.3 684.7 775.8 676.9 786.8 C 669.1 797.8 669.9 801.6 669.9 801.6 C 669.9 801.6 680.7 801.6 691.7 801.3 C 691.7 798 692.5 792.5 696 791.5 C 699.5 790.5 706.3 792.6 707.5 791.8 C 708.7 791 704.5 773.2 704.2 767.5 C 703.9 761.8 706.4 760.5 707.7 754.5 C 709 748.5 712 730.4 713 725.2 C 714 720 719.3 682.6 720.6 675.8 C 721.9 669 720.1 665 719.1 648 C 728.9 654.2 747.9 684.5 760.9 686.5 C 760.4 691 761.9 723.5 762.9 731.5 C 763.9 739.5 766.4 781 766.4 782.5 C 766.4 784 762.9 787 759.4 791 C 755.9 795 749.9 809.5 749.9 809.5 L 770.9 809.5 C 770.9 809.5 778.9 800 778.4 796.5 C 777.9 793 783.4 779 785.4 763 C 787.4 747 792.9 700 788.4 676 C 783.9 652 760.4 633.5 758.9 608 C 764.4 590 766.3 564 766.6 555.2 C 766.9 546.3 767.4 542 768.6 542 C 769.7 542 772.8 555.4 776.4 561.3 C 780 567.2 786.7 566.8 788.2 566.5 C 789.7 566.2 792.9 567.4 791.4 549.7 C 789.9 532 769.5 498.2 765.7 494.2 C 761.9 490.2 742.2 480.1 742.2 480.1 C 742.2 480.1 714 467.3 690.7 460.8 C 662.7 452.9 591.7 453 582.7 454.5 C 574.3 455.9 536.5 466.5 523.7 472.5 C 512.4 477.9 492.5 487.5 478.7 501.2 C 468.9 511 438.1 546.6 429.5 566.8 C 422.3 583.7 409.1 618.7 401 635.7 C 392.8 653.1 377.9 681.3 378.5 680.6 C 379.1 679.9 376 671.1 369 661.6 C 361.5 651.4 343.5 646.6 343.5 646.6").split(" ");
                    this.shape = new vf.gui.Graphics();
                    this.oldValue = 0;
                    this.curValue = 0;
                    this.shape.graphics.lineStyle(1, 0xff00cc);
                }
                Object.defineProperty(Sheep.prototype, "progress", {
                    get: function () {
                        return this.curValue;
                    },
                    set: function (value) {
                        this.curValue = value;
                        this.update();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Sheep.prototype, "y", {
                    get: function () {
                        return this.shape.style.top;
                    },
                    set: function (value) {
                        this.shape.style.top = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Sheep.prototype.update = function () {
                    if (this.oldValue > this.curValue) {
                        this.oldValue = 0;
                        this.shape.graphics.clear();
                        this.shape.graphics.lineStyle(1, 0xff00cc);
                    }
                    for (var i = this.oldValue; i < this.curValue; i++) {
                        this.draw(i);
                    }
                    this.oldValue = this.curValue;
                };
                Sheep.prototype.draw = function (i) {
                    var paths = this._paths;
                    var g = this.shape;
                    if (paths[i] === "M") {
                        this._lastPoint = [];
                    }
                    if (this._lastPoint.length > 0) {
                        g.graphics.moveTo(this._lastPoint[0], this._lastPoint[1]);
                    }
                    switch (paths[i]) {
                        case "M":
                            this._lastPoint = [parseFloat(paths[i + 1]), parseFloat(paths[i + 2])];
                            g.graphics.moveTo(parseFloat(paths[i + 1]), parseFloat(paths[i + 2]));
                            break;
                        case "L":
                            this._lastPoint = [parseFloat(paths[i + 1]), parseFloat(paths[i + 2])];
                            g.graphics.lineTo(parseFloat(paths[i + 1]), parseFloat(paths[i + 2]));
                            break;
                        case "C":
                            this._lastPoint = [parseFloat(paths[i + 5]), parseFloat(paths[i + 6])];
                            g.graphics.bezierCurveTo(parseFloat(paths[i + 1]), parseFloat(paths[i + 2]), parseFloat(paths[i + 3]), parseFloat(paths[i + 4]), parseFloat(paths[i + 5]), parseFloat(paths[i + 6]));
                            break;
                    }
                };
                return Sheep;
            }());
        }),
        "./test/TestTracing.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestTracing = (function () {
                function TestTracing(app, uiStage) {
                    this.tracing = new vf.gui.Tracing();
                    this.tracing2 = new vf.gui.Tracing();
                    this.onLoad(app, uiStage);
                }
                TestTracing.prototype.onLoad = function (app, uiStage) {
                    var _this = this;
                    var tracePoints = [
                        [
                            { x: 108.5625, y: 67.0703125 },
                            { x: 92.30859375, y: 91.12109375 },
                            { x: 73.35546875, y: 111.6953125 },
                        ],
                        [
                            { x: 110.28125, y: 82.3515625 },
                            { x: 154.99609375, y: 81.78515625 },
                            { x: 200.60546875, y: 82.640625 },
                        ],
                        [
                            { x: 101.8828125, y: 111.359375 },
                            { x: 95.61328125, y: 147.6953125 },
                            { x: 92.2421875, y: 186.08984375 },
                            { x: 138.01171875, y: 188.6875 },
                            { x: 194.1171875, y: 188.6875 },
                        ],
                        [
                            { x: 108.015625, y: 109.6953125 },
                            { x: 145.16796875, y: 110.49609375 },
                            { x: 183.87109375, y: 111.18359375 },
                            { x: 180.90625, y: 148.82421875 },
                            { x: 176.85546875, y: 178.00390625 },
                        ],
                        [
                            { x: 70.1953125, y: 147.79296875 },
                            { x: 137.66015625, y: 147.83984375 },
                            { x: 206.5234375, y: 148.63671875 },
                        ],
                        [
                            { x: 134.48046875, y: 123.421875 },
                            { x: 149.24609375, y: 133.0859375 },
                        ],
                        [
                            { x: 130.77734375, y: 162.6171875 },
                            { x: 146.1640625, y: 172.87109375 },
                        ],
                        [
                            { x: 248.43359375, y: 67.94140625 },
                            { x: 231.6328125, y: 102.875 },
                            { x: 212.73046875, y: 126.8203125 },
                        ],
                        [
                            { x: 249.109375, y: 94.546875 },
                            { x: 283.87109375, y: 94.38671875 },
                            { x: 326.99609375, y: 94.6640625 },
                        ],
                        [
                            { x: 301.56640625, y: 105.62890625 },
                            { x: 270.37890625, y: 155.0625 },
                            { x: 215.25, y: 192.01953125 },
                        ],
                        [
                            { x: 238.65234375, y: 117.91015625 },
                            { x: 268.546875, y: 162.3203125 },
                            { x: 326.93359375, y: 196.53125 },
                        ],
                        [
                            { x: 175.21875, y: 201.94921875 },
                            { x: 148.23828125, y: 216.9921875 },
                            { x: 116.38671875, y: 231.87109375 },
                            { x: 155.96484375, y: 229.46875 },
                            { x: 181.94140625, y: 227.21484375 },
                        ],
                        [
                            { x: 243.20703125, y: 212.8203125 },
                            { x: 173.7578125, y: 242.53515625 },
                            { x: 93.0625, y: 271.87109375 },
                            { x: 200.01953125, y: 265.32421875 },
                            { x: 270.01953125, y: 261.09375 },
                        ],
                        [
                            { x: 259.90234375, y: 235.6796875 },
                            { x: 285.921875, y: 255.140625 },
                            { x: 311.0703125, y: 273.57421875 },
                        ],
                        [
                            { x: 204.34375, y: 277.12890625 },
                            { x: 202.53125, y: 301.94921875 },
                            { x: 199.0078125, y: 321.453125 },
                            { x: 160.7890625, y: 323.96484375 },
                        ],
                        [
                            { x: 142.52734375, y: 291.484375 },
                            { x: 111.8046875, y: 308.3515625 },
                            { x: 80.84375, y: 322.27734375 },
                        ],
                        [
                            { x: 250.578125, y: 292.7109375 },
                            { x: 285.68359375, y: 306.30859375 },
                            { x: 315.54296875, y: 319.05078125 },
                        ],
                    ];
                    this.tracing.debug = true;
                    this.tracing.x = 0;
                    this.tracing.y = 200;
                    this.tracing.width = 400;
                    this.tracing.height = 400;
                    this.tracing.mode = 0;
                    uiStage.addChild(this.tracing);
                    this.tracing.traceSprite = "assets/tracing/fan.png";
                    this.tracing.renderBgSprite = "assets/tracing/maskBg.png";
                    this.tracing.tracePoints = tracePoints;
                    var label = new vf.gui.Label();
                    label.text = "未完成";
                    label.x = 100;
                    label.y = 100;
                    uiStage.addChild(label);
                    this.tracing2.debug = true;
                    this.tracing2.x = 400;
                    this.tracing2.y = 200;
                    this.tracing2.width = 400;
                    this.tracing2.height = 400;
                    this.tracing.mode = 0;
                    uiStage.addChild(this.tracing2);
                    this.tracing2.traceSprite = "assets/tracing/fan.png";
                    this.tracing2.renderBgSprite = "assets/tracing/maskBg.png";
                    this.tracing2.tracePoints = tracePoints;
                    var label2 = new vf.gui.Label();
                    label2.text = "未完成";
                    label2.x = 500;
                    label2.y = 100;
                    uiStage.addChild(label2);
                    this.tracing.on(vf.gui.Interaction.ComponentEvent.CHANGE, function (display, data) {
                        _this.tracing2.setData(data);
                    });
                    this.tracing2.on(vf.gui.Interaction.ComponentEvent.CHANGE, function (display, data) {
                        _this.tracing.setData(data);
                    });
                    this.tracing.on(vf.gui.Interaction.ComponentEvent.COMPLETE, function (display, curValue) {
                        if (curValue.mode == 0) {
                            if (curValue.value == 0) {
                                label.text = "未完成";
                            }
                            else if (curValue.value == 1) {
                                label.text = "笔画正确";
                            }
                            else {
                                label.text = "笔画错误";
                            }
                        }
                        else if (curValue.mode == 2) {
                            label.text = "自动书写完成";
                        }
                        else if (curValue.mode == 1) {
                            label.text = "教学完成";
                        }
                    });
                    this.tracing2.on(vf.gui.Interaction.ComponentEvent.COMPLETE, function (display, curValue) {
                        if (curValue.mode == 0) {
                            if (curValue.value == 0) {
                                label2.text = "未完成";
                            }
                            else if (curValue.value == 1) {
                                label2.text = "笔画正确";
                            }
                            else {
                                label2.text = "笔画错误";
                            }
                        }
                        else if (curValue.mode == 2) {
                            label2.text = "自动书写完成";
                        }
                        else if (curValue.mode == 1) {
                            label2.text = "教学完成";
                        }
                    });
                    var clearBtn = new vf.gui.Button();
                    clearBtn.x = 50;
                    clearBtn.y = 30;
                    clearBtn.text = "清除";
                    uiStage.addChild(clearBtn);
                    clearBtn.on(vf.gui.Interaction.TouchMouseEvent.onClick, function () {
                        _this.tracing.clear();
                        _this.tracing2.clear();
                        label.text = "未完成";
                        label2.text = "未完成";
                    });
                    var radio = this.getNewRadio(uiStage);
                    radio.value = "0";
                    radio.checked = true;
                    radio.checkGroup = "radio";
                    var basicText = new vf.gui.Label();
                    basicText.style.left = 180;
                    basicText.style.top = 30;
                    basicText.style.color = 0xffffff;
                    basicText.text = '笔画检测';
                    uiStage.addChild(basicText);
                    var radio2 = this.getNewRadio(uiStage);
                    radio2.value = "1";
                    radio2.style.left = 350;
                    radio2.checkGroup = "radio";
                    basicText = new vf.gui.Label();
                    basicText.style.left = 380;
                    basicText.style.top = 30;
                    basicText.style.color = 0xffffff;
                    basicText.text = '教学模式';
                    uiStage.addChild(basicText);
                    var radio3 = this.getNewRadio(uiStage);
                    radio3.value = "2";
                    radio3.style.left = 550;
                    radio3.checkGroup = "radio";
                    basicText = new vf.gui.Label();
                    basicText.style.left = 580;
                    basicText.style.top = 30;
                    basicText.style.color = 0xffffff;
                    basicText.text = '自动书写';
                    uiStage.addChild(basicText);
                };
                TestTracing.prototype.getNewRadio = function (uiStage) {
                    var radio = new vf.gui.CheckBox();
                    radio.style.top = 30;
                    radio.style.left = 150;
                    radio.style.width = 22;
                    radio.style.height = 22;
                    radio.up = "assets/skin/Radio/unselect.png";
                    radio.down = "assets/skin/Radio/unselect.png";
                    radio.move = "assets/skin/Radio/unselect.png";
                    radio.disabled = "assets/skin/Radio/unselect.png";
                    radio.upAndSelected = "assets/skin/Radio/select_up.png";
                    radio.downAndSelected = "assets/skin/Radio/select_down.png";
                    radio.moveAndSelected = "assets/skin/Radio/select_down.png";
                    radio.disabledAndSelected = "assets/skin/Radio/select_disabled.png";
                    radio.on(vf.gui.Interaction.ComponentEvent.CHANGE, this.onChange, this);
                    uiStage.addChild(radio);
                    return radio;
                };
                TestTracing.prototype.onChange = function (checkBox) {
                    if (checkBox.checked) {
                        var value = parseInt(checkBox.value);
                        this.tracing.mode = value;
                        this.tracing2.mode = value;
                    }
                };
                return TestTracing;
            }());
            exports.default = TestTracing;
        }),
        "./test/TestTween.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestTween = (function () {
                function TestTween(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestTween.prototype.onLoad = function (app, uiStage) {
                    var root = new vf.gui.Container();
                    root.style.backgroundColor = 0x136086;
                    root.style.height = 10;
                    root.style.width = 100;
                    root.style.bottom = 0;
                    root.style.left = "50%";
                    root.style.pivotX = 5;
                    root.style.pivotY = 5;
                    root.style.rotation = -95;
                    uiStage.addChild(root);
                    new vf.gui.Tween(root.style).to({ rotation: -85 }, 2000)
                        .repeat(Infinity)
                        .easing(vf.gui.Easing.Linear.None)
                        .yoyo(true)
                        .start();
                    var rootNode = new Node(undefined, root);
                    this.createBiTree(rootNode, 0);
                };
                TestTween.prototype.createBiTree = function (node, layer) {
                    if (layer > 7) {
                        return;
                    }
                    node.leftChild = new Node(node);
                    node.leftChild.isLeft = true;
                    node.leftChild.div.style.rotation = 35;
                    this.createBiTree(node.leftChild, ++layer);
                    node.rightChild = new Node(node);
                    node.rightChild.div.style.rotation = -35;
                    this.createBiTree(node.rightChild, layer);
                };
                return TestTween;
            }());
            exports.default = TestTween;
            var Node = (function () {
                function Node(parent, root) {
                    this.div = new vf.gui.Container();
                    this.isLeft = false;
                    var div = this.div;
                    div.style.backgroundColor = 0x4caf50;
                    div.style.height = 10;
                    div.style.width = 100;
                    div.style.left = 100;
                    div.style.top = 0;
                    div.style.pivotX = 5;
                    div.style.pivotY = 5;
                    div.style.scaleX = 0.9;
                    div.style.scaleY = 0.9;
                    new vf.gui.Tween(div.style).to({ rotation: 0, scaleX: 0.1, scaleY: 0.1 }, 7000)
                        .repeat(Infinity)
                        .easing(vf.gui.Easing.Linear.None)
                        .yoyo(true)
                        .delay(1000)
                        .start();
                    new vf.gui.Tween({ color: "#4caf50" })
                        .to({ color: "#136086" }, 7000)
                        .repeat(Infinity)
                        .easing(vf.gui.Easing.Quadratic.InOut)
                        .yoyo(true)
                        .on(vf.gui.Tween.Event.update, function (obj) {
                        if (obj.color.indexOf("-") === -1) {
                            div.style.backgroundColor = vf.gui.Utils.rgbStrToNumber(obj.color);
                        }
                    })
                        .start();
                    if (root) {
                        root.addChild(div);
                    }
                    else {
                        if (parent) {
                            this.parent = parent;
                            parent.div.addChild(div);
                        }
                    }
                }
                return Node;
            }());
        }),
        "./test/TestTween2.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestTween2 = (function () {
                function TestTween2(app, uiStage) {
                    this.onLoad(app, uiStage);
                }
                TestTween2.prototype.onLoad = function (app, uiStage) {
                    console.log(performance.now());
                    console.time();
                    var tween = new vf.gui.Tween();
                    tween.addListener('complete', function () {
                        console.timeEnd();
                        console.log(performance.now());
                    });
                    var o = { x: 7000 };
                    tween.setObject(o);
                    tween.to({ x: 0 }, 4000)
                        .start();
                };
                return TestTween2;
            }());
            exports.default = TestTween2;
        }),
        "./test/index.ts": (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var TestApplication_1 = __webpack_require__("./test/TestApplication.ts");
            var Index = (function () {
                function Index() {
                }
                Index.init = function () {
                    var type = "TestContainer";
                    var param = vf.gui.Utils.getQueryVariable("type");
                    if (param) {
                        type = param;
                    }
                    new TestApplication_1.default(this, function (app, uiStage) {
                        Promise.resolve().then(function () { return __webpack_require__("./test sync recursive ^\\.\\/.*$")("./" + type); }).then(function (value) {
                            console.log("create->", type);
                            new value.default(app, uiStage);
                        });
                    });
                };
                return Index;
            }());
            Index.init();
        })
    });
});
