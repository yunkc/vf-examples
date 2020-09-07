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
const polygon = {
    type: Component_1.guiType.Polygon,
    lineColor: 0xff0000,
    lineWidth: 1,
    triangleNum: 5,
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
            text: "正多边形接口示例",
            style: {
                top: 160,
            }
        },
        {
            id: store_1.Ids.polygon,
            libId: store_1.Ids.polygon,
            color: 0x0000ff,
            style: {
                width: 100,
                height: 100,
                top: 500,
                justifyContent: "center",
            }
        },
        {
            id: "ten",
            libId: store_1.Ids.polygon,
            lineWidth: 1,
            triangleNum: 10,
            style: {
                width: 100,
                height: 100,
                top: 300,
                left: 100,
            }
        },
        {
            id: "many",
            libId: store_1.Ids.polygon,
            lineWidth: 1,
            triangleNum: 1,
            color: 0xff0000,
            style: {
                width: 100,
                height: 100,
                top: 300,
                left: 200,
            }
        },
        {
            id: "innerChange",
            libId: store_1.Ids.polygon,
            lineWidth: 1,
            triangleNum: 5,
            style: {
                width: 100,
                height: 100,
                top: 410,
                left: 280,
            }
        }
    ],
    actionList: `
    @this = {
        this.on("Add", () => {
          var $boo1 = true;
          var $boo2 = true;
          setEnterFrame(()=>{
            this#ten.rotation = this#ten.rotation +1;
            if($boo1){
              if(this#many.triangleNum <= 10){
                this#many.triangleNum = this#many.triangleNum +1;
              }else{
                $boo1 = false
              };
            }else{
              if(this#many.triangleNum >=4){
                this#many.triangleNum = this#many.triangleNum -1;
              }else{
                $boo1 = true
              };
            };
          
          });
        });
    };
  `
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.dinoImage]: dino,
    [store_1.Ids.polygon]: polygon,
};
exports.default = allComponents;
