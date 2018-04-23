var Validator = require('jsonschema').Validator;
//var helper = require('../../helper')
//var swig = require('swig');
module.exports = {
    updateNotes: function (req, res) {
        var input = req.body;
        dbs.notes.filter({id: input.id}).then(function (notedata) {
            console.log('notedata', notedata)
            notedata[0].merge(input).save().then(function () {
                dbs.notes.get(input.id).then(function (dataupdate) {
                    var message = swig.renderFile(__dirname + '/../emails/before-verification.html', {
                        user: user,
                        link: process.env.CLIENT_URL,
                        path: process.env.CONTENT_URL,
                        appName: process.env.APP_NAME
                    });
                    helper.sendEmail("Log in to your " + process.env.APP_NAME + " account", user.user_email, message, 'Account');
                    return res.json({
                        success: true,
                        message: 'Note has been Updated.',
                        note: dataupdate
                    });
                })
            });
        });
        //        DB.run().then(function (notes) {
//            return res.status(200).json({
//                success: true,
//                message: 'Success.',
//                notes: notes
//            });
//        });
    },
    getNotes: function (req, res) {
        var project_id = req.params.project_id;
        dbs.notes.run().then(function (notes) {
            return res.status(200).json({
                success: true,
                message: 'Success.',
                notes: notes
            });
        });
    },
    createNotes: function (req, res, next) {
        var input = req.body;
        input.created_at = r.now();
        input.updated_at = r.now();
        //getDB.notes
        dbs.notes.save(input).then(function (result) {
            //DB.save(input).then(function (result) {
            console.log(result, 'result')
            return res.json({
                success: true,
                message: "created",
                result: result
            })
        });
    },
    deleteCustomers: function (req, res) {
        var input = req.params.id;
        console.log("input", input)
        dbs.notes.get(req.params.id).then(function (result) {
            console.log("0000", result)
            return res.json({
                success: true,
                message: "deleted",
                result: result
            })
        });
    }

}