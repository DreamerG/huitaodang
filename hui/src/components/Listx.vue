<template>
    <div id="list">
        <ul>
            <li>
                <router-link to="/category/nv-zhuang/" active-class="red" exact><span @click="getname">女装</span></router-link>
            </li>
            <li>
                <router-link to="/category/nan-zhuang/" active-class="red" exact >男装</router-link>
            </li>
            <li>
                <router-link to="/category/xie-zi/" active-class="red" exact>鞋子</router-link>
            </li>
            <li>
                <router-link to="/category/xiang-bao/" active-class="red" exact>箱包</router-link>
            </li>
            <li>
                <router-link to="/category/mei-zhuang/" active-class="red" exact>美妆</router-link>
            </li>
            <li>
                <router-link to="/category/hu-fu/" active-class="red" exact>护肤</router-link>
            </li>
            <li>
                <router-link to="/category/shenghuo/" active-class="red" exact>生活</router-link>
            </li>
            <li>
                <router-link to="/category/ju-jia/" active-class="red" exact>居家</router-link>
            </li>
            <li>
                <router-link to="/category/mei-shi/" active-class="red" exact>美食</router-link>
            </li>
            <li>
                <router-link to="/category/nei-yi/" active-class="red" exact>内衣</router-link>
            </li>
            <li>
                <router-link to="/category/yun-dong/" active-class="red" exact>运动</router-link>
            </li>
            <li>
                <router-link to="/category/shu-ma/" active-class="red" exact>数码</router-link>
            </li>
            <li>
                <router-link to="/category/mu-ying/" active-class="red" exact>母婴</router-link>
            </li>
            <li>
                <router-link to="/category/pei-shi/" active-class="red" exact>配饰</router-link>
            </li>
            <li>
                <router-link to="/category/cheng-ren/" active-class="red" exact>成人</router-link>
            </li>
            <li>
                <router-link to="/category/qi-ta/" active-class="red" exact>其他</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios"
    export default{
        name:"listx",
        data:function(){
            return{
                names:[]
            }
        },
        methods:{
            getname:function(){

                this.$route.params.listname = "nv-zhuang";

                alert(this.$route.params.listname)
            }
        }
    }

</script>

<style scoped>
    #list{
        position: fixed;
        top:1.2rem;
        height: 1rem;
        width: 100%;
        background-color: #fff;
        border-bottom: 1px solid #e7e7e7;
        z-index: 999;
    }
    #list ul{
        overflow: hidden;
        overflow-x: scroll;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        white-space: nowrap;
        height: .96rem;
    }
    #list ul li{

        display: inline-block;
        height: 1rem;
        line-height: 1rem;
        color: #333;
        font-size: .38rem;
        text-align: center;
        padding: 0 .4rem;
        cursor: pointer;
        float: left;
      }
    .red{
        color:#ff464e;
    }
</style>
