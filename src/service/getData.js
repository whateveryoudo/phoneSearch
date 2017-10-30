/**
 * Created by Administrator on 2017/10/15.
 */
import axios from '@/config/axios'
/**********移动接口***********/
export const getLoginMsg = (reqId,phone) => axios('/mobile/message',{//获取登陆验证码
    reqId,
    phone
},'post')

export const toLogin = (params) => axios('/mobile/login',params,'post','登录中...')//登陆移动
export const getSms = (reqId,phone) => axios('/mobile/sms',{//获取查询的短信验证码
    reqId,
    phone
},'post')
export const getCaptcha = (reqId) => axios('/mobile/captcha',{//获取图形验证码
    reqId
},'post',undefined,false)

export const toSearch = (params) => axios('/mobile/verify',params,'post','查询中...')//登陆移动

export const getReqid = () => axios('/mobile/session',{},'post',undefined,false);//获取随机的请求id

/**********电信接口***********/
export const getDxReqid = () => axios('/telecom/session',{},'post',undefined,false);//获取随机的请求id

export const getDxLoginMsg = (reqId,phone) => axios('/telecom/message',{//获取登陆验证码
    reqId,
    phone
},'post')

export const toDxLogin = (params) => axios('/telecom/login',params,'post','登录中...')//登陆移动
export const getDxSms = (reqId,phone) => axios('/telecom/sms',{//获取查询的短信验证码
    reqId,
    phone
},'post')
export const getDxCaptcha = (reqId,username) => axios('/telecom/captcha',{//获取图形验证码
    reqId,
    username
},'post',undefined,false)

export const toDxSearch = (params) => axios('/telecom/verify',params,'post','查询中...')//登陆移动