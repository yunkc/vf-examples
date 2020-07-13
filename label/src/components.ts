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
  width: dinoWidth,
  height: 138,
  src: Ids.dinoImage,
  style: {
    justifyContent: "center"
  }
};

const title: gui.Text = {
  type: guiType.Text,
  width: 100,
  style: {
    justifyContent: "center"
  }
};

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
      text: "文本标签接口示例",
      style: {
        top: 160
      }
    },
    {
      id: "label2",
      libId: Ids.title,
      text: "手动换行，\n文本！",
      style: {
        top: 200,
        color: [0xffffff, 0xffcc00],
        fontSize: 32
      }
    },
    {
      id: "label3",
      libId: Ids.title,
      text:
        "自动换行文本设置 wordWrap = true , wordWrapWidth = width 开启自动换行。",
      style: {
        top: 290,
        color: [0xffffff, 0x00ff99],
        fontSize: 32,
        wordWrap: true,
        wordWrapWidth: 500
      }
    },
    {
      id: "label4",
      libId: Ids.title,
      text: "我是有滤镜的文字",
      style: {
        top: 400,
        color: [0xffffff, 0x00ff99],
        stroke: 0x4a1850,
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: "#000000",
        dropShadowBlur: 1,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 1
      }
    },
    {
      id: "label5",
      libId: Ids.title,
      text: "我设定了textAlign与verticalAlign",
      style: {
        top: 440,
        left: 80,
        color: 0xffffff,
        width: 450,
        height: 50,
        verticalAlign: "middle",
        textAlign: "center",
        backgroundColor: 0xfff
      }
    }
  ]
};

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino
};

export default allComponents;
