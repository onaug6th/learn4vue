<template>
    
    <div class="directive container">
        <div class="paragraph">
            <h3>渲染数据</h3>
            <p>发起请求拉取数据，<span class="h-red">可能一些数据需要转义，或者数据结构不符合前端需求，需要二次处理</span>，进行处理后，渲染到模板</p>
        </div>
        <h4>以前我们是如何处理数据渲染的？</h4>
        <div class="paragraph">
            <p>相信很多人都会有过被HTML字符串拼接支配的恐惧</p>
            <pre class="language-javascript">
                <code>
        //  发起了请求
        $.ajax({
            url : "",
            method : "post",
            ...a,
            success : function(result){
                //  请求成功后，拼接数据成一个由html标签组成的模板字符串
                var resultData = result.data;
                var html = "";
                for(var i = 0 ; i &lt; resultData.length ; i ++){
                    html += "&lt;div&gt;" + resultData[i].name + "&lt;/div&gt;";
                    html += "&lt;div&gt;" + resultData[i].age + "&lt;/div&gt;";
                    html += "&lt;div&gt;" + resultData[i].sex + "&lt;/div&gt;";
                    html += "&lt;div&gt;" + resultData[i].goods + "&lt;/div&gt;";
                    html += "&lt;div&gt;" + resultData[i].address + "&lt;/div&gt;";
                    html += "&lt;div&gt;" + resultData[i].tel + "&lt;/div&gt;";
                }
                //  最后将数据添加到DOM中
                $("#xxx").append(html);
            }
        });
                </code>
            </pre>
        </div>
        <div class="paragraph">
            <h4>
                HTML字符串拼接的优点和缺点
            </h4>
            <p>没有优点，缺点很多</p>
            <p>1. 代码难管理，大量的html标签充斥在js代码中</p>
            <p>2. 字符串拼接非常操蛋，单双引号要一致，而且部分数据还需要转义，非空判断</p>
            <p @click="toggleExtend('onclick')">3. 只能在模板渲染结束后给指定的元素添加鼠标事件，或者内联写上 onclick 等属性<paperClip></paperClip></p>

            <p class="extend" v-if="extendObj['onclick']">
                onclick中的属性会从全局寻找这个变量，全局属性是非常危险的。因为可能多个地方声明了同名属性，而且在字符串拼接中，如果需要往onclick方法中传递一个对象，是不能实现的。
                <span class="h-red" @click="toggleExtend('whyNotOnclick')">为什么不能实现？<paperClip></paperClip></span>
                <pre class="language-javascript" v-if="extendObj['whyNotOnclick']">
        <code>'&lt;div onclick="sayName(' + resultData + ')&gt;&lt;/div&gt;'</code>
                因为拼接后的对象会变成对象字符串化后的文本。
                <img src="./img/pic2.png">
                </pre>
            </p>
            <p>如果是渲染一个表格，像图片这样的，累死人。</p>
            <img src="./img/pic1.png">
        </div>
        <h4>
            所以有了 ArtTemplate，Jsp，FreeMarker 之类的模板引擎，为的就是解放生产力。
        </h4>
        <p>同时，你也可以把vue的template当作是一个模板引擎。</p>
        <div class="paragraph">
            <p>现在，我们可以用更加方便的方法来渲染我们的页面。</p>
            <p>使用vue.js 的 <span class="h-red">v-for</span> 来进行一系列复杂模板渲染</p>
        </div>
        <hr>
        <div class="paragraph">
            <h3>v-for</h3>
            <p>一个简单的例子</p>
            <img src="./img/pic3.png">
            <hr>
            <img src="./img/pic5.png">
            <hr>
            <img src="./img/pic4.png">
            
            <h4>渲染后的结果</h4>
            <div class="form-group" v-for="(item ,index) in simpleListData" :key="index">
                名称 {{ item.name }} 年龄 {{ item.age }}
            </div>
            <p>渲染非常的简单。当然，如果循环一个复杂的列表的话，HTML结构也会相对应的复杂。同时我们也能够往函数里传递<span class="h-red">Object类型</span>的参数。</p>
            <img src="./img/pic6.png">
        </div>
        <div class="content"    >
            <!-- 产品列表循环 -->
            <ul class="product-list">
                <li class="product" v-for="(item, index) in productListData" :key="index" :data-index="index">
                    <div class="product-name">
                        <div>
                            <img :src="item.productLogo">
                        </div>
                        <div>
                            {{item.companyProductName}}
                        </div>
                        <div>
                            <button :name="item.productName+'立即申请'" class="share-btn">分享赚</button>
                        </div>
                    </div>
                    <div class="product-info">
                        <p class="shade"></p>
                        <div class="info">
                            <p>{{ formatData(item.amountMin) + "~" + formatData(item.amountMax) + "万" }}</p>
                            <p>贷款额度</p>
                        </div>
                        <div class="info">
                            <p>{{ formatData(item.rate, "%") }}</p>
                            <p>综合{{ item.rateTypeName }}利率</p>
                        </div>
                        <div class="info">
                            <p>{{ formatData(item.makeLoansTime) }}</p>
                            <p>放款时间</p>
                        </div>
                        <p class="shade"></p>
                    </div>
                </li>
            </ul>
            <!-- 产品列表循环 -->
        </div>
        <div class="paragraph">
            <p>不止循环表格列表，通常一些下拉框的值是需要动态从后端获取的。这时像 select 这类标签的内容，也可以通过v-for循环出来。</p>
            <p>前端做了很多view相关的库，本质上就是为了屏蔽DOM的API。减少DOM操作。</p>
            <p>提高生产力，分离html与JavaScript，操作DOM的麻烦。</p>
            <p>同理的，除了循环渲染。vue.js 也提供了其他方法来方便我们渲染或操作界面。</p>
        </div>
        <hr>
        <div class="paragraph">
            <h3>v-if</h3>
            <p>摧毁或渲染内容</p>
            <p>在需要控制的html标签上设置 <span class="h-red">v-if</span>属性</p>
            <p>v-if 可以接收任何值，甚至是表达式。</p>
            <p>最简单的用法，就是给v-if绑定一个布尔值，通过改变model中的值。来切换展示</p>
            <div class="form-group example">
                <button class="btn btn-primary" @click="isHeroShow = !isHeroShow">切换显示</button>
                <div v-if="isHeroShow">
                    <p>Now you see me</p>
                </div>
            </div>
            <p>同时也能接收方法，在方法中返回结果。根据返回结果来执行 v-if</p>
            <img src="./img/pic7.png">
            <p>第一行的时候，提到了摧毁而并非隐藏。是因为 v-if 指令会将html从DOM中完全抹掉</p>
            <p>绑定值为false时，并不会对false的区域进行渲染。在绑定的值为真时，再重新插入到DOM中。</p>
            <p>这是一种完全摧毁的操作，而有一个和 v-if 类似的指令，叫 <span class="h-red">v-show</span>。效果是一样的，而两者执行过程不一样。</p>
            <p>v-if 会重新生成DOM，并且插入到原来的位置。而 v-show，仅仅是修改了html标签的显示隐藏属性。</p>
            <p>在大列表中，如果判断块中包含的数据量大。那么v-if 的性能要比v-show 快很多。</p>
            <p>显示切换完全交给了Vue.js来处理，如果自行操作DOM的话，我们需要使用选择器对标签进行样式修改。例如display : none</p>
            <p>而且，<span class="h-red">v-if</span> 可以使用组合技能进行COMBO。当一个模板有多种情况需要展示不同数据时。</p>
            <div class="form-group example">
                <p>
                    <button class="btn btn-primary" @click="toggleGift()">换礼物</button>
                </p>
                <p>恭喜你获得：</p>
                <strong>
                    <p class="form-group" v-if="gift == 1">
                        兰博基尼五元优惠券
                    </p>
                    <p class="form-group" v-else-if="gift == 2">
                        波音747客机五十块代金卷
                    </p>
                    <p class="form-group" v-else>
                        新的需求
                    </p>
                </strong>
            </div>
            <img src="./img/pic8.png">
        </div>
        <hr>
        <div class="paragraph">
            <h3>v-on</h3>
            <h4>对DOM事件进行监听处理</h4>
            <p>使用 <span class="h-red">v-on</span>对界面的标签进行监听，并执行回调。</p>
            <p>很常见的，监听按钮点击事件出现登陆窗口，点击关闭按钮关闭登陆窗口。</p>
            <p>或者用户在输入文本框时，对文本框里的内容进行实时校验。</p>
            <p>在需要监听事件的标签上填写进行对应的指令，例如 v-on:click v-on:change</p>
            <p>例如：BUTTON 按钮上的 v-on:click ，INPUT 文本框上的 v-on:change </p>
            <img src="./img/pic9.png">
            <p>而且，v-on:可以使用缩写 @</p>
            <p> v-on:click 等价与 @click </p>
            <p><a target="blank" href="http://www.w3school.com.cn/tags/html_ref_eventattributes.asp">事件大全</a></p>
            <p>需要执行的事件回调，需要在当前组件中的 methods 属性里声明方法。</p>
            <img src="./img/pic11.png">
            <div class="form-group example">
                <p>对按钮及文本框进行监听</p>
                <p>
                    文本共改变了{{ changeCount }}次
                </p>
                <div class="col-sm-4">
                    <input class="form-control" type="text" @input="textChange()" @keydown.enter="login()" placeholder="请输入您的密码" v-model="passWord">
                </div>
                <p>
                    <button class="btn btn-primary" @click="login()">登陆</button>
                </p>                
            </div>
            <p>不知道有没有眼尖的人发现这个东西</p>
            <img src="./img/pic10.png">
            <p>这是个啥？</p>
            <p>.enter 是vue里面的按键修饰符，在按键事件发生时，只对特定的按键回调。</p>
            <p>例如这里只对回车事件进行监听，你在键盘上敲什么我都不管，我只管监听回车事件。</p>
            <p><a target="blank" href="https://cn.vuejs.org/v2/guide/events.html#%E6%8C%89%E9%94%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6">按键修饰符</a></p>
        </div>
        <hr>
        <div class="paragraph">
            <h3>v-bind</h3>
            <h4>动态修改标签属性</h4>
            <p>使用 <span class="h-red">v-bind</span>对标签属性进行修改，结果为等号中的表达式的值。</p>
            <p>例如，点击获取验证码后，获取验证码的按钮需要倒计时且为禁用状态</p>
            <div class="example">
                <p>
                    <button class="btn btn-primary" @click="getSmsCode()" :disabled="countDown !== 0">{{ countDown || '获取验证码' }}</button>
                </p>
            </div>
            <p>给按钮使用 v-bind:disabled ，当countDown为真时，按钮为禁用状态。</p>
            <img src="./img/pic12.png">
            <p>而且，v-bind:可以使用缩写 :</p>
            <p> v-bind:name 等价与 :name </p>
            <p>同样的，除了disabled，也能动态绑定其他属性。例如input文本框的name，class，value。</p>
            <p>一般常见于列表循环时，需要给不同的input属性加上序号。以区分先后。</p>
        </div>
        <hr>
        <div class="paragraph">
            <h3> v-model </h3>
            <h4> 直观的感受数据双向数据绑定 </h4>
            <p>
                <span class="h-red">v-model</span>数据层推动视图层，视图层再次推动数据层。是MVVM框架最大的卖点。
            </p>
            <p>假设这样的场景，一个后台管理系统。需要录入用户信息</p>
            <p>其中用户的信息字段，多达几十条。</p>
            <p>用户名称，性别，年龄，工作信息，家庭住址，电话号码，收入，学历 ...</p>
            <p>如果用传统的dom操作，进行数据收集。那工作量就大了。</p>
            <pre class="language-javascript">
                <code>
        var name = ${"#name"}.val();
        var sex = ${"#sex"}.val();
        var age = ${"#age"}.val();
        var job = ${"#job"}.val();
        var home = ${"#home"}.val();
        ...

        //  然后再保存数据，http请求保存数据。
                </code>
            </pre>
            <p>如果你觉得其实这还好啊，那如果有的控件类型是单选框，复选框，下拉框呢？</p>
            <p>在mvvm框架中，只需要将数据交给框架进行管理。来完成数据同步的事情。</p>
            <div class="example">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="name" class="col-sm-2 control-label">用户名</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="name" placeholder="用户名" v-model="formData.name">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="sex" class="col-sm-2 control-label">性别</label>
                        <div class="col-sm-10">
                            <label><input type="radio" value="1" v-model="formData.sex">男</label>
                            <label><input type="radio" value="0" v-model="formData.sex">女</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="age" class="col-sm-2 control-label">年龄</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="age" placeholder="年龄" v-model="formData.age">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="job" class="col-sm-2 control-label">工作</label>
                        <div class="col-sm-10">
                            <select id="job" class="form-control" v-model="formData.job">
                                <option value="001">程序员</option>
                                <option value="002">司机</option>
                                <option value="003">服务员</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="home" class="col-sm-2 control-label">住址</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="home" placeholder="住址" v-model="formData.home">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="goods" class="col-sm-2 control-label">奶茶</label>
                        <div class="col-sm-10">
                            <label><input type="checkbox" value="xs" v-model="formData.goods">小杯</label>
                            <label><input type="checkbox" value="s" v-model="formData.goods">中杯</label>
                            <label><input type="checkbox" value="m" v-model="formData.goods">大杯</label>
                            <label><input type="checkbox" value="ml" v-model="formData.goods">大大杯</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="button" class="btn btn-default" @click="saveFormData()">保存</button>
                        </div>
                    </div>
                </form>
                <div>
                    <p>表单中的数据</p>
                    <p>名称 {{formData.name}}</p>
                    <p>性别 {{formData.sex}}</p>
                    <p>年龄 {{formData.age}}</p>
                    <p>工作 {{formData.job}}</p>
                    <p>住址 {{formData.home}}</p>
                    <p>奶茶 {{formData.goods}}</p>
                </div>
            </div>
            <p>好比开车，jquery就像手动档，而mvvm框架就像自动档。手动挡有着自主操控的乐趣，而自动挡免去了很多复杂繁琐的操作。</p>
        </div>
    </div>

