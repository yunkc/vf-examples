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
const circle = {
    type: Component_1.guiType.Circle,
    lineColor: 0xff00cc,
    lineWidth: 1,
    width: 100,
    height: 100
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
            text: "矢量圆接口示例",
            style: {
                top: 160,
            }
        },
        {
            id: store_1.Ids.circle,
            libId: store_1.Ids.circle,
            color: 0xffffff,
            style: {
                top: 0,
                left: 0,
            }
        },
        {
            id: store_1.Ids.circle,
            libId: store_1.Ids.circle,
            color: undefined,
            lineWidth: 5,
            style: {
                top: 250,
                left: 180
            }
        },
        {
            id: store_1.Ids.circle,
            libId: store_1.Ids.circle,
            color: 0xffffff,
            lineWidth: 5,
            startAngle: 0,
            endAngle: 180,
            style: {
                top: 400,
                left: 60,
            }
        },
        {
            id: store_1.Ids.circle,
            libId: store_1.Ids.circle,
            color: undefined,
            lineWidth: 5,
            startAngle: 180,
            endAngle: 260,
            style: {
                top: 400,
                left: 180,
            }
        },
        {
            id: "circleAni",
            libId: store_1.Ids.circle,
            lineWidth: 5,
            startAngle: 0,
            endAngle: 0,
            style: {
                top: 550,
                left: 180,
            }
        }
    ],
    actionList: `
    @this = {
        this.on("Add", () => {
          setEnterFrame(()=>{
            if(this#circleAni.endAngle >= 360){
              this#circleAni.startAngle = this#circleAni.startAngle + 1;
            }else{
              this#circleAni.endAngle = this#circleAni.endAngle + 1;
            };
            if(this#circleAni.endAngle >= 360 && this#circleAni.startAngle >= 360){
              this#circleAni.startAngle = 0;
              this#circleAni.endAngle = 0;
            };
        });
        });
    }
  `
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.dinoImage]: dino,
    [store_1.Ids.circle]: circle,
};
exports.default = allComponents;
