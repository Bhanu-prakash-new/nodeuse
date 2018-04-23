/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var task=require('../models/defect.js')
var notes = require('../models/note.js');
var documents = require('../models/savedocuments.js');
var dispatch = require('../models/dispatch.js');
var record = require('../modules/record/recordSchema.js');
dispatch.belongsTo(documents,"joinproduct","product_id","id");
record.hasMany(documents,"joindoc","id","record_id");

module.exports={
    task:task,
    notes:notes,
    documents:documents,
    dispatch:dispatch,
    record:record
}