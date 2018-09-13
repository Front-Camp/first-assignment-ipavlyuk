/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([5, 9, 3], 12); // [9, 3]
 */
const twoSums = (arr, base) => {
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

export default twoSums;
