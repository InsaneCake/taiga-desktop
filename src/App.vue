<template>
  <appbar />
  <router-view/>
</template>

<script>
import Appbar from './components/Appbar.vue'

export default {
  components: {
    Appbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--va-font);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.va-input__content__input {
  color: var(--va-font) !important;
}

html {
  background: var(--va-appbackground);
  overflow: hidden;
}
</style>
