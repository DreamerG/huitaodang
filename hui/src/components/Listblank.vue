<template>

    <div>
        <headers></headers>
        <listx></listx>
        <footers></footers>
        <router-view></router-view>
    </div>
</template>

<script>
    export default{
        name:"listblank",
        mounted:function(){
            document.getElementById("list").addEventListener("touchstart",function(evt){
                var e = event || window.event;
                var downX = e.changedTouches[0].clientX;
                var downLeft = document.getElementById("xixi").offsetLeft;
                document.getElementById("list").addEventListener("touchmove",function(evt){
                    var e = event || window.event;
                    var distX = e.changedTouches[0].clientX - downX;
                    var a = distX + downLeft;
                    if(a > 0){
                        a = 0;
                    }
                    if( a < -770){
                        a = -770;
                    }
                    document.getElementById("xixi").style.left = a + "px";
                })
                document.getElementById("list").addEventListener("touchend",function(){
                    document.getElementById("list").removeEventListener("touchstart",evt);
                    document.getElementById("list").removeEventListener("touchmove",evt);
                })
            })
        }
    }
</script>
<style>

</style>
