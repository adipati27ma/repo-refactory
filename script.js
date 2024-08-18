var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(name) {
        this.name = name;
    }
    Shape.prototype.drawShape = function () { };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(name, radius) {
        var _this = _super.call(this, name) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.drawShape = function () {
        return "Drawing a circle with radius: ".concat(this.radius);
    };
    return Circle;
}(Shape));
var Oval = /** @class */ (function (_super) {
    __extends(Oval, _super);
    function Oval(name, radius) {
        return _super.call(this, name, radius) || this;
    }
    Oval.prototype.drawShape = function () {
        return "Drawing an oval with some calculation for radius: ".concat(this.radius);
    };
    Oval.prototype.drawShapes = function (method) {
        return "Drawing an oval with some calculation ".concat(method, " method for radius: ").concat(this.radius);
    };
    return Oval;
}(Circle));
// const myShape = new Shape('My shape'); // This will throw an Error
var shortCircle = new Circle('Short Circle', 0.5); // This will work fine.
var someOval = new Oval('Short Circle', 1); // This will work fine.
console.log(shortCircle.drawShape());
console.log(someOval.drawShape());
console.log(someOval.drawShapes('EXCHANGE'));
