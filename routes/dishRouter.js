var express = require('express');
var bodyParser = require('body-parser');
var Dishes = require('../models/dishes');
var Verify = require('./verify');

var dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all(function(req,res,next) {
        next();
    })

    .get(Verify.verifyOrdinaryUser, Verify.verifyAdminUser, function(req,res,next) {
        console.log('dishes');
        Dishes.find(function(err, data) {
            if (err) throw err;
            res.json(data);
        });
    })

    .post(Verify.verifyOrdinaryUser, function(req, res, next) {
        var dish = new Dishes(req.body);

        dish.save(function(err, dish) {
            if (err) throw err;
            res.json(dish);
        });
    })

    .delete(Verify.verifyOrdinaryUser, function(req, res, next) {
        Dishes.deleteMany(function(err, data) {
            if (err) throw err;
            res.json(data);
        });
    });

dishRouter.route('/:dishId')
    .all(function(req, res, next) {
        next();
    })

    .get(function(req, res, next) {
        Dishes.find({_id: req.params.dishId}, function(err, dish) {
            if (err) throw err;
            res.json(dish);
        });
    })

    .put(function(req, res, next) {
        Dishes.findOneAndUpdate({_id: req.params.dishId}, {name: req.body.name}, function(err, dish) {
            if (err) throw err;
            res.json(dish);
        });
    })

    .delete(function(req, res, next) {
        Dishes.deleteOne({_id: req.params.dishId}, function(err, dish) {
            if (err) throw err;
            res.json(dish);
        });
    });

module.exports = dishRouter;