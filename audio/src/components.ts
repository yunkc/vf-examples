/*
*   全部文档: https://code.vipkid.com.cn/xyz/docs
*   动画文档: https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/animation.md
*   VFX 使用文档: https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/aciton.md
* */

import {App, Ids} from "./store";
import {gui, guiType} from "../types/Component";
import {Components} from "../types/IVFTemplate";

const dinoWidth = 83
const dino: gui.Image = {
    type: guiType.IMAGE,
    y: 50,
    width: dinoWidth,
    height: 138,
    src: Ids.dinoImage,
    x: App.width / 2 -  dinoWidth / 2,
};

const title: gui.Text = {
    type: guiType.TEXT,
    width: 140,
    style: {
        color: '#000'
    }
}

const btn: gui.Button = {
    type: guiType.BUTTON,
    width: 150,
    height:40,
    up: Ids.up,
    down: Ids.down,
    move: Ids.move,

}

const root: gui.Custom = {
    type: guiType.CUSTOM,
    interactabled: false,
    children: [
        {
            id: Ids.dinoImage,
            libId: Ids.dinoImage
        },
        {
            id: Ids.title,
            libId: Ids.title,
            text: '声音接口',
            y: dino.y! + 158,
            x: App.width / 2 - title.width! / 2
        },
        {
            id: 'play1',
            libId: Ids.btn,
            text: '播放声音1',
            y: dino.y! + 198,
            x: App.width / 2 - title.width! / 2
        },
        {
            id: 'play2',
            libId: Ids.btn,
            text: '播放声音2',
            y: dino.y! + 270,
            x: App.width / 2 - title.width! / 2
        },
        {
            id: 'pause1',
            libId: Ids.btn,
            text: '暂停声音1',
            y: dino.y! + 340,
            x: App.width / 2 - title.width! / 2
        },
        {
            id: 'resume1',
            libId: Ids.btn,
            text: '恢复声音1',
            y: dino.y! + 410,
            x: App.width / 2 - title.width! / 2
        }
    ],
    // 用 VFX 编写的可执行逻辑，文档请见 https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/aciton.md
    actionList: `
        @this = {
            this.on("Add", () => {
                this#play1.on('click',() => {
                    playSound({assetId:${Ids.sound1}, trackId:1 ,mode: 'sound'});
                });
                this#play2.on('click',() => {
                    playSound({assetId:${Ids.sound2}, trackId:2,mode: 'sound'});
                });
                this#pause1.on('click',() => {
                    pauseSound({assetId:${Ids.sound2}, trackId:1,mode: 'sound'});
                });
                this#resume1.on('click',() => {
                    resumeSound({assetId:${Ids.sound2}, trackId:1,mode: 'sound'});
                });
            });
        }
    `
};

const allComponents: Components = {
    [Ids.root]: root,
    [Ids.title]: title,
    [Ids.dinoImage]: dino,
    [Ids.btn]: btn,
}

export default allComponents
