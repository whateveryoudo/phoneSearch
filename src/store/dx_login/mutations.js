/**
 * Created by Administrator on 2017/10/10.
 */
import {
    DX_SAVE_PHONE,
    DX_SAVE_TIRSTTIME,
    DX_SAVEREQID,
    DX_UPDATE_PROGRESS,
    DX_SAVE_PROGRESS
} from './types'
export default {
    [DX_SAVE_PHONE](state,{phone}){
        if(phone){
            state.userInfo.phone = phone
        }
    },
    [DX_SAVE_TIRSTTIME](state,{time}){
        if(time){
            state.firstMsgSendTimestamp = time
        }
    },
    [DX_SAVEREQID](state,{reqId}){
        if(reqId){
            state.reqId  = reqId;
        }
    },
    [DX_SAVE_PROGRESS](state,{stepIndex}){
        let progressSteps = Object.assign(state.progressSteps);
        if(progressSteps.length < 0 || stepIndex == undefined){return}
        progressSteps[stepIndex - 1].isComplete = true;
        state.progressSteps = progressSteps;
    },
    [DX_UPDATE_PROGRESS](state,{stepIndex}){
        let progressSteps = Object.assign(state.progressSteps);
        progressSteps.forEach((item,index) => {
            if(index + 1 >= stepIndex && item){//大于等于的步数去除
                item.isComplete = false;
            }
        })
        state.progressSteps = progressSteps;
    }

}
