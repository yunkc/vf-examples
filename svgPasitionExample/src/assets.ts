import { Ids } from "./store";
import { Assets, AssetType } from '../types/IVFTemplate'

const assets: Assets = {
    [Ids.dinoImage]: {
        type: AssetType.image,
        url: "https://vipkid-edu.github.io/vf-examples/assets/dino.png",
        name: Ids.dinoImage.toString()
    },
    [Ids.svgPasition]: {
        type: AssetType.js,
        url: "./src/0.0.1.js",
        name: "SVGPasition",
    }
}


export default assets
