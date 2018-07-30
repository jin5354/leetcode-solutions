// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

// Example 1:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
// Given tree t:
//    4
//   / \
//  1   2
// Return true, because t has the same structure and node values with a subtree of s.
// Example 2:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
// Given tree t:
//    4
//   / \
//  1   2
// Return false.

// Time complexity : O(m*n). In worst case(skewed tree) traverse function takes O(m*n) time.

// Space complexity : O(n). The depth of the recursion tree can go upto n. n refers to the number of nodes in s.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if(!s) {
    return false
  }else if(isEqual(s, t)) {
    return true
  }else {
    return isSubtree(s.left, t) || isSubtree(s.right, t)
  }
};

function isEqual(s, t) {
  if(!s && !t) {
    return true
  }else if((s && !t) || (t && !s) || t.val !== s.val) {
    return false
  }else {
    return isEqual(s.left, t.left) && isEqual(s.right, t.right)
  }
}