class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var reverseList = function (head) {
    if(!head.next) return head;
    let newList = new ListNode(head.val);
    let current = head.next;

    while(current){
        const node = new ListNode(current.val);
        node.next = newList;
        newList = node;
        current = current.next;
    }
    return newList;
};

let head = [1, 2, 3, 4, 5];

reverseList(head);