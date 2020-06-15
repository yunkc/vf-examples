"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const importScript_1 = require("./importScript");
class Test {
    constructor(app, uiStage, url) {
        importScript_1.importScript(url, "TextFillBlanks", (value, className) => {
            this.onLoad(app, uiStage);
        });
    }
    onLoad(app, uiStage) {
        let rect = new vf.gui.Rect();
        rect.color = 0xffffff;
        rect.style.width = "100%";
        rect.style.height = "100%";
        uiStage.addChild(rect);
        let TextFillBlanks = new vf.gui.TextFillBlanks();
        TextFillBlanks.y = 100;
        TextFillBlanks.x = 0;
        TextFillBlanks.config = {
            containerWidth: 500,
            labelStyle: {
                lineHeight: 60,
                fontSize: 30,
                color: 0,
                fontFamily: "Arial"
            },
            textSelectedColor: 0x5161bb,
            optionBackgroundColor: 0xe9ecfe,
            optionBoardColor: 0x7487ef,
            optionPaddingX: 0,
            optionPaddingY: 10,
            optionBoardLineWidth: 2,
            optionBackgroundRadius: 10,
            optionRightColor: 0x00ff00,
            optionWrongColor: 0xff0000,
            optionType: "single",
            checkResultType: 0,
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
        };
        uiStage.addChild(TextFillBlanks);
        TextFillBlanks.on("OPTION_CHANGE", (target, data) => { });
        TextFillBlanks.on("RESULT", (target, data) => {
            console.log("result", data);
        });
        const button = new vf.gui.Button();
        button.style.left = 230;
        button.style.top = 30;
        button.style.width = 100;
        button.style.height = 50;
        button.label.style.color = 0xff0000;
        button.text = "提交";
        button.on(vf.gui.Interaction.TouchMouseEvent.onClick, () => {
            console.log("ziye------button");
            TextFillBlanks.checkResult = true;
        }, this);
        uiStage.addChild(button);
        const button1 = new vf.gui.Button();
        button1.style.left = 100;
        button1.style.top = 250;
        button1.style.width = 100;
        button1.style.height = 50;
        button1.label.style.color = 0;
        button1.text = "textFillBlanks";
        button1.on(vf.gui.Interaction.TouchMouseEvent.onClick, () => {
            TextFillBlanks.setBlankValue("0");
        }, this);
        uiStage.addChild(button1);
        const button2 = new vf.gui.Button();
        button2.style.left = 200;
        button2.style.top = 250;
        button2.style.width = 100;
        button2.style.height = 50;
        button2.label.style.color = 0;
        button2.text = "please";
        button2.on(vf.gui.Interaction.TouchMouseEvent.onClick, () => {
            TextFillBlanks.setBlankValue("1");
        }, this);
        uiStage.addChild(button2);
        const button3 = new vf.gui.Button();
        button3.style.left = 300;
        button3.style.top = 250;
        button3.style.width = 100;
        button3.style.height = 50;
        button3.label.style.color = 0;
        button3.text = "correct";
        button3.on(vf.gui.Interaction.TouchMouseEvent.onClick, () => {
            TextFillBlanks.setBlankValue("2");
        }, this);
        uiStage.addChild(button3);
    }
}
exports.Test = Test;
const testApplication = new TestApplication();
new Test(testApplication.app, testApplication.uiStage, "//s.vipkidstatic.com/vf/plugin/TextFillBlanks/0.0.2.js");
