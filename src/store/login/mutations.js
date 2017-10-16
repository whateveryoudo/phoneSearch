/**
 * Created by Administrator on 2017/10/10.
 */
import {
    SAVE_PHONE,
    SAVE_TIRSTTIME
} from './types'
export default {
    [SAVE_PHONE](state,{phone}){
        if(phone){
            state.userInfo.phone = phone
        }
    },
    [SAVE_TIRSTTIME](state,{time}){
        if(time){
            state.firstMsgSendTimestamp = time
        }
    },
}
