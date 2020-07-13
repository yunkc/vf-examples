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
const rect = {
    type: Component_1.guiType.Rect,
    lineColor: 0xff00cc,
    lineWidth: 1,
    radius: 5,
    color: 0xffffff,
    interactabled: true,
    style: {
        width: 30,
        height: 30
    }
};
const connectLine = {
    type: Component_1.guiType.ConnectLine,
    isAnimation: true,
    lineColor: 0xffffff,
    lineWidth: 2
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
            text: "连线接口示例",
            style: {
                top: 160,
            }
        },
        {
            id: store_1.Ids.connectLine1,
            libId: store_1.Ids.connectLine,
            sourcePostion: [370, 200],
            targetPostion: [520, 200],
            autoPlay: true,
            style: {
                top: 210,
            }
        },
        {
            id: store_1.Ids.connectLine2,
            libId: store_1.Ids.connectLine,
            sourcePostion: [370, 230],
            targetPostion: [520, 230],
            autoPlay: false,
            lineColor: 0xffcc00,
            style: {
                top: 230,
            }
        },
        {
            id: store_1.Ids.rect1,
            libId: store_1.Ids.rect,
            style: {
                top: 250,
                left: 20
            }
        },
        {
            id: store_1.Ids.rect2,
            libId: store_1.Ids.rect,
            style: {
                top: 400,
                right: 30
            }
        },
        {
            id: store_1.Ids.connectLine3,
            libId: store_1.Ids.connectLine,
            sourcePostion: 'center',
            targetPostion: 'center',
            isAnimation: true,
            autoPlay: false,
            style: {
                top: 300,
                justifyContent: "",
            }
        },
    ],
    actionList: `
    @this = {
        this.on("Added", () => {
            setTimeout(3000, ()=> {
                this#${store_1.Ids.connectLine2}.play = 2;
            });
            
            this#${store_1.Ids.connectLine3}.source = "this#${store_1.Ids.rect1}";
            this#${store_1.Ids.connectLine3}.target = "this#${store_1.Ids.rect2}";

            this#${store_1.Ids.rect1}.on('click',()=>{
                trace("rect1");
                this#${store_1.Ids.connectLine3}.isClear = true; // 清除画线
                this#${store_1.Ids.connectLine3}.play = 2;
            });
            this#${store_1.Ids.rect2}.on('click',()=>{
              trace("rect2");
              this#${store_1.Ids.connectLine3}.isClear = true; // 清除画线
              this#${store_1.Ids.connectLine3}.play = 1;
          });
        });
    }
  `
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.dinoImage]: dino,
    [store_1.Ids.connectLine]: connectLine,
    [store_1.Ids.rect]: rect
};
exports.default = allComponents;
