/*
*   VF文档地址: https://vipkid-edu.github.io/vf-docs/
* */

import { App, Ids } from "./store";
import { gui, guiType } from "../types/Component";
import { Components } from "../types/IVFTemplate";

const dinoWidth = 83;
const dino: gui.Image = {
  type: guiType.Image,
  src: Ids.dinoImage,
  style: {
    width: dinoWidth,
    height: 138,
    justifyContent: "center"
  }
};

const title: gui.Text = {
  type: guiType.Text,
  style: {
    width: 100,
    justifyContent: "center"
  }
};

const richLabel = {
  type: 'RichLabel',
  name: 'RichLabel',
  style: {
    width: 300,
    justifyContent: "center",

  },
  textFlow: '<label color=0xff0000,0x00ff00 fontSize=20 letterSpacing=10 >富文本组件</label>'
    + '<label color=0x336699 fontSize=60 stroke=0x00ff00 strokeThickness=2>RichLabel</label>'
    + '<label fontfamily="楷体"textdecoration="UnderLine" textDecorationColor="#00ff99" href="https://vipkid-edu.github.io/vf-docs/">https://vipkid-edu.github.io/vf-docs/</label>'
    + '<label fontfamily="楷体"><u>各种</u></label>'
    + '<label color=0xff0000>五</label>'
    + '<label color=0x00ff00>彩</label>'
    + '<label color=0xf000f0>缤</label>'
    + '<label color=0x00ffff>纷</label>'
    + '<label>、\n1</label>'
    + '<label fontSize=56 fontStyle="italic" fontWeight="bold">大</label>'
    + '<label fontSize=16 sup=false>小</label>'
    + '<label fontSize=16>不</label>'
    + '<label fontSize=34>一</label>'
    + '<label>、</label>'
    + '<label fontWeight="bold">粗</label>'
    + '<label fontWeight="lighter">细</label>'
    + '<label fontWeight="normal">不</label>'
    + '<label fontWeight="900">同</label>'
    + '<label fontSize=30 color=0xf000f0 href="event:testClick">（带有点击事件的）</label>'
    + '<label color=0x00ff00 href="event:testClick1"><i>（格）</i></label>'
    + '<label color=0xf000f0 fontSize=26 >式</label>'
    + '<label color=0xf06f00><i>各</i></label>'
    + '<label fontfamily="KaiTi">样的文字</label>' //楷体
    + '<label dropShadow=true dropShadowColor=0x00ff00>了！</label>'
}

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
      text: "富文本示例",
      style: {
        top: 160,
      }
    },
    {
      id: "RichLabel",
      libId: Ids.richLabel,
      style: {
        top: 160,
      }
    },

  ],
  actionList: `
    @this = {
        this.on("Add", () => {
          var $boo1 = true;
          var $boo2 = true;
          setEnterFrame(()=>{
            this#ten.rotation = this#ten.rotation +1;
          
          });
        });
    }
  `
};

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino,
  [Ids.richLabel]: richLabel as gui.AllGUI,
};

export default allComponents;
