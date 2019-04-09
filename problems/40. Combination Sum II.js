// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// Each number in candidates may only be used once in the combination.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5,
// A solution set is:
// [
//   [1,2,2],
//   [5]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  // 排序去重
  // 去重考量：
  // 如果要求结果是无序的，如 1,2,5 和 1,5,2 要去重
  // 需要排序+选候选人时，从小向大选（使用 start 变量控制）
  // 如果候选人数组有重复值
  // 在迭代候选人数组时注意使用 continue 去重（一次挑一个候选人）

  candidates.sort((a, b) => (a - b))

  // dfs + backtracking

  let result = []
  let tmp = []

  function dfs(candidates, sum, start) {
    // 终止条件
    if(sum === target) {
      result.push(tmp.slice())
      return
    }

    for(let i = start, len = candidates.length; i < len; i++) {
      // 去重
      if(i > start && candidates[i] === candidates[i - 1]) continue
      if(sum + candidates[i] <= target) {
        tmp.push(candidates[i])
        let newCandidates = candidates.slice()
        newCandidates.splice(i, 1)
        dfs(newCandidates, sum + candidates[i], i)
        // backtracking
        tmp.pop()
      }
    }
  }

  dfs(candidates.slice(), 0, 0)

  return result
};