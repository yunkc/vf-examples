"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const IVFTemplate_1 = require("../types/IVFTemplate");
const assets = {
    [store_1.Ids.thumb]: {
        type: IVFTemplate_1.AssetType.image,
        url: "https://vipkid-edu.github.io/vf-examples/assets/skin/Slider/thumb.png",
        name: store_1.Ids.thumb.toString()
    },
    [store_1.Ids.track]: {
        type: IVFTemplate_1.AssetType.image,
        url: "https://vipkid-edu.github.io/vf-examples/assets/skin/Slider/track.png",
        name: store_1.Ids.track.toString()
    },
    [store_1.Ids.tracklight]: {
        type: IVFTemplate_1.AssetType.image,
        url: "https://vipkid-edu.github.io/vf-examples/assets/skin/Slider/tracklight.png",
        name: store_1.Ids.tracklight.toString()
    },
    [store_1.Ids.ske_json]: {
        type: IVFTemplate_1.AssetType.other,
        url: "https://vipkid-edu.github.io/vf-examples/assets/spine/g1lv1_sp1.json",
        name: store_1.Ids.ske_json.toString()
    },
    [store_1.Ids.up]: {
        type: IVFTemplate_1.AssetType.image,
        url: "https://vipkid-edu.github.io/vf-examples/assets/skin/Button/button_up.png",
        name: store_1.Ids.up.toString()
    },
    [store_1.Ids.move]: {
        type: IVFTemplate_1.AssetType.image,
        url: "https://vipkid-edu.github.io/vf-examples/assets/skin/Button/button_move.png",
        name: store_1.Ids.move.toString()
    },
    [store_1.Ids.down]: {
        type: IVFTemplate_1.AssetType.image,
        url: "https://vipkid-edu.github.io/vf-examples/assets/skin/Button/button_down.png",
        name: store_1.Ids.down.toString()
    },
    [store_1.Ids.spineComp]: {
        type: IVFTemplate_1.AssetType.js,
        url: "https://s.vipkidstatic.com/vf/plugin/spine/0.0.10.js",
        name: "Spine"
    }
};
exports.default = assets;
