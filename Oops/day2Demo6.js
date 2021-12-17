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
//Inheritance in TypeScript
var Person = /** @class */ (function () {
    function Person() {
        this.name = "Scott";
        this.age = 20;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(empno) {
        var _this = _super.call(this) || this;
        _this.empno = 6566;
        _this.job = "Lead";
        _this.empno = empno;
        return _this;
    }
    Employee.prototype.showDetails = function () {
        console.log("Employee number :" + this.empno);
        console.log("Employee designation :" + this.job);
        console.log("Employee name :" + this.name);
        console.log("Employee age :" + this.age);
    };
    return Employee;
}(Person));
var e1 = new Employee(66);
e1.showDetails();
