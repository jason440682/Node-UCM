var express = require('express');
var path = require('path');
var http = require('http');

var users = require('./routes/users/users');
var signup = require('./routes/signup/signup');
var login = require('./routes/login/login');
var clentaccounts = require('./routes/clientaccounts/clientaccounts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'pug');

// 设置静态资源的目录，比如 css js 等文件的路径
app.use(express.static(path.join(__dirname, './src')));

// 覆盖默认的 X-Powered-By HTTP返回头
app.use(function (req, res, next) {
    res.set('X-Powered-By','USA-Client-Manage-Platform');
    next();
});

app.use('/', users,signup,login,clentaccounts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
