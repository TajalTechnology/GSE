
  class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var addTwoNumbers = function(l1, l2) {
    console.log(l1,l2);
};

let l1 = [2,4,3], l2 = [5,6,4]
console.log(addTwoNumbers(l1,l2));