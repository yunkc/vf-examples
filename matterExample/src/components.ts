/*
 *   全部文档: https://code.vipkid.com.cn/xyz/docs
 *   动画文档: https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/animation.md
 *   VFX 使用文档: https://code.vipkid.com.cn/xyz/docs/blob/master/docs/handbook/aciton.md
 * */

import { App, Ids } from "./store";
import { gui, guiType } from "../types/Component";
import { Components } from "../types/IVFTemplate";
import { tracePoints } from "./global";
import assets from "./assets";

const Matter = {
    type: 'Matter',
    options: {
      mouseConstraint: true
    }
};

const text: gui.Text = {
  type: guiType.Text,
  text: 'Matter physics test',
  pivotX: 50,
  pivotY: 15,
  style: {
    backgroundColor: 0x00ffff,
    color: 0xff0000,
    fontSize: 12,
  }
}

const rect: gui.Rect = {
  type: guiType.Rect,
  color: 0xff00ff,
  width: 400,
  height: 20,
  anchorX: 0.5,
  anchorY: 0.5
}

const image: gui.Image = {
  type: guiType.Image,
  src: Ids.circle50,
  anchorX: 0.5,
  anchorY: 0.5
}

const container: gui.Custom = {
  type: guiType.Custom,
  children: [
    {
      id: 'ceil',
      libId: Ids.text,
    },
    {
      id: 'floor',
      libId: Ids.rect,
    },
    {
      id: 'left',
      libId: Ids.rect,
    },
    {
      id: 'right',
      libId: Ids.rect,
    },
    {
      id: 'bird1',
      libId: Ids.image,
      src: Ids.bird,
    },
    {
      id: 'bird2',
      libId: Ids.image,
      src: Ids.bird,
    },
    {
      id: 'bird3',
      libId: Ids.image,
      src: Ids.bird,
    },
    {
      id: 'bird4',
      libId: Ids.image,
      src: Ids.bird,
    },
    {
      id: 'wheel1',
      libId: Ids.image,
      src: Ids.wood,
      width: 50
    },
    {
      id: 'wheel2',
      libId: Ids.image,
      src: Ids.wood
    },
    {
      id: 'wheel3',
      libId: Ids.image,
      src: Ids.wood
    }
  ]
}

const root: gui.Custom = {
    type: guiType.Custom,
    interactabled: false, // 容器默认为false
    children: [
      {
        id: 'matter',
        libId: Ids.matter,
        bodies: [
          {
            id: 1,
            shape: 'rectangle',
            width: 100, 
            height: 32,
            displayObject: 'this#container#ceil',
            x: 200,
            y: 200,
            isStatic: true,
            group: -1
        },
        {
            id: 2,
            shape: 'rectangle',
            width: 400,
            height: 20,
            displayObject: 'this#container#left',
            isStatic: true,
            angle: 0.5 * Math.PI,
            x: 50,
            y: 400,
            group: -1
        },
        {
          id: 10000,
          shape: 'rectangle',
          width: 400,
          height: 20,
          displayObject: 'this#container#right',
          isStatic: true,
          angle: 0.5 * Math.PI,
          x: 350,
          y: 350,
          group: -1
      },
        {
          id: 3,
          shape: 'rectangle',
          width: 400,
          height: 20,
          displayObject: 'this#container#floor',
          isStatic: true,
          angle: 0.1,
          x: 150,
          y: 600,
          group: -1
      },
        {
          id: 4,
          shape: 'circle',
          radius: 20,
          displayObject: 'this#container#bird1',
          x: 200,
          y: 0,
          restitution: 0.5
        },
        {
          id: 5,
          shape: 'circle',
          radius: 20,
          displayObject: 'this#container#bird2',
          x: 200,
          y: 0,
          restitution: 0.5
        },
        {
          id: 6,
          shape: 'circle',
          radius: 20,
          displayObject: 'this#container#bird3',
          x: 200,
          y: -30,
          restitution: 0.2
        },
        {
          id: 7,
          shape: 'circle',
          radius: 20,
          displayObject: 'this#container#bird4',
          x: 180,
          y: -60,
          restitution: 0.7
        },
        {
          id: 8,
          shape: 'rectangle',
          width: 50,
          height: 20,
          displayObject: 'this#container#wheel1',
          x: 200,
          y: 500,
          isStatic: true,
          angle: 0.5 * Math.PI,
          group: -1
        },
        {
          id: 9,
          shape: 'rectangle',
          width: 200,
          height: 20,
          displayObject: 'this#container#wheel2',
          x: 200,
          y: 300,
          group: -1
        },
        {
          id: 10,
          shape: 'rectangle',
          width: 200,
          height: 20,
          displayObject: 'this#container#wheel3',
          x: 200,
          y: 300,
          angle: 0.5 * Math.PI,
          group: -1
        }
        ],
        constraints: [
          {
            ids: [1],
            bodies: [8, 9],
            pointAX: 0,
            pointAY: -25,
            pointBX: 0,
            pointBY: 0,
            stiffness: 1,
            length: 0
          },
          {
            ids: [1],
            bodies: [8, 10],
            pointAX: 0,
            pointAY: -25,
            pointBX: 0,
            pointBY: 0,
            stiffness: 1,
            length: 0
          },
          {
            ids: [2],
            bodies: [9, 10],
            pointAX: 100,
            pointAY: 0,
            pointBX: 100,
            pointBY: 0,
            stiffness: 1,
            length: 0
          },
          // {
          //   ids: [3],
          //   bodies: [9, 10],
          //   pointAX: 0,
          //   pointAY: 100,
          //   pointBX: 0,
          //   pointBY: -100,
          //   stiffness: 1,
          //   length: 0
          // }
        ]
      },
      {
        id: 'container',
        libId: Ids.container
      },
    ],
    actionList: `
    @this = {
      this.on("Added", () => {
        var $matter = this#matter;
        $matter.emitBodies(200, 0, 50, 5, {
          shape: 'circle',
          radius: 20,
          displayObject: '',
          density: 0.01,
          restitution: 0.2
        }, 200, 3);

        $matter.emitBodies(200, 0, 10, 1, {
          shape: 'rectangle',
          width: 40,
          height: 40,
          displayObject: '',
          density: 0.01,
          restitution: 0.2
        }, 16776960);

        $matter.cloth(155, 200, 100, 200, 0.6, 2);
        $matter.stack(150, 0, 3, 3, {
          shape: 'circle',
          radius: 20,
          displayObject: '',
          density: 0.01,
          restitution: 0.2
        }, 200, 4);
      });
    }
`,
};

const allComponents: Components = {
    [Ids.matter]: Matter,
    [Ids.root]: root,
    [Ids.text]: text,
    [Ids.rect]: rect,
    [Ids.image]: image,
    [Ids.container]: container,
};

export default allComponents;
