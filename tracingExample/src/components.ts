/*
*   VF文档地址: https://vipkid-edu.github.io/vf-docs/
* */

import { App, Ids, AssetId } from "./store";
import { gui, guiType } from "../types/Component";
import { Components } from "../types/IVFTemplate";
import { tracePoints } from "./global";
import assets from "./assets";

const tracing: gui.Tracing = {
  type: guiType.Tracing,
  debug: true,
  traceSprite: AssetId.fan,
  renderBgSprite: AssetId.maskBg,
  tracePoints: tracePoints,
  lineTexture: AssetId.maskBg,
  mode: 0
};

const button: gui.Button = {
  type: guiType.Button,
  width: 100,
  height: 30,
  up: AssetId.up,
  down: AssetId.down,
  move: AssetId.move
};

const radio: gui.Checkbox = {
  type: guiType.CheckBox,
  up: AssetId.unselect.toString(),
  down: AssetId.unselect.toString(),
  move: AssetId.unselect.toString(),
  disabled: AssetId.unselect.toString(),
  upAndSelected: AssetId.select_up.toString(),
  downAndSelected: AssetId.select_down.toString(),
  moveAndSelected: AssetId.select_down.toString(),
  disabledAndSelected: AssetId.unselect.toString(),
  width: 22,
  height: 22,
  style: {
    top: 30
  }
};

const radioText: gui.Text = {
  type: guiType.Text,
  style: {
    color: 0xffffff,
    top: 30,
    fontSize: 22
  }
};

const root: gui.Custom = {
  type: guiType.Custom,
  interactabled: false, // 容器默认为false
  children: [
    {
      id: "tracing1",
      libId: Ids.tracing,
      x: 0,
      y: 100,
      width: 260,
      height: 260,
    },
    {
      id: "tracing2",
      libId: Ids.tracing,
      x: 0,
      y: 400,
      width: 260,
      height: 260
    },
    {
      id: "label1",
      libId: Ids.radioText,
      text: "未完成",
      style: {
        left: 270,
        top: 200
      }
    },
    {
      id: "label2",
      libId: Ids.radioText,
      text: "未完成",
      style: {
        left: 270,
        top: 500
      }
    },
    {
      id: "radio0",
      libId: Ids.radio,
      checked: true,
      checkGroup: "groupRadio",
      style: {
        left: 0
      }
    },
    {
      id: "radio1",
      libId: Ids.radio,
      checkGroup: "groupRadio",
      style: {
        left: 130
      }
    },
    {
      id: "radio2",
      libId: Ids.radio,
      checkGroup: "groupRadio",
      style: {
        left: 260
      }
    },
    {
      id: "radioText0",
      libId: Ids.radioText,
      text: "笔画检测",
      style: {
        left: 28
      }
    },
    {
      id: "radioText1",
      libId: Ids.radioText,
      text: "教学模式",
      style: {
        left: 158
      }
    },
    {
      id: "radioText2",
      libId: Ids.radioText,
      text: "自动书写",
      style: {
        left: 288
      }
    },
    {
      id: "clearBtn",
      libId: Ids.button,
      text: "清除",
      style: {
        top: 70,
        left: 0
      }
    }
  ],
  actionList: `
  @this = {
      this.on("Added", () => {

        this#tracing1.clear();
        this#tracing2.clear();
  
        this#tracing1.on("CHANGE", this.tracChange1);
        this#tracing2.on("CHANGE", this.tracChange2);

        this#tracing1.on("COMPLETE", this.tracBack1);
        this#tracing2.on("COMPLETE", this.tracBack2);

        this#radio0.on("CHANGE", ()=>{
          var $checked = this#radio0.checked;
          this.change($checked , 0);
        });
        this#radio1.on("CHANGE", ()=>{
          var $checked = this#radio1.checked;
          this.change($checked , 1);
        });
        this#radio2.on("CHANGE", ()=>{
          var $checked = this#radio2.checked;
          this.change($checked , 2);
        });
        
        this#clearBtn.on("click", () => {
              this#tracing1.clear();
              this#tracing2.clear();
              this#label1.text = "未完成";
              this#label2.text = "未完成";
          });
        
      });

      function tracChange1($display, $data){
        this#tracing2.setData($data);
      };

      function tracChange2($display, $data){
        this#tracing1.setData($data);
      };


      function tracBack1($display, $curValue){
          if ($curValue.mode == 0) {//gui.Enum.TracingEnum.Mode.Check
              if ($curValue.value == 0) {
                  this#label1.text = "未完成";
              } else if ($curValue.value == 1) {
                  this#label1.text = "笔画正确";
              } else {
                  this#label1.text = "笔画错误";
              };
          } else if ($curValue.mode == 1) { //gui.Enum.TracingEnum.Mode.Teach
              this#label1.text = "教学完成";
          } else if ($curValue.mode == 2) { //gui.Enum.TracingEnum.Mode.Auto
              this#label1.text = "自动书写完成";
          };
      };

      function tracBack2($display, $curValue){
          if ($curValue.mode == 0) {
              if ($curValue.value == 0) {
                  this#label2.text = "未完成";
              } else if ($curValue.value == 1) {
                  this#label2.text = "笔画正确";
              } else {
                  this#label2.text = "笔画错误";
              };
          } else if ($curValue.mode == 1) {
              this#label2.text = "教学完成";·
          } else if ($curValue.mode == 2) {
              this#label2.text = "自动书写完成";
          };
      };

 


      function change($checked , $value){
          if($checked){
              this#tracing1.mode = $value;
              this#tracing2.mode = $value;
              this#label1.text = "未完成";
              this#label2.text = "未完成";
          };
      };

    
  }
`
};

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.tracing]: tracing,
  [Ids.radio]: radio,
  [Ids.radioText]: radioText,
  [Ids.button]: button
};

export default allComponents;
