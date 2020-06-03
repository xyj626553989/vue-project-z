export default [
  {
    path: '/',
    component: () => import(/*webpackChunkName:'home'*/ '@/views/Home.vue'), //懒加载模式，按需加载
  },
  {
    // 这个* 会被处理到当前所有路由的最后，与位置无关。
    path: '*',
    component: () => import(/*webpackChunkName:'404'*/ '@/views/404.vue'),
  },
]
