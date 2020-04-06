<template>
  <div>
    recipe edit works
    <div>Editing recipe: {{ recipeId }}</div>

    <form @submit.prevent="onSubmit">
      <fieldset>
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

        <p>
          <button>Edit</button>
        </p>
      </fieldset>
    </form>
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
  methods: {
    onSubmit() {
      this.editRecipe(this.recipeId, this.selectedRecipe);
    },
  },
  mixins: [recipesMixin],
};
</script>

<style></style>
