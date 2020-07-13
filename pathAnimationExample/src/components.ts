/*
 *   全部文档: https://code.vipkid.com.cn/xyz/docs
 *   动画文档: https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/animation.md
 *   VFX 使用文档: https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/aciton.md
 * */

import { App, Ids} from "./store";
import { gui, guiType } from "../types/Component";
import { Components } from "../types/IVFTemplate";


const dino: gui.Image = {
  type: guiType.Image,
  src :Ids.dino,
  width:83,
  height:138,
  style: {
    justifyContent: "center"
  }
}

const title: gui.Text = {
  type: guiType.Text,
  width: 200,
  style: {
    justifyContent: "center",
    color: 0xffffff,
    fontSize: 32,
    wordWrap: true,
    wordWrapWidth: 200,
  }
};

const root: gui.Custom = {
  type: guiType.Custom,
  interactabled:true,// 容器默认为false
  children:[
    {
      id: "dino",
      libId: Ids.dino,
      style:{
        top:0
      }
    },
    {
      id: "label",
      libId: Ids.title,
      text: "路径动画",
      style:{
        top:50
      }
    },
  ],
  animations:[
    {
      name:"default",
      autoPlay:true,
      loop:true,
      children:{
        "dino" :{
        loop: true,
        timelines: [
            {
                type: "path",
                path: "M60 171Q58 181 54 193Q26 255 16 277Q22 349 32 371Q10 457 66 477Q256 495 264 485Q214 371 178 315Q106 203 104 189Q118 117 122 107Q144 99 152 97Q264 151 300 189Q310 283 288 305Q220 321 198 309Q162 255 172 227Q284 193 358 199Q608 261 644 277Q662 379 642 411Q450 419 390 407Q336 353 328 301Q390 165 438 139Q602 123 656 141Q820 379 814 425Q670 489 604 491Q430 441 392 415Q366 317 380 271Q516 189 580 177Q712 221 740 257Q788 495 760 583Q634 677 584 679Q426 647 368 629Q100 485 80 457Q48 407 46 391Q94 311 136 291Q490 307 552 333Q626 433 614 531Q492 603 436 607Q216 519 148 475Q122 389 142 359Q322 287 368 279Q428 281 430 283Q446 299 450 301",
                loop: true,
                frames: [
                    {
                        frame: 0,
                        curve: [1],
                        value: 0
                    },
                    {
                        frame: 600,
                        value: 1
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
      this.on("Added", () => {

      });

  }
`
}



const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dino]: dino,

};

export default allComponents;
