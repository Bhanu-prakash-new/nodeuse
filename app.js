'use strict';
var argv = require('yargs')
//        .command('environment', function (yargs) {
//            yargs.options({
//                location: {
//                    demand: true,
//                    alias: 'e',
//                    type: 'string'
//                }
//            });
//        })
        .help('help')
        .argv;
var testEnv = argv.e;
require('dotenv').config({path: ".env" + testEnv});
var port = 3000;

global.express = require('express');
global.con = require('./config')

global.app = express();
global.cors = require('cors');
global.r = require('rethinkdb');
global.rethDbs = {};

var bodyparser = require('body-parser');
global.http = require('http');


app.use(bodyparser.json());

app.use(cors({origin: '*'}));
global.logger = require('morgan');

app.use(logger('dev'));


global.DB = require('./models/schemactrl.js');
global.thinky = require("thinky")(con.rethinkdb);
global.thinkytype = thinky.type;
global.R = thinky.r;
global.asyncLoop = require('node-async-loop');

global.dbs = require('./models/indexModelTRy.js');
global.http = require('http');
global.https = require('https');
require('./controllers/index.js');




// app.get('/', function(req, res){
//   res.sendfile('index.html');
// });
// app.listen(port, function () {
//     console.log('listening on +:  ' + port);
// });
var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
};

//app.use(allowCrossDomain);

//var port = 3000;
//app.listen(port, function () {
//    console.log("start+------", port)
//});
var server = http.createServer(app);

require('./socket.io');

global.io = require('socket.io').listen(server);
server.listen(port, function () {
    console.log('listening on +:  ' + port + " and SSL is ");
});