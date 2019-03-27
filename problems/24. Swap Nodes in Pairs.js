// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes, only nodes itself may be changed.



// Example:

// Given 1->2->3->4, you should return the list as 2->1->4->3.

// recursively

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if(head === null || head.next === null) {
    return head
  }

  let tail = swapPairs(head.next.next)
  let newHead = head.next
  newHead.next = head
  head.next = tail

  return newHead
};


// iteratively

// var swapPairs = function(head) {
//   let ary = []
//   while(head) {
//     ary.push(head)
//     head = head.next
//   }
//   for(let i = 0; i < ary.length; i = i + 2) {
//     if(ary[i + 1]) {
//       ary[i + 1].next = ary[i]
//     }
//     if(ary[i + 3]) {
//       ary[i].next = ary[i + 3]
//     }else if(ary[i + 2]) {
//       ary[i].next = ary[i + 2]
//     }else{
//       ary[i].next = null
//     }
//   }
//   return ary[1] || ary[0] || null
// };