"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const IVFTemplate_1 = require("../types/IVFTemplate");
const assets = {
    [store_1.Ids.matter]: {
        type: IVFTemplate_1.AssetType.js,
        url: "//s.vipkidstatic.com/vf/plugin/Matter/0.0.1.js?555",
        name: "Matter",
    },
    [store_1.Ids.cloth]: {
        type: IVFTemplate_1.AssetType.image,
        url: "//vipkid-edu.github.io/vf-examples/assets/matter/cloth.png",
        name: store_1.Ids.cloth.toString(),
    },
    [store_1.Ids.bird]: {
        type: IVFTemplate_1.AssetType.image,
        url: "//vipkid-edu.github.io/vf-examples/assets/matter/bird.png",
        name: store_1.Ids.bird.toString(),
    },
    [store_1.Ids.pig]: {
        type: IVFTemplate_1.AssetType.image,
        url: "//vipkid-edu.github.io/vf-examples/assets/matter/pig.png",
        name: store_1.Ids.pig.toString(),
    },
    [store_1.Ids.wood]: {
        type: IVFTemplate_1.AssetType.image,
        url: "//vipkid-edu.github.io/vf-examples/assets/matter//wood.png",
        name: store_1.Ids.wood.toString(),
    }
};
exports.default = assets;
