<template>
    <div>{{info.name}}-{{info.nickName}}-{{info.info.num}}
        <button @click="emitFun">子组件测试</button>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: ['info'],
        methods: {
            emitFun (){
                this.info.info.num = 50;
            }
        }
    }
</script>

<style scoped>

</style>