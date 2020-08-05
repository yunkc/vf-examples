/*
*   VF文档地址: https://vipkid-edu.github.io/vf-docs/
* */

import { App, Ids } from "./store";
import { gui, guiType } from "../types/Component";
import { Components } from "../types/IVFTemplate";

const dinoWidth = 83;
const dino: gui.Image = {
  type: guiType.IMAGE,
  width: dinoWidth,
  height: 138,
  src: Ids.dinoImage,
  style: {
    justifyContent: "center"
  }
};

const title: gui.Text = {
  type: guiType.TEXT,
  width: 100,
  style: {
    justifyContent: "center"
  }
};

const btn: gui.Button = {
  type: guiType.BUTTON,
  width: 150,
  height: 50,
  up: Ids.up,
  down: Ids.down,
  move: Ids.move,
  style: {
    justifyContent: "center"
  }
};

const root: gui.Custom = {
  type: guiType.CUSTOM,
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
      text: "声音接口示例",
      style: {
        top: 160
      }
    },
    {
      id: "play1",
      libId: Ids.btn,
      text: "播放声音1",
      style: {
        top: 220
      }
    },
    {
      id: "play2",
      libId: Ids.btn,
      text: "播放声音2",
      style: {
        top: 280
      }
    },
    {
      id: "pause1",
      libId: Ids.btn,
      text: "暂停声音1",
      style: {
        top: 340
      }
    },
    {
      id: "resume1",
      libId: Ids.btn,
      text: "恢复声音1",
      style: {
        top: 400
      }
    }
  ],
  actionList: `
        @this = {
            this.on("Add", () => {
                this#play1.on('click',() => {
                    playSound({assetId:${Ids.sound1}, trackId:1});
                });
                this#play2.on('click',() => {
                    playSound({assetId:${Ids.sound2}, trackId:2});
                });
                this#pause1.on('click',() => {
                    pauseSound({assetId:${Ids.sound2}, trackId:1});
                });
                this#resume1.on('click',() => {
                    resumeSound({assetId:${Ids.sound2}, trackId:1});
                });
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
