/**
 * Created by Administrator on 2017/10/10.
 */
import {
    SAVE_PHONE,
    SAVE_TIRSTTIME,
    SAVEREQID,
    UPDATE_PROGRESS,
    SAVE_PROGRESS
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
    [SAVEREQID](state,{reqId}){
        if(reqId){
            state.reqId  = reqId;
        }
    },
    [SAVE_PROGRESS](state,{stepIndex}){
        let progressSteps = Object.assign(state.progressSteps);
        if(progressSteps.length < 0 || stepIndex == undefined){return}
        progressSteps[stepIndex - 1].isComplete = true;
        state.progressSteps = progressSteps;
    },
    [UPDATE_PROGRESS](state,{stepIndex}){
        let progressSteps = Object.assign(state.progressSteps);
        progressSteps.forEach((item,index) => {
            if(index + 1 >= stepIndex && item){//大于等于的步数去除
                item.isComplete = false;
            }
        })
        state.progressSteps = progressSteps;
    }

}
