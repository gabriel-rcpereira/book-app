const express = require('express');
const bodyParser = require('body-parser')
// const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookapp')
  .catch(err => {
    console.log(err)
  });

const app = express();
// app.use(cors());
app.use(bodyParser.json());

require('./entrypoints/rest/bookRouter')(app);

const PORT = 5000;
app.listen(PORT);