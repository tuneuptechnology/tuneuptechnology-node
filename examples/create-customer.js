const tuneuptechnology = require('tuneuptechnology')

const data = {
    auth: process.env.API_EMAIL,
    api_key: process.env.API_KEY,
    firstname: 'Jake',
    lastname: 'Peralta',
    email: 'jake@example.com',
    phone: '8015551234',
    user_id: 1,
    notes: 'Believes he is a good detective.',
    location_id: 1
}

tuneuptechnology.Customer.create(data).then(console.log).catch(console.log)
