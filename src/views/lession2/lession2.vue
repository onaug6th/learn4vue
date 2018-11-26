<template>
    
    <div class="container">
        <div class="paragraph">
            <h3>组件生命周期</h3>
            <h4>在对应的时候做对应的事情</h4>
        </div>
        <div class="paragraph">
            <p>每个Vue实例在创建时，都会经过一系列的初始化</p>
            <p>例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。</p>
            <p>就像人的一生一样，会有生老病死的一个过程。</p>
            <p>在不同的阶段，做对应的事情。</p>
            <p>在页面渲染时，需要预先拉取某些数据，执行一些初始化方法。</p>
            <p>在页面视图更新时，可能又需要对某些内容进行改变</p>
            <p>在页面关闭或离开页面时，摧毁某些监听的事件或方法。防止重复监听</p>
            <p>在对应的时候做对应的事情</p>
        </div>
        <div class="paragraph">
            <h3>前端路由</h3>
            <h4>单页应用间的跳转</h4>
            <p>传统的页面跳转，一般都是通过a标签跳转。</p>
            <p>在a标签中填入页面路径，或者完整的地址</p>
            <p>之后会往服务端发起真实的请求。获取指定路径页面信息</p>
            <p>但单页应用不是在a标签里填入完整的路径进行跳转。</p>
            <p>因为单页应用的页面跳转，实际上并没有往后端发起请求。而是在前端切换js显示不同页面</p>
            <div class="paragraph">
                <p>跳转路由有两种方法，一种是用特定的路由标签，填入链接进行跳转。</p>
                <p @click="toggleExtend('whatIsVueRouter')">需要使用vue router中特定的标签，进行路由切换。<paperClip></paperClip></p>
                <div class="extend" v-if="extendObj['whatIsVueRouter']">
                    <p>
                        vue-router 是vue.js 中的一个前端路由库。在构建一个vue 应用时，他并不是必选的。
                    </p>
                    <p>
                        就像官网提到的，vue是一个渐进式框架，所有的第三方库和功能，在一开始构建时并不会全部装上。而是看开发者自身需求按需引入。
                    </p>
                </div>
                <img src="./img/img2.png">
                <p class="example">
                    <router-link to="/">跳转去首页</router-link>
                    <router-link to="/lession1">跳转去目录一</router-link>
                </p>
            </div>
            <div class="paragraph">
                <h4>另外一种是编程式的跳转，即在代码中做控制。</h4>
                <img src="./img/img4.png">
                <p class="example">
                    <button class="btn btn-primary" @click="goPage('/')">跳转首页</button>
                    <button class="btn btn-success" @click="goPage('/lession1')">跳转目录一</button>
                </p>
            </div>
            <div class="paragraph">
                <h4>那么问题来了，我怎么知道每个路由的路径呢？</h4>
                <p>每个使用vue-router的项目，都会有一个专门规划路由的JavaScript文件。可以称为路由表，在里面可以一览整个项目的路由情况。</p>
                <p>在某些复杂的大型项目中，为了方便管理各模块，一般会根据模块分开多个文件。最后组织成一个路由表。</p>
            </div>
            <div class="paragraph">
                <h4>寻找路由表的位置</h4>
                <p>一般项目都会创建一个叫 router.js ， router文件夹中 创建一个 index.js 的文件</p>
                <p>因为我相信正常人都不会乱命名文件的名称，而是严格按照规范来的。</p>
                <p>也有不按常理出牌的，这时只需要在项目中全局区分大小写搜索</p>
                <pre class="language-javascript"><code>Router</code></pre>
                <p>这个是路由的构造函数名称，一般我们会在项目初始化时进行 new 实例化路由。</p>
                <p>再怎么不按常理出牌的人，始终都会用到这个变量的。</p>
            </div>
            <div class="paragraph">
                <p>路由的配置是由多个对象组成的数组</p>
                <p>以本项目为例，我们项目的路由非常简单，全都是一级路由，因为没有内部模块。</p>
                <img src="./img/img5.png">
                <p>每个对象都是一个路由配置。</p>
                <p>路由名称，路由路径，路由映射的组件，路由元数据，子路由。</p>
                <p @click="toggleExtend('routerGuard')">元数据用于路由守卫，分辨该路由是否需要特殊权限才能访问。<paperClip></paperClip></p>
                <div class="extend" v-if="extendObj['routerGuard']">
                    <p>
                        路由守卫是指对路由跳转事件进行监听，在路由发起跳转前的回调函数进行逻辑判断。通常用于判断用户是否登录的场景
                    </p>
                </div>
                <p>下面是一个分了二级模块的路由，管理员模块下拥有两个子路由。</p>
                <img src="./img/img6.png">
                <p>访问路由时，访问子路由名称，即可访问到指定的子路由。</p>
                <pre class="language-javascript"><code>localhost:8080/#/admin/user</code></pre>
                <p>在切换路由时，如果需要传递参数。只用在调用路由跳转方法里填写参数属性</p>
                <img src="./img/img7.png">
                <p>此时浏览器跳转，就会携带一串query在地址后。</p>
                <pre class="language-javascript"><code>localhost:8080/#/productInfo?id=9527</code></pre>
                <p>在productInfo这个组件中，应该会有对应的逻辑。“获取url中携带的id，发起查询，页面展示产品信息”</p>
                
            </div>
            <div class="paragraph">
                <h3>路由守卫</h3>
                <h4>其实就是在路由进行切换的事件中，做某些校验</h4>
                <p>项目如果有做权限管理，会对实例化后的router实例对象，进行回调配置</p>
                <p><a href="https://router.vuejs.org/zh/api/#router-beforeeach" target="blank">路由事件API</a></p>
                <p>假设我们有个管理员界面，必须登陆后才能访问。</p>
                <img src="./img/img9.png">
                <p>我们可以在<span class="h-red">路由跳转前</span>事件回调中判断，该路由是否配置了mate元数据。和是否存在需要登录的字段</p>
                <img src="./img/img8.png">
                <p>一旦发现符合要求的路由，就进行登录校验。未登录会拒绝访问该组件，被请回其他界面。</p>
                <p>同理的，我们可以在<span class="h-red">路由跳转后</span>的事件中做某些事情。</p>
                <p>例如滚动到页面顶部，或者回退到用户上次浏览的位置。</p>
                <p>关于路由传参，与路由配置。还有其他更加深入的API。</p>
                <p>可以查阅官方文档 <a href="https://router.vuejs.org/zh/api/">官方文档</a></p>
            </div>

        </div>
    </div>

</template>

<script>

export default {
    name: 'lession2',
    components: {
        
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