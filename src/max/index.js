/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  let newArr = [];
    for (let j = 0; j < arr.length; j++) {
        if (isNaN(arr[j]) || arr[j] === Infinity || arr[j] === -Infinity) {
            continue;
        } else {
            newArr.push(arr[j]);
        }
    }
    let maxNumber = newArr[0];
      for (let i = 0; i < newArr.length; i++) {
          if (newArr[i] > maxNumber) {
              maxNumber = newArr[i];
          }
      } 
      return maxNumber;
};

export default max;
