import { expect } from 'chai';
import Guest from '../../src/models/guest';

describe('Guest', function() {
  describe('#toString', function() {
    it('prints expected string', function() {
      let name = 'Christopher';
      let age = 25;

      let subject = new Guest(name, age);

      expect(`Guest[name: ${name}, age: ${age}]`).to.equal(subject.toString());
    });
  });
});
