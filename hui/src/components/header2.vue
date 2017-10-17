<template>
    <div id="header2">
            <span @click="back" class="ll">
                <i></i>
            </span>
        <p>商品详情</p>
        <span class="rr">
            <router-link to="/">
                <i>iconfont</i>
            </router-link>
        </span>
    </div>
</template>

<script>
    export default{
        name:"header2",
        methods:{
            back:function(){
                history.go(-1)
            }
        }
    }
</script>

<style >
    #header2{
        position: fixed;
        z-index: 1000;
        width: 100%;
        height: 1.2rem;
        top: 0;
        background-color: #ff464e;
        transition: top .2s ease;
    }
    #header2 .ll{
        position: absolute;
        top: 0;
        left: 0;
        width: 1.2rem;
        height: 1.2rem;
        text-align: center;
    }
    #header2 .ll i{
        display: inline-block;
        width: .6rem;
        height: .6rem;
        background: url("../assets/images/back.png") no-repeat;
        background-size: .6rem;
        margin-top: .3rem;
    }
    #header2 p{
        height: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
        font-size: .4rem;
        color: #fff;
        letter-spacing: 2px;
    }
    #header2 span.rr{
        position: absolute;
        top: 0;
        right: 0;
        width: 1.2rem;
        height: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
        font-size: .1rem;

    }
    #header2 span.rr i{
        color: white;
    }
</style>
