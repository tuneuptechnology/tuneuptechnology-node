const tuneuptechnology = require('tuneuptechnology');

const client = new tuneuptechnology.client(process.env.API_EMAIL, process.env.API_KEY);

const data = {
  name: 'Inventory Item',
  inventory_type_id: 1,
  part_number: '1234',
  sku: '1234',
  notes: 'here are some notes',
  part_price: 19.99,
  location_id: 1,
  quantity: 1,
};

client.inventory.create(data).then(console.log).catch(console.log);
