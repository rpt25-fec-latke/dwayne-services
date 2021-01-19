const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/database')

const app = express();
const port = 3001;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  db.getGame((err, data) => {
    if (err) {
      console.error('Failed data retrieval', data);
      res.sendStatus(500);
    } else {
      console.log(data);
      res.status(200);
      res.send(data)
    }
  })
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});