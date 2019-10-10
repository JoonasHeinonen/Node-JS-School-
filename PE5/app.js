"use script"

const express = require("express");
const layouts = require("express-ejs-layouts");

const port = 3000;
const app = express();

const homeController = require('./controllers/homeController.js');

app.set("port", process.env.PORT || port);
app.set("view engine", "ejs");


// app.use(layouts);

app.get("/name", 
    homeController.respondWithName);

app.listen(port, () => {
    console.log(`Server running on port ${ port }...`);
});