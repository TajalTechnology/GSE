class Node{
    // initially set null value and next chilren is also null;
    constructor(value=null,nextPointer=null){
        this.value = value;
        this.nextPointer = nextPointer;
    }
}

class LinkdList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    pushArray(elements){
        for (let index = 0; index < elements.length; index++) {
            this.push(elements[index]);
        }

        // return this.head
    }
    push(value){
        if(this.head === null) this.head = new Node(value)
        else{
            let currentHead = this.head;
            while(currentHead.nextPointer)  currentHead = currentHead.nextPointer;
            currentHead.nextPointer = new Node(value)
        }
        this.size++;
    }
    reverse(){
        let currentHead = this.head;
        let pre;
        while(currentHead.nextPointer){
            let node = new Node(currentHead.value);
            node.nextPointer = pre;
            pre = node
            currentHead = currentHead.nextPointer
        }
        return pre;
    }
    reverseII(left, right){
        let current = this.head;
        let newList;
        let newListhead;
        let reverseResult;
        let fnode;

        while(current){
            if(current.value >= left && current.value <= right){
                let node = new Node(current.value);
                if(!fnode) fnode = node;
                node.nextPointer = reverseResult;
                reverseResult = node;
            }
            else if (current.value < left){
                if(!newList){
                    newListhead = new Node(current.value);
                    newList = newListhead;
                } 
                else{
                    newList.nextPointer = new Node(current.value);
                    newList = newList.nextPointer 
                }
            }  else if (current.value >  right){
                console.log(fnode);
                fnode.nextPointer = current;
                break;
            } 

            current = current.nextPointer
        }
        if(newList) newList.nextPointer = reverseResult
        else console.log(reverseResult);
    }

}

const linkdList = new LinkdList();
linkdList.pushArray([1,2,4,5,6,7,8])
// console.log(linkdList.pushArray([1,2,3,4,5,6,7,8]));

console.log(linkdList.reverseII(1, 4));
