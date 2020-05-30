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
    radius: 10,
    style: {
        justifyContent: "center",
        width: 100,
        height: 100,
    }
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
            text: "矢量矩形框接口示例",
            style: {
                top: 160,
            }
        },
        {
            id: store_1.Ids.rect,
            libId: store_1.Ids.rect,
            color: 0xffffff,
            style: {
                top: 200,
            }
        },
        {
            id: store_1.Ids.rect,
            libId: store_1.Ids.rect,
            color: undefined,
            lineWidth: 5,
            style: {
                top: 330,
            }
        }
    ],
    actionList: `
    @this = {
        this.on("Add", () => {

        });
    }
  `
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.dinoImage]: dino,
    [store_1.Ids.rect]: rect,
};
exports.default = allComponents;
