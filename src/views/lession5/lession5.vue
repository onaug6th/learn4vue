<template>
    
    <div class="container">
        <div class="paragraph">
            <h3>实践项目</h3>
            <h4>结合 <span class="h-red">模板指令、组件生命周期、路由、组件</span> 实现真实的需求。</h4>
        </div>
    </div>

</template>

<script>

export default {

    //  实例属性——组件名称
    name: 'lession4',

    //  实例属性——当前实例内部数据
    data(){
        return {
            //  扩展内容
            extendObj : {}
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
        this.highlightAll();
    },

    //  生命周期钩子——挂载后
    mounted(){
        this.highlightAll();
    },

    //  实例属性——当前实例内部方法
    methods : {

        highlightAll(){
            //  代码高亮
            this.$nextTick(()=>{
                window["Prism"].highlightAll();
            });
        },

        /**
         * 打开扩展
         */
        toggleExtend(name){
            
            if(this.extendObj[name]){
                this.$set(this.extendObj, name, false);
            }else{
                this.$set(this.extendObj, name, true);
            }
        }

    }

}
</script>

<style lang="scss" scoped>

</style>