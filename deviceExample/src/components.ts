/*
 *   VF文档地址: https://vipkid-edu.github.io/vf-docs/
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

const deviceorientation = {
  type: "Deviceorientation"
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
      text: "获取设备动作与方向示例",
      style: {
        top: 160
      }
    },
    {
      id: "device",
      libId: Ids.deviceorientation.toString()
    },
    {
      id: Ids.title,
      libId: Ids.title,
      text: "请使用移动设备",
      style: {
        top: 190
      }
    },
    {
      id: "deviceInfo",
      libId: Ids.title,
      text: "参数",
      x: 200,
      style: {
        lineHeight: 45,
        top: 220,
        justifyContent: "flex-start"
      }
    }
  ],

  actionList: `
  @this = {
    function onDeviceorientation($data) {
        trace(this#device.toString);
        this#deviceInfo.text = this#device.toString;
    };
    this.on("Added", () => {
      this#device.on('deviceorientation',this.onDeviceorientation);
    });
}`
};

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino,
  [Ids.deviceorientation]: deviceorientation as any
};

export default allComponents;
