const express = require('express');
const mongodb = require('./utils/mongodb.connect');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongodb.connect();

const usersRoutes = require('./routes/routes');

app.use('/users', usersRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});