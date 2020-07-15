"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const IVFTemplate_1 = require("../types/IVFTemplate");
const assets = {
    [store_1.Ids.dinoImage]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/dino.png',
        name: store_1.Ids.dinoImage.toString()
    },
    [store_1.Ids.up]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_up.png',
        name: store_1.Ids.up.toString()
    },
    [store_1.Ids.move]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_move.png',
        name: store_1.Ids.move.toString()
    },
    [store_1.Ids.down]: {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_down.png',
        name: store_1.Ids.down.toString()
    },
    'Particles': {
        type: IVFTemplate_1.AssetType.js,
        url: 'https://s.vipkidstatic.com/vf/plugin/Particles/4.2.8.js',
        name: 'Particles'
    },
    'Particles_json': {
        type: 'json',
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/firecrackerCaidai.json',
        name: 'Particles_json'
    },
    'Particles_png': {
        type: IVFTemplate_1.AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/firecrackerCaidai.png',
        name: 'Particles_png'
    }
};
exports.default = assets;
