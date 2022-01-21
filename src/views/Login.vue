<template>
  <div class="page-wrapper">
    <img style="margin-top: 30px" src="../assets/logo-color.png" />
    {{ info }}
    <va-form class="form" style="width: 300px">
      <va-input
        class="mb-4"
        placeholder="Server address"
        v-model="server_address"
      >
        <template #prependInner>
          <!-- <i class="mdi mdi-server" color="primary"/> -->
          <va-icon class="mdi mdi-server" color="primary" />
        </template>
      </va-input>
      <va-checkbox v-model="https" label="Use HTTPS" class="mb-4" />
      <va-input class="mb-4" placeholder="username/e-mail" v-model="username">
        <template #prependInner>
          <va-icon class="mdi mdi-account" color="primary" />
        </template>
      </va-input>
      <va-input
        placeholder="password"
        class="mb-4"
        type="password"
        v-model="password"
      >
        <template #prependInner>
          <va-icon class="mdi mdi-key-variant" color="primary" />
        </template>
      </va-input>

      <br />

      <va-button
        text-color="#111"
        :disabled="is_login_button_disabled"
        @click="handleSubmit"
      >
        Sign in
      </va-button>
    </va-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      server_address: "tree.taiga.io",
      https: false,
      info: "",
    };
  },
  computed: {
    api_url() {
      return `${this.https ? 'https://' : 'http://'}${this.server_address}/api/v1`
    },
    is_login_button_disabled: function () {
      if (this.username.length === 0) {
        return true;
      }
      if (this.password.length === 0) {
        return true;
      }
      if (this.server_address.length === 0) {
        return true;
      }
      return false;
    },
  },
  methods: {
    handleSubmit() {
      localStorage.setItem('last_server', this.server_address)
      localStorage.setItem('last_username', this.username)
      localStorage.setItem('use_https', this.https)
      console.log(this.api_url+'/auth')
      axios
        .post(this.api_url+'/auth', {
          'password': this.password,
            'type': 'normal',
            'username': this.username
          },{
            headers: { 'Content-Type': 'application/json' }
          })
        .then((response) => (
          this.handleAuthResponse(response)
        ))
    },
    handleAuthResponse(response) {
      if (response.status == 200) {
        this.$store.commit('setUserAuthData', response.data)
        this.$cookies.set('api_url', this.api_url)
        this.$cookies.set('auth_token', response.data.auth_token, '30d')
        this.$cookies.set('refresh_token', response.data.refresh, '30d')
        this.$router.push({ name: 'Dashboard' })
      } else {
        console.log('error'+response.status);
      }
    },
    handleUserDataRestore(response) {
      if (response.status == 200) {
        this.$store.commit('setUserData', response.data)
        localStorage.setItem('api_url', this.api_url)
        this.$router.push({ name: 'Dashboard' })
      } else {
        console.log('error'+response.status);
      }
    },
  },
  created() {
    this.server_address = localStorage.getItem("last_server")  == null ? "" : localStorage.getItem("last_server")
    this.username = localStorage.getItem("last_username") == null ? "" : localStorage.getItem("last_username")
    this.https = localStorage.getItem("use_https") === 'true'
    if (this.$cookies.get("auth_token") != undefined) {
      axios
        .get(this.api_url+'/users/me',
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.$cookies.get("auth_token")
            }
          }
        )
        .then((response) => (this.handleUserDataRestore(response)))
    }
    console.log("restoring last data");
  },
};
</script>

<style scoped>
.page-wrapper {
  height: 100vh;
  background: url("../assets/bg-1.png");
  /* background-position: center; */
}
.form {
  padding: 30px;
  margin: auto;
  margin-top: 30px;
  background: #3f4d6466;
  border-radius: 10px;
}
</style>