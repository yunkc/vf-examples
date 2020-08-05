/*
*   VF文档地址: https://vipkid-edu.github.io/vf-docs/
* */

import { App, Ids } from "./store";
import { gui, guiType } from "../types/Component";
import { Components, Assets } from "../types/IVFTemplate";


const rect: gui.Rect = {
    type: guiType.Rect,
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
        containerWidth: 400,                 //组件容器宽度
        labelStyle: {
            lineHeight: 100,                       //行高
            fontSize: 26,                         //文本字号
            color: 0,                      //文本颜色
            fontFamily: 'Arial',                       //文本字体
        },
        textSelectedColor: 0x5161bb,          //文本选中时的颜色
        optionBackgroundColor: 0xe9ecfe,      //选项线条背景色
        optionBoardColor: 0x7487ef,           //选项选中时的颜色
        optionPaddingX: 0,                   //选项水平间隔
        optionPaddingY: 10,                   //选项框竖直间隔
        optionBoardLineWidth: 2,              //选项选中时线宽
        optionRightColor: 0x00ff00,           //选项正确颜色
        optionWrongColor: 0xff0000,           //选项错误颜色
        optionRightIcon: "https://vipkid-edu.github.io/vf-gui-plug/assets/right.png",  //选项判定正确图标
        optionWrongIcon: "https://vipkid-edu.github.io/vf-gui-plug/assets/wrong.png", //选项判定错误图标
        optionRightMissingIcon: "https://vipkid-edu.github.io/vf-gui-plug/assets/right-miss.png",     //选项判定miss图标
        optionIconSize: 15,                   //图标尺寸
        optionType: "radio",                  //选项类型，single-单选   multiple-多选   radio-选项互斥
        targetOption: {
            text: "This is a {}/{} example, {}/{} select the {}/{} option.",
            "key": "0,2,5"
        },                   //目标属性
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
        //选项属性
    }

}

const root: gui.Custom = {
    type: guiType.Custom,
    interactabled: true,// 容器默认为false
    children: [
        {
            id: "rect",
            libId: Ids.rect,
        },
        {
            id: "textChoice",
            libId: Ids.textChoice,
            y: 20
        },
        {
            id: "button",
            libId: Ids.button,
            text: "提交",
            style: {
                width: 150,
                height: 50,
                left: 30,
                bottom: 30
            }
        }
        ,
        {
            id: "button1",
            libId: Ids.button,
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

const button: gui.Button = {
    type: guiType.Button,
    up: Ids.up,
    move: Ids.move,
    down: Ids.down
}

const allComponents: Components = {
    [Ids.root]: root,
    [Ids.rect]: rect,
    [Ids.button]: button,
    [Ids.textChoice]: textChoice as gui.AllGUI,
};

export default allComponents;

