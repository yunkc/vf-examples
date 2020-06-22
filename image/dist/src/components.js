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
const rect = {
    type: Component_1.guiType.Rect,
    width: 100,
    color: 0xffffff,
    lineColor: 0xff00cc,
    lineWidth: 1,
    radius: 10,
};
const maskImage = {
    type: Component_1.guiType.Image,
    src: store_1.Ids.clear1,
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
            text: "图形接口示例",
            style: {
                top: 160
            }
        },
        {
            id: 'leftImage',
            libId: store_1.Ids.dinoImage,
            src: store_1.Ids.pcImage.toString(),
            anchorX: 0.5,
            anchorY: 0.5,
            style: {
                top: 230,
                left: 80,
                justifyContent: "",
                width: 85,
                height: 71,
            }
        },
        {
            id: 'centerImage',
            libId: store_1.Ids.dinoImage,
            tint: 0xffcc00,
            style: {
                top: 210,
                justifyContent: "center",
            }
        },
        {
            id: 'rightImage',
            libId: store_1.Ids.dinoImage,
            style: {
                top: 230,
                justifyContent: "flex-end",
                maskImage: store_1.Ids.rect.toString(),
                maskSize: [80, 40],
                maskPosition: [0, 20],
            }
        },
        {
            id: 'bg2',
            libId: store_1.Ids.dinoImage,
            src: store_1.Ids.bg2.toString(),
            style: {
                top: 350,
                width: 340,
                height: 160
            }
        },
        {
            id: 'bg',
            libId: store_1.Ids.dinoImage,
            src: store_1.Ids.bg1.toString(),
            style: {
                top: 350,
                width: 340,
                height: 160,
                maskImage: store_1.Ids.maskImage.toString(),
                maskSize: [100, 100],
                maskPosition: [-70, -70]
            }
        }
    ],
    animations: [
        {
            name: "default",
            duration: 60,
            autoPlay: true,
            loop: true,
            children: {
                centerImage: {
                    duration: 60,
                    loop: true,
                    timelines: [
                        {
                            type: "rotation",
                            loop: true,
                            frames: [
                                {
                                    frame: 0,
                                    curve: [1],
                                    value: 0
                                },
                                {
                                    frame: 60,
                                    value: 360
                                }
                            ]
                        }
                    ]
                }
            }
        }
    ],
    actionList: `
    @this = {
        this.on("Add", () => {

          var global$count = 0;
          var global$rotation = 0;
          setInterval(33, 10000, ()=>{
            if(global$rotation >= 360){
              global$rotation = 0;
            };
            if(global$count >= 700){
              global$count = 0;
            };
            var $maskSize = this#bg.style.maskSize;
            if($maskSize[0] < 1200){
              var $maskSizes = [];
              $maskSizes.pop();
              $maskSizes.pop();
              $maskSizes.push(global$count);
              $maskSizes.push(global$count);
              this#bg.style.maskSize = $maskSizes;
            };
            global$count = global$count + 1;
            global$rotation = global$rotation + 1;
            this#leftImage.rotation = global$rotation;
          });

        });
    }
  `
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.dinoImage]: dino,
    [store_1.Ids.rect]: rect,
    [store_1.Ids.maskImage]: maskImage
};
exports.default = allComponents;
