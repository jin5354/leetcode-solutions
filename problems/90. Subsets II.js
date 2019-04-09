// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: [1,2,2]
// Output:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]

// dp + backtracking

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  // 通过排序去重
  nums.sort((a,b) => (a - b))

  let result = []
  let tmp = []
  let len = nums.length

  // edge case
  if(len === 0) {
    return []
  }

  // dfs

  function dfs(start) {
    // 先记录当前结果
    result.push(tmp.slice())

    // 终止条件
    if(start >= len) {
      return
    }

    // 下一层
    for(let i = start; i < len; i++) {
      if(i > start && nums[i] === nums[i - 1]) continue
      tmp.push(nums[i])
      dfs(i + 1)
      // backtracking
      tmp.pop()
    }
  }

  dfs(0)

  return result
};