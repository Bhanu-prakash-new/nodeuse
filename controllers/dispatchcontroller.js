//var Validator = require('jsonschema').Validator;
var fs = require('fs');
var multiparty = require('multiparty');

//var helper = require('../../helper')
//var swig = require('swig');
var DB = require('../models/customer.js');
var _ = require('underscore-node');

module.exports = {
    orderProducts: function (req, res) {
        var orderedprouducts = [];
        var products = req.body.document_ids;
        dbs.documents.getAll(R.args(products)).then(function (objproducts) {
            asyncLoop(objproducts, function (prod, next) {
                var data = {
                    product_id: prod.id,
                    rate: prod.productrate,
                    productname: prod.productname,
                    document_url: prod.document_url,
                }
                dbs.dispatch.save(data).then(function (result) {
                    orderedprouducts.push(result);
                    next();
                });
            }, function () {
                return res.status(200).json({
                    success: true,
                    message: "ordered documents",
                    result: orderedprouducts
                });
            });
        });
    },
    productsOrdered: function (req, res) {
        dbs.dispatch.run().then(function (orderedproducts) {
            return res.status(200).json({
                success: true,
                message: "ordered documents",
                result: orderedproducts
            });
        })
    },
    removeproductsOrdered: function (req, res) {
        var products = req.body.document_ids;
        console.log(products, 'fp')
        dbs.dispatch.filter({product_id: products[0]}).then(function (objproducts) {
            console.log(objproducts, 'objproductsobjproducts')
            asyncLoop(objproducts, function (prod, next) {
                prod.delete();
                next();
            }, function () {
                return res.status(200).json({
                    success: true,
                    message: "deleted orders",
                });
            });
        });
    },
    getjoindocuments: function (req, res) {
        var documents = req.body.document_ids;
        var sendarray = [];
        asyncLoop(documents, function (doc, next) {
            dbs.dispatch.get(doc).getJoin({joinproduct: true}).then(function (document) {
                sendarray.push(document);
                next();
            })

        }, function () {
            return res.status(200).json({
                success: true,
                message: "joined products",
                result: sendarray
            });
        });
    }
}