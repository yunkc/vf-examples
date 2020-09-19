"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const Component_1 = require("../types/Component");
const spine = {
    type: "Spine",
    source: store_1.Ids.ske_json,
    autoPlay: true,
    animationName: "idle",
    loop: true,
    timeScale: 1
};
const button = {
    type: Component_1.guiType.Button,
    width: 150,
    height: 30,
    up: store_1.Ids.up,
    down: store_1.Ids.down,
    move: store_1.Ids.move
};
const slider = {
    type: Component_1.guiType.Slider,
    vertical: false,
    thumb: store_1.Ids.thumb,
    track: store_1.Ids.track,
    tracklight: store_1.Ids.tracklight,
    value: 50,
    style: {
        width: 150,
        height: 10
    }
};
const root = {
    type: Component_1.guiType.Custom,
    interactabled: false,
    children: [
        {
            id: "eddy",
            libId: store_1.Ids.Spine,
            x: 100,
            y: 200
        },
        {
            id: "slider",
            libId: store_1.Ids.slider,
            y: 60,
            x: 250
        },
        {
            id: "playBtn",
            libId: store_1.Ids.btn,
            text: "播放动画",
            x: 250,
            y: 100
        },
        {
            id: "playQueueBtn",
            libId: store_1.Ids.btn,
            text: "播放动画队列",
            x: 250,
            y: 140
        },
        {
            id: "stopBtn",
            libId: store_1.Ids.btn,
            text: "停止动画",
            x: 250,
            y: 180
        },
        {
            id: "pauseBtn",
            libId: store_1.Ids.btn,
            text: "暂停动画",
            x: 250,
            y: 220
        },
        {
            id: "resumeBtn",
            libId: store_1.Ids.btn,
            text: "恢复动画",
            x: 250,
            y: 260
        },
        {
            id: "gotoStopBtn",
            libId: store_1.Ids.btn,
            text: "跳转并停止到第几帧",
            x: 250,
            y: 300
        },
        {
            id: "gotoPlayBtn",
            libId: store_1.Ids.btn,
            text: "设置皮肤",
            x: 250,
            y: 340
        }
    ],
    actionList: `
  @this = {
      this.on("Added", () => {
        this#eddy.play('breathe', true);
        var $animations = [
                {
                    name: 'happyspeak',
                    loop: false
                }
                {
                    name: 'sad-breath',
                    loop: false
                },
                {
                    name: 'sad-speak',
                    loop: false
                },
                {
                    name: 'cheer',
                    loop: false
                }];
      });
      this#playBtn.on("click", () => {
        this#eddy.play('cheer', false);
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
      this#gotoPlayBtn.on("click", () => {
        this#eddy.setSkinByName('g1lv3_1');
      });
      this#slider.on('CHANGE',this.onChange);
      function onChange($target, $value){
        var $scale = $value / 50;
        this#eddy.timeScale = $scale;
      };
      this#eddy.on("SPINE_COMPLETE", this.animationComplete);
      function animationComplete($animationName){
        if($animationName == 'cheer'){
          this#eddy.play('breathe', true);
        };
      };
  }
`
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.btn]: button,
    [store_1.Ids.Spine]: spine,
    [store_1.Ids.slider]: slider
};
exports.default = allComponents;
