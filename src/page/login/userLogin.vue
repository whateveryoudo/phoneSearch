<template>
    <div class="login_container">
        <div class='rating-page'>
            <div class="nav_wrapper">
                    <div class="nav_item"
                         @click="toggleTab(0)"
                         :class="{selected : selectedTab === 0}"
                    >
                        账号密码
                    </div>
                    <span class="divider-line"></span>
                    <div class="nav_item"
                         @click="toggleTab(1)"
                         :class="{selected : selectedTab === 1}"
                    >
                        验证码
                    </div>
            </div>
            <div class="login_form">
                <section class="field-item-container">
                    <mt-field label="手机号码" placeholder="请输入手机号码"   v-model="userInfo.username"></mt-field>
                    <div class="divider-block" style="background: #fff"></div>
                    <mt-field v-show="selectedTab === 0" label="账号密码" placeholder="请输入账号密码" type="password"  v-model="userInfo.password"></mt-field>
                    <mt-field v-show="selectedTab === 1" label="短信验证码" placeholder="请输入" v-model="userInfo.message" :attr="{maxlength : 4}">
                        <mt-button class="getMsgCode" type="primary" size="normal" @click.native="getMsgCode" :class="!isSendBtnEable && 'disabled'" v-text="btnText"></mt-button>
                    </mt-field>
                </section>
            </div>
            <!--底部下一步按钮组件-->
            <next-btn
                    :enable="validSuc"
                    formType="login"
                    text="登录"
                    @toNext="submitForm"
            ></next-btn>
            <div class="deal-wrapper">
                <span class="checkbox"
                      :class="{'selected' : userInfo.dealFlag}"
                      @click="toggleDealStatus"
                ></span>
                <div>
                    我已阅读并同意
                    <router-link :to="{path : '/deal/1'}">《马上消费金融注册协议》</router-link> <br/>
                    <router-link :to="{path : '/deal/2'}">《隐私权政策》</router-link>
                </div>

            </div>
        </div>
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
    import { Indicator} from 'mint-ui'
    export default{
        data(){
            return {
                //模拟登录用户手机匹配（白名单）
                whiteUserList : {
                    13269982414 : {username : 13269982414,password : 'qazweo123'},
                    15910459178 : {username : 15910459178,password : 'krthu890'},
                    15806476527 : {username : 15806476527,password : 'qazplml'},
                    17359082567 : {username : 17359082567,password : '123007n'},
                },
                selectedTab : 0,
                timer : null,
                count : 59,
                btnText : '发送验证码',
                isSendBtnEable : true,
                userInfo : {
                    username: '',
                    password : '',
                    message : '',
                    dealFlag : true
                }
            }
        },
        computed:{
            validSuc : function(){
                if(verifyRules.phone(this.userInfo.username,false) && this.userInfo.dealFlag){//手机号正确
                    if(this.selectedTab === 0 && this.userInfo.password){
                        return true;
                    }else if(this.selectedTab === 1 && this.userInfo.message && this.userInfo.message.length === 4){//验证码4位
                        return true;
                    }
                }
               return false;
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
            //切换登录方式
            toggleTab(index){
                this.selectedTab = index;
            },
            //勾选协议
            toggleDealStatus(){
              this.userInfo.dealFlag = !this.userInfo.dealFlag;
            },
            getMsgCode(){
                if(!this.isSendBtnEable){return}
                //判断手机号是否存在
                if(!this.userInfo.username){
                    Toast({
                        message: '请先输入手机号码',
                        position: 'middle',
                        duration: 2000
                    });
                    return;
                }
                if( verifyRules.phone(this.userInfo.username)){
                    //这里模拟下发验证码
                    setTimeout(() => {
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
                    },1000)

//                    getLoginMsg(this.reqId,this.userInfo.username).then((res) => {
//                        let data = res.data;
//                        if(data.code == 200){
//                            Toast({
//                                message: '短信发送成功!',
//                                position: 'middle',
//                                duration: 2000
//                            });
//                            //将当前时间撮存入store中
//                            this.SAVE_TIRSTTIME({time : new Date().getTime()});
//                            this.isSendBtnEable = false;
//                            this.btnText = "重新发送(" + this.count + "s)";
//                            this.timer = setInterval(() => {
//                                this.count--;
//                                if(this.count <= 0){
//                                    clearInterval(this.timer);
//                                    this.btnText = '重新发送';
//                                    this.isSendBtnEable = true;
//                                    this.count = 59;
//                                }else{
//                                    this.btnText = "重新发送(" + this.count + "s)";
//                                }
//                            },1000)
//                        }else{
//                            Toast({
//                                message: data.msg || '服务器出错...',
//                                position: 'middle',
//                                duration: 2000
//                            });
//                        }
//                    }).catch((err) => {
//                        throw new Error(err);
//                    });
                }
            },

            submitForm(){
                let self = this;
                Indicator.open({
                    text : '登录中...',
                    spinnerType: 'snake'
                })
                setTimeout(function(){
                    Indicator.close();
                    if(self.selectedTab === 1){//禁止短信登录
                        Toast({
                            message: '短信验证码错误',
                            position: 'middle',
                            duration: 1000
                        });
                    }
                    if(self.whiteUserList[self.userInfo.username]
                        && self.whiteUserList[self.userInfo.username].password === self.userInfo.password
                    ){
                        Toast({
                            message: '登录成功!',
                            position: 'middle',
                            duration: 1000
                        });
                        self.$router.push('/confirmLoan');
                    }else{
                        Toast({
                            message: '账号密码错误',
                            position: 'middle',
                            duration: 1000
                        });
                    }
                },1000)

                //校验输入是否正确
//                if(verifyRules.phone(this.userInfo.username)
//                    && verifyRules.email(this.userInfo.mail)){
//                    //md5加密账号密码(提交上传)
//                    toLogin({...this.userInfo,reqId : this.reqId}).then((res) => {
//                        let data = res.data;
//                         if(data.code == 200){
//                             Toast({
//                                 message: '登录成功!',
//                                 position: 'middle',
//                                 duration: 1000
//                             });
//                             //提交store
//                             this.SAVE_PHONE({phone : this.userInfo.username});
//
//                             setTimeout(() => {
//                                 this.$router.push('/searchLogin');
//                                 //跟新顶部的进度
//                                 this.SAVE_PROGRESS({stepIndex : 1});
//                             },1000)
//                         }else{
//                             Toast({
//                                 message: data.msg || '服务器出错...',
//                                 position: 'middle',
//                                 duration: 2000
//                             });
//                         }
//                    }).catch((err) => {
//                        throw new Error(err);
//                    });
//                }

            }
        }
    }
</script>
<style lang="scss" scope>
    @import "src/style/scss/mixin";
    .nav_wrapper{
        box-sizing: border-box;
        margin-bottom: .3rem;
        padding-left: .15rem;
            @include fj(flex-start);
            @include sc(24px,#000);
            div.nav_item{
                color:#ccc;
                position: relative;
                padding-bottom: .1rem;
                &.selected{
                    color:#000;
                }
                &.selected:after{
                    content: ' ';
                    background-color:$color-primary;
                    width:.3rem;
                    height:3px;
                    border-radius: 3px;
                    position: absolute;
                    bottom:0;
                    left:50%;
                    transform: translateX(-50%);
                }
            }
            .divider-line{
                background-color:#ddd;
                width:1px;
                height:14px;
                position: relative;
                top:-6px;
                display: inline-block;
                margin:0 .13rem;
            }
    }
    .login_container{
        .rating-page{
            top: .9rem;
            background-color: #fff;
        }
    }
    .deal-wrapper{
        display: flex;
        padding:0 .15rem;
        height:20px;
        line-height: 20px;
        div:last-child{
            margin-left: .05rem;
            line-height: 1.7;
        }
        a{
            color:$color-primary;
        }
    }
    .divider-block{
        width:100%;
        height:.15rem;
    }

    .getCaptcha.mint-button{
        height:35px;
        margin-left: 0.5rem;

    }
</style>