<script>
import { RouterLink } from 'vue-router'
export default {
  data() {
    return {
      links: [
        { namepath: '/', nama: 'home' },
        { namepath: '/icon', nama: 'icon' }
      ]
    }
  }
}
</script>
<template>
  <nav>
    <h3 class="judul">external <link rel="import" href="component.html" /></h3>
    <RouterLink v-for="(data, index) in links" :key="index" :to="`${data.namepath}`">{{
      data.nama
    }}</RouterLink>
  </nav>
</template>
<style scoped>
nav {
  width: 100%;
  padding: 10px 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
