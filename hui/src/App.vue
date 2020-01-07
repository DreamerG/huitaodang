<template>
    <div id="app">
<!--        <headers></headers>
        <listx></listx>-->

        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'apps'
    }

</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 1.2rem;
    }


</style>
