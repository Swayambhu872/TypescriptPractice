//Overloading in typescript
//number of parameters should be same parameter type can differ 
// we can declare the methods and put a common implementation
var OverloadTest = /** @class */ (function () {
    function OverloadTest() {
    }
    OverloadTest.prototype.Add = function (x, y) {
        console.log(x + y);
    };
    return OverloadTest;
}());
var obj = new OverloadTest();
obj.Add(200, 300);
obj.Add("Hello", "World");
