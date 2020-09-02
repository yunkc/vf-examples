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
const deviceorientation = {
    type: "Deviceorientation"
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
            text: "获取设备动作与方向示例",
            style: {
                top: 160
            }
        },
        {
            id: "device",
            libId: store_1.Ids.deviceorientation.toString()
        },
        {
            id: store_1.Ids.title,
            libId: store_1.Ids.title,
            text: "请使用移动设备",
            style: {
                top: 190
            }
        },
        {
            id: "deviceInfo",
            libId: store_1.Ids.title,
            text: "参数",
            x: 200,
            style: {
                lineHeight: 45,
                top: 220,
                justifyContent: "flex-start"
            }
        }
    ],
    actionList: `
  @this = {
    function onDeviceorientation($data) {
        trace(this#device.toString);
        this#deviceInfo.text = this#device.toString;
    };
    this.on("Added", () => {
      this#device.on('deviceorientation',this.onDeviceorientation);
    });
}`
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.dinoImage]: dino,
    [store_1.Ids.deviceorientation]: deviceorientation
};
exports.default = allComponents;
