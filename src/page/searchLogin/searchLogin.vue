<template>
    <div class='rating-page'>
        <head-top :headTitle="headTitle" :isBack="true"></head-top>
        <div class="login_form">
            <section class="field-item-container">
                <mt-field label="服务密码" placeholder="请输入服务密码" type="password"  v-model="formFiledInfo.servpwd"><span solt="" class="forgetPwd" @click="handleForgetPwd">忘记密码</span></mt-field>
                <mt-field label="图形验证码" placeholder="请输入" v-model="formFiledInfo.captcha" :attr="{maxlength : 6}"><img solt="" class="graph" :src="`data:image/png;base64,${captchaUrl}`" alt=""></mt-field>
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
        <next-btn :requiredPro="formFiledInfo" formType="login"  text="查询" @toNext="submitForm"></next-btn>
    </div>
</template>
<script>
    import headTop from '@/components/header/headTop'
    import nextBtn from '@/components/common/nextBtn'
    import {verifyRules} from '@/config/verifyRules'
    import {Toast,MessageBox} from 'mint-ui'
    import {getSms,getCaptcha,toSearch} from '@/service/getData'
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
                reqId : '',
                count : 59,
                isSendBtnEable : true,
                currentTimeStamp : new Date().getTime(),
                popupVisible : false,
            }
        },
        computed : {
             isEableClick : function(){
              if((this.currentTimeStamp - this.$store.state.login.firstMsgSendTimestamp) > 60 * 1000) {
                  this.btnText = '发送验证码';
                  this.timer1 && clearInterval(this.timer1);
                  return true;
              }else{
                  this.btnText = '请等待...';
                    return false;
              }
            }
        },
        components : {
            headTop,
            nextBtn
        },
        mounted(){

        },
        created(){
            this.reqId = this.$store.state.login.reqId;
            if(!this.isEableClick){
                this.timer1 = setInterval(() => {
                    this.currentTimeStamp += 1000;
                },1000)
            }else{
                this.getMsgCode();
            }
            //获取图形验证码
            this.captcha();
        },
        methods: {
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
                    if(data.code == 300){
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
                        Toast({
                            message: '通话详单即将发送到你的邮箱，请注意查收。',
                            position: 'middle',
                            duration: 1000
                        });
                        setTimeout(() => {
                            this.$router.go(-1);
                        },2000)
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

    .forgetPwd{
        color:$blue;
    }
    .getCaptcha.mint-button{
        height:35px;
        margin-left: 0.3rem;
    }
    .graph{
        @include wh(.8rem,35px);
    }
</style>