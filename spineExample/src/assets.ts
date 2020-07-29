import { Ids } from "./store";
import { Assets, AssetType } from "../types/IVFTemplate";

const assets: Assets = {
  [Ids.thumb]: {
    type: AssetType.image,
    url:
      "https://vipkid-edu.github.io/vf-gui/play/assets/skin/Slider/thumb.png",
    name: Ids.thumb.toString()
  },
  [Ids.track]: {
    type: AssetType.image,
    url:
      "https://vipkid-edu.github.io/vf-gui/play/assets/skin/Slider/track.png",
    name: Ids.track.toString()
  },
  [Ids.tracklight]: {
    type: AssetType.image,
    url:
      "https://vipkid-edu.github.io/vf-gui/play/assets/skin/Slider/tracklight.png",
    name: Ids.tracklight.toString()
  },
  [Ids.ske_json]: {
    type: AssetType.other,
    url: "https://vipkid-edu.github.io/vf-gui/play/assets/spine/eddy.json",
    name: Ids.ske_json.toString()
  },
  [Ids.ske_atlas]: {
    type: AssetType.other,
    url: "https://vipkid-edu.github.io/vf-gui/play/assets/spine/eddy.atlas",
    name: Ids.ske_atlas.toString()
  },
  [Ids.ske_tex]: {
    type: AssetType.image,
    url: "https://vipkid-edu.github.io/vf-gui/play/assets/spine/eddy.png",
    name: Ids.ske_tex.toString()
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
  },
  [Ids.spineComp]: {
    type: AssetType.js,
    url: "https://s.vipkidstatic.com/vf/plugin/spine/0.0.2.js",
    name: "Spine"
  }
};

export default assets;
