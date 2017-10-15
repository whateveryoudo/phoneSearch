/**
 * Created by Administrator on 2017/10/10.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import loginMutations  from './login/mutations'
Vue.use(Vuex)
const login = {
    state : {
        userInfo : {
            phone : ''
        },
        reqId : 'mobile_123456',
        firstMsgSendTimestamp : ''
    },
    mutations  : loginMutations
}
export default new Vuex.Store({
    modules : {
        login
    }
})