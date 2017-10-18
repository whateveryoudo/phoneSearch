<template>
    <div class="search_container">
        <head-top :headTitle="headTitle" :isBack="true"></head-top>
        <top-progress></top-progress>
        <div class='rating-page'>

            <div class="login_form">
                <section class="field-item-container">
                    <mt-field label="服务密码" placeholder="请输入服务密码" type="password"  v-model="formFiledInfo.servpwd"><span solt="" class="forgetPwd" @click="handleForgetPwd">忘记密码</span></mt-field>
                    <mt-field label="图形验证码" placeholder="请输入" v-model="formFiledInfo.captcha" :attr="{maxlength : 6}"><img solt="" class="graph" :src="`data:image/png;base64,${captchaUrl}`" @click='captcha' alt=""></mt-field>
                    <mt-field label="短信验证码" placeholder="请输入" v-model="formFiledInfo.sms" :attr="{maxlength : 6}"><mt-button class="getMsgCode" type="primary" size="normal" @click.native="getMsgCode" :class="(!isEableClick || !isSendBtnEable) && 'disabled'" v-text="btnText"></mt-button></mt-field>
                </section>
            </div>
            <!--<mt-popup class="tip_con"-->
            <!--v-model="popupVisible"-->
            <!--position="top"-->
            <!--:modal="false">-->
            <!--<p class="top_tip" solt="">我是顶部内容</p>-->
            <!--</mt-popup>-->
            <!--底部下一步按钮组件-->
            <div class="tips">
                <h4>温馨提示:</h4>
                <p>1.若不记得服务密码，请发送CZMM 身份证号（注意身份证号前的空格）到10086。</p>
                <p>2.第二次获取短信验证码需要等待60s。</p>
            </div>
            <next-btn :requiredPro="formFiledInfo" formType="login"  text="查询" @toNext="submitForm"></next-btn>
        </div>
    </div>
</template>
<script>
    import headTop from '@/components/header/headTop'
    import nextBtn from '@/components/common/nextBtn'
    import topProgress from '@/components/common/topProgress'
    import {verifyRules} from '@/config/verifyRules'
    import {mapGetters} from 'vuex'
    import {Toast,MessageBox} from 'mint-ui'
    import {getSms,getCaptcha,toSearch} from '@/service/getData'
    import {mapMutations} from 'vuex'
    export default{
        data(){
            return {
                timer : null,
                timer1 : null,
                btnText : '发送验证码',
                headTitle : '四川移动详单查询',
                captchaUrl : '',
                formFiledInfo : {
                    captcha : '',
                    sms : '',
                    servpwd : ''
                },
//                eableTime : 59,
                count : 59,
                isSendBtnEable : true,
                currentTimeStamp : new Date().getTime(),
                popupVisible : false,
            }
        },
        computed : {
             isEableClick : function(){
                 if(this.diffSecond > 59){
                     this.btnText = '发送验证码';
                     this.timer1 && clearInterval(this.timer1);
                     return true;
                 }else{
                     this.btnText = '发送验证码' + (60 - this.diffSecond) + 's';
                    return false;
                 }
            },
            diffSecond : function(){
                return parseInt((this.currentTimeStamp - this.$store.state.login.firstMsgSendTimestamp) / 1000);
            },
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
            if(!this.reqId){
                this.$router.push('/');
                return;
            }
            //跟新顶部进度
            this.UPDATE_PROGRESS({stepIndex : 2});

            if(!this.isEableClick){
                this.timer1 = setInterval(() => {
                    this.currentTimeStamp += 1000;
                },1000)
            }else{

                this.getMsgCode();
            }
//            this.timer1 = setInterval(() => {
//                    if(this.eableTime < 0){
//                        clearInterval(this.timer1);
//                    }else{
//                        this.eableTime --;
//                    }
//                },1000);
            //获取图形验证码
            this.captcha();
        },
        methods: {
            ...mapMutations([
                "UPDATE_PROGRESS",
                "SAVE_PROGRESS",
            ]),
            handleForgetPwd(){
                MessageBox({
                    title : '系统提示',
                    message : '请发送CZMM 身份证到10086',
                    confirmButtonText : '知道了'
                })
            },
            getMsgCode(){
                if(!this.isEableClick || !this.isSendBtnEable){return}

                //提示消息
                //获取store的phone
                let phone = this.$store.state.login.userInfo.phone;
                if(!phone){
                    this.$router.push('/')//无手机号,返回首页
                    return;
                }
                getSms(this.reqId,phone).then((res) => {
                    let data = res.data;
                    if(data.code == 200){
                        Toast({
                            message: '短信发送成功!',
                            position: 'middle',
                            duration: 2000
                        });
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
            },
            captcha(){
                getCaptcha(this.reqId).then((res) => {
                    let data = res.data;
                    if(data.code == 200){
                        this.captchaUrl = data.data.captcha || '';
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

            },
            submitForm(){
                toSearch({...this.formFiledInfo,reqId : this.reqId,username : this.$store.state.login.userInfo.phone}).then((res) => {
                    let data = res.data;
                    if(data.code == 200){
//                        Toast({
//                            message: '通话详单即将发送到你的邮箱，请注意查收。',
//                            position: 'middle',
//                            duration: 2000
//                        });
//                        setTimeout(() => {
//                            this.$router.go(-1);
//                        },3000)
                        //跳转邮件发送成功界面
                        this.$router.push('/sendStatus');//跳转邮件发送完成界面
                        //跟新顶部的进度
                        this.SAVE_PROGRESS({stepIndex : 2});
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
    }
</script>
<style lang="scss">
    @import "src/style/scss/mixin";
    .rating-page{
        top: 1rem;
    }
    .forgetPwd{
        color:$blue;
    }
    .getCaptcha.mint-button{
        height:35px;
        margin-left: 0.3rem;
    }
    .tips{
        margin: .1rem auto;
        padding:0 .1rem;
        color : red;
        p{
            margin-bottom: .05rem;
            @include sc(.12rem,red);
            opacity: .8;
        }
    }
    .graph{
        @include wh(.8rem,35px);
    }
</style>