// 1. close function, has it own body and 
// it returns the JSON schema object as singleton
// note: everything within return block is public
// else private
function Operation() {
    return {
        getLength: function (str) {
            return str.length;
        },
        changeCase: function (str, choice) {
            if (choice == "U") {
                return str.toUpperCase();
            }
            if (choice == "L") {
                return str.toLowerCase();
            }
        }
    };
}

let opObj = new Operation();
let str = "ES 6 is great language";
console.log('Length of ' + opObj.getLength(str));
console.log('Upper case ' + opObj.changeCase(str, 'U'));
console.log('Lower case ' + opObj.changeCase(str, 'L'));