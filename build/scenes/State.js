"use strict";
var scenes;
(function (scenes) {
    var State;
    (function (State) {
        State[State["NO_SCENE"] = 0] = "NO_SCENE";
        State[State["START"] = 1] = "START";
        State[State["PLAY"] = 2] = "PLAY";
        State[State["END"] = 3] = "END";
        State[State["NUM_OF_SCENES"] = 4] = "NUM_OF_SCENES";
    })(State = scenes.State || (scenes.State = {}));
})(scenes || (scenes = {}));
//# sourceMappingURL=State.js.map