<template>
    
    <div class="container">
        <div class="paragraph">
            <h3>简单组件</h3>
            <h4 @click="toggleExtend('component')">页面上的每个元素，都可以看成一个组件<paperClip></paperClip></h4>
            <div class="extend" v-if="extendObj['component']">
                <img src="./img/img1.png" alt="">
                <p>
                    其实认真一看，会发现整个vue项目，每个页面的业务代码都是组件为单位的。
                </p>
                <p>也就是说，其实不管是通用组件，还是业务代码，他们都是组件</p>
                <p>
                    而组件这个概念，本应是通用部分，可配置，可扩展，可复用，才应该被称为组件的。
                </p>
                <p>
                    但这个概念，似乎在 MVVM框架 中变得非常笼统了。
                </p>
            </div>
        </div>
        <div class="paragraph">
            <p>
                组件是可复用的vue实例
            </p>
            <p>
                在开发项目时，经常会遇到一些重复的功能。
            </p>
            <p>
                例如千篇一律的表单，表格列表。提示弹层，省市县选择器。甚至细粒度更低的一个小回形针<paperClip></paperClip>都能是一个组件。
            </p>
            <p>
                就像下面这个子组件表格。
            </p>
            <tableEasy></tableEasy>
            <p>仅仅是使用了一个自定义标签，就导入了整个模板。</p>
            <img src="./img/img2.png" alt="">

        </div>
        <div class="paragraph">
            <h3>使用一个组件</h3>
            <h4>1. 寻找需要使用的组件</h4>
            <p>在script块中，使用es6 module的 import方法，导入目标组件到当前组件中。</p>
            <img src="./img/img3.png" alt="">
            <h4>2. 命名</h4>
            <p>在当前组件的components属性中，声明组件在模板中的名称。</p>
            <img src="./img/img4.png" alt="">
            <h4>3. 使用components中声明的属性，在模板中写自定义标签。</h4>
            <img src="./img/img5.png" alt="">
        </div>
    </div>

</template>

<script>

// 引入表格组件
import tableEasy from "./table-easy.vue";

export default {
    name: 'lession3',
    //  当前vue实例对象的components组件属性
    components: {
        tableEasy : tableEasy
    },
    updated(){
        this.highlightAll();
    },
    mounted(){
        this.highlightAll();
    },
    data(){
        return {
            //  扩展内容
            extendObj : {}
        }
    },
    computed:{
    },
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
        },

        /**
         * 前往页面
         * @param {string} path 路径
         */
        goPage(path){

            //  跳转产品信息页，并且传递对应的产品Id
            this.$router.push({
                path : "/productInfo",
                query : {
                    id : "9527"
                }
            });

        }
    }
}
</script>

<style lang="scss" scoped>
    h3{
        margin-bottom: 20px;
    }

</style>