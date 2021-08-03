const db = require('../server');
const { User } = require('../models');

db.once('open', async () => {

    await User.create({
        email: 'bwilson88101@gmail.com',
        password: 'password',
        date: "",
        favorites: []
    });
});