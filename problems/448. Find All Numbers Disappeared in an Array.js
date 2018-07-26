// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let result = []
  for(let i = 0 , len = nums.length; i < len; i++) {
  	while(nums[i] !== i + 1) {
    	if(nums[i] === nums[nums[i] - 1]) {
      	break
      }else {
        let tmp = nums[nums[i] - 1]
        nums[nums[i] - 1]  = nums[i]
        nums[i] = tmp
      }
    }
  }
  nums.forEach((e, i) => {
  	if(e !== i + 1) {
    	result.push(i + 1)
    }
  })
  return result
};