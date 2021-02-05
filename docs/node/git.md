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
### 拉取分支
```shell
$ git pull
```
### 拉取远程分支
```shell
$ git fetch origin <远程分支名>
$ git checkout -b <本地分支名> origin/<远程分支名> # 在本地创建分支，并将远程分支的信息同步到本地分支
```
### 拉取其他远程分支
```shell
$ git merge <拉取分支名>
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
### 列出tag
```shell
$ git tag
```
### 创建tag
```shell
$ git tag <tag名称> [-m "<tag信息>"]
```
### 查看tag信息
```shell
$ git show <tag名称>
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
## 查看信息(之后整理)
```shell
# 显示有变更的文件
$ git status

# 显示当前分支的版本历史
$ git log

# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat

# 搜索提交历史，根据关键词
$ git log -S [keyword]

# 显示某个commit之后的所有变动，每个commit占据一行
$ git log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
$ git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]

# 显示指定文件相关的每一次diff
$ git log -p [file]

# 显示过去5次提交
$ git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
$ git blame [file]

# 显示暂存区和工作区的差异
$ git diff

# 显示暂存区和上一个commit的差异
$ git diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD

# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
$ git show [commit]

# 显示某次提交发生变化的文件
$ git show --name-only [commit]

# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]

# 显示当前分支的最近几次提交
$ git reflog
```
