<script>
export default{
  methods:{
    go1:function(){
      this.$router.go(+1)
    }
  }
}
</script>
<template>home
<button @click="go1">go +1</button>
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
