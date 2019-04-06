// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

// Example 1:

// Input: 2
// Output: [0,1,1]
// Example 2:

// Input: 5
// Output: [0,1,1,2,1,2]
// Follow up:

// It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
// Space complexity should be O(n).
// Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.

// dp, O(n)

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {

  // bit operation + dp
  // 001 = 1
  // 010 = (010 >> 1)(即01) + (010 & 1)(判断最后一位是否是1)(判奇偶)
  // 100 = (100 >> 1)(即10) + (100 & 1)

  let result = [0]
  for(let i = 0; i <= num; i++) {
    result[i] = result[i >> 1] + (i & 1)
  }
  return result
};