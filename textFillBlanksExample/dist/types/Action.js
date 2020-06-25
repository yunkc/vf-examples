"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Express = exports.ActionType = void 0;
var ActionType;
(function (ActionType) {
    ActionType[ActionType["Print"] = 0] = "Print";
    ActionType[ActionType["Add"] = 1] = "Add";
    ActionType[ActionType["Added"] = 2] = "Added";
    ActionType[ActionType["Remove"] = 3] = "Remove";
    ActionType[ActionType["SetProperty"] = 4] = "SetProperty";
    ActionType[ActionType["Click"] = 5] = "Click";
    ActionType[ActionType["Express"] = 6] = "Express";
    ActionType[ActionType["IfGroup"] = 7] = "IfGroup";
    ActionType[ActionType["If"] = 8] = "If";
    ActionType[ActionType["ElseIf"] = 9] = "ElseIf";
    ActionType[ActionType["Else"] = 10] = "Else";
    ActionType[ActionType["DefineFunction"] = 11] = "DefineFunction";
    ActionType[ActionType["CallFunction"] = 12] = "CallFunction";
    ActionType[ActionType["AddEventListener"] = 13] = "AddEventListener";
    ActionType[ActionType["RemoveEventListener"] = 14] = "RemoveEventListener";
    ActionType[ActionType["EmitEvent"] = 15] = "EmitEvent";
    ActionType[ActionType["PlaySound"] = 16] = "PlaySound";
    ActionType[ActionType["PlayAnimation"] = 17] = "PlayAnimation";
    ActionType[ActionType["JumpToNextScene"] = 18] = "JumpToNextScene";
    ActionType[ActionType["JumpToPrevScene"] = 19] = "JumpToPrevScene";
    ActionType[ActionType["JumpToScene"] = 20] = "JumpToScene";
    ActionType[ActionType["ArrayInit"] = 21] = "ArrayInit";
    ActionType[ActionType["ArrayPop"] = 22] = "ArrayPop";
    ActionType[ActionType["ArrayPush"] = 23] = "ArrayPush";
    ActionType[ActionType["ArraySplice"] = 24] = "ArraySplice";
    ActionType[ActionType["ArrayRandom"] = 25] = "ArrayRandom";
    ActionType[ActionType["ArrayConcat"] = 26] = "ArrayConcat";
    ActionType[ActionType["ArrayShift"] = 27] = "ArrayShift";
    ActionType[ActionType["ArrayUnshift"] = 28] = "ArrayUnshift";
    ActionType[ActionType["AddEventListenerCall"] = 29] = "AddEventListenerCall";
    ActionType[ActionType["CallProtoFunction"] = 30] = "CallProtoFunction";
    ActionType[ActionType["GotoPlay"] = 31] = "GotoPlay";
    ActionType[ActionType["GotoStop"] = 32] = "GotoStop";
    ActionType[ActionType["PauseSound"] = 33] = "PauseSound";
    ActionType[ActionType["ResumeSound"] = 34] = "ResumeSound";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var Express;
(function (Express) {
})(Express = exports.Express || (exports.Express = {}));