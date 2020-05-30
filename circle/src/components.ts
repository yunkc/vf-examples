/*
 *   全部文档: https://code.vipkid.com.cn/xyz/docs
 *   动画文档: https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/animation.md
 *   VFX 使用文档: https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/aciton.md
 * */

import { App, Ids } from "./store";
import { gui, guiType } from "../types/Component";
import { Components } from "../types/IVFTemplate";

const dinoWidth = 83;
const dino: gui.Image = {
  type: guiType.Image,
  src: Ids.dinoImage,
  style: {
    width: dinoWidth,
    height: 138,
    justifyContent: "center"
  }
};

const title: gui.Text = {
  type: guiType.Text,
  style: {
    width: 100,
    justifyContent: "center"
  }
};

const circle: gui.Circle = {
  type: guiType.Circle,
  lineColor: 0xff00cc,
  lineWidth: 1,
  radius: 50, //半径
  width:1,
  height:1,
  style: {
    justifyContent: "center",
  }
}

const root: gui.Custom = {
  type: guiType.Custom,
  interactabled: false,
  children: [
    {
      id: Ids.dinoImage,
      libId: Ids.dinoImage,
      style: {
        top: 0
      }
    },
    {
      id: Ids.title,
      libId: Ids.title,
      text: "矢量圆接口示例",
      style: {
        top: 160,
      }
    },
    {
      id: Ids.circle,
      libId: Ids.circle,
      color: 0xffffff,
      style: {
        top: 250,
      }
      
    },
    {
      id: Ids.circle,
      libId: Ids.circle,
      color: undefined,
      lineWidth:5,
      style: {
        top: 330,
      }
    }
  ],
  actionList:`
    @this = {
        this.on("Add", () => {

        });
    }
  `
};

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino,
  [Ids.circle]: circle,
};

export default allComponents;
