/* eslint-env node, mocha */
const assert = require('chai').assert;
const tuneuptechnology = require('../index');

describe('Client', function () {
  // TODO: Investigate this test, it doesn't appear to be covering the line properly
  it('throws an error when missing credentials', async function () {
    assert.throws(() => {
      tuneuptechnology.client(null, null, 'http://tuneapp.localhost/api');
    }, Error);
  });
});
