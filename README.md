# 前言
这个项目由于功能尚未开发完全，仅给开发人员同步进度用。

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

// 开发环境可以运行以下命令来运行项目
npm run dev

// 或者直接执行下面的语句也可以，其实是一样的
gulp server -env=dev

// 生产环境请运行以下命令来运行项目
npm start
```	

# 项目结构
~~~
.
├── app.js
├── build
│   └── dev-server.js
├── config                  # Node端的配置文件夹
├── dist                    # Gulp 编译后的前端文件目录
├── dist_node               # Gulp 编译后的 Node 文件目录
├── gulpfile.babel.js       # Gulp 构建脚本配置文件
├── node_modules
├── package.json
├── README.md
├── routes                  # Node端开发的逻辑
│   ├── client                  # 处理平台模块相关页面逻辑的Router
│   └── users                   # 处理用户模块相关页面逻辑的Router
└── src                     # 前端页面开发的文件夹
    ├── images                  # 前端图片保存的文件目录
    ├── javascript              # 前端页面 JS 文件文件夹
    ├── less                    # 前端页面 LESS 的文件夹
    └── views                   # 前端模板 PUG(JADE) 的文件夹

~~~

# 后台代码的说明（ NodeJS ）
这个项目开始时是用 NodeJS 来做后台，但是在开发中期后台改用 JSP ，所以现在的情况是 `NodeJS 只在页面渲染时才向 JSP 后台单独请求数据，其他情况下（包括表单提交等其他操作）只对请求做转发。`后台数据操作的逻辑应交给 JSP 来处理，NodeJS 只需完成跟前端验证相关的逻辑即可，比如通过 Cookie 和 SESSION 判断用户是否登录成功等信息。
