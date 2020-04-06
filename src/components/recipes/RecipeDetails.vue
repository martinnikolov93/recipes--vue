<template>
  <div>
    recipe details works
    <div>Recipe ID: {{recipeId}}</div>
    <div>Recipe Name: {{selectedRecipe.name}}</div>
  </div>
</template>

<script>
import recipesMixin from "@/mixins/recipes-mixin";

export default {
  props: {
    isAuth: Boolean,
  },
  data: function () {
    return {
        recipeId: this.$route.params.id,
        recipe: {},
    };
  },
  name: "RecipeDetails",
  beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
  created() {
    this.getRecipe(this.recipeId)
  },
  methods: {
  },
  mixins: [recipesMixin],
};
</script>

<style></style>
