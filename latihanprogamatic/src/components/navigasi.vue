<script>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav>
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
    <RouterLink to="/list">list</RouterLink>
  </nav>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  color: black;
}
nav {
  padding: 10px 5px;
  display: flex;
  gap: 25px;
}
</style>
