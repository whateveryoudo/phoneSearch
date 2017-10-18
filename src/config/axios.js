import {
	baseUrl
} from './env'
import axios from 'axios'
import { Indicator} from 'mint-ui'

export default (url = '', data = {}, type = 'get',isLoading = true) => {
    if (type == 'get') {
        let dataStr = ''; //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        })
        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
    }
    if(isLoading){
        Indicator.open({
            text : '加载中...',
            spinnerType: 'snake'
        })
    }
	let config = {
		url : url,
        baseURL : baseUrl,
		method : type,
        //设置超时时间
        timeout: 10000,
        transformResponse: [function (data) {
            Indicator.close();
		    return data;
        }],
        //返回数据类型
        responseType: 'json', // default
        data: data
    }

    return axios.request(config);
}
