const tuneuptechnology = require('tuneuptechnology')

const data = {
    auth: process.env.API_EMAIL,
    api_key: process.env.API_KEY,
    id: 23 // The ID of the customer you are deleting
}

tuneuptechnology.Customer.delete(data).then(console.log).catch(console.log)
