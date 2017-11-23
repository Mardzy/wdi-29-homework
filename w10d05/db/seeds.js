const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');

const User = require('../models/user');
const Photo = require('../models/photo');

mongoose.connect(dbURI, { useMongoClient: true })
  .then(() => {
    User.collection.drop();
    Photo.collection.drop();

    return User
      .create([{
        username: 'Paul',
        email: 'mardlingp@gmail.com',
        password: 'password',
        passwordConfirmation: 'password'
      }, {
        username: 'Bob',
        email: 'bob@bob.com',
        password: 'password',
        passwordConfirmation: 'password'
      }]);
  })
  .then(users => {
    console.log(`${users.length} users created.`);
    return Photo
      .create([{
        image: 'https://i.imgur.com/rOGhUh7.jpg',
        description: 'Family with Donkey',
        location: 'Namibia',
        camera: 'Nikon D3000',
        user: users[1]
      },
      {
        image: 'https://i.imgur.com/mkUu3KV.jpg',
        description: 'Zebras',
        location: 'South Africa',
        camera: 'Nikon D3000',
        user: users[1]
      },
      {
        image: 'https://i.imgur.com/tUGzhwx.jpg',
        description: 'Looking down to the canyon',
        location: 'Fish River Canyon',
        camera: 'Motorola Nexus 6',
        user: users[0]
      },
      {
        image: 'https://i.imgur.com/xg747xq.jpg',
        description: 'Having a Drink',
        location: 'Etosha National Park',
        camera: 'Nikon D3000',
        user: users[1]
      },
      {
        image: 'https://i.imgur.com/IzPEisV.jpg',
        description: 'lunch on the road',
        location: 'South Africa',
        camera: 'Nikon D3000',
        user: users[1]
      },
      {
        image: 'https://i.imgur.com/8EBLqfA.jpg',
        description: 'Long horizon',
        location: 'Etosha Pan',
        camera: 'Nexus 6',
        user: users[0]
      },
      {
        image: 'https://i.imgur.com/iW041xF.jpg',
        description: 'hanging out with elephants',
        location: 'Twyfylfontaine',
        camera: 'Nexus 6',
        user: users[0]
      }])
      .then(photos => console.log(`${photos.length} photos created`));
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
