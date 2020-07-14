import {Ids} from "./store";
import {Assets, AssetType} from '../types/IVFTemplate'

const assets: Assets = {
    [Ids.dinoImage]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/dino.png',
        name: Ids.dinoImage.toString()
    },
    [Ids.up]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_up.png',
        name: Ids.up.toString()
    },
    [Ids.move]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_move.png',
        name: Ids.move.toString()
    },
    [Ids.down]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_down.png',
        name: Ids.down.toString()
    },
    'Particles': {
        type: AssetType.js,
        url: 'https://s.vipkidstatic.com/vf/plugin/Particles/4.2.8.js',
        name: 'Particles'
    },
    'Particles_json': {
        type: 'json',
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/firecrackerCaidai.json',
        name: 'Particles_json'
    },
    'Particles_png': {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/firecrackerCaidai.png',
        name: 'Particles_png'
    }
}


export default assets
