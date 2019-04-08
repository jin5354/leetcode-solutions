// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete at most two transactions.

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: [3,3,5,0,0,3,1,4]
// Output: 6
// Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
//              Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
// Example 2:

// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

// dp

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var maxProfitK = function(k, prices) {
    // dp
    // O(kn)
    // https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/discuss/39608/A-clean-DP-solution-which-generalizes-to-k-transactions

    let result = 0
    let len = prices.length

    // optimize
    // 当 k >= len 时，优化为无限次问题
    if(k >= len) {
      for(let i = 1; i < len; i++) {
        if(prices[i] > prices[i - 1]) {
          result += (prices[i] - prices[i - 1])
        }
      }
      return result
    }

    // init
    // dp[0][i] = 0
    // dp[k][0] = 0
    let max = []
    max[0] = new Array(len).fill(0)
    for(let i = 1; i <= k; i++) {
      max[i] = [0]
    }

    // 状态转移方程
    // dp[k][i] = Math.max(dp[k][i-1], prices(i) - prices(j) + dp[k-1][j-1]) (j >= 0 && j < i )
    //          = Math.max(dp[k][i-1], prices(i) + dp[k-1][j-1] - prices(j))
    // let tmp = max(dp[k-1][j-1] - prices(j)), when iteration

    for(let kk = 1; kk <= k; kk++) {
      let tmp = 0 - prices[0]
      for(let i = 1; i < len; i++) {
        max[kk][i] = Math.max(max[kk][i - 1], prices[i] + tmp)
        tmp = Math.max(tmp, max[kk - 1][i - 1] - prices[i])
        result = Math.max(result, max[kk][i])
      }
    }

    return result
  };

  return maxProfitK(2, prices)
};