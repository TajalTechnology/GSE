class Node{
    constructor(element = 0, next = null){
        this.element = element;
        this.next = next;
    }
}

class List{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    push(value){
        const node = new Node(value);
        if(this.head === null) this.head = node
        else{
            let current = this.head;
            while(current.next) current = this.head.next;
            current.next = node
        }
        console.log(this.head) // show list
    }
}

const linkedList = new List();
linkedList.push(10)
linkedList.push(20)
linkedList.push(30)
