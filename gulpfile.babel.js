import gulp from 'gulp'
import clean from 'gulp-clean'
import sequence from 'gulp-sequence'
import imagemin from 'gulp-imagemin'
import plumber from 'gulp-plumber'
import babel from 'gulp-babel'

// Gulp CSS 工具
import less from 'gulp-less'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import cssgrace from 'cssgrace'
import cssnext from 'cssnext'
import mincss from 'gulp-clean-css'

// Gulp JS 工具
import jshint from 'gulp-jshint'
import uglify from 'gulp-uglify'
import sourcemaps from 'gulp-sourcemaps'
import source from 'vinyl-source-stream'
import babelify from 'babelify'
import browserify from 'browserify'

// Gulp Nodejs 工具
import nodemon from 'gulp-nodemon'
import bs from 'browser-sync'

const browserSync = bs.create(); // 调试网页时浏览器能够自动刷新
const reload = browserSync.reload;

// 清除构建文件夹中的内容
gulp.task('clean', () => gulp.src(['dist/'], { read: false }).pipe(clean()));

// 编译 LESS 并压缩 CSS 
gulp.task('css', () => {
    let processors = [
        autoprefixer({
            browsers: ['last 3 version'],
            cascade: false,
            remove: false
        }),             // 为CSS补全浏览器前缀
        cssnext,        // 用下一代CSS书写方式兼容现在浏览器
        cssgrace        // 让CSS兼容旧版IE
    ];
    return gulp.src('src/styles/**/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(mincss())
        .pipe(gulp.dest('dist/styles/'))
        .pipe(reload({ stream: true }));
});

// 检查JS文件是否有语法错误
gulp.task('jshint', () => {
    return gulp.src(['src/scripts/**/*.js', '!src/scripts/lib/**/*.js'])
        .pipe(plumber())
        .pipe(jshint())                     // 进行检查
        .pipe(jshint.reporter('default'))   // 对代码进行报错提示
});

// 压缩JS文件
gulp.task('uglify', () => {
    return gulp.src(['src/scripts/**/*.js', '!src/scripts/lib/**/*.js'])
        .pipe(plumber())
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest('dist/scripts/'))
        .pipe(reload({ stream: true }));
});

// 前端 JS 文件转换 ES6 并压缩，不生成 Sourcemaps
gulp.task('babel-web', () => {
    return gulp.src(['src/scripts/**/*.js', '!src/scripts/lib/**/*.js'])
        .pipe(plumber())
        .pipe(babel())    //靠这个插件编译
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest('dist/scripts/'))
        .pipe(reload({ stream: true }));
});

// 前端 JS 文件转换 ES6 并压缩，Dev 版本生成 Sourcemaps
gulp.task('babel-web-dev', function() {
    return gulp.src(['src/scripts/**/*.js', '!src/scripts/lib/**/*.js'])
        // .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel())    //靠这个插件编译
        .pipe(uglify({ mangle: false }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist/scripts/'))
        .pipe(reload({ stream: true }));
});

// 后台 JS 文件转换 ES6
gulp.task('babel-node', () => {
    return gulp.src(['routes/**/*.js'])
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest('nodejs/'));
});

// 压缩图片
gulp.task('imagemin', () => {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/'));
});

// 把前端库复制一份到 dist
gulp.task('lib', () => {
    gulp.src('src/scripts/lib/**/*.*')
        .pipe(gulp.dest('dist/scripts/lib'));
});

// 构建
gulp.task('build', sequence('clean', ['css', 'lib', 'imagemin', 'jshint', 'babel-web', 'babel-node']));
gulp.task('dev', sequence('clean', ['css', 'lib', 'imagemin', 'jshint', 'babel-web-dev', 'babel-node']));

// 测试启动服务
gulp.task('server', ['dev'], () => {
    var started = false;
    let nm = nodemon({
        script: 'build/dev-server.js',
        ext: 'js',
        watch: [
            'build/',
            'config/',
            './nodejs',
            './app.js'
        ],
        env: { 'NODE_ENV': 'development' }
    });

    nm.on('start', () => {
        if (!started) {
            browserSync.init({
                open: true,
                // ui: false,
                // notify: false,
                proxy: "localhost:3333",
                files: ['./src/views/**', './dist/**'],
                port: 3331
            });
            started = true;
        }
    });

    gulp.watch(['src/styles/**/*.less'], ['css']);
    gulp.watch(['src/scripts/**/*.js'], ['jshint', 'babel-web-dev']);
    gulp.watch(['src/images/*'], ['imagemin']);
    gulp.watch(['routes/**/*.js'], ['babel-node'])
});

import glob from 'glob'
gulp.task('glob', (done) => {
    glob('src/scripts/!(lib)/**/*.js', (err, files) => {
        if (err) done(err);
        console.log(files);
    })
})