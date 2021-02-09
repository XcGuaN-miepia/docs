#!/usr/bin/env sh
# 确保提交分支为master分支
branch=$(git rev-parse --symbolic --abbrev-ref HEAD)
echo "======= start ======="
if [ "$branch" != "master" ]
then
  echo 'NOT MASTER'
  exit 0
fi

echo "======= end ======="
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:XcGuaN-miepia/XcGuaN-miepia.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:XcGuaN-miepia/docs.git master:gh-pages

cd -