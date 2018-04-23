/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var type = global.thinkytype;
module.exports = global.thinky.createModel('dispatch', {
    prouct_id: type.string(),
    prouductname: type.string(),
    productrate: type.string(),
    imageurl: type.string(),
    created_at: type.date().default(r.now()),
    updated_at: type.date().default(r.now())
});

