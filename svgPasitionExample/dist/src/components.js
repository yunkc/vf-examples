"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const Component_1 = require("../types/Component");
const dinoWidth = 83;
const dino = {
    type: Component_1.guiType.Image,
    src: store_1.Ids.dinoImage,
    style: {
        width: dinoWidth,
        height: 138,
        justifyContent: "center"
    }
};
const title = {
    type: Component_1.guiType.Text,
    style: {
        width: 100,
        justifyContent: "center"
    }
};
const pathGraphics = {
    type: Component_1.guiType.PathGraphics
};
const svgPasition = {
    type: Component_1.guiType.SVGPasition,
    name: 'SVGPasition',
    duration: 800,
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
            text: "svg变化示例",
            style: {
                top: 160,
            }
        },
        {
            id: "graphc",
            libId: store_1.Ids.pathGraphics,
            lineColor: 0x0000ff,
            lineWidth: 3,
            style: {
                top: 200,
                left: 100
            }
        },
        {
            id: "svgPasition",
            libId: store_1.Ids.svgPasition
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
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.dinoImage]: dino,
    [store_1.Ids.svgPasition]: svgPasition,
    [store_1.Ids.pathGraphics]: pathGraphics,
};
exports.default = allComponents;
