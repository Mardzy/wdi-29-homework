const Photo = require('../models/photo');

function photosIndex(req, res, next) {
  Photo
    .find()
    .populate('user')
    .exec()
    .then( photos => res.json(photos))
    .catch(next);
}

function photosCreate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Photo
    .create(req.body)
    .then(photo => res.status(201).json(photo))
    .catch(next);
}

function photosShow(req, res, next) {
  console.log(req.params.id);

  Photo
    .findById(req.params.id)
    .populate('user')
    .exec()
    .then((photo) => {
      if(!photo) return res.notFound();
      res.json(photo);
    })
    .catch(next);
}

function photosUpdate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Photo
    .findById(req.params.id)
    .populate('user')
    .exec()
    .then((photo) => {
      if(!photo) return res.notFound();
      photo = Object.assign(photo, req.body);
      return photo.save();
    })
    .then(photo => res.json(photo))
    .catch(next);
}

function photosDelete(req, res, next) {
  Photo
    .findById(req.params.id)
    .exec()
    .then((photo) => {
      if(!photo) return res.notFound();
      return photo.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: photosIndex,
  create: photosCreate,
  show: photosShow,
  update: photosUpdate,
  delete: photosDelete
};
