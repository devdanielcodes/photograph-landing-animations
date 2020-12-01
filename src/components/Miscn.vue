<template>
    <div class="misc">
        <div class="soc">
            <img src="../assets/twitter.svg" alt="" srcset="">
            <img src="../assets/instagram.svg" alt="" srcset="">
        </div>
        <div class="nav">
            <div v-on:click="onep" class="link" :class="{active: one}"> <span>01</span><div class="line"></div></div>
            <div v-on:click="twop" class="link" :class="{active: two}"><span>02</span> <div class="line"></div></div>
            <div v-on:click="threep" class="link" :class="{active: three}"><span>03</span> <div class="line"></div></div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
export default {
    setup () {

        const router = useRouter()
        const one = ref(true)
        const two = ref(false)
        const three = ref(false)
        
        function onep(){
            setTimeout(() => {
                router.push("/")
                one.value = true, two.value = false, three.value = false
            }, 3000);
        }
        function twop(){
            setTimeout(() => {
                router.push("/s")
                one.value = false, two.value = true, three.value = false

            }, 3000);
        }
        function threep(){
            setTimeout(() => {
                router.push("/t")
                one.value = false, two.value = false, three.value = true
            }, 3000);
        }

        return {
            one,
            two,
            three,
            onep,
            twop,
            threep
        }
    }
}
</script>

<style scoped>
.misc{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    width: 90%;
    margin: auto
}
.soc img{
    margin-right: 20px
}
.misc .nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.link{
    margin-right: 30px;
    font-size: 25px;
    transition: all .2s;
    cursor: pointer;

}
.link div{
    width: 60px;
    height: 4px;
    background: #C4C4C4;
    transition: all .2s

}
.link.active div{
    background: #000000;
}
.link span{
    opacity: 0;
    transform: translateY(-50%);
    transition: all .2s
}
.link.active span{
    opacity: 1;
    transform: translateY(0%)
}
</style>