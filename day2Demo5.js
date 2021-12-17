class Product {
    constructor(productId) {
        this.productId = 0;
        this.productName = "";
        this.unitPrice = 0;
        this.productId = productId;
    }
    set ProductName(value) {
        this.productName = value;
    }
    get ProductName() {
        return this.productName;
    }
    set UnitPrice(value) {
        this.unitPrice = value;
    }
    get UnitPrice() {
        return this.unitPrice;
    }
    get ProductId() {
        return this.productId;
    }
}
let p1 = new Product(0);
let p2 = new Product(1);
p1.ProductName = "Test Product";
p1.UnitPrice = 5;
p2.ProductName = "Another test product";
p2.UnitPrice = 7;
console.log(`ProductId: ${p1.ProductId}`);
console.log(`ProductName: ${p1.ProductName}`);
console.log(`UnitPrice: ${p1.UnitPrice}`);
console.log(`ProductId: ${p2.ProductId}`);
console.log(`ProductName: ${p2.ProductName}`);
console.log(`UnitPrice: ${p2.UnitPrice}`);
