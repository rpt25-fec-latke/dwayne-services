const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/metadata', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {

});

const metadata = new mongoose.Schema({
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

// TODO: Fix this line below
// const GameData = mongoose.model('GameData', )

module.exports = db