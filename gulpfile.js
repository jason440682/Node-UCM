var gulp = require('gulp');
var clean = require('gulp-clean');
var nodemon = require('gulp-nodemon');
var sequence = require('gulp-sequence');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Gulp CSS 工具
var less = require('gulp-less');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssgrace = require('cssgrace');
var cssnext = require('cssnext');
var mincss = require('gulp-clean-css');

// Gulp JS 工具
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

// 清除构建文件夹中的内容
gulp.task('clean', function () {
    return gulp.src([
        'src/styles/**/*.css',
        'dist/styles/',     // css
        'dist/scripts/',    // js
        'dist/images/'      // img
    ], { read: false })
        .pipe(clean());
});

// 编译LESS并压缩CSS
gulp.task('css', function () {
    var processors = [
        autoprefixer({
            browsers: ['last 3 version'],
            cascade: false,
            remove: false
        }),             // 为CSS补全浏览器前缀
        cssnext,        // 用下一代CSS书写方式兼容现在浏览器
        cssgrace        // 让CSS兼容旧版IE
    ];
    return gulp.src('src/styles/**/*.less')
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(mincss())
        .pipe(gulp.dest('dist/styles/'))
        .pipe(reload({ stream: true }));
});

// 检查JS文件是否有语法错误
gulp.task('jshint', function () {
    return gulp.src(['src/scripts/**/*.js', '!src/scripts/lib/**/*.js'])
        .pipe(jshint())                     // 进行检查
        .pipe(jshint.reporter('default'));  // 对代码进行报错提示
});

// 压缩JS文件，build 版本不生成 sourcemaps
gulp.task('uglify', function () {
    return gulp.src(['src/scripts/**/*.js', '!src/scripts/lib/**/*.js'])
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest('dist/scripts/'))
        .pipe(reload({ stream: true }));
});

// 压缩图片
gulp.task('imagemin', function () {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/'));
});

// 把前端库复制一份到 dist
gulp.task('lib', function () {
    gulp.src('src/scripts/lib/**/*.*')
        .pipe(gulp.dest('dist/scripts/lib'));
});

// 构建
gulp.task('build', sequence(['clean'], ['css', 'lib', 'jshint', 'uglify', 'imagemin']));

// 测试启动服务
gulp.task('server', ['build'], function () {
    var started = false;

    nodemon({
        script: 'build/dev-server.js',
        ext: 'js',
        ignore: ['src/', 'dist/', 'node_modules/'],
        env: { 'NODE_ENV': 'development' }
    }).on('start', function () {
        if (!started) {
            browserSync.init({
                open: true,
                proxy: "localhost:3333",
                files: ['./src/views/**', './dist/**'],
                port: 3331
            });
            started = true;
        }
    });

    gulp.watch(['src/styles/**/*.less'], ['css']);
    gulp.watch(['src/scripts/**/*.js'], ['jshint', 'uglify']);
    gulp.watch(['src/images/*'], ['imagemin']);

});
