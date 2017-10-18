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
if(process.env.NODE_ENV == 'development'){
    // baseUrl = 'http://119.23.22.113/api';
    baseUrl = '';
}else if(process.env.NODE_ENV == 'production'){
    baseUrl = 'http://119.23.22.113/api';
}

export {
    baseUrl,
	routerMode,
	imgBaseUrl,
    imgBaseUrl1,
}