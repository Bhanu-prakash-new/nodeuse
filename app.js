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
var port = process.env.PORT || 4000;

global.express = require('express');
global.con = require('./config')

global.app = express();
global.cors = require('cors');
global.r = require('rethinkdb');  

var bodyparser = require('body-parser');
global.http = require('http');


app.use(bodyparser.json());

app.use(cors({origin: '*'}));


global.DB = require('./models/schemactrl.js');
require('./controllers/index.js');


// app.get('/', function(req, res){
//   res.sendfile('index.html');
// });
// app.listen(port, function () {
//     console.log('listening on +:  ' + port);
// });
var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};

//app.use(allowCrossDomain);

var port = 3000;
app.listen(port, function () {
    console.log("start+------", port)
});