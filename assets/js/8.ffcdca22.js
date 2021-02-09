(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{369:function(t,e,a){"use strict";a.r(e);var s=a(42),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("很早之前其实用过这款插件，里面功能其实还挺多的，但是跟我们团队的注释方法有些差异，所以我放弃了这款插件。这次回过头来看，有推荐使用的意思")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("blockquote",[a("p",[t._v("由于插件的只有 vscode 版本，另外 IDE 不支持，所以推荐使用 vscode！")])]),t._v(" "),a("p",[t._v("在应用商店中搜索"),a("code",[t._v("koroFileHeader")]),t._v("点击安装，或者打开"),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=OBKoro1.korofileheader",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),a("OutboundLink")],1),t._v("点击 Install，自动安装后即可使用")]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("h4",{attrs:{id:"生成头部注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成头部注释"}},[t._v("#")]),t._v(" 生成头部注释")]),t._v(" "),a("p",[t._v("在当前编辑文件中使用快捷键:"),a("code",[t._v("window")]),t._v("："),a("code",[t._v("ctrl + alt + i")]),t._v(","),a("code",[t._v("mac")]),t._v("："),a("code",[t._v("ctrl + cmd + i")]),t._v(",即可生成文件头部注释。")]),t._v(" "),a("h4",{attrs:{id:"函数注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数注释"}},[t._v("#")]),t._v(" 函数注释")]),t._v(" "),a("ul",[a("li",[t._v("将光标放在函数行或者将光标放在函数上方的空白行")]),t._v(" "),a("li",[t._v("使用快捷键"),a("code",[t._v("window")]),t._v("："),a("code",[t._v("ctrl + alt + t")]),t._v(","),a("code",[t._v("mac")]),t._v("："),a("code",[t._v("ctrl + cmd + t")]),t._v("，即可生成函数注释。")]),t._v(" "),a("li",[t._v("事实上，函数注释在文件的任意位置都可生成，这里需要自己控制。")])]),t._v(" "),a("blockquote",[a("p",[t._v("注意！快捷键可能会和其他插件快捷键会有冲突，如果发现没有作用先去查看快捷键设置\n"),a("img",{attrs:{src:"http://note.youdao.com/yws/res/2135/C56423073F854ED3AF3072FF7A007625",alt:"image"}})])]),t._v(" "),a("h4",{attrs:{id:"头部注释配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#头部注释配置"}},[t._v("#")]),t._v(" 头部注释配置")]),t._v(" "),a("p",[t._v("当你生成头部注释的时候，默认的样式为")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/*\n * @Author: your name\n * @Date: 2020-09-30 11:52:25\n * @LastEditTime: 2020-09-30 17:50:18\n * @LastEditors: your name\n * @Description: In User Settings Edit\n * @FilePath: /ts/demo.js\n */\n")])])]),a("p",[t._v("如果需要修改，可以在设置的"),a("code",[t._v("setting.json")]),t._v("文件中修改"),a("code",[t._v("fileheader.customMade")]),t._v("字段。这是官方的字段说明：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// 头部注释\n"fileheader.customMade": {\n    // 头部注释默认字段\n    "Author": "your name",\n    "Date": "Do not edit", // 设置后默认设置文件生成时间\n    "LastEditTime": "Do not edit", // 设置后，保存文件更改默认更新最后编辑时间\n    "LastEditors": "your name", // 设置后，保存文件更改默认更新最后编辑人\n    "Description": "",\n    "FilePath": "Do not edit", // 设置后，默认生成文件相对于项目的路径\n    "custom_string_obkoro1": "可以输入预定的版权声明、个性签名、空行等"\n},\n')])])]),a("p",[t._v("如果不填写对应属性即关闭对应功能。")]),t._v(" "),a("p",[t._v("值得一提的是，我比较喜欢的是保存文件自动更新编辑时间和编辑人的功能，这样在团队维护版本当中，可以知道谁最后一次维护了文件，有哪一部分不清楚就可以找到最后更新人进行询问。")]),t._v(" "),a("p",[t._v("另外，在新建文件的时候，可以自动添加头部注释，以及可以对已经生成的文件自动添加注释，但是我这边是没有成功的，相关配置也加进去了，可能版本的原因导致没有生效。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(' "fileheader.configObj": {\n    "createHeader": true, // 新建文件自动添加头部注释\n    "autoAdd": true, // 检测文件没有头部注释，自动添加文件头部注释\n    "autoAddLine": 100, // 文件超过多少行数 不再自动添加头部注释\n  },\n')])])]),a("h4",{attrs:{id:"方法注释配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法注释配置"}},[t._v("#")]),t._v(" 方法注释配置")]),t._v(" "),a("p",[t._v("当你生成方法注释的时候，默认的样式为")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/**\n * @description: \n * @param {type} \n * @return {type} \n */\n")])])]),a("p",[t._v("在以前的使用时候，我一直有一个不好的习惯，比如使用字符串类型的，type 我就会写成"),a("code",[t._v("String")]),t._v(",但是我看很多技术大牛都是会写成"),a("code",[t._v("string")]),t._v("，我也在使用ts的时候两种方式都用过，没有任何差异。可能两种写法都是可以被认同的，但是我在之后会统一改成小写的写法")]),t._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),a("p",[t._v("这个插件其实与我们目前的注释方法有很大的差异，虽然可以改成目前的格式，但总觉得有些奇怪，很多地方都需要重新覆盖它的方法，不如使用代码块来的方便，并且局限于"),a("code",[t._v("vscode")]),t._v("编辑器，所以本文只做探讨。")])])}),[],!1,null,null,null);e.default=r.exports}}]);