// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]
// Example 2:

// Input: candidates = [2,3,5], target = 8,
// A solution set is:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]

// dfs + backtracking 进阶版就是找零钱dp
// https://leetcode.com/problems/coin-change/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  // 排序去重：每次取candidate时，必须取越来越大的（大于等于当前）
  // 保证只出现 2,2,3 不出现 2,3,2 的情况

  candidates.sort((a,b) => (a - b))

  // dfs + backtracking

  let result = []
  let tmp = []
  let len = candidates.length

  function dfs(sum, start) {
    // 终结条件
    if(sum === target) {
      result.push(tmp.slice())
      return
    }

    for(let i = start; i < len; i++) {
      if(sum + candidates[i] <= target) {
        tmp.push(candidates[i])
        dfs(sum + candidates[i], i)
        tmp.pop()
      }
    }
  }

  dfs(0, 0)

  return result
};