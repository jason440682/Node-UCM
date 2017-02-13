/**
 * Created by kg on 2016/8/1.
 */
module.exports = function(grunt){

    grunt.initConfig({
        //watch 监测页面改动，自动重启服务
        watch: {
            pug: {
                files: ['src/views/**'],
                options: {
                    livereload: true //文件改动时重新启动服务
                }
            },
            js: {
                files: ['routes/*.js', 'routes/**/*.js', 'routes/**/**/**/*.js'],
                // tasks: ['jshint'], 语法检查
                options: {
                    livereload: true
                }
            }
        },
        nodemon:{
            dev:{  //开发环境
                options:{
                    script:'build',
                    file:'dev-server.js',
                    args:[],
                    ignoredFiles:['README.md','node_modules/**','.DS_Store'],
                    watchedExtensions:['js'],
                    watchedFolders:['build','routes'],
                    debug:true,
                    delayTime:1, //等待多少毫秒时重新启动服务
                    env:{
                        PORT:3000
                    },
                    cwd:__dirname  //目录为当前目录
                }
            }
        },
        concurrent:{
            tasks:['nodemon','watch'],  //传入上面定义的任务
            options:{
                logConcurrentOutput:true
            }
        }
    })
    grunt.loadNpmTasks('grunt-contrib-watch'); //有文件添加，修改，删除时执行配置好的任务
    grunt.loadNpmTasks('grunt-nodemon')  //实时监听app.js，入口文件，当变动是重启
    grunt.loadNpmTasks('grunt-concurrent'); //优化慢任务构建时间，跑多个组的任务，如watch，nodemon

    grunt.option('force',true); //避免语法错误导致整个任务服务中断
    grunt.registerTask('default',['concurrent']); //定义默认任务,通过concurrent执行‘nodemon','watch'
}
