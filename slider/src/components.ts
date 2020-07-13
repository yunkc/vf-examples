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


const slider: gui.Slider = {
  type: guiType.Slider,
  vertical: false,
  thumb: Ids.thumb,
  track: Ids.track,
  tracklight: Ids.tracklight,
  value: 50,
  style: {
    width: 300,
    height: 10,
    justifyContent: "center",
  }
}

const slider2: gui.Slider = {
  type: guiType.Slider,
  vertical: true,
  thumb: Ids.thumb,
  track: Ids.track,
  tracklight: Ids.tracklight,
  value: 70,
  style: {
    width: 10,
    height: 150,
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
      text: "滑动条接口示例",
      style: {
        top: 160,
      }
    },
    {
      id: Ids.slider,
      libId: Ids.slider,
      style: {
        top: 250,
      }
    },
    {
      id: Ids.slider2,
      libId: Ids.slider2,
      style: {
        top: 290,
      }
    },
    {
      id: "horiz",
      libId: Ids.title,
      text: "h：",
      style: {
        top: 250,
        color: 0xffff00,
      }
    },
    {
      id: "vertical",
      libId: Ids.title,
      text: "v：",
      style: {
        top: 330,
        color: 0xffff00,
      }
    },
  ],
  actionList: `
    @this = {
        this.on("Added", () => {
            function onChange($thisObj,$curValue){
              trace("onChange");
              trace($curValue); // 鼠标弹起后触发
            };
            function onChangeing($thisObj,$curValue){
              trace("onChangeing");// 滑动中连续触发
              this#horiz.text = "h:" + $curValue;
            };
            function onChangeing2($thisObj,$curValue){
              trace("onChangeing");// 滑动中连续触发
              this#vertical.text = "v:" + $curValue;
            };
            this#${Ids.slider}.on('CHANGE',this.onChange);
            this#${Ids.slider}.on('CHANGEING',this.onChangeing);
            this#${Ids.slider2}.on('CHANGEING',this.onChangeing2);
        });
    }
  `
};

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino,
  [Ids.slider]: slider,
  [Ids.slider2]: slider2,
};

export default allComponents;
