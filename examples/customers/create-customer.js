const tuneuptechnology = require('tuneuptechnology');

const client = new tuneuptechnology.client(process.env.API_EMAIL, process.env.API_KEY);

const data = {
  firstname: 'Jake',
  lastname: 'Peralta',
  email: 'jake@example.com',
  phone: '8015551234',
  user_id: 1,
  notes: 'Believes he is a good detective.',
  location_id: 1,
};

client.customers.create(data).then(console.log).catch(console.log);
