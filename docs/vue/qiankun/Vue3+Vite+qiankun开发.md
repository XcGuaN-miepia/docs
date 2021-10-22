# Vue3+Vite+qiankun开发

## 新建项目

由于在demo当中进行开发，所以就将所有项目放在一个文件夹当中进行处理。但是项目如果多了起来，每一个项目都要去安装启动，这就是一件很麻烦的事情，所以使用了`lerna`统一去进行管理

### lerna介绍

`Lerna` 是一个管理工具，用于管理包含多个软件包（package）的 JavaScript 项目。关于他的安装命令等不做过多介绍，直接在官网当中可以查看。

[官网地址](https://www.lernajs.cn/)

### 初始化lerna

首先新建一个文件夹，项目名称`vue-vite-qiankun-demo`，然后使用命令初始化项目

```shell
$ lerna init
```

初始化后的文件结构就像这样

```
.
├── lerna.json
├── package.json
└── packages
```

在`lerna.json`添加：

```json
{
  "packages": [
    "packages/*"
  ],
  "version": "0.0.0",
  + "npmClient": "yarn", // 指定使用yarn来管理依赖
  + "useWorkspaces": true // 设置yarn使用workspaces管理依赖
}

```

在`package.json`添加：

```json
{
  "name": "root",
  "private": true,
  "devDependencies": {
    "lerna": "^4.0.0"
  },
  + "workspaces": [
    "packages/*"
  ], // 配置subpackage目录
}

```

### 初始化主应用和微应用

在`packages`文件夹初始化`main-app`和`micro-app`的`Vue`项目

```shell
$ cd ./packages
$ npm init vite@latest main-app --template vue
$ npm init vite@latest micro-app --template vue
```

### 安装依赖

在根目录新建`.gitignore`，添加`node_modules`

```shell
$ cd ../ # 回到根目录
$ yarn install # 安装依赖
```

### 启动项目

```shell
$ lerna exec npm run dev # 启动packages当中的项目
```

启动后能访问对应地址就是成功启动了，默认应该是`localhost:3000`和`localhost:3001`

## 使用qiankun

### 全局添加

使用`lerna`全局添加`qiankun`

```shell
$ lerna add qiankun
```

### 单独添加

由于`qiankun`和`vite`有部分冲突，微应用的`vite`的开发模式`qiankun`不能正确的导入进来，所以需要一个`vite-plugin-qiankun`插件

```shell
$ lerna add vite-plugin-qiankun packages/micro-app -D
```

### 微应用修改

修改微应用的`vite.config.js`

```js
plugins: [
  vue(),
+   qiankun('mirco-app', {
+   useDevMode: true
+ })
],
```

其中`mirco-app`为主应用在注册时候使用的名称，需要保持一致

### 主应用修改

写了一个加载子应用的一个组件

```vue
<template>
  <div ref="container" />
</template>

<script lang="ts">
import { loadMicroApp, MicroApp } from 'qiankun'
import { defineComponent, onMounted, onUnmounted, PropType, ref, unref } from 'vue'

export interface MicroAppConfig {
  name: string;
  entry: string;
  activeRule: string;
}

export default defineComponent({
  name: 'MicroAppView',
  props: {
    config: {
      type: Object as PropType<MicroAppConfig>,
      required: true
    }
  },
  setup(prop) {
    const container = ref<HTMLDivElement>()
    const app = ref<MicroApp | null>(null)

    onMounted(() => {
      app.value = loadMicroApp(
        {
          ...prop.config,
          container: unref(container)!
        },
        {
          sandbox: {
            experimentalStyleIsolation: true
          }
        }
      )
    })

    onUnmounted(async() => {
      await unref(app)?.unmount()
      app.value = null
    })

    return {
      container
    }
  }
})
</script>

<style scoped>

</style>

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



