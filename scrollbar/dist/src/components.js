"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const Component_1 = require("../types/Component");
const dinoWidth = 83;
const dino = {
    type: Component_1.guiType.Image,
    src: store_1.Ids.dinoImage,
    style: {
        width: dinoWidth,
        height: 138,
        justifyContent: "center"
    }
};
const title = {
    type: Component_1.guiType.Text,
    style: {
        width: 100,
        justifyContent: "center"
    }
};
const scrollBar = {
    type: Component_1.guiType.ScrollBar,
    thumb: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAIAAABvrngfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NEJCQkM0RjAxRjIxMUU1OUIxODkzNzZCOTg5NDdBQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NEJCQkM1MDAxRjIxMUU1OUIxODkzNzZCOTg5NDdBQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYxOUJGMjdFMDFGMDExRTU5QjE4OTM3NkI5ODk0N0FDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU0QkJCQzRFMDFGMjExRTU5QjE4OTM3NkI5ODk0N0FDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4wp+wAAABdJREFUeNpi0Wm5xoAKmBgwADWFAAIMAK5qAZXBXGqKAAAAAElFTkSuQmCC",
    track: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAIAAABvrngfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQ0JERjUzNDAxRUUxMUU1OUIxODkzNzZCOTg5NDdBQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQUExMDQ2QzAxRUYxMUU1OUIxODkzNzZCOTg5NDdBQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNDQkRGNTMyMDFFRTExRTU5QjE4OTM3NkI5ODk0N0FDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNDQkRGNTMzMDFFRTExRTU5QjE4OTM3NkI5ODk0N0FDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KKOhfwAAABdJREFUeNpiefHiBQMqYGLAANQUAggwADUDAscAbnM3AAAAAElFTkSuQmCC",
    vertical: true,
    autohide: true,
    value: 0
};
const root = {
    type: Component_1.guiType.Custom,
    interactabled: false,
    style: {
        height: 50
    },
    children: [
        {
            id: store_1.Ids.dinoImage,
            libId: store_1.Ids.dinoImage,
            style: {
                top: 0
            }
        },
        {
            id: store_1.Ids.title,
            libId: store_1.Ids.title,
            text: "滚动条接口示例",
            style: {
                top: 160,
            }
        },
        {
            id: "bottom0",
            libId: store_1.Ids.dinoImage,
            style: {
                top: 280
            }
        },
        {
            id: "bottom1",
            libId: store_1.Ids.dinoImage,
            style: {
                top: 480
            }
        },
        {
            id: "bottom2",
            libId: store_1.Ids.dinoImage,
            style: {
                top: 650
            }
        },
        {
            id: store_1.Ids.scrollBar,
            libId: store_1.Ids.scrollBar,
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
          this#${store_1.Ids.scrollBar}.source = "this"; //被绑定对象需要添加舞台后进行操作
          this#${store_1.Ids.scrollBar}.height = this.height;
        });
    }
  `
};
const allComponents = {
    [store_1.Ids.root]: root,
    [store_1.Ids.title]: title,
    [store_1.Ids.dinoImage]: dino,
    [store_1.Ids.scrollBar]: scrollBar,
};
exports.default = allComponents;
