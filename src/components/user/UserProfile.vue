<template>
  <div>
    user profile works
    <div>Your email: {{userInfo.email}}</div>
    <div>Your username: {{userInfo.displayName}}</div>
  </div>
</template>

<script>
import authAxios from "@/axios-auth";

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

    // Project Settings -> Web API key
    authAxios
      .post("/accounts:lookup", payload)
      .then((res) => {
        this.userInfo = res.data.users[0];
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {},
};
</script>

<style></style>
