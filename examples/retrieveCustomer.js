const tuneuptechnology = require('tuneuptechnology')

const client = new tuneuptechnology.Client(process.env.API_EMAIL, process.env.API_KEY)

client.Customers.retrieve(23).then(console.log).catch(console.log)
