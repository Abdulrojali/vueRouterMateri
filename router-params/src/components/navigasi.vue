<script>
import { RouterLink } from 'vue-router'
export default {
  data() {
    return {
      navigasi: [
        { routerData: '/', routerName: 'home' },
        { routerData: '/menu', routerName: 'menu' },
        { routerData: '/about', routerName: 'about' },
      ]
    }
  }
}
</script>
<template>
  <nav class=" py-2 d-flex justify-content-around align-items-center">
    <h3 class="h2 capitalize">judul</h3>
    <div class="row">
      <RouterLink
        class="col-4 text-black font-sans text-decoration-none"
        v-for="(data, index) in navigasi"
        :key="index"
        :to="`${data.routerData}`">
        {{ data.routerName }} </RouterLink
      >
    </div>
  </nav>
</template>

<style scoped>

</style>