const Cheese = require('../models/cheese');

function indexRoute(req, res, next) {
  Cheese
    .find()
    .populate('country')
    .exec()
    .then((cheeses) => res.json(cheeses))
    .catch(next);
}

function createRoute(req, res, next) {
  Cheese
    .create(req.body)
    .then((cheese) => res.status(201).json(cheese))
    .catch(next);
}

function showRoute(req, res, next) {
  Cheese
    .findById(req.params.id)
    .populate('country')
    .exec()
    .then((cheese) => {
      if(!cheese) return res.notFound();
      res.json(cheese);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Cheese
    .findById(req.params.id)
    .exec()
    .then((cheese) => {
      if(!cheese) return res.notFound();

      for(const field in req.body) {
        cheese[field] = req.body[field];
      }

      return cheese.save();
    })
    .then((cheese) => res.json(cheese))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Cheese
    .findById(req.params.id)
    .then((cheese) => {
      if(!cheese) return res.notFound();
      return cheese.remove();
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
