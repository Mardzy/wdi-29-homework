const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const Work = require('../models/work');
const Composer = require('../models/composer');

Work.collection.drop();
Composer.collection.drop();

Composer.create([{
  firstname: 'Wolfgang',
  lastname: 'Motzart',
  compositions: 600,
  nationality: 'Austrian'
},{
  firstname: 'Johann',
  lastname: 'Bach',
  compositions: 1128,
  nationality: 'German'
},{
  firstname: 'Frédéric',
  lastname: 'Chopin',
  compositions: 230,
  nationality: 'Polish'
},{
  firstname: 'Pyotr',
  lastname: 'Tchaikovsky',
  compositions: 80,
  nationality: 'German'
}])
  .then((composers) =>{
    console.log(`${composers.length} composers created!`);

    return Work
      .create([{
        composition: 'Eine kleine Nachtmusik',
        composer: composers[0],
        style: 'string orchestra',
        datecreated: 1787
      },{
        composition: 'Cello Suite No. 1',
        composer: composers[0],
        style: 'cello solo',
        datecreated: 1720
      },{
        composition: 'Nocturne No. 20 in C-sharp minor',
        composer: composers[2],
        style: 'piano solo',
        datecreated: 1830
      },{
        composition: 'The Nutcracker',
        composer: composers[3],
        style: 'ballet orchestra',
        datecreated: 1892
      }]);
  })

  .then((works) => {
    console.log(`${works.length} works created!`);
  })

  .catch((err) => {
    console.log(err);
  })

  .finally(() => {
    mongoose.connection.close();
  });
