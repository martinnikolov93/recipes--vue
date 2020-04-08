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
            @input="$v.recipeName.$touch()"
          />
        </p>
        <div v-if="$v.recipeName.$dirty">
          <p v-if="!$v.recipeName.required" class="error">
            Recipe name is required!
          </p>
        </div>

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
            @input="$v.recipeDescr.$touch()"
          ></textarea>
        </p>
        <div v-if="$v.recipeDescr.$dirty">
          <p v-if="!$v.recipeDescr.required" class="error">
            Recipe description is required!
          </p>
        </div>

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
            @input="$v.recipeImg.$touch()"
          />
        </p>
        <div v-if="$v.recipeImg.$dirty">
          <p v-if="!$v.recipeImg.required" class="error">
            Recipe image is required!
          </p>
        </div>

        <p>
          <button :disabled="$v.$invalid">Add recipe</button>
        </p>
      </fieldset>
    </form>
  </div>
</template>

<script>
import recipesService from "@/mixins/recipes-service";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

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
  mixins: [recipesService, validationMixin],
  validations: {
    recipeName: { required },
    recipeDescr: { required },
    recipeImg: { required },
  },
};
</script>

<style></style>
