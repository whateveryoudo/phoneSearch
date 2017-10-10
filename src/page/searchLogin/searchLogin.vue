<template>
    <div class='rating-page'>
        <head-top :headTitle="headTitle" :isBack="true"></head-top>
        <div class="login_form">
            <section class="field-item-container">
                <mt-field label="短信验证码" placeholder="请输入" v-model="formFiledInfo.msg_code" :attr="{maxlength : 6}"><mt-button class="getMsgCode" type="primary" size="normal" @click.native="getMsgCode" :class="!isSendBtnEable && 'disabled'" v-text="btnText"></mt-button></mt-field>
                <mt-field label="图形验证码" placeholder="请输入" v-model="formFiledInfo.graph_code" :attr="{maxlength : 4}"><img solt="" class="graph" src="../../assets/icons/graph.png" alt=""></mt-field>
            </section>
        </div>
        <!--<mt-popup class="tip_con"-->
                <!--v-model="popupVisible"-->
                <!--position="top"-->
                <!--:modal="false">-->
            <!--<p class="top_tip" solt="">我是顶部内容</p>-->
        <!--</mt-popup>-->
        <!--底部下一步按钮组件-->
        <next-btn :requiredPro="formFiledInfo" formType="login"  text="下一步" @toNext="submitForm"></next-btn>
    </div>
</template>
<script>
    import headTop from '@/components/header/headTop'
    import nextBtn from '@/components/common/nextBtn'
    import {verifyRules} from '@/config/verifyRules'
    import {Toast} from 'mint-ui'
    export default{
        data(){
            return {
                timer : null,
                btnText : '发送验证码',
                headTitle : '四川移动详单查询',
                isSendBtnEable : true,
                formFiledInfo : {
                    msg_code : '',
                    graph_code : ''
                },
                count : 59,
                popupVisible : false
            }
        },
        components : {
            headTop,
            nextBtn
        },
        mounted(){

        },
        created(){
//            this.popupVisible = true;

                this.getMsgCode(1);
        },
        methods: {

            getMsgCode(handleType){
                if(!this.isSendBtnEable){return}

                //提示消息
                //获取store的phone
                let phone = this.$store.state.login.userInfo.phone;
                console.log(phone);
//                if(!phone){
//                    this.$router.push('/')//无手机号,返回首页
//                    return;
//                }
                //发送请求给后台(模拟成功)
                if(handleType == 1){//首次进入
                    Toast({
                        message: '短信已下发至你的手机,请注意查收',
                        position: 'middle',
                        duration: 2000
                    });
                }
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

            },

            submitForm(){
                //校验输入是否正确
                alert("成功了");
                //这里提交后台处理
            }
        }
    }
</script>
<style lang="scss">
    @import "src/style/scss/mixin";
    .getCaptcha.mint-button{
        height:35px;
        margin-left: 0.3rem;
    }
    .graph{
        @include wh(.8rem,35px);
    }
</style>