var express = require('express');
var router = express.Router();
const app = express();
const port = 65535;

app.get('/api/hello', (req, res) => {
  res.json({status:200, message: 'Hello!'});
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
