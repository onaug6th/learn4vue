<template>
    
    <div class="container">
        <div class="paragraph">
            <h3>管理员系统</h3>
        </div>
        <div>
            <button class="btn btn-primary">
                <router-link to="/user">用户管理</router-link>
            </button>
            <button class="btn btn-success">
                <router-link to="/reply">留言管理</router-link>
            </button>
        </div>
        <transition name="fade">
            <router-view/>
        </transition>
    </div>

</template>

<script>

export default {

    //  实例属性——组件名称
    name: 'admin',

    //  实例属性——当前实例内部数据
    data(){
        return {
            
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

    },

    //  实例属性——当前实例内部方法
    methods : {

    }

}
</script>

<style lang="scss" scoped>
    a{
        color: white;
    }
</style>