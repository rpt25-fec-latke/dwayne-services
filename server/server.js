const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/database.js');
const utils = require('./utils.js');

const app = express();
const port = 3005;

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {

});

app.get('/metadata/', (req, res) => {
  console.log('reqbody', req.body);
  console.log('reqparams', req.params);
  console.log(req.query);
  db.getGame(1, (err, data) => {
    if (err) {
      console.error('Failed data retrieval', err);
      res.sendStatus(500);
    } else {
      const splitData = utils.splitData(data);
      console.log('app.get', splitData);

      res.send(splitData);
    }
  });
});

app.get('/metadata/:id', (req, res) => {
  console.log('reqbody', req.body);
  console.log('reqparams', req.params);
  console.log(req.query);
  db.getGame(req.params.id, (err, data) => {
    if (err) {
      console.error('Failed data retrieval', err);
      res.sendStatus(500);
    } else {
      const splitData = utils.splitData(data);
      console.log('app.get', splitData);
      res.send(splitData);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});