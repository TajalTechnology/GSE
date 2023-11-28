class TrieNode{
    constructor(){
        this.endOfWord = false;
        this.children = {};
    }
}

class Trie{
    constructor(){ this.root = new TrieNode() }

    inser(word){
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word){
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word[i].charCodeAt(0) -  'a'.charCodeAt(0);
            if(!current.children[index]) return false;
            current = current.children[index]
        }
        return (current.endOfWord);
    }

    longestCommonPrefix() {
        let node = this.root;
        let prefix = '';
        console.log(Object.keys(node.children));

        while (Object.keys(node.children).length === 1 && !node.isEndOfWord) {
            let char = Object.keys(node.children)[0];
            prefix += char;
            node = node.children[char];
        }

        return prefix;
    }

}

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    const trie = new Trie();

    for (let str of strs) {
        trie.inser(str);
    }
    return trie.longestCommonPrefix();
};

// const trie = new Trie();
// trie.inser('abc');
// trie.inser('abcd');
// trie.inser('abllo');
console.log(longestCommonPrefix(["flower","flow","flight"]));