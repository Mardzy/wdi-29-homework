const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Market = require('../models/market');

mongoose.connect(dbURI, { useMongoClient: true });

Market.collection.drop();

Market.create([{

  name: 'Kerb Camden Market',
  who: '34 Traders',
  when: 'MON-THURS 11-6 FRI-SUN 11-7',
  where: 'Camden Lock Pl, London NW1 8AF',
  rating: '4.5',
  latitude: 51.541142,
  longitude: -0.146321,
  image: '/images/kerb-camden.jpg'
}, {
  name: 'Kerb Gherkin',
  who: '8 Traders',
  when: 'THURS 11:30-2',
  where: '30 ST Mary Ave, EC3A',
  rating: '4.5',
  latitude: 51.514493,
  longitude: -0.080337,
  image: '/images/kerb-gherkin.jpg'
}, {
  name: 'Kerb King\'s Cross',
  who: '8 Traders',
  when: 'WED-FRI 12-2',
  where: 'Granary Square, NC1',
  rating: '4.3',
  latitude: 51.535581,
  longitude: -0.125789,
  image: '/images/kerb-kcross.jpg'
}, {
  name: 'Kerb London Bridge',
  who: '7 Traders',
  when: 'WED-FRI 12-2',
  where: 'English Grounds, London, SE1',
  rating: '5',
  latitude: 51.505513,
  longitude: -0.082794,
  image: '/images/kerb-lbridge.jpg'
}, {
  name: 'Kerb Paddington',
  who: '12 Traders',
  when: 'TUES-FRI 12-2',
  where: 'Sheldon Square, Paddington Central, W2',
  rating: '5',
  latitude: 51.519432,
  longitude: -0.180080,
  image: '/images/kerb-padd.jpg'
}, {
  name: 'Kerb West India Quays',
  who: '12 Traders',
  when: 'TUES-FRI 11:30-2',
  where: 'West India Quay, E14',
  rating: '4.4',
  latitude: 51.507213,
  longitude: -0.022780,
  image: '/images/kerb-wiq.jpg'
}])
  .then(markets => console.log(`${markets.length} markets created!`))
  .catch(err => console.log(err))
  .finally(mongoose.connection.close());
