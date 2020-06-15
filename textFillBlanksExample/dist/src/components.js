"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const Component_1 = require("../types/Component");
const rect = {
    type: Component_1.guiType.Rect,
    color: 0xffffff,
    style: {
        width: 500,
        height: 1000
    }
};
const text = {
    type: Component_1.guiType.Text,
    interactabled: true,
    style: {
        fontSize: 24,
        color: 0x000000,
        lineHeight: 29
    }
};
const button = {
    type: Component_1.guiType.Button,
    up: store_1.Ids.up,
    move: store_1.Ids.move,
    down: store_1.Ids.down
};
const textFillBlanks = {
    type: 'TextFillBlanks',
    name: 'textFillBlanks',
    config: {
        containerWidth: 500,
        labelStyle: {
            lineHeight: 60,
            fontSize: 30,
            color: 0,
            fontFamily: 'Arial',
        },
        textSelectedColor: 0x5161bb,
        optionBackgroundColor: 0xe9ecfe,
        optionBoardColor: 0x7487ef,
        optionPaddingX: 0,
        optionPaddingY: 10,
        optionBoardLineWidth: 2,
        optionBlankLineWidth: 10,
        optionBackgroundRadius: 2,
        optionBlankMinSize: 100,
        optionRightColor: 0x00ff00,
        optionWrongColor: 0xff0000,
        optionType: "single",
        targetOption: {
            text: "This is a {} example, {} select the {} option.",
            key: "1,0,2"
        },
        selectOption: [
            {
                text: "textFillBlanks",
                key: "0"
            },
            {
                text: "please",
                key: "1"
            },
            {
                text: "correct",
                key: "2"
            }
        ]
    }
};
const root = {
    type: Component_1.guiType.Custom,
    interactabled: false,
    children: [
        {
            id: "rect",
            libId: store_1.Ids.rect,
        },
        {
            id: "textFillBlanks",
            libId: store_1.Ids.textFillBlanks,
            y: 20
        },
        {
            id: "text0",
            libId: store_1.Ids.text,
            text: "A: textFillBlanks",
            style: {
                width: 180,
                height: 50,
                left: 0,
                top: 300
            }
        },
        {
            id: "text1",
            libId: store_1.Ids.text,
            text: "B: please",
            style: {
                width: 100,
                height: 50,
                left: 200,
                top: 300
            }
        },
        {
            id: "text2",
            libId: store_1.Ids.text,
            text: "C: correct",
            style: {
                width: 100,
                height: 50,
                left: 320,
                top: 300
            }
        },
        {
            id: "button",
            libId: store_1.Ids.button,
            text: "提交",
            style: {
                width: 100,
                height: 50,
                left: 120,
                bottom: 30
            }
        },
        {
            id: "button1",
            libId: store_1.Ids.button,
            text: "重置",
            style: {
                width: 100,
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
            this#textFillBlanks.on("OPTION_CHANGE",() => {
                trace("result0")
            }, this);
            this#textFillBlanks.on("RESULT",() => {
                trace("result1")
            }, this);

            this#text0.on("click",() => {
                this#textFillBlanks.setBlankValue("0");
            }, this);
            this#text1.on("click",() => {
                this#textFillBlanks.setBlankValue("1");
            }, this);
            this#text2.on("click",() => {
                this#textFillBlanks.setBlankValue("2");
            }, this);

            //提交
            this#button.on("click",() => {
                this#textFillBlanks.checkResult = true;
              }, this);

            //重置
            this#button1.on("click",() => {
                this#textFillBlanks.restart();
              }, this);
        });
    }
    `
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.rect]: rect,
    [store_1.Ids.text]: text,
    [store_1.Ids.button]: button,
    [store_1.Ids.textFillBlanks]: textFillBlanks,
};
exports.default = allComponents;
