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
var object;
(function (object) {
    var Ocean = /** @class */ (function (_super) {
        __extends(Ocean, _super);
        function Ocean() {
            return _super.call(this, "./Assets/images/ocean.gif") || this;
        }
        Ocean.prototype._checkBounds = function () {
        };
        Ocean.prototype._move = function () {
        };
        Ocean.prototype.Start = function () {
        };
        Ocean.prototype.Update = function () {
        };
        Ocean.prototype.Reset = function () {
        };
        return Ocean;
    }(objects.GameObject));
    object.Ocean = Ocean;
})(object || (object = {}));
//# sourceMappingURL=Ocean.js.map