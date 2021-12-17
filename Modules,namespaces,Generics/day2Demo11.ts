//stacks in typescript
// named export should be imported in curly braces
// default export should be imported without curly braces and default exports need not be to imported with same class name 
//for example 'import  customStack  from "./day2Demo11";'  will still work same as 'import  MyStack  from "./day2Demo11";'
export class MyStack<T>{
   private data:T[]=[];

   push (value:T):void{
       this.data.push(value);
   }

   pop(): T | undefined{
       return this.data.pop();
   }

   getAllItem():T[]{
       return this.data;
   }
}

export default MyStack;