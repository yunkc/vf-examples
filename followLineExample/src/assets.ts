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
    [AssetId.thumb]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Slider/thumb.png',
        name: AssetId.thumb.toString()
    },
    [AssetId.track]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Slider/track.png',
        name: AssetId.track.toString()
    },
    [AssetId.tracklight]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Slider/tracklight.png',
        name: AssetId.tracklight.toString()
    }
}

export default assets
