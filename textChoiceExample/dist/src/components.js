"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const Component_1 = require("../types/Component");
const rect = {
    type: Component_1.guiType.Rect,
    color: 0xffffff,
    style: {
        width: 500,
        height: 1000,
    },
};
const textChoice = {
    type: 'TextChoice',
    name: 'TextChoice',
    config: {
        containerWidth: 400,
        labelStyle: {
            lineHeight: 100,
            fontSize: 26,
            color: 0,
            fontFamily: 'Arial',
        },
        textSelectedColor: 0x5161bb,
        optionBackgroundColor: 0xe9ecfe,
        optionBoardColor: 0x7487ef,
        optionPaddingX: 0,
        optionPaddingY: 10,
        optionBoardLineWidth: 2,
        optionRightColor: 0x00ff00,
        optionWrongColor: 0xff0000,
        optionRightIcon: "https://vipkid-edu.github.io/vf-gui-plug/assets/right.png",
        optionWrongIcon: "https://vipkid-edu.github.io/vf-gui-plug/assets/wrong.png",
        optionRightMissingIcon: "https://vipkid-edu.github.io/vf-gui-plug/assets/right-miss.png",
        optionIconSize: 15,
        optionType: "radio",
        targetOption: {
            text: "This is a {}/{} example, {}/{} select the {}/{} option.",
            "key": "0,2,5"
        },
        selectOption: [
            {
                text: "textChoice",
                key: "0"
            },
            {
                text: "wrongOpt1",
                key: "1"
            },
            {
                text: "please",
                key: "2"
            },
            {
                text: "wrongOpt2",
                key: "3"
            },
            {
                text: "wrongOpt3",
                key: "4"
            },
            {
                text: "correct",
                key: "5"
            }
        ]
    }
};
const root = {
    type: Component_1.guiType.Custom,
    interactabled: true,
    children: [
        {
            id: "rect",
            libId: store_1.Ids.rect,
        },
        {
            id: "textChoice",
            libId: store_1.Ids.textChoice,
            y: 20
        },
        {
            id: "button",
            libId: store_1.Ids.button,
            text: "提交",
            style: {
                width: 150,
                height: 50,
                left: 30,
                bottom: 30
            }
        },
        {
            id: "button1",
            libId: store_1.Ids.button,
            text: "重置",
            style: {
                width: 150,
                height: 50,
                left: 220,
                bottom: 30
            }
        }
    ],
    actionList: `@this = {
        // 这里是第一层，也叫顶层。
        this.on("Added", () => {
            
            // 这里是第二层
            this#textChoice.on("OPTION_CHANGE",() => {}, this);
            this#textChoice.on("RESULT",() => {}, this);

            //提交
            this#button.on("click",() => {
                this#textChoice.checkResult = true;
              }, this);

            //重置
            this#button1.on("click",() => {
                this#textChoice.restart();
              }, this);
        });
    }
    `
};
const button = {
    type: Component_1.guiType.Button,
    up: store_1.Ids.up,
    move: store_1.Ids.move,
    down: store_1.Ids.down
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.rect]: rect,
    [store_1.Ids.button]: button,
    [store_1.Ids.textChoice]: textChoice,
};
exports.default = allComponents;
