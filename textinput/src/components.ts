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


const textInput: gui.TextInput = {
  type: guiType.TextInput,
  placeholder: '单行输入文本...',
  maxLength: 15,
  up: Ids.up,
  down: Ids.down,
  move: Ids.move,
  style: {
    width: 300,
    height: 40,
    fontSize: 24,
    color: 0xffffff,
    fontFamily: "微软雅黑", // 必选
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
      text: "文本接口示例",
      style: {
        top: 160,
      }
    },
    {
      id: Ids.textInput,
      libId: Ids.textInput,
      style: {
        top: 250,
      }

    },
  ],
  actionList: `
    @this = {
        this.on("Added", () => {
          this.vfStage.originalEventPreventDefault = true;
        });
    }
  `
};

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino,
  [Ids.textInput]: textInput,
};

export default allComponents;
