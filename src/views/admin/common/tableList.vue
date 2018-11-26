

<template>

    <table class="table table-bordered">
        <thead>
            <tr>
                <th>序号</th>
                <th>标题</th>
                <th>作者</th>
                <th>内容</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in tableData" :key="index">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ item.commentPostName }}</td>
                <td>{{ item.commentUserName }}</td>
                <td>{{ item.commentValue }}</td>
                <td>
                    <button class="btn btn-primary" @click="edit(item)">编辑</button>
                </td>
            </tr>
        </tbody>
    </table>

</template>

<script>

export default {
    
    //  实例属性——组件名称
    name: 'tableList',

    /**
     * 实例属性——props属性
     * 
     * 表示可以从父组件接收的值。
     * 可以是一个数组，也可以是一个对象。
     * 
     */
    props: ['tableData'],
    
    //  实例属性——管道——过滤值并返回新内容
    filters : {

    },

    //  实例属性——当前实例内部数据
    data(){
        return {}
    },

    //  实例属性——当前实例内部方法
    methods : {
        /**
         * 编辑
         * @param {object} item 当前行对象
         */
        edit(item){
            this.$emit("edit", item);
        }
    }
}
</script>

<style lang="scss" scoped>
    // 当前.vue 文件的样式区域

</style>