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

const star: gui.Star = {
  type: guiType.Star,
  lineColor: 0xff0000,
  lineWidth: 1,
  triangleNum: 5,
  width: 200,
  height: 200,
  fillStar: true,
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
      text: "星形正多边形接口示例",
      style: {
        top: 160,
      }
    },
    {
      id: Ids.star,
      libId: Ids.star,
      color: 0x0000ff,
      // anchorX: -50,
      style: {
        top: 500,
        justifyContent: "center",
      }
    },
    {
      id: "ten",
      libId: Ids.star,
      lineWidth: 1,
      triangleNum: 10,
      width: 60,
      height: 60,
      style: {
        top: 300,
        left: 30,
      }
    },
    {
      id: "many",
      libId: Ids.star,
      lineWidth: 1,
      triangleNum: 1,
      width: 200,
      height: 200,
      style: {
        top: 300,
        left: 200,
      }
    },
    {
      id: "innerChange",
      libId: Ids.star,
      lineWidth: 1,
      triangleNum: 5,
      innerRadius: 0.5,
      width: 120,
      height: 120,
      style: {
        top: 410,
        left: 20,
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
              if(this#many.triangleNum <= 100){
                this#many.triangleNum = this#many.triangleNum +1;
                if(this#innerChange.innerRadius < 0.8){
                  this#innerChange.innerRadius = this#innerChange.innerRadius +0.1;
                }
              }else{
                $boo1 = false
              } 
            }else{
              if(this#many.triangleNum >=2){
                this#many.triangleNum = this#many.triangleNum -1;
                if(this#innerChange.innerRadius >0.1){
                  this#innerChange.innerRadius = this#innerChange.innerRadius -0.1;
                }
              }else{
                $boo1 = true
              } 
            }
          
          });
        });
    }
  `
};

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino,
  [Ids.star]: star,
};

export default allComponents;
