/**
 * 
 * console logs added fot more visualization
 * you can just delete it and nothing happen
 * 
 */

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add element to the end
  push(value) {
    let node = new Node(value);
    // if list is empty
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let tmp = this.tail;
      this.tail = node;
      node.prev = tmp;
      tmp.next = node;
    }
    this.length++;
    console.log(value, " added to the end\n");
    return this;
  }

  // delete last element and return his value
  pop() {
    let lastElement = this.tail;
    console.log("\nDeleted last element: ", lastElement);
    if (!this.head) return undefined;
    let tmp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tmp.prev;
      this.tail.next = null;
      tmp.prev = null;
    }
    this.length--;
    return lastElement;
  }

  // add element in front
  unshift(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let tmp = this.head;
      this.head = node;
      node.next = tmp;
      tmp.prev = node;
    }
    this.length++;
    console.log(value, "added to the start\n");
    return this;
  }

  // delete front element and return his value
  shift() {
    let firstElement = this.head;
    console.log("\nDeleted first element: ", firstElement);
    if (!this.head) return undefined;
    let tmp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = tmp.next;
      this.head.prev = null;
      tmp.next = null;
    }
    this.length--;
    return firstElement;
  }

  // check is deque empty
  isEmpty() {
    if (!this.head || !this.tail) {
      return console.log("Is deque empty: ", true);
    } else {
      return console.log("Is deque empty: ", false);
    }
  }
}
