<template>
    <div>
        <headers></headers>
        <dis></dis>
        <footers></footers>
    </div>
</template>

<script>
    export default {
        name:'twenty',
        data:function(){
            return {
                route:""
            }
        },
        mounted:function(){
            console.log(this.$route.path)
            this.$store.dispatch("addDataAct",this.$route.path)
        }
    }
</script>

<style>

</style>
