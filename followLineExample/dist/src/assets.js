"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const IVFTemplate_1 = require("../types/IVFTemplate");
const assets = {
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
    [store_1.AssetId.thumb]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Slider/thumb.png',
        name: store_1.AssetId.thumb.toString()
    },
    [store_1.AssetId.track]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Slider/track.png',
        name: store_1.AssetId.track.toString()
    },
    [store_1.AssetId.tracklight]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Slider/tracklight.png',
        name: store_1.AssetId.tracklight.toString()
    }
};
exports.default = assets;
