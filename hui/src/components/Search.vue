<template>
   <div>
       <div id="search">
        <span>
            <i></i>
        </span>
           <form class="form">
               <p>
                   <i class="iconfont">icon</i>
                   <input type="text" class="txt">
                   <i class="x">×</i>
               </p>
               <router-link :to="/search/ + xx">
                   <input type="button" class="sub" value="搜索" @click="search()">
               </router-link>
           </form>
       </div>
       <div id="jilu">
           <h3>搜索记录</h3>
           <div>
               <ul>
                   <router-link :to="/search/ + xx"><li @click="haha" ref="inner">asd</li></router-link>
               </ul>
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
                xx:''
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
/*                axios.get(`/h5/api/search/${document.querySelector(".txt").value}`)
                    .then(function(res){
                        console.log(res)
                    }).catch(function(error){
                    console.log("XXX")
                })*/
                var that = this;
                console.log(that.xx)
                that.xx = document.querySelector(".txt").value
            }
        },
        mounted:function(){
            //document.querySelector(".txt").value=this.$refs.inner.innerHTML;
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

</style>
