"use strict";
exports.__esModule = true;
exports.Employee = exports.getData = exports.age = void 0;
exports.age = 20;
function getData() {
    return "Hello World";
}
exports.getData = getData;
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        if (name === void 0) { name = ""; }
        if (code === void 0) { code = 0; }
        this.empName = name;
        this.empCode = code;
    }
    Employee.prototype.displayEmployee = function () {
        console.log("Employee Code: " + this.empCode + ", Employee Name: " + this.empName);
    };
    return Employee;
}());
exports.Employee = Employee;
var companyName = "XYZ";