</template>

<script>
// mock列表数据
import mockListData from "./productList.json";

export default {
    name: 'lession1',
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
            extendObj : {},
            //  列表数据
            productListData: mockListData,
            //  简单的列表数据
            simpleListData : [
                { "name" : "august","age" : 20 },{ "name" : "tom","age" : 23 },{ "name" : "jude","age" : 21 }
            ],
            //  英雄显示
            isHeroShow : false,
            //  礼物
            gift: 1,
            //  事件指令使用的案例变量
            passWord : "",
            //  改变计数
            changeCount : 0,
            //  表单数据
            formData : {
                goods:[]
            },
            //  倒计时的时间
            countDown : 0,
            //  倒计时定时器，用于摧毁
            interval: {}
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
         * 格式化数据
         * @param {any} data 需要格式化的数据
         * @param {string} unit 单位，默认为空
         * @returns {string} 格式化后的数据
         */
        formatData(data, unit = "") {
            return data ? data + unit : data == null ? "暂无" : String(data) + unit;
        },

        //  切换礼物
        toggleGift(){
            this.gift++;
            this.gift == 3 && (this.gift = 0);
        },

        //  登陆
        login(){
            if(!this.passWord){
                return alert(`请输入密码`);
            }else{
                return alert(`登陆成功`);
            }
        },

        //  文本改变事件
        textChange(){
            this.changeCount++;
        },

        //  验证码倒计时
        getSmsCode(){
            this.countDown = 5;
            this.interval = setInterval(()=>{
                if(this.countDown == 0){
                    clearInterval(this.interval);
                }else{
                    this.countDown--;
                }
            }, 1000);
        },

        //  保存表单数据
        saveFormData(){
            //  发起http请求
            const formData = this.formData;
            console.info(formData);
        }
    }
}
</script>

