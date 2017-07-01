import gulp from 'gulp'
import clean from 'gulp-clean'
import sequence from 'gulp-sequence'
import imagemin from 'gulp-imagemin'
import plumber from 'gulp-plumber'
import gulpif from 'gulp-if'
import es from 'event-stream'
import glob from 'glob'
import { argv } from 'yargs'
import path from 'path'
import fs from 'fs'

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
import buffer from 'vinyl-buffer'
import babelify from 'babelify'
import browserify from 'browserify'

// Gulp Nodejs 工具
import nodemon from 'gulp-nodemon'
import babel from 'gulp-babel'
import bs from 'browser-sync'

const browserSync = bs.create(); // 调试网页时浏览器能够自动刷新
const reload = browserSync.reload;

// 清除构建文件夹中的内容
gulp.task('clean', () => gulp.src(['dist/', 'dist_node/'], { read: false }).pipe(clean()));

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

// 前端 JS 文件转换 ES6 并压缩，Dev 版本生成 Sourcemaps
gulp.task('babel-web', (cb) => {
    glob('src/scripts/!(lib)/**/*.js', (err, files) => {
        if (err) done(err);
        let isDev = argv.env && argv.env === 'dev';
        console.log(argv);
        console.log('env is dev ? :' + isDev);
        let tasks = files.map((entry) => {
            let filename = entry.replace('src/', '');
            console.log('Babel Task has transform the file: ' + filename);
            return browserify({ entries: [entry] })
                .transform("babelify", { presets: ["es2015", "stage-2"] })
                .bundle()
                .pipe(source(filename))
                .pipe(buffer())
                .pipe(gulpif(isDev, sourcemaps.init()))
                .pipe(uglify())
                .pipe(gulpif(isDev, sourcemaps.write('./maps')))
                .pipe(gulp.dest('./dist'));
        })

        es.merge(tasks).on('end', cb);
    });

});

// 后台 JS 文件转换 ES6
gulp.task('babel-node', () => {
    return babelNode(['routes/**/*.js'], 'dist_node/');
});

// 压缩图片
gulp.task('imagemin', () => {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/'));
});

// 把前端库复制一份到 dist
gulp.task('lib', () => {
    return gulp.src('src/scripts/lib/**/*.js')
        .pipe(gulp.dest('dist/scripts/lib'));
});

// 构建
gulp.task('build', sequence('clean', ['css', 'lib', 'imagemin', 'jshint', 'babel-web', 'babel-node']));

// 测试启动服务
gulp.task('server', ['build'], () => {
    let started = false;
    let nm = nodemon({
        restartable: 'rs',
        script: 'build/dev-server.js',
        ext: 'js',
        watch: [
            'build/',
            'config/',
            'dist_node/',
            'app.js'
        ],
        env: { 'NODE_ENV': 'development' }
    });

    nm.on('start', () => {
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
    gulp.watch(['src/scripts/**/*.js', '!src/scripts/lib/**/*.js'], ['jshint', 'babel-web']);
    gulp.watch(['src/scripts/lib/**/*.js'], ['lib']);
    gulp.watch(['src/images/*'], ['imagemin']);
    gulp.watch(['routes/**/*.js'], (event) => {
        let p = path.parse(event.path);
        if (event.type === 'deleted') {
            console.log(`The file ${p.base} has deleted, now delete this file ...`);
            fs.unlink(event.path.replace('routes', 'dist_node'), (err) => {
                if (err) throw err;
                console.log('Successfully delete ' + event.base);
            })
        } else {
            console.log(`The file ${p.base} has changed, now rebuild this file ...`);
            return babelNode(event.path, p.dir.replace('routes', 'dist_node'));
        }
    });
});

gulp.task('glob', (done) => {
    glob('src/scripts/!(lib)/**/*.js', (err, files) => {
        if (err) done(err);
        console.log(files);
    })
})

function babelNode(input, output) {
    return gulp.src(input)
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest(output));
}