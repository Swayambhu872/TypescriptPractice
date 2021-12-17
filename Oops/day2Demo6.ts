//Inheritance in TypeScript
class Person{
    public name:string="Scott";
    public age:number=20;

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
        console.log("Employee name :"+this.name);
        console.log("Employee age :"+this.age);

    }
}

let e1:Employee = new Employee(66);

e1.showDetails();