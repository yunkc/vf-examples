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
const btn = {
    type: Component_1.guiType.Button,
    width: 150,
    height: 50,
    up: store_1.Ids.up,
    down: store_1.Ids.down,
    move: store_1.Ids.move,
    style: {
        justifyContent: "center"
    }
};
const spriteAnimated = {
    type: Component_1.guiType.SpriteAnimated,
    animationSpeed: 0.1,
    loop: true,
    loopCount: 0,
    src: store_1.Ids.sheet,
    anchorX: 0.2,
    anchorY: 1,
    style: {
        justifyContent: "center",
    }
};
const root = {
    type: Component_1.guiType.Custom,
    interactabled: false,
    children: [
        {
            id: store_1.Ids.title,
            libId: store_1.Ids.title,
            text: "序列帧接口示例",
            style: {
                top: 20,
            }
        },
        {
            id: store_1.Ids.spriteAnimated,
            libId: store_1.Ids.spriteAnimated,
            autoPlay: true,
            animationName: "1",
            style: {
                top: 450,
            }
        },
        {
            id: "clickButton",
            libId: store_1.Ids.btn,
            text: "切换动画",
            style: {
                top: 500
            }
        },
    ],
    actionList: `
    @this = {
        this.on("Added", () => {
            this#clickButton.on('click',()=>{
                  trace(this#${store_1.Ids.spriteAnimated}.animationName);
                  if (this#${store_1.Ids.spriteAnimated}.animationName == "0") {
                    this#${store_1.Ids.spriteAnimated}.animationName = "1";
                  } else {
                    this#${store_1.Ids.spriteAnimated}.animationName = "0";
                  };
            });


            this#${store_1.Ids.spriteAnimated}.on("CHANGE", () => {
                trace("CHANGE");
            });

            this#${store_1.Ids.spriteAnimated}.on("LOOP", () => {
                trace("LOOP");
            });

            this#${store_1.Ids.spriteAnimated}.on("COMPLETE", () => {
                trace("COMPLETE"); // loop = false 时，触发
            });
        });
    }
  `
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.dinoImage]: dino,
    [store_1.Ids.spriteAnimated]: spriteAnimated,
    [store_1.Ids.btn]: btn,
};
exports.default = allComponents;
