// 1. simple declaration

var x; // the object scope [Global Scoped for current file] declaration

x = 10; // runtime parsed to numeric
console.log('x = ' + x);

// 2. close function
function print() {
    var x = 20; // function scope declaration
    console.log('x inside function = ' + x);
    if (true) {
        x = 2;
        console.log("Inside if x = " + x);
    }
    x++; // increment
    console.log('x = ' + x);
}
print();
console.log('x outside function = ' + x);