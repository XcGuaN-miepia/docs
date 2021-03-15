# 自动化部署VuePress
当使用`VuePress`写完文档后，如果需要部署到`Github`的`gh-pages`里面，一般情况下会直接在本地运行配置过的`deploy.sh`文件，具体配置的话可以参考`VuePress`的[官方配置](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages)。

但是作为一个程序员，该懒的时候就应该懒，我就是不想主动去执行这个文件，我就想要提交的时候让他自己去执行，于是有了下面的方法。

## gitHooks

在`git`当中，他有一些钩子函数可以供我们使用，具体可以参照`git`的这篇[文档](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90)。在这里我们用到的方法只有`pre-push`这一个钩子函数，这个钩子会在 `git push` 运行期间， 更新了远程引用但尚未传送对象时被调用。当然我们这里也不会直接去改`.git/hooks/pre-push`文件，而是用到了尤大写的`yorkie`依赖库。

### 安装依赖

```shell
$ npm install --save-dev yorkie
```

安装依赖之后，会自动修改`.git/hooks`内的文件，把所有的钩子都开放出来

### package.json

```json
"gitHooks": {
  "pre-push": "bash deploy.sh" // 开始推送到github之前，执行deploy.sh文件，文件具体配置略过
}
```

修改完成后，再次提交上传，会在本地执行命令，打包后上传至`gh-pages`分支

## Actions

虽然上面的方法能够方便自己不用再执行命令文件，但是还是会有一些缺点：

- 运行命令在自己本地，用自己电脑去进行打包提交
- 必须要跑完命令之后才能提交到服务器上

为了去掉上面的这两个缺点，我们可以考虑自动化部署

`Jenkins`作为`CI/CD`最常用到的工具，这次用的不是他，虽然也能做到同样的操作，但是如果之前没有部署过`Jenkins`，为了一篇文档去部署显得有些多余了。恰巧我正好研究了下`github`，所以用了他的`Actions`

### 添加Actions

在项目中添加`.github/workflows/deploy.yml`文件

``` yml
# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the action will run. 
on:
  # Triggers the workflow on push or pull request events but only for the master branch
  push:
    branches: [ master ] # 在master分支被推送时执行

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build-and-deploy: # 工程名字，注意只能字母,_和-
    # The type of runner that the job will run on
    runs-on: ubuntu-latest # 环境

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2 # 拉取分支

      # Runs a single command using the runners shell
      - name: Install And Build
        run: |
         npm install # 安装第三方依赖
         npm run docs:build # 打包
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.0 # 提交到对应分支
        with:
          branch: gh-pages # The branch the action should deploy to.
          folder: docs/.vuepress/dist # The folder the action should deploy.
```

提交到`github`后，可以看到`Actions`中的`Workflows`有正在执行的任务，当状态为绿色的勾时，证明已经部署成功了，这时候切到自己的文档地址，可以发现文档已经更新了。

如果嫌在项目中新建麻烦，也可以在`github`页面中的`Actions`内新建一个`workflow`，填写完成后点击`Start commit`填写提交说明即可。