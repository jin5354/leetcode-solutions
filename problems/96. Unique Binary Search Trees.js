// Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

// Example:

// Input: 3
// Output: 5
// Explanation:
// Given n = 3, there are a total of 5 unique BST's:

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3

// DP
// consider BST feature
// n = 1, result = 1
// n = 2, result = 2
// n = 3, case: null - 1 - 23, 1 - 2 - 3, 12 - 3 - null
//              numTrees(0)*numTrees(2) + numTrees(1)*numTrees(1) + numTrees(2)*numTrees(0) = 5
// n = 4 , numTrees(0)*numTrees(3) + numTrees(1)*numTrees(2) + numTrees(2)*numTrees(1) + numTrees(3)*numTrees(0) = 14
// ...

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let hashMap = []
  function getNum(n) {
    if(n === 0 || n === 1) {
      return 1
    }
    if(n === 2) {
      return 2
    }
    if(hashMap[n] !== undefined) {
      return hashMap[n]
    }
    let result = 0
    for(let i = 0; i < n; i++) {
      result += getNum(i) * getNum(n - 1 - i)
    }
    hashMap[n] = result
    return result
  }

  return getNum(n)
};