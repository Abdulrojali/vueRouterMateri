<script>
import menuSosialMedia from '../components/iconComponent.vue'
export default {
    data(){
        return{
            listicon:[
                {namaIcon:'fa-brands fa-facebook',nama:'facebook',url:'https://facebook.com'},
                {namaIcon:'fa-brands fa-instagram',nama:'instagram',url:'https://instagram.com'},
                {namaIcon:'fa-brands fa-twitter',nama:'twitter',url:'https://www.linkedin.com/notifications/?filter=all'},
            ]
        }
    },
  components:{
    menuSosialMedia
  }
}
</script>
<template>
    <div class="container">
        <menuSosialMedia
    v-for="(data,index) in listicon" :key="index"
    :urlIcon="data.namaIcon"
    :urlLink="data.urlIcon"
    :namaIcon="data.nama"
    >
    </menuSosialMedia>
    </div>
</template>


<style scoped>
.container{
    display: flex;
    gap: 25px;
}
</style>