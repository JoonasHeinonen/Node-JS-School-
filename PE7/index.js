const MongoDB = require("mongodb").MongoClient;
const dbURL = "mongodb://localhost:27017";
const dbName = "recipe_db";

MongoDB.connect(dbURL, (err, client) => {
    if (err) throw err;
    let db = client.db(dbName);
    db.collection('contacts')
    .find().toArray((err, data) => {
        if (err) throw err;
        console.log(data);
    });
});