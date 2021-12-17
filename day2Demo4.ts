class Customer{
    custid:number=0;
    custName:string="";
    custLocation:string="";

    constructor(custid:number=0,custName:string="",custLocation:string=""){
        this.custid=custid;
        this.custName=custName;
        this.custLocation=custLocation;

    }

    public showDetails():void{
        console.log(this.custid);
        console.log(this.custName);
        console.log(this.custLocation);

    }
}

let c1:Customer = new Customer();

let c2:Customer = new Customer(10256);

let c3:Customer = new Customer(10256, "Scott");

let c4:Customer = new Customer(10256, "Scott", "Hyd");

c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();