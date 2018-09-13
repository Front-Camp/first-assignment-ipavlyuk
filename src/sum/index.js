/**
* This function should return sum of two numbers
*
* @param {number} a - this is a number value
* @param {number} b - this is a number value
* @return {number} result of the sum values
* @example
* sum(1, 2);   // 3
* sum(0, 5);   // 5
* sum(-1, 13); // 12
*/
const sum = (a, b) => {
   let arr = [a, b];
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i]) || arr[i] === Infinity || arr[i] === -Infinity || typeof arr[i] !== 'number') {
        throw new TypeError('Error!');
    }
  }
  return a + b;
};

export default sum;
