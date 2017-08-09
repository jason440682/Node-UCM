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
import eslint from 'gulp-eslint'
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

const isDev = argv.env && argv.env === 'dev'
const browserSync = bs.create() // 调试网页时浏览器能够自动刷新
const reload = browserSync.reload

function babelWeb(input, output = './dist') {
    const filename = input.replace('src/', '')
    console.log(`${filename}: is added into babel task.`)
    return browserify({
        entries: [input],
        transform: ['browserify-shim']
    })
        .transform(babelify)
        .bundle()
        .pipe(plumber())
        .pipe(source(filename))
        .pipe(buffer())
        .pipe(gulpif(isDev, sourcemaps.init()))
        .pipe(uglify())
        .pipe(gulpif(isDev, sourcemaps.write('.')))
        .pipe(gulp.dest(output))
}

function babelNode(input, output = './dist_node') {
    return gulp.src(input)
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest(output))
}

function updateFile(event, type) {
    const p = path.parse(event.path)
    let deleteDir
    let updateFunc
    let input
    let output
    if (type === 'node') {
        deleteDir = event.path.replace('routes', 'dist_node')
        updateFunc = babelNode
        input = event.path
        output = p.dir.replace('routes', 'dist_node')
    } else if (type === 'web') {
        deleteDir = event.path.replace('src', 'dist')
        updateFunc = babelWeb
        input = event.path
        output = './dist'
    }

    if (event.type === 'deleted') {
        console.log(`The file ${p.base} has deleted, now delete this file ...`)
        fs.unlink(deleteDir, (err) => {
            if (err) throw err
            console.log(`Successfully delete ${event.base}`)
        })
    } else {
        console.log(`The file ${p.base} has changed, now rebuild this file ...`)
        return updateFunc(input, output)
    }

    return true
}

// 清除构建文件夹中的内容
gulp.task('clean', () => gulp.src(['dist/', 'dist_node/'],
    { read: false }).pipe(clean()))

// 编译 LESS 并压缩 CSS
gulp.task('css', () => {
    const processors = [
        autoprefixer({
            browsers: ['last 3 version'],
            cascade: false,
            remove: false
        }), // 为CSS补全浏览器前缀
        cssnext, // 用下一代CSS书写方式兼容现在浏览器
        cssgrace // 让CSS兼容旧版IE
    ]
    return gulp.src('src/styles/**/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(mincss())
        .pipe(gulp.dest('dist/styles/'))
        .pipe(reload({ stream: true }))
})

// 检查JS文件是否有语法错误
gulp.task('lint', () =>
    gulp.src(['src/scripts/**/*.js', '!src/scripts/lib/**/*.js'])
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError())
)

// 前端 JS 文件转换 ES6 并压缩，Dev 版本生成 Sourcemaps
gulp.task('babel-web', (cb) => {
    glob('src/scripts/!(lib)/**/*.js', (err, files) => {
        const tasks = files.map(entry => babelWeb(entry))
        es.merge(tasks).on('end', cb)
    })
})

// 后台 JS 文件转换 ES6
gulp.task('babel-node', () => babelNode(['routes/**/*.js'], 'dist_node/'))

// 压缩图片
gulp.task('imagemin', () => gulp.src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/')))

// 把前端库复制一份到 dist
gulp.task('lib', () => gulp.src('src/scripts/lib/**/*.js')
    .pipe(gulp.dest('dist/scripts/lib')))

// 构建
gulp.task('build', sequence('clean', ['css', 'lib', 'imagemin', 'babel-web', 'babel-node']))

// 测试启动服务
gulp.task('server', ['build'], () => {
    let started = false
    const nm = nodemon({
        restartable: 'rs',
        script: 'build/dev-server.js',
        ext: 'js',
        watch: [
            'build/',
            'config/',
            'dist_node/',
            'app.js'
        ],
        env: { NODE_ENV: 'development' }
    })

    nm.on('start', () => {
        if (!started) {
            browserSync.init({
                open: true,
                proxy: 'localhost:3333',
                files: ['./src/views/**', './dist/**'],
                port: 3331
            })
            started = true
        }
    })

    gulp.watch(['src/images/*'], ['imagemin'])
    gulp.watch(['src/styles/**/*.less'], ['css'])
    gulp.watch(['src/scripts/lib/**/*.js'], ['lib'])
    gulp.watch(['src/scripts/**/*.js', '!src/scripts/lib/**/*.js'], event => updateFile(event, 'web'))
    gulp.watch(['routes/**/*.js'], event => updateFile(event, 'node'))
})
