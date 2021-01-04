# git常用命令

### git查看修改行数

```shell
$ git log --since="[开始日期]"\
          --before="[结束日期]"\
          --author="[修改人]"\
          --pretty=tformat: --numstat |
          awk '{ add += $1; subs += $2 ;loc += $1 - $2 }
          END { printf "added lines: %s removed lines : %s total lines: %s\n",
          add,subs,loc }'
```

### git配置
如果你要修改当前全局的用户名和邮箱时，需要在上面的两条命令中添加一个参数，--global，代表的是全局。
命令分别为
```shell
$ git config --global user.name [你的目标用户名]
```
```shell
$ git config --global user.email [你的目标邮箱名]
```
修改模板
```shell
$ git config --global commit.template [模板文件名]
```

### 分支
查看本地分支(带*为正在使用分支)
```shell
$ git branch
```
查看远程分支
```shell
$ git branch -a
```

删除本地分支
```shell
$ git branch -d [分支名] # 没有合并需要强制删除改为-D
```

删除远程分支
```shell
$ git push origin --delete [分支名]
```

切换分支
```shell
$ git checkout [分支名]
```

删除不存在的远程分支
```shell
$ git remote prune origin
```

修改分支名
```shell
$ git branch -m [旧分支] [新分支] # 将本地旧分支切一个分支到本地
$ git push --delete origin [旧分支] # 删除远程分支
$ git push origin [新分支] # 将本地新分支推送到远程
```