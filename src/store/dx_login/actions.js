/**
 * Created by lenovo on 2017/10/16.
 */
import {getDxReqid} from '@/service/getData'
import {DX_SAVEREQID} from './types'
import {Toast} from 'vuex'
export default {
    updateDxReqid({commit,state}){
        getDxReqid().then((res) => {
            let data = res.data;
            if(data.code == 200){
                commit(DX_SAVEREQID,{reqId : data.data.reqId})
            }else{
                Toast({
                    message: data.msg || '服务器出错...',
                    position: 'middle',
                    duration: 2000
                });
            }
        }).catch((err) => {
            throw new Error(err);
        })
    }
}