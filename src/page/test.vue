<template>
    <div class="container">测试页面-----{{testIndex}}</div>
</template>
<script>
    import {getDxReqid} from '@/service/getData'
    export default{
        data(){
            return {
                dataArr : [
                    {name : 'xiaoming',age : 20},
                    {name : 'xiaohua',age : 21},
                    {name : 'xiaolong',age : 22},
                    {name : 'xiaolong1',age : 25},
                    {name : 'xiaolong2',age : 27}
                    ],
                testIndex : ''
            }
        },

        mounted(){

        },
        created(){
//            var that = this;
//            var i = 0;
//            digui();
//            function digui(){
//                i++;
//                if(i == 3){
//                    that.testIndex = '我是最后结果';
//                }else{
//                    getDxReqid().then(() => {
//                        that.testIndex = '我是临时结果';
//                        if(i < that.dataArr.length){
//                            digui();
//                        }
//                    })
//                }
//            }
            for(var i = 0;i < this.dataArr.length;i++){
                (function (i) {//闭包解决
                    setTimeout(function(){
                        console.log(i);
                    },1000)
                })(i);

//                if(i == 3){
//                    this.testIndex = '我是最后结果';
//                    break;
//                }else{
//                    getDxReqid().then(() => {
//                        this.testIndex = '我是临时结果';
//                    })
//                }
            }
            console.log(this.testIndex);
        },
        methods: {}
    }
</script>
<style lang="scss" scoped>

</style>