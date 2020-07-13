"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const Component_1 = require("../types/Component");
const dinoWidth = 83;
const dino = {
    type: Component_1.guiType.Image,
    width: dinoWidth,
    height: 138,
    src: store_1.Ids.dinoImage,
    style: {
        justifyContent: "center"
    }
};
const title = {
    type: Component_1.guiType.Text,
    width: 100,
    style: {
        justifyContent: "center"
    }
};
const btn = {
    type: Component_1.guiType.Button,
    width: 150,
    height: 60,
    up: store_1.Ids.up,
    down: store_1.Ids.down,
    move: store_1.Ids.move,
    style: {
        justifyContent: "center"
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
                top: 20
            }
        },
        {
            id: store_1.Ids.title,
            libId: store_1.Ids.title,
            text: "按钮接口示例",
            style: {
                top: 160
            }
        },
        {
            id: "clickButton",
            libId: store_1.Ids.btn,
            text: "点击按钮",
            style: {
                top: 220
            }
        },
        {
            id: "colorButton",
            libId: store_1.Ids.btn,
            text: "划过按钮",
            style: {
                top: 290
            }
        },
        {
            id: "imgButton",
            libId: store_1.Ids.btn,
            text: "点击弹起",
            style: {
                height: 60,
                top: 360
            }
        }
    ],
    actionList: `
        @this = {
            this.on("Add", () => {

                // 注册点击事件
                this#clickButton.on('click',() => {
                    var $scaleX = this#${store_1.Ids.dinoImage}.scaleX * -1;
                    this#${store_1.Ids.dinoImage}.scaleX = -($scaleX);
                });

                // 注册带有回调参数的移入移出事件
                this#colorButton.on('hover',this.onColorButtonHover);
                
                function onColorButtonHover($event,$target,$isHover){
                  if($isHover){
                    this#colorButton.label.style.color = [0x00ffff, 0xff00cc];
                  }else{
                    this#colorButton.label.style.color = [0xffffff];
                  }
                }

                // 注释鼠标按下或弹起事件
                this#imgButton.on('press',this.onImgButtonPress);

                function onImgButtonPress($event,$target,$isPress){
                  trace($isPress);
                  if($isPress){
                    this#imgButton.img.fillMode = 'repeat';
                    this#imgButton.img.scale9Grid = [1, 1, 0, 0];
                  }else{
                    this#imgButton.img.fillMode = 'no-repeat';
                    this#imgButton.img.scale9Grid = [];
                  }
                }
            });
        }
    `
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.dinoImage]: dino,
    [store_1.Ids.btn]: btn
};
exports.default = allComponents;
