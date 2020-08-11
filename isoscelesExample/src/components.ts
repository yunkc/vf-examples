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

const isosceles: gui.Isosceles = {
  type: guiType.Isosceles,
  lineColor: 0xff0000,
  lineWidth: 1,
  upLine: 50,
  downLine: 100,
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
      text: "等腰三角形梯形接口示例",
      style: {
        top: 160,
      }
    },
    {
      id: Ids.isosceles,
      libId: Ids.isosceles,
      width: 200,
      height: 50,
      lineType: "dash",
      style: {
        top: 500,
        justifyContent: "center",
      }
    },
    {
      id: "ten",
      libId: Ids.isosceles,
      lineWidth: 2,
      radius: 30,
      width: 120,
      height: 150,
      upLine: 0,
      anchorY: 0.5,
      anchorX: 0.5,
      style: {
        top: 300,
        left: 200,
      }
    },
    {
      id: "many",
      libId: Ids.isosceles,
      lineWidth: 1,
      width: 200,
      height: 50,
      style: {
        top: 400,
        justifyContent: "center",
      }
    },
    {
      id: "many",
      libId: Ids.isosceles,
      lineWidth: 1,
      color: 0x00ff00,
      width: 50,
      height: 40,
      style: {
        top: 400,
        justifyContent: "left",
      }
    }

  ],
  actionList: `
    @this = {
        this.on("Add", () => {
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
  [Ids.isosceles]: isosceles,
};

export default allComponents;
