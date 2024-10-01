<script setup>
import {RouterLink,useRoute} from 'vue-router'
const router=useRoute();
const id=router.params.id;
const nama=router.params.nama;
const alamat=router.params.alamat;
const usia=router.params.usia;
const jurusan=router.params.jurusan;
</script>
<template>
    <div class="container">
        <div class="col">
           <p>{{ id }}</p>
           <h1>nama :{{ nama }}</h1>
           <b>alamat :{{ alamat }}</b>
           <b>usia: {{ usia }}</b>
           <b>jurusan :{{ jurusan }}</b>
        </div>
       <RouterLink to="/list">back</RouterLink>
    </div>
</template>

<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
.col{
    display:flex;
    flex-direction:column;
    gap:3px;
}
</style>