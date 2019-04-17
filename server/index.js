//Require packages
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
require('dotenv').config();

const controller = require('./controller');
const { PORT, DB_CON } = process.env;
const app = express();

//Database
massive(DB_CON).then(dbInstance => {
    app.set('db', dbInstance);
}).catch(err => console.log(err));

//Endpoints

//Write a POST endpoint in MY OWN server for registering an account.
app.post('/api/auth/register', controller.register);

//Write a POST endpoint in MY OWN server for logging into a registered account.
app.post('api/auth/login', controller.login);

//Listen on my own server
app.listen(PORT, () => console.log(`Port ${PORT} see's all...`));