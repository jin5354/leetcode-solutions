// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

// recursive

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  return root ? Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right)) : 0
};

// iterative DFS

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var maxDepth = function(root) {
  if(!root) {
    return 0
  }
  let stack = [root]
  let value = [1]
  let max = 0
  while(stack.length) {
    let node = stack.pop()
    let currentValue = value.pop()
    max = Math.max(max, currentValue)
    if(node.left) {
      stack.push(node.left)
      value.push(currentValue + 1)
    }
    if(node.right) {
      stack.push(node.right)
      value.push(currentValue + 1)
    }
  }
  return max
};

// iterative BFS

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var maxDepth = function(root) {
  if(!root) {
    return 0
  }
  let stack = [root]
  let max = 0
  while(stack.length) {
    for(let i = 0, len = stack.length; i < len; i++) {
      let node = stack.shift()
      if(node.left) {
        stack.push(node.left)
      }
      if(node.right) {
        stack.push(node.right)
      }
    }
    max++
  }
  return max
};