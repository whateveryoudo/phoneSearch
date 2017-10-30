<template>
    <div class="search_container">
        <head-top :headTitle="headTitle" :isBack="true"></head-top>
        <top-progress :moduleType="searchType"></top-progress>
        <div class='rating-page'>

            <div class="login_form">
                <section class="field-item-container">
                    <mt-field label="短信验证码" placeholder="请输入" v-model="formFiledInfo.message" :attr="{maxlength : 6}"><mt-button class="getMsgCode" type="primary" size="normal" @click.native="getMsgCode" :class="!isSendBtnEable && 'disabled'" v-text="btnText"></mt-button></mt-field>
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
    </div>
</template>
<script>
    import headTop from '@/components/header/headTop'
    import nextBtn from '@/components/common/nextBtn'
    import topProgress from '@/components/common/topProgress'
    import {verifyRules} from '@/config/verifyRules'
    import {mapGetters} from 'vuex'
    import {Toast,MessageBox} from 'mint-ui'
    import {getDxSms,toDxSearch} from '@/service/getData'
    import {mapMutations} from 'vuex'
    export default{
        data(){
            return {
                timer : null,
                searchType : 'DX',
                btnText : '发送验证码',
                headTitle : '四川电信详单查询',
                formFiledInfo : {
                   message : ''
                },
                count : 59,
                isSendBtnEable : true
            }
        },
        computed : {
            ...mapGetters([
                'dx_reqId'
            ])
        },
        components : {
            headTop,
            nextBtn,
            topProgress
        },
        mounted(){

        },
        created(){
            if(!this.dx_reqId){
                this.$router.push('/');
                return;
            }
            //跟新顶部进度
            this.DX_UPDATE_PROGRESS({stepIndex : 2});
            this.getMsgCode();
        },
        methods: {
            ...mapMutations([
                "DX_UPDATE_PROGRESS",
                "DX_SAVE_PROGRESS",
            ]),
            getMsgCode(){
                if(!this.isSendBtnEable){return}
                //提示消息
                //获取store的phone
                let phone = this.$store.state.dx_login.userInfo.phone;
                if(!phone){
                    this.$router.push('/')//无手机号,返回首页
                    return;
                }
                getDxSms(this.dx_reqId,phone).then((res) => {
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
            submitForm(){
                toDxSearch({...this.formFiledInfo,reqId : this.dx_reqId}).then((res) => {
                    let data = res.data;
                    if(data.code == 200){
                        //跳转邮件发送成功界面
                        this.$router.push('/dx_sendStatus');//跳转邮件发送完成界面
                        //跟新顶部的进度
                        this.DX_SAVE_PROGRESS({stepIndex : 2});
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