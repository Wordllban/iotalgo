/** 
 * JavaScript has native support for duque
 * operations via Array class/prototype: push, pop, shift, unshift
 * but there is implementation by my own 
 * based on Doubly Linked List
 *
 */ 


import { DoublyLinkedList } from "../doubleLinkedList/ddl.js";

let list = new DoublyLinkedList;

list.push(1);
list.push(2);
list.push(3);
list.unshift(0); 

list.isEmpty();

console.log('\n\n\nCurrent deque: \n', list);

const pupa = [1, 2, 3];