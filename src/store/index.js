/**
 * Created by Administrator on 2017/10/10.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import loginMutations  from './login/mutations'
import loginActions  from './login/actions'


import dxLoginMutations  from './login/mutations'
import dxLoginActions  from './login/actions'
Vue.use(Vuex)

const loginGetters = {
    reqId : state => state.reqId
}

const dxLoginGetters = {
    reqId : state => state.reqId
}
//移动模块
const login = {
    state : {
        userInfo : {
            phone : ''
        },
        //顶部进度控制
        progressSteps : [
            {
                title : '登录',
                isComplete : false
            },
            {
                title : '查询',
                isComplete : false
            },
            {
                title : '',
                isComplete : false
            }
        ],
        reqId : '',
        firstMsgSendTimestamp : ''
    },
    mutations  : loginMutations,
    actions : loginActions,
    getters: loginGetters
}

//电信模块
const dx_login = {
    state : {
        userInfo : {
            phone : ''
        },
        //顶部进度控制
        progressSteps : [
            {
                title : '登录',
                isComplete : false
            },
            {
                title : '查询',
                isComplete : false
            },
            {
                title : '',
                isComplete : false
            }
        ],
        reqId : '',
        firstMsgSendTimestamp : ''
    },
    mutations  : dxLoginMutations,
    actions : dxLoginActions,
    getters: dxLoginGetters
}
export default new Vuex.Store({
    modules : {
        login,
        dx_login
    }
})