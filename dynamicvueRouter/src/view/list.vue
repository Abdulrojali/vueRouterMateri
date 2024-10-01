
<script>
import {RouterLink} from 'vue-router' 
export default{
    data(){
        return{
            list:[
                {id:1,nama:'budi',alamat:'bandung',usia:20,jurusan:'SI'},
                {id:2,nama:'ahmad',alamat:'sukabumi',usia:20,jurusan:'SI'},
                {id:3,nama:'sinta',alamat:'cianjur',usia:20,jurusan:'SI'},
                {id:4,nama:'laila',alamat:'bali',usia:20,jurusan:'SI'},
            ],
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col"
            v-for="(data,index) in list" :key="data.id">
            <RouterLink :to="`/list/${data.id}/${data.nama}/${data.alamat}/${data.usia}/${data.jurusan}`">{{ data.nama }}</RouterLink>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
.container{
    width:100%;
    height:100vh;
}
.row{
    width:80%;
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
    grid-gap:10px;
}

.col{
    padding:10px;
    border-radius:5px;
    border:1px solid red;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
</style>