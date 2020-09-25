/**
 * 配置编译环境和线上环境之间的切换
 *
 * phpbaseUrl: php接口域名地址
 * javabaseUrl: php接口域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl;
let routerMode = 'history';
let imgBaseUrl = 'https://gw.alicdn.com/tfs/';
let imgBaseUrl1 = 'https://gw.alicdn.com/i3/';
if (process.env.NODE_ENV == 'development') {
  baseUrl = 'http://localhost:5050';
} else if (process.env.NODE_ENV == 'production') {
  baseUrl = 'https://quickloanapi.applinzi.com';
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl,
  imgBaseUrl1,
}
