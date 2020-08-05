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

const scrollBar: gui.ScrollBar = {
  type: guiType.ScrollBar,
  thumb:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAIAAABvrngfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NEJCQkM0RjAxRjIxMUU1OUIxODkzNzZCOTg5NDdBQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NEJCQkM1MDAxRjIxMUU1OUIxODkzNzZCOTg5NDdBQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYxOUJGMjdFMDFGMDExRTU5QjE4OTM3NkI5ODk0N0FDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU0QkJCQzRFMDFGMjExRTU5QjE4OTM3NkI5ODk0N0FDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4wp+wAAABdJREFUeNpi0Wm5xoAKmBgwADWFAAIMAK5qAZXBXGqKAAAAAElFTkSuQmCC",
  track:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAIAAABvrngfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQ0JERjUzNDAxRUUxMUU1OUIxODkzNzZCOTg5NDdBQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQUExMDQ2QzAxRUYxMUU1OUIxODkzNzZCOTg5NDdBQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNDQkRGNTMyMDFFRTExRTU5QjE4OTM3NkI5ODk0N0FDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNDQkRGNTMzMDFFRTExRTU5QjE4OTM3NkI5ODk0N0FDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KKOhfwAAABdJREFUeNpiefHiBQMqYGLAANQUAggwADUDAscAbnM3AAAAAElFTkSuQmCC",
  vertical: true, //位置必须在实例后
  autohide: true, //当内容不需要滚动时，隐藏
  value: 0
};

const root: gui.Custom = {
  type: guiType.Custom,
  interactabled: false,
  style: {
    height: 50
  },
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
      text: "滚动条接口示例",
      style: {
        top: 160,
      }
    },
    {
      id: "bottom0",
      libId: Ids.dinoImage,
      style: {
        top: 280
      }
    },
    {
      id: "bottom1",
      libId: Ids.dinoImage,
      style: {
        top: 480
      }
    },
    {
      id: "bottom2",
      libId: Ids.dinoImage,
      style: {
        top: 650
      }
    },
    {
      id: Ids.scrollBar,
      libId: Ids.scrollBar,
      text: "滑动条接口示例",
      style: {
        top: 0,
        right: 10,
        width: 10
      }
    },
  ],
  actionList: `
    @this = {
        this.on("Added", () => {
          this#${Ids.scrollBar}.source = "this"; //被绑定对象需要添加舞台后进行操作
          this#${Ids.scrollBar}.height = this.height;
        });
    }
  `
};

const allComponents: Components = {
  [Ids.root]: root,
  [Ids.title]: title,
  [Ids.dinoImage]: dino,
  [Ids.scrollBar]: scrollBar,
};

export default allComponents;
