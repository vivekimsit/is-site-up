/* eslint-env mocha */
'use strict';
const chai = require('chai');
const isSiteUp = require('./api');

const expect = chai.expect;

describe('IsSiteUp', () => {
  it('should return true if site is up', () => {
    return isSiteUp('example.com').then(res => {
      expect(res).to.equal(true);
    });
  });

  it('should return false if site is not up', () => {
    return isSiteUp('abc.unicorn').then(res => {
      expect(res).to.equal(false);
    });
  });

  it('should fail for invalid input', () => {
    expect(isSiteUp).to.throw(Error);
  });
});
