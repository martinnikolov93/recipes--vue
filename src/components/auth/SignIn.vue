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
          <input
            v-model="email"
            type="text"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            @input="$v.password.$touch()"
          />
        </p>
        <div v-if="$v.email.$dirty">
          <p v-if="!$v.email.required" class="error">
            Email is required!
          </p>
        </div>

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
            @input="$v.password.$touch()"
          />
        </p>
        <div v-if="$v.password.$dirty">
          <p v-if="!$v.password.required" class="error">
            Password is required!
          </p>
          <p v-if="!$v.password.minLength" class="error">
            Password must be atleast 6 characters!
          </p>
        </div>

        <p>
          <button :disabled="$v.$invalid">Login</button>
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
import userService from "@/mixins/user-service";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "SignIn",
  data: function() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onLogin() {
      const payload = {
        email: this.email,
        password: this.password,
        returnSecureToken: true,
      };

      this.signIn(payload);
    },
  },
  mixins: [userService, validationMixin],
  validations: {
    email: { required },
    password: { required, minLength: minLength(6) },
  },
};
</script>

<style scoped></style>
