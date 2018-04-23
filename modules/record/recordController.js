//var Validator = require('jsonschema').Validator;
var fs = require('fs');
var multiparty = require('multiparty');

//var helper = require('../../helper')
//var swig = require('swig');
var _ = require('underscore-node');
module.exports = {
    postrecord: function (req, res) {
        var form = new multiparty.Form();
        form.parse(req, function (err, fields, files) {
            var data = {};
            _.each(fields, function (val, key) {
                data[key] = val[0];
            });
            dbs.record.save(data).then(function (result) {
                asyncLoop(files.image, function (file, next) {
                    var targetpath = 'content/documents/' + file.originalFilename;
                    fs.readFile(file.path, function (err, filedata) {
                        fs.writeFile(targetpath, filedata, function (sucess) {
                            if (data.documents == undefined || data.documents == '') {
                                data.documents = [];
                            }
                            var path = 'http://192.168.1.234/backnode/' + targetpath;
                            dbs.documents.save({path: path, name: file.originalFilename, record_id: result.id});
                        });
                    });
                    next();
                }, function () {
                    dbs.record.filter({id: result.id}).getJoin({joindoc: true}).execute().then(function (recordresult) {
                        return res.json({
                            success: true,
                            message: "created",
                            data: recordresult
                        })
                    })
                })
            })
        })
    },
    getrecord: function (req, res) {
        dbs.record.run().then(function (fullrecords) {
            var sendRecords = [];
            asyncLoop(fullrecords, function (record,next) {
                console.log(record,'find')
                dbs.record.filter({id: record.id}).getJoin({joindoc: true}).then(function (recordresult) {
                    sendRecords.push(recordresult[0]);
                    next();
                });
            }, function () {
                return res.json({
                    success: true,
                    message: "created",
                    data: sendRecords
                })
            });
        });
    }
}
