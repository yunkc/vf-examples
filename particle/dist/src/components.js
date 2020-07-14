"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const Component_1 = require("../types/Component");
const dinoWidth = 83;
const dino = {
    type: Component_1.guiType.Image,
    width: dinoWidth,
    height: 138,
    src: store_1.Ids.dinoImage,
    style: {
        justifyContent: "center"
    }
};
const title = {
    type: Component_1.guiType.Text,
    width: 100,
    style: {
        justifyContent: "center"
    }
};
const button = {
    type: Component_1.guiType.Button,
    width: 100,
    height: 50,
    up: store_1.Ids.up,
    down: store_1.Ids.down,
    move: store_1.Ids.move,
    style: {
        justifyContent: "center"
    }
};
const ParticlesStyle = {
    type: 'Particles',
    style: {
        left: 270,
        top: 300
    }
};
const root = {
    type: Component_1.guiType.Custom,
    interactabled: false,
    children: [
        {
            id: store_1.Ids.dinoImage,
            libId: store_1.Ids.dinoImage,
            style: {
                top: 0
            }
        },
        {
            id: store_1.Ids.title,
            libId: store_1.Ids.title,
            text: "粒子示例",
            style: {
                top: 160
            }
        },
        {
            id: "particles1",
            libId: store_1.Ids.particles,
            sourceData: 'Particles_json',
            sourceImage: 'Particles_png',
            autoPlay: true
        },
        {
            id: "btn1",
            libId: store_1.Ids.button,
            text: "播放",
            style: {
                top: 200
            }
        },
        {
            id: "btn2",
            libId: store_1.Ids.button,
            text: "播放5秒",
            style: {
                top: 260
            }
        },
        {
            id: "btn3",
            libId: store_1.Ids.button,
            text: "暂停",
            style: {
                top: 320
            }
        },
        {
            id: "btn4",
            libId: store_1.Ids.button,
            text: "停止",
            style: {
                top: 380
            }
        }
    ],
    actionList: `
  @this = {
      this.on("Added", () => {
          this#btn1.on('click',() => {
              this#particles1.play();
          });
          this#btn2.on('click',() => {
              this#particles1.play(5); // -1 无限播放
          });
          this#btn3.on('click',() => {
            this#particles1.pause();
          });
          this#btn4.on('click',() => {
            this#particles1.stop();
          });

          this#particles1.on('particles_start',()=>{
            trace('particles_start');
          });

          this#particles1.on('particles_complete',()=>{
            trace('particles_complete');
          });
      });

  }
`
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.dinoImage]: dino,
    [store_1.Ids.button]: button,
    [store_1.Ids.particles]: ParticlesStyle
};
exports.default = allComponents;
