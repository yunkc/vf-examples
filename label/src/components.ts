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
    justifyContent: "center",
  }
};

const title: gui.Text = {
  type: guiType.Text,
  width: 100,
  style: {
    justifyContent: "center"
  }
};
const button: gui.Button = {
  type: guiType.Button,
  width: 100,
  height: 50,
  up: Ids.up,
  down: Ids.down,
  move: Ids.move
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
      id: "label1",
      libId: Ids.title,

      style: {
        top: 160
      },
      text: "文本标签接口示例",
    },
    {
      id: "label2",
      libId: Ids.title,
      text: "手动换行，\n文本！",
      width: 200,
      style: {
        top: 200,
        left: 20,
        color: [0xffffff, 0xffcc00],
        justifyContent: "flex-start",
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
        fontSize: 30,
        wordWrap: true,
        wordWrapWidth: 400
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
    ,
    {
      id: "label6",
      libId: Ids.title,
      text: "下划线示例\n我设定了textAlign与verticalAlign 换行换行，",
      style: {
        top: 500,
        left: 10,
        width: 300,
        color: 0xffffff,
        textAlign: "center",
        wordWrap: true,
        wordWrapWidth: 200,
        backgroundColor: 0xfff,
        textDecoration: "UnderLine",
        textDecorationColor: 0xff00aa,
      },

    }
    ,
    {
      id: "label7",
      libId: Ids.title,
      text: "good dood study day day up",
      style: {
        top: 630,
        left: 10,
        width: 300,
        color: [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff],
        textAlign: "center",
        linearGradientType: "horizontal",
        linearGradientStops: [0.1, 0.4, 0.5, 0.7, 0.8, 1], //不设置 默认均匀分布
      },
    {
      id: "label8",
      libId: Ids.title,
      width: 200,
      style: {
        top: 200,
        justifyContent: "flex-end",
        fontFamily: "fontUrl"
      },
      text: "font change",
    }

  ]
};

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino,
  [Ids.button]: button,
};

export default allComponents;
