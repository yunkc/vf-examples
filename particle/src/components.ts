/*
*   VF文档地址: https://vipkid-edu.github.io/vf-docs/
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

const button: gui.Button = {
  type: guiType.Button,
  width: 100,
  height: 50,
  up: Ids.up,
  down: Ids.down,
  move: Ids.move,
  style: {
    justifyContent: "center"
  }
}

const ParticlesStyle: gui.Particles = {
  type: 'Particles',
  style: {
    left: 270,
    top: 300
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
      text: "粒子示例",
      style: {
        top: 160
      }
    },
    {
      id: "particles1",
      libId: Ids.particles,
      sourceData: 'Particles_json',
      sourceImage: 'Particles_png',
      autoPlay: true
    },
    {
      id: "btn1",
      libId: Ids.button,
      text: "播放",
      style: {
        top: 200
      }
    },
    {
      id: "btn2",
      libId: Ids.button,
      text: "播放5秒",
      style: {
        top: 260
      }
    },
    {
      id: "btn3",
      libId: Ids.button,
      text: "暂停",
      style: {
        top: 320
      }
    },
    {
      id: "btn4",
      libId: Ids.button,
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

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino,
  [Ids.button]: button,
  [Ids.particles]: ParticlesStyle
};

export default allComponents;
