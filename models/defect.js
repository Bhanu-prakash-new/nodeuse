/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var type = global.thinkytype;
module.exports = global.thinky.createModel('Task', {
    id: type.string(),
    taskname: type.string(),
    task_type: type.string().default("task"),
    assign_to: type.string(),
    remaining_hrs: type.string(),
    description: type.string(),
    lane_id: type.string(),
    story_id: type.string(),
    project_id: type.string(),
    company_id: type.string(),
    timebox_id: type.string(),
    due_date: type.date(),
    owner_id: type.string(),
    custom_id: type.number().default(1),
    estimationMinutes: type.number().default(0),
    testplan_id: type.string(),
    execution_id: type.string(),
    bugpriority_id: type.string(),
    created_at: type.date().default(r.now()),
    updated_at: type.date().default(r.now())

});