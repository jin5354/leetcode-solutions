// Given a collection of numbers that might contain duplicates, return all possible unique permutations.

// Example:

// Input: [1,1,2]
// Output:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]

// dfs + backtracking

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  // 先排序，用来去重
  nums.sort((a,b) => (a - b))

  // dfs + backtracking

  let result = []
  let tmp = []

  // edge case
  if(nums.length === 0) {
    return []
  }

  function dfs(candidates) {
    // 终止条件
    if(candidates.length === 0) {
      result.push(tmp.slice())
      return
    }

    for(let i = 0, len = candidates.length; i < len; i++) {
      //unique
      if(i > 0 && candidates[i] === candidates[i - 1]) continue
      tmp.push(candidates[i])
      let newCandidates = candidates.slice()
      newCandidates.splice(i, 1)
      dfs(newCandidates)
      // backtracking
      tmp.pop()
    }
  }

  dfs(nums.slice())

  return result
};