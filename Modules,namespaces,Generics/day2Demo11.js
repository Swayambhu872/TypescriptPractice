"use strict";
exports.__esModule = true;
exports.MyStack = void 0;
//stacks in typescript
// named export should be imported in curly braces
// default export should be imported without curly braces
var MyStack = /** @class */ (function () {
    function MyStack() {
        this.data = [];
    }
    MyStack.prototype.push = function (value) {
        this.data.push(value);
    };
    MyStack.prototype.pop = function () {
        return this.data.pop();
    };
    MyStack.prototype.getAllItem = function () {
        return this.data;
    };
    return MyStack;
}());
exports.MyStack = MyStack;
exports["default"] = MyStack;
