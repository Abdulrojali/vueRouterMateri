<script setup>
import {RouterLink} from 'vue-router'
</script>
<template>
    <nav>
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/about">about</RouterLink>
        <RouterLink to="/menu">menu</RouterLink>
    </nav>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
nav{
    padding: 7px 5px;
    display: flex;
    gap: 20px;
}
</style>