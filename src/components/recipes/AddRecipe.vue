<template>
  <div>
    <form @submit.prevent="onSubmit">
      <fieldset>
        <h1>Add recipe</h1>

        <label for="recipe-name">
          <span>
            Recipe name
          </span>
        </label>
        <input
          v-model="recipeName"
          type="text"
          name="recipe-name"
          id="recipe-name"
          placeholder="Recipe name"
        />

        <p>
          <button>Add recipe</button>
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
  data: function () {
    return {
        recipeName: "",
    };
  },
  name: "AddRecipe",
  beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
  methods: {
      onSubmit(){
          this.addRecipe({name: this.recipeName});
      }
  },
  mixins: [recipesMixin],
};
</script>

<style></style>
