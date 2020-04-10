<template>
  <div id="home">
    <div v-if="isAuth">
      <div v-if="loader" class="loader">Loading data..</div>
      <div v-else>
        <section>
          <div class="recipe-card" v-for="r in sortedRecipes" :key="r.recipeId">
            <router-link :to="r | recipeViewLink"
              ><img v-bind:src="r.recipeImg" class="recipe-card-img"
            /></router-link>
            <h3>
              <router-link class="recipe-card-title" :to="r | recipeViewLink">{{
                r.name
              }}</router-link>
            </h3>
            <div class="recipe-card-description">
              {{ r.recipeDescr.slice(0, 130) }}...
            </div>
          </div>
        </section>
      </div>
    </div>
    <div v-else>
      You have to be logged in to view this page.
    </div>
  </div>
</template>

<script>
import recipesService from "@/mixins/recipes-service";

export default {
  name: "Home",
  props: {
    isAuth: Boolean,
  },
  data: function() {
    return {};
  },
  filters: {
    recipeViewLink(recipe) {
      return `/recipe/${recipe.recipeId}`;
    },
  },
  beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
  created() {
    this.getAllRecipes();
  },
  mixins: [recipesService],
};
</script>

<style scoped>
.recipe-card {
  display: inline-table;
  height: 435px;
  width: 300px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(51, 51, 51);
  border-image: initial;
  border-radius: 3px;
  padding: 0px;
  margin: 7px;
}

.recipe-card-img {
  width: 100%;
  height: 250px;
  border-bottom: solid rgb(51, 51, 51) 1px;
}

.recipe-card-title {
  padding: 5px;
}

.recipe-card-description {
  padding: 5px;
}
</style>
