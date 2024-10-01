<script>
export default{
  methods:{
    backhome:function(){
      this.$router.push('/')
    },
  }
}
</script>
<template>
about
<button @click="backhome">back HOME</button>

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
