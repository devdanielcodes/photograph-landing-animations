<template>
  <div>
    <Nav />
    <router-view v-slot="propss">
      <transition name="v">
        <component :is="propss.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');
*{
  padding: 0;
  margin: 0;
  font-family: 'Montserrat'
}
body{
  overflow: hidden;
}
::-webkit-scrollbar{
  width: 0px;
}
.v-enter-active, .v-leave-active{
  transition: all .2s
}
.v-enter-active{
  transition-delay: .2s
}
.v-enter-from, .v-leave-to{
  opacity: 0;
}
.v-leave-from, .v-enter-to{
  opacity: 1;
}
</style>
