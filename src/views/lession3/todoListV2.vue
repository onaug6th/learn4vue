<template>

    <div class="container">
        <ul class="list-group col-sm-6">
            <li class="list-group-item" v-for="(item, index) in listData" :key="index">{{ item }}</li>
            <li class="list-group-item text-center" v-if="!listData.length">暂无待办</li>
            <li class="list-group-item text-center" v-if="listData.length">
                <button class="btn btn-success" @click="done()">我已经完成了！</button>
            </li>
        </ul>
    </div>

</template>

<script>

export default {
    name: 'todoListV2',
    /**
     * props 属性
     * 
     * 表示可以从父组件接收的值。
     * 可以是一个数组，也可以是一个对象。
     * 
     */
    props: ['listData'],
    components: {
        
    },
    data(){
        return {}
    },
    methods : {

        //  已经完成
        done(){
            //  发布事件，事件名称为 “done”，传递参数为 “是的，已经完成了”
            this.$emit("done", "是的，已经完成了");
        }
    }
}
</script>
<style lang="scss" scoped>
    

</style>