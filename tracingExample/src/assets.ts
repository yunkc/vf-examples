import {Ids,AssetId} from "./store";
import {Assets, AssetType} from '../types/IVFTemplate'

const assets: Assets = {
    [AssetId.fan]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/tracing/fan.png',
        name: AssetId.fan.toString()
    },
    [AssetId.maskBg]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/tracing/maskBg.png',
        name: AssetId.maskBg.toString()
    },
    [AssetId.unselect]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Radio/unselect.png',
        name: AssetId.unselect.toString()
    },
    [AssetId.select_up]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Radio/select_up.png',
        name: AssetId.select_up.toString()
    },
    [AssetId.select_down]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Radio/select_down.png',
        name: AssetId.select_down.toString()
    },
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
}

export default assets
