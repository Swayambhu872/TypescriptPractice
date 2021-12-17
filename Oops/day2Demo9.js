var Employee = /** @class */ (function () {
    function Employee() {
        this.fname = "Sam";
        this.lname = "Smith";
        this.age = 55;
    }
    Employee.prototype.showDetails = function () {
        var str = "Employee details: First name : ".concat(this.fname, " , Last name : ").concat(this.lname, " , Age : ").concat(this.age);
        // console.log("First name :"+this.fname);
        //console.log("Last name :"+this.lname);
        //console.log("Age :"+this.age);
        console.log(str);
    };
    return Employee;
}());
var e1 = new Employee();
e1.showDetails();
