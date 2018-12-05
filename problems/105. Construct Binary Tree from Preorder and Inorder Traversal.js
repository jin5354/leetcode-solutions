// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// 双指针，按规律构造
// 默认按先序数组构造，往根节点的 left 挂新节点，同时观察中序数组，如果中序数组出现了前序数组中的元素，说明到头了，开始回溯，找目标节点，下一个节点往它的 right 挂

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  let pLen = preorder.length
  let iLen = inorder.length
  let pPointer = 0
  let iPointer = 0
  let root
  let target
  let hashMap = {}
  let flag = 'left'

  while(pPointer !== pLen) {
    let node = new TreeNode(preorder[pPointer])
    hashMap[preorder[pPointer]] = node
    if(!root) {
      root = node
    }else if(flag === 'left') {
      target.left = node
    }else if(flag === 'right') {
      target.right = node
      flag = 'left'
    }
    target = node

    if(inorder[iPointer] === preorder[pPointer]) {
      iPointer++
      while(hashMap[inorder[iPointer]]) {
        target = hashMap[inorder[iPointer]]
        iPointer++
      }
      flag = 'right'
    }
    pPointer++
  }

  return root || null
};