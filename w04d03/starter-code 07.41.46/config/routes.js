const router = express.Router();
const works = require('../controllers/works');

// A home route
router.get('/', (req, res) => res.render('home'));

// RESTful routes for the Work resource
// All URLS should contain /works

router.route('/works')
    .get(works.index)
    .post(works.create);

router.route('/works/new')
    .get(works.new);

router.route('/works/:id')
    .get(works.show)
    .put(works.update)
    .delete(works.delete);

router.route('/works/:id/edit')
    .get(works.edit);

module.exports = router;