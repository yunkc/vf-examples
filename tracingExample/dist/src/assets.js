"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const IVFTemplate_1 = require("../types/IVFTemplate");
const assets = {
    [store_1.AssetId.fan]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/tracing/a260x260.png',
        name: store_1.AssetId.fan.toString()
    },
    [store_1.AssetId.maskBg]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/tracing/maskBg.png',
        name: store_1.AssetId.maskBg.toString()
    },
    [store_1.AssetId.unselect]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Radio/unselect.png',
        name: store_1.AssetId.unselect.toString()
    },
    [store_1.AssetId.select_up]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Radio/select_up.png',
        name: store_1.AssetId.select_up.toString()
    },
    [store_1.AssetId.select_down]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Radio/select_down.png',
        name: store_1.AssetId.select_down.toString()
    },
    [store_1.AssetId.up]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_up.png',
        name: store_1.AssetId.up.toString()
    },
    [store_1.AssetId.move]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_move.png',
        name: store_1.AssetId.move.toString()
    },
    [store_1.AssetId.down]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_down.png',
        name: store_1.AssetId.down.toString()
    },
};
exports.default = assets;
