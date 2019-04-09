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

// dfs + backtracking

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  // dfs

  let result = []
  let tmp = []
  let len = nums.length

  function dfs(candidates) {
    // 终止条件
    if(candidates.length === 0) {
      result.push(tmp.slice())
      return
    }

    for(let i = 0; i < candidates.length; i++) {
      tmp.push(candidates[i])
      let newCandidates = candidates.slice()
      newCandidates.splice(i, 1)
      dfs(newCandidates)
      tmp.pop()
    }
  }

  dfs(nums.slice())

  return result
};