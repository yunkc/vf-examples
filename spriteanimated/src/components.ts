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

const btn: gui.Button = {
  type: guiType.Button,
  width: 150,
  height: 50,
  up: Ids.up,
  down: Ids.down,
  move: Ids.move,
  style: {
    justifyContent: "center"
  }
};

const spriteAnimated: gui.SpriteAnimated = {
  type: guiType.SpriteAnimated,
  animationSpeed: 0.1,
  loop: true,
  loopCount: 0,//设置循环次数，0为不限制
  src: Ids.sheet, //方式1，有可使用位图数组填充
  anchorX: 0.2, // 设置脚底为中心点
  anchorY: 1,
  style: {
    justifyContent: "center",
  }
}

const root: gui.Custom = {
  type: guiType.Custom,
  interactabled: false,
  children: [
    {
      id: Ids.title,
      libId: Ids.title,
      text: "序列帧接口示例",
      style: {
        top: 20,
      }
    },
    {
      id: Ids.spriteAnimated,
      libId: Ids.spriteAnimated,
      autoPlay: true,
      animationName: "1",
      style: {
        top: 450,
      }
    },
    {
      id: "clickButton",
      libId: Ids.btn,
      text: "切换动画",
      style: {
        top: 500
      }
    },
  ],
  actionList: `
    @this = {
        this.on("Added", () => {
            this#clickButton.on('click',()=>{
                  trace(this#${Ids.spriteAnimated}.animationName);
                  if (this#${Ids.spriteAnimated}.animationName == "0") {
                    this#${Ids.spriteAnimated}.animationName = "1";
                  } else {
                    this#${Ids.spriteAnimated}.animationName = "0";
                  };
            });


            this#${Ids.spriteAnimated}.on("CHANGE", () => {
                trace("CHANGE");
            });

            this#${Ids.spriteAnimated}.on("LOOP", () => {
                trace("LOOP");
            });

            this#${Ids.spriteAnimated}.on("COMPLETE", () => {
                trace("COMPLETE"); // loop = false 时，触发
            });
        });
    }
  `
};

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino,
  [Ids.spriteAnimated]: spriteAnimated,
  [Ids.btn]: btn,
};

export default allComponents;
