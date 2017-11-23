const Property = require('../models/property');

function propertiesIndex(req, res) {
  Property
    .find()
    .exec()
    .then(properties => res.status(200).json(properties))
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

function propertiesCreate(req, res) {
  Property
    .create(req.body)
    .then(property => res.status(201).json(property))
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

function propertiesShow(req, res) {
  Property
    .findById(req.params.id)
    .exec()
    .then(property => {
      if(!property) return res.status(401).json({ message: 'No property found'});
      res.json(property);
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

function propertiesUpdate(req, res) {
  Property
    .findById(req.params.id)
    .then(property => {
      if(!property) return res.status(401).json({ message: 'No property found'});

      for(const field in req.body) {
        property[field] = req.body[field];
      }

      return property.save();
    })
    .then(property => res.json(property))
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

function propertiesDelete(req, res) {
  Property
    .findById(req.params.id)
    .then(property => {
      if(!property) return res.status(401).json({ message: 'No property found'});
      return property.remove();
    })
    .then(() => res.status(204).end())
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

module.exports = {
  index: propertiesIndex,
  create: propertiesCreate,
  show: propertiesShow,
  update: propertiesUpdate,
  delete: propertiesDelete
};
