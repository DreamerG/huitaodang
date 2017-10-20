<template>
    <div>
        <headers></headers>
        <h3>登录</h3>
        <div class="user">用户名：<input type="text" class="user2" v-model="username"></div>
        <div class="pw">密&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="password" class="pw2" v-model="password"></div>
        <button @click="reg()">登录</button>
        <footers></footers>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import axios from "axios"
    export default {
        name:"register",
        data:function(){
            return{
                username:"",
                password:""
            }
        },
        methods:{
            reg:function(){
                var that = this;
                axios.post("/api/login","username="+this.username+"&password="+this.password)
                    .then(function(res){
                        if(res.data){
                            Toast({
                                message: '聪明的智商占领高地了，恭喜你，登录成功',
                                position: 'middle',
                                duration: 1000
                            });
                            //console.log(document.cookie.substr(document.cookie.indexOf("=",15)+1));

                            console.log(document.cookie);
                            
                            that.$router.push("/")
                        }else{
                            Toast({
                                message: '你别是个弱智吧，账号密码记不住？',
                                position: 'middle',
                                duration: 1000
                            });
                        }
                    }).catch(function(error){
                    console.log("XXX")
                })
            }
        }
    }
</script>

<style>
    h3{
        text-align: center;
        font-size: 1rem;
    }
    .user{
        position: relative;
        top:2rem;
        left:2rem;
    }
    .pw{
        position: relative;
        top:3rem;
        left:2rem;
    }
    button{
        position: relative;
        top:4rem;
        left:2rem;
        width: 5.5rem;
    }
</style>
