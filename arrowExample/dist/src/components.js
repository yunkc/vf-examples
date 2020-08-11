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
const arrow = {
    type: Component_1.guiType.Arrow,
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
            text: "箭头接口示例",
            style: {
                top: 160,
            }
        },
        {
            id: store_1.Ids.arrow,
            libId: store_1.Ids.arrow,
            width: 300,
            height: 50,
            lineType: "dash",
            style: {
                top: 500,
                justifyContent: "center",
            }
        },
        {
            id: "ten",
            libId: store_1.Ids.arrow,
            lineWidth: 2,
            radius: 30,
            width: 120,
            height: 20,
            fullArrow: true,
            anchorY: 0.5,
            style: {
                top: 300,
                left: 200,
            }
        },
        {
            id: "many",
            libId: store_1.Ids.arrow,
            lineWidth: 1,
            width: 300,
            height: 50,
            style: {
                top: 400,
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
    [store_1.Ids.arrow]: arrow,
};
exports.default = allComponents;
