var express = require('express');
var router = express.Router();

//setup mongo database
var mongojs = require('mongojs');
var db = mongojs('mongodb://<dbuser>:<dbpassword>@ds145659.mlab.com:45659/meantodos', ['todos']); //uri, collection from db

//get collection from db
router.get('/todos', function (req, res, next) {
    db.todos.find(function (err, todos) {
        if(err){
          res.send(err);
        } else {
          res.json(todos);
        }
    })
});

module.exports = router;
