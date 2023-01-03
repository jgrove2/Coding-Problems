var l = require('./ListNode');

var addTwoNumbersTry1 = function (l1, l2) {
  let ret = new l.ListNode(0);
  let head = ret;
  let carry = 0;

  while (l1 || l2) {
    let a = l1 && l1.val;
    let b = l2 && l2.val;
    let sum = a + b + carry;

    carry = Math.floor(sum / 10);
    head.next = new l.ListNode(sum % 10);

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;

    head = head.next;
  }
  if (carry > 0) head.next = new l.ListNode(carry);

  return ret.next;
};

var addTwoNumbersLimIf = function (l1, l2) {
  let ret = new l.ListNode();
  let head = ret;
  let sum = 0;
  let carry = 0;

  while (l1 || l2 || sum) {
    sum += (l1 && l1.val) + (l2 && l2.val);
    l1 = (l1 ? l1.next : null);
    l2 = (l2 ? l2.next : null);
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    head.next = new l.ListNode(sum);
    head = head.next;
    sum = carry;
    carry = 0;
  }

  return ret.next;
};

var addTwoNumbers = function (l1, l2) {
  let ret = new l.ListNode();
  let head = ret;
  let sum = 0;
  let carry = 0;

  while (l1 || l2 || sum) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    head.next = new l.ListNode(sum);
    head = head.next;
    sum = carry;
    carry = 0;
  }

  return ret.next;
};

exports.addTwoNumbers = addTwoNumbers;