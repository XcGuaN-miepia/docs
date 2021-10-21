# Vue3+Vite+qiankun开发

## 新建项目

由于在demo当中进行开发，所以就将所有项目放在一个文件夹当中进行处理。但是项目如果多了起来，每一个项目都要去安装启动，这就是一件很麻烦的事情，所以使用了`concurrently`去进行操作



首先新建一个文件夹，项目名称`vue-vite-qiankun-demo`，然后使用命令初始化项目

```shell
$ npm init
```

定义`apps`文件夹为需要启动的应用，`main-app`为`qiankun`的主应用，`micro-app`为`qiankun`的微应用

```
├── apps
│   ├── main-app
│   └── micro-app
└── package.json
```

之后在两个应用当中，都初始化vue3项目。

在最外层项目当中的`package.json`当中，添加一条`script`

```json
"scripts": {
  "install-all": "npm install --prefix apps/*"
},
```

这段命令的意思就是在`apps/*`下的所有文件夹都去安装依赖，同理我们也可以写同时运行的命令

```json
"scripts": {
  "install-all": "npm install --prefix apps/*"
  "server-all": "npm run dev --prefix apps/*"
},
```

但是想法想的很好，实际上这样完全不行，启的地址是一个访问报错的地址，所以得用到`concurrently`启动多进程去启动。

首先就是启动服务的命令得写多个而不是单个了



