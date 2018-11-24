<template>
    
    <div class="container">
        <div class="paragraph">
            <h3>组件</h3>
            <h4 @click="toggleExtend('component')">页面上的每个元素，都可以看成一个组件<paperClip></paperClip></h4>
            <div class="extend" v-if="extendObj['component']">
                <img src="./img/img1.png">
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
                在开发项目时，经常会遇到一些重复的功能。
            </p>
            <p>
                例如千篇一律的表单，除了列字段不同的表格列表。提示弹层，省市县选择器。甚至细粒度更低的一个小回形针<paperClip></paperClip>都能是一个组件。
            </p>
            <p>
                就像下面这个待办列表。
            </p>
            <todoList></todoList>
            <p>
                在当前页面中，仅仅是使用了一个自定义标签，就导入了整个列表。
            </p>
            <img src="./img/img2.png">
        </div>
        <hr>
        <div class="paragraph">
            <h3>组件是可复用的vue实例</h3>
            <p>
                组件拥有vue实例的所有属性，方法。和一般页面组件没有什么不同。
            </p>
            <p>
                被称为子组件，只是因为被其他页面组件引用了。建立了父子关系。
            </p>
            <p>
                而且作为子组件时，子组件可以显式的声明需要从父组件接收的值。用于子组件内部进行某些操作。
            </p>
        </div>
        <hr>
        <div class="paragraph">
            <h3>引入一个组件</h3>
            <h4>1. 寻找需要引入的组件</h4>
            <p>
                在script块中，使用es6 module的 import方法，导入目标组件到当前组件中。
            </p>
            <img src="./img/img3.png">
            <h4>2. 命名</h4>
            <p>
                在当前组件的 components 属性中，声明组件在模板中的名称。
            </p>
            <img src="./img/img4.png">
            <h4>3. 摆放</h4>
            <p>
                在模板中填写自定义标签，标签名为 components中声明的属性名。
            </p>
            <img src="./img/img5.png">
            <p>
                我们在 lession3 中引入了一个表格组件，我们命名为 todoList
            </p>
            <p>
                此时，lession3 组件，和 todoList 组件，便是父子组件关系。
            </p>
            <p>
                目前 todoList 组件的中内容是写死的，我们要让列表中的内容动态生成，数据从父组件中传入。
            </p>
            <p>
                这时需要改造 todoList 组件，让他能够让父组件向子组件传值。
            </p>
            <p>
                父组件要给子组件传递数据，子组件需要将它内部发生的事情告知给父组件。
            </p>
        </div>
        <hr>
        <div class="paragraph">
            <h3>父组件向子组件传值</h3>
            <p>
                这边新建 todoList 的拷贝 todoListV1。以 todoListV1 为例进行修改，允许他从父组件接受名为 listData 的值。
            </p>
            <p>
                在子组件中，需要预先声明一个 props 属性
            </p>
            <img src="./img/img6.png">
            <p>
                该属性表明，子组件可从父组件中接受的值。
            </p>
            <p>
                该属性可以是一个数组，也可以是一个对象。拥有两种用法。这边先提到最常用的第一种，数组的形式。
            </p>
            <p>
                <a target="_blank" href="https://cn.vuejs.org/v2/guide/components-props.html#ad">子组件属性——props</a>
            </p>
            <p>
                修改 todoListV1 组件，使用 v-for 循环从父组件传入的数据。
            </p>            
            <img src="./img/img7.png">
            <p>
                在 lession3 组件中，在使用子组件标签的地方，使用 v-bind方法。传入列表数据。
            </p>
            <img src="./img/img8.png">
            <p>
                同时，别忘了在 lession3 组件的data属性中，声明给子组件使用的数据。
            </p>
            <img src="./img/img9.png">
            <p>
                这次 todoList 的列表数据，就是由父组件来决定了。
            </p>
            <todoListV1 v-bind:listData="todoListData"></todoListV1>
            <p>
                这就是父组件往子组件传值的过程，通过给子组件标签绑定属性传递数据。
            </p>
        </div>
        <hr>
        <div class="paragraph">
            <h3>子组件往父组件传值</h3>
            <p>
                除了父组件往子组件传值，子组件也可以往父组件传值。
            </p>
            <p>
                现在要求点击子组件 todoListV1 的完成按钮时，lession3 父组件收到通知，将待办列表清空。
            </p>
            <p>
                vue 提供了一个发布订阅事件系统，在子组件中发布事件，父组件中监听事件并执行回调，即可完成父子组件通讯。
            </p>
            <p>
                基于 todoListV1 再copy一份 todoListV2。以 todoListV2 为例进行修改。
            </p>
            <p>
                我们在 todoListV2 的按钮中，监听点击事件，并在点击时使用 $emit 方法往上发布事件。
            </p>
            <pre>this.$emit(方法名, [传递的参数]);</pre>
            <p>
                <a href="https://cn.vuejs.org/v2/api/#vm-emit">文档—vue.js emit</a>
            </p>
            <img src="./img/img10.png">
            <p>
                在 lession3 中，在使用子组件标签的地方，使用 v-on 方法，监听事件并且指定回调。
            </p>
            <img src="./img/img11.png">
            <p>
                同时，别忘了在 lession3 组件的methods属性中，声明对应的事件回调。
            </p>
            <img src="./img/img12.png">
            <todoListV2 v-bind:listData="todoListData" v-on:done="todoListDone"></todoListV2>
            <p>
                父组件在接收到事件时，会执行对应的回调。子组件发布事件时，也能传递不同的参数给到父组件的回调，来做其他逻辑处理。
            </p>
        </div>
        <hr>
        <div class="paragraph">
            <h3>兄弟组件通讯</h3>
            <h4>怎么这么多兄弟姐妹</h4>
            <p>
                最后一种通讯了，因为只有三种情况，父对子，子对父，兄弟对兄弟
            </p>
            <p>
                兄弟组件通讯，需要为当前vue项目的根实例增加一个发布订阅中心。
            </p>
            <p>
                Vue本身就实现了发布<code>（$emit）</code>，订阅<code>（$on）</code>等api，但是只能用于父子组件通讯。
            </p>
            <p>
                只能要建立一个新的实例。作为单独的发布订阅中心，用于兄弟组件通讯。
            </p>
            <pre>new Vue();</pre>
            <p>
                将这个新建的实例对象，挂载到根实例的原型链，或者设置到根实例的data属性。
            </p>
            <h4>1. 挂载到原型链</h4>
            <img src="./img/img13.png">
            <p>挂载到原型链后，在组件中通过 ，this.eventHub来进行事件发布订阅。</p>
            <pre>this.eventHub.$on(事件名, 回调)</pre>
            <pre>this.eventHub.$emit(事件名, 需要传递的参数)</pre>
            <h4>2. 挂载到根实例的data属性</h4>
            <img src="./img/img14.png">
            <p>挂载到实例属性后，在组件中通过 this.$root.eventHub来进行事件发布订阅。</p>
            <pre>this.$root.eventHub.$on(事件名, 回调)</pre>
            <pre>this.$root.eventHub.$emit(事件名, 需要传递的参数)</pre>
        </div>
        <hr>
        <div class="paragraph">
            <h3>简单总结组件通讯</h3>
            <h4>父传子</h4>
            <p>
                就像给小孩喂饭一样。
            </p>
            <p>
                只要小孩<span class="h-red">（子组件）</span>可以吃饭<span class="h-red">（props 中声明了对应的值）</span>
            </p>
            <p>
                硬生生塞东西进去，不管小孩听不听话，小孩必须要吃。
            </p>
            <p class="form-group">这个通讯都会成功。</p>
            <h4>子传父</h4>
            <p>
                就像小孩叫父母一样。
            </p>
            <p>
                如果父母<span class="h-red">（父组件）</span>不理他<span class="h-red">（不指定回调）。</span>
            </p>
            <p>
                不管小孩<span class="h-red">（子组件）</span>怎么叫<span class="h-red">（发布事件）。</span>
            </p>
            <p class="form-group">
                这个通讯都不会成功。
            </p>
            <h4>兄弟组件通讯</h4>
            <p>
                和子传父一样，兄弟A发布，兄弟B监听。这时两个兄弟组件才能成功通讯。
            </p>
            <img src="./img/img15.png">
        </div>
        <hr>
        <div class="paragraph">
            <h3>为什么需要拆分为多个组件？</h3>
            <h4>页面应用里，不同的部分应该解耦。</h4>
            <p>
                拿经典的厂字型布局后台管理系统为例，一个管理界面会有三部分。
            </p>
            <p>
                <span class="h-red">顶部状态栏，左侧菜单栏，右侧内容。</span>
            </p>
            <img src="./img/img16.png">
            <img src="./img/img17.png">
            <p>
                如果不拆分为多块的话，一个管理界面页面中可能会充斥着三大区域的功能代码。
            </p>
            <p>
                这时，我们可以将左侧菜单栏，顶部状态栏，拆分成单独的组件。
            </p>
            <p>
                高内聚的菜单组件，内部实现了菜单列表的所有功能。并且在进行了某种操作时，能够发布事件。
            </p>
            <p>
                例如点击菜单某一栏时，往外发布事件。告知其他组件进行后续操作。
            </p>
            <p>
                模板界面组件监听到事件变化后，再切换右侧内容。各自区域各司其职，达到一个低耦合的效果。
            </p>
            <p>
                在多人协同开发时，各自负责不同模块或组件。尽量分开开发线路，可以一定程度上避免互相冲突的问题。
            </p>
            <p>
                功能相同时，组件可以复用到其他地方。减少重复开发量。
            </p>
            <p>
                在后期遇到需求变动时，如果界面发生变动。也只是修改这个组件的内部代码，而不会影响到其他地方的功能。
            </p>
        </div>
        <hr>
        <div class="paragraph">
            <h3>组件注册</h3>
            <h4>全局注册，局部注册</h4>
            <p>
                上面的案例，均是在父组件的 components 属性中引入子组件的，称为局部注册。
            </p>
            <img src="./img/img4.png">
            <p>
                而在内容中，经常可见的回形针。则是个全局注册的组件。<paperClip></paperClip>
            </p>
            <img src="./img/img18.png">
            <p>
                全局注册组件，只需要在Vue根实例初始化前进行配置。
            </p>
            <pre>Vue.component(组件名称, 组件路径);</pre>
            <img src="./img/img19.png">
            <p>
                就可以注册一个全局组件在全项目中调用，非常的方便。
            </p>
            <p>
                注册全局组件前要先衡量，这个组件是否真的需要全项目调用。
            </p>
            <p>
                因为在加载页面时，下载的JavaScript文件体积会变得更大。而且不论你有没有使用这个全局组件标签，拖累页面加载速度。
            </p>
        </div>
    </div>

</template>

<script>

// 引入列表组件
import todoList from "./todoList.vue";

// 引入列表组件，父传子 v 1.0
import todoListV1 from "./todoListV1.vue";

// 引入列表组件，父子互传 v 2.0
import todoListV2 from "./todoListV2.vue";

export default {

    //  实例属性——组件名称
    name: 'lession3',

    //  实例属性——当前实例内部数据
    data(){
        return {
            //  扩展内容
            extendObj : {},

            //  用于 todoList 组件的数据
            todoListData : [
                `1. 闹钟没响`,
                `2. 要迟到了`,
                `3. 赶地铁`,
                `4. 等排队`,
                `5. 刚刚好打到卡`
            ]
        }
    },

    //  实例属性——当前vue实例对象的子组件集合
    components: {
        todoList : todoList,
        todoListV1 : todoListV1,
        todoListV2 : todoListV2
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
        },

        /**
         * 待办列表结束回调事件
         * @param {Array} args 子组件传递的所有参数
         */
        todoListDone(args){
            //  清空待办列表
            this.todoListData = [];
        }

    }

}
</script>

<style lang="scss" scoped>
    h3{
        margin-bottom: 20px;
    }

</style>