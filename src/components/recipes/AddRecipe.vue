<template>
  <div>
    <form @submit.prevent="onSubmit">
      <fieldset>
        <h1>Add recipe</h1>
        <p>
          <label for="recipe-name">
            <div>
              Recipe name:
            </div>
          </label>
          <input
            v-model="recipeName"
            type="text"
            name="recipe-name"
            id="recipe-name"
            placeholder="Recipe name"
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
            v-model="recipeDescr"
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
            v-model="recipeImg"
            type="text"
            name="recipe-img"
            id="recipe-img"
            placeholder="Recipe image"
          />
        </p>
        <p>
          <button>Add recipe</button>
        </p>
      </fieldset>
    </form>
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
      recipeName: "",
      recipeDescr: "",
      recipeImg: "",
    };
  },
  name: "AddRecipe",
  beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
  methods: {
    onSubmit() {
      this.addRecipe({
        name: this.recipeName,
        recipeDescr: this.recipeDescr,
        recipeImg: this.recipeImg,
      });
    },
  },
  mixins: [recipesService],
};
</script>

<style></style>
