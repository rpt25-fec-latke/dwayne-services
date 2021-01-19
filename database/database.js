const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/metadata', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {

});

//create our metadata Schema
const metaSchema = new mongoose.Schema({
  gameId: Number,
  numPlayers: Number,
  onlineCoop: Boolean,
  lanCoop: Boolean,
  steamCloud: Boolean,
  EULAnotice: Boolean,
  languages: Array,
  rating: String,
  gameTitle: String,
  gameGenre: String,
  developer: String,
  publisher: String,
  franchise: String,
  releaseDate: Date,
  earlyAccessDate: Date
})

// Create our metadata model
// Models are constructors compiled from Schemas. An instance of a model is called a document
const MetaModel = mongoose.model('MetaModel', metaSchema);

const getGame = (callback) => {
  MetaModel.findOne({}, function (err, metadata) {
    if (err) {
      console.log('Error fetching game metadata', err);
      callback(err);
    } else {
      console.log('Metadata', metadata)
      callback(null, metadata)
    }
  })
}

module.exports.db = db;
module.exports.getGame = getGame;