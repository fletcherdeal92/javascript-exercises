const repeatString = function(input, repetitions) {
    if (repetitions < 0) {
        return "ERROR"
    }
    
    let string = '';
    for (i = 0; i < repetitions; i++) {
        string += input;
    }
    console.log(string);
    return string
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
