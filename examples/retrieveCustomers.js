const tuneuptechnology = require('tuneuptechnology')

const client = new tuneuptechnology.Client(process.env.API_EMAIL, process.env.API_KEY)

client.Customers.all().then(console.log).catch(console.log)
