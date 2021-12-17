class Product{
    private productId:number=0;
    private productName:string="";
    private unitPrice:number=0;

    constructor(productId:number){
        this.productId= productId;
    }

    public set ProductName(value:string){
        this.productName= value;
    }

    public get ProductName():string{
        return this.productName;
    }

    public set UnitPrice(value:number){
        this.unitPrice= value;
    }

    public get UnitPrice():number{
        return this.unitPrice;
    }

    public get ProductId():number{
        return this.productId;
    }

}

let p1:Product= new Product(0);
let p2:Product= new Product(1);
p1.ProductName="Test Product"
p1.UnitPrice=5;

p2.ProductName="Another test product";

p2.UnitPrice=7;

console.log(`ProductId: ${p1.ProductId}`);
console.log(`ProductName: ${p1.ProductName}`);
console.log(`UnitPrice: ${p1.UnitPrice}`);

console.log(`ProductId: ${p2.ProductId}`);
console.log(`ProductName: ${p2.ProductName}`);
console.log(`UnitPrice: ${p2.UnitPrice}`);
