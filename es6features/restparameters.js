function calculate(...data) {
    let sum = 0;
    if (data.length === 0) {
        return sum;
    } else {
        data.forEach((v, i) => {
            sum += v;
        });
    }
    return sum;
}
console.log(`2 arguments ${calculate(1,2)}`);
console.log(`3 arguments ${calculate(1,2,3)}`);
console.log(`4 arguments ${calculate(1,2,3,4)}`);
console.log(`5 arguments ${calculate(1,2,3,4,5)}`);