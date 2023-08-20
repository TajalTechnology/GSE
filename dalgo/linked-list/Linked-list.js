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

    print(){
        let toStringValue = '';
        let current = this.head;
        while(current){
            toStringValue += current.element +'>';
            current = current.next;
        }
        return toStringValue;
    }

    join(x){
        let current = this.head;

        while(current){
            let nextNode = current.next;
            current.next = new Node(x);
            current.next.next = nextNode
            current = current.next.next
        }

        console.log(this.head)
    }

    shift(){
        if(this.head){
            this.head = this.head.next
        }else return
    }

    unshift(x){
        const currentHead = this.head;
        this.head = new Node(x);
        this.head.next = currentHead;
    }

    count(){
        let sum = 0;
        let current = this.head;

        while(current){
            sum +=1;
            current = current.next;
        }
        return sum;
    }
}

const linkedList = new List();

// push value in node
linkedList.push(10)
linkedList.push(20)
linkedList.push(30)

// TODO: pop value from linkedList
// linkedList.pop()
// linkedList.pop()
// linkedList.pop()
// linkedList.pop()



// TODO: join 
// linkedList.join(2);

// TODO: print all the value
// const print = linkedList.print();
// console.log(print);

// TODO: shift
// linkedList.shift()

// TODO: unshift
// linkedList.unshift(7);


// TODO:
// const count = linkedList.count();
// console.log(count)