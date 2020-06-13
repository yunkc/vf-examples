"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const importScript_1 = require("./importScript");
class Test {
    constructor(app, uiStage, url) {
        importScript_1.importScript(url, "TextChoice", (value, className) => {
            this.onLoad(app, uiStage);
        });
    }
    onLoad(app, uiStage) {
        let rect = new vf.gui.Rect();
        rect.color = 0xffffff;
        rect.style.width = 500;
        rect.style.height = 1000;
        uiStage.addChild(rect);
        let TextChoice = new vf.gui.TextChoice();
        TextChoice.y = 100;
        TextChoice.x = 0;
        TextChoice.config = {
            containerWidth: 500,
            labelStyle: {
                lineHeight: 100,
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
            optionRightIcon: "https://vipkid-edu.github.io/vf-gui-plug/assets/right.png",
            optionWrongIcon: "https://vipkid-edu.github.io/vf-gui-plug/assets/wrong.png",
            optionRightMissingIcon: "https://vipkid-edu.github.io/vf-gui-plug/assets/right-miss.png",
            optionIconSize: 15,
            optionType: "radio",
            targetOption: {
                text: "This is a {}/{} example, {}/{} select the {}/{} option.",
                key: "0,2,5"
            },
            selectOption: [
                {
                    text: "textChoice",
                    key: "0"
                },
                {
                    text: "adesdf",
                    key: "1"
                },
                {
                    text: "please",
                    key: "2"
                },
                {
                    text: "sdasd",
                    key: "3"
                },
                {
                    text: "eeee",
                    key: "4"
                },
                {
                    text: "correct",
                    key: "5"
                }
            ]
        };
        uiStage.addChild(TextChoice);
        TextChoice.on("OPTION_CHANGE", (target, data) => { });
        TextChoice.on("RESULT", (target, data) => {
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
            TextChoice.checkResult = true;
        }, this);
        uiStage.addChild(button);
    }
}
exports.Test = Test;
const testApplication = new TestApplication();
new Test(testApplication.app, testApplication.uiStage, "//s.vipkidstatic.com/vf/plugin/TextChoice/0.0.2.js");
