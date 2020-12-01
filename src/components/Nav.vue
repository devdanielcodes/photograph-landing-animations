<template>
    <div class="nav">
        <h3 class="logo">Cap.</h3>
        <ul>
            <li><a href="">About</a></li>
            <li><a href="">Connect</a></li>
            <li><a href="">More</a></li>
        </ul>
        
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    width: 90%;
    margin: auto
}
.logo{
    color: white
}
.nav ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.nav ul li{
    margin-right: 30px;
    list-style: none;
}
.nav ul li a{
    text-decoration: none;
    color: black
}
@media(max-width: 670px){
    .nav ul{
        position: absolute;
        flex-direction: column;
        top: 0;
        right: 0;
        background: blue;
        align-items: flex-end;
        width: 200px;
        height: 100vh;
        font-size: 30px;
        transform: translateY(-100%)
    }
    .nav ul.open{
        transform: translateX(0%)
    }
}
</style>