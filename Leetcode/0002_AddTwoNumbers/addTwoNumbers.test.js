const add = require("./addTwoNumbers");
const l = require("./ListNode");

// ====================================================================
var l1 = new l.ListNode(0);
var l2 = new l.ListNode(0);
var ret = new l.ListNode(0);
var head = l1;
[2, 4, 3].forEach(element => {
  head.next = new l.ListNode(element);
  head = head.next;
});
head = l2;
[5, 6, 4].forEach(element => {
  head.next = new l.ListNode(element);
  head = head.next;
});
head = ret;
[7, 0, 8].forEach(element => {
  head.next = new l.ListNode(element);
  head = head.next;
});
// ==============================================================
// Test case #1
test('Input: l1-[2,4,3], l2-[5,6,4]; Output: [7,0,8]', () => {
  var result = add.addTwoNumbers(l1.next, l2.next)

  head = ret.next;
  for (var i = 0; i < 3; i++) {
    expect(result.val).toEqual(head.val);
    result = result.next;
    head = head.next
  }
});
// =============================================================
head = l1;
[0].forEach(element => {
  head.next = new l.ListNode(element);
  head = head.next;
});
head = l2;
[0].forEach(element => {
  head.next = new l.ListNode(element);
  head = head.next;
});
head = ret;
[0].forEach(element => {
  head.next = new l.ListNode(element);
  head = head.next;
});
// ============================================================================
// Test case #2
test('l1: [0], l2: [0]', () => {
  var result = add.addTwoNumbers(l1.next, l2.next)
  expect(result.val).toEqual(ret.next.val);
});
// =====================================================================
head = l1;
[9, 9, 9, 9, 9, 9, 9].forEach(element => {
  head.next = new l.ListNode(element);
  head = head.next;
});
head = l2;
[9, 9, 9, 9].forEach(element => {
  head.next = new l.ListNode(element);
  head = head.next;
});
head = ret;
[8, 9, 9, 9, 0, 0, 0, 1].forEach(element => {
  head.next = new l.ListNode(element);
  head = head.next;
});
// ==============================================================
// Test case #3
test('l1: [9,9,9,9,9,9,9], l2: [9,9,9,9]', () => {
  var result = add.addTwoNumbers(l1.next, l2.next)

  head = ret.next;
  for (var i = 0; i < 8; i++) {
    expect(result.val).toEqual(head.val);
    result = result.next;
    head = head.next
  }
});