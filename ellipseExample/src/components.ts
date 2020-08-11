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

const ellipse: gui.Ellipse = {
  type: guiType.Ellipse,
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
      text: "椭圆接口示例",
      style: {
        top: 160,
      }
    },
    {
      id: "ten",
      libId: Ids.ellipse,
      lineWidth: 2,
      radius: 30,
      width: 120,
      height: 50,
      anchorX: 0.5,
      anchorY: 0.5,
      style: {
        top: 250,
        left: 200,
      }
    },
    {
      id: "many",
      libId: Ids.ellipse,
      lineWidth: 1,
      width: 100,
      height: 100,
      style: {
        top: 320,
        justifyContent: "center",
      }
    },
    {
      id: "many1",
      libId: Ids.ellipse,
      lineWidth: 3,
      width: 200,
      height: 100,
      style: {
        top: 450,
        justifyContent: "center",
      }
    },
    {
      id: "many2",
      libId: Ids.ellipse,
      lineWidth: 3,
      width: 60,
      height: 20,
      color: 0x00ff00,
      style: {
        top: 480,
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
  [Ids.ellipse]: ellipse,
};

export default allComponents;
