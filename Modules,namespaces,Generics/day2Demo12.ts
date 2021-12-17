import  MyStack  from "./day2Demo11";
import Employee, {Dept} from "./day2Demo13";

let stackObj:MyStack<number>= new MyStack<number>();

stackObj.push(5);
stackObj.push(6);
stackObj.push(7);
stackObj.push(8);
stackObj.push(9);

console.log(stackObj.getAllItem());