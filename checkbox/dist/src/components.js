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
const checkbox = {
    type: Component_1.guiType.CheckBox,
    width: 80,
    height: 80,
    up: store_1.Ids.checkboxUnselect.toString(),
    down: store_1.Ids.checkboxUnselect.toString(),
    move: store_1.Ids.checkboxUnselect.toString(),
    disabled: store_1.Ids.checkboxUnselect.toString(),
    upAndSelected: store_1.Ids.checkboxUpAndSelected.toString(),
    downAndSelected: store_1.Ids.checkboxDownAndSelected.toString(),
    moveAndSelected: store_1.Ids.checkboxDownAndSelected.toString(),
    disabledAndSelected: store_1.Ids.checkboxDisabledAndSelected.toString(),
};
const radio = {
    type: Component_1.guiType.CheckBox,
    width: 80,
    height: 80,
    up: store_1.Ids.radioUnselect.toString(),
    down: store_1.Ids.radioUnselect.toString(),
    move: store_1.Ids.radioUnselect.toString(),
    disabled: store_1.Ids.radioUnselect.toString(),
    upAndSelected: store_1.Ids.radioUpAndSelected.toString(),
    downAndSelected: store_1.Ids.radioDownAndSelected.toString(),
    moveAndSelected: store_1.Ids.radioDownAndSelected.toString(),
    disabledAndSelected: store_1.Ids.radioDisabledAndSelected.toString(),
};
const root = {
    type: Component_1.guiType.Custom,
    interactabled: false,
    children: [
        {
            id: store_1.Ids.dinoImage,
            libId: store_1.Ids.dinoImage,
            style: {
                top: 20
            }
        },
        {
            id: store_1.Ids.title,
            libId: store_1.Ids.title,
            text: "单选与复选框接口示例",
            style: {
                top: 180,
            }
        },
        {
            id: 'checkbox1',
            libId: store_1.Ids.checkbox,
            style: {
                left: 30,
                top: 250
            },
            value: "checkbox1",
        },
        {
            id: 'checkbox2',
            libId: store_1.Ids.checkbox,
            style: {
                left: 150,
                top: 250
            },
            value: "checkbox2",
        },
        {
            id: 'checkbox3',
            libId: store_1.Ids.checkbox,
            style: {
                left: 270,
                top: 250
            },
            value: "checkbox3",
        },
        {
            id: 'radio1',
            libId: store_1.Ids.radio,
            style: {
                left: 30,
                top: 350
            },
            value: "radio1",
            checkGroup: "radioGroup1"
        },
        {
            id: 'radio2',
            libId: store_1.Ids.radio,
            style: {
                left: 150,
                top: 350
            },
            value: "radio2",
            checkGroup: "radioGroup1"
        },
        {
            id: 'radio3',
            libId: store_1.Ids.radio,
            style: {
                left: 270,
                top: 350
            },
            value: "radio3",
            checkGroup: "radioGroup1"
        }
    ],
    actionList: `
    @this = {
        this.on("Add", () => {

          this#checkbox1.on("CHANGE", ()=>{
              trace(this#checkbox1.value);
              trace(this#checkbox1.checked);
          });
          this#checkbox2.on("CHANGE", ()=>{
              trace(this#checkbox2.value);
              trace(this#checkbox2.checked);
          });
          this#checkbox3.on("CHANGE", ()=>{
              trace(this#checkbox3.value);
              trace(this#checkbox3.checked);
          });

          this#radio1.on("CHANGE", ()=>{
              trace(this#radio1.value);
              trace(this#radio1.checked);
          });
          this#radio2.on("CHANGE", ()=>{
              trace(this#radio2.value);
              trace(this#radio2.checked);
          });
          this#radio3.on("CHANGE", ()=>{
              trace(this#radio3.value);
              trace(this#radio3.checked);
          });
        });
    }
  `
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.dinoImage]: dino,
    [store_1.Ids.checkbox]: checkbox,
    [store_1.Ids.radio]: radio,
};
exports.default = allComponents;
