/*
 *   全部文档: https://code.vipkid.com.cn/xyz/docs
 *   动画文档: https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/animation.md
 *   VFX 使用文档: https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/aciton.md
 * */

import { App, Ids } from "./store";
import { gui, guiType } from "../types/Component";
import { Components } from "../types/IVFTemplate";

const dinoWidth = 83;
const dino: gui.Image = {
  type: guiType.Image,
  width: dinoWidth,
  height: 138,
  src: Ids.dinoImage,
  style: {
    justifyContent: "center"
  }
};

const title: gui.Text = {
  type: guiType.Text,
  width: 100,
  style: {
    justifyContent: "center"
  }
};

const rect: gui.Rect = {
  type: guiType.Rect,
  width: 100,
  color: 0xffffff,
  lineColor: 0xff00cc,
  lineWidth: 1,
  radius: 10, //圆角
}

const maskImage: gui.Image = {
  type: guiType.Image,
  src: Ids.clear1,
};

const root: gui.Custom = {
  type: guiType.Custom,
  interactabled: false,
  children: [
    {
      id: Ids.dinoImage,
      libId: Ids.dinoImage,
      style: {
        top: 0
      }
    },
    {
      id: Ids.title,
      libId: Ids.title,
      text: "图形接口示例",
      style: {
        top: 160
      }
    },
    {
      id: 'leftImage',
      libId: Ids.dinoImage,
      src:Ids.pcImage.toString(), //设置新的图片
      anchorX:0.5, //调整描点，这是中心旋转
      anchorY:0.5, //调整描点，这是中心旋转
      style: {
        top: 230,
        left:80
        justifyContent:"",
        width:85,
        height:71,
      }
    },
    {
      id: 'centerImage',
      libId: Ids.dinoImage,
      tint: 0xffcc00,//填充颜色
      style: {
        top: 250,
        left:220,
        scaleX:0.5,
        scaleY:0.5,
        justifyContent:"",
      }
    },
    {
      id: 'rightImage',
      libId: Ids.dinoImage,
      style: {
        top: 230,
        justifyContent:"flex-end",
        maskImage: Ids.rect.toString(), //设置遮罩
        maskSize: [80, 40],
        maskPosition: [0, 20],
      }
    },
    {
      id: 'bg2',
      libId: Ids.dinoImage,
      src:Ids.bg2.toString(), //设置新的图片
      style: {
        top: 400,
        width:340,
        height:160
      }
    },
    {
      id: 'bg',
      libId: Ids.dinoImage,
      src:Ids.bg1.toString(), //设置新的图片
      style: {
        top: 400,
        width:340,
        height:160,
        maskImage: Ids.maskImage.toString(),
        maskSize: [100, 100],
        maskPosition: [-70, -70]
      }
    }
  ],
  animations:[
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
  actionList:`
    @this = {
        this.on("Add", () => {

          var global$count = 0;
          var global$rotation = 0;
          setEnterFrame(()=>{
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

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino,
  [Ids.rect]: rect,
  [Ids.maskImage]:maskImage
};

export default allComponents;
