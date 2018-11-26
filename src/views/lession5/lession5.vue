<template>
    
    <div class="container">
        <div class="paragraph">
            <h3>实践项目</h3>
            <h4>结合 <span class="h-red">模板指令、组件生命周期、路由、组件</span> 实现登录后查看用户管理系统。</h4>
            <p>
                1. 建立管理员系统路由，添加需要校验的meta元数据
            </p>
            <p>
                2. 在路由跳转事件中，校验需要验证的路由
            </p>
        </div>
        <div>
            <form class="login-form">
                <h4 class="text-center">登录管理员系统</h4>
                <div class="form-group">
                    <label>用户名</label>
                    <input type="text" class="form-control" v-model="formData.userName">
                </div>
                <div class="form-group">
                    <label>密码</label>
                    <input type="password" class="form-control" v-model="formData.passWord">
                </div>
                <div class="form-group text-center">
                    <button type="button" class="btn btn-primary" @click="login()">登录</button>
                </div>
            </form>
        </div>
    </div>

</template>

<script>

export default {

    //  实例属性——组件名称
    name: 'lession5',

    //  实例属性——当前实例内部数据
    data(){
        return {

            //  用于表单双向绑定数据
            formData: {
                userName : "",
                passWord : ""
            }
        }
    },

    //  实例属性——当前vue实例对象的子组件集合
    components: {
    },

    //  实例属性——计算属性
    computed:{
    },

    //  生命周期钩子——视图更新后
    updated(){
    },

    //  生命周期钩子——挂载后
    mounted(){
    },

    //  实例属性——当前实例内部方法
    methods : {

        login(){
            
            //  声明当前表单数据
            const formData = this.formData;

            //  调用挂载的请求库方法，传参并且捕抓成功回调。
            this.$http.post("timeWait/login", formData).then(result =>{
            
                //  如果返回状态码为正常，前端存储用户资料。并且跳转管理系统
                if(result.code == "0"){
                    sessionStorage.setItem("isLogin", true);
                    sessionStorage.setItem("admin", JSON.stringify(result.data));

                    //  跳转用户管理页
                    this.$router.push({
                        path : "/admin/user"
                    });
                }
                /**
                 * 否则可能用户信息异常，“封号，密码或用户名不正常”
                 * 进行提示接口返回信息
                 */
                else{
                    alert(result.detailMsg);
                }

            });
        }

    }

}
</script>

<style lang="scss" scoped>

    .login-form{
        max-width: 330px;
        padding: 15px;
        margin: 0 auto;
        background: #fff;
        border-radius: 7px;
        box-shadow: -4px 0 4px rgba(7,17,27,.1), 4px 0 4px rgba(7,17,27,.1), 0 -4px 4px rgba(7,17,27,.1), 0 4px 4px rgba(7,17,27,.1);
    }
</style>