"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.AssetId = exports.Ids = void 0;
var Ids;
(function (Ids) {
    Ids[Ids["root"] = 0] = "root";
    Ids[Ids["title"] = 1] = "title";
    Ids[Ids["video"] = 2] = "video";
    Ids[Ids["button"] = 3] = "button";
})(Ids = exports.Ids || (exports.Ids = {}));
var AssetId;
(function (AssetId) {
    AssetId[AssetId["up"] = 0] = "up";
    AssetId[AssetId["move"] = 1] = "move";
    AssetId[AssetId["down"] = 2] = "down";
    AssetId[AssetId["video"] = 3] = "video";
    AssetId[AssetId["poster"] = 4] = "poster";
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
