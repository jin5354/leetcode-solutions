// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

// https://leetcode.com/problems/subsets/discuss/122645/3ms-easiest-solution-no-backtracking-no-bit-manipulation-no-dfs-no-bullshit

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let len = nums.length

  function _getSubsets(a, candidates) {
    if(!candidates.length) {
      if(a !== undefined) {
        return [[a]]
      }else {
        return []
      }
    }else {
      let result = _getSubsets(candidates.shift(), candidates)
      for(let i = 0, len = result.length; i < len; i++) {
        let tmp = result[i].slice()
        tmp.push(a)
        result.push(tmp)
      }
      result.push([a])
      return result
    }
  }

  return _getSubsets(nums.shift(), nums).concat([[]])
};