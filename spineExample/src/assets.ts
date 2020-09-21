import { Ids } from "./store";
import { Assets, AssetType } from "../types/IVFTemplate";

const assets: Assets = {
  [Ids.thumb]: {
    type: AssetType.image,
    url:"https://vipkid-edu.github.io/vf-examples/assets/skin/Slider/thumb.png",
    name: Ids.thumb.toString()
  },
  [Ids.track]: {
    type: AssetType.image,
    url:"https://vipkid-edu.github.io/vf-examples/assets/skin/Slider/track.png",
    name: Ids.track.toString()
  },
  [Ids.tracklight]: {
    type: AssetType.image,
    url:"https://vipkid-edu.github.io/vf-examples/assets/skin/Slider/tracklight.png",
    name: Ids.tracklight.toString()
  },
  [Ids.ske_json]: {
    type: AssetType.other,
    url: "https://vipkid-edu.github.io/vf-examples/assets/spine/g1lv1_sp1.json",
    name: Ids.ske_json.toString()
  },
  [Ids.up]: {
    type: AssetType.image,
    url:"https://vipkid-edu.github.io/vf-examples/assets/skin/Button/button_up.png",
    name: Ids.up.toString()
  },
  [Ids.move]: {
    type: AssetType.image,
    url:"https://vipkid-edu.github.io/vf-examples/assets/skin/Button/button_move.png",
    name: Ids.move.toString()
  },
  [Ids.down]: {
    type: AssetType.image,
    url:"https://vipkid-edu.github.io/vf-examples/assets/skin/Button/button_down.png",
    name: Ids.down.toString()
  },
  [Ids.spineComp]: {
    type: AssetType.js,
    url: "https://s.vipkidstatic.com/vf/plugin/spine/0.0.10.js",
    name: "Spine"
  }
};

export default assets;
