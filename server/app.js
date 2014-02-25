'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
//var async = require('async');
//var hbs = require('express-hbs');
var baucis = require('baucis');
//var socketIO = require('socket.io');
//var mongoose = require('mongoose');
var httpProxy = require('http-proxy');
var config = require('../config/config');

var app = express();

app.configure(function () {
    app.set('port', config.port);

    app.set('view engine', 'handlebars');
    app.set('views', __dirname + '../app/scripts/views');
});

app.use('/api/v1', baucis());

// simple log
app.use(function (req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
});

// mount static
app.use(express.static(path.join(__dirname, '../app')));
app.use(express.static(path.join(__dirname, '../.tmp')));


// route index.html
app.get('/', function (req, res) {
    res.sendfile(path.join(__dirname, '../app/index.html'));
});


var proxy = httpProxy.createProxyServer({});

app.get('/troubleticketapi/api/v1/tickets', function (req, res) {

    var target = 'http://ubuntuserver:8090';
    console.log('Tickets API call, redirecto to ' + target);

    proxy.web(req, res, {
        target: target
    });
});

app.get('/troubleticketapi/api/v1/tickets/*', function (req, res) {

    var target = 'http://ubuntuserver:8090';
    console.log('Tickets API call, redirecto to ' + target);

    proxy.web(req, res, {
        target: target
    });
});
app.put('/troubleticketapi/api/v1/tickets/*', function (req, res) {

    var target = 'http://ubuntuserver:8090';
    console.log('Tickets API call, redirecto to ' + target);

    proxy.web(req, res, {
        target: target
    });
});
app.post('/troubleticketapi/api/v1/tickets/*', function (req, res) {

    var target = 'http://ubuntuserver:8090';
    console.log('Tickets API call, redirecto to ' + target);

    proxy.web(req, res, {
        target: target
    });
});
// start server
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express App started! Port: '+app.get('port') + ' env: '+ config.env);
});


