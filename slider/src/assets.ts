import {Ids} from "./store";
import {Assets, AssetType} from '../types/IVFTemplate'

const assets: Assets = {
    [Ids.dinoImage]: {
        type: AssetType.image,
        url: "https://vipkid-edu.github.io/vf-gui/play/assets/dino.png",
        name: Ids.dinoImage.toString()
    },
    [Ids.thumb]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Slider/thumb.png',
        name: Ids.thumb.toString()
    },
    [Ids.track]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Slider/track.png',
        name: Ids.track.toString()
    },
    [Ids.tracklight]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-gui/play/assets/skin/Slider/tracklight.png',
        name: Ids.tracklight.toString()
    },
}


export default assets
