<template>
  <nav>
    <ul class="navigation">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li v-if="!isAuth">
        <router-link to="/sign-in">Login</router-link>
      </li>
      <li v-if="!isAuth">
        <router-link to="/sign-up">Sign Up</router-link>
      </li>
      <li v-if="isAuth">
        <router-link to="/recipe/add-recipe">Add recipe</router-link>
      </li>
      <li v-if="isAuth">
        <router-link to="/user-profile">Profile</router-link>
      </li>
      <li v-if="isAuth">
        <a @click="onLogout" class="logout">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    isAuth: Boolean,
  },
  name: "Header",
  methods: {
    onLogout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");

      this.$emit("onAuth", false);
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
.navigation {
  box-sizing: border-box;
  height: 50px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: white;
  border: solid black 1px;
  border-radius: 2px;
}

li {
  float: left;
}

li a {
  display: block;
  color: #364d65;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #f1f1f1;
  color: black;
  border-bottom: solid #7b7b7b 1px;
}

.router-link-exact-active {
  background-color: #f1f1f1;
  color: black;
  border-bottom: solid #7b7b7b 1px;
}

.logout {
  cursor: pointer;
}
</style>
