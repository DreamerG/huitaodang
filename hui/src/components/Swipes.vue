<template>
    <mt-swipe :auto="4000" class="po">
        <mt-swipe-item  v-for="item in datas" :key="item.id">
            <img :src="item.mPictUrl" style="width:100%">
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
    import axios from "axios"
    export default {
        name:'swipe',
        data:function(){
            return{
                datas:[]
            }
        },
        mounted:function(){
            var that = this;
            axios.get("h5/api/banners/")
                .then(function(res){
                    console.log(res.data.data.list);
                    that.datas = res.data.data.list;
                }).catch(function(error){
                console.log("XXX")
            })
        }
    }
</script>
