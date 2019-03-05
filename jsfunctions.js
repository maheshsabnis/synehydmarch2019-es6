// 1. reference function
// stores the function body in a variable
// this variable will be used as class/object
// all declaration prefixed using 'this' are
// public by default, else they will be private
var myObject = function () {
    this.fn1 = function () {
        console.log('fn1');
        print();
    };
    this.add = function (x, y) {
        print();
        return x + y;
    };

    function print() {
        console.log('print function');
    }
};
// storing the reference of myObject() in obj
// obj acts as a "this" scope instance for myObject()
// use the 'prototype' object to define extensibility 
// for obj and hence for myObject aka extension functions
let obj = new myObject();
obj.fn1();
console.log('add = ' + obj.add(3, 4));

myObject.prototype.sub = function (x, y) {
    return x - y;
};
console.log('sub = ' + obj.sub(4, 3));

var myClass = function () {};
myClass.prototype.fn1 = function () {};
myClass.prototype.fn2 = function () {};

var cObj = new myClass();