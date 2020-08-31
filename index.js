const express = require('express');
const cors = require('cors');
require('dotenv').config();

require('./src/db/mongoose');

const app = express();
const port = process.env.PORT;

const taskRouter = require('./src/routes/task');

app.use(cors());

app.use(express.json());
app.use(taskRouter);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});