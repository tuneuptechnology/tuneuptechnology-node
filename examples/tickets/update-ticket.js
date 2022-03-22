const tuneuptechnology = require('tuneuptechnology');

const client = new tuneuptechnology.client(process.env.API_EMAIL, process.env.API_KEY);

const data = {
  customer_id: 1,
  ticket_type_id: 1,
  serial: '10000',
  user_id: 1,
  notes: 'here are some notes',
  title: 'Fancy Title',
  status: 1,
  device: '2',
  imei: 10000,
  location_id: 1,
};

client.tickets.update(23, data).then(console.log).catch(console.log);
