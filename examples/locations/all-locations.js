const tuneuptechnology = require('tuneuptechnology');

const client = new tuneuptechnology.client(process.env.API_EMAIL, process.env.API_KEY);

client.locations.all().then(console.log).catch(console.log);
