<template>
    <div>
        <headers></headers>
        <listx></listx>
        <footers></footers>
        <div class="hello">
            <swipe></swipe>
            <div class="taobao">
                <div class="l">提示：使用手机淘宝打开更流畅</div>
                <span class="r" @click="al">立即打开</span>
            </div>
            <div class="jingxuan">
                <div class="left">
                    <router-link to="">
                        <img src="../assets/images/new.png">
                    </router-link>
                </div>
                <div class="right">
                    <div class="rightTop">
                        <router-link to="">
                            <img src="../assets/images/ht.png">
                        </router-link>
                    </div>
                    <div class="rightBot">
                        <div class="bottomL">
                            <router-link to="">
                                <img src="../assets/images/thq.png">
                            </router-link>
                        </div>
                        <div class="bottomR">
                            <router-link to="">
                                <img src="../assets/images/tj.png">
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="xiazai" @click="load">
                <p>下载惠淘党APP</p>
            </div>
            <div class="up">
                <p class="new10"><b>…………</b> 每天10点上新 <b>…………</b></p>
                <p class="thr">
                    <span><i class="one"></i>精选好货</span>
                    <span><i class="two"></i>内部优惠券</span>
                    <span><i class="three"></i>全场包邮</span>
                </p>
            </div>
            <div v-if="indexs != null">
                <div id="listy">
                    <div class="one" v-for="item in indexs" :key="item.pic">
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
            <div v-else>
                <br><br><br><br>
                <p style="text-align: center">loading...</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import axios from "axios";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      indexs:null
    }
  },
    methods:{
        al:function(){
            Toast({
                message: '让你打开你就打开？',
                position: 'middle',
                duration: 1000
            });
        },
        load:function(){
            Toast({
                message: '别点',
                position: 'middle',
                duration: 1000
            });
        }
    },
    mounted:function(){
        var that = this;
        axios.get('/h5/api/index-info/')
            .then(function(res){
                console.log(res)
                that.indexs = res.data.data.list;
            }).catch(function(error){
            console.log("XXX")
        })
        document.getElementById("list").addEventListener("touchstart",function(evt){
            var e = event || window.event;
            var downX = e.changedTouches[0].clientX;
            var downLeft = document.getElementById("xixi").offsetLeft;
            document.getElementById("list").addEventListener("touchmove",function(evt){
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello{
        font-size: 12px;
    }
    .po{
        height: 4.1rem;
        margin-top: 2.2rem;
    }
    .taobao{
        height: 1.306667rem;
        border-bottom: 1px solid #eee;
    }
    .taobao .l{
        box-sizing: border-box;
        height: 100%;
        padding: .266667rem;
        line-height: .8rem;
    }
    .taobao .r{
        margin: .266667rem .6rem 0 0;
        width: 2.133333rem;
        height: .773333rem;
        line-height: .773333rem;
        border: 1px solid #f50;
        color: #f50;
        text-align: center;
        border-radius: .106667rem;
        background: white;
    }

    .jingxuan{
        width: 100%;
        height: 5rem;
        border-bottom: 1px solid #eee;
        background: pink;
    }
    .jingxuan .left{
        width: 40%;
        height: 100%;
        border-right: 1px solid #eee;
        float: left;
    }
    .jingxuan img{
        width: 100%;
        height: 100%;
    }
    .jingxuan .right{
        width: 60%;
        height: 100%;
        float: right;
    }
    .jingxuan .right .rightTop{
        height: 50%;
        border-bottom: 1px solid #eee;
    }
    .jingxuan .right .bottomL{
        width: 50%;
        float: left;
        border-right: 1px solid #eee;
    }
    .jingxuan .right .bottomR{
        width: 50%;
        float: left;
    }

    .xiazai{
        width: 100%;
        height: 1.2rem;
        background-color: #f6f6f6;
        padding-top: .2rem;
    }
    .xiazai p{

        display: block;
        width: 90%;
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        letter-spacing: 1px;
        margin: 0 auto;
        background-color: #fff;
        border: 1px solid #ff464e;
        color: #ff464e;
        text-decoration: none;
        font-size: .4rem;
    }

    .up .new10{
        text-align: center;
    }
    .up b{
        position: relative;
        top:-.1rem;
    }
    .up .thr{
        font-size: .3rem;
        color: #666;
        text-align: center;
        margin-bottom: .3rem;
    }
    .up i{
        position: relative;
        top: .1rem;
        display: inline-block;
        width: .4rem;
        height: .4rem;
        vertical-align: center;
        margin-right: .1rem;
        background: url('../assets/images/sprite.png');
        background-size: 1.2rem;
    }
    .up i.two{
        background-position: -.4rem,0;
    }
    .up i.three{
        background-position: -.8rem,0;
    }



    #listy{
        width: 100%;
        background: #eee;
        padding-top: .2rem;
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
