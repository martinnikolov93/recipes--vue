<template>
  <div id="sign-up">
    <form @submit.prevent="onSignUp">
      <fieldset>
        <h1>Sign Up DA TI EBA PUTKATA LELINA</h1>

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
            @input="$v.username.$touch()"
          />
        </p>
        <div v-if="$v.username.$dirty">
          <p v-if="!$v.username.required" class="error">
            Username is required!
          </p>
        </div>

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
            @input="$v.email.$touch()"
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
            placeholder="Password"
            @input="$v.password.$touch()"
          />
        </p>
        <div v-if="$v.password.$dirty">
          <p v-if="!$v.password.required" class="error">
            Password is required!
          </p>
          <p v-else-if="!$v.password.minLength" class="error">
            Password must be atleast 6 characters!
          </p>
        </div>

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
            @input="$v.rePassword.$touch()"
          />
        </p>
        <div v-if="$v.rePassword.$dirty">
          <p v-if="!$v.rePassword.required" class="error">
            Repeat password is required!
          </p>
          <p v-else-if="!$v.rePassword.sameAsPassword" class="error">
            Passwords do not match!
          </p>
        </div>

        <p>
          <button :disabled="$v.$invalid">Create Account</button>
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
import userService from "@/mixins/user-service";
import { validationMixin } from "vuelidate";
import { required, minLength, sameAs } from "vuelidate/lib/validators";

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
        displayName: this.username,
      };

      this.signUp(payload);
    },
  },
  mixins: [userService, validationMixin],
  validations: {
    username: { required },
    email: { required },
    password: { required, minLength: minLength(6) },
    rePassword: { required, sameAsPassword: sameAs('password') },
  },
};
</script>

<style scoped></style>
