const sumAll = function(int1, int2) {
    if (int1 > 0 && int2 > 0 && Number.isInteger(int1) && Number.isInteger(int2)) {

        let array = [];
        let sum;
        if (int2 < int1) {
            for (i = int2; i <= int1; i++) {
                array.push(i);
            }
            sum = array.reduce((partialSum, x) => partialSum + x, 0);
            console.log(sum);
        } else {
            for (i = int1; i <= int2; i++) {
                array.push(i)
            }
            sum = array.reduce((partialSum, x) => partialSum + x, 0);
            console.log(sum);
        }
    
        return sum
    } else {
        console.log('ERROR');
        return 'ERROR'
    }



};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
