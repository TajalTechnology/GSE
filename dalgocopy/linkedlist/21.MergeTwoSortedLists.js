class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var mergeTwoLists = function(list1, list2) {
    let list = new ListNode();
    let result = list;
    while(list1 || list2){
        if(((list1 && list2) && list1.val <= list2.val) || list1 && !list2){
            result.val = list1.val;
            list1 = list1.next
        }else if(((list1 && list2) && list1.val > list2.val) || !list1 && list2) {
            result.val = list2.val;
            list2 = list2.next
        }
        result.next = null;
    }
    return list.next;
};

mergeTwoLists([1,2,4], [1,3,4])