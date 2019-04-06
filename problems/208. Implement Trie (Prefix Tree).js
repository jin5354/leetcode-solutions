// Implement a trie with insert, search, and startsWith methods.

// Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");
// trie.search("app");     // returns true
// Note:

// You may assume that all inputs are consist of lowercase letters a-z.
// All inputs are guaranteed to be non-empty strings.

// just use hashmap to implement a trie

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = {}
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root
  for(let i = 0, len = word.length; i < len; i++) {
    if(!node[word[i]]) {
      node[word[i]] = {}
    }
    node = node[word[i]]
  }
  // 用来做结尾标记
  node.end = true
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.root
  for(let i = 0, len = word.length; i < len; i++) {
    if(node[word[i]]) {
      node = node[word[i]]
    }else {
      return false
    }
  }

  // 判断结尾标记
  return !!node.end
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.root
  for(let i = 0, len = prefix.length; i < len; i++) {
    if(node[prefix[i]]) {
      node = node[prefix[i]]
    }else {
      return false
    }
  }

  return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */