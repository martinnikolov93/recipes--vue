<template>
  <div>
    <div v-if="loader" class="loader">Loading data..</div>
    <div v-else>
      <form @submit.prevent="onSubmit">
        <fieldset>
          <h1>Editing recipe</h1>
          <p>
            <label for="recipe-name">
              <div>
                Recipe name:
              </div>
            </label>
            <input
              v-model="selectedRecipe.name"
              type="text"
              name="recipe-name"
              id="recipe-name"
            />
          </p>

          <p>
            <label for="recipe-description">
              <div>
                Recipe description:
              </div>
            </label>
            <textarea
              style="width: 100%;height: 271px;"
              v-model="selectedRecipe.recipeDescr"
              type="textarea"
              name="recipe-description"
              id="recipe-description"
              placeholder="Recipe description"
            ></textarea>
          </p>
          <p>
            <label for="recipe-img">
              <div>
                Recipe image:
              </div>
            </label>
            <input
              v-model="selectedRecipe.recipeImg"
              type="text"
              name="recipe-img"
              id="recipe-img"
              placeholder="Recipe image"
            />
          </p>
          <p>
            <button>Edit</button>
          </p>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import recipesService from "@/mixins/recipes-service";

export default {
  props: {
    isAuth: Boolean,
  },
  data: function() {
    return {
      recipeId: this.$route.params.id,
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
  mixins: [recipesService],
};
</script>

<style></style>
