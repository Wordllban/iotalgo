const chai = window.chai;
const assert = chai.assert;

var testingList = new DoublyLinkedList;

testingList.push(1);
testingList.push(2);
testingList.push(3);
var lastElem = testingList.tail;
var firstElem = testingList.head;
console.log('Deque for tests: ', testingList);


describe('Deque based on doubly linked list', () => {
    it('should pass all tests', () => {
        console.log('test pop(): ');
        assert.equal(testingList.pop(), lastElem); // delete last element and return his value
        console.log('test shift(): ');
        assert.equal(testingList.shift(), firstElem); // delete first element and return his value 
        console.log('test isEmpty(): ');
        assert.equal(testingList.isEmpty(), console.log(false)); // check is deque empty
    });
});