const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.TASK_M_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established sucessfully');
});
module.exports = mongoose;
