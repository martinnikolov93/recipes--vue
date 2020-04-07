<template>
  <div>
    <div v-if="loader">Loading data..</div>
    <div v-else>
      <section>
        <div class="content">
          <div><img v-bind:src="selectedRecipe.recipeImg" /></div>
          <h3>{{ selectedRecipe.name }}</h3>
          <div>{{ selectedRecipe.recipeDescr }}</div>
          <router-link class="blue-button" :to="recipeId | recipeEditLink"
            >Edit</router-link
          >
        </div>
      </section>
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
