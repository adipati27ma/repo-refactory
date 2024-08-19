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
// console.log(shortCircle.drawShape());
// console.log(someOval.drawShape());
// console.log(someOval.drawShapes('EXCHANGE'));
// kelas product (nama, harga, stock) => purchase_quantity berdasarkan stock
// parent payment ()
var Product = /** @class */ (function () {
    function Product(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    // docs: getter setter Price
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    // docs: getter setter Stock
    Product.prototype.getStock = function () {
        return this.stock;
    };
    Product.prototype.setStock = function (stock) {
        this.stock = stock;
    };
    Product.prototype.purchaseQuantity = function (quantity) {
        this.stock - quantity;
        var totalPrice = quantity * this.price;
        return totalPrice;
    };
    return Product;
}());
var productA = new Product('Product A', 1000, 10);
console.log('total harga harus dibayar:', productA.purchaseQuantity(2));
// Polymorphism
// Buatlah sebuah kelas parent PaymentMethod dengan metode processPayment(amount) yang akan di-override oleh subclass.
// Buatlah tiga subclass CreditCard, PayPal, dan BankTransfer ya
var PaymentMethod = /** @class */ (function () {
    function PaymentMethod() {
    }
    PaymentMethod.prototype.processPayment = function (amount) { };
    return PaymentMethod;
}());
var CreditCard = /** @class */ (function (_super) {
    __extends(CreditCard, _super);
    function CreditCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreditCard.prototype.processPayment = function (amount) {
        return "Processing payment for amount: ".concat(amount, " using Credit Card");
    };
    return CreditCard;
}(PaymentMethod));
var PayPal = /** @class */ (function (_super) {
    __extends(PayPal, _super);
    function PayPal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayPal.prototype.processPayment = function (amount) {
        return "Processing payment for amount: ".concat(amount, " using PAYPAL");
    };
    return PayPal;
}(PaymentMethod));
var BankTransfer = /** @class */ (function (_super) {
    __extends(BankTransfer, _super);
    function BankTransfer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BankTransfer.prototype.processPayment = function (amount) {
        return "Processing payment for amount: ".concat(amount, " using Bank Mandiri");
    };
    return BankTransfer;
}(PaymentMethod));
var creditA = new CreditCard();
var paypalA = new PayPal();
var bankMandiri = new BankTransfer();
console.log(creditA.processPayment(1000));
console.log(paypalA.processPayment(1000));
console.log(bankMandiri.processPayment(1000));
