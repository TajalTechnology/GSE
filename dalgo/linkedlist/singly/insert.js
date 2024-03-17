class Node{
    constructor(value = 0){
        this.head = value
        this.nextAddress = null
    }
}


class LinkListMethods{
    constructor(head=null, size=0){
        this.head = head;
        this.size= size
    }

    insertAtEnd(value){
        const node = new Node(value);
        if(this.head === null) this.head = node;
        else{
            let curentHead = this.head;
            while(curentHead.nextAddress) curentHead = curentHead.nextAddress;
            curentHead.nextAddress = node;
        }
    }
    insertAtFirst(value){
        const newList = new Node(value);
        newList.nextAddress = this.head
        this.head = newList;
        console.log(`========<>insertAtFirst`,this.head);

    }
    insertAtPosition(value, position){
        const node = new Node(value);
        let currentNode = this.head;
        let length = 1;

        while(currentNode.nextAddress){
            length++;
            if(length === position) {
                node.nextAddress = currentNode.nextAddress;
                currentNode.nextAddress = node; 
                break;
            }
        }
        console.log(`========<>insertAtPosition ${position}`,this.head);
    }
}

const list = new LinkListMethods();
list.insertAtEnd(2)
list.insertAtEnd(3)
list.insertAtEnd(1)
list.insertAtPosition(9, 2)
list.insertAtFirst(10)