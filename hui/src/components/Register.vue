<template>
    <div>
        <headers></headers>

        <h3>注册</h3>
        <div class="user">用户名：<input type="text" class="user2" v-model="username"></div>
        <div class="pw">密&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="password" class="pw2" v-model="password"></div>
        <button @click="reg()">注册</button>
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
                axios.post("/api/register","username="+this.username+"&password="+this.password)
                    .then(function(res){
                        if(res.data){
                            Toast({
                                message: '小伙子不错，居然注册成功了',
                                position: 'middle',
                                duration: 1000
                            });
                            that.$router.push("/login")
                        }else{
                            Toast({
                                message: '这个用户名可能已经注册了',
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
