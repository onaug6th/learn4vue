<template>
    
    <div class="container">
        <h4>留言管理</h4>
        <tableList :tableData="tableData" @edit="edit"></tableList>
    </div>

</template>

<script>
// 引入子组件——表格
import tableList from "../common/tableList.vue";

export default {

    //  实例属性——组件名称
    name: 'reply',

    //  实例属性——当前实例内部数据
    data(){
        return {
            
            //  分页信息
            params: {
                //  当前页
                currentPageNum: 1,
                //  每页数量
                pageSize: 10
            },

            //  用于表格组件列表渲染
            tableData: []
        }
    },

    //  实例属性——当前vue实例对象的子组件集合
    components: {
        //  表格组件
        tableList : tableList
    },

    //  实例属性——计算属性
    computed:{
    },

    //  生命周期钩子——挂载后
    mounted(){

        //  在组件挂载后，我们发起请求，拉取表格数据
        this.getTableData();

    },

    //  实例属性——当前实例内部方法
    methods : {

        //  获取表格数据
        getTableData(){

            const params = this.params;
            
            this.$http.get("/timeWait/forum/getForumPostComment", {
                    params: params
                }).then(result =>{
                
                if(result.code == 0){
                    this.tableData = result.data.list;
                }else{
                    alert(result.detailMsg);
                }

            }).catch(err =>{

                console.info(`请求出问题了`, err);
                
            });
        },

        /**
         * 编辑
         * @param {object} item 当前行对象
         */
        edit(item){
            console.info(item);
        }

    }

}
</script>

<style lang="scss" scoped>

</style>