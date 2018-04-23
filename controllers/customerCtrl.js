/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var DB = require('../models/customer.js');


module.exports = {
    getCustomers: function (req, res) {
        DB.orderBy('created_at').execute().then(function (result) {
            return res.json({
                success: true,
                message: "list",
                result: result
            })
        });
    },
    postCustomers: function (req, res, next) {
        var input = req.body;
        input.created_at=r.now();
        input.updated_at=r.now();
        DB.save(input).then(function (result) {
            return res.json({
                success: true,
                message: "created",
                result: result
            })
        });
    },
    deleteCustomers: function (req, res) {
        var input = req.params.id;
        console.log("input",input)
        DB.get(req.params.id).then(function (result) {
            console.log("0000",result)
            return res.json({
                success: true,
                message: "deleted",
                result: result
            })
        });
    }

}