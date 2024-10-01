<script setup>
import { useRoute,RouterLink } from 'vue-router';
const router=useRoute()
const datas=router.params
console.log(datas)
</script>

<template>
    <h1 v-for="data in datas" :key="data.id">hallo {{ data.nama }}</h1>
    <RouterLink to="/menu" class="btn btn-primary btn-sm py-2">back</RouterLink>
</template>