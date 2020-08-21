import {Ids} from "./store";
import {Assets, AssetType} from '../types/IVFTemplate'

const assets: Assets = {
    [Ids.matter]:{
        type: AssetType.js,
        url: "//s.vipkidstatic.com/vf/plugin/Matter/0.0.1.js?555",
        name: "Matter",
    },
    [Ids.cloth]: {
        type: AssetType.image,
        url: "//vipkid-edu.github.io/vf-examples/assets/matter/cloth.png",
        name: Ids.cloth.toString(),
    },
    [Ids.bird]: {
        type: AssetType.image,
        url: "//vipkid-edu.github.io/vf-examples/assets/matter/bird.png",
        name: Ids.bird.toString(),
    },
    [Ids.pig]: {
        type: AssetType.image,
        url: "//vipkid-edu.github.io/vf-examples/assets/matter/pig.png",
        name: Ids.pig.toString(),
    },
    [Ids.wood]: {
        type: AssetType.image,
        url: "//vipkid-edu.github.io/vf-examples/assets/matter//wood.png",
        name: Ids.wood.toString(),
    }
}

export default assets
