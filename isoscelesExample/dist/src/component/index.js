"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("../store");
const action_1 = require("../vfx/ts/action");
const Component_1 = require("../../types/Component");
const dinoWidth = 83;
const dino = {
    type: Component_1.guiType.Image,
    y: 140,
    width: dinoWidth,
    height: 138,
    src: store_1.Ids.dinoImage,
    x: store_1.App.width / 2 - dinoWidth / 2,
};
const title = {
    type: Component_1.guiType.Text,
    width: 100,
    style: {
        color: '#000'
    }
};
const root = {
    type: Component_1.guiType.Custom,
    children: [
        {
            id: store_1.Ids.dinoImage,
            libId: store_1.Ids.dinoImage
        },
        {
            id: store_1.Ids.title,
            libId: store_1.Ids.title,
            text: 'Hello World!',
            y: dino.y + 158,
            x: store_1.App.width / 2 - title.width / 2
        }
    ],
    actionList: action_1.default(),
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.dinoImage]: dino,
};
exports.default = allComponents;
