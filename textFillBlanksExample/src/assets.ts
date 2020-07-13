import {Ids} from "./store";
import {Assets, AssetType} from '../types/IVFTemplate'

const assets: Assets = {
    [Ids.textFillBlanks]:{
        type: AssetType.js,
        url: "//s.vipkidstatic.com/vf/plugin/TextFillBlanks/0.0.12.js",
        name: "TextFillBlanks",
    },
    [Ids.up]: {
        type: AssetType.image,
        url:
          "https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_up.png",
        name: Ids.up.toString()
      },
      [Ids.move]: {
        type: AssetType.image,
        url:
          "https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_move.png",
        name: Ids.move.toString()
      },
      [Ids.down]: {
        type: AssetType.image,
        url:
          "https://vipkid-edu.github.io/vf-gui/play/assets/skin/Button/button_down.png",
        name: Ids.down.toString()
      }
}
export default assets
