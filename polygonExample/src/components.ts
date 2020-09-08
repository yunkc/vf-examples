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

const polygon: gui.Polygon = {
  type: guiType.Polygon,
  lineColor: 0xff0000,
  lineWidth: 1,
  triangleNum: 5,
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
      text: "正多边形接口示例",
      style: {
        top: 160,
      }
    },
    {
      id: Ids.polygon,
      libId: Ids.polygon,
      color: 0x0000ff,
      style: {
        width: 100,
        height: 100,
        top: 500,
        justifyContent: "center",
      }
    },
    {
      id: "ten",
      libId: Ids.polygon,
      lineWidth: 1,
      triangleNum: 10,
      style: {
        width: 100,
        height: 100,
        top: 300,
        left: 100,
      }
    },
    {
      id: "many",
      libId: Ids.polygon,
      lineWidth: 1,
      triangleNum: 1,
      color: 0xff0000,
      style: {
        width: 100,
        height: 100,
        top: 300,
        left: 200,
      }
    },
    {
      id: "innerChange",
      libId: Ids.polygon,
      lineWidth: 1,
      triangleNum: 5,
      style: {
        width: 100,
        height: 100,
        top: 410,
        left: 280,
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
            if($boo1){
              if(this#many.triangleNum <= 10){
                this#many.triangleNum = this#many.triangleNum +1;
              }else{
                $boo1 = false
              };
            }else{
              if(this#many.triangleNum >=4){
                this#many.triangleNum = this#many.triangleNum -1;
              }else{
                $boo1 = true
              };
            };
          
          });
        });
    };
  `
};

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino,
  [Ids.polygon]: polygon,
};

export default allComponents;
