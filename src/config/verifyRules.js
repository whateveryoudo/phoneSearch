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
    phone(val){
        if(!(/^(13[0-9]|14[5|7]|15[0-35-9]|17[0-8]|18[0-9])\d{8}$/).test(val)){
            Toast({
                message: '手机号码格式错误',
                position: 'middle',
                duration: 2000
            });
            return false;
        }
        return true;
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