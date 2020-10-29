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
    [store_1.Ids.checkboxUnselect]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-examples/assets/skin/CheckBox/unselect.png',
        name: store_1.Ids.checkboxUnselect.toString()
    },
    [store_1.Ids.checkboxUpAndSelected]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-examples/assets/skin/CheckBox/select_up.png',
        name: store_1.Ids.checkboxUpAndSelected.toString()
    },
    [store_1.Ids.checkboxDownAndSelected]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-examples/assets/skin/CheckBox/select_down.png',
        name: store_1.Ids.checkboxDownAndSelected.toString()
    },
    [store_1.Ids.checkboxDisabledAndSelected]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-examples/assets/skin/CheckBox/select_disabled.png',
        name: store_1.Ids.checkboxDisabledAndSelected.toString()
    },
    [store_1.Ids.radioUnselect]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-examples/assets/skin/Radio/unselect.png',
        name: store_1.Ids.radioUnselect.toString()
    },
    [store_1.Ids.radioUpAndSelected]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-examples/assets/skin/Radio/select_up.png',
        name: store_1.Ids.radioUpAndSelected.toString()
    },
    [store_1.Ids.radioDownAndSelected]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-examples/assets/skin/Radio/select_down.png',
        name: store_1.Ids.radioDownAndSelected.toString()
    },
    [store_1.Ids.radioDisabledAndSelected]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-examples/assets/skin/Radio/select_disabled.png',
        name: store_1.Ids.radioDisabledAndSelected.toString()
    }
};
exports.default = assets;
