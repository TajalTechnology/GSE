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
    }

    insertAtPosition(value, position){
        const node = new Node(value);
        let currentNode = this.head;
        let length = 1; 

        if(position === 1) {
            node.nextAddress = currentNode;
            this.head = node
        } else {
            while(currentNode?.nextAddress){
                length++;
                if(length === position) {
                    node.nextAddress = currentNode?.nextAddress;
                    currentNode.nextAddress = node; 
                    break;
                }
                currentNode = currentNode?.nextAddress;
            }
            if((length + 1) === position){
                currentNode.nextAddress = node;
                length++;
            }
        }
        if(position > length) console.log('index not found')
        console.log(`========<>insertAtPosition ${position}`,this.head);
    }

    deleteAtIndex(index){
        let len = 1;
        let currentNode = this.head;
        if(len === index)this.head = currentNode.nextAddress;
        else{
            let currentNode = this.head;
            while(currentNode?.nextAddress){
                len++;
                if(len === index){
                    currentNode.nextAddress = currentNode?.nextAddress?.nextAddress;
                    break;
                }
                currentNode = currentNode.nextAddress;
            }
            if(len < index) console.log('Not found')
        }
        console.log(`========<>deleteAtIndex ${index}`,this.head);
    }
    reverse(){
        console.log(`========<>Before reverse`,this.head);
        let currentNode = this.head;
        let assignNode;
        while(currentNode.nextAddress){
            const node = new Node(currentNode.head);
            node.nextAddress = assignNode;
            assignNode = node;
            currentNode = currentNode.nextAddress;
        }
        const node = new Node(currentNode.head);
        node.nextAddress = assignNode;
        this.head = node

        console.log(`========<>After reverse`,this.head);
    }
}

const list = new LinkListMethods();
list.insertAtEnd(2)
list.insertAtEnd(3)
list.insertAtEnd(1)
list.insertAtPosition(9, 2)
list.insertAtFirst(10)
list.deleteAtIndex(4);
list.reverse();