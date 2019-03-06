class BasicMath {
    // a and b are ctor parameters
    // x and y are public members of class
    constructor(a, b) {
        this.x = a;
        this.y = b;
    }
    // methods are public by default
    add() {
        return this.x + this.y;
    }
    mult() {
        return this.x * this.y;
    }
    div() {
        return this.x / this.y;
    }
}
let mObj = new BasicMath(10, 20);
console.log(`add = ${mObj.add()}`);
console.log(`mult = ${mObj.mult()}`);
console.log(`div = ${mObj.div()}`);