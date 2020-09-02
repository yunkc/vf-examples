import { Ids } from "./store";
import { Assets, AssetType } from "../types/IVFTemplate";

const assets: Assets = {
  [Ids.dinoImage]: {
    type: AssetType.image,
    url: "https://vipkid-edu.github.io/vf-examples/assets/dino.png",
    name: Ids.dinoImage.toString()
  },
  Deviceorientation: {
    type: AssetType.js,
    url: "https://s.vipkidstatic.com/vf/plugin/device/0.0.3.js",
    name: "Deviceorientation"
  }
};

export default assets;
