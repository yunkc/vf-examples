/*
 *   全部文档: https://code.vipkid.com.cn/xyz/docs
 *   动画文档: https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/animation.md
 *   VFX 使用文档: https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/aciton.md
 * */

import { App, Ids } from "./store";
import { gui, guiType } from "../types/Component";
import { Components, Assets } from "../types/IVFTemplate";


const rect: gui.Rect = {
    type: guiType.Rect,
    color : 0xffffff,
    style: {
        width: 405,
        height: 720
    }
};
const text: gui.Text = {
    type: guiType.Text,
    interactabled:true,
    style: {
        fontSize: 24,
        color: 0x000000,
        lineHeight: 29
    }
};
const button: gui.Button = {
    type: guiType.Button,
    up:Ids.up,
    move:Ids.move,
    down:Ids.down
};

const textFillBlanks = {
    type: 'TextFillBlanks',
    name: 'textFillBlanks',
    config: {
        containerWidth: 400,                 //组件容器宽度
        labelStyle: {
            lineHeight: 60,                       //行高
            fontSize: 30,                         //文本字号
            color: 0,                      //文本颜色
            fontFamily: 'Arial',                       //文本字体
        },
        textSelectedColor: 0x5161bb,          //文本选中时的颜色
        optionBackgroundColor: 0xe9ecfe,      //选项线条背景色
        optionBoardColor: 0x7487ef,           //选项选中时的颜色
        optionPaddingX: 0,                   //选项水平间隔
        optionPaddingY: 10,                   //选项框竖直间隔
        optionBoardLineWidth: 2,              //选项选中时线宽
        optionBlankLineWidth: 10,              //选项线宽
        optionBackgroundRadius: 2, //选项框radius
        optionBlankMinSize: 100,              //选项框最小宽度
        optionRightColor: 0x00ff00,           //选项正确颜色
        optionWrongColor: 0xff0000,           //选项错误颜色
        // optionRightIcon: "./assets/right.png", //选项判定正确图标
        // optionWrongIcon: "./assets/wrong.png", //选项判定错误图标
        // optionRightMissingIcon: "./assets/right-miss.png", //选项判定miss图标
        // optionIconSize: 15, //图标尺寸
        optionType: "single", //选项类型，single-单选   multiple-多选   radio-选项互斥
        targetOption: {
            text: "This is a {} example, {} select the {} option.",
            key: "1,0,2"
        },
        selectOption: [
            {
                text: "textFillBlanks",
                key: "0",
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
            //选项属性
    }

}

const root: gui.Custom = {
    type: guiType.Custom,
    interactabled:false,// 容器默认为false
    children:[
        {
            id: "rect",
            libId: Ids.rect,
        },
        {
            id: "textFillBlanks",
            libId: Ids.textFillBlanks,
            y:20
        },
        {
            id: "text0",
            libId: Ids.text,
            text: "A: textFillBlanks",
            style: {
                width: 180,
                height: 50,
                left:0,
                top:300,
                textAlign:"left"
            }
        }
        ,
        {
            id: "text1",
            libId: Ids.text,
            text: "B: please",
            style: {
                width: 100,
                height: 50,
                left:0,
                top:350,
                textAlign:"left"
            }
        }
        ,
        {
            id: "text2",
            libId: Ids.text,
            text: "C: correct",
            style: {
                width: 100,
                height: 50,
                left:0,
                top:400,
                textAlign:"left"
            }
        },
        {
            id: "button",
            libId: Ids.button,
            text: "提交",
            style: {
                width: 150,
                height: 50,
                left:30,
                bottom:30
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
                left:220,
                bottom:30
            }
        }
    ],
    actionList : `@this = {
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

const allComponents: Components = {
    [Ids.root] : root,
    [Ids.rect] : rect,
    [Ids.text] : text,
    [Ids.button] : button,
    [Ids.textFillBlanks] : textFillBlanks as gui.AllGUI,
};

export default allComponents;

