<template>
  <div id="sign-up">
    <form @submit.prevent="onSignUp">
      <fieldset>
        <h1>Sign Up</h1>

        <p class="field field-icon">
          <label for="username">
            <span>
              <i class="fas fa-user"></i>
            </span>
          </label>
          <input
            v-model="username"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
        </p>

        <!-- if error -->
        <!-- <p class="error">
        Full name field is invalid!
        </p>-->
        <!-- end if error -->

        <p class="field field-icon">
          <label for="email">
            <span>
              <i class="fas fa-envelope"></i>
            </span>
          </label>
          <input v-model="email" type="text" name="email" id="email" placeholder="example@gmail.com" />
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
            placeholder="Password"
          />
        </p>

        <p class="field field-icon">
          <label for="re-password">
            <span>
              <i class="fas fa-lock"></i>
            </span>
          </label>
          <input
            v-model="rePassword"
            type="password"
            name="re-password"
            id="re-password"
            placeholder="Repeat password"
          />
        </p>

        <p>
          <button>Create Account</button>
        </p>

        <p class="text-center">
          Have an account?
          <router-link to="/sign-in">Log in</router-link>
        </p>
      </fieldset>
    </form>
  </div>
</template>

<script>
import userService from '@/mixins/user-service';

export default {
  name: "SignUp",
  data: function() {
    return {
      username: "",
      email: "",
      password: "",
      rePassword: "",
    };
  },
  methods: {
    onSignUp() {
      const payload = {
        email: this.email,
        password: this.password,
        returnSecureToken: true,
        displayName: this.username
      };

      this.signUp(payload);
    }
  },
  mixins: [userService]
};
</script>

<style scoped>

</style>
