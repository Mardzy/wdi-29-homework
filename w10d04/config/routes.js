const router = require('express').Router();
const cheesesController = require('../controllers/cheeses');
const countriesController = require('../controllers/countries');

router.route('/cheeses')
  .get(cheesesController.index)
  .post(cheesesController.create);

router.route('/cheeses/:id')
  .get(cheesesController.show)
  .put(cheesesController.update)
  .delete(cheesesController.delete);

router.route('/countries')
  .get(countriesController.index)
  .post(countriesController.create);

router.route('/countries/:id')
  .get(countriesController.show)
  .put(countriesController.update)
  .delete(countriesController.delete);

router.all('*', (req, res) => res.notFound());

module.exports = router;
