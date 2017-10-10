/**
 * Created by Administrator on 2017/10/10.
 */
import {
    SAVE_PHONE
} from './types'
export default {
    [SAVE_PHONE](state,{phone}){
        if(phone){
            state.userInfo.phone = phone
        }
    },
}
