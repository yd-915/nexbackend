const express = require('express');
const app = express();
const { PORT} = require('./server/config/config');
const auth = require('./server/middlewares/auth')
const routes = require('./server/routes');
const router = require('express').Router();
const path = require("path")
const http = require('http').createServer(app);
require("dotenv").config();
require('./server/config/express')(app);
require('./server/config/mongoose');
app.use(auth())



app.use(routes);
app.listen(PORT, () => console.log(`Server is active at https://notexchange.shop/${PORT}...`));
// app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
