const Country = require('../models/country');

function indexRoute(req, res, next) {
  Country
    .find()
    .exec()
    .then((countries) => res.json(countries))
    .catch(next);
}

function createRoute(req, res, next) {
  Country
    .create(req.body)
    .then((country) => res.status(201).json(country))
    .catch(next);
}

function showRoute(req, res, next) {
  Country
    .findById(req.params.id)
    .exec()
    .then((country) => {
      if(!country) return res.notFound();
      res.json(country);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Country
    .findById(req.params.id)
    .exec()
    .then((country) => {
      if(!country) return res.notFound();

      for(const field in req.body) {
        country[field] = req.body[field];
      }

      return country.save();
    })
    .then((country) => res.json(country))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Country
    .findById(req.params.id)
    .then((country) => {
      if(!country) return res.notFound();
      return country.remove();
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
