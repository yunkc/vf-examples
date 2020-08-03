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

const rect: gui.Rect = {
  type: guiType.Rect,
  lineColor: 0xff00cc,
  lineWidth: 1,
  radius: 5, //圆角
  color:0xffffff,
  interactabled: true, // 开启交互
  style: {
    width: 30,
    height: 30
  }
};

// =========  示例1，自定义坐标 ============== //
const connectLine: gui.ConnectLine = {
  type: guiType.ConnectLine,
  isAnimation: true,
  lineColor: 0xffffff,
  lineWidth: 2
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
      text: "连线接口示例",
      style: {
        top: 160,
      }
    },
    {
      id: Ids.connectLine1, //自动画线
      libId: Ids.connectLine,
      sourcePostion: [370,200], // 设置源坐标
      targetPostion: [520,200],// 设置目标坐标
      autoPlay: true, // 是否自动播放 ，默认自动播放true
      style: {
        top: 210,
      }
    },
    {
      id: Ids.connectLine2, //3秒后触发画线
      libId: Ids.connectLine,
      sourcePostion: [370,230], // 设置源坐标
      targetPostion: [520,230],// 设置目标坐标
      autoPlay: false, // 是否自动播放 ，默认自动播放
      lineColor: 0xffcc00,
      style: {
        top: 230,
      }
    },
    {
      id: Ids.rect1,
      libId: Ids.rect,
      style: {
        top: 250,
        left: 20
      }
    },
    {
      id: Ids.rect2,
      libId: Ids.rect,
      style: {
        top: 400,
        right: 30
      }
    },
    {
      id: Ids.connectLine3, // 点击矩形1 或 矩形2 进行连线，需要源与目标容器添加场景后才能绑定
      libId: Ids.connectLine,
      sourcePostion: 'center',
      targetPostion: 'center',
      isAnimation: true,
      autoPlay: false, // 是否自动播放 ，默认自动播放
      style: {
        top: 300,
        justifyContent: "", // 请勿设置布局，自动居中
      }
    },
  ],
  actionList: `
    @this = {
        this.on("Added", () => {
            setTimeout(3000, ()=> {
                this#${Ids.connectLine2}.play = 2;
            });
            
            this#${Ids.connectLine3}.source = "this#${Ids.rect1}";
            this#${Ids.connectLine3}.target = "this#${Ids.rect2}";

            this#${Ids.rect1}.on('click',()=>{
                trace("rect1");
                this#${Ids.connectLine3}.isClear = true; // 清除画线
                this#${Ids.connectLine3}.lineColor = '0xffffff';
                this#${Ids.connectLine3}.play = 2;
            });
            this#${Ids.rect2}.on('click',()=>{
              trace("rect2");
              this#${Ids.connectLine3}.isClear = true; // 清除画线
              this#${Ids.connectLine3}.lineColor = '0xffffcc';
              this#${Ids.connectLine3}.play = 1;
          });
        });
    }
  `
};

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino,
  [Ids.connectLine]: connectLine,
  [Ids.rect]: rect
};

export default allComponents;
