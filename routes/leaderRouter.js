var express = require('express');
var bodyParser = require('body-parser');
var Leaders = require('../models/leaders');
var Verify = require('./verify');

var leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all(function(req,res,next) {
        next();
    })

    .get(Verify.verifyOrdinaryUser, function(req,res,next) {
        Leaders.find(function(err, data) {
            if (err) throw err;
            res.json(data);
        });
    })

    .post(Verify.verifyAdminUser, function(req, res, next) {
        var leader = new Leaders(req.body);

        leader.save(function(err, leader) {
            if (err) throw err;
            res.json(leader);
        });
    })

    .delete(Verify.verifyAdminUser, function(req, res, next) {
        Leaders.deleteMany(function(err, data) {
            if (err) throw err;
            res.json(data);
        })
    });

leaderRouter.route('/:leaderId')
    .all(function(req,res,next) {
        next();
    })

    .get(Verify.verifyOrdinaryUser, function(req, res, next) {
        Leaders.find({_id: req.params.leaderId}, function(err, leader) {
            if (err) throw err;
            res.json(leader);
        });
    })

    .put(Verify.verifyAdminUser, function(req, res, next) {
        Leaders.findOneAndUpdate({_id: req.params.leaderId}, {name: req.body.name}, function(err, leader) {
            if (err) throw err;
            res.json(leader);
        });
    })

    .delete(Verify.verifyAdminUser, function(req, res, next) {
        Leaders.deleteOne({_id: req.params.leaderId}, function(err, leader) {
            if (err) throw err;
            res.json(leader);
        });
    });

module.exports = leaderRouter;
