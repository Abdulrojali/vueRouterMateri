<script>
import { RouterLink } from 'vue-router'
export default {
  data() {
    return {
      routerLinks: [
        { routerName: 'home', routerPath: '/' },
        { routerName: 'menu', routerPath: '/menu' },
        { routerName: 'about', routerPath: '/about' }
      ]
    }
  }
}
</script>
<template>
  <nav>
    <RouterLink
      v-for="(data, index) in routerLinks"
      :key="index"
      :to="`${data.routerPath}`"
      class="links"
    >
      {{ data.routerName }}
    </RouterLink>
  </nav>
</template>
<style scoped>
nav {
  width: 100%;
  padding: 6px 3px;
  display: flex;
  gap: 30px;
}
.links {
  text-decoration: none;
  color: black;
  font-size: 1.3em;
  font-weight: 400;
  text-transform: capitalize;
}
.links:hover {
  opacity: 0.8;
}
</style>
