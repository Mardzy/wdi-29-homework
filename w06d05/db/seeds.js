const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Photo = require('../models/photo');
const Country = require('../models/country');

mongoose.connect(dbURI);

Photo.collection.drop();
Country.collection.drop();

Country
  .create([{
    name: 'Botswana'
  } ,{
    name: 'Nambia'
  },{
    name: 'South Africa'
  },{
    name: 'Zimbabwe'
  }])
  .then((countries) => {
    console.log(`${countries.length} countries created`);

    Photo
      .create([{
        country: countries[1],
        location: 'Sossusvlei',
        description: 'Big Daddy, largest dune in the area.',
        image: 'images/big-daddy.JPG'
      },{
        country: countries[1],
        location: 'Kgalagadi Transfronteir Park',
        description: 'A young couple in love.',
        image: 'images/lions.jpg'
      },{
        country: countries[2],
        location: 'Sossusvlei',
        description: 'A decent ride.',
        image: 'images/red-dunes-fortuna.jpg'
      },{
        country: countries[2],
        location: 'Mariner\'s Wharf',
        description: 'Abandoned ship.',
        image: 'images/mariners-wharf.jpg'
      },{
        country: countries[1],
        location: 'Twyfelfontaine',
        description: 'Rock carvings.',
        image: 'images/rock-carvings.jpg'
      },{
        country: countries[2],
        location: 'Simon\'s Town ',
        description: 'Looking out into the bay.',
        image: 'images/simons-town.jpg'
      },{
        country: countries[1],
        location: 'Tyfelfontaine',
        description: 'Out for a morning stroll.',
        image: 'images/twyfelfontaine.JPG'
      },{
        country: countries[3],
        location: 'Victoria Falls',
        description: 'A look into the falls.',
        image: 'images/vic-falls2.jpg'
      },{
        country: countries[2],
        location: 'Richtersveld',
        description: 'Not too many trees in the area.',
        image: 'images/richtersveld.jpg'
      },{
        country: countries[2],
        location: 'Boulder\'s Beach',
        description: 'Penguin colony.',
        image: 'images/boulders-beach.jpg'
      },{
        country: countries[1],
        location: 'Cape Cross',
        description: 'Seal colony.',
        image: 'images/cape-cross-seals.jpg'
      },{
        country: countries[0],
        location: 'Chobe National Park',
        description: 'Having a drink.',
        image: 'images/elephants.jpg'
      }])
      .then(photos => console.log(`${photos.length} photos created!`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close());
  });
