import {
	baseUrl
} from './env'
import axios from 'axios'
import { Indicator,Toast } from 'mint-ui'

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
            text : 'loading...',
            spinnerType: 'snake'
        })
    }

	let config = {
		url : url,
        baseURL : baseUrl,
		method : type,
        //设置超时时间
        timeout: 1000,
        transformResponse: [function (data) {
		    if(data.errno == 0){
                // 这里提前处理返回的数据
                let code = data.data.data.returnCode;
                Indicator.close();//store中关闭
                if(code == 0){
                    return data.data.data.returnValue;//返回数据
                }
            }else{
                // Toast({
                //     message: data.msg || '服务器出错...',
                //     position: 'middle',
                //     duration: 2000
                // });
            }
        }],
        //返回数据类型
        responseType: 'json', // default
        data: data
    }

    return axios.request(config);
}
