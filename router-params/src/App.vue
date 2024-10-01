<script>
import navigasiVue from './components/navigasi.vue';
import {RouterView} from 'vue-router'
export default{
  components:{
    navigasiVue
  }
}
</script>

<template>
  <div class="conainer">
    <navigasiVue></navigasiVue>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container{
  height: 100vh;
}
</style>