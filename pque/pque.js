class Item {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
  constructor() {
    this.collection = [];
    this.length = 0;
  }

  enqueue(element, priority) {
    let item = new Item(element, priority);
    let contain = false;

    for (let i = 0; i < this.collection.length; i++) {
      if(this.collection[i].priority > item.priority) {
          this.collection.splice(i, 0, item);
          contain = true;
          break;
      }
    }

    if(!contain) {
        this.collection.push(item);
    }

    this.length++;
  };

  dequeue() {
    if(this.isEmpty()) {
        return "Underflow"     
    }

    let value = this.collection.shift();
    this.length--;
    return value;
  }

  front() {
    if(this.isEmpty()) {
        return "No elements is Queue"
    }

    return this.collection[0];
  }

  size() {
    return this.length;
  }

  isEmpty() {
    if(this.collection.length === 0) {
        return true;
    } else {
        return false;
    }
  }
}

const pque = new PriorityQueue;

pque.enqueue('Aboba', 2);
pque.enqueue('Anti-aboba', 5);
pque.enqueue('Floppa', 3);
pque.enqueue('Pusska', 1);
pque.enqueue('Drainer', 4);
console.log('collection size: ', pque.size());
console.log('current collection: ', pque.collection);
console.log('most priority out: ', pque.dequeue());
console.log('front of queue: ', pque.front());