<template>
  <div id="sign-in">
    <form @submit.prevent="onLogin">
      <fieldset>
        <h1>Login</h1>

        <p class="field field-icon">
          <label for="email">
            <span>
              <i class="fas fa-envelope"></i>
            </span>
          </label>
          <input v-model="email" type="text" name="email" id="email" placeholder="marg@gmial.com" />
        </p>

        <p class="field field-icon">
          <label for="password">
            <span>
              <i class="fas fa-lock"></i>
            </span>
          </label>
          <input
            v-model="password"
            type="password"
            name="password"
            id="password"
            placeholder="******"
          />
        </p>

        <p>
          <button>Login</button>
        </p>

        <p class="text-center">
          Dont' have an account?
          <router-link to="/sign-up">Sign Up</router-link>
        </p>
      </fieldset>
    </form>
  </div>
</template>

<script>
import userService from '@/mixins/user-service';

export default {
  name: "SignIn",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onLogin() {
      const payload = {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      };

      this.signIn(payload);
    }
  },
  mixins: [userService]
};
</script>

<style scoped>

</style>

