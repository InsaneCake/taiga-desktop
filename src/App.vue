<template>
  <login/>
</template>

<script>
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(223, 223, 223);
  margin-top: 60px;
}
html {
  background: var(--va-appbackground);
  overflow-y: hidden;
}
</style>
