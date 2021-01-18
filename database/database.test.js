const db = require('./database');

db.connect('mongodb://localhost/metadata', {useNewUrlParser: true, useUnifiedTopology: true});

test('database is properly conected', () => {
    expect(db.connection.readyState).toEqual(1)
})