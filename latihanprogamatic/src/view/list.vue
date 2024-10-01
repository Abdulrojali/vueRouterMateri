<script>
export default{
  methods:{
    goTo:function(){
      this.$router.go(-1)
    }
  }
}
</script>
<template>list
<button @click="goTo">goTo</button>
</template>


<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  color: black;
}
</style>
