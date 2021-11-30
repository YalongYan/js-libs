import 'mocha';
import { expect } from 'chai';
import arrayUnique from '../src/array/arrayUnique';

describe('arrayUnique函数', function(){
  it('arrayUnique', function() {
    expect(arrayUnique([1,2,2,3,3])).to.deep.equal([1,2,3]);
  });
});