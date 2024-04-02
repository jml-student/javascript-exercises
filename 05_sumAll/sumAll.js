const sumAll = function(firstInt, secondInt) {
    if (firstInt < 0 || secondInt < 0) return "ERROR";

    if (!Number.isInteger(firstInt) || !Number.isInteger(secondInt)) return "ERROR";
    
    if (firstInt > secondInt) {
        const temp = secondInt;
        secondInt = firstInt;
        firstInt = temp;
    }
    
    let sum = 0;

    for (let i = firstInt; i <= secondInt; i++) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
