const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/recipe_db', {
    useNewUrlParser: true}
);

const db = mongoose.connection;

db.once('open', () => {
    console.log('Yhteys MongoDB-tietokantaan toimii!')
});

const subscriberSchema = mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number,
    vip: Boolean
});

const Subscriber = 
    mongoose.model('Subscriber', subscriberSchema);

const s1 = new Subscriber({
    name: 'Keke Rosberg',
    email: 'keke@f1.com',
    zipCode: 99999,
    vip: true
});

s1.save((error, savedDocument) => {
    if (error) throw error;
    console.log(savedDocument);
});

Subscriber.create({
    name: "Lauri Markkanen",
    email: "lauri@markkanen.fi",
    zipCode: 66336,
    vip: false
}, (error, savedDocument) => {
    if (error) throw error;
    console.log(savedDocument);
});