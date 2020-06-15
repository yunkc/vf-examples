"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const IVFTemplate_1 = require("../types/IVFTemplate");
const assets = {
    [store_1.Ids.textFillBlanks]: {
        type: IVFTemplate_1.AssetType.js,
        url: "//s.vipkidstatic.com/vf/plugin/TextFillBlanks/0.0.12.js",
        name: "TextFillBlanks",
    },
    [store_1.Ids.up]: {
        type: IVFTemplate_1.AssetType.image,
        url: "https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_up.png",
        name: store_1.Ids.up.toString()
    },
    [store_1.Ids.move]: {
        type: IVFTemplate_1.AssetType.image,
        url: "https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_move.png",
        name: store_1.Ids.move.toString()
    },
    [store_1.Ids.down]: {
        type: IVFTemplate_1.AssetType.image,
        url: "https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_down.png",
        name: store_1.Ids.down.toString()
    }
};
exports.default = assets;
