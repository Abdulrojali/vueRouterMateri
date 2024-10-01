<script>
import {RouterLink} from 'vue-router'
export default{
    data(){
        return{
            listData:[
                {id:1,nama:'budi',usia:20,jurusan:'Teknik Informatika',deskripsi:''},
                {id:2,nama:'ahmad',usia:22,jurusan:'Teknik Informatika',deskripsi:''},
                {id:3,nama:'rudi',usia:21,jurusan:'Teknik Informatika',deskripsi:''},
                {id:4,nama:'ridho',usia:23,jurusan:'Teknik Informatika',deskripsi:''},
            ]
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-6 d-flex flex-column gap-2" 
            v-for="(data,index) in listData" :key="index">
            <h3>{{ data.nama }}</h3>
            <b>{{ data.jurusan }}</b>
            <RouterLink :to="`/menu/${data.id}`" class="btn btn-sm btn-primary py-2">view</RouterLink>
            </div>
        </div>
    </div>
</template>