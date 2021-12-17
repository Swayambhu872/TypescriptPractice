var Customer = /** @class */ (function () {
    function Customer(custid, custName, custLocation) {
        if (custid === void 0) { custid = 0; }
        if (custName === void 0) { custName = ""; }
        if (custLocation === void 0) { custLocation = ""; }
        this.custid = 0;
        this.custName = "";
        this.custLocation = "";
        this.custid = custid;
        this.custName = custName;
        this.custLocation = custLocation;
    }
    Customer.prototype.showDetails = function () {
        console.log(this.custid);
        console.log(this.custName);
        console.log(this.custLocation);
    };
    return Customer;
}());
var c1 = new Customer();
var c2 = new Customer(10256);
var c3 = new Customer(10256, "Scott");
var c4 = new Customer(10256, "Scott", "Hyd");
c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();
