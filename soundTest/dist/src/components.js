"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const Component_1 = require("../types/Component");
const dinoWidth = 83;
const dino = {
    type: Component_1.guiType.IMAGE,
    width: dinoWidth,
    height: 138,
    src: store_1.Ids.dinoImage,
    style: {
        justifyContent: "center"
    }
};
const title = {
    type: Component_1.guiType.TEXT,
    width: 100,
    style: {
        color: "#000",
        justifyContent: "center"
    }
};
const btn = {
    type: Component_1.guiType.BUTTON,
    width: 100,
    height: 30,
    up: store_1.Ids.up,
    down: store_1.Ids.down,
    move: store_1.Ids.move,
    style: {
        justifyContent: "center"
    }
};
const root = {
    type: Component_1.guiType.CUSTOM,
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
            text: "声音接口示例",
            style: {
                top: 160
            }
        },
        {
            id: "play1",
            libId: store_1.Ids.btn,
            text: "播放声音1",
            style: {
                top: 220
            }
        },
        {
            id: "play2",
            libId: store_1.Ids.btn,
            text: "播放声音2",
            style: {
                top: 260
            }
        },
        {
            id: "pause1",
            libId: store_1.Ids.btn,
            text: "暂停声音1",
            style: {
                top: 300
            }
        },
        {
            id: "resume1",
            libId: store_1.Ids.btn,
            text: "恢复声音1",
            style: {
                top: 340
            }
        }
    ],
    actionList: `
        @this = {
            this.on("Add", () => {
                this#play1.on('click',() => {
                    playSound({assetId:${store_1.Ids.sound1}, trackId:1});
                });
                this#play2.on('click',() => {
                    playSound({assetId:${store_1.Ids.sound2}, trackId:2});
                });
                this#pause1.on('click',() => {
                    pauseSound({assetId:${store_1.Ids.sound2}, trackId:1});
                });
                this#resume1.on('click',() => {
                    resumeSound({assetId:${store_1.Ids.sound2}, trackId:1});
                });
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
