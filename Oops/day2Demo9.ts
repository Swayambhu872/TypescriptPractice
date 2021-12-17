//Interfaces in typescript
interface Iperson{
   fname:string;
   lname:string;
   age:number; 

   showDetails();
}

class Employee implements Iperson{
    fname: string="Sam";
    lname: string="Smith";
    age: number=55;
    showDetails():void {
        let str = `Employee details: First name : ${this.fname} , Last name : ${this.lname} , Age : ${this.age}`
      // console.log("First name :"+this.fname);
       //console.log("Last name :"+this.lname);
       //console.log("Age :"+this.age);
       console.log(str);
    }
    
}

let e1:Iperson= new Employee();

e1.showDetails();
