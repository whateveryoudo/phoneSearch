import {getJssdkSign} from '@/service/getData'
import store from '@/store/index'
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
	if(!name) return;
	if(typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}
/**
 * 是否是微信浏览器
 */
export const isWX = () => {
	let useragent = navigator.userAgent;
    if(useragent.match(/MicroMessenger/i) == 'MicroMessenger') {
    	return true
    }else{
    	return false;
	}
}
/**
 * 是否是支付宝
 */
export const isZFB = () => {
    let useragent = navigator.userAgent;
    if(useragent.match(/AlipayClient/i) == 'AlipayClient') {
        return true
    }else{
        return false;
    }
}
/**
 * 获取localStorage
 */
export const getStore = name => {
	if(!name) return;
	return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
	if(!name) return;
	window.localStorage.removeItem(name);
}

// /**
//  * 获取style样式
//  */
// export const getStyle = (element, attr, NumberMode = 'int') => {
// 	let target;
// 	// scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
// 	if(attr === 'scrollTop') {
// 		target = element.scrollTop;
// 	} else if(element.currentStyle) {
// 		target = element.currentStyle[attr];
// 	} else {
// 		target = document.defaultView.getComputedStyle(element, null)[attr];
// 	}
// 	//在获取 opactiy 时需要获取小数 parseFloat
// 	return NumberMode == 'float' ? parseFloat(target) : parseInt(target);
// }
/**
 * 从url获得参数
 */
export const getRequest = (searchStr) => {
	let url = searchStr; //获取url中"?"符后的字串 
	let theRequest = new Object();
	if(url.indexOf("?") != -1) {
		let str = url.substr(1);
		strs = str.split("&");
		for(let i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}
/**获取页面高度**/
export const getClientWidth = () => {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

}
/**获取页面高度**/
export const getClientHeight = () => {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}
/**获取页面宽度**/
/* 格式化指定时间戳,sign: 分隔符 */
export const formatTimestampToDate = (param, sign,isNeedDate = true) => {
    if (param == "" || param == null || param == undefined) {
        return "";
    }
    sign = sign ? sign : "-";
    var temp = new Date(parseInt(param));
    var year = temp.getFullYear();
    var month = temp.getMonth() + 1;
    if(isNeedDate){
        var day = temp.getDate();
        day < 10 ? day = "0" + day : "";
    }

    month < 10 ? month = "0" + month : "";
    return sign && typeof sign == "string" && sign.length == 1 ? year + sign + month + (isNeedDate ? (sign + day) : '') : year + "-" + month +  (isNeedDate ? ("-" + day) : '');
}
/********获取样式 .style只能获取内联样式  基本上用window.getComputedStyle()就可以了，只有一种情况必须用defaultView，就是在firefox3.6上访问子框架内的样式 (iframe)**********/
export const getStyle = (element,attr,NumberMode = 'int') => {
    let target;
    if(attr == 'scrollTop'){
        target = element.scrollTop;
    }else if(element.currentStyle){//只适用ie
        target = element.currentStyle[attr];
    }else{//第二个参数指伪类
        target = document.defaultView.getComputedStyle(element,null)[attr];
    }
    //获取opacity时需要获取小数
    return NumberMode == 'float' ? parseFloat(target) : parseInt(target);
}
/***********jssdk注册权限验证配置***************/
export const queryJsConfig = (configCb,readyCb) => {
    getJssdkSign(store.state.openid,window.location.href).then((res) => {
        let data = res.data;
        if(Number(data.code) == 10000){
            data = data.data;
			if(typeof configCb === 'function'){
                configCb(data);//微信配置
			}
            //执行配置完成后的回调操作
            if(typeof readyCb === 'function'){
                readyCb();
			}
        }else{
            if(data.msg){
                Toast({
                    message: data.msg,
                    position: 'middle',
                    duration: 2000
                });
                return;
            }
        }
    }).catch((err) => {
        throw new Error(err);
    })
}

