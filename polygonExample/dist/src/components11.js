"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const Component_1 = require("../types/Component");
const video = {
    type: Component_1.guiType.Video,
    src: store_1.AssetId.video,
    controls: true,
    width: 300,
    height: 228,
    loop: true,
    muted: false,
    volume: 1,
};
const title = {
    type: Component_1.guiType.Text,
    width: 100,
    style: {
        justifyContent: "center",
        alignContent: "center",
        color: 0x000000,
        fontSize: 24,
        wordWrap: true,
        wordWrapWidth: 100,
    }
};
const button = {
    type: Component_1.guiType.Button,
    width: 100,
    height: 50,
    up: store_1.AssetId.up,
    down: store_1.AssetId.down,
    move: store_1.AssetId.move
};
const root = {
    type: Component_1.guiType.Custom,
    interactabled: true,
    children: [
        {
            id: "video",
            libId: store_1.Ids.video,
            x: 0,
            y: 0,
        },
        {
            id: "btn1",
            libId: store_1.Ids.button,
            text: "播放",
            style: {
                left: 0,
                top: 300
            }
        },
        {
            id: "btn2",
            libId: store_1.Ids.button,
            text: "暂停",
            style: {
                left: 120,
                top: 300
            }
        },
        {
            id: "btn4",
            libId: store_1.Ids.button,
            text: "静音",
            style: {
                left: 0,
                top: 370
            }
        },
        {
            id: "btn5",
            libId: store_1.Ids.button,
            text: "全屏",
            style: {
                left: 120,
                top: 370
            }
        },
        {
            id: "btn6",
            libId: store_1.Ids.button,
            text: "退出全屏",
            style: {
                left: 240,
                top: 370
            }
        },
        {
            id: "btn7",
            libId: store_1.Ids.button,
            text: "到第0秒",
            style: {
                left: 0,
                top: 440
            }
        },
        {
            id: "btn8",
            libId: store_1.Ids.button,
            text: "调大音量",
            style: {
                left: 120,
                top: 440
            }
        },
        {
            id: "btn9",
            libId: store_1.Ids.button,
            text: "减小音量",
            style: {
                left: 240,
                top: 440
            }
        },
    ],
    actionList: `
  @this = {
      this.on("Added", () => {
        
        this#btn1.on('click',() => {
            this#video.play();
        });
        this#btn2.on('click',() => {
            this#video.pause();
        });
        this#btn4.on('click',() => {
          if(this#video.muted == true){
              this#video.muted = false;
              this#btn4.text = "静音";
          }else{
              this#video.muted = true;
              this#btn4.text = "取消静音";
          }
        });
        this#btn5.on('click',() => {
            this#video.requestFullScreen();
        });
        this#btn6.on('click',() => {
            this#video.exitFullscreen();
        });
        this#btn7.on('click',() => {
            this#video.currentTime = 0;
        });
        this#btn8.on('click',() => {
            this#video.volume = this#video.volume +0.1;
        });
        this#btn9.on('click',() => {
            this#video.volume = this#video.volume - 0.1;
        });

      });

  }
`
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.video]: video,
    [store_1.Ids.button]: button,
};
exports.default = allComponents;
