import { expect } from 'chai';
import mfl from './mfl';

describe('mfl', () => {
  it('should return foo', () => {
    expect(mfl()).to.equal('foo');
  });
});
