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
    [store_1.Ids.richLabel]: {
        type: IVFTemplate_1.AssetType.js,
        url: "//s.vipkidstatic.com/vf/plugin/RichLabel/0.0.3.js",
        name: "RichLabel",
    }
};
exports.default = assets;
