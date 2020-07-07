import {Ids,AssetId} from "./store";
import {Assets, AssetType} from '../types/IVFTemplate'

const assets: Assets = {
    [AssetId.up]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_up.png',
        name: AssetId.up.toString()
    },
    [AssetId.move]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_move.png',
        name: AssetId.move.toString()
    },
    [AssetId.down]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_down.png',
        name: AssetId.down.toString()
    },
    [AssetId.video]: {
        type: AssetType.video,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/video/friday.mp4',
        name: AssetId.video.toString()
    },
    [AssetId.poster]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/video/friday.png',
        name: AssetId.poster.toString()
    },
}

export default assets
