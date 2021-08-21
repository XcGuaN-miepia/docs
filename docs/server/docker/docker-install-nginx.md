# Docker安装nginx
## 安装docker-compose

由于我的服务器上已经有了docker-compose，我也不知道我怎么装的，跳过...

## 使用docker-compose安装nginx

### 1、编写docker-compose.yml文件

```yaml
version: '3.8' # 使用的docker-compose版本
services:
  web: # 自定义服务名称
    image: nginx # 指定服务的镜像名称或镜像 ID。如果镜像在本地不存在，Compose 将会尝试拉取这个镜像。
    ports:
      - '80:80' # 映射端口，前面为本机端口，后面为容器暴露端口
    volumes:
      - /opt/nginx-html:/usr/share/nginx/html:ro # 数据卷挂载，前面为本机目录，后面为容器地址，挂载后可以在本机目录编辑文件,:ro为容器只读文件，不可以处理文件
```

### 2、使用docker-compose安装

因为我使用的都是绝对路径，所以在服务器上位置也不用太在意，安装完后就可以删除，随便放了一个目录。

在目录路径下使用命令安装文件

```bash
$ docker-compose up -d
```

[-d]的意思是在后台运行，如果不需要可以去掉。

一般情况下，在安装完成后输入地址能访问，但是我挂载目录没有放文件所以直接403，也懒得搞了，能知道怎么弄就行

