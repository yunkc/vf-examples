"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.AssetId = exports.Ids = void 0;
var Ids;
(function (Ids) {
    Ids[Ids["root"] = 0] = "root";
    Ids[Ids["tracing"] = 1] = "tracing";
    Ids[Ids["radio"] = 2] = "radio";
    Ids[Ids["radioText"] = 3] = "radioText";
    Ids[Ids["button"] = 4] = "button";
})(Ids = exports.Ids || (exports.Ids = {}));
var AssetId;
(function (AssetId) {
    AssetId[AssetId["fan"] = 0] = "fan";
    AssetId[AssetId["maskBg"] = 1] = "maskBg";
    AssetId[AssetId["unselect"] = 2] = "unselect";
    AssetId[AssetId["select_up"] = 3] = "select_up";
    AssetId[AssetId["select_down"] = 4] = "select_down";
    AssetId[AssetId["up"] = 5] = "up";
    AssetId[AssetId["move"] = 6] = "move";
    AssetId[AssetId["down"] = 7] = "down";
})(AssetId = exports.AssetId || (exports.AssetId = {}));
var App;
(function (App) {
    App.name = 'VFT2J';
    App.width = 405;
    App.height = 720;
    App.baseUrl = '';
    App.conversion = '';
    App.version = '0.0.1';
})(App = exports.App || (exports.App = {}));
