var express = require('express');
var bodyParser = require('body-parser');
var Promotions = require('../models/promotions');

var promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all(function(req,res,next) {
        next();
    })

    .get(function(req, res, next){
        Promotions.find(function(err, data) {
            if (err) throw err;
            res.json(data);
        });
    })

    .post(function(req, res, next){
        var promo = new Promotions(req.body);

        promo.save(function(err, promo) {
            if (err) throw err;
            res.json(promo);
        });
    })

    .delete(function(req, res, next){
        Promotions.deleteMany(function(err, data) {
            if (err) throw err;
            res.json(data);
        })
    });

promoRouter.route('/:promoId')
    .all(function(req,res,next) {
        next();
    })

    .get(function(req,res,next){
        Promotions.find({_id: req.params.promoId}, function(err, promotion) {
            if (err) throw err;
            res.json(promotion);
        });
    })

    .put(function(req, res, next){
        Promotions.findOneAndUpdate({_id: req.params.promoId}, {name: req.body.name}, function(err, promotion) {
            if (err) throw err;
            res.json(promotion);
        });
    })

    .delete(function(req, res, next){
        Promotions.deleteOne({_id: req.params.promoId}, function(err, promotion) {
            if (err) throw err;
            res.json(promotion);
        });
    });

module.exports = promoRouter;