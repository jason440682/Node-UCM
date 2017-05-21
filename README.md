# 前言
这个项目是一个小型的外包项目，由于功能尚未开发完全，仅给开发人员同步进度用。

# 项目运行
```powershell
// 将代码拷贝到本地
git clone git@github.com:UCMProjectTeam/Node-UCM.git

// 进入到项目文件夹
cd Node-UCM

// 安装依赖项
npm install

// 该项目用到了 Gulp 工具来构建项目，如果之前没有用过 Gulp ，则需要执行下面的命令来安装 Gulp，如果安装了则可以跳过
npm install -g gulp

// 运行项目
npm run dev

// 或者直接执行下面的语句也可以，其实是一样的
gulp server
```	

# 项目结构
~~~
.
├── app.js
├── build
│   └── dev-server.js
├── dist					# Gulp 编译后的文件目录
├── gulpfile.js          	# Gulp 构建脚本配置文件
├── node_modules
├── package.json
├── README.md
├── routes               	# Node端逻辑
│   ├── client                  # 处理平台模块相关页面逻辑的Router
│   └── users                   # 处理用户模块相关页面逻辑的Router
├── src                  	# 前端页面开发的文件夹
│   ├── images                  # 前端图片保存的文件目录
│   ├── javascript              # 前端页面 JS 文件文件夹
│   ├── less                    # 前端页面 LESS 的文件夹
│   └── views                   # 前端模板 PUG 的文件夹
├── utils                	# Node端保存一些通用的模块
│   └── utils.js                # Node端保存通用的函数
└── views               	# 存放构建后的Pug(Jade)文件
~~~
