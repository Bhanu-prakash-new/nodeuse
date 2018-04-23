
var thinky = require("thinky")(con.rethinkdb);
global.r = thinky.r;
//story document
var type = thinky.type;
module.exports = thinky.createModel('Notes', {
    id: type.string(),
    note_title: type.string(),
    note_description: type.string(),
    note_description_checkbox: type.array().default([]),
    users: type.array().default([]),
    reminderDate: type.date(),
    reminderTime: type.string(),
    reminderDateTime: type.date(),
    note_color: type.string(),
    project_id: type.string(),
    update_user_id:type.string(),
    is_checkbox: type.boolean().default(false),
    order_rank: type.number().default(0),
    is_active: type.boolean().default(true),
    created_at: type.date().default(r.now()),
    updated_at: type.date().default(r.now()),
    // is_deleted: type.boolean().default(false)
});
