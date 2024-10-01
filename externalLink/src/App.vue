<script>
import navigasiVue from './components/navigasi.vue'
import { RouterView } from 'vue-router'
export default {
  components: {
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
<style>
.container {
  display: flex;
  flex-direction: column;
}
</style>
