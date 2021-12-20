import { heapSort } from "../heap/heapsort.js";
import chai from "chai";
const expect = chai.expect;

describe('HeapSort Algorithm', () => {
    it('should return a sorted array', () => {
        expect(heapSort([3, 2, 5, 4, 0])).to.deep.equal([0, 2, 3, 4, 5]);                               //random array sortered in asc
        expect(heapSort([-9, 1, 2, 11, 45, 56, 78])).to.deep.equal([-9, 1, 2, 11, 45, 56, 78]);         //sortered array in asc is sorting in asc 
        expect(heapSort([-9, 1, 2, 11, 45, 56, 78], "desc")).to.deep.equal([78, 56, 45, 11, 2, 1, -9]); //sortered array in asc is sorting in desc
        expect(heapSort([78, 56, 45, 11, 2, 1, -9])).to.deep.equal([-9, 1, 2, 11, 45, 56, 78]);         //sortered array in desc is sorting in asc
        expect(heapSort([78, 56, 45, 11, 2, 1, -9], "desc")).to.deep.equal([78, 56, 45, 11, 2, 1, -9]); //sortered array in desc is sorting in desc
    });
});
