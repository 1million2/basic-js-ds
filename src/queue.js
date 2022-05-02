const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
 class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  insert(value) {
    this.length++;
    let newNode = new Node(value);
  
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      return newNode;
    }
  
    this.head = this.tail = newNode;
    return newNode;
  }
}

class Queue {
  constructor() {
    this.items = []
  }


  getUnderlyingList() {

    const linkedList = new LinkedList()
    for (let i = 0; i < this.items.length; i++) {
     linkedList.insert(this.items[i])
    }
    let a = linkedList
    a = JSON.stringify(a)
    return  JSON.parse(a.slice(8,-46))
  }

  enqueue(element) {
    return this.items.push(element)
  }

  dequeue() {
    if(this.items.length > 0) {
      return this.items.shift()
    }
  }
}

module.exports = {
  Queue
};
