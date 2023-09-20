class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    push(value){
        this.root = this.insert(this.root, value);
        console.log('PUSH:::',this.root);
    }
    insert(root, value){
        if(root === null) return new Node(value);
        if(root.value > value) root.left = this.insert(root.left, value)
        else if(root.value < value) root.right = this.insert(root.right, value);
        return root;
    }
    remove(value){
        this.root = this.removeNode(this.root, value);
        console.log('remove:::', this.root)
    }
    removeNode(root, value){
        
        if(root === null) return root;

        if(root.value > value) {
            root.left = this.removeNode(root.left, value)
            return root;
        }else if(root.value < value){
            root.right = this.removeNode(root.right, value)
        }

        if(root.left === null){
            root = root.right;
            return root;
        }else if(root.right === null){
            root = root.left;
            return root;
        }else{
            let succParent = root;
            let succ = root.right;

            while(succ.left !== null){
                succParent = succ;
                succ = succ.left;
            }

            if(succParent != root){
                succParent.left = succ.right;
            }else{ succParent.right = succ.right}

            root.value = succ.value;
            return root;
        }
    }
}

const bst = new BST();
bst.push(5);
bst.push(6);
bst.push(4);
bst.remove(4);