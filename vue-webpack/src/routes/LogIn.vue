<template>
  <form @submit.prevent>
    <input
      v-model="userId"
      placeholder="Your ID"
      type="text" />
    <input
      v-model="userPW"
      placeholder="Your PW"
      type="password" />
    <button @click="logIn">
      Log In!
    </button>
  </form>
</template> 

<script>
export default {
    data() {
        return {
            userID: '',
            userPW: ''
        }
    },
    methods: {
        logIn() {
            this.$store.dispatch('user/logIn', {
                id: this.userId,
                pw: this.userPW
            })
        }
    }
}
</script>

