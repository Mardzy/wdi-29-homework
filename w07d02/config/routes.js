const router = require('express').Router();

const darkSkies = require('../controllers/darkSkies');

router.get('/weather', darkSkies.proxy);

module.exports = router;
