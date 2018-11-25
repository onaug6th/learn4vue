<template>

    <div class="container">
        <div class="lession-list">
            <h4 v-for="(lession, index) in lessionList" :key="index" @click="goLession(lession, index + 1)">
                <p>
                    <span>{{ index + 1 }}.</span>
                    <strong>{{lession.title}}</strong>
                </p>
                <p>
                    <template v-if="lession.html">
                        <span class="sm" v-html="lession.html"></span>
                    </template>
                    <template v-else>
                        <span class="sm">{{lession.intro}}</span>
                    </template>
                </p>
            </h4>
        </div>
    </div>

</template>

<script>

export default {
    name: 'home',
    components: {
        
    },
    data(){
        return {
            lessionList:[
                { title : "模板渲染", intro : "模板渲染在界面上的前世今生", done : true},
                { title : "组件生命周期与路由", intro : "操控组件的生老病死", done : true},
                { title : "组件", intro : "像砌积木一样的页面", done : true},
                { title : "依赖", intro : "项目的装备", done : true},
                { title : "Hello world", intro : "一个真正可用的例子", done : true},
                { title : "高级组件", intro : "是时候表演真正的技术了"}
            ]
        }
    },
    computed:{
        
    },
    mounted(){

    },
    methods : {
        /**
         * 跳转课程
         * @param {object} lession 课程
         * @param {number} index 序号
         */
        goLession(lession, index){
            if(!lession.done){
                return alert("还没开课");
            }
            this.$router.push({
                path : `/lession${index}`
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    
    .lession-list{
        
        margin-top: 5em;

        & span.sm{
            font-size: 16px;
            margin-left: 20px;
        }

        > h3{
            margin-bottom: 2em;
        }

        > h4{
            margin-bottom: 2em;
            cursor: pointer;
            transition: 0.75s;

            &:hover{
                transform:scale(1.01,1.01) ;
            }
        }
    }

</style>