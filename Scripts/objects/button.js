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
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button(imgPath, x, y, isCentered) {
            var _this = _super.call(this, imgPath) || this;
            _this.x = x;
            _this.y = y;
            if (isCentered) {
                // this.regX = this.getBounds().width * 0.5;
                // this.regY = this.getBounds().height * 0.5;
            }
            _this.on("mouseover", _this.mouseover);
            _this.on("mouseout", _this.mouseout);
            return _this;
        }
        // method
        Button.prototype.mouseover = function () {
            this.alpha = 0.7;
        };
        Button.prototype.mouseout = function () {
            this.alpha = 1;
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map