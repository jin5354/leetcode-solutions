// Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

// Example:

// Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
// Output: [3,3,5,5,6,7]
// Explanation:

// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Note:
// You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty array.

// Follow up:
// Could you solve it in linear time?


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if(!nums.length) {
    return []
  }
  let result = []
  let queue = []
  for(let i = 0, len = nums.length; i < len; i++) {
    while(queue.length && queue[0] < i - k + 1) {
      queue.shift()
    }
    while(queue.length && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop()
    }
    queue.push(i)
    if(i >= k - 1) {
      result.push(nums[queue[0]])
    }
  }
  return result
};