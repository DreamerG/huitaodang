<template>
    <div>
        <header2></header2>
        <footer2></footer2>
        <div id="item">
            <div class="img">
                <img :src="'//gaitaobao4.alicdn.com/tfscom/i2/'+things.pic">
            </div>
            <div class="cat">
                <i></i>
                &nbsp;|&nbsp;
                <em>天猫</em>
            </div>
            <div class="title">
                <h3>{{things.t}}</h3>
            </div>
            <div class="priced">
                <span>原价：{{things.dp / 100}}元</span>
                <span class="quan">
                    {{things.ca / 100}}<em>元券</em>
                </span>
                <span class="copy">复制淘口令</span>
            </div>
            <div class="price">
                <span>券后价：{{things.cp / 100}}元</span>
            </div>
            <div class="time">
                倒计时
            </div>
            <div class="canv">
                canvas
            </div>
            <div class="connent">
                <h3>推荐理由</h3>
                <p>{{things.desc}}</p>
            </div>
            <h3 class="tuijian">推荐宝贝</h3>
        </div>
        <div id="listy">
            <div class="one" v-for="item in qita" :key="item.pic">
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
</template>

<script>
    import axios from "axios";
    export default{
        name:"item",
        data:function(){
            return{
                things:"",
                qita:[]
            }
        },
        mounted:function(){
            var that = this;
            axios.get(`/h5/api/item/${this.$route.params.thing_id}`)
                .then(function(res){
                    console.log(res);
                    that.things = res.data.data.item;
                    that.qita = res.data.data.list;
                }).catch(function(error){
                console.log("XXX")
            });
        }
    }
</script>

<style scoped>
    #item{
        position: relative;
        overflow: hidden;
        padding: 0 5%;
    }
    #item .img{
        position: relative;
        overflow: hidden;
        padding: 0 5%;
        text-align: center;
    }
    #item .img img{
        width: 250px;
        height: 250px;
    }
    #item .cat{
        height: .8rem;
        line-height: .8rem;
    }
    #item .cat i{
        background: url("../assets/images/cat.png") no-repeat;
        background-size: .4rem;
        display: inline-block;
        vertical-align: middle;
        width: .4rem;
        height: .4rem;
    }
    #item .title{
        margin: .2rem 0;
    }
    #item .title h3{
        font-size: .36rem;
        font-weight: 700;
    }
    #item .priced{
        line-height: .8rem;
        position: relative;
    }
    #item .priced .quan{
        padding-left: .2rem;
        margin-left: .5rem;
        border: 1px solid #40d3b7;
        color: #40d3b7;
    }
    #item .priced .quan em{
        margin-left: .2rem;
        background-color: #40d3b7;
        color: #fff;
        padding: 0 .1rem;
    }
    #item .priced .copy{
        position: absolute;
        display: inline-block;
        right: .2rem;
        top: 0;
        padding: 0 .2rem;
        height: .8rem;
        line-height: .75rem;
        border: 1px solid #ff464e;
        text-align: center;
        font-size: .36rem;
        color: #ff464e;
    }
    #item .price {
        line-height: 1.2rem;
    }
    #item .price span{
        color: #ff464e;
        font-size: .5rem;
    }
    #item .time{
        height: .8rem;
    }
    #item .canv{
        height: 300px;
        background: pink;
    }
    #item .connent{
        width: 100%;
        margin-bottom: .4rem;
    }
    #item .connent h3{
        height: 1rem;
        line-height: 1rem;
        font-size: .45rem;
        font-weight: 700;
        color: #666;
    }
    #item .connent p{
        overflow-x: hidden;
        overflow-y: auto;
        padding: 0 .2rem;
        line-height: 1.8;
    }
    #item .tuijian{
        padding-left: .3rem;
        height: 1rem;
        line-height: 1rem;
        color: #666;
        font-size: .45rem;
        font-weight: 700;
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
