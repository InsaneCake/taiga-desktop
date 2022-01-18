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
      username: "test",
      password: "test",
      server_address: "tree.taiga.io",
      https: true,
      info: "",
      user_authentication_detail:{
        accepted_terms: true,
        auth_token: "",
        big_photo: null,
        bio: "",
        color: "",
        date_joined: "",
        email: "",
        full_name: "",
        full_name_display: "",
        gravatar_id: "",
        id: 0,
        is_active: true,
        lang: "",
        max_memberships_private_projects: null,
        max_memberships_public_projects: null,
        max_private_projects: null,
        max_public_projects: null,
        photo: null,
        read_new_terms: false,
        refresh: "",
        roles: [
          "Front"
        ],
        theme: "",
        timezone: "",
        total_private_projects: 0,
        total_public_projects: 0,
        username: "",
        uuid: ""
      }
    };
  },
  computed: {
    getfrom() {
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
      console.log(this.getfrom+'/auth')
      axios
        .post(this.getfrom+'/auth', {
            "password": this.password,
            "type": "normal",
            "username": this.username
          },{
            headers: {
              "Content-Type": "application/json"
            }
          })
        .then((response) => (
          console.log(response)
        ));
    },
  },
  mounted() {},
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