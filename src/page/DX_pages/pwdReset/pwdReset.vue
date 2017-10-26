<template>
    <div class="login_container">
        <head-top isBack="true" :headTitle="headTitle"></head-top>
        <div class='rating-page'>
            <div class="login_form">
                <section class="field-item-container">
                    <mt-field label="电话号码" placeholder="请输入电信手机号码"  v-model="formFiledInfo.phone"></mt-field>
                    <mt-field label="证件号码" placeholder="请输入你的证件号码"  v-model="formFiledInfo.idCardNo"></mt-field>
                    <mt-field label="新密码" placeholder="请输入" type="password" :attr="{maxlength : 6}"  v-model="formFiledInfo.newPwd"></mt-field>
                    <mt-field label="确认新密码" placeholder="请再次输入" type="password" :attr="{maxlength : 6}"  v-model="formFiledInfo.repeatPwd"></mt-field>
                    <mt-field label="短信验证码" placeholder="请输入" v-model="formFiledInfo.sms" :attr="{maxlength : 6}"><mt-button class="getMsgCode" type="primary" size="normal" @click.native="getMsgCode" :class="!isSendBtnEable && 'disabled'" v-text="btnText"></mt-button></mt-field>
                    <mt-field label="图形验证码" placeholder="请输入" v-model="formFiledInfo.captcha" :attr="{maxlength : 6}"><img v-if="captchaUrl" solt="" class="graph" :src="`data:image/png;base64,${captchaUrl}`" @click='captcha' alt=""></mt-field>
                </section>
            </div>
            <!--<div class="switch_container">-->
                <!--<mt-switch v-model="isAgree"></mt-switch>-->
                <!--<router-link class="toAgreeMent" to="/yd_login/agreement" style="color:#0894ec;">《用户授权协议》</router-link>-->
            <!--</div>-->
            <!--底部下一步按钮组件-->
            <next-btn :requiredPro="formFiledInfo" formType="dx_login" :agree="isAgree"  text="立即重置" @toNext="submitForm"></next-btn>
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

    import {getLoginMsg,toLogin,getCaptcha} from '@/service/getData'
    export default{
        data(){
            return {
                headTitle : '重置密码',
                timer : null,
                count : 59,
                formFiledInfo : {
                    phone: '',
                    idCardNo : '',
                    newPwd : '',
                    repeatPwd : '',
                    sms : '',
                    captcha : ''
                },
                captchaUrl : '',
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
            //获取session随机id
            if(!this.reqId){
                this.updateReqid();
            }
            //跟新顶部进度
            this.UPDATE_PROGRESS({stepIndex : 1});
            //获取图形验证码
            this.captcha();
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
            getMsgCode(){
                if(!this.isSendBtnEable){return}
                //判断手机号是否存在
                if(!this.formFiledInfo.username){
                    Toast({
                        message: '请先输入电话号码',
                        position: 'middle',
                        duration: 2000
                    });
                    return;
                }
                if( verifyRules.phone(this.formFiledInfo.username)){
                    getLoginMsg(this.reqId,this.formFiledInfo.username).then((res) => {
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
//               //verifyRules.pwd(this.formFiledInfo.pwd)
                //校验输入是否正确
                if(verifyRules.phone(this.formFiledInfo.phone)
                    && verifyRules.idCardNo(this.formFiledInfo.idCardNo)
                    && verifyRules.dxPwd(this.formFiledInfo.newPwd)
                    && verifyRules.againDxPwd(this.formFiledInfo.newPwd,this.formFiledInfo.repeatPwd)){
                    console.log('验证通过')
                    //md5加密密码(提交上传)
                    toLogin({...this.formFiledInfo,reqId : this.reqId}).then((res) => {
                        let data = res.data;
                        if(data.code == 200){
                            Toast({
                                message: '登录成功!',
                                position: 'middle',
                                duration: 1000
                            });
                            //提交store
                            this.SAVE_PHONE({phone : this.formFiledInfo.username});

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
        top: .45rem;
    }
    .graph{
        @include wh(.8rem,35px);
    }
    .getCaptcha.mint-button{
        height:35px;
        margin-left: 0.5rem;
    }
</style>