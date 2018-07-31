// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// Time complexity : O(max(m,n)). Assume that mm and nn represents the length of l1 and l2 respectively, the algorithm above iterates at most max(m,n) times.

// Space complexity : O(1).

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  function _walk(l1, l2, carry) {
    if(!l1 && !l2) return carry ? new ListNode(1) : null
    if(!l1) {
      l2.val += carry
      if(l2.val >= 10) {
        l2.val -= 10
        l2.next = _walk(null, l2.next, 1)
        return l2
      }else {
        return l2
      }
    }

    if(!l2) {
      l1.val += carry
      if(l1.val >= 10) {
        l1.val -= 10
        l1.next = _walk(l1.next, null, 1)
        return l1
      }else {
        return l1
      }
    }

    l1.val = l1.val + l2.val + carry
    if(l1.val >= 10) {
      l1.val -= 10
      l1.next = _walk(l1.next, l2.next, 1)
      return l1
    }else {
      l1.next = _walk(l1.next, l2.next, 0)
      return l1
    }
  }

  return _walk(l1, l2, 0)
};