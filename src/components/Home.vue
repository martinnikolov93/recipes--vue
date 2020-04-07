<template>
  <div id="home">
    <div v-if="isAuth">
      Home Page works (authenticated)
      <div v-if="loader">Loading data..</div>
      <div v-else>
        <p v-for="r in recipes" :key="r.recipeId">
          <router-link :to="r | recipeViewLink">{{ r.name }}</router-link>
        </p>
      </div>
    </div>
    <div v-else>
      Home Page works (not authenticated)
    </div>
  </div>
</template>

<script>
import recipesService from "@/mixins/recipes-service";

export default {
  name: "Home",
  props: {
    isAuth: Boolean,
  },
  data: function() {
    return {};
  },
  filters: {
    recipeViewLink(recipe) {
      return `/recipe/${recipe.recipeId}`;
    },
  },
  beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
  created() {
    this.getAllPosts();
  },
  mixins: [recipesService],
};
</script>

<style></style>
