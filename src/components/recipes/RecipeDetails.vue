<template>
  <div>
    recipe details works
    <div>Recipe ID: {{recipeId}}</div>
    <div>Recipe Name: {{selectedRecipe.name}}</div>
    <router-link :to="recipeId | recipeEditLink">Edit</router-link>
  </div>
</template>

<script>
import recipesMixin from "@/mixins/recipes-mixin";

export default {
  name: "RecipeDetails",
  props: {
    isAuth: Boolean,
  },
  data: function () {
    return {
        recipeId: this.$route.params.id,
        recipe: {},
    };
  },
  beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
  created() {
    this.getRecipe(this.recipeId)
  },
  filters: {
    recipeEditLink(recipeId){
      return `/recipe/${recipeId}/edit`;
    }
  },
  methods: {
  },
  mixins: [recipesMixin],
};
</script>

<style></style>
