"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const Component_1 = require("../types/Component");
const video = {
    type: Component_1.guiType.Video,
    src: store_1.AssetId.video,
    controls: true,
    width: 300,
    height: 228,
    loop: true,
    muted: false,
    volume: 1,
};
const title = {
    type: Component_1.guiType.Text,
    width: 100,
    style: {
        justifyContent: "center",
        alignContent: "center",
        color: 0x000000,
        fontSize: 24,
        wordWrap: true,
        wordWrapWidth: 100,
    }
};
const button = {
    type: Component_1.guiType.Button,
    width: 100,
    height: 50,
    up: store_1.AssetId.up,
    down: store_1.AssetId.down,
    move: store_1.AssetId.move
};
const root = {
    type: Component_1.guiType.Custom,
    interactabled: true,
    children: [
        {
            id: "video",
            libId: store_1.Ids.video,
            x: 0,
            y: 0,
        },
    ],
    actionList: `
  @this = {
      this.on("Added", () => {


      });

  }
`
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.video]: video,
    [store_1.Ids.button]: button,
};
exports.default = allComponents;
