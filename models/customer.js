
var thinky = require("thinky")(con.rethinkdb);
var r = thinky.r;
global.r = thinky.r;

var type = thinky.type;
var user = thinky.createModel("bhanu",{
    id: type.string(),
    name: type.string(),
    type: type.string(),
    phoneNumber:type.string().required(),
    otpcode_id:type.string(),
    password:type.string(),
    created_at: type.date(),
    updated_at: type.date(),
    is_active: type.boolean().default(false)
});
module.exports = user

