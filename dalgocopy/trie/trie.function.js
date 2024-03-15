class TrieNode{
    constructor(){
        this.endOfWord = false;
        this.children = new Array(26);
        this.children.fill(null);
    }
}

class Trie{
    constructor(){  this.root = new TrieNode() }

    
    insertArray(arr){
        for (let index = 0; index < arr.length; index++) {
            this.insert(arr[index]);
        }
    }
    insert(word){
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word[i].charCodeAt(0) -  'a'.charCodeAt(0);
            if(current.children[index] == null) current.children[index] = new TrieNode();
            current = current.children[index];
        }
        this.endOfWord = true;
    }

    search(word){
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if(!current.children[index]) return false;
            current = current.children[index];
        }
        return true;
    }



    prefix(){
        
    }

}

const trie = new Trie();
const strs = ["flower","flow","flight"];
trie.insertArray(strs)

console.log(trie.search('fligh'));