var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(carcolor) {
        this.color = carcolor;
    }
    return Car;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(color, price) {
        var _this = _super.call(this, color) || this;
        _this.price = price;
        return _this;
    }
    Audi.prototype.display = function () {
        console.log("Color of Audi Car: " + this.color);
        console.log("Price of Audi Car: " + this.price);
    };
    return Audi;
}(Car));
var obj = new Audi("Black", 100000000);
obj.display();
