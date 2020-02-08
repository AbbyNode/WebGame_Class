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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        function Play() {
            var _this = _super.call(this) || this;
            // this.startLabel = new objects.Label();
            // this.startButton = new objects.Button();
            _this.player = new objects.Player();
            return _this;
        }
        Play.prototype.Start = function () {
            // this.startLabel = new objects.Label("The Game", "40px", "Consolas", "#000000", 320, 240, true);
            // this.startButton = new objects.Button("./Assets/images/startButton.png", 350, 300, true);
            this.player = new objects.Player();
            this.Main();
        };
        Play.prototype.Update = function () {
            this.player.update();
            // managers.Collision.squaredRadiusCheck(player, startButton);
            // managers.Collision.AABBCheck(this.player, this.startButton);
        };
        Play.prototype.Main = function () {
            // this.addChild(this.startLabel);
            // this.addChild(this.startButton);
            // this.startButton.on("click", function () {
            //     config.Game.SCENE_STATE = scenes.State.PLAY;
            // });
            this.addChild(this.player);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map