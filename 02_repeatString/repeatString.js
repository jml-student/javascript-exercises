const repeatString = function(string, number) {
    if (number < 0) return "ERROR";
    let repeatedWord = "";
    for (i = 0; i < number; i++) {
        repeatedWord += string;
    }
    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
