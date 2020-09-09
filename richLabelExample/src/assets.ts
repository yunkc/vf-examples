import { Ids } from "./store";
import { Assets, AssetType } from '../types/IVFTemplate'

const assets: Assets = {
    [Ids.dinoImage]: {
        type: AssetType.image,
        url: "https://vipkid-edu.github.io/vf-examples/assets/dino.png",
        name: Ids.dinoImage.toString()
    },
    [Ids.richLabel]: {
        type: AssetType.js,
        url: "//s.vipkidstatic.com/vf/plugin/RichLabel/0.0.4.js",
        name: "RichLabel",
    }
}


export default assets
