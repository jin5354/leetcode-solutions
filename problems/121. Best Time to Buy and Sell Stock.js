// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

// One Pass
// Time complexity : O(n). Only a single pass is needed.

// Space complexity : O(1). Only two variables are used.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // dp
  // 用一个状态数组存储第i天的最大获利
  // 状态转移方程：max[i] = Math.max(0, max[i-1] + prices[i] - prices[i - 1])
  let max = [0]

  for(let i = 1, len = prices.length; i < len; i++) {
    let cur = max[i - 1] + (prices[i] - prices[i - 1])
    max[i] = Math.max(0, cur)
  }

  return Math.max.apply(undefined, max)
};

// O(n)

// var maxProfit = function(prices) {
//   let min = 0
//   let result = 0
//   for(let i = 0, len = prices.length; i < len; i++) {
//     if(i === 0) {
//       min = prices[i]
//       continue
//     }
//     if(prices[i] >= min) {
//       result = Math.max(prices[i] - min, result)
//     }else {
//       min = prices[i]
//     }
//   }

//   return result
// };