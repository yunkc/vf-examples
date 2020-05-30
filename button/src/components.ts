/*
 *   全部文档: https://code.vipkid.com.cn/xyz/docs
 *   动画文档: https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/animation.md
 *   VFX 使用文档: https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/aciton.md
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

const btn: gui.Button = {
  type: guiType.Button,
  width: 100,
  height: 30,
  up: Ids.up,
  down: Ids.down,
  move: Ids.move,
  style: {
    justifyContent: "center"
  }
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
      text: "按钮接口示例",
      style: {
        top: 160
      }
    },
    {
      id: "clickButton",
      libId: Ids.btn,
      text: "点击按钮",
      style: {
        top: 220
      }
    },
    {
      id: "colorButton",
      libId: Ids.btn,
      text: "划过按钮",
      style: {
        top: 260
      }
    },
    {
      id: "imgButton",
      libId: Ids.btn,
      text: "点击弹起",
      style: {
        height:60,
        top: 300
      }
    }
  ],
  // 用 VFX 编写的可执行逻辑，文档请见 https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/aciton.md
  actionList: `
        @this = {
            this.on("Add", () => {

                // 注册点击事件
                this#clickButton.on('click',() => {
                    var $scaleX = this#${Ids.dinoImage}.scaleX * -1;
                    this#${Ids.dinoImage}.scaleX = -($scaleX);
                });

                // 注册带有回调参数的移入移出事件
                this#colorButton.on('hover',this.onColorButtonHover);
                
                function onColorButtonHover($event,$target,$isHover){
                  if($isHover){
                    this#colorButton.label.style.color = [0x00ffff, 0xff00cc];
                  }else{
                    this#colorButton.label.style.color = [0xffffff];
                  }
                }

                // 注释鼠标按下或弹起事件
                this#imgButton.on('press',this.onImgButtonPress);

                function onImgButtonPress($event,$target,$isPress){
                  trace($isPress);
                  if($isPress){
                    this#imgButton.img.fillMode = 'repeat';
                    this#imgButton.img.scale9Grid = [1, 1, 0, 0];
                  }else{
                    this#imgButton.img.fillMode = 'no-repeat';
                    this#imgButton.img.scale9Grid = [];
                  }
                }
            });
        }
    `
};

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino,
  [Ids.btn]: btn
};

export default allComponents;
