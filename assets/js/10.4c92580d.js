(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{365:function(t,s,a){"use strict";a.r(s);var e=a(45),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"自动化部署vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化部署vuepress"}},[t._v("#")]),t._v(" 自动化部署VuePress")]),t._v(" "),a("p",[t._v("当使用"),a("code",[t._v("VuePress")]),t._v("写完文档后，如果需要部署到"),a("code",[t._v("Github")]),t._v("的"),a("code",[t._v("gh-pages")]),t._v("里面，一般情况下会直接在本地运行配置过的"),a("code",[t._v("deploy.sh")]),t._v("文件，具体配置的话可以参考"),a("code",[t._v("VuePress")]),t._v("的"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方配置"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("但是作为一个程序员，该懒的时候就应该懒，我就是不想主动去执行这个文件，我就想要提交的时候让他自己去执行，于是有了下面的方法。")]),t._v(" "),a("h2",{attrs:{id:"githooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#githooks"}},[t._v("#")]),t._v(" gitHooks")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("git")]),t._v("当中，他有一些钩子函数可以供我们使用，具体可以参照"),a("code",[t._v("git")]),t._v("的这篇"),a("a",{attrs:{href:"https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),a("OutboundLink")],1),t._v("。在这里我们用到的方法只有"),a("code",[t._v("pre-push")]),t._v("这一个钩子函数，这个钩子会在 "),a("code",[t._v("git push")]),t._v(" 运行期间， 更新了远程引用但尚未传送对象时被调用。当然我们这里也不会直接去改"),a("code",[t._v(".git/hooks/pre-push")]),t._v("文件，而是用到了尤大写的"),a("code",[t._v("yorkie")]),t._v("依赖库。")]),t._v(" "),a("h3",{attrs:{id:"安装依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev yorkie\n")])])]),a("p",[t._v("安装依赖之后，会自动修改"),a("code",[t._v(".git/hooks")]),t._v("内的文件，把所有的钩子都开放出来")]),t._v(" "),a("h3",{attrs:{id:"package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json"}},[t._v("#")]),t._v(" package.json")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gitHooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-push"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bash deploy.sh"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始推送到github之前，执行deploy.sh文件，文件具体配置略过")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("修改完成后，再次提交上传，会在本地执行命令，打包后上传至"),a("code",[t._v("gh-pages")]),t._v("分支")]),t._v(" "),a("h2",{attrs:{id:"actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actions"}},[t._v("#")]),t._v(" Actions")]),t._v(" "),a("p",[t._v("虽然上面的方法能够方便自己不用再执行命令文件，但是还是会有一些缺点：")]),t._v(" "),a("ul",[a("li",[t._v("运行命令在自己本地，用自己电脑去进行打包提交")]),t._v(" "),a("li",[t._v("必须要跑完命令之后才能提交到服务器上")])]),t._v(" "),a("p",[t._v("为了去掉上面的这两个缺点，我们可以考虑自动化部署")]),t._v(" "),a("p",[a("code",[t._v("Jenkins")]),t._v("作为"),a("code",[t._v("CI/CD")]),t._v("最常用到的工具，这次用的不是他，虽然也能做到同样的操作，但是如果之前没有部署过"),a("code",[t._v("Jenkins")]),t._v("，为了一篇文档去部署显得有些多余了。恰巧我正好研究了下"),a("code",[t._v("github")]),t._v("，所以用了他的"),a("code",[t._v("Actions")])]),t._v(" "),a("h3",{attrs:{id:"添加actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加actions"}},[t._v("#")]),t._v(" 添加Actions")]),t._v(" "),a("p",[t._v("在项目中添加"),a("code",[t._v(".github/workflows/deploy.yml")]),t._v("文件")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This is a basic workflow to help you get started with Actions")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CI\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Controls when the action will run. ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Triggers the workflow on push or pull request events but only for the master branch")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在master分支被推送时执行")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Allows you to run this workflow manually from the Actions tab")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workflow_dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A workflow run is made up of one or more jobs that can run sequentially or in parallel")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# This workflow contains a single job called "build"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 工程名字，注意只能字母,_和-")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The type of runner that the job will run on")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 环境")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Steps represent a sequence of tasks that will be executed as part of the job")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取分支")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Runs a single command using the runners shell")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install And Build\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n         npm install # 安装第三方依赖\n         npm run docs:build # 打包")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JamesIves/github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@4.1.0 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交到对应分支")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The branch the action should deploy to.")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("folder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The folder the action should deploy.")]),t._v("\n")])])]),a("p",[t._v("提交到"),a("code",[t._v("github")]),t._v("后，可以看到"),a("code",[t._v("Actions")]),t._v("中的"),a("code",[t._v("Workflows")]),t._v("有正在执行的任务，当状态为绿色的勾时，证明已经部署成功了，这时候切到自己的文档地址，可以发现文档已经更新了。")]),t._v(" "),a("p",[t._v("如果嫌在项目中新建麻烦，也可以在"),a("code",[t._v("github")]),t._v("页面中的"),a("code",[t._v("Actions")]),t._v("内新建一个"),a("code",[t._v("workflow")]),t._v("，填写完成后点击"),a("code",[t._v("Start commit")]),t._v("填写提交说明即可。")])])}),[],!1,null,null,null);s.default=n.exports}}]);