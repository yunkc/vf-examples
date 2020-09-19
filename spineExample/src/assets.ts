import { Ids } from "./store";
import { Assets, AssetType } from "../types/IVFTemplate";

const assets: Assets = {
  [Ids.thumb]: {
    type: AssetType.image,
    url:
      "",
    name: Ids.thumb.toString()
  },
  [Ids.track]: {
    type: AssetType.image,
    url:
      "",
    name: Ids.track.toString()
  },
  [Ids.tracklight]: {
    type: AssetType.image,
    url:
      "",
    name: Ids.tracklight.toString()
  },
  [Ids.ske_json]: {
    type: AssetType.other,
    url: "./assets/g1lv3_sp2.json",
    name: Ids.ske_json.toString()
  },
  [Ids.up]: {
    type: AssetType.image,
    url:
      "",
    name: Ids.up.toString()
  },
  [Ids.move]: {
    type: AssetType.image,
    url:
      "",
    name: Ids.move.toString()
  },
  [Ids.down]: {
    type: AssetType.image,
    url:
      "",
    name: Ids.down.toString()
  },
  [Ids.spineComp]: {
    type: AssetType.js,
    url: "https://s.vipkidstatic.com/vf/plugin/spine/0.0.5.js",
    name: "Spine"
  }
};

export default assets;
