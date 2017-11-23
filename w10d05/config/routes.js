const router = require('express').Router();
const photos = require('../controllers/photos');
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/photos')
  .get(photos.index)
  .post(secureRoute, photos.create);

router.route('/photos/:id')
  .get(photos.show)
  .put(secureRoute, photos.update)
  .delete(photos.delete);

router.route('/users')
  .get(users.index);
//   .post(users.create);
//
router.route('/users/:id')
  .get(users.show);
//   .put(users.update)
//   .delete(users.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.status(400).send('NOT FOUND'));

module.exports = router;
