const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    }

    const fibonacci = [0, 1];

    for (i=0; i<number; i++) {
        fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]);
    }
    
    return fibonacci[fibonacci.length - 2];
};

// Do not edit below this line
module.exports = fibonacci;
