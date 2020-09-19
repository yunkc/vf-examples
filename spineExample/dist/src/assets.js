"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const IVFTemplate_1 = require("../types/IVFTemplate");
const assets = {
    [store_1.Ids.thumb]: {
        type: IVFTemplate_1.AssetType.image,
        url: "",
        name: store_1.Ids.thumb.toString()
    },
    [store_1.Ids.track]: {
        type: IVFTemplate_1.AssetType.image,
        url: "",
        name: store_1.Ids.track.toString()
    },
    [store_1.Ids.tracklight]: {
        type: IVFTemplate_1.AssetType.image,
        url: "",
        name: store_1.Ids.tracklight.toString()
    },
    [store_1.Ids.ske_json]: {
        type: IVFTemplate_1.AssetType.other,
        url: "./assets/g1lv3_sp2.json",
        name: store_1.Ids.ske_json.toString()
    },
    [store_1.Ids.up]: {
        type: IVFTemplate_1.AssetType.image,
        url: "",
        name: store_1.Ids.up.toString()
    },
    [store_1.Ids.move]: {
        type: IVFTemplate_1.AssetType.image,
        url: "",
        name: store_1.Ids.move.toString()
    },
    [store_1.Ids.down]: {
        type: IVFTemplate_1.AssetType.image,
        url: "",
        name: store_1.Ids.down.toString()
    },
    [store_1.Ids.spineComp]: {
        type: IVFTemplate_1.AssetType.js,
        url: "https://s.vipkidstatic.com/vf/plugin/spine/0.0.5.js",
        name: "Spine"
    }
};
exports.default = assets;
