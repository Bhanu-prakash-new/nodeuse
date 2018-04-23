//var Validator = require('jsonschema').Validator;
var fs = require('fs');
var multiparty = require('multiparty');

//var helper = require('../../helper')
//var swig = require('swig');
var DB = require('../models/customer.js');
var _ = require('underscore-node');

module.exports = {
    postdocumens: function (req, res) {
        var form = new multiparty.Form();
        form.parse(req, function (err, fields, files) {
            var data = {};
            _.each(fields, function (val, key) {
                data[key] = val[0];
            });
            var picturepath = files.image[0].path;
            var targetpath = 'content/documents/' + files.image[0].originalFilename;
            fs.readFile(picturepath, function (err, filedata) {
                fs.writeFile(targetpath, filedata, function (sucess) {
                    data.document_url = 'http://192.168.1.234/backnode/' + targetpath;
                    dbs.documents.save(data).then(function (result) {
                        return res.json({
                            success: true,
                            message: "created",
                            result: result
                        })
                    });
                });
            });

        });
    },
    getdocumens: function (req, res) {
        dbs.documents.run().then(function (result) {
            return res.json({
                success: true,
                message: "listed documents",
                result: result
            })
        });
    },
    removedocuments: function (req, res) {
        var documents = req.body.document_ids;
        _.each(documents, function (doc) {
            dbs.documents.get(doc).then(function (document) {
                document.delete().then(function () {
                   // document.document_url=document.document_url.replace('http://192.168.1.234/backnode/','').trim();
                 //   fs.unlink('./' + document.document_url);
                    return res.json({
                        success: true,
                        message: 'File has been removed.',
                    });
                });
            })
        })
    },
}