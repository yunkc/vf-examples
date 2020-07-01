"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const Component_1 = require("../types/Component");
const followLine = {
    type: Component_1.guiType.FollowLine,
    style: {
        backgroundColor: 0xffffff
    }
};
const button = {
    type: Component_1.guiType.Button,
    up: store_1.AssetId.up,
    down: store_1.AssetId.down,
    move: store_1.AssetId.move,
    width: 100,
    height: 30
};
const slider = {
    type: Component_1.guiType.Slider,
    thumb: store_1.AssetId.thumb,
    track: store_1.AssetId.track,
    tracklight: store_1.AssetId.tracklight,
    value: 0,
    vertical: false,
};
const root = {
    type: Component_1.guiType.Custom,
    interactabled: true,
    children: [
        {
            id: "eraseBtn",
            libId: store_1.Ids.button,
            x: 15,
            y: 15,
            text: '擦除 false'
        },
        {
            id: "restorBtn",
            libId: store_1.Ids.button,
            x: 130,
            y: 15,
            text: '重置'
        },
        {
            id: "followLineTop",
            libId: store_1.Ids.followLine,
            x: 15,
            y: 50,
            width: 340,
            height: 200,
            role: "T",
        },
        {
            id: "followLineDown",
            libId: store_1.Ids.followLine,
            x: 15,
            y: 270,
            width: 340,
            height: 200,
            role: "S"
        },
        {
            id: "slider",
            libId: store_1.Ids.slider,
            width: 340,
            height: 10,
            x: 15,
            y: 480,
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
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.followLine]: followLine,
    [store_1.Ids.button]: button,
    [store_1.Ids.slider]: slider
};
exports.default = allComponents;
