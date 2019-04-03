// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its minimum depth = 2.

// dfs

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
var minDepth = function(root) {
  let result = Infinity

  if(!root) {
    return 0
  }

  function dfs(root, depth) {
    if(!root) return
    if(!root.left && !root.right) {
      result = Math.min(result, depth)
    }
    dfs(root.left, depth + 1)
    dfs(root.right, depth + 1)
  }

  dfs(root, 1)

  return result
};