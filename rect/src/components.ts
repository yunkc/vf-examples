/*
*   VF文档地址: https://vipkid-edu.github.io/vf-docs/
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

const rect: gui.Rect = {
  type: guiType.Rect,
  lineColor: 0xff00cc,
  lineWidth: 1,
  radius: 10, //圆角
  style: {
    justifyContent: "center",
    width: 100,
    height: 100,
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
      text: "矢量矩形框接口示例",
      style: {
        top: 160,
      }
    },
    {
      id: Ids.rect,
      libId: Ids.rect,
      color: 0xffffff,
      style: {
        top: 200,
      }
    },
    {
      id: Ids.rect,
      libId: Ids.rect,
      color: undefined,
      lineWidth: 5,
      style: {
        top: 330,
      }
    }
  ],
  actionList: `
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
  [Ids.rect]: rect,
};

export default allComponents;
