// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

// Example:

// Given this linked list: 1->2->3->4->5

// For k = 2, you should return: 2->1->4->3->5

// For k = 3, you should return: 3->2->1->4->5

// Note:

// Only constant extra memory is allowed.
// You may not alter the values in the list's nodes, only nodes itself may be changed.

// 反转指定长度单链表 + N个一组交换，用递归
// 两道题的融合

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let count = 0
  let countHead = head
  while(countHead) {
    count++
    countHead = countHead.next
    if(count === k) break
  }
  if(count < k) {
    return head
  }

  let tail = reverseKGroup(countHead, k)

  let cache
  let oldHead = head
  count = 0
  while(count < k) {
    let next = head.next
    head.next = cache
    cache = head
    head = next
    count++
  }

  oldHead.next = tail
  return cache
};