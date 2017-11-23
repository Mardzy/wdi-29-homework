const Market = require('../models/market');

function marketIndex(req, res){
  Market
    .find()
    .exec()
    .then(markets => res.json(markets))
    .catch(err => res.status(500).json(err));
}

function marketCreate(req, res){
  console.log(req.body);
  Market
    .create(req.body)
    .then(market => res.status(201).json(market))
    .catch(err => res.status(500).json(err));
}

function marketShow(req, res){
  Market
    .findById(req.params.id)
    .exec()
    .then(market => res.json(market))
    .catch(err => res.status(500).json(err));
}

function marketUpdate(req, res){
  Market
    .findById(req.params.id)
    .exec()
    .then(market => {
      market = Object.assign(market, req.body);
      return market.save();
    })
    .then(market => res.json(market))
    .catch(err => res.status(500).json(err));
}

function marketDelete(req, res) {
  Market
    .findById(req.params.id)
    .exec()
    .then(market => market.remove())
    .then(() => res.status(204).json())
    .catch(err => res.status(500).json(err));
}

module.exports = {
  index: marketIndex,
  show: marketShow,
  create: marketCreate,
  update: marketUpdate,
  delete: marketDelete
};
