// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:

// Input: coins = [1, 2, 5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Note:
// You may assume that you have an infinite number of each kind of coin.

// dp
// O(kn)

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// 不能用贪心做

var coinChange = function(coins, amount) {
  // edge case
  if(amount === 0) {
    return 0
  }
  if(coins.length === 0) {
    return -1
  }

  // dp
  // dp[i] = min(dp[i - coins[j]] + 1), j ∈ [0, coins.length - 1]

  let dp = [0]

  for(let i = 1; i <= amount; i++) {
    let tmp = Infinity
    for(let j = 0, len = coins.length; j < len; j++) {
      if(i >= coins[j]) {
        tmp = Math.min(tmp, dp[i - coins[j]] + 1)
      }
    }
    dp[i] = tmp
  }

  if(dp[amount] === Infinity) {
    return -1
  }else {
    return dp[amount]
  }

};

// var coinChange = function(coins, amount) {
//   // edge case

//   if(amount === 0) {
//     return 0
//   }
//   if(coins.length === 0) {
//     return -1
//   }

//   // dfs + memo

//   let memo = {}

//   function dfs(amount) {
//     // 终止条件
//     if(amount === 0) {
//       return 0
//     }
//     if(memo[amount] !== undefined) {
//       return memo[amount]
//     }

//     let subResult = Infinity
//     for(let i = 0, len = coins.length; i < len; i++) {
//       if(coins[i] <= amount) {
//         subResult = Math.min(subResult, dfs(amount - coins[i]))
//       }
//     }

//     if(subResult === Infinity) {
//       memo[amount] = Infinity
//       return Infinity
//     }else {
//       memo[amount] = subResult + 1
//       return subResult + 1
//     }
//   }

//   let result = dfs(amount)

//   if(result === Infinity) return -1
//   return result
// };
