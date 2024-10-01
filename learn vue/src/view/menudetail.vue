<script setup>
import {useRoute}  from 'vue-router';
import {RouterLink} from 'vue-router'
const route=useRoute();
</script>

<template>
    <h1 v-for="data in route.params" :key="data.id">{{ data }}</h1>
    <RouterLink to="/menu">back</RouterLink>
</template>