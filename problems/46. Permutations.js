// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

// backtracking

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = []

  function _walk(exists, rest) {
    if(!rest.length) {
      result.push(exists)
      return
    }
    rest.forEach((e, i) => {
      let t = rest.slice()
      t.splice(i, 1)
      _walk(exists.concat(e), t)
    })
  }

  if(nums.length) {
    _walk([], nums)
  }
  return result
};