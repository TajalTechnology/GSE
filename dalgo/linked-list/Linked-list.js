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
        if(this.head === null) this.head = node;
        else{
            let current = this.head;
            while(current.next) current = this.head.next;
            current.next = node
        }
        this.size++;
        console.log(this.size,':::', this.head);
    }

    pop(){
        if(this.head === null) return;
        let current = this.head;
        if(current?.next){
            while(current.next){
                if(current.next.next === null) current.next = null
                else current = current.next;
            }
        }else this.head = null;
        this.size --;
        console.log('36',this.size,':::', this.head);
    }
}

const linkedList = new List();
linkedList.push(10)
linkedList.push(20)
linkedList.push(30)
linkedList.pop()
linkedList.pop()
linkedList.pop()
linkedList.pop()
