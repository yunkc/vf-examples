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
const textInput = {
    type: Component_1.guiType.TextInput,
    placeholder: '单行输入文本...',
    maxLength: 15,
    up: store_1.Ids.up,
    down: store_1.Ids.down,
    move: store_1.Ids.move,
    style: {
        width: 300,
        height: 40,
        fontSize: 24,
        color: 0xffffff,
        fontFamily: "微软雅黑",
        justifyContent: "center",
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
            text: "文本接口示例",
            style: {
                top: 160,
            }
        },
        {
            id: store_1.Ids.textInput,
            libId: store_1.Ids.textInput,
            style: {
                top: 250,
            }
        },
    ],
    actionList: `
    @this = {
        this.on("Added", () => {
          this.vfStage.originalEventPreventDefault = true;
        });
    }
  `
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.dinoImage]: dino,
    [store_1.Ids.textInput]: textInput,
};
exports.default = allComponents;
