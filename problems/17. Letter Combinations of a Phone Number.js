// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// [image](http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png)

// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:

// Although the above answer is in lexicographical order, your answer could be in any order you want.

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  if(!digits.length) {
    return []
  }

  return digits.split('').map(e => map[e]).reduce((a, b) => {
    let result = []
    for(let i = 0, aLen = a.length; i < aLen; i++) {
      for(let j = 0, bLen = b.length; j < bLen; j++) {
        result.push(a[i] + b[j])
      }
    }
    return result
  })
};