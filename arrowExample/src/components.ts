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

const arrow: gui.Arrow = {
  type: guiType.Arrow,
  lineColor: 0xff0000,
  lineWidth: 1,
  radius: 100,
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
      text: "箭头接口示例",
      style: {
        top: 160,
      }
    },
    {
      id: Ids.arrow,
      libId: Ids.arrow,
      width: 300,
      height: 50,
      lineType: "dash",
      style: {
        top: 500,
        justifyContent: "center",
      }
    },
    {
      id: "ten",
      libId: Ids.arrow,
      lineWidth: 2,
      radius: 30,
      width: 120,
      height: 20,
      fullArrow: true,
      anchorY: 0.5,
      style: {
        top: 300,
        left: 200,
      }
    },
    {
      id: "many",
      libId: Ids.arrow,
      lineWidth: 1,
      width: 300,
      height: 50,
      style: {
        top: 400,
        justifyContent: "center",
      }
    }

  ],
  actionList: `
    @this = {
        this.on("Add", () => {
          var $boo1 = true;
          var $boo2 = true;
          setEnterFrame(()=>{
            this#ten.rotation = this#ten.rotation +1;
          
          });
        });
    }
  `
};

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino,
  [Ids.arrow]: arrow,
};

export default allComponents;
