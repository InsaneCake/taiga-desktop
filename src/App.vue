<template>
  <appbar />
  <router-view/>
</template>

<script>
import cookies from 'js-cookie'
import axios from 'axios'

import Appbar from './components/Appbar.vue'

export default {
  components: {
    Appbar
  },
  methods: {
    restoreUserData() {
      axios
        .get(cookies.get('api_url')+'/users/me',
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + cookies.get("auth_token")
            }
          }
        )
        .then((response) => (
          this.$store.commit('setUserData', response.data),
          this.$router.push({ name: 'Dashboard' })
        ))
    },
  },
  created() {
    if (cookies.get("auth_token") != undefined) {
      this.restoreUserData();
    } else {
      this.$router.push({ name: 'Login' })
    }
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
  min-height: 100vh;
  background: url("./assets/bg-3.png");
  background-position: center;
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
