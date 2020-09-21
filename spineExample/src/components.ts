/*
*   VF文档地址: https://vipkid-edu.github.io/vf-docs/
* */

import { Ids } from "./store";
import { gui, guiType } from "../types/Component";
import { Components } from "../types/IVFTemplate";

const spine = {
  type: "Spine",
  source: Ids.ske_json,
  autoPlay: true,
  animationName: "idle",
  loop: true,
  timeScale: 1
};

const button: gui.Button = {
  type: guiType.Button,
  width: 180,
  height: 30,
  up: Ids.up,
  down: Ids.down,
  move: Ids.move
};

const slider: gui.Slider = {
  type: guiType.Slider,
  vertical: false,
  thumb: Ids.thumb,
  track: Ids.track,
  tracklight: Ids.tracklight,
  value: 50,
  style: {
    width: 150,
    height: 10
  }
};

const root: gui.Custom = {
  type: guiType.Custom,
  interactabled: false, // 容器默认为false
  children: [
    {
      id: "eddy",
      libId: Ids.Spine,
      x: 100,
      y: 250
    },
    {
      id: "slider",
      libId: Ids.slider,
      y: 60,
      x: 250
    },
    {
      id: "playBtn",
      libId: Ids.btn,
      text: "播放动画",
      x: 250,
      y: 100
    },
    {
      id: "playQueueBtn",
      libId: Ids.btn,
      text: "播放动画队列",
      x: 250,
      y: 140
    },
    {
      id: "stopBtn",
      libId: Ids.btn,
      text: "停止动画",
      x: 250,
      y: 180
    },
    {
      id: "pauseBtn",
      libId: Ids.btn,
      text: "暂停动画",
      x: 250,
      y: 220
    },
    {
      id: "resumeBtn",
      libId: Ids.btn,
      text: "恢复动画",
      x: 250,
      y: 260
    },
    {
      id: "gotoStopBtn",
      libId: Ids.btn,
      text: "跳转并停止到第几帧",
      x: 250,
      y: 300
    },
    {
      id: "setSkinBtn1",
      libId: Ids.btn,
      text: "设置皮肤1",
      x: 250,
      y: 340
    },
    {
      id: "setSkinBtn2",
      libId: Ids.btn,
      text: "设置皮肤2",
      x: 250,
      y: 380
    }
  ],
  actionList: `
  @this = {
      this.on("Added", () => {
        this#eddy.play('breathe', true);
        var $animations = [
                {
                    name: 'happy',
                    loop: false
                }
                {
                    name: 'idle',
                    loop: false
                },
                {
                    name: 'pose',
                    loop: false
                },
                {
                    name: 'wrong',
                    loop: false
                }];
      });
      this#playBtn.on("click", () => {
        this#eddy.play('happy', false);
      });
      this#playQueueBtn.on("click", () => {
        this#eddy.playQueue($animations);
      });
      this#stopBtn.on("click", () => {
        this#eddy.stop();
      });
      this#pauseBtn.on("click", () => {
        this#eddy.pause();
      });
      this#resumeBtn.on("click", () => {
        this#eddy.resume();
      });
      this#gotoStopBtn.on("click", () => {
        this#eddy.gotoAndStopByFrame(2);
      });
      this#setSkinBtn1.on("click", () => {
        this#eddy.setSkinByName('g1lv1_1');
      });
      this#setSkinBtn2.on("click", () => {
        this#eddy.setSkinByName('g1lv1_2');
      });
      this#slider.on('CHANGE',this.onChange);
      function onChange($target, $value){
        var $scale = $value / 50;
        this#eddy.timeScale = $scale;
      };
      this#eddy.on("SPINE_COMPLETE", this.animationComplete);
      function animationComplete($animationName){
        if($animationName == 'happy'){
          trace('播放完成');
        };
      };
  }
`
};

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.btn]: button,
  [Ids.Spine]: spine as any,
  [Ids.slider]: slider
};

export default allComponents;
