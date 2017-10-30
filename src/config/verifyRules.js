import {Toast} from 'mint-ui'
export const verifyRules =  {
    id_card(val){
        if(!(/(^\d{15}$)|(^\d{17}(\d|X)$)/).test(val)){
            Toast({
                message: '身份证号码格式不正确',
                position: 'middle',
                duration: 2000
            });
            return false;
        }
        return true;
    },
    idCardNo(val){
        if(!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test(val)){
            Toast({
                message: '请输入合法证件号码',
                position: 'middle',
                duration: 2000
            });
            return false;
        }
        return true;
    },
    againDxPwd(pwd,againPwd){
        if(!pwd || !againPwd){
            return false;
        }
        if(this.dxPwd(againPwd)){
            if(pwd !== againPwd){
                Toast({
                    message: '两次输入的密码不一致',
                    position: 'middle',
                    duration: 2000
                });
                return false;
            }else{
                return true;
            }
        }
    },
    dxPwd(val){
        val = val.trim();
        if(val.length < 6 || !(/^[0-9]*$/).test(val)){
            Toast({
                message: '新密码由6位数字组成',
                position: 'middle',
                duration: 2000
            });
            return false;
        }
        return true;
    },
    phone(val,noTip = false){
        if(!(/^(13[0-9]|14[5|7]|15[0-35-9]|17[0-8]|18[0-9])\d{8}$/).test(val)){
            noTip && Toast({
                message: '手机号码格式错误',
                position: 'middle',
                duration: 2000
            });
            return false;
        }
        return true;
    },

    /* 是否满足电信手机号码的要求
     *
     * @Parameters
     * 获取对象验证是否满足regu规则
     * (strMobile.search(re)!=-1//search()中无法检索到返回-1
     * var s=strMobile.substring(0,3);//截取strMobile的前三位
     *       substring(start,end)
     *       substring 方法返回的子串包括 start 处的字符，但不包括 end 处的字符。
     *       如果 start 与 end 相等，那么该方法返回的就是一个空串（即长度为 0 的字符串）。
     *       如果 start 比 end 大，那么该方法在提取子串之前会先交换这两个参数。
     *       如果 start 或 end 为负数，那么它将被替换为 0。
     *
     * if (num =='10649'&&strMobile.length==13){
     * “天翼物联”业务是基于中国电信机器通信专用号码（通信号码为10649，使用位长13位）
     *
     *
     * */
    isTelecomPhone(obj) {
    var strMobile=obj;
    var regu =/1[3-9]+\d{9}/;
    var re = new RegExp(regu);
    if (strMobile.length!=0){
        if (strMobile.search(re)!=-1) {
            var s=strMobile.substring(0,3);
            if(s=="133"||s=="153"||s=="189"||s=="180"||s=="181"||s=="177"||s=="171"||s=="173"){
                return true;
            }else{
                Toast({
                    message: '请输入电信手机号',
                    position: 'middle',
                    duration: 2000
                });
                return false;
            }
        }else{
            var num = strMobile.substring(0,5);
            if (num =='10649'&&strMobile.length==13){
                return true;
            }else{
                Toast({
                    message: '请输入电信手机号',
                    position: 'middle',
                    duration: 2000
                });
                return false;
            }
        }
    }
},

email(val){
        if(!(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/).test(val)){
            Toast({
                message: '邮箱格式错误',
                position: 'middle',
                duration: 2000
            });
            return false;
        }
        return true;
    },
    pwd(val){
        if(!(/^[0-9A-Za-z]{6,}$/).test(val)){
            Toast({
                message: '密码由6位数字字母组成',
                position: 'middle',
                duration: 2000
            });
            return false;
        }
        return true;
    },
    bank_no(val){
        if(!(/^([1-9]{1})(\d{14}|\d{18})$/).test(val)){
            Toast({
                message: '银行卡号格式错误',
                position: 'middle',
                duration: 2000
            });
            return false;
        }
        return true;
    }

}