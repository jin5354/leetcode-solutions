// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]




// Example 1:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.
// Example 2:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.


// Note:

// All of the nodes' values will be unique.
// p and q are different and both values will exist in the binary tree.

// use recursive
// 递归二叉树。如果递归过程中，发现该节点，直接返回该节点，否则返回 null。
// 对于公共祖先即为：其左子树和右子树均含有目标节点。
// 所以，对于递归中的父级节点：若左右子节点均为null，则同样返回null
// 若其中一节点有值，返回该值（在最近公共祖先和两目标节点其一重合的情况下，该目标节点会层层传递到最上层，随后返回。）
// 若两节点均有值，说明自己即为公共祖先，返回自己

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if(root === null || root.val === p.val || root.val === q.val) {
    return root
  }
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)

  if(left === null) {
    return right
  }else if(right === null){
    return left
  }else {
    return root
  }
};