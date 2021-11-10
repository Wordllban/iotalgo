import chai from 'chai';
import { findMinDivides } from "./app.js";

const expect = chai.expect;

describe('Fantz algorithm', () => {
    it('should be equal to expected', () => {
        expect(findMinDivides('101101101')).to.equal(3)
    });
});