"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Style = void 0;
var Style;
(function (Style) {
    let display;
    (function (display) {
        display["grid"] = "grid";
        display["block"] = "block";
        display["none"] = "none";
    })(display = Style.display || (Style.display = {}));
    let position;
    (function (position) {
        position["absolute"] = "absolute";
        position["fixed"] = "fixed";
        position["static"] = "static";
    })(position = Style.position || (Style.position = {}));
    let textAlign;
    (function (textAlign) {
        textAlign["left"] = "left";
        textAlign["right"] = "right";
        textAlign["center"] = "center";
    })(textAlign = Style.textAlign || (Style.textAlign = {}));
    let fontStyle;
    (function (fontStyle) {
        fontStyle["normal"] = "normal";
        fontStyle["italic"] = "italic";
    })(fontStyle = Style.fontStyle || (Style.fontStyle = {}));
    let fontVariant;
    (function (fontVariant) {
        fontVariant["normal"] = "normal";
    })(fontVariant = Style.fontVariant || (Style.fontVariant = {}));
    let fontWeight;
    (function (fontWeight) {
        fontWeight["normal"] = "normal";
        fontWeight["bold"] = "bold";
        fontWeight["bolder"] = "bolder";
        fontWeight["lighter"] = "lighter";
    })(fontWeight = Style.fontWeight || (Style.fontWeight = {}));
})(Style = exports.Style || (exports.Style = {}));
