<template>
    <div>
        <div v-if="lists != null">
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
        <div v-else>
            <br><br><br><br>
            <p style="text-align: center;font-size: 1rem;margin-top: 30%">loading...</p>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default{
        name:"listy",
        data:function(){
            return{
                lists:null
            }
        },
        watch:{
            "$route":["getData"]
        },
        mounted:function(){
            var that = this;
            console.log(this.$route.params.listname);
            console.log(this.$route.params.sort);
            if(this.$route.params.sort){
                axios.get(`h5/api/category/${this.$route.params.listname}/${this.$route.params.sort}`)
                    .then(function(res){
                        console.log(res)
                        that.lists= res.data.data.list;
                    }).catch(function(error){
                    console.log("XXX")
                })
            }else{
                axios.get(`h5/api/category/${this.$route.params.listname}/`)
                    .then(function(res){
                        console.log(res)
                        that.lists= res.data.data.list;
                    }).catch(function(error){
                    console.log("XXX")
                })
            }

        },
        methods:{
            getData:function(){
                var that = this;
                console.log(this.$route.params.listname)
                console.log(this.$route.params.sort)
                if(this.$route.params.sort){
                    axios.get(`h5/api/category/${this.$route.params.listname}/${this.$route.params.sort}`)
                        .then(function(res){
                            console.log(res)
                            that.lists= res.data.data.list;
                        }).catch(function(error){
                        console.log("XXX")
                    })
                }else{
                    axios.get(`h5/api/category/${this.$route.params.listname}/`)
                        .then(function(res){
                            console.log(res)
                            that.lists= res.data.data.list;
                        }).catch(function(error){
                        console.log("XXX")
                    })
                }
            }
        }
    }
</script>

<style scoped nmbhg>
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
