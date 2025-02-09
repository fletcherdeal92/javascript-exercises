const reverseString = function(input) {
    // take the string and make it an array
    let string = '';
    let letters = [];
    for (i = 0; i < input.length; i++) {
        letters.push(input[i]);
    }
    //console.log(letters);

    // reverse the array
    letters.reverse();
    //console.log(letters);

    // join the array back into a string
    for (i = 0; i < letters.length; i++) {
        string += letters[i];
    }
    console.log(string);
    return string;
};

reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;
