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
        justifyContent: "center",
    }
};
const rect = {
    type: Component_1.guiType.Rect,
    style: {
        width: 30,
        height: 30,
    },
    color: 0xffcc66,
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
const childContainer = {
    type: Component_1.guiType.Custom,
    interactabled: true,
    style: {
        backgroundColor: 0xffffff,
        width: 100,
        height: 100,
    },
    children: [
        {
            id: "title",
            libId: store_1.Ids.title,
            style: {
                top: 0
            }
        },
    ]
};
const root = {
    type: Component_1.guiType.Custom,
    interactabled: true,
    children: [
        {
            id: "rectLine",
            libId: store_1.Ids.rect,
            lineColor: 0x565680,
            lineWidth: 5,
            color: 0x565655,
            width: 890,
            height: 500,
            style: {
                justifyContent: "center",
            }
        },
        {
            id: "1",
            libId: store_1.Ids.childContainer,
            x: 15,
            y: 15,
            dragOption: {
                draggable: true,
                dragContainer: "this",
            },
        },
        {
            id: "2",
            libId: store_1.Ids.childContainer,
            x: 150,
            y: 15,
            dragOption: {
                draggable: true,
                dragRestrictAxis: "x"
            },
        },
        {
            id: "3",
            libId: store_1.Ids.childContainer,
            x: 15,
            y: 130,
            dragOption: {
                draggable: true,
                dragRestrictAxis: "y"
            },
        },
        {
            id: "4",
            libId: store_1.Ids.childContainer,
            x: 150,
            y: 130,
            dragOption: {
                draggable: true,
                dragBoundary: true
            },
        },
        {
            id: "5",
            libId: store_1.Ids.childContainer,
            x: 15,
            y: 250,
            dragOption: {
                draggable: true,
                dragBounces: true,
            },
        },
        {
            id: "6",
            libId: store_1.Ids.childContainer,
            x: 150,
            y: 250,
        },
        {
            id: "7",
            libId: store_1.Ids.childContainer,
            x: 280,
            y: 15,
            width: 300,
            height: 300,
            style: {
                display: "grid",
                gridTemplateColumns: ["repeat", 3, 30],
                gridTemplateRows: ["repeat", 3, 30],
                gridColumnGap: 10,
                gridRowGap: 10,
            },
            dragOption: {
                draggable: true,
                droppable: true,
                dropGroup: "group1"
            },
        },
        {
            id: "rect0",
            libId: store_1.Ids.rect,
            x: 150,
            y: 250,
            dragOption: {
                draggable: true,
                dragBounces: true,
                dragGroup: "group1"
            }
        },
        {
            id: "rect1",
            libId: store_1.Ids.rect,
            color: 0xff66,
            x: 185,
            y: 250,
            dragOption: {
                draggable: true,
                dragBounces: true,
                dragGroup: "group1"
            }
        },
        {
            id: "rect2",
            libId: store_1.Ids.rect,
            color: 0x66ffcc,
            x: 220,
            y: 250,
            dragOption: {
                draggable: true,
                dragBounces: true,
                dragGroup: "group1"
            }
        }
    ],
    actionList: `
  @this = {
      this.on("Added", () => {
        //自由拖动部分
        this#1#title.text = "自由拖动";

        //限定x轴移动
        this#2#title.text = "限定X轴移动";

        //限定y轴移动
        this#3#title.text = "限定Y轴移动";

        //限定边界
        this#4#title.text = "限定边界";

        //拖动回弹
        this#5#title.text = "拖动回弹";

        //拖动到接收容器
        this#6#title.text = "拖动到\r接收容器";
        this#rect0.on("DRAG_START", ()=> {
          this#rect0.scaleX = 1;
          this#rect0.scaleY = 1;
        }, this);
        this#rect0.on("DRAG_END",() => {
          this#rect0.scaleX = 1;
          this#rect0.scaleY = 1;
        }, this);
        this#rect0.on("DRAG_TARGET", () => {
          this#rect0.scaleX = 1;
          this#rect0.scaleY = 1;
          this#rect0.dragOption.draggable = false;
          trace(this#rect0.x);
          trace(this#rect1.x);
          trace(this#rect2.x);
          trace(this#rect0.y);
          trace(this#rect1.y);
          trace(this#rect2.y);
        }, this);

        this#rect1.visible = true;
        this#rect1.dragOption.draggable = true;
        this#rect1.dragOption.dragBounces = true;
        this#rect1.dragOption.dragGroup = "group1";//设置分组，同时需要设置接收掉落方的dropGroup
        this#rect1.on("DRAG_START", ()=> {
          this#rect1.scaleX = 1;
          this#rect1.scaleY = 1;
        }, this);
        this#rect1.on("DRAG_END",() => {
          this#rect1.scaleX = 1;
          this#rect1.scaleY = 1;
        }, this);
        this#rect1.on("DRAG_TARGET", () => {
          this#rect1.scaleX = 1;
          this#rect1.scaleY = 1;
          this#rect1.dragOption.draggable = false;
          trace(this#rect0.x);
          trace(this#rect1.x);
          trace(this#rect2.x);
          trace(this#rect0.y);
          trace(this#rect1.y);
          trace(this#rect2.y);
        }, this);

        this#rect2.visible = true;
        this#rect2.dragOption.draggable = true;
        this#rect2.dragOption.dragBounces = true;
        this#rect2.dragOption.dragGroup = "group1";//设置分组，同时需要设置接收掉落方的dropGroup
        this#rect2.on("DRAG_START", ()=> {
          this#rect2.scaleX = 1.5;
          this#rect2.scaleY = 1.5;
        }, this);
        this#rect2.on("DRAG_END",() => {
          this#rect2.scaleX = 1.5;
          this#rect2.scaleY = 1.5;
        }, this);
        this#rect2.on("DRAG_TARGET", () => {
          this#rect2.scaleX = 1.5;
          this#rect2.scaleY = 1.5;
          this#rect2.dragOption.draggable = false;

          trace(this#rect0.x);
          trace(this#rect1.x);
          trace(this#rect2.x);
          trace(this#rect0.y);
          trace(this#rect1.y);
          trace(this#rect2.y);
        }, this);
 
        

        //接收容器
        this#7#title.text = "接收容器";

      });

  }
`
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.dinoImage]: dino,
    [store_1.Ids.rect]: rect,
    [store_1.Ids.childContainer]: childContainer,
};
exports.default = allComponents;
