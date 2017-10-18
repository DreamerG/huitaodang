<template>

    <div>
        <headers></headers>
        <div id="list">
            <ul id="xixi">
                <li>
                    <router-link to="/category/nv-zhuang/" active-class="red">女装</router-link>
                </li>
                <li>
                    <router-link to="/category/nan-zhuang/" active-class="red">男装</router-link>
                </li>
                <li>
                    <router-link to="/category/xie-zi/" active-class="red">鞋子</router-link>
                </li>
                <li>
                    <router-link to="/category/xiang-bao/" active-class="red">箱包</router-link>
                </li>
                <li>
                    <router-link to="/category/mei-zhuang/" active-class="red">美妆</router-link>
                </li>
                <li>
                    <router-link to="/category/hu-fu/" active-class="red">护肤</router-link>
                </li>
                <li>
                    <router-link to="/category/sheng-huo/" active-class="red">生活</router-link>
                </li>
                <li>
                    <router-link to="/category/ju-jia/" active-class="red" exact>居家</router-link>
                </li>
                <li>
                    <router-link to="/category/mei-shi/" active-class="red">美食</router-link>
                </li>
                <li>
                    <router-link to="/category/nei-yi/" active-class="red">内衣</router-link>
                </li>
                <li>
                    <router-link to="/category/yun-dong/" active-class="red">运动</router-link>
                </li>
                <li>
                    <router-link to="/category/shu-ma/" active-class="red">数码</router-link>
                </li>
                <li>
                    <router-link to="/category/mu-ying/" active-class="red">母婴</router-link>
                </li>
                <li>
                    <router-link to="/category/pei-shi/" active-class="red">配饰</router-link>
                </li>
                <li>
                    <router-link to="/category/cheng-ren/" active-class="red">成人</router-link>
                </li>
                <li>
                    <router-link to="/category/qi-ta/" active-class="red">其他</router-link>
                </li>

            </ul>
            <span class="sort" @click="hide()">icon</span>
        </div>
        <div id="sortHide" :class="{hide:flag}">
            <div class="sort_method">
                <ul>
                    <router-link :to="{name:'Listy',params:{listname:this.$route.params.listname,sort:'?sort=sales_desc'}}">
                        <li @click="hide()">销量</li>
                    </router-link>
                    <router-link :to="{name:'Listy',params:{listname:this.$route.params.listname,sort:'?sort=discount_rate_desc'}}">
                        <li @click="hide()">折扣率</li>
                    </router-link>
                    <router-link :to="{name:'Listy',params:{listname:this.$route.params.listname,sort:'?sort=after_coupon_asc'}}">
                        <li @click="hide()">券后价</li>
                    </router-link>
                </ul>
            </div>
        </div>
        <footers></footers>
        <router-view></router-view>
    </div>
</template>

<script>
    export default{
        name:"listblank",
        data:function(){
            return{
                flag:true
            }
        },
        mounted:function(){
            console.log(this.$route.params.listname);
            document.getElementById("list").addEventListener("touchstart",function(evt){
                var e = event || window.event;
                var downX = e.changedTouches[0].clientX;
                var downLeft = document.getElementById("xixi").offsetLeft;
                document.getElementById("list").addEventListener("touchmove", function (evt) {
                    var e = event || window.event;
                    var distX = e.changedTouches[0].clientX - downX;
                    var a = distX + downLeft;
                    if(a > 0){
                        a = 0;
                    }
                    if( a < -770){
                        a = -770;
                    }
                    document.getElementById("xixi").style.left = a + "px";
                })
                document.getElementById("list").addEventListener("touchend",function(){
                    document.getElementById("list").removeEventListener("touchstart",evt);
                    document.getElementById("list").removeEventListener("touchmove",evt);
                })
            })
        },
        methods:{
            hide:function(){
                this.flag = ! this.flag;
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
        /*        overflow: hidden;
                overflow-x: scroll;
                overflow-y: hidden;*/
        -webkit-overflow-scrolling: touch;
        white-space: nowrap;
        height: .96rem;
        position: relative;
        left:0;
        line-height: .3rem;
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
        /*        float: left;*/
    }
    .red{
        color:#ff464e;
    }
    span.sort{
        position:absolute;
        top: .1rem;
        right:0;
        background: rgba(0,0,0,.5);
        z-index: 99999;
        width:1rem;
        height: .8rem;
        color: #fff;
    }
    #sortHide{
        height: 10.35rem;
        width: 100%;
        position: fixed;
        background: hsla(0,0%,100%,.9);
        z-index: 9999;
        transition: .5s;
    }
    .hide{
        height: 0;
        opacity: 0;
        transition: .5s;
        visibility: hidden;
    }
    #sortHide .sort_method{
        position: relative;
        border-bottom: 1px solid #e7e7e7;
        transition: 1s cubic-bezier(.35,2,.35,1),opacity 1s;
    }
    #sortHide .sort_method ul li{
        position: relative;
        width: 80%;
        margin: .5rem auto;
        height: 1rem;
        line-height: 1rem;
        border: 1px solid #ff464e;
        border-radius: .5rem;
        background: #fff;
        text-align: center;
        font-size: .4rem;
    }
</style>
