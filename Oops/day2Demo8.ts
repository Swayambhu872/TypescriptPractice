//Overridding in TypeScript
class Person{
    public name:string="Scott";
    public age:number=20;

    public showDetails():void{
       
        console.log("Employee name :"+this.name);
        console.log("Employee age :"+this.age);

    }

}


class Employee extends Person{
    public empno:number=6566;
    public job:string="Lead";

    constructor(empno:number){
        super();
        this.empno=empno;
    }
    public showDetails():void{
        console.log("Employee number :"+this.empno);
        console.log("Employee designation :"+this.job);
        //to call the parent class method
        super.showDetails();

    }
 }
// reference of parent class and object of child class
let e1:Person = new Employee(66);

// reference of child class and object of child class
let e2:Employee = new Employee(676);

e1.showDetails();
e2.showDetails();