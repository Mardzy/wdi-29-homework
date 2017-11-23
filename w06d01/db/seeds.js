const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const env = require('../config/env');

mongoose.connect(env.db);

const Property = require('../models/property');
Property.collection.drop();

Property
  .create([{
    address: 'St Paul Street, Islington N1',
    bedrooms: 3,
    bathrooms: 2,
    image: 'images/prop1.jpg',
    askingPrice: 1599995
  },{
    address: '142 Blackfriars Road, London SE1',
    bedrooms: 3,
    bathrooms: 2,
    image: 'images/prop2.jpg',
    askingPrice: 1140500
  },{
    address: 'Lower Thames Street, London EC3R',
    bedrooms: 2,
    bathrooms: 2,
    image: 'images/prop3.jpg',
    askingPrice: 1566000
  },{
    address: 'Whitehall Court, London SW1A',
    bedrooms: 2,
    bathrooms: 2,
    image: 'images/prop4.jpg',
    askingPrice: 2450000
  },{
    address: 'Leinster Square, London W2',
    bedrooms: 3,
    bathrooms: 3,
    image: 'images/prop5.jpg',
    askingPrice: 3950000
  }])
  .then((properties) => console.log(`${properties.length} properties created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
