const tuneuptechnology = require('tuneuptechnology')

const data = {
    auth: process.env.API_EMAIL,
    api_key: process.env.API_KEY,
}

tuneuptechnology.Customer.all(data).then(console.log).catch(console.log)
