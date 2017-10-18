<template>
    <section class="btn-container">
        <div class='submit_btn_container'>
            <mt-button :disabled="!toNextStep" type="primary" @click="submitForm" size="large">{{text}}</mt-button>
        </div>
    </section>
</template>
<script>
    import {Toast} from 'mint-ui'
    export default{
        data(){
            return {
            }
        },
        props : ['requiredPro','text','formType','agree'],
        computed : {
            toNextStep : function(){
                //是否能够点击下一步
                for(var k in this.requiredPro){
                    var item = this.requiredPro[k];
                    if(item == undefined || item == null || item == ''){
                        return false;
                    }
                }
                switch (this.formType){//页面类型判断
                    case 'yd_login':
                        if(this.agree){
                            return true;
                        }
                        break;
                }
                return true;

            }
        },
        mounted(){

        },
        created(){

        },
        methods: {
            submitForm(){
                this.$emit('toNext');
            }
        }
    }
</script>
<style lang="scss">

</style>