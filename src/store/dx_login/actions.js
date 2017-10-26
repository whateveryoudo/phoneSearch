/**
 * Created by lenovo on 2017/10/16.
 */
import {getReqid} from '@/service/getData'
import {SAVEREQID} from './types'
import {Toast} from 'vuex'
export default {
    updateReqid({commit,state}){
        getReqid().then((res) => {
            let data = res.data;
            if(data.code == 200){
                commit(SAVEREQID,{reqId : data.data.reqId})
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