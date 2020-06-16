"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.AssetId = exports.Ids = void 0;
var Ids;
(function (Ids) {
    Ids[Ids["root"] = 0] = "root";
    Ids[Ids["followLine"] = 1] = "followLine";
    Ids[Ids["button"] = 2] = "button";
    Ids[Ids["slider"] = 3] = "slider";
})(Ids = exports.Ids || (exports.Ids = {}));
var AssetId;
(function (AssetId) {
    AssetId[AssetId["up"] = 0] = "up";
    AssetId[AssetId["move"] = 1] = "move";
    AssetId[AssetId["down"] = 2] = "down";
    AssetId[AssetId["thumb"] = 3] = "thumb";
    AssetId[AssetId["track"] = 4] = "track";
    AssetId[AssetId["tracklight"] = 5] = "tracklight";
})(AssetId = exports.AssetId || (exports.AssetId = {}));
var App;
(function (App) {
    App.name = 'VFT2J';
    App.width = 890;
    App.height = 500;
    App.baseUrl = '';
    App.conversion = '';
    App.version = '0.0.1';
})(App = exports.App || (exports.App = {}));
