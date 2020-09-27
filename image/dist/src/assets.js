"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const IVFTemplate_1 = require("../types/IVFTemplate");
const assets = {
    [store_1.Ids.dinoImage]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-examples/assets/dino.png',
        name: store_1.Ids.dinoImage.toString()
    },
    [store_1.Ids.pcImage]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-examples/assets/pc.png',
        name: store_1.Ids.pcImage.toString()
    },
    [store_1.Ids.bg2]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-examples/assets/mask/bg2.png',
        name: store_1.Ids.bg2.toString()
    },
    [store_1.Ids.clear1]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-examples/assets/mask/clear1.png',
        name: store_1.Ids.clear1.toString()
    },
    [store_1.Ids.bg1]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-examples/assets/mask/bg.jpg',
        name: store_1.Ids.bg1.toString()
    }
};
exports.default = assets;
