//Overloading in typescript
//number of parameters should be same parameter type can differ 
// we can declare the methods and put a common implementation
class OverloadTest{
    public Add(x:number, y:number):void;
    public Add(x:string, y:string):void;

    public Add(x:any, y:any):void{
        console.log(x+y);
    }
}

let obj:OverloadTest= new OverloadTest();
obj.Add(200,300);
obj.Add("Hello", "World");