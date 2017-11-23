const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Team = require('../models/team');
const Player = require('../models/player');

const dbURI = 'mongodb://localhost/home';
mongoose.connect(dbURI, { useMongoClient: true });

// remove existing players
Team.collection.drop();
Player.collection.drop();

Team.create([
  { location: 'Philadelphia', name: 'Flyers', sport: 'Ice Hockey', arena: 'Wells Fargo Center' },
  { location: 'Toronto', name: 'Maple Leafs', sport: 'Ice Hockey', arena: 'Air Canada Center' },
  { location: 'Edmondon', name: 'Oilers', sport: 'Ice Hockey', arena: 'Rogers Arena' }
])
  .then(teams => {
    console.log(`${teams.length} teams created!`);

    return Player.create([{
      name: 'Claude Giroux',
      team: teams[0],
      position: 'Center',
      countryofbirth: 'Canada',
      age: 29,
      images: [{
        url: '/images/claude-giroux.jpg',
        caption: 'flyers hockey'
      },{
        url: 'http://l.yimg.com/bt/api/res/1.2/LsjGkVwY_X14awYxnGZniw/YXBwaWQ9eW5ld3NfbGVnbztpbD1wbGFuZTtxPTc1O3c9NjAw/http://media.zenfs.com/en/person/Ysports/claude-giroux-hockey-headshot-photo.jpg',
        caption: 'Claude Giroux Photo'
      }]
    },{
      name: 'Auston Matthews',
      team: teams[1],
      position: 'Center',
      countryofbirth: 'United States',
      age: 20,
      images: [{
        url: 'https://i.pinimg.com/236x/39/34/c1/3934c14407169e329a21404d7210e61a--hockey-pictures-toronto-maple-leafs.jpg',
        caption: 'leafs hockey'
      },{
        url: 'https://www.earnthenecklace.com/wp-content/uploads/2016/10/Auston-Matthews.jpg',
        caption: 'Auston Matthews Photo'
      }]
    },{
      name: 'Connor McDavid',
      team: teams[2],
      position: 'Center',
      countryofbirth: 'Canada',
      age: 20,
      images: [{
        url: 'http://wpmedia.edmontonjournal.com/2016/02/11714314.jpg?quality=55&strip=all&w=840&h=630&crop=1',
        caption: 'Oilers hockey'
      },{
        url: 'http://www.hockeydb.com/ihdb/photos/connor-mcdavid-2016-41.jpg',
        caption: 'Connor McDavid Photo'
      }]
    }]);
  })
  .then(players => console.log(`${players.length} players created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
