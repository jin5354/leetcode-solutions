// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass?

// One pass, fast-slow pointer

// Time complexity : O(L).
// The algorithm makes one traversal of the list of L nodes. Therefore time complexity is O(L).
// Space complexity : O(1).
// We only used constant extra space.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let fast = head
  let slow = head
  let pre = null
  let step = 0

  while(fast) {
    fast = fast.next
    step++
    if(step <= n) {
      continue
    }
    pre = slow
    slow = slow.next
  }

  if(n > step || n <= 0) {
    return head
  }
  if(pre) {
    pre.next = slow.next
  }else {
    return slow.next
  }
  return head
};