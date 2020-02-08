"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // player:objects.Player;
        function Start() {
            var _this = _super.call(this) || this;
            _this.startLabel = new objects.Label();
            _this.startButton = new objects.Button();
            return _this;
            // this.player = new objects.Player();
        }
        Start.prototype.Start = function () {
            this.startLabel = new objects.Label("The Game", "40px", "Consolas", "#000000", 320, 240, true);
            this.startButton = new objects.Button("./Assets/images/startButton.png", 350, 300, true);
            // this.player = new objects.Player();
            this.Main();
        };
        Start.prototype.Update = function () {
            // this.player.update();
            // managers.Collision.squaredRadiusCheck(player, startButton);
            // managers.Collision.AABBCheck(this.player, this.startButton);
        };
        Start.prototype.Main = function () {
            this.addChild(this.startLabel);
            this.addChild(this.startButton);
            this.startButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });
            // this.addChild(this.player);
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map