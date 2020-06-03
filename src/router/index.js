import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//require.context()是webpack语法，创建自己的（模块）上下文。
//三个参数：搜索文件夹目录，是否搜索子目录，匹配文件的正则表达式
const files = require.context("./", false, /\.router.js$/);

const routes = [];
files.keys().forEach(key => {
  routes.push(...files(key).default);
});
console.log(routes);

// 入口文件
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes //实现路由的模块化
});

export default router;
