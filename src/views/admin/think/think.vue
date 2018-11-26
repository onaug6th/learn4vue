<template>
    
    <div class="container">
        <h4>思考</h4>
        <p>请求方法是否可以放同一文件更好管理？</p>
        <p>表单校验，几乎是大同小异的，能否写成通用方法进行校验？</p>
        <p @click="toggleExtend('table')">用户管理和留言管理的表格，是否可以做成通用表格组件？<paperClip></paperClip></p>
        <div class="extend" v-if="extendObj['table']">
            <p>因为几乎所有表格，除了列字段，都是大同小异的。</p>
            <p>而且，一般的表格列表，都需要分页功能</p>
            <p>如果可以写一个高度通用的表格组件，能够整合分页功能，而且通过传配置来生成指定的表格</p>
            <pre class="language-javascript">
                <code>
        {   
            //  是否有多选按钮
            checkbox : true,
            //  能否点击行选中选择按钮
            clickToSelect : true,
            //  是否拥有模糊搜索按钮
            searchBtn : false,
            //  是否能够点击列头排序
            sort : false,
            //  列配置
            colOption : [
                {
                    field : "id",
                    label : "文章ID"
                },
                {
                    field : "type",
                    label : "文章所属类型"
                },
                {
                    field : "title",
                    label : "文章标题"
                },
                {
                    field : "bgUrl",
                    label : "背景图片"
                },
                ... 其他列配置
            ],
            data : [],
            pagination : {
                prevText : "前页",
                nextText : "后页",
                currentPage : 1,
                pageSize : 10,
                totalPages : 0
            }
        }
                </code>
            </pre>
            <p>只需传递这个配置给到组件，便能完成千篇一律的组件。大大减轻开发量。</p>
        </div>
    </div>

</template>

<script>

export default {

    //  实例属性——组件名称
    name: 'think',

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
        //  代码高亮
        this.$nextTick(()=>{
            window["Prism"].highlightAll();
        });
    },

    //  实例属性——当前实例内部方法
    methods : {
        
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