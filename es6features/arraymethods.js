let numberArray = [10, 20, 30, 40];
// es3 for loop
for (let i = 0; i < numberArray.length; i++) {
    console.log(numberArray[i]);
}
console.log();
// single data push
numberArray.push(50);
// an array push
numberArray.push([60, 70, 80]);
// es3 to es5 iteration
for (let i in numberArray) {
    console.log(numberArray[i]);
}
console.log();
console.log();

// es 6 for..of loop with Symbol.iterator
// for..of is same as foreach
for (let n of numberArray) {
    console.log(n);
}

var Emps = [{
    EmpNo: 101,
    EmpName: "A"
}, {
    EmpNo: 102,
    EmpName: "B"
}, {
    EmpNo: 103,
    EmpName: "C"
}, {
    EmpNo: 104,
    EmpName: "D"
}];
for (let e of Emps) {
    console.log(`EmpNo ${e.EmpNo} EmpName ${e.EmpName}`);
}