var express = require('express');
var path = require('path');
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var config = require('./config');
var routes = require('./dist_node');

var app = express();

// 页面的路径
app.set('views', path.join(__dirname, './views'));
// 渲染页面的语言
app.set('view engine', 'pug');

// Express 日志组件
app.use(morgan('dev'));
// 处理 JSON 数据
app.use(bodyParser.json());
// 处理 UTF-8 的编码的数据
app.use(bodyParser.urlencoded({ extended: false }));
// Cookie 不使用签名，放在 req.cookies
app.use(cookieParser())
// 配置 Session
app.use(session({
    name: 'SESSIONID',
    secret: 'fuck_you_all!',
    saveUninitialized: true,
    resave: false
}));

// 设置静态资源的目录，比如 css js 等文件的路径
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/scripts/lib', express.static(path.join(__dirname, './bower_components')))

// 覆盖默认的 X-Powered-By HTTP返回头
app.use(function (req, res, next) {
    res.set('X-Powered-By', 'USA-Client-Manage-Platform');
    next();
});

console.log("process.env.NODE_ENV: " + app.get('env'));
// 判断系统环境，如果是开发环境，则启用 http-proxy
if (app.get('env') === 'development') {
    var proxyMiddleware = require('http-proxy-middleware');
    var proxyTable = config.proxyTable;
    Object.keys(proxyTable).forEach(function (context) {
        var options = proxyTable[context];
        if (typeof options === 'string') {
            options = { target: options };
        }
        app.use(proxyMiddleware(options.filter || context, options))
    })
}

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;

