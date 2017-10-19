<template>
    <div>
        <h3>注册</h3>
        <input type="text" class="user" v-model="username">
        <input type="password" class="pw" v-model="password">
        <button @click="reg()">注册</button>
    </div>
</template>

<script>
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
                axios.post("/api/register","username="+this.username+"&password="+this.password)
                    .then(function(res){
                        if(res.data){
                            alert("success")
                        }else{
                            alert("lose")
                        }
                    }).catch(function(error){
                    console.log("XXX")
                })
            }
        }
    }
</script>

<style>

</style>
