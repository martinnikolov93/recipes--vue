<template>
  <div>
    <div v-if="loader">Loading user data..</div>
    <div v-else>
      <section>
        <div class="content">
          <h2>Your profile</h2>
          <div>Your email: {{ userInfo.email }}</div>
          <div>Your username: {{ userInfo.displayName }}</div>
        </div>
      </section>
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
