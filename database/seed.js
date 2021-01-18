const mongoose = require('mongoose');
const faker = require('faker');

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
const metaModel = mongoose.model('metaModel', metaSchema);

// let languageArray = () => {
//     let array = ['Spanish', 'French', 'Chinese', 'German'];
//     let results = [];
//     for (let i = 0; i < Math.floor(Math.random() * 81)) {
//         if (faker.random.boolean()) {
//             results.push ()
//         }
//     }
// }

// let earlyAccess = () => {
//     let chance = Math.floor(Math.random() * 100 + 1);
//     if (chance > 3) {
//         return ;
//     } else {
//         return faker.date.soon();
//     }
// }

(function () {
    for (let i = 0; i < 100; i++) {
        let metaDocument = new metaModel({
            gameId: i + 1,
            numPlayers: Math.floor(Math.random() * 2 + 1),
            onlineCoop: faker.random.boolean(),
            lanCoop: faker.random.boolean(),
            steamCloud: faker.random.boolean(),
            EULAnotice: faker.random.boolean(),
            languages: ['English', true, true, true],
            rating: parseFloat((Math.floor(Math.random() * 35 + 1) / 10).toFixed(1)) + parseFloat(1.5),
            gameTitle: faker.commerce.productName(),
            gameGenre: faker.lorem.word(),
            developer: faker.company.companyName(),
            publisher: faker.company.companyName(),
            franchise: faker.company.companyName(),
            releaseDate: faker.date.between('2012-01-17', '2021-01-17')
        });
        metaDocument.save(function (err) {
            if (err) return handleError(err);
        });
    }
})();
