(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{364:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git常用命令"}},[t._v("#")]),t._v(" git常用命令")]),t._v(" "),a("h2",{attrs:{id:"git查看修改行数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git查看修改行数"}},[t._v("#")]),t._v(" git查看修改行数")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --since"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<开始日期>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n          --before"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<结束日期>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n          --author"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<修改人>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n          --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tformat: --numstat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{ add += "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("; subs += "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v(" ;loc += "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v(' }\n          END { printf "added lines: %s removed lines : %s total lines: %s'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("\",\n          add,subs,loc }'")]),t._v("\n")])])]),a("h2",{attrs:{id:"git配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git配置"}},[t._v("#")]),t._v(" git配置")]),t._v(" "),a("h3",{attrs:{id:"初始化git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化git"}},[t._v("#")]),t._v(" 初始化git")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n")])])]),a("h3",{attrs:{id:"克隆仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#克隆仓库"}},[t._v("#")]),t._v(" 克隆仓库")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("仓库地址"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("克隆本地文件名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"配置用户名邮箱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置用户名邮箱"}},[t._v("#")]),t._v(" 配置用户名邮箱")]),t._v(" "),a("p",[t._v("如果你要修改当前全局的用户名和邮箱时，需要在上面的两条命令中添加一个参数，--global，代表的是全局。\n命令分别为")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" user.name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("你的目标用户名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" user.email "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("你的目标邮箱名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"配置模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置模板"}},[t._v("#")]),t._v(" 配置模板")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global commit.template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("模板文件名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"branch分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#branch分支"}},[t._v("#")]),t._v(" Branch分支")]),t._v(" "),a("h3",{attrs:{id:"查看本地分支-带-为正在使用分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看本地分支-带-为正在使用分支"}},[t._v("#")]),t._v(" 查看本地分支(带*为正在使用分支)")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地分支(带*为正在使用分支)")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -r "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 远程分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地 + 远程分支")]),t._v("\n")])])]),a("h3",{attrs:{id:"新建分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建分支"}},[t._v("#")]),t._v(" 新建分支")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 停留在当前分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到新分支")]),t._v("\n")])])]),a("h3",{attrs:{id:"拉取分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取分支"}},[t._v("#")]),t._v(" 拉取分支")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n")])])]),a("h3",{attrs:{id:"拉取远程分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取远程分支"}},[t._v("#")]),t._v(" 拉取远程分支")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("本地分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" origin/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在本地创建分支，并将远程分支的信息同步到本地分支")]),t._v("\n")])])]),a("h3",{attrs:{id:"拉取其他远程分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取其他远程分支"}},[t._v("#")]),t._v(" 拉取其他远程分支")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("拉取分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"删除本地分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除本地分支"}},[t._v("#")]),t._v(" 删除本地分支")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 没有合并需要强制删除改为-D")]),t._v("\n")])])]),a("h3",{attrs:{id:"删除远程分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除远程分支"}},[t._v("#")]),t._v(" 删除远程分支")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --delete "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $ git branch -dr [remote/branch] # 看了一下可能这个只是删除本地的远程列表，重新拉取还会有")]),t._v("\n")])])]),a("h3",{attrs:{id:"切换分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[t._v("#")]),t._v(" 切换分支")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"删除不存在的远程分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除不存在的远程分支"}},[t._v("#")]),t._v(" 删除不存在的远程分支")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote prune origin\n")])])]),a("h3",{attrs:{id:"修改分支名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改分支名"}},[t._v("#")]),t._v(" 修改分支名")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("旧分支"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("新分支"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将本地旧分支切一个分支到本地")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --delete origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("旧分支"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("新分支"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将本地新分支推送到远程")]),t._v("\n")])])]),a("h3",{attrs:{id:"检出分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检出分支"}},[t._v("#")]),t._v(" 检出分支")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名/提交hash值"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"tag标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tag标签"}},[t._v("#")]),t._v(" Tag标签")]),t._v(" "),a("h3",{attrs:{id:"列出tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列出tag"}},[t._v("#")]),t._v(" 列出tag")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag\n")])])]),a("h3",{attrs:{id:"创建tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建tag"}},[t._v("#")]),t._v(" 创建tag")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<tag信息>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"查看tag信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看tag信息"}},[t._v("#")]),t._v(" 查看tag信息")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"推送tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推送tag"}},[t._v("#")]),t._v(" 推送tag")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定tag")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --tags "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所有tag")]),t._v("\n")])])]),a("h3",{attrs:{id:"删除tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除tag"}},[t._v("#")]),t._v(" 删除tag")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"删除远程tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除远程tag"}},[t._v("#")]),t._v(" 删除远程tag")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ git push origin :refs/tags/<tag名称>\n")])])]),a("h2",{attrs:{id:"查看信息-之后整理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看信息-之后整理"}},[t._v("#")]),t._v(" 查看信息(之后整理)")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示有变更的文件")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示当前分支的版本历史")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示commit历史，以及每次commit发生变更的文件")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --stat\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 搜索提交历史，根据关键词")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -S "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("keyword"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某个commit之后的所有变动，每个commit占据一行")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" HEAD --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("format:%s\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件')]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" HEAD --grep feature\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某个文件的版本历史，包括文件改名")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --follow "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" whatchanged "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示指定文件相关的每一次diff")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -p "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示过去5次提交")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -5 --pretty --oneline\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示所有提交过的用户，按提交次数排序")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" shortlog -sn\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示指定文件是什么人在什么时间修改过")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" blame "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示暂存区和工作区的差异")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示暂存区和上一个commit的差异")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --cached "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示工作区与当前分支最新commit之间的差异")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" HEAD\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示两次提交之间的差异")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("first-branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("second-branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示今天你写了多少行代码")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --shortstat "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@{0 day ago}"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某次提交的元数据和内容变化")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某次提交发生变化的文件")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show --name-only "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某次提交时，某个文件的内容")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示当前分支的最近几次提交")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);