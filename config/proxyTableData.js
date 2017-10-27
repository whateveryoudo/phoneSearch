/**
 * Created by lenovo on 2017/10/27.
 */
//代理接口地址
module.exports = {
    //配置代理
    //中国移动
    '/mobile/message': {
        target: 'http://119.23.22.113:80/api',
        pathRewrite: {
            '^/mobile/message': '/mobile/message'
        }
    },
    '/mobile/login': {
        target: 'http://119.23.22.113:80/api',
        pathRewrite: {
            '^/mobile/login': '/mobile/login'
        }
    },
    '/mobile/captcha': {
        target: 'http://119.23.22.113:80/api',
        pathRewrite: {
            '^/mobile/captcha': '/mobile/captcha'
        }
    },
    '/mobile/sms': {
        target: 'http://119.23.22.113:80/api',
        pathRewrite: {
            '^/mobile/sms': '/mobile/sms'
        }
    },
    '/mobile/verify': {
        target: 'http://119.23.22.113:80/api',
        pathRewrite: {
            '^/mobile/verify': '/mobile/verify'
        }
    },
    '/mobile/session': {
        target: 'http://119.23.22.113:80/api',
        pathRewrite: {
            '^/mobile/verify': '/mobile/session'
        },
    },
    //中国电信
    '/telecom/session': {
        target: 'http://119.23.22.113:80/api',
        pathRewrite: {
            '^/mobile/verify': '/telecom/session'
        },
    },
    '/telecom/login': {
        target: 'http://119.23.22.113:80/api',
        pathRewrite: {
            '^/telecom/login': '/telecom/login'
        }
    },
    '/telecom/captcha': {
        target: 'http://119.23.22.113:80/api',
        pathRewrite: {
            '^/telecom/captcha': '/telecom/captcha'
        }
    },
    '/telecom/sms': {
        target: 'http://119.23.22.113:80/api',
        pathRewrite: {
            '^/telecom/sms': '/telecom/sms'
        }
    },
    '/telecom/verify': {
        target: 'http://119.23.22.113:80/api',
        pathRewrite: {
            '^/telecom/verify': '/telecom/verify'
        }
    }
}