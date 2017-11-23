const StreetArt = require('../models/streetart');
const StreetArtist = require('../models/streetartist');


function streetArtsIndex(req, res) {
  StreetArt
    .find()
    .populate('streetArtist')
    .exec()
    .then(streetArts => {
      res.render('streetart/index', { streetArts });
    })
    .catch(err => res.render('error', { err }));
}

function streetArtsShow(req, res) {
  StreetArt
    .findById(req.params.id)
    .populate('streetArtist')
    .exec()
    .then(streetArts => res.render('streetart/show', { streetArts }))
    .catch(err => res.render('error', { err }));
}

function streetArtistsNew(req, res) {
  StreetArtist
    .find()
    .exec()
    .then((streetArtists) => {
      res.render('works/new', { streetArtists });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
  res.render('streetart/new');
}

function streetArtsCreate(req, res) {
  StreetArt
    .create(req.body)
    .then(() => res.redirect('/streetart'))
    .catch(err => res.render('error', { err }));
}

function streetArtsEdit(req, res) {
  StreetArt
    .findById(req.params.id)
    .populate('streetArtist')
    .exec()
    .then((streetArt) => {
      if(!streetArt) return res.status(404).send('Not found');
      return StreetArtist
        .find()
        .exec()
        .then((streetArtist) => {
          res.render('streetart/edit', { streetArt, streetArtist });
        });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function streetArtsUpdate(req, res) {
  StreetArt
    .findById(req.params.id)
    .exec()
    .then(streetArts => {
      streetArts = Object.assign(streetArts, req.body);
      return streetArts.save();
    })
    .then(streetArt => res.redirect(`/streetart/${streetArt.id}`))
    .catch(err => res.render('error', { err }));
}

function streetArtsDelete(req, res) {
  StreetArt
    .findById(req.params.id)
    .exec()
    .then(streetArts => streetArts.remove())
    .then(() => res.redirect('/streetart'))
    .catch(err => res.render('error', { err }));
}

module.exports = {
  index: streetArtsIndex,
  show: streetArtsShow,
  new: streetArtistsNew,
  create: streetArtsCreate,
  edit: streetArtsEdit,
  update: streetArtsUpdate,
  delete: streetArtsDelete
};
