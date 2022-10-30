var express = require('express');
const app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// app.listen(8000, () => {
// 	console.log("Server started at port 8000");
// });

module.exports = router;
