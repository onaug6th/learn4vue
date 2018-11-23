<template>
    
    <div class="container">
        <div class="paragraph">
            <h3>依赖</h3>
            <h4>项目的装备</h4>
            <p>
                还记得以前用jquery时，我们发起请求的方法吗？
            </p>
            <pre>$.ajax({ ... })</pre>
            <p>
                jquery的 <code>$.ajax</code> 方法，其实是对浏览器中的 <code>XMLHttpRequest</code> 进行了二次封装。但在vue.js 框架中，我们没有jquery。
            </p>
            <p>
                <code>XMLHttpRequest</code> 的原生使用比较麻烦，我们不会去自己封装或使用这个原生API来与服务端交互。
            </p>
            <p>
                一般我们会去选择安装已经完成好的第三方依赖，避免造轮子嘛，对吧。
            </p>
        </div>
        <hr>
        <div class="paragraph">
            <h3>下载依赖</h3>
            <h4>找件最趁手的装备，然后出发</h4>
            <p>
                vue.js 是个渐进式框架，他没有包含请求相关的功能在内。在用户需要时，再自行安装。
            </p>
            <p>
                一般我们会去社区找人气最好，文档最完善，作者维护频率高的依赖来使用。
            </p>
            <p>
                如果以上因素都不满足，会给项目带来不可预测的风险。这也就是为什么电能车足足花了十几年才能够登上市场。
            </p>
            <p>
                以本项目为例，我选择了社区中人气较高的 <code>axios</code>，作为本项目的http请求库。
            </p>
            <p><a href="https://www.kancloud.cn/yunye/axios/234845">axios 中文文档</a></p>
            <p>
                根据官方文档指引，在项目中进行依赖安装。
            </p>
            <img src="./img/img1.png">
            <pre>npm install axios -save</pre>
            <p>这里的npm命令，可以看下面这篇文章。</p>
            <p>
                <a href="https://blog.csdn.net/qq_30378229/article/details/78463930">npm 安装知多少</a>
            </p>
            <p>
                选好合适的依赖并安装后，在项目中的 <code>package.json</code>中，会多出刚刚安装的依赖。
            </p>
            <p>
                这个 package.json 是个什么玩意？
            </p>
        </div>
        <div class="paragraph">
            <h3>依赖列表</h3>
            <h4>“打开背包，查看装备”</h4>
            <p>
                在每个项目中，都会有个 <code>package.json</code> 用于管理项目信息和依赖信息。
            </p>
            <p>
                <code>package.json</code>是一个json格式文件，必须严格按照json标准来编写。
            </p>
            <p>
                npm install 命令根据这个配置文件，自动下载所需的模块。
            </p>
            <p>
                关于这个 package.json 网上太多资料了，这里就不再复述。
            </p>
            <p>
                <a href="https://www.cnblogs.com/whkl-m/p/6617540.html">package.json 详解</a>
            </p>
            <p>
                回到正题，我们该怎么使用这个装备 <code>axios</code>。
            </p>
        </div>
        <div class="paragraph">
            <h3>使用依赖</h3>
            <h4>“穿上你的装备，勇士”</h4>
            <p>
                在 vue.js 中全局项目使用第三方依赖，粗暴的方法。都是直接挂载到根实例的原型链上。
            </p>
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