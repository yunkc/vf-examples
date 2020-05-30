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
}


export default assets
