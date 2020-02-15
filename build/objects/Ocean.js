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
var objects;
(function (objects) {
    var Ocean = /** @class */ (function (_super) {
        __extends(Ocean, _super);
        function Ocean() {
            var _this = _super.call(this, "./Assets/images/ocean.gif") || this;
            _this.Start();
            return _this;
        }
        Ocean.prototype._checkBounds = function () {
            if (this.position.y >= 0) {
                this.Reset();
            }
        };
        Ocean.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        Ocean.prototype.Start = function () {
            this._verticalSpeed = 5;
            this.velocity = new objects.Vector2(0, 0);
        };
        Ocean.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Ocean.prototype.Reset = function () {
            this.position.y = -960;
        };
        return Ocean;
    }(objects.GameObject));
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=Ocean.js.map