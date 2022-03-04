/* eslint-env node, mocha */
const assert = require('chai').assert;
const tuneuptechnology = require('../index');
const setupPolly = require('./setupPolly');

describe('Locations', function () {
  setupPolly.startPolly();

  it('creates a location', async function () {
    const { server } = this.polly;
    setupPolly.stripCreds(server);

    const client = new tuneuptechnology.client(
      process.env.API_EMAIL,
      process.env.API_KEY,
      'http://tuneapp.localhost/api',
    );

    const data = {
      name: 'Location Name',
      street: '123 California Ave',
      city: 'Salt Lake',
      state: 'UT',
      zip: 84043,
    };

    const response = await client.locations.create(data);

    assert.equal(response.name, 'Location Name');
  });

  it('retrieves a location', async function () {
    const { server } = this.polly;
    setupPolly.stripCreds(server);

    const client = new tuneuptechnology.client(
      process.env.API_EMAIL,
      process.env.API_KEY,
      'http://tuneapp.localhost/api',
    );

    const response = await client.locations.retrieve(1);

    assert.exists(response.name);
  });

  it('retrieves all locations', async function () {
    const { server } = this.polly;
    setupPolly.stripCreds(server);

    const client = new tuneuptechnology.client(
      process.env.API_EMAIL,
      process.env.API_KEY,
      'http://tuneapp.localhost/api',
    );

    const response = await client.locations.all();

    assert.isAtLeast(response.data.length, 1);
  });

  it('updates a location', async function () {
    const { server } = this.polly;
    setupPolly.stripCreds(server);

    const client = new tuneuptechnology.client(
      process.env.API_EMAIL,
      process.env.API_KEY,
      'http://tuneapp.localhost/api',
    );

    const data = {
      name: 'Location Name',
      street: '123 California Ave',
      city: 'Salt Lake',
      state: 'UT',
      zip: 84043,
    };

    const response = await client.locations.update(1, data);

    assert.equal(response.name, 'Location Name');
  });

  it('deletes a location', async function () {
    const { server } = this.polly;
    setupPolly.stripCreds(server);

    const client = new tuneuptechnology.client(
      process.env.API_EMAIL,
      process.env.API_KEY,
      'http://tuneapp.localhost/api',
    );

    const response = await client.locations.delete(1);

    assert.exists(response.deleted_at);
  });
});
