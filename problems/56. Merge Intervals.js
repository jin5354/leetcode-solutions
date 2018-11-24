// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Time complexity : O(nlgn)

// Space complexity : O(n)


/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  let arr = []
  let result = []
  // 遍历一次, n
  intervals.forEach(e => {
    arr.push({
      type: 0,
      value: e.start
    })
    arr.push({
      type: 1,
      value: e.end
    })
  })

  // 快排，nlogn

  arr.sort((a, b) => {
    if(a.value === b.value) {
      return a.type - b.type
    }else {
      return a.value - b.value
    }
  })

  // 遍历一次, n
  let count = 0
  let startCache = null
  arr.forEach(e => {
    if(e.type === 0) {
      count ++
      if(count === 1) {
        startCache = e.value
      }
    }
    if(e.type === 1) {
      count --
      if(count === 0) {
        result.push(new Interval(startCache, e.value))
      }
    }
  })

  return result
};