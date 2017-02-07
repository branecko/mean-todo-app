var express = require('express');
var router = express.Router();

//setup mongo database
var mongojs = require('mongojs');
var db = mongojs('mongodb://brano:brano@ds145659.mlab.com:45659/meantodos', ['todos']); //uri, collection from db

//get collection Todos from db
//can be called with localhost:3000/api/v1/todos
router.get('/todos', function (req, res, next) {
    db.todos.find(function (err, todos) {
        if(err){
          res.send(err);
        } else {
          res.json(todos);
        }
    })
});

//get single todo
//can be called with localhost:3000/api/v1/todo/<id-copied-from-db>
router.get('/todo/:id', function (req, res, next) {
    db.todos.findOne({
        _id: mongojs.ObjectId(req.params.id)
    },function (err, todos) {
        if(err){
            res.send(err);
        } else {
            res.json(todos);
        }
    })
});

module.exports = router;
