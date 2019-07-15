<template>
    <section class="btn-container">
        <div class='submit_btn_container'>
            <mt-button :disabled="!enable" type="primary" @click="submitForm" size="large">{{text}}</mt-button>
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
        props : ['enable','text','formType'],
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