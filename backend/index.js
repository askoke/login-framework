import express from 'express';
const app = express();
import mongodb from require('./utils/mongodb.connect');

mongodb.connect();

app.use(express.json());
app.use('/login', require('./routes/login.route'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});