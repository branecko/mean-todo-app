var express = require('express');
var router = express.Router();

//setup mongo database
var mongojs = require('mongojs');
var db = mongojs('mongodb://<username>:<pwd>@ds145659.mlab.com:45659/meantodos', ['todos']); //uri, collection from db

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

// save todo
// POST on localhost:3000/api/v1/todo
router.post('/todo', function (req, res, next) {
   var todo = req.body;
   if(!todo.text || !(todo.isCompleted + '')){
       res.status(400);
       res.json({
           "error": "Invalid Data"
       });
   } else {
       db.todos.save(todo, function (err, result) {
           if(err){
               res.send(err);
           } else {
               res.json(result);
           }
       })
   }
});

//update todo api
router.put('/todo/:id', function (req, res, next) {
    var todo = req.body;
    var updObj = {};

    if(todo.isCompleted){
        updObj.isCompleted = todo.isCompleted;
    }

    if(todo.text){
        updObj.text = todo.text;
    }

    if(!updObj){
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.todos.update({
            _id: mongojs.ObjectId(req.params.id)
        }, updObj, {}, function (err, result) {
            if(err){
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
});

//delete todo API
router.delete('/todo/:id', function (req, res, next) {
    db.todos.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, '', function (err, result) {
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;
