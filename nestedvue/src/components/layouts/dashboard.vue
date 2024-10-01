<script>
import { RouterView } from 'vue-router'
import navigasiVue from '../navigasi.vue'
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
