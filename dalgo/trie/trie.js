let ALPHABET_SIZE = 26;

class TrieNode {
    constructor() {
        this.next = new Array(ALPHABET_SIZE);
        this.isEndOfWord = false;

        for (let i = 0; i < ALPHABET_SIZE; i++) {
            this.next[i] = null;
        }
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(); // Initialize with a root node
    }

    insert(word) {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);

            if (current.next[index] == null) {
                current.next[index] = new TrieNode();
            }
            current = current.next[index];
        }
        current.isEndOfWord = true;
    }
    search(word){
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
            
            if(current.next[index] == null) return false;
            current = current.next[index]
        }

        return (current.isEndOfWord)
    }
}

const trie = new Trie();
trie.insert('sakil');
trie.insert('bakils');

console.log(trie.search('bakil'));
