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
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in tableData" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.userName }}</td>
                    <td>{{ item.email }}</td>
                    <td>
                        <span :class="whatLevel(item.level)">{{ item.level | levelFilter }}</span>
                    </td>
                    <td>
                        <button class="btn btn-primary" @click="openModal(item)">编辑</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div v-if="showModal" class="modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" @click="closeModal()">×</button>
                        <h4 class="modal-title">编辑资料</h4>
                    </div>
                    <div class="modal-body">
                        <form class="login-form">
                            <div class="form-group">
                                <label>用户名</label>
                                <input type="text" class="form-control" v-model="modalData.userName">
                            </div>
                            <div class="form-group">
                                <label>邮箱</label>
                                <input type="text" class="form-control" v-model="modalData.email">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer text-center">
                        <button type="button" class="btn btn-primary" @click="saveModal()">保存资料</button>
                    </div>
                </div>
            </div>
        </div>

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

            //  用于表格列表渲染
            tableData: [],
            
            //  用于模态框表单数据双向绑定
            modalData: {},

            showModal: false
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
        whatLevel(level){
            const obj = {
                1 : "normal",
                2 : "high",
                3 : "vip",
                88 : "normal"
            }
            return obj[level];
        },

        /**
         * 打开模态框
         * @param {object} item 当前行对象
         */
        openModal(item){
            this.modalData = Object.assign({}, item);
            this.showModal = true;
        },

        //  关闭模态框
        closeModal(){
            this.showModal = false;
        },

        saveModal(){

            //  声明模态框表单数据
            const modalData = this.modalData;

            modalData.userID = modalData._id;

            //  校验表单是否填写完整
            if(this.validateForm(modalData)){
                
                //  调用挂载的请求库方法，传参并且捕抓成功回调。
                this.$http.post("timeWait/userSetting/importantProfile", modalData).then(result =>{
                
                    //  如果返回状态码为正常，前端存储用户资料。并且跳转管理系统
                    if(result.code == "0"){
                        alert("保存成功");
                        //  关闭模态框
                        this.closeModal();
                        //  刷新数据列表
                        this.getTableData();
                    }
                    //  进行提示接口返回信息
                    else{
                        alert(result.detailMsg);
                    }

                });
            }
        },

        /**
         * 校验表单数据
         * @param {object} formData 表单数据
         * @returns {bolean} 真或否
         */
        validateForm(formData){
            let answer = true;
            for(let i in formData){
                if(formData[i] === ""){
                    alert("请填写完整表单信息");
                    answer = false;
                    break;
                }
            }
            return answer;
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
    .modal{
        display: block;
    }
    .text-center{
        text-align: center !important;
    }

</style>