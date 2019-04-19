//Require packages
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const path = require("path");
require('dotenv').config({ path: path.join(__dirname, ".env") });

const controller = require('./controller');
const { PORT, DB_CON } = process.env;
const app = express();
app.use(bodyParser.json());

//Database
massive(DB_CON, { scripts: __dirname + "/db" })
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));;

//Endpoints

// //Write a POST endpoint in MY OWN server for registering an account.
// app.post('/api/auth/register', controller.register);

// //Write a POST endpoint in MY OWN server for logging into a registered account.
// app.post('api/auth/login', controller.login);

//add a product to My List
app.post('/api/products', controller.create);
//get all products in My List
app.get('/api/products', controller.getAll);
//get single product by id in My List
app.get('/api/products/:id', controller.getOne);
//update product in My List
app.put('/api/products/:id', controller.update);
//delete product from My List
app.delete('/api/products/:id', controller.delete);

//Listen on my own server
app.listen(PORT, () => console.log(`Port ${PORT} see's all...`));