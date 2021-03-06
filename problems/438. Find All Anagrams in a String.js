// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

// Sliding Window algorithm template to solve all the Leetcode substring search problem
//  https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/92007/Sliding-Window-algorithm-template-to-solve-all-the-Leetcode-substring-search-problem.
// public class Solution {
//   public List<Integer> slidingWindowTemplateByHarryChaoyangHe(String s, String t) {
//       //init a collection or int value to save the result according the question.
//       List<Integer> result = new LinkedList<>();
//       if(t.length()> s.length()) return result;

//       //create a hashmap to save the Characters of the target substring.
//       //(K, V) = (Character, Frequence of the Characters)
//       Map<Character, Integer> map = new HashMap<>();
//       for(char c : t.toCharArray()){
//           map.put(c, map.getOrDefault(c, 0) + 1);
//       }
//       //maintain a counter to check whether match the target string.
//       int counter = map.size();//must be the map size, NOT the string size because the char may be duplicate.

//       //Two Pointers: begin - left pointer of the window; end - right pointer of the window
//       int begin = 0, end = 0;

//       //the length of the substring which match the target string.
//       int len = Integer.MAX_VALUE;

//       //loop at the begining of the source string
//       while(end < s.length()){

//           char c = s.charAt(end);//get a character

//           if( map.containsKey(c) ){
//               map.put(c, map.get(c)-1);// plus or minus one
//               if(map.get(c) == 0) counter--;//modify the counter according the requirement(different condition).
//           }
//           end++;

//           //increase begin pointer to make it invalid/valid again
//           while(counter == 0 /* counter condition. different question may have different condition */){

//               char tempc = s.charAt(begin);//***be careful here: choose the char at begin pointer, NOT the end pointer
//               if(map.containsKey(tempc)){
//                   map.put(tempc, map.get(tempc) + 1);//plus or minus one
//                   if(map.get(tempc) > 0) counter++;//modify the counter according the requirement(different condition).
//               }

//               /* save / update(min/max) the result if find a target*/
//               // result collections or result int value

//               begin++;
//           }
//       }
//       return result;
//   }
// }

// Time Complexity: O(sLength).
// Space Complexity : O(1).

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let hash = {}
  let result = []
  let sLen = s.length
  let pLen = p.length
  for(let i = 0 , len = pLen; i < len; i++) {
     if(!hash[p[i]]) {
       hash[p[i]] = 1
     }else {
       hash[p[i]]++
     }
  }
  let counter = Object.keys(hash).length

  let begin = end = 0
  while(end < sLen) {
    let cEnd = s[end]
    if(hash[cEnd] !== undefined) {
      hash[cEnd]--
    }
    if(hash[cEnd] === 0) {
      counter--
    }

    end++

    if(end - begin === pLen) {
       if(counter === 0) {
         result.push(begin)
       }
      let cBegin = s[begin]
      if(hash[cBegin] !== undefined) {
        hash[cBegin]++
      }
      if(hash[cBegin] === 1) {
        counter++
      }
      begin++
    }
  }

  return result
};