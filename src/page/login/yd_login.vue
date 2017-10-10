<template>
    <div class='rating-page'>
        <head-top :headTitle="headTitle"></head-top>
        <div class="login_form">
            <section class="field-item-container">
                <mt-field label="姓名" placeholder="请输入持卡人姓名" :attr="{maxlength : 10}" v-model="userInfo.name"></mt-field>
                <mt-field label="身份证号" placeholder="请输入身份证号"  v-model="userInfo.id_card"></mt-field>
                <mt-field label="手机号" placeholder="请输入手机号" type="phone" v-model="userInfo.phone"></mt-field>
                <mt-field label="验证码" placeholder="请输入验证码" v-model="userInfo.msg_code"><mt-button class="getCaptcha" type="primary" size="normal" @click.native="getCaptcha">获取验证码</mt-button></mt-field>
            </section>
        </div>
    </div>
</template>
<script>
    import headTop from '@/components/header/headTop'
    export default{
        data(){
            return {
                headTitle : '四川移动详单查询',
                userInfo : {
                    name: '',
                    id_card: '',
                    phone: '',
                    msg_code: '',
//                        merchant_name: '',
                    merchant_no: '',
                    address: '',
                    address_area: '',
                    address_detail: '',
                    bank_no: '',
//                        bank_province: '',
//                        bank_city: '',
                    bank_area: '',
                },
            }
        },
        components : {
            headTop
        },
        mounted(){

        },
        created(){

        },
        methods: {}
    }
</script>
<style lang="scss">

</style>