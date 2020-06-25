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

const checkbox: gui.Checkbox = {
  type: guiType.CheckBox,
  width: 80,
  height: 80,
  up: Ids.checkboxUnselect.toString(),
  down: Ids.checkboxUnselect.toString(),
  move: Ids.checkboxUnselect.toString(),
  disabled: Ids.checkboxUnselect.toString(),
  upAndSelected: Ids.checkboxUpAndSelected.toString(),
  downAndSelected: Ids.checkboxDownAndSelected.toString(),
  moveAndSelected: Ids.checkboxDownAndSelected.toString(),
  disabledAndSelected: Ids.checkboxDisabledAndSelected.toString(),
}

const radio: gui.Checkbox = {
  type: guiType.CheckBox,
  width: 80,
  height: 80,
  up: Ids.radioUnselect.toString(),
  down: Ids.radioUnselect.toString(),
  move: Ids.radioUnselect.toString(),
  disabled: Ids.radioUnselect.toString(),
  upAndSelected: Ids.radioUpAndSelected.toString(),
  downAndSelected: Ids.radioDownAndSelected.toString(),
  moveAndSelected: Ids.radioDownAndSelected.toString(),
  disabledAndSelected: Ids.radioDisabledAndSelected.toString(),
}

const root: gui.Custom = {
  type: guiType.Custom,
  interactabled: false,
  children: [
    {
      id: Ids.dinoImage,
      libId: Ids.dinoImage,
      style: {
        top: 20
      }
    },
    {
      id: Ids.title,
      libId: Ids.title,
      text: "单选与复选框接口示例",
      style: {
        top: 180,
      }
    },
    {
      id: 'checkbox1',
      libId: Ids.checkbox,
      style:{
        left: 30,
        top: 250
      },
      value:"checkbox1",
    },
    {
      id: 'checkbox2',
      libId: Ids.checkbox,
      style:{
        left: 150,
        top: 250
      },
      value:"checkbox2",
    },
    {
      id: 'checkbox3',
      libId: Ids.checkbox,
      style:{
        left: 270,
        top: 250
      },
      value:"checkbox3",
    },

    // radio
    {
      id: 'radio1',
      libId: Ids.radio,
      style:{
        left: 30,
        top: 350
      },
      value:"radio1",
      checkGroup:"radioGroup1" // checkbox与radio区别
    },
    {
      id: 'radio2',
      libId: Ids.radio,
      style:{
        left: 150,
        top: 350
      },
      value:"radio2",
      checkGroup:"radioGroup1" // checkbox与radio区别
    },
    {
      id: 'radio3',
      libId: Ids.radio,
      style:{
        left: 270,
        top: 350
      },
      value:"radio3",
      checkGroup:"radioGroup1" // checkbox与radio区别
    }
  ],
  actionList:`
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

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino,
  [Ids.checkbox]: checkbox,
  [Ids.radio]:radio,
};

export default allComponents;
