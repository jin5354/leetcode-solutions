// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Note:

// The solution set must not contain duplicate quadruplets.

// Example:

// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

// k sum O(n^(k - 1))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  function ksum(sums, k, target) {
    if(sums.length < k) {
      return []
    }
    let result = []
    sums.sort((a, b) => a - b)

    if(k > 2) {
      for(let i = 0, len = sums.length; i < len - k + 1; i++) {
        if(sums[i] === sums[i-1]) continue
        let subResult = ksum(sums.slice(i + 1, len), k - 1, target - sums[i])
        subResult.forEach(sub => {
          result.push([sums[i]].concat(sub))
        })
      }
    }

    if(k === 2) {
      let head = 0
      let tail = sums.length - 1
      while(head < tail) {
        if(sums[head] === sums[head - 1]) {
          head++
          continue
        }
        if(sums[tail] === sums[tail + 1]) {
          tail--
          continue
        }
        if(sums[head] + sums[tail] > target) {
          tail--
        }else if(sums[head] + sums[tail] < target) {
          head++
        }else {
          result.push([sums[head], sums[tail]])
          head++
        }
      }
    }

    return result
  }

  return ksum(nums, 4, target)
};