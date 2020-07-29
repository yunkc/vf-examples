"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetType = exports.LoadMode = exports.ScaleMode = void 0;
var ScaleMode;
(function (ScaleMode) {
    ScaleMode["SHOW_ALL"] = "showAll";
    ScaleMode["NO_SCALE"] = "noScale";
    ScaleMode["COVER"] = "cover";
    ScaleMode["CONTAIN"] = "contain";
})(ScaleMode = exports.ScaleMode || (exports.ScaleMode = {}));
var LoadMode;
(function (LoadMode) {
    LoadMode["SINGLE"] = "single";
    LoadMode["ALL"] = "all";
})(LoadMode = exports.LoadMode || (exports.LoadMode = {}));
var AssetType;
(function (AssetType) {
    AssetType["js"] = "js";
    AssetType["svg"] = "svg";
    AssetType["image"] = "image";
    AssetType["sheet"] = "sheet";
    AssetType["font"] = "font";
    AssetType["audio"] = "audio";
    AssetType["video"] = "video";
    AssetType["other"] = "other";
})(AssetType = exports.AssetType || (exports.AssetType = {}));
