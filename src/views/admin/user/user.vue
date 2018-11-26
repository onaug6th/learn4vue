<template>
    
    <div class="container">
        <h4>用户管理</h4>

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>序号</th>
                    <th>用户名</th>
                    <th>邮箱</th>
                    <th>用户等级</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in tableData" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.userName }}</td>
                    <td>{{ item.email }}</td>
                    <td>
                        <span :class="whatLeval(item.level)">{{ item.level | levelFilter }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
        
    </div>

</template>

<script>

export default {

    //  实例属性——组件名称
    name: 'user',

    //  实例属性——管道——过滤值并返回新内容
    filters : {

        /**
         * 等级转义函数
         * @param {string} value key值
         * @return {string} 转移后的值
         */
        levelFilter(value){
            const obj = {
                1 : "普通用户",
                2 : "高级用户",
                3 : "尊贵会员",
                88 : "管理员"
            }
            return obj[value];
        }
    },

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

        getTableData(){

            const params = this.params;
            
            this.$http.get("/timeWait/admin/getUserList", {
                    params: params
                }).then(result =>{
                
                if(result.code == 0){
                    this.tableData = result.data.list;
                }else{
                    alert(result.detailMsg);
                }

            });
        },

        /**
         * 用户等级
         * @param {string} level 等级
         * @returns 等级对应的样式名
         */
        whatLeval(level){
            const obj = {
                1 : "normal",
                2 : "high",
                3 : "vip",
                88 : "normal"
            }
            return obj[level];
        }

    }

}
</script>

<style lang="scss" scoped>
    
    // 当前.vue 文件的样式区域

    span.normal{
        color: black;
    }
    span.high{
        color: #c3c35b;
        font-weight: bold;
    }
    span.vip{
        color: red;
        font-weight: bold;
    }

</style>