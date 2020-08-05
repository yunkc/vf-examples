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

const circle: gui.Circle = {
  type: guiType.Circle,
  lineColor: 0xff00cc,
  lineWidth: 1,
  radius: 50, //半径
  width: 1,
  height: 1
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
      text: "矢量圆接口示例",
      style: {
        top: 160,
      }
    },
    {
      id: Ids.circle,
      libId: Ids.circle,
      color: 0xffffff,
      style: {
        top: 0,
        left: 0,
      }
    },
    {
      id: Ids.circle,
      libId: Ids.circle,
      color: undefined,
      lineWidth: 5,
      style: {
        top: 250,
        left: 180
      }
    },
    {
      id: Ids.circle,
      libId: Ids.circle,
      color: 0xffffff,
      lineWidth: 5,
      startAngle: 0,
      endAngle: 180,
      style: {
        top: 400,
        left: 60,
      }
    }
    ,
    {
      id: Ids.circle,
      libId: Ids.circle,
      color: undefined,
      lineWidth: 5,
      startAngle: 180,
      endAngle: 260,
      style: {
        top: 400,
        left: 180,
      }
    }
    ,
    {
      id: "circleAni",
      libId: Ids.circle,
      // color: 0xffff00,
      lineWidth: 5,
      startAngle: 0,
      endAngle: 0,
      style: {
        top: 550,
        left: 180,
      }
    }
  ],
  actionList: `
    @this = {
        this.on("Add", () => {
          setEnterFrame(()=>{
            if(this#circleAni.endAngle >= 360){
              this#circleAni.startAngle = this#circleAni.startAngle + 1;
            }else{
              this#circleAni.endAngle = this#circleAni.endAngle + 1;
            };
            if(this#circleAni.endAngle >= 360 && this#circleAni.startAngle >= 360){
              this#circleAni.startAngle = 0;
              this#circleAni.endAngle = 0;
            };
        });
        });
    }
  `
};

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino,
  [Ids.circle]: circle,
};

export default allComponents;
