<script>
import { RouterView } from 'vue-router'
import navigasiVue from './components/navigasi.vue'
export default {
  components:{
    navigasiVue
  }
}
</script>

<template>
  <div class="container">
    <navigasiVue></navigasiVue>
    <RouterView></RouterView>
  </div>
</template>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: 100vh;
}
</style>
