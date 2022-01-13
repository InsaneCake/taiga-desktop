<template>
    <img alt="Vue logo" src="../assets/logo-color.png">
    <va-form class="form" style="width: 300px;" @submit.prevent="handleSubmit">
        <va-input
        class="mb-4"
        label="Server address"
        v-model="server_address"
        :rules="[value => (value && value.length > 0) || 'Field is required']"
        >
            <template #prependInner>
                <va-icon
                color = "primary"
                name = "cloud"
                />
            </template>
        </va-input>
        <va-input
        class="mb-4"
        label="username/e-mail"
        v-model="username"
        :rules="[value => (value && value.length > 0) || 'Field is required']"
        >
            <template #prependInner>
                <va-icon
                color = "primary"
                name = "people"
                />
            </template>
        </va-input>
        <va-input
        label="password"
        type="password"
        v-model="password"
        :rules="[value => (value && value.length > 0) || 'Field is required']"
        >
            <template #prependInner>
                <va-icon
                color = "primary"
                name = "lock"
                />
            </template>
        </va-input>
        <va-button
        type="submit"
        class="mt-5"
        text-color="#111"
        >
            Login
        </va-button>
    </va-form>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: "",
            server_address: "http:\\\\tree.taiga.io"
        }
    },
    methods: {
        handleSubmit (e) {
            console.log(e)
            console.log('azazaza')
        },
    },
}
</script>

<style scoped>
.form {
    margin: auto;
    margin-top: 50px;
}
</style>