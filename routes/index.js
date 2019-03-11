var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/login', function(req,res,next) {
    if(req.body.username==='professor' && req.body.password==='profpruthviraj'){
        res.redirect("https://10.100.82.195/");
    }
    else
    {
        res.render('index', { error :'Password is incorrect'});
    }

});

module.exports = router;
