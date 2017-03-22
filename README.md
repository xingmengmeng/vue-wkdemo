# vue-webpack多页面

# install dependencies
npm install

# 解析打包
webpack --watch

# nginx 配置  配合路由刷新
location / {
     try_files $uri $uri/ @router;
     index index.html;
 }

location @router {
    rewrite ^.*$ /index.html last;
}