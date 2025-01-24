const add = function(num1, num2) {
	return (num1 + num2);
};

const subtract = function(num1, num2) {
  return (num1 - num2);
};

const sum = function(arr) {
	return arr.reduce((accumulator, current) => accumulator + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, current) => accumulator * current);
};

const power = function(num1, num2) {
	return(num1 ** num2);
};

const factorial = function(num) {
  let result = 1;
	for(let current=1 ; current <= num ; current++){
    result *= current;
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
