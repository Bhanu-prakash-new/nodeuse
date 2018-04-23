/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var type = global.thinkytype;
module.exports = global.thinky.createModel('record', {
    id: type.string(),
    subject: type.string(),
    description: type.string(),
    image:type.string(),
    created_at: type.date().default(r.now()),
    updated_at: type.date().default(r.now())

});

