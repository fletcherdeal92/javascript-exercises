const removeFromArray = function(array, ...args) {
    if (!Array.isArray(array)) {
        console.log(`This isn't an array Error.`)
    } else; 

    return array.filter(x => !args.includes(x))
    
    
   


};

let arrayNum = [1, 2, 3, 4, 5];
let arrayStr = ['a', 'b', 'c', 'd', 'e', 'f', 'apfels'];
//removeFromArray('hello', 5);
//removeFromArray(arrayNum, 3)
removeFromArray(arrayStr, 'f');

// Do not edit below this line
module.exports = removeFromArray;