<style lang="scss" scoped>
    h3{
        margin-bottom: 20px;
    }

    .product-list {
        padding-top: 10px;
    }
    .product {
        overflow: hidden;
        margin: 20px;
        background: white;
        border-radius: 10px;
        box-shadow: 0px -3px 30px 0px rgba(35, 35, 35, 0.07);
    }
    .product-name {
        display: flex;
        height: 130px;
        line-height: 60px;
        border-bottom: 1px solid #f1f1f1;
        img {
            width: 60px;
            margin: 0px;
        }
        div {
            &:nth-child(1) {
                padding: 30px 20px 10px;
                flex: 1;
            }
            &:nth-child(2) {
                flex: 10;
                color: black;
                font-weight: bold;
                font-size: 1.2em;
                white-space: nowrap;
                overflow: hidden;
                line-height: 100px;
                text-overflow: ellipsis;
            }
            &:nth-child(3) {
                flex: 4;
                padding: 20px 20px;
            }
        }
    }
    .product-info {
        display: flex;
        position: relative;
        .shade {
                position: absolute;
                width: 100%;
                height: 30px;
                background: white;
            &:last-child {
                bottom: 0px;
            }
        }
        div {
            text-align: center;
            flex: 1;
            padding: 30px 0px;

            &:nth-child(2) {
                p {
                    &:first-child {
                    color: #f66660;
                    }
                }
            }
        }
        & > div {
            p {
                &:first-child {
                    font-size: 1.2em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                &:nth-child(2) {
                    color: #9e9e9e;
                }
            }
        }
    }
    .product-info div:nth-child(2),
    .product-info div:nth-child(3) {
        border-right: 1px solid #f1f1f1;
    }
    .content {
        .share-btn {
            background: #f66660;
            color: white;
            border-radius: 30px;
            text-align: center;
            height: 60px;
            width: 100%;
            box-shadow: 0px 3px 15px 0px rgba(246, 102, 96, 0.6);
        }
    }


</style>