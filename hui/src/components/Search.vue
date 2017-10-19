<template>
   <div>
        <div v-if="!this.$route.params.sear">
            <div id="search">
        <span>
            <a href="javascript:history.back(-1)">
                <i></i>
            </a>
        </span>
                <form class="form">
                    <p>
                        <i class="iconfont">icon</i>
                        <input type="text" class="txt">
                        <i class="x" @click="clear">×</i>
                    </p>
                    <!--           <router-link :to="/search/ + xx">
                                   <input type="button" class="sub" value="搜索" @click="search()">
                               </router-link>-->
                    <a @click="routerto">
                        <input type="button" class="sub" value="搜索">
                    </a>
                </form>
            </div>
            <div id="jilu">
                <h3>搜索记录</h3>
                <div>
                    <ul>
                        <!--
                                           <router-link :to="/search/ + xx"><li @click="haha" ref="inner">asd</li></router-link>
                        -->
                        <a @click="routerto2">
                            <li ref="inner">毛衣</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
       <div v-else>
           <headers></headers>
           <footers></footers>
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
                    <!--<span class="sort" @click="hide()">icon</span>-->
                </div>
           <div id="listy">
                    <div class="one" v-for="item in lists" :key="item.pic">
                        <router-link :to="'/item/' + item._id" class="a">
                            <div class="pic">
                                <img :src="'//gaitaobao4.alicdn.com/tfscom/i2/'+item.pic">
                            </div>
                            <div class="word">
                                <div class="name">{{item.t}}</div>
                                <div class="priced">
                        <span>
                            <i></i>
                            包邮
                        </span>
                                    淘宝价&nbsp;￥{{item.cs/100}}
                                </div>
                                <div class="people"></div>
                                <div class="price">
                                    <span class="l">劵后</span>
                                    <em>￥{{item.cp/100}}</em>
                        <span class="r">
                            {{item.ca/100}}元劵
                        </span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
       </div>
   </div>

</template>

<script>
    import axios from "axios"
    export default {
        name:'search',
        data:function(){
            return{
                xx:'',
                lists:null
            }
        },
        methods:{
            haha:function(){
                //alert('success');
                //console.log(this.$refs.inner)
                var that = this;
                that.xx=this.$refs.inner.innerHTML;
            },
            search:function(){
                var that = this;
                that.xx = document.querySelector(".txt").value
                console.log(that.xx)
            },
            routerto:function(){
                var that = this;
                this.search();
                this.$router.push(`/search/${this.xx}`)
                axios.get(`h5/api/search/${this.$route.params.sear}/`)
                    .then(function(res){
                        console.log(res);
                        that.lists= res.data.data.list;
                    }).catch(function(error){
                    console.log("XXX")
                })

            },
            routerto2:function(){
                var that = this;
                this.haha();
                this.$router.push(`/search/${this.xx}`)
                axios.get(`h5/api/search/${this.$route.params.sear}/`)
                    .then(function(res){
                        console.log(that)
                        that.lists= res.data.data.list;
                        console.log(that.lists)
                    }).catch(function(error){
                    console.log("XXX")
                })
            },
            clear:function(){
                document.querySelector(".txt").value = ""
            }
        },
        mounted:function(){
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


        }
    }
</script>

<style>
    #search{
        position: relative;
        width: 100%;
        height: 1.2rem;
        background: #ff464e;
        position: fixed;
        top:0;
    }
    #search span{
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        text-align: center;
    }
    #search span i{
        display: inline-block;
        width: .6rem;
        height: .6rem;
        background: url("../assets/images/back.png") no-repeat;
        background-size: .6rem;
        margin-top: .3rem;
    }
    #search form{
        position: relative;
        float: right;
        width: 88%;
        height: 1.2rem;
        padding-top: .2rem;
    }
    #search form p{
        height: .8rem;
        line-height: .8rem;
        position: relative;
        width: 80%;
        text-align: left;
        background: #fd7f7f;
    }
    #search form p i.iconfont{
        float: left;
        width: 12%;
        text-align: center;
        font-size: .36rem!important;
        color: #fefefe;
        height: .8rem;
        line-height: .8rem;
    }
    #search form p input{
        position: relative;
        float: left;
        width: 80%;
        height: .8rem;
        line-height: .5rem;
        font-size: .36rem;
        color: #fefefe;
        padding: 0 .1rem;
        background: 0;
        border: 0;
        vertical-align: top;
        outline: none;
    }
    #search form p i.x{
        position: absolute;
        right: .2rem;
        display: block;
        top: .18rem;
        width: .4rem;
        height: .4rem;
        line-height: .32rem;
        background: #fefefe;
        text-align: center;
        border-radius: 50%;
        font-size: 1.3em;
        color: #fd7f7f;
    }
    #search form input.sub{
        top: .2rem;
        width: 1.2rem;
        height: .8rem;
        line-height: .8rem;
        background: 0;
        border: 1px solid #fff;
        border-radius: 0;
        color: #fff;
        font-size: .4rem;
        position: absolute;
        right: .2rem;
    }
    #jilu{
        padding: .5rem;
    }
    #jilu h3{
        width: 100%;
        height: .8rem;
        line-height: .8rem;
        border-bottom: 1px solid #ddd;
        text-align: left;
        font-size: 100%;
        font-weight: 500;
    }
    #jilu ul{
        padding-top: .5rem;
    }
    #jilu ul li{
        float: left;
        padding: 0 .4rem;
        height: .7rem;
        line-height: .65rem;
        margin: 0 .45rem .5rem 0;
        border: 1px solid #ddd;
        border-radius: .4rem;
        text-align: center;
    }

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



    #listy{
        width: 100%;
        background: #eee;
        padding-top: .2rem;
        margin-top: 2.2rem;
    }
    #listy .one{
        position: relative;
        color: #bebebe;
        border: 0;
        width: 97%;
        background: #fff;
        margin: 0 0 1.2% 1.5%;
    }
    #listy .one .a{
        padding: .1rem;
        height: auto;
        width: 100%;
        display: block;
        background: #fff;
    }
    #listy .one .a .pic{
        position: relative;
        width: 35%;

    }
    #listy img{
        width: 100%;
        height: 3.1rem;
        position: absolute;
        top: 0;
        left: 0;
    }
    #listy .one .a .word{
        margin-left: 5%;
        width: 60%;
        position: relative;
        right: -3.4rem;
        top:0;
    }
    #listy .one .a .word .name{
        font-size: .4rem;
        color: #333;
        line-height: 2;
        white-space: nowrap;
        word-break: keep-all;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    #listy .one .a .word .priced{
        font-size: .3rem;
        color: #666;
        line-height: 2;
        height: .6rem;
        overflow: hidden;
    }
    #listy .one .a .word .priced span{
        position: relative;
        display: inline-block;
        height: .4rem;
        line-height: .4rem;
        color: #ff5400;
        font-size: .25rem!important;
        margin-right: .4rem;
        border: 1px solid #ff5400;
        border-radius: 2px;
        padding-right: .1rem;
    }
    #listy .one .a .word .priced span i{
        display: inline-block;
        vertical-align: top;
        width: .4rem;
        height: .41rem;
        margin-left: -1px;
        margin-top: -1px;
        border-radius: 2px;
        background: url("../assets/images/cat.png");
        background-size: .41rem;
    }
    #listy .one .a .word .people{
        height: .4rem;
        line-height: .4rem;
        font-size: .3rem;
        margin-bottom: .5rem;
    }
    #listy .one .a .word .price{
        position: relative;
        width: 100%;
        height: .8rem;
        line-height: 1rem;
        font-size: .3rem;
        color: #f20;
    }
    #listy .one .a .word .price em{
        font-size: .5rem;
        position: absolute;
        top:-.2rem;
        font-weight: 700;
    }
    #listy .one .a .word .price span.l{
        position: relative;
        display: inline-block;
        bottom: 0rem;
        width: 1rem;
        height: .5rem;
        line-height: .5rem;
        font-size: .25rem;
        color: #fff;
        text-align: center;
        background: linear-gradient(90deg,#f80,#ff5400);
        vertical-align: middle;
        margin-right: .2rem;
    }
    #listy .one .a .word .price span.r{
        position: absolute;
        right: 0;
        bottom: .2rem;
        width: 1.6rem;
        height: .6rem;
        line-height: .6rem;
        font-size: .36rem;
        color: #fff;
        text-align: center;
        background: linear-gradient(90deg,#f80,#ff5400);
        letter-spacing: 1px;
    }
</style>
