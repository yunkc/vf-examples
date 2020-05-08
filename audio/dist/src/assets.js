"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const IVFTemplate_1 = require("../types/IVFTemplate");
const assets = {
    [store_1.Ids.dinoImage]: {
        type: IVFTemplate_1.AssetType.IMAGE,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/dino.png',
        name: store_1.Ids.dinoImage.toString()
    },
    [store_1.Ids.up]: {
        type: IVFTemplate_1.AssetType.IMAGE,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_up.png',
        name: store_1.Ids.up.toString()
    },
    [store_1.Ids.move]: {
        type: IVFTemplate_1.AssetType.IMAGE,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_move.png',
        name: store_1.Ids.move.toString()
    },
    [store_1.Ids.down]: {
        type: IVFTemplate_1.AssetType.IMAGE,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_down.png',
        name: store_1.Ids.down.toString()
    },
    [store_1.Ids.sound1]: {
        type: IVFTemplate_1.AssetType.SOUND,
        url: './assets/sound1.mp3',
        name: store_1.Ids.sound1.toString()
    },
    [store_1.Ids.sound2]: {
        type: IVFTemplate_1.AssetType.SOUND,
        url: './assets/sound2.mp3',
        name: store_1.Ids.sound2.toString()
    },
};
exports.default = assets;
