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
   let newArr = [];
    let sum = 0;
    for (let i = 0, b = 1 ; i < arr.length; i++, b++) {
        newArr.push(arr[i]);
        sum += arr[i];
        if ( b === 2 ) {
            if (sum === base) {
                return newArr;
            } else {
                b = 1;
                newArr = [];
                i = 1;
            }
        }
    }
};

export default sum;
