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
const slider = {
    type: Component_1.guiType.Slider,
    vertical: false,
    thumb: store_1.Ids.thumb,
    track: store_1.Ids.track,
    tracklight: store_1.Ids.tracklight,
    value: 50,
    style: {
        width: 300,
        height: 10,
        justifyContent: "center",
    }
};
const slider2 = {
    type: Component_1.guiType.Slider,
    vertical: true,
    thumb: store_1.Ids.thumb,
    track: store_1.Ids.track,
    tracklight: store_1.Ids.tracklight,
    value: 70,
    style: {
        width: 10,
        height: 150,
        justifyContent: "center",
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
                top: 0
            }
        },
        {
            id: store_1.Ids.title,
            libId: store_1.Ids.title,
            text: "滑动条接口示例",
            style: {
                top: 160,
            }
        },
        {
            id: store_1.Ids.slider,
            libId: store_1.Ids.slider,
            style: {
                top: 250,
            }
        },
        {
            id: store_1.Ids.slider2,
            libId: store_1.Ids.slider2,
            style: {
                top: 290,
            }
        },
    ],
    actionList: `
    @this = {
        this.on("Added", () => {
            function onChange($thisObj,$curValue){
              trace("onChange");
              trace($curValue); // 鼠标弹起后触发
            };
            function onChangeing($thisObj,$curValue){
              trace("onChangeing");
              trace($curValue); // 滑动中连续触发
            };
            this#${store_1.Ids.slider}.on('CHANGE',this.onChange);
            this#${store_1.Ids.slider}.on('CHANGEING',this.onChangeing);
        });
    }
  `
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.dinoImage]: dino,
    [store_1.Ids.slider]: slider,
    [store_1.Ids.slider2]: slider2,
};
exports.default = allComponents;
