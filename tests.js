import { minKey, printMST, primMST } from "./app.js";
import chai from "chai";
const expect = chai.expect;

describe('Prima\'s algorithm', () => {
    let graph = [
        //  v 0  1  2  3  4    // u     
            [ 0, 2, 0, 6, 0 ], // 0
            [ 2, 0, 3, 8, 5 ], // 1
            [ 0, 3, 0, 0, 7 ], // 2
            [ 6, 8, 0, 0, 9 ], // 3
            [ 0, 5, 7, 9, 0 ]  // 4
        ];

    const fooResult = primMST(graph)
    it('should return an array of indexes of previous node', () => {
        expect(fooResult).to.eql([ -1, 0, 1, 0, 1 ]);
    });
});