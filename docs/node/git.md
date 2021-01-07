# git常用命令
## git查看修改行数
```shell
$ git log --since="<开始日期>"\
          --before="<结束日期>"\
          --author="<修改人>"\
          --pretty=tformat: --numstat |
          awk '{ add += $1; subs += $2 ;loc += $1 - $2 }
          END { printf "added lines: %s removed lines : %s total lines: %s\n",
          add,subs,loc }'
```
## git配置
### 初始化git
```shell
$ git init
```
### 克隆仓库
```shell
$ git clone <仓库地址> <克隆本地文件名称>
```
### 配置用户名邮箱
如果你要修改当前全局的用户名和邮箱时，需要在上面的两条命令中添加一个参数，--global，代表的是全局。
命令分别为
```shell
$ git config [--global] user.name <你的目标用户名>
```
```shell
$ git config [--global] user.email <你的目标邮箱名>
```
### 配置模板
```shell
$ git config --global commit.template <模板文件名>
```
## Branch分支
### 查看本地分支(带*为正在使用分支)
```shell
$ git branch # 本地分支(带*为正在使用分支)
$ git branch -r # 远程分支
$ git branch -a # 本地 + 远程分支
```
### 新建分支
```shell
$ git branch <分支名> # 停留在当前分支
$ git checkout -b <分支名> # 切换到新分支
```
### 删除本地分支
```shell
$ git branch -d <分支名> # 没有合并需要强制删除改为-D
```
### 删除远程分支
```shell
$ git push origin --delete <分支名>
# $ git branch -dr [remote/branch] # 看了一下可能这个只是删除本地的远程列表，重新拉取还会有
```
### 切换分支
```shell
$ git checkout <分支名>
```
### 删除不存在的远程分支
```shell
$ git remote prune origin
```
### 修改分支名
```shell
$ git branch -m <旧分支> <新分支> # 将本地旧分支切一个分支到本地
$ git push --delete origin <旧分支> # 删除远程分支
$ git push origin <新分支> # 将本地新分支推送到远程
```
### 检出分支
```shell
$ git checkout <分支名/提交hash值>
```
## Tag标签
### 查看tag
```shell
$ git tag
```
### 创建tag
```shell
$ git tag -a <tag名称> [-m "<tag信息>"]
```
### 推送tag
```shell
$ git push origin [tag名称] # 指定tag
$ git push origin --tags # 所有tag
```
### 删除tag
```shell
$ git tag -d <tag名称>
```
### 删除远程tag
```
$ git push origin :refs/tags/<tag名称>
```