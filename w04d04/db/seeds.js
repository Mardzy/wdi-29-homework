const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const StreetArtist = require('../models/streetartist');
const StreetArt = require('../models/streetart');

const dbURI = 'mongodb://localhost/streetart';
mongoose.connect(dbURI, { useMongoClient: true });

StreetArtist.collection.drop();
StreetArt.collection.drop();

StreetArtist.create([
  {name: 'Banksy', nationality: 'British'}, {name: 'David de Brito', nationality: 'Brazilian'},{name: 'Jimmy C', nationality: 'British'}, {name: 'Wuskerski', nationality: '?'}
])
  .then(streetArtists => {
    console.log(`${streetArtists.length} street artists created`);

    return StreetArt.create([{
      name: streetArtists[1],
      images: [{
        url: '/images/de-brito.png',
        caption: 'Banksy photo'
      },{
        url: '/images/de-brito-2.png',
        caption: 'Debrito photo'
      }], comment: [{ text: ';P!', rating: 4}]
    }, {
      name: streetArtists[2],
      images: [{
        url: '/images/jimmy-c.png',
        caption: 'Jimmy C photo'
      },{
        url: '/images/jimmy-c-2.png',
        caption: 'Jimmy C photo'
      }], comment: [{ text: 'Nice!', rating: 5}]
    },{
      name: streetArtists[0],
      images: [{
        url: '/images/banksy.png',
        caption: 'Banksy photo'
      },{
        url: '/images/banksy-2.png',
        caption: 'Banksy photo'
      }], comment: [{ text: 'Go there!', rating: 5}]
    },{
      name: streetArtists[3],
      images: [{
        url: '/images/wuskerski.png',
        caption: 'Wuskerski photo'
      },{
        url: '/images/wuskerski-2.png',
        caption: 'Wuskerski photo'
      }], comment: [{ text: 'Go there!', rating: 5}]
    }]);
  })

  .then(streetArts => console.log(`${streetArts.length} works of art created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
