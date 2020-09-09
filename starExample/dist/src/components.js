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
const star = {
    type: Component_1.guiType.Star,
    lineColor: 0xff0000,
    lineWidth: 1,
    triangleNum: 5,
    width: 200,
    height: 200,
    fillStar: true,
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
            text: "星形正多边形接口示例",
            style: {
                top: 160,
            }
        },
        {
            id: store_1.Ids.star,
            libId: store_1.Ids.star,
            color: 0x0000ff,
            style: {
                top: 500,
                justifyContent: "center",
            }
        },
        {
            id: "ten",
            libId: store_1.Ids.star,
            lineWidth: 1,
            triangleNum: 10,
            width: 60,
            height: 60,
            style: {
                top: 300,
                left: 30,
            }
        },
        {
            id: "many",
            libId: store_1.Ids.star,
            lineWidth: 1,
            triangleNum: 1,
            width: 200,
            height: 200,
            style: {
                top: 300,
                left: 200,
            }
        },
        {
            id: "innerChange",
            libId: store_1.Ids.star,
            lineWidth: 1,
            triangleNum: 5,
            innerRadius: 0.5,
            width: 120,
            height: 120,
            style: {
                top: 410,
                left: 20,
            }
        }
    ],
    actionList: `
    @this = {
        this.on("Add", () => {
          var $boo1 = true;
          var $boo2 = true;
          setEnterFrame(()=>{
            this#ten.rotation = this#ten.rotation +1;
            if($boo1){
              if(this#many.triangleNum <= 100){
                this#many.triangleNum = this#many.triangleNum +1;
                if(this#innerChange.innerRadius < 0.8){
                  this#innerChange.innerRadius = this#innerChange.innerRadius +0.1;
                }
              }else{
                $boo1 = false
              } 
            }else{
              if(this#many.triangleNum >=2){
                this#many.triangleNum = this#many.triangleNum -1;
                if(this#innerChange.innerRadius >0.1){
                  this#innerChange.innerRadius = this#innerChange.innerRadius -0.1;
                }
              }else{
                $boo1 = true
              } 
            }
          
          });
        });
    }
  `
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.dinoImage]: dino,
    [store_1.Ids.star]: star,
};
exports.default = allComponents;
