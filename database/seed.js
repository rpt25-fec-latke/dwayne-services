const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/metadata', { useNewUrlParser: true, useUnifiedTopology: true });

// create our metadata Schema
const metaSchema = new mongoose.Schema({
  gameId: Number,
  singlePlayer: Boolean,
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
});

// Create our metadata model
// Models are constructors compiled from Schemas. An instance of a model is called a document
const metaModel = mongoose.model('metaModel', metaSchema);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
// let languageArray = () => {
  //     let array = ['Spanish', 'French', 'Chinese', 'German'];
  //     let results = [];
  //     for (let i = 0; i < Math.floor(Math.random() * 81)) {
  //         if (faker.random.boolean()) {
  //             results.push ()
  //         }
  //     }
  // }

  const getRating = function () {
    const rating = ['E', 'T', 'M', 'A'];
    const index = Math.floor(Math.random() * 4);
    return rating[index];
  };

  (function () {
    for (let i = 0; i < 100; i++) {
      const metaDocument = new metaModel({
        gameId: i + 1,
        singlePlayer: faker.random.boolean(),
        onlineCoop: faker.random.boolean(),
        lanCoop: faker.random.boolean(),
        steamCloud: faker.random.boolean(),
        EULAnotice: faker.random.boolean(),
        languages: ['English', true, true, true],
        rating: getRating(),
        gameTitle: faker.commerce.productName(),
        gameGenre: faker.lorem.word(),
        developer: faker.company.companyName(),
        publisher: faker.company.companyName(),
        franchise: faker.company.companyName(),
        releaseDate: faker.date.between('2012-01-17', '2021-01-17'),
      });
      metaDocument.save((err) => {
        if (err) return handleError(err);
      });
    }
    console.log('Database populated');
  }());
});
