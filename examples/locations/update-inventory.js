const tuneuptechnology = require('tuneuptechnology');

const client = new tuneuptechnology.client(process.env.API_EMAIL, process.env.API_KEY);

const data = {
  name: 'Location Name',
  street: '123 California Ave',
  city: 'Salt Lake',
  state: 'UT',
  zip: 84043,
};

client.locations.update(23, data).then(console.log).catch(console.log);
