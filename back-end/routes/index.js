let express = require('express');
let app1 = express();
app1.disable("x-powered-by");

let helmet = require("helmet");
let app = express();
app.use(helmet.hidePoweredBy());
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
