

var multiparty = require('multiparty');


module.exports = {
    createTask: function (req, res) {
        var form = new multiparty.Form();
        form.parse(req, function (err, fields, files) {
            console.log(fields, 'find', files)
            req.files = files;
            _.each(fields, function (val, key) {
                req.body[key] = val[0];
            });
            var input = req.body;
            if (input.is_block == "false") {
                input.is_block = false
            } else if (input.is_block == "true") {
                input.is_block = true
            }
            var v = new Validator();
            var requestSchema = {
                "id": "/TaskWithFileAttachment",
                "type": "object",
                "properties": {
                    "project_id": {"type": "string"},
                    "company_id": {"type": "string"},
                    //"story_id": {"type": "string"},
                    "taskname": {"type": "string"},
                    "description": {"type": "string"},
                    "testplan_id": {"type": "string"},
                    "execution_id": {"type": "string"}
                },
                "required": ["project_id", "company_id", "taskname"]
            };
            console.log(v.validate(input, requestSchema).errors.length)
        })

        //validate request
        //if (!v.validate(input, requestSchema).errors.length) {
    }
}