/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
  let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        let result = a.flags;
        for (let j = 0; j < result.length; j++) {
            newArr.push(result[j])
        }
    }
    return newArr;
};

export default getFlags;
