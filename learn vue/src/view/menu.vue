<script>
import {RouterLink} from 'vue-router'
export default{
    data(){
        return{
            list:[
                {id:1,judul:'belajar masak'},
                {id:2,judul:'belajar mandi'},
                {id:3,judul:'belajar tidurr'},
                {id:4,judul:'belajar matematika'},
            ]
        }
    }
}
</script>
<template>
    <div class="container">
        <h3>list Post</h3>
        <div class="list"
        v-for="(data,index) in list" :key="index">
        <RouterLink :to="`menu/${data.judul}`">{{ data.judul }}</RouterLink>
        </div>
    </div>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.container{
    width: 100%;
    height: 100%;
}
h3{
    font-size: 3em;
    font-weight: 900;
    text-transform: capitalize;
    text-align: center;
}


</style>
