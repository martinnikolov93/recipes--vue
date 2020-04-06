<template>
  <div>
    recipe edit works
    <div>Editing recipe: {{ recipeId }}</div>
    <p class="field field-icon">
      <label for="recipe-name">
        <span>
          Recipe name:
        </span>
      </label>
      <input
        v-model="selectedRecipe.name"
        type="text"
        name="recipe-name"
        id="recipe-name"
      />
    </p>
  </div>
</template>

<script>
import recipesMixin from "@/mixins/recipes-mixin";

export default {
  props: {
    isAuth: Boolean,
  },
  data: function() {
    return {
      recipeId: this.$route.params.id,
      recipeName: {},
    };
  },
  name: "RecipeEdit",
  beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
  created() {
    this.getRecipe(this.recipeId);
  },
  methods: {},
  mixins: [recipesMixin],
};
</script>

<style></style>
