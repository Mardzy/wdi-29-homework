const router = require('express').Router();
const markets = require('../controllers/markets');

router.route('/markets')
  .get(markets.index)
  .post(markets.create);

router.route('/markets/:id')
  .get(markets.show)
  .put(markets.update)
  .delete(markets.delete);

module.exports = router;
