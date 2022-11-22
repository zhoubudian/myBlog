# https://github.com/docker-library/docs
# Docker —— 从入门到实践 https://yeasy.gitbook.io/docker_practice/image/dockerfile/references
# docker-部署前端 https://q.shanyue.tech/engineering/749.html#%E4%BD%BF%E7%94%A8-docker-%E9%83%A8%E7%BD%B2%E5%89%8D%E7%AB%AF
# Why can't I use Docker CMD multiple times to run multiple services? https://github.com/sass/node-sass/issues/2165#issuecomment-440999165
# node-sass missing binding error  https://github.com/sass/node-sass/issues/2165#issuecomment-346971541  https://github.com/sass/node-sass/issues/2165#issuecomment-347043659

############ 打包环境制作阶段

# 指定 node 版本号，满足宿主环境
FROM node:16-alpine as builder

# 指定工作目录，将代码添加至此
WORKDIR /client

ADD package.json /client/
RUN npm install -g npm@9.1.2
# 如何将项目跑起来
RUN npm install
# RUN yarn add pnpm
# 解决
RUN npm rebuild node-sass

ADD . /client/

RUN npm run build



# 暴露出运行的端口号，可对外接入服务发现
# EXPOSE 3000

############ 生产镜像制作阶段
# 选择更小体积的基础镜像
FROM nginx:alpine

# 将构建产物移至 nginx 中
COPY --from=builder client/blog/ /usr/share/nginx/html/
COPY ./deploy_conf/conf.d /etc/nginx/conf.d