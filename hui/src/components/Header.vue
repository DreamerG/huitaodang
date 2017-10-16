<template>
    <div>
        <div id="header">
            <span>
                <i></i>
            </span>
            <div class="search">
                <div class="search1">
                    <i></i>
                    <div class="word">查找宝贝</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"headers"
    }
</script>

<style scoped>
    #header{
        position: fixed;
        z-index: 1000;
        width: 100%;
        height: 1.2rem;
        top: 0;
        background-color: #ff464e;
        transition: top .2s ease;
    }
    #header span{
        float: left;
        width: 38%;
        height: 100%;
        text-align: center;
    }
    #header span i{
        background: url("../assets/images/logo.png") no-repeat;
        background-size: 100% auto;
        width: 100%;
        display: inline-block;
        height: 1.2rem;
    }
    #header .search{
        float: left;
        width: 62%;
        height: 100%;
        padding-left: .3rem;
        padding-right: .2rem;
        display: inline-block;
    }
    #header .search .search1{
        position: relative;
        top: .1rem;
        width: 100%;
        height: .8rem;
        text-align: left;
        background: #fd7f7f;
        display: inline-block;
    }
    #header .search .search1 i{
        width: 12%;
        text-align: center;
        float: left;
        height: .8rem;
        line-height: .8rem;
        font-size: .36rem;
        color: #fefefe;
    }
    #header .search .search1 .word{
        float: left;
        height: .8rem;
        line-height: .8rem;
        font-size: .36rem;
        color: #fefefe;
    }
</style>
