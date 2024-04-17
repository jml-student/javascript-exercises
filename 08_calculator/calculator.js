const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, num) => sum + num, 0);
};

const multiply = function(array) {
  return array.reduce((sum, num) => sum * num);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
	let result = 1;
  for (i=a; i>1; i--) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
