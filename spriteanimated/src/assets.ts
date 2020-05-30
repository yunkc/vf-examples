import {Ids} from "./store";
import {Assets, AssetType} from '../types/IVFTemplate'

const assets: Assets = {
    [Ids.dinoImage]: {
        type: AssetType.image,
        url: "https://vipkid-edu.github.io/vf-gui/play/assets/dino.png",
        name: Ids.dinoImage.toString()
    },
    [Ids.sheetImage]: { // 可不写，加载json数据时，会自动下载
        type: AssetType.image,
        url: "https://vipkid-edu.github.io/vf-gui/play/assets/1_role2/1_role2.png",
        name: Ids.sheetImage.toString()
    },
    [Ids.sheet]: {
        type: AssetType.sheet,
        url: "https://vipkid-edu.github.io/vf-gui/play/assets/1_role2/1_role2.json",
        name: Ids.sheet.toString()
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
