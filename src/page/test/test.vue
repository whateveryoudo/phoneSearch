<template>
    <div>
        判断视图不更新情况
        <ul>
            <li v-for="(item,index) in userList" @click="e => change(e, index)" :key="item.id">
                {{item.name}}-{{item.nickName}}-{{item.info && item.info.num}}
            </li>
        </ul>
        <button @click="change">测试</button>
        <test-com :info="info"></test-com>
    </div>
</template>

<script>
    import TestCom from '@/components/testCom'
    export default {
        name: "test",
        components: {
            TestCom
        },
        data () {
            return {
                info: {},
                userList: [
                    {name: 'ykx', age: 24, id: 111},
                    {name: 'ykx', age: 24, nickName:'11', id: 112,info: { num: 12}},
                    {name: 'ykx', age: 24, id: 113},
                    {name: 'ykx', age: 24, id: 114},
                ],
                testArr: ['aa', 'bb', 'cc']
            }
        },
        created(){
//            this.info = {...this.userList[1]};
//            this.info = JSON.parse(JSON.stringify(this.userList[1]));
        },
        methods: {
            change (index) {
//                this.$set(this.testArr, index, '小明')
//                this.testArr[index] = 'xiaoming'
                  this.userList[1].nickName = '小明'
                  this.userList[1].info.num = 30;
//                this.userList.splice(1, 1, {
//                    ...this.userList[1],
//                    nickName: '小明'}
//                    )
//                  this.userList = {
//                      ...this.userList[1],
//                      nickName: '小明'}
            }
        }
    }
</script>

<style scoped>

</style>