<template>
    <div class="main">
        <div class="banner"></div>
        <div class="sect">
            <img class="hero" src="https://res.cloudinary.com/devdaniel/image/upload/v1606797503/pexels-atc-comm-photo-1903308_1_jjsvl5.png" alt="" srcset="">
             <div class="cont">
                <div class="en">
                    <h1 class="pa">Meet the best</h1>
                </div>
                <div class="en">
                    <p class="pa">Meet out top photographers and collaborate<br> with them on your projects</p>
                </div>
                <div class="en">
                    <button class="pa">Connect</button>
                </div>
            </div>
        </div>
        <div class="misc">
        <div class="soc">
            <a href="https://twitter.com/daniel_adekoya_" target="_blank"><img src="../assets/twitter.svg" alt="" srcset=""></a>
            <a href="https://instagram.com/danieladekoya_" target="_blank"><img src="../assets/instagram.svg" alt="" srcset=""></a>
        </div>
        <div class="nav">
            <div v-on:click="onep" class="link df"> <span>01</span><div class="line"></div></div>
            <div v-on:click="twop" class="link nd"><span>02</span> <div class="line"></div></div>
            <div v-on:click="threep" class="link active"><span>03</span> <div class="line"></div></div>
        </div>
    </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
export default {
    setup () {

       let tl = gsap.timeline({delay: .4, duration: 1})

        onMounted(() => {


            tl   
            .from(".banner", {
                width: '0px',
                ease: 'expo',
            })       
            .to('.hero', {
                transform: "translateY(0%)",
                ease: 'expo'
            })
            .from('.pa', {
                transform: "translateY(-200%)",
                ease: 'expo'
            },"-=.4")

        })


        const router = useRouter()

        
        function onep(){
            tl.reverse(2.8)
            setTimeout(() => {
                router.push("/")
            }, 1500);
        }
        function twop(){
            tl.reverse(2.8  )
            setTimeout(() => {
                router.push("/s")

            }, 1500);
        }
        function threep(){
            setTimeout(() => {
                router.push("/t")
            }, 1500);
        }

        return {
            onep,
            twop,
            threep
        }
    }
}
</script>

<style scoped>
.banner{
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    height: 100vh;
    background: #3D1717;
    z-index: -1;
}
.main{
    height: 80vh;
}
.sect{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 75%;
    margin: auto
}
.hero{
    transform: translateY(400%)
}
.sect .cont h1,.sect .cont p{
    margin-bottom: 20px;
}
.sect .cont h1{
    font-size: 50px;
    font-weight: 400
}
.sect .cont button{
    padding: 15px 25px;
    border: none;
    background: black;
    color: white;
    font-size: 22px
}

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
.en{
    overflow: hidden;
}
@media(max-width: 1088px){
    .sect{
        flex-direction: column;
        text-align: center
    }
    .hero{
        width: 200px;
    }
    .sect .cont h1,.sect .cont p{
        margin-bottom: 20px;
    }
    .sect .cont h1{
        font-size: 30px;
        font-weight: 400
    }
    .sect .cont button{
        padding: 15px 25px;
        border: none;
        background: black;
        color: white;
        font-size: 18px
    }
    .link{
        margin-right: 15px
    }
    .link div{
        width: 30px;
    }
    .soc img{
        margin-right: 10px;
        width: 30px
    }
}
</style>