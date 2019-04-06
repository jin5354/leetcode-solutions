// https://leetcode.com/problems/sqrtx/

// Implement int sqrt(int x).

// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

// Example 1:

// Input: 4
// Output: 2
// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since
//              the decimal part is truncated, 2 is returned.

// binary search
// O(logn)

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // 二分查找 O(logn)

  // 上下界
  let min = 0
  let max = x
  let mid

  while(mid === null || mid*mid !== x) {
    mid = Math.floor((min + max) / 2)
    if(mid * mid > x) {
      max = mid
    }else if(min === mid){
     if(x === 1) return 1
      break
    }else {
      min = mid
    }
  }

  return mid
};