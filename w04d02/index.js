const express = require('express');
const app = express();

const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const dbURI = 'mongodb://localhost/home';
mongoose.connect(dbURI, {useMongoClient: true});

//settings
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

//middleware
app.use(expressLayouts);
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));

const Team = require('./models/team');
const Player = require('./models/player');

//request handlers
app.get('/',(req, res) => {
  res.render('home');
});

app.get('/teams',(req, res) => {
  Team
    .find()
    .exec()
    .then(teams => res.render('teams', { teams }))
    .catch(err => res.send(err));
});

app.get('/players',(req, res) => {
  Player
    .find()
    .populate('team')
    .exec()
    .then(players => res.render('players', { players }))
    .catch(err => res.send(err));
});

app.listen(3000, () => console.log('Listening to port 3000'));
