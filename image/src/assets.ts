import { Ids } from "./store";
import { Assets, AssetType } from '../types/IVFTemplate'

const assets: Assets = {
    [Ids.dinoImage]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-examples/assets/dino.png',
        name: Ids.dinoImage.toString()
    },
    [Ids.pcImage]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-examples/assets/pc.png',
        name: Ids.pcImage.toString()
    },
    [Ids.bg2]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-examples/assets/mask/bg2.png',
        name: Ids.bg2.toString()
    },
    [Ids.clear1]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-examples/assets/mask/clear1.png',
        name: Ids.clear1.toString()
    },
    [Ids.bg1]: {
        type: AssetType.image,
        url: 'https://vipkid-edu.github.io/vf-examples/assets/mask/bg.jpg',
        name: Ids.bg1.toString()
    }
}


export default assets
