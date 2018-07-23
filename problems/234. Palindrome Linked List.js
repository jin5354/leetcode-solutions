// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

// Use fast-slow pointers to find the mid of linked list
// reverse the first-half linked-list
// compare the reversed first-half with the left-half

// Time complexity : O(n)
// Space complexity : O(1)

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
var isPalindrome = function(head) {
  if(!head) {
    return true
  }
  let fast = slow = head
  let pre = null
  while(fast && fast.next) {
    fast = fast.next.next
    let next = slow.next
    slow.next = pre
    pre = slow
    slow = next
  }
  if(fast) {
    slow = slow.next
  }
  while(pre) {
    if(pre.val !== slow.val) {
      return false
    }
    pre = pre.next
    slow = slow.next
  }
  return true
};