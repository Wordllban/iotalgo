import chai from 'chai';

import { buildPrefixTable, searchSubString } from './app.js';

const expect = chai.expect;

[0, 1, 0, 1, 2, 2, 3]


describe('Build prefix table for KMP', () => {
    it('should return prefix table', () => {
        expect(buildPrefixTable("aabaaab")).to.deep.equal([0, 1, 0, 1, 2, 2, 3])
    })
});

describe('KMP Algorithm for searching substring', () => {
    it('should return start index of substring if exists, return -1 if not exists', () => {
        expect(searchSubString("aabaabaaab", "aabaaab")).to.deep.equal("Starting position of substring is: 3")
    });
});