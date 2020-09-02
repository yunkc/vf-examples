"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const IVFTemplate_1 = require("../types/IVFTemplate");
const assets = {
    [store_1.Ids.dinoImage]: {
        type: IVFTemplate_1.AssetType.image,
        url: "https://vipkid-edu.github.io/vf-examples/assets/dino.png",
        name: store_1.Ids.dinoImage.toString()
    },
    Deviceorientation: {
        type: IVFTemplate_1.AssetType.js,
        url: "https://s.vipkidstatic.com/vf/plugin/device/0.0.3.js",
        name: "Deviceorientation"
    }
};
exports.default = assets;
