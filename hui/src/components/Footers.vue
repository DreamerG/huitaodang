<template>
       <div id="bottom_menu">
           <ul class="forever">
               <li class="l">
                   <router-link to="/" active-class="red" exact>
                       <i class="iconfont">&#xe609;</i>首页
                   </router-link>
               </li>
               <li class="l">
                   <router-link to="/popular-items" active-class="red" exact>
                       <i class="iconfont">&#xe66d;</i>人气榜
                   </router-link>
               </li>
               <li class="l">
                   <router-link to="/9k9" active-class="red" exact>
                       <i class="iconfont">&#xe683;</i>9块9包邮
                   </router-link>
               </li>
               <li class="l">
                   <router-link to="/20k" active-class="red" exact>
                       <i class="iconfont">&#xe614;</i>20元封顶
                   </router-link>
               </li>
               <li class="l">
                   <router-link to="/register" active-class="red" exact>
                       <i class="iconfont">&#xe60d;</i>注册
                   </router-link>
               </li>
               <li class="l">
                   <router-link to="/login" active-class="red" exact>
                       <i class="iconfont">&#xe639;</i>登录
                   </router-link>
               </li>
           </ul>
       </div>
</template>

<script>
    export default{
        name:"footers"
    }
</script>

<style scoped>
    @font-face {
        font-family: 'iconfont';
        src: url('../assets/font/iconfont.eot');
        src: url('../assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
        url('../assets/font/iconfont.woff') format('woff'),
        url('../assets/font/iconfont.ttf') format('truetype'),
        url('../assets/font/iconfont.svg#iconfont') format('svg');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }

    div#bottom_menu {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 1.2rem;
        background: #fff;
        border-top: 1px solid #e7e7e7;
        box-shadow: 0 7px 12px #333;
        z-index: 999;
    }

    .l {
        float: left;
    }

    li {
        width: 16.6%;
        text-align: center;
        font-size: .25rem;
        height: 1.2rem;
        line-height: 1.2rem;
    }

    div ul li i {
        display: block;
        width: .5rem;
        height: .2rem;
        font-size: .5rem;
        margin: 0 auto;
        margin-bottom: .28rem;
        margin-top: -.18rem;
    }

    .red {
        color: #ff464e;
    }
</style>
