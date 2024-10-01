<script>
import { useRouter } from 'vue-router'
export default {
  setup() {
    const username=''
    const password=''
    const router = useRouter()
    const login = () => {
      if (username === 'budi' && password ==='12345') {
        router.push({ path: 'dashboard' })
      }
    }
    const cancel = () => {
      router.go()
    }
    return { login, cancel,username,password }
  }
}
</script>
<template>
  <div class="container">
    <div class="content">
      <div class="col">
        <label for="username">username</label>
        <input type="text" placeholder="username" v-model="username" />
      </div>
      <div class="col">
        <label for="password">password</label>
        <input type="text" placeholder="password" v-model="password" />
      </div>
      <div class="btn">
        <button @click="login">login</button>
        <button @click="cance">cancel</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
