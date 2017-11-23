const router = require('express').Router();
const photos = require('../controllers/photos');
const countries = require('../controllers/countries');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/photos')
  .all(secureRoute)
  .get(photos.index)
  .post(photos.create);

router.route('/photos/:id')
  .all(secureRoute)
  .get(photos.show)
  .put(photos.update)
  .delete(photos.delete);

router.route('/countries')
  .all(secureRoute)
  .get(countries.index)
  .post(countries.create);

router.route('/countries/:id')
  .all(secureRoute)
  .get(countries.show)
  .put(countries.update)
  .delete(countries.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
