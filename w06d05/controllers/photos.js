const Photo = require('../models/photo');

function indexRoute(req, res, next) {
  Photo
    .find()
    .populate('country')
    .exec()
    .then((photos) => res.json(photos))
    .catch(next);
}

function createRoute(req, res, next) {
  Photo
    .create(req.body)
    .then((photo) => res.status(201).json(photo))
    .catch(next);
}

function showRoute(req, res, next) {
  Photo
    .findById(req.params.id)
    .populate('country')
    .exec()
    .then((photo) => {
      if(!photo) return res.notFound();

      res.json(photo);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Photo
    .findById(req.params.id)
    .exec()
    .then((photo) => {
      if(!photo) return res.notFound();

      Object.assign(photo, req.body);
      return photo.save();
    })
    .then((photo) => res.json(photo))
    .catch(next);
}

function deleteRoute(req, res, next) {
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
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
