// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Note: The algorithm should run in linear time and in O(1) space.

// Example 1:

// Input: [3,2,3]
// Output: [3]
// Example 2:

// Input: [1,1,1,3,3,2,2,2]
// Output: [1,2]

// 求众数 / 求大于 1/3 的元素
// 摩尔投票法（抵消法），存储两个候选者，每3个不同元素抵消一次，最后剩下两个，再做一次check

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let count1 = 0
  let count2 = 0
  let result1 = null
  let result2 = null
  let result = []

  // 摩尔投票法
  for(let i = 0, len = nums.length; i < len; i++) {
    // 若新的值与候选者相同，count++ 注意 [2,2] 这种情况，先判断元素是否相同，再判断是否有空位
    if(nums[i] === result1) {
      count1++
      continue
    }else if(nums[i] === result2) {
      count2++
      continue
    }
    // 若新值与候选者不同，若两个候选者有空，先填充
    if(count1 === 0) {
      result1 = nums[i]
      count1++
      continue
    }
    if(count2 === 0) {
      result2 = nums[i]
      count2++
      continue
    }
    // 否则，抵消
    count1--
    count2--
  }

  // 验证，存在结果小于 1/3 的可能性，如 [3,2,3]，两个结果为 3 和 2，2 不符合
  let check1 = 0
  let check2 = 0
  for(let i = 0, len = nums.length; i < len; i++) {
    if(nums[i] === result1) check1++
    if(nums[i] === result2) check2++
  }
  if(check1 > nums.length / 3) result.push(result1)
  if(check2 > nums.length / 3) result.push(result2)

  return result
};