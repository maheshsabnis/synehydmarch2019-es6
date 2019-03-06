var str = "Mahesh";
console.log(typeof (str));
console.log();

str = "123Mahesh";
console.log(typeof (str));
var n = parseInt(str);
console.log(typeof (n) + '  ' + n);
console.log();

str = "10.2Mahesh";
console.log(typeof (str));
var n1 = parseFloat(str);
console.log(typeof (n1) + '  ' + n1);

console.log();

str = "Mahesh123";
console.log(typeof (str));
var n2 = parseInt(str);
console.log(typeof (n2) + '  ' + n2);

var n3 = 3;
var n4 = 1.5;

var res = n3 / n4;
console.log(res);