"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const IVFTemplate_1 = require("../types/IVFTemplate");
const assets = {
    [store_1.Ids.dinoImage]: {
        type: IVFTemplate_1.AssetType.image,
        url: "https://vipkid-edu.github.io/vf-gui/play/assets/dino.png",
        name: store_1.Ids.dinoImage.toString()
    },
    [store_1.Ids.thumb]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Slider/thumb.png',
        name: store_1.Ids.thumb.toString()
    },
    [store_1.Ids.track]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Slider/track.png',
        name: store_1.Ids.track.toString()
    },
    [store_1.Ids.tracklight]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Slider/tracklight.png',
        name: store_1.Ids.tracklight.toString()
    },
};
exports.default = assets;
