"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const Component_1 = require("../types/Component");
const global_1 = require("./global");
const tracing = {
    type: Component_1.guiType.Tracing,
    debug: true,
    traceSprite: store_1.AssetId.fan,
    renderBgSprite: store_1.AssetId.maskBg,
    tracePoints: global_1.tracePoints,
    lineTexture: store_1.AssetId.maskBg,
    mode: 0
};
const button = {
    type: Component_1.guiType.Button,
    width: 100,
    height: 30,
    up: store_1.AssetId.up,
    down: store_1.AssetId.down,
    move: store_1.AssetId.move
};
const radio = {
    type: Component_1.guiType.CheckBox,
    up: store_1.AssetId.unselect.toString(),
    down: store_1.AssetId.unselect.toString(),
    move: store_1.AssetId.unselect.toString(),
    disabled: store_1.AssetId.unselect.toString(),
    upAndSelected: store_1.AssetId.select_up.toString(),
    downAndSelected: store_1.AssetId.select_down.toString(),
    moveAndSelected: store_1.AssetId.select_down.toString(),
    disabledAndSelected: store_1.AssetId.unselect.toString(),
    width: 22,
    height: 22,
    style: {
        top: 30
    }
};
const radioText = {
    type: Component_1.guiType.Text,
    style: {
        color: 0xffffff,
        top: 30,
        fontSize: 22
    }
};
const root = {
    type: Component_1.guiType.Custom,
    interactabled: false,
    children: [
        {
            id: "tracing1",
            libId: store_1.Ids.tracing,
            x: 0,
            y: 100,
            width: 260,
            height: 260,
        },
        {
            id: "tracing2",
            libId: store_1.Ids.tracing,
            x: 0,
            y: 400,
            width: 260,
            height: 260
        },
        {
            id: "label1",
            libId: store_1.Ids.radioText,
            text: "未完成",
            style: {
                left: 270,
                top: 200
            }
        },
        {
            id: "label2",
            libId: store_1.Ids.radioText,
            text: "未完成",
            style: {
                left: 270,
                top: 500
            }
        },
        {
            id: "radio0",
            libId: store_1.Ids.radio,
            checked: true,
            checkGroup: "groupRadio",
            style: {
                left: 0
            }
        },
        {
            id: "radio1",
            libId: store_1.Ids.radio,
            checkGroup: "groupRadio",
            style: {
                left: 130
            }
        },
        {
            id: "radio2",
            libId: store_1.Ids.radio,
            checkGroup: "groupRadio",
            style: {
                left: 260
            }
        },
        {
            id: "radioText0",
            libId: store_1.Ids.radioText,
            text: "笔画检测",
            style: {
                left: 28
            }
        },
        {
            id: "radioText1",
            libId: store_1.Ids.radioText,
            text: "教学模式",
            style: {
                left: 158
            }
        },
        {
            id: "radioText2",
            libId: store_1.Ids.radioText,
            text: "自动书写",
            style: {
                left: 288
            }
        },
        {
            id: "clearBtn",
            libId: store_1.Ids.button,
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
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.tracing]: tracing,
    [store_1.Ids.radio]: radio,
    [store_1.Ids.radioText]: radioText,
    [store_1.Ids.button]: button
};
exports.default = allComponents;
