var gulp = require('gulp');
var less = require('gulp-less');
var mincss = require('gulp-clean-css');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var sequence = require('gulp-sequence');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


// 清除构建文件夹中的内容
gulp.task('clean', function () {
    return gulp.src([
        'src/styles/**/*.css',
        'dist/styles/',     // css
        'dist/scripts/',    // js
        'dist/images/'      // img
    ], {read: false})
        .pipe(clean());
});

// 编译LESS并压缩CSS
gulp.task('mincss', function () {
    return gulp.src('src/styles/**/*.less')
        .pipe(less())
        .pipe(mincss())
        .pipe(gulp.dest('dist/styles/'))
        .pipe(reload({stream: true}));
});

// 压缩JS文件
gulp.task('jshint', function () {
    return gulp.src(['src/scripts/**/*.js', '!src/scripts/lib/**/*.js'])
        .pipe(jshint())                     // 进行检查
        .pipe(jshint.reporter('default'));  // 对代码进行报错提示
});

// 压缩JS文件
gulp.task('uglify', function () {
    return gulp.src(['src/scripts/**/*.js'])
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('dist/scripts/'))
        .pipe(reload({stream: true}));
});

// 压缩图片
gulp.task('imagemin', function () {
    return gulp.src('src/images/**/*')
    //.pipe(imagemin())
        .pipe(gulp.dest('dist/images/'));
});

// 把前端库复制一份到 dist
gulp.task('lib', function () {
    gulp.src('src/scripts/lib/**/*.*')
        .pipe(gulp.dest('dist/scripts/lib'));
});

// 构建
gulp.task('build', sequence(['clean'], ['mincss', 'lib', 'jshint', 'uglify', 'imagemin']));

// 测试启动服务
gulp.task('server', ['build'], function () {
    var started = false;

    nodemon({
        script: 'build/dev-server.js',
        ext: 'js',
        ignore: ['src/*', 'dist/*', 'node_modules/'],
        env: {'NODE_ENV': 'development'}
    }).on('start', function () {
        if (!started) {
            browserSync.init({port: 3300, proxy: "localhost:3000"});
            started = true;
        }
    });

    gulp.watch(['src/styles/**/*.less'], ['mincss']);
    gulp.watch(['src/scripts/**/*.js'], ['jshint', 'uglify']);

});
