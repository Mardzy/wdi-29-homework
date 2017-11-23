const Work = require('../models/work');
const Composer = require('../models/composer');

function worksIndex(req, res) {
  Work
    .find()
    .populate('composer')
    .exec()
    .then((works) => {
      res.render('works/index', { works });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function worksShow(req, res) {
  Work
    .findById(req.params.id)
    .populate('composer')
    .exec()
    .then((work) => {
      if(!work) return res.status(404).send('Not found');
      res.render('works/show', { work });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function worksNew(req, res) {
  Composer
    .find()
    .exec()
    .then((composers) => {
      res.render('works/new', { composers });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function worksCreate(req, res) {
  Work
    .create(req.body)
    .then(() => {
      res.redirect('/works');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function worksEdit(req, res) {
  Work
    .findById(req.params.id)
    .populate('composer')
    .exec()
    .then((work) => {
      if(!work) return res.status(404).send('Not found');
      return Composer
        .find()
        .exec()
        .then((composers) => {
          res.render('works/edit', { work, composers });
        });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function worksUpdate(req, res) {
  Work
    .findById(req.params.id)
    .exec()
    .then((work) => {
      if(!work) return res.status(404).send('Not found');

      work = Object.assign(work, req.body);
      return work.save();
    })
    .then((work) => {
      res.redirect(`/works/${work.id}`);
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function worksDelete(req, res) {
  Work
    .findById(req.params.id)
    .exec()
    .then((work) => {
      if(!work) return res.status(404).send('Not found');

      return work.remove();
    })
    .then(() => {
      res.redirect('/works');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

module.exports = {
  index: worksIndex,
  show: worksShow,
  new: worksNew,
  create: worksCreate,
  edit: worksEdit,
  update: worksUpdate,
  delete: worksDelete
};
