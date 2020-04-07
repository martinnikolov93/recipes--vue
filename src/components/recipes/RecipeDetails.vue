<template>
  <div>
    recipe details works
    <div>Recipe ID: {{ recipeId }}</div>
    <div v-if="loader">Loading data..</div>
    <div v-else>
      <div>Recipe Name: {{ selectedRecipe.name }}</div>
      <div>Recipe Description: {{ selectedRecipe.recipeDescr }}</div>
      <div><img v-bind:src="selectedRecipe.recipeImg" /></div>
      <router-link class="blue-button" :to="recipeId | recipeEditLink">Edit</router-link>
    </div>
  </div>
</template>

<script>
import recipesService from "@/mixins/recipes-service";

export default {
  name: "RecipeDetails",
  props: {
    isAuth: Boolean,
  },
  data: function() {
    return {
      recipeId: this.$route.params.id,
    };
  },
  beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
  created() {
    this.getRecipe(this.recipeId);
  },
  filters: {
    recipeEditLink(recipeId) {
      return `/recipe/${recipeId}/edit`;
    },
  },
  methods: {},
  mixins: [recipesService],
};
</script>

<style></style>
