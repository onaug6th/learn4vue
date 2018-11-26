<template>
    
    <div class="container">
        <h1>
            <span style="font-size: 80px;">404</span> NOT FOUND
        </h1>
        <h3>
            你来到了一个未知的世界
        </h3>
        <h5>
            <router-link to="/">回到首页？</router-link>
        </h5>
    </div>

</template>

<script>

export default {

    //  实例属性——组件名称
    name: 'notFound',

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

    //  生命周期钩子——更新后
    updated(){

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

</style>