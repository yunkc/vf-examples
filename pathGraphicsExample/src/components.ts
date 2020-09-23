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

const pathGraphics: gui.PathGraphics = {
  type: guiType.PathGraphics,
  path: "M8.28848143,125.452231 C-1.42949381,88.9336908 -1.42949381,63.8698887 8.28848143,50.2608244 C25.6179011,25.9926842 94.9837512,2.34036367 97.51743,1.82723067 C163.131617,-11.4612749 206.846203,139.596449 222.241606,149.999106 C274.639593,185.404365 182.249419,194.299348 182.249419,204.319418 C182.249419,207.681836 100.183139,112.156907 97.51743,117.495199 C91.4157075,129.714381 61.6727247,158.655787 8.28848143,204.319418"
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
      text: "路径绘制接口示例",
      style: {
        top: 160,
      }
    },
    {
      id: "gggg",
      libId: Ids.pathGraphics,
      lineColor: 0x0000ff,
      lineWidth: 3,
      beginPort: 2,
      lineType: "dash",
      endPort: 3,
      style: {
        top: 200,
        left: 100
      }
    }
    ,
    {
      id: "gggg1",
      libId: Ids.pathGraphics,
      lineColor: 0x00ffff,
      lineWidth: 2,
      beginPort: 4,
      endPort: 5,
      style: {
        top: 400,
        left: 100
      }
    }
    ,
    {
      id: "gggg2",
      libId: Ids.pathGraphics,
      lineColor: 0x00ff00,
      path: "M30 630L250 630",
      lineWidth: 2,
      beginPort: 6,
      endPort: 7,
      style: {
        top: 0,
        left: 50
      }
    },
    {
      id: "gggg3",
      libId: Ids.pathGraphics,
      lineColor: 0x00ff00,
      path: "M30 670L250 670",
      lineWidth: 2,
      beginPort: 1,
      endPort: 1,
      style: {
        top: 0,
        left: 50
      }
    }

  ],
  actionList: `
    @this = {
        this.on("Added", () => {
        });
    };
  `
};

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino,
  [Ids.pathGraphics]: pathGraphics,
};

export default allComponents;
