const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/database.js')
const mongoose = require('mongoose');
const utils = require('./utils.js')

const app = express();
const port = 3001;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {

});

app.get('/metadata', (req, res) => {
  db.getGame((err, data) => {
    if (err) {
      // res.send(error)
      console.error('Failed data retrieval', data);
      res.sendStatus(500);
    } else {
      let splitData = utils.splitData(data);
      res.send(splitData);
    }
  }, res.body)
})

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});