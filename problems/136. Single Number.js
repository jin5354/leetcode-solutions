// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

// Hash Table
// Time complexity : O(n). Time complexity of for loop is O(n). Time complexity of hash table(dictionary in python) operation pop is O(1).
// Space complexity : O(n). The space required by hash\_tablehash_table is equal to the number of elements in \text{nums}nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = {}
  nums.forEach(e => {
    if(!map[e]) {
      map[e] = true
    }else {
      delete map[e]
    }
  })
  return Number(Object.keys(map)[0])
};

// Bit Manipulation
// Concept

// If we take XOR of zero and some bit, it will return that bit
// a ⊕ 0 = a
// If we take XOR of two same bits, it will return 0
// a ⊕ a = 0
// a ⊕ b ⊕ a = (a ⊕ a) ⊕ b = 0 ⊕ b = b
// So we can XOR all bits together to find the unique number.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.reduce((a, b) => a ^ b)
};