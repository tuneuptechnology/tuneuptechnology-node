/* eslint-env node, mocha */
const assert = require('chai').assert;
const tuneuptechnology = require('../index');
const setupPolly = require('./setupPolly');

describe('Tickets', function () {
  setupPolly.startPolly();

  it('creates a ticket', async function () {
    const { server } = this.polly;
    setupPolly.stripCreds(server);

    const client = new tuneuptechnology.client(
      process.env.API_EMAIL,
      process.env.API_KEY,
      'http://tuneapp.localhost/api',
    );

    const data = {
      customer_id: 2,
      ticket_type_id: 1,
      serial: '10000',
      user_id: 1,
      notes: 'here are some notes',
      title: 'Fancy Title',
      status: 1,
      device: 'iPhone',
      imei: 10000,
      location_id: 2,
    };

    const response = await client.tickets.create(data);

    assert.equal(response.title, 'Fancy Title');
  });

  it('retrieves a ticket', async function () {
    const { server } = this.polly;
    setupPolly.stripCreds(server);

    const client = new tuneuptechnology.client(
      process.env.API_EMAIL,
      process.env.API_KEY,
      'http://tuneapp.localhost/api',
    );

    const response = await client.tickets.retrieve(1);

    assert.exists(response.title);
  });

  it('retrieves all tickets', async function () {
    const { server } = this.polly;
    setupPolly.stripCreds(server);

    const client = new tuneuptechnology.client(
      process.env.API_EMAIL,
      process.env.API_KEY,
      'http://tuneapp.localhost/api',
    );

    const response = await client.tickets.all();

    assert.isAtLeast(response.data.length, 1);
  });

  it('updates a ticket', async function () {
    const { server } = this.polly;
    setupPolly.stripCreds(server);

    const client = new tuneuptechnology.client(
      process.env.API_EMAIL,
      process.env.API_KEY,
      'http://tuneapp.localhost/api',
    );

    const data = {
      customer_id: 2,
      ticket_type_id: 1,
      serial: '10000',
      user_id: 1,
      notes: 'here are some notes',
      title: 'Fancy Title',
      status: 1,
      device: 'iPhone',
      imei: 10000,
      location_id: 2,
    };

    const response = await client.tickets.update(1, data);

    assert.equal(response.title, 'Fancy Title');
  });

  it('deletes a ticket', async function () {
    const { server } = this.polly;
    setupPolly.stripCreds(server);

    const client = new tuneuptechnology.client(
      process.env.API_EMAIL,
      process.env.API_KEY,
      'http://tuneapp.localhost/api',
    );

    const response = await client.tickets.delete(1);

    assert.exists(response.deleted_at);
  });
});
