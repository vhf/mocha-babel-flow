/* eslint-env node, mocha */
const Index = require('../lib/index');
const assert = require('assert');

describe('Index test', () => {
  it('should be created', () => {
    const tree = new Index();
    assert.equal(tree.order, 6);
  });
});
