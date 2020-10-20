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
  type: guiType.PathGraphics
}

const svgPasition = {
  type: guiType.SVGPasition,
  name: 'SVGPasition',
  duration: 800,
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
      text: "svg变化示例",
      style: {
        top: 160,
      }
    },
    {
      id: "graphc",
      libId: Ids.pathGraphics,
      lineColor: 0x0000ff,
      lineWidth: 3,
      style: {
        top: 200,
        left: 100
      }
    }
    ,
    {
      id: "svgPasition",
      libId: Ids.svgPasition
    }
  ],
  actionList: `
    @this = {
        function updatePath($path){
          this#graphc.path=$path;
        };
        function endPath($path){
          setTimeout(2000, ()=> {
            this.animate();
          });
        };
        var $boo = true;
        function animate(){
          if($boo == true){
            this#svgPasition.from = global$pathA;
            this#svgPasition.to = global$pathB;
          }else{
            $boo = true;
            this#svgPasition.from = global$pathB;
            this#svgPasition.to = global$pathC;
          };
          this#svgPasition.play();
        };
        this.on("Add", ()=>{
          this#svgPasition.on('onUpdata',this.updatePath);
          this#svgPasition.on('onEnd',this.endPath);
          this.animate();
        });
    }
  `
};

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino,
  [Ids.svgPasition]: svgPasition as gui.AllGUI,
  [Ids.pathGraphics]: pathGraphics,
};

export default allComponents;
