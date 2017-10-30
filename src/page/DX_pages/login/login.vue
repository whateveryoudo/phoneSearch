<template>
    <div class="login_container">
        <head-top isBack="true" :headTitle="headTitle"></head-top>
        <top-progress :moduleType="searchType"></top-progress>
        <div class='rating-page'>
            <div class="login_form">
                <section class="field-item-container">
                    <!--v-on:keyup.native="listenEmailInput"-->
                    <mt-field label="姓名" placeholder="请输入姓名"  :attr="{maxlength : 10}" v-model="userInfo.name"></mt-field>
                    <mt-field label="电话号码"  placeholder="请输入电话号码" :attr="{maxlength : 11}"  v-model="userInfo.username"></mt-field>
                    <mt-field label="服务密码" placeholder="请输入服务密码" type="password" :attr="{maxlength : 6}"  v-model="userInfo.password"><span solt="" class="forgetPwd" @click="handleForgetPwd">忘记密码</span></mt-field>
                    <mt-field v-if="captchaUrl" label="图形验证码" placeholder="请输入" v-model="userInfo.captcha" :attr="{maxlength : 4}"><img solt="" class="graph" :src="`data:image/png;base64,${captchaUrl}`" @click='captcha' alt=""></mt-field>
                    <mt-field label="邮箱" placeholder="请输入邮箱" v-model="userInfo.mail"></mt-field>
                </section>
            </div>
            <!--<div class="switch_container">-->
                <!--<mt-switch v-model="isAgree"></mt-switch>-->
                <!--<router-link class="toAgreeMent" to="/yd_login/agreement" style="color:#0894ec;">《用户授权协议》</router-link>-->
            <!--</div>-->
            <!--底部下一步按钮组件-->
            <!--:agree="isAgree"-->
            <next-btn :requiredPro="userInfo" formType="yd_login"   text="下一步" @toNext="submitForm"></next-btn>
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
    import {toDxLogin,getDxCaptcha} from '@/service/getData'
    export default{
        data(){
            return {
                headTitle : '四川电信登陆',
                searchType : 'DX',
                userInfo : {
                    name : '',
                    username: '',
                    password : '',
                    captcha : '',
                    mail : ''
                },
                captchaLoaded : false,//防止用户重复刷新
//                isAgree : true,//是否同意协议
                captchaUrl : ''
            }
        },
        computed:{
            ...mapGetters([
                'dx_reqId'
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
            if(!this.dx_reqId){
                this.updateDxReqid();
            }
            //跟新顶部进度
            this.DX_UPDATE_PROGRESS({stepIndex : 1});
        },
        methods: {
            ...mapMutations([
                "DX_UPDATE_PROGRESS",
                "DX_SAVE_PROGRESS",
                "DX_SAVE_PHONE"
            ]),
            ...mapActions([
                "updateDxReqid"
            ]),
            listenPhoneInput(){
                //判断图形验证码是否存在(通过手机号)
                if(this.userInfo.username == ''){
                    this.captchaUrl = '';
                    //开启监听
                    this.captchaLoaded = false;
                    return;
                }
                if(verifyRules.phone(this.userInfo.username,false) && verifyRules.isTelecomPhone(this.userInfo.username)){
                    if(!this.captchaLoaded){//用户已经显示图形验证码,不会再次去请求
                        this.captcha();
                    }
                }
            },
            //获取图形验证码
            captcha(){
                getDxCaptcha(this.dx_reqId,this.userInfo.username).then((res) => {
                    let data = res.data;
                    if(data.code == 200){
                        this.captchaUrl = data.data.captcha || '';
                        this.captchaLoaded = true;//用户已经显示了验证码
                    }else if(data.code == 400){//不需要图形验证码
                        this.captchaUrl = '';
                        //将当前info对象中的图形验证码项移除
                        delete this.userInfo.captcha;
                    }
                }).catch((err) => {
                    throw new Error(err);
                });
            },
            handleForgetPwd(){
//                Toast({//暂时未开通
//                    message: '敬请期待...',
//                    position: 'middle',
//                    duration: 2000
//                });
//                return;
                window.location.href = 'http://wap.ct10000.com/wap/wap_updatapwd.html';
//                this.$router.push('/pwdReset');
            },

            submitForm(){
//               //verifyRules.pwd(this.userInfo.pwd)
                //校验输入是否正确
                if(verifyRules.phone(this.userInfo.username) && verifyRules.isTelecomPhone(this.userInfo.username)
                    && verifyRules.email(this.userInfo.mail)){
                    //md5加密密码(提交上传)
                    toDxLogin({...this.userInfo,reqId : this.dx_reqId}).then((res) => {
                        let data = res.data;
                         if(data.code == 200){
                             Toast({
                                 message: '登录成功!',
                                 position: 'middle',
                                 duration: 1000
                             });
                             //提交store
                             this.DX_SAVE_PHONE({phone : this.userInfo.username});
                             setTimeout(() => {
                                 this.$router.push('/dx_search_login');
                                 //跟新顶部的进度
                                 this.DX_SAVE_PROGRESS({stepIndex : 1});
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
            'userInfo.username' : function(value){//监听电话号码变化
                this.listenPhoneInput();
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
        margin-left: 0.5rem;
    }
    .graph{
        @include wh(.8rem,35px);
    }
</style>