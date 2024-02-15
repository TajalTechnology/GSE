class Node{
    constructor(value){
        this.value = value;
        this.nextpointer = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    insertFromArray(array){
        for (let index = 0; index < array.length; index++) this.insert(array[index]);
    }
    insert(value){
        if(this.head == null) this.head = new Node(value)
        else {
            let current = this.head;
            while(current.nextpointer)  current = current.nextpointer;
            current.nextpointer = new Node(value);
        }
    }

    reverse(){
        let newList = null;
        let pre = this.head;
        while(pre){
            const node = new Node(pre.value);
            node.nextpointer = newList;
            newList = node;
            pre = pre?.nextpointer;
        }
        console.log(newList);
    }
}

const list = new LinkedList();
list.insertFromArray([6,7,2]);
list.reverse()
// console.log(list.insertToLinkedList(5));