class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null; 
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // add element to the end
    push(value) {
        let node = new Node(value)
        // if list is empty 
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else { 
            let temp = this.tail;
            this.tail = node;
            node.prev = temp;
            temp.next = node;
        }
        this.length++;
        return this;
    } 

    // delete last element and return his value
    pop() {
        console.log(this.tail);
        if(!this.head) return undefined;
        let temp = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return list;
    }

    // add element in front
    unshift(value) {
        let node = new Node(value);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let temp = this.head;
            this.head = node;
            node.next = temp;
            temp.prev = node;
        }
        this.length++;
        return this;
    }

    // delete front element and return his value 
    shift() {
        if(!this.head) return undefined;
        let temp = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return this;
    }
}


let list = new DoublyLinkedList;
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.shift();

console.log(list);