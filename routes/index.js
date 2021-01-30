var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

let url = "https://api.wazirx.com/api/v2/tickers";

let settings = { method: "Get" };

/* GET home page. */
router.get('/', function(req, res, next) {
  fetch(url, settings)
  .then(result => result.json())
  .then((json) => {
    // console.log(json);
    let arr = [];
    for (const key in json) {
      arr.push(json[key]);
    }
    arr = arr.slice(0, 10);
    // console.log(arr);
    res.render('index', { title: 'Express', arr: arr });
    // res.write(JSON.stringify(arr.slice(0, 10)));
  })
  .catch(error => {
    console.log(error);
    res.render('error', { message: "Error", error: error })
  });
});

module.exports = router;
