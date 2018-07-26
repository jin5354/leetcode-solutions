// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.

// ^ xor 按位异或
// toString(2) 转换二进制

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  return (x ^ y).toString(2).replace(/0/g, '').length;
};


// old

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let result = 0
  while(x || y) {
    if(x % 2 !== y % 2) {
      result++
    }
    x = Math.floor(x/2)
    y = Math.floor(y/2)
  }
  return result
};