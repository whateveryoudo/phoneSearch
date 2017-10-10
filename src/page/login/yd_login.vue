<template>
    <div class='rating-page'>
        <head-top :headTitle="headTitle"></head-top>
        <div class="login_form">
            <section class="field-item-container">
                <mt-field label="姓名" placeholder="请输入姓名" type="phone" :attr="{maxlength : 10}" v-model="userInfo.username"></mt-field>
                <mt-field label="电话号码" placeholder="请输入电话号码"  v-model="userInfo.phone"></mt-field>
                <mt-field label="服务密码" placeholder="请输入服务密码" type="password"  v-model="userInfo.pwd"><span solt="" class="forgetPwd" @click="handleForgetPwd">忘记密码</span></mt-field>
                <!--<mt-field label="邮箱" placeholder="请输入邮箱" v-model="userInfo.msg_code"><mt-button class="getCaptcha" type="primary" size="normal" @click.native="getCaptcha">获取验证码</mt-button></mt-field>-->
                <mt-field label="邮箱" placeholder="请输入邮箱" v-model="userInfo.email"></mt-field>
            </section>
        </div>
        <!--底部下一步按钮组件-->
        <next-btn :requiredPro="userInfo" formType="login"  text="下一步" @toNext="submitForm"></next-btn>
    </div>
</template>
<script>
    import headTop from '@/components/header/headTop'
    import nextBtn from '@/components/common/nextBtn'
    import {verifyRules} from '@/config/verifyRules'
    import { MessageBox} from 'mint-ui';
    import {mapMutations} from 'vuex'
    export default{
        data(){
            return {
                headTitle : '四川移动登陆',
                userInfo : {
                    username: '',
                    phone: '',
                    email : "",
                    pwd : ''
                },
            }
        },
        components : {
            headTop,
            nextBtn
        },
        mounted(){

        },
        created(){
        },
        methods: {
            ...mapMutations([
                "SAVE_PHONE"
            ]),
            handleForgetPwd(){
                MessageBox({
                    title : '系统提示',
                    message : '请发送CZMM 身份证到10086',
                    confirmButtonText : '知道了'
                })
            },
            submitForm(){
                //校验输入是否正确
                if(verifyRules.phone(this.userInfo.phone)
                    && verifyRules.pwd(this.userInfo.pwd)
                    && verifyRules.email(this.userInfo.email)){
                    //md5加密密码(提交上传)
                    //模拟成功
                    //提交store
                    this.SAVE_PHONE({phone : this.userInfo.phone});
                    this.$router.push('/searchLogin');
                }

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
        margin-left: 0.5rem;
    }
</style>