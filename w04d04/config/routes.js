const router = require('express').Router();
const streetArts = require('../controllers/streetarts');

router.get('/', (req, res) => res.render('home'));

router.route('/streetart')
  .get(streetArts.index)
  .post(streetArts.create);

router.get('/streetart/new', streetArts.new);

router.route('/streetart/:id')
  .get(streetArts.show)
  .put(streetArts.update)
  .delete(streetArts.delete);

router.get('/streetart/:id/edit', streetArts.edit);

module.exports = router;
