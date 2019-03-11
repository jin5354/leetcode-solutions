// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4


// hashmap + doubly linked list

var LinkNode = function(key, value) {
  this.key = key
  this.value = value
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.num = 0
  this.hashMap = {}
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(this.hashMap[key] !== undefined) {
    this._addToTail(this.hashMap[key])
    return this.hashMap[key].value
  }else {
    return -1
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(this.hashMap[key]) {
    this.hashMap[key].value = value
    this._addToTail(this.hashMap[key])
  }else if(this.num >= this.capacity){
    // 删掉最近最少访问的，再添加..
    this._removeLRU()
    this.hashMap[key] = new LinkNode(key, value)
    this._addToTail(this.hashMap[key])
    this.num++
  }else {
    // 直接添加
    this.hashMap[key] = new LinkNode(key, value)
    this._addToTail(this.hashMap[key])
    this.num++
  }
};

LRUCache.prototype._addToTail = function(node) {
  // 添加的第一个元素。初始化 head 和 tail
  if(!this.tail) {
    this.head = this.tail = node
    return
  }
  // 该元素本就是 tail，不变。
  if(this.tail === node) {
    return
  }
  let prev = node.prev
  let next = node.next

  // 该元素在中间，移除，修正前后节点
  if(prev && next) {
    prev.next = next
    next.prev = prev
    node.next = null
  }

  // 该元素是 head，放到最后面。head 更新
  if(!prev && next) {
    next.prev = null
    this.head = next
  }

  // 更新 tail
  this.tail.next = node
  node.prev = this.tail
  this.tail = node
  node.next = null
}

LRUCache.prototype._removeLRU = function() {
  let target = this.head
  let next = target.next
  if(next) {
    next.prev = null
    this.head = next
  }else {
    this.head = null
    this.tail = null
  }
  delete this.hashMap[target.key]
  this.num--
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */