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
    [store_1.AssetId.video]: {
        type: IVFTemplate_1.AssetType.video,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/video/friday.mp4',
        name: store_1.AssetId.video.toString()
    },
    [store_1.AssetId.poster]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/video/friday.png',
        name: store_1.AssetId.poster.toString()
    },
};
exports.default = assets;
