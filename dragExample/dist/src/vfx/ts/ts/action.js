"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(Ids) {
    return `@this = {
    // 这里是第一层，也叫顶层。
    this.on("Add", () => {
        // 这里是第二层
        trace("Hello, world!");
    });
}
`;
}
exports.default = default_1;
