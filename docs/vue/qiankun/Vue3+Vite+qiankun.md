# Vue3+Vite+qiankun开发

## 新建项目

由于在demo当中进行开发，所以就将所有项目放在一个文件夹中进行处理。但是项目如果多了起来，每一个项目都要去安装启动，这就是一件很麻烦的事情，`lenra`就是处理这种问题而出现的。

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

在`packages`文件夹初始化`main-app`和`micro-app`这两个`Vue`项目

```shell
$ cd ./packages
$ npm init vite@latest main-app --template vue
$ npm init vite@latest micro-app --template vue
```

### 添加.gitignore

在根目录新建`.gitignore`，添加`node_modules`

### 安装依赖

```shell
$ cd ../ # 回到根目录
$ yarn install # 安装依赖
```

安装完成后，会发现`node_modules`不是安装在各个项目包当中，而是在我们的根目录当中，并且在项目包中的`node_modules`里面也没有文件

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

由于`qiankun`和`vite`有部分冲突，在微应用的`vite`开发模式下`qiankun`不能正确的导入进来，所以需要一个`vite-plugin-qiankun`插件

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

调整路由

```js
import * as VueRouter from 'vue-router'

const routes = [{
  path: '/test1',
  component: () => import('../views/test1/index.vue'),
}, {
  path: '/test2',
  component: () => import('../views/test2/index.vue'),
}]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory('/mirco-app'), // 是createWebHistory
  routes
})

export default router
```

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

### 主应用修改

创建一个加载子应用的一个组件

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

将主应用的id改为`main-app`，避免和微应用的id冲突

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="main-app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>

```

顺便把路由加上

```js
import * as VueRouter from 'vue-router'
import Home from '../App.vue'

const routes = [{
  path: '/:pathMatch(.*)*',
  component: Home
}]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

export default router
```

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#main-app')

```

在`App.vue`文件当中修改，切换按钮加载不同的路由，并且挂载新写的组件

```vue
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { useRouter } from 'vue-router';
import MicroAppView from './components/micro-app-view/index.vue'

let entry = ''
const router = useRouter()

function changeEntry(val: string) {
  entry = val
  router.push(val)
}
</script>

<template>
  <button @click="changeEntry('test1')">test1</button>
  <button @click="changeEntry('test2')">test2</button>
  <MicroAppView :config="{ name: 'mirco-app', entry: `//localhost:3001/${entry}`, activeRule: '/' }"></MicroAppView>
  <!-- mirco-app 是子应用的name，在vite-plugin-qiankun当中定义 -->
</template>

<style>
#main-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

### 启动服务

将命令直接加在根目录的`package.json`当中

```json
"scripts": {
  "server": "lerna exec npm run dev"
},
```

执行命令后，点击按钮即可切换页面

[项目地址](https://github.com/XcGuaN-miepia/vue-vite-qiankun-demo)





