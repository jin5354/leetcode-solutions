// Given a linked list, determine if it has a cycle in it.

// Follow up:
// Can you solve it without using extra space?

// hash-map
// Time complexity : O(n). We visit each of the nn elements in the list at most once. Adding a node to the hash table costs only O(1) time.
// Space complexity: O(n). The space depends on the number of elements added to the hash table, which contains at most nn elements.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  while(head) {
    if(head.walked) {
      return true
    }
    head.walked = true
    head = head.next
  }
  return false
};

// two pointer
// Time complexity : O(n).
// Space complexity: O(1).

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(!head || !head.next) {
    return false
  }
  let slow = head
  let fast = head.next
  while(slow !== fast) {
    if(!fast.next || !fast.next.next) {
      return false
    }
    slow = slow.next
    fast = fast.next.next
  }
  return true
};