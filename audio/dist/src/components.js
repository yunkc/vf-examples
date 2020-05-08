"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const Component_1 = require("../types/Component");
const dinoWidth = 83;
const dino = {
    type: Component_1.guiType.IMAGE,
    y: 140,
    width: dinoWidth,
    height: 138,
    src: store_1.Ids.dinoImage,
    x: store_1.App.width / 2 - dinoWidth / 2,
};
const title = {
    type: Component_1.guiType.TEXT,
    width: 100,
    style: {
        color: '#000'
    }
};
const btn = {
    type: Component_1.guiType.BUTTON,
    width: 100,
    height: 30,
    up: store_1.Ids.up,
    down: store_1.Ids.down,
    move: store_1.Ids.move,
};
const root = {
    type: Component_1.guiType.CUSTOM,
    interactabled: false,
    children: [
        {
            id: store_1.Ids.dinoImage,
            libId: store_1.Ids.dinoImage
        },
        {
            id: store_1.Ids.title,
            libId: store_1.Ids.title,
            text: '声音接口示例',
            y: dino.y + 158,
            x: store_1.App.width / 2 - title.width / 2
        },
        {
            id: 'play1',
            libId: store_1.Ids.btn,
            text: '播放声音1',
            y: dino.y + 198,
            x: store_1.App.width / 2 - title.width / 2
        },
        {
            id: 'play2',
            libId: store_1.Ids.btn,
            text: '播放声音2',
            y: dino.y + 240,
            x: store_1.App.width / 2 - title.width / 2
        },
        {
            id: 'pause1',
            libId: store_1.Ids.btn,
            text: '暂停声音1',
            y: dino.y + 280,
            x: store_1.App.width / 2 - title.width / 2
        },
        {
            id: 'resume1',
            libId: store_1.Ids.btn,
            text: '恢复声音1',
            y: dino.y + 320,
            x: store_1.App.width / 2 - title.width / 2
        }
    ],
    actionList: `
        @this = {
            this.on("Add", () => {
                this#play1.on('click',() => {
                    playSound({assetId:${store_1.Ids.sound1}, trackId:1 ,mode: 'sound'});
                });
                this#play2.on('click',() => {
                    playSound({assetId:${store_1.Ids.sound2}, trackId:2,mode: 'sound'});
                });
                this#pause1.on('click',() => {
                    pauseSound({assetId:${store_1.Ids.sound2}, trackId:1,mode: 'sound'});
                });
                this#resume1.on('click',() => {
                    resumeSound({assetId:${store_1.Ids.sound2}, trackId:1,mode: 'sound'});
                });
            });
        }
    `
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.dinoImage]: dino,
    [store_1.Ids.btn]: btn,
};
exports.default = allComponents;
