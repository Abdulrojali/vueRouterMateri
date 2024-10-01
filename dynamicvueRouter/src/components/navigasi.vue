<script>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav>
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/list">Data List</RouterLink>
  </nav>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
nav {
  padding: 10px 8px;
  display: flex;
  gap: 30px;
}
</style>
