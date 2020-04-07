<template>
  <div>
    user profile works
    <div v-if="loader">Loading user data..</div>
    <div v-else>
      <div>Your email: {{ userInfo.email }}</div>
      <div>Your username: {{ userInfo.displayName }}</div>
    </div>
  </div>
</template>

<script>
import userService from "@/mixins/user-service";

export default {
  name: "UserProfile",
  props: {
    isAuth: Boolean,
  },
  data: function() {
    return {
      userInfo: "",
    };
  },
  beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
  created() {
    const payload = {
      idToken: localStorage.getItem("token"),
    };

    this.getUserData(payload);
  },
  methods: {},
  mixins: [userService],
};
</script>

<style></style>
