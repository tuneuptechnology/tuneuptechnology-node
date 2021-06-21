# Tuneup Technology App Node Client Library

The Node client library for the Tuneup Technology App.

[![Build Status](https://github.com/tuneuptechnology/tuneuptechnology-node/workflows/build/badge.svg)](https://github.com/tuneuptechnology/tuneuptechnology-node/actions)
[![Coverage Status](https://coveralls.io/repos/github/tuneuptechnology/tuneuptechnology-node/badge.svg?branch=main)](https://coveralls.io/github/tuneuptechnology/tuneuptechnology-node?branch=main)
[![NPM](https://img.shields.io/npm/v/tuneuptechnology)](https://www.npmjs.com/package/tuneuptechnology)
[![Licence](https://img.shields.io/github/license/tuneuptechnology/tuneuptechnology-node)](https://opensource.org/licenses/mit-license.php)

This library allows you to interact with the customers, tickets, inventory, and locations objects without needing to do the hard work of binding your calls and data to endpoints. Simply call an action such as `Customer.create` and pass some data and let the library do the rest.

## Install

```bash
npm install tuneuptechnology
```

## Example

```javascript
const tuneuptechnology = require('tuneuptechnology')

const client = new tuneuptechnology.client(process.env.API_EMAIL, process.env.API_KEY)

const data = {
    firstname: 'Jake',
    lastname: 'Peralta',
    email: 'jake@example.com',
    phone: '8015551234',
    user_id: 1,
    notes: 'Believes he is a good detective.',
    location_id: 1
}

client.customers.create(data).then(console.log).catch(console.log)
```

Other examples can be found in the `/examples` directory. Alter according to your needs.

## Usage

```bash
API_EMAIL=email@example.com API_KEY=123... node createCustomer.js
```

## Documentation

Up-to-date API documentation can be [found here](https://app.tuneuptechnology.com/docs/api).

## Development

```bash
# Lint project
npm run lint

# Run tests
npm run test

# Run coverage
npm run coverage
```

## Releasing

As a separate PR from the feature/bug PR:

1. Update the version string `client.js`
1. Update `CHANGELOG`
1. Create a GitHub tag with proper Node version semantics (eg: v1.0.0)
1. Publish the NPM package
