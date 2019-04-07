// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

// For example, given the following triangle

// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

// Note:

// Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

// dp bottom-up

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  // dp
  // time: O(n^2)
  // space: O(n)
  let rowNum = triangle.length
  let result = triangle[rowNum - 1]

  for(let i = rowNum - 1; i > 0; i--) {
    for(let j = 0; j < i; j++) {
      result[j] = Math.min(result[j], result[j + 1]) + triangle[i - 1][j]
    }
  }

  return result[0]
};

//dfs
// O(2^(n - 1))
// time limit exceeded

// var minimumTotal = function(triangle) {
//   let result = Infinity
//   let rowNum = triangle.length

//   function dfs(rowIndex, columnIndex, subSum) {
//     // 终止条件
//     if(rowIndex === rowNum) {
//       result = Math.min(result, subSum)
//       return
//     }

//     dfs(rowIndex + 1, columnIndex, subSum + triangle[rowIndex][columnIndex])
//     dfs(rowIndex + 1, columnIndex + 1, subSum + triangle[rowIndex][columnIndex])
//   }

//   dfs(0, 0, 0)

//   return result
// };