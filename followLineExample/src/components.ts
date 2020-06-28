/*
 *   全部文档: https://code.vipkid.com.cn/xyz/docs
 *   动画文档: https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/animation.md
 *   VFX 使用文档: https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/aciton.md
 * */

import { App, Ids, AssetId } from "./store";
import { gui, guiType } from "../types/Component";
import { Components } from "../types/IVFTemplate";



const followLine: gui.FollowLine = {
  type: guiType.FollowLine,
  style:{
    backgroundColor:0xffffff
  }
}

const button:gui.Button = {
  type: guiType.Button,
  up: AssetId.up,
  down: AssetId.down,
  move : AssetId.move
}

const slider:gui.Slider = {
  type: guiType.Slider,
  thumb: AssetId.thumb,
  track: AssetId.track,
  tracklight: AssetId.tracklight,
  value:0,
  vertical:false,
}


const root: gui.Custom = {
  type: guiType.Custom,
  interactabled:true,// 容器默认为false
  children:[
    {
      id:"eraseBtn",
      libId:Ids.button,
      x:15,
      y:15,
      text:'擦除 false'
    },
    {
      id:"restorBtn",
      libId:Ids.button,
      x:130,
      y:15,
      text:'重置'
    },
    {
      id:"followLineTop",
      libId:Ids.followLine,
      x:15,
      y:50,
      width:340,
      height:200,
      role:"T",
    {
      id:"followLineDown",
      libId:Ids.followLine,
      x:15,
      y:270,
      width:340,
      height:200,
      role:"S"
    },
    {
      id:"slider",
      libId:Ids.slider,
      width:340,
      height:10,
      x:15,
      y:480,
    }
  ],
  actionList: `
  @this = {
      this.on("Added", () => {
        
        this#slider.on("CHANGE", this.sliderChange);
        this#followLineTop.on("COMPLETE",this.topComplete);
        this#followLineDown.on("COMPLETE",this.downComplete);

        this#eraseBtn.on("click", () => {
            this#followLineTop.isErasing = this$isErasing;
            this#followLineDown.isErasing = this$isErasing;
            this#eraseBtn.text = '擦除 ' + this$isErasing;
            this$isErasing = !this$isErasing;
        });

        this#restorBtn.on("click", () => {
            this#followLineTop.reset();
        });
      });
 
      var $messageList= [];
      this#slider.value = 0;
      this#slider.maxValue = $messageList.length;
      var $d = "";
      var $v = 0;
      var $isErasing = true;
      function sliderChange($dis,$curValue){
        this#followLineDown.clear();
        this#followLineTop.clear();
        $v = $curValue;
        for($i in $v) {
          if($messageList[$i])
          {
            this#followLineDown.setData($messageList[$i]);
            this#followLineTop.setData($messageList[$i]);
          }
        };
      };
      function topComplete($display, $data){
          $d = $data;
          $messageList.push($d);
          this#slider.maxValue = $messageList.length;
          this#followLineDown.setData($d);
      };
      function downComplete($display, $data){
          $d = $data;
          $messageList.push($d);
          this#slider.maxValue = $messageList.length;
          this#followLineTop.setData($d);
      };

  }
`
}


const allComponents: Components = {
  [Ids.root]: root,
  [Ids.followLine]: followLine,
  [Ids.button]: button,
  [Ids.slider] : slider
};

export default allComponents;
