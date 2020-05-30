"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const IVFTemplate_1 = require("../types/IVFTemplate");
const assets = {
    [store_1.Ids.dinoImage]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/dino.png',
        name: store_1.Ids.dinoImage.toString()
    }
};
exports.default = assets;
