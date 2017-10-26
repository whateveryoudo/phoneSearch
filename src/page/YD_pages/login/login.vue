<template>
    <div class="login_container">
        <head-top isBack="true" :headTitle="headTitle"></head-top>
        <top-progress></top-progress>
        <div class='rating-page'>
            <div class="login_form">
                <section class="field-item-container">
                    <mt-field label="姓名" placeholder="请输入姓名"  :attr="{maxlength : 10}" v-model="userInfo.name"></mt-field>
                    <mt-field label="电话号码" placeholder="请输入电话号码"  v-model="userInfo.username"></mt-field>
                    <!--<mt-field label="服务密码" placeholder="请输入服务密码" type="password"  v-model="userInfo.pwd"><span solt="" class="forgetPwd" @click="handleForgetPwd">忘记密码</span></mt-field>-->
                    <mt-field label="短信验证码" placeholder="请输入" v-model="userInfo.message" :attr="{maxlength : 6}"><mt-button class="getMsgCode" type="primary" size="normal" @click.native="getMsgCode" :class="!isSendBtnEable && 'disabled'" v-text="btnText"></mt-button></mt-field>

                    <mt-field label="邮箱" placeholder="请输入邮箱" v-model="userInfo.mail"></mt-field>
                </section>
            </div>
            <div class="switch_container">
                <mt-switch v-model="isAgree"></mt-switch>
                <router-link class="toAgreeMent" to="/yd_login/agreement" style="color:#0894ec;">《用户授权协议》</router-link>
            </div>
            <!--底部下一步按钮组件-->
            <next-btn :requiredPro="userInfo" formType="yd_login" :agree="isAgree"  text="下一步" @toNext="submitForm"></next-btn>
        </div>
        <!--子路由切换-->
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    import headTop from '@/components/header/headTop'
    import nextBtn from '@/components/common/nextBtn'
    import topProgress from '@/components/common/topProgress'
    import {verifyRules} from '@/config/verifyRules'
    import { MessageBox,Toast} from 'mint-ui';
    import {mapMutations,mapActions,mapGetters} from 'vuex'
    import {getLoginMsg,toLogin} from '@/service/getData'
    export default{
        data(){
            return {
                headTitle : '四川移动登陆',
                timer : null,
                count : 59,
                userInfo : {
                    name : '',
                    username: '',
                    mail : "",
                    message : ''
                },
                isAgree : true,//是否同意协议
                btnText : '发送验证码',
                isSendBtnEable : true
            }
        },
        computed:{
            ...mapGetters([
                'reqId'
            ]),
        },
        components : {
            headTop,
            nextBtn,
            topProgress
        },
        mounted(){

        },
        created(){
            this.SAVE_PHONE();
            return;
            //获取session随机id
//            if(!this.reqId){
//                this.updateReqid();
//            }
//            //跟新顶部进度
//            this.UPDATE_PROGRESS({stepIndex : 1});
        },
        methods: {
            ...mapMutations([
                "SAVE_PHONE",
                "SAVE_TIRSTTIME",
                "UPDATE_PROGRESS",
                "SAVE_PROGRESS",
            ]),
            ...mapActions([
                "updateReqid"
            ]),

            getMsgCode(){
                if(!this.isSendBtnEable){return}
                //判断手机号是否存在
                if(!this.userInfo.username){
                    Toast({
                        message: '请先输入电话号码',
                        position: 'middle',
                        duration: 2000
                    });
                    return;
                }
                if( verifyRules.phone(this.userInfo.username)){
                    getLoginMsg(this.reqId,this.userInfo.username).then((res) => {
                        let data = res.data;
                        if(data.code == 200){
                            Toast({
                                message: '短信发送成功!',
                                position: 'middle',
                                duration: 2000
                            });
                            //将当前时间撮存入store中
                            this.SAVE_TIRSTTIME({time : new Date().getTime()});
                            this.isSendBtnEable = false;
                            this.btnText = "重新发送(" + this.count + "s)";
                            this.timer = setInterval(() => {
                                this.count--;
                                if(this.count <= 0){
                                    clearInterval(this.timer);
                                    this.btnText = '重新发送';
                                    this.isSendBtnEable = true;
                                    this.count = 59;
                                }else{
                                    this.btnText = "重新发送(" + this.count + "s)";
                                }
                            },1000)
                        }else{
                            Toast({
                                message: data.msg || '服务器出错...',
                                position: 'middle',
                                duration: 2000
                            });
                        }
                    }).catch((err) => {
                        throw new Error(err);
                    });
                }
            },

            submitForm(){
//               //verifyRules.pwd(this.userInfo.pwd)
                //校验输入是否正确
                if(verifyRules.phone(this.userInfo.username)
                    && verifyRules.email(this.userInfo.mail)){
                    //md5加密密码(提交上传)
                    toLogin({...this.userInfo,reqId : this.reqId}).then((res) => {
                        let data = res.data;
                         if(data.code == 200){
                             Toast({
                                 message: '登录成功!',
                                 position: 'middle',
                                 duration: 1000
                             });
                             //提交store
                             this.SAVE_PHONE({phone : this.userInfo.username});

                             setTimeout(() => {
                                 this.$router.push('/searchLogin');
                                 //跟新顶部的进度
                                 this.SAVE_PROGRESS({stepIndex : 1});
                             },1000)
                         }else{
                             Toast({
                                 message: data.msg || '服务器出错...',
                                 position: 'middle',
                                 duration: 2000
                             });
                         }
                    }).catch((err) => {
                        throw new Error(err);
                    });
                }

            }
        },
        watch : {

        }
    }
</script>
<style lang="scss" scoped>
    @import "src/style/scss/mixin";
    .rating-page{
        top: 1rem;
    }
    .getCaptcha.mint-button{
        height:35px;
        margin-left: 0.5rem;
    }
</style>