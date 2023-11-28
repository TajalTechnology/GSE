class TrieNode {
    constructor(){
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }
    insert(word){
        let current = this.root;
        for (let index = 0; index < word.length; index++) {
            if(!current.children[word[index]]) current.children[word[index]] = new TrieNode();
            current = current.children[word[index]];
        }
        current.endOfWord = true
    }

    largestCommonPrefix() {
        let node = this.root;
        let prefix = '';

        while (Object.keys(node.children).length === 1 && !node.endOfWord) {
            // if(node.endOfWord)
            // console.log(Object.keys(node.children)[0], Object.keys(node.children).length === 1, node.endOfWord);
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
    for (let str of strs){
        if(str === '') return '';
        trie.insert(str);
    }  
    return trie.largestCommonPrefix();
};

// const strings = ["ab", "a"];
const strings = ["flower","flow"]
console.log(longestCommonPrefix(strings)); // Output: "fl"