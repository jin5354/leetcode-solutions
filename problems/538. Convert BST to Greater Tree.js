// Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

// Example:

// Input: The root of a Binary Search Tree like this:
//               5
//             /   \
//            2     13

// Output: The root of a Greater Tree like this:
//              18
//             /   \
//           20     13

// Recursion

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let currentSum = 0
  if(!root) {
    return null
  }
  function _walk(root) {
    if(root.right) {
      _walk(root.right)
    }
    root.val += currentSum
    currentSum = root.val
    if(root.left) {
      _walk(root.left)
    }
  }

  _walk(root)

  return root
};

// Iteration with a stack

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let stack = []
  let currentSum = 0
  let node = root
  while(node || stack.length) {
    while(node) {
      stack.push(node)
      node = node.right
    }
    node = stack.pop()
    node.val += currentSum
    currentSum = node.val
    node = node.left
  }
  return root
};