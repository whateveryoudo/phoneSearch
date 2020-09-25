import axios from 'axios';
import { baseUrl } from './env'
import { Toast } from 'mint-ui';

const _axios = axios.create({
  timeout: 600 * 1000,
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json'
  },
});

// 请求发出拦截器
_axios.interceptors.response.use(
  response => {
    if (response.data.code !== 200) {
      Toast(response.data.message || '服务器内部错误');
    }
    return response.data;
  },
  error => {
    switch (error.response.status) {
      case 404:
        Toast('请求地址错误')
        break;
      case 500:
        Toast('服务器内部错误')
        break;
      case 403:
        Toast('请求被拒绝')
        break;
      case 400:
        Toast('请求参数错误')
        break;
      case 405:
        Toast('请求地址或者方法错误')
        break;
      case 401:
        Toast('登录超时，请重新登录')
        break;
    }
    return Promise.reject(error)
  }
); // 请求接收数据拦截器
export default _axios;
