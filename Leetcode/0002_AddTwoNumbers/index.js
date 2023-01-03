const add = require("./addTwoNumbers");
var l = require('./ListNode');

var l1 = new l.ListNode(0);
var l2 = new l.ListNode(0);
var ret = new l.ListNode(0);
var head = l1;
[2, 4, 3].forEach(element => {
  head.next = new l.ListNode(element);
  head = head.next;
});
var head = l2;
[5, 6, 4].forEach(element => {
  head.next = new l.ListNode(element);
  head = head.next;
});
var head = ret;
[7, 0, 8].forEach(element => {
  head.next = new l.ListNode(element);
  head = head.next;
});


console.log(l1.next.val);
console.log(add.addTwoNumbers(l1.next, l2.next).val)