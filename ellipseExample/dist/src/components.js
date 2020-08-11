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
const ellipse = {
    type: Component_1.guiType.Ellipse,
    lineColor: 0xff0000,
    lineWidth: 1,
    radius: 100,
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
            text: "椭圆接口示例",
            style: {
                top: 160,
            }
        },
        {
            id: "ten",
            libId: store_1.Ids.ellipse,
            lineWidth: 2,
            radius: 30,
            width: 120,
            height: 50,
            anchorX: 0.5,
            anchorY: 0.5,
            style: {
                top: 250,
                left: 200,
            }
        },
        {
            id: "many",
            libId: store_1.Ids.ellipse,
            lineWidth: 1,
            width: 100,
            height: 100,
            style: {
                top: 320,
                justifyContent: "center",
            }
        },
        {
            id: "many1",
            libId: store_1.Ids.ellipse,
            lineWidth: 3,
            width: 200,
            height: 100,
            style: {
                top: 450,
                justifyContent: "center",
            }
        },
        {
            id: "many2",
            libId: store_1.Ids.ellipse,
            lineWidth: 3,
            width: 60,
            height: 20,
            color: 0x00ff00,
            style: {
                top: 480,
                justifyContent: "center",
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
          
          });
        });
    }
  `
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.dinoImage]: dino,
    [store_1.Ids.ellipse]: ellipse,
};
exports.default = allComponents;
