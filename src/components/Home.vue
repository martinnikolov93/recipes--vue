<template>
  <div id="home">
    <div v-if="isAuth">
      <div v-if="loader">Loading data..</div>
      <div v-else>
        <section>
          <div class="recipe-card" v-for="r in recipes" :key="r.recipeId">
            <router-link :to="r | recipeViewLink"
              ><img v-bind:src="r.recipeImg" class="recipe-card-img"
            /></router-link>
            <h3>
              <router-link class="recipe-card-title" :to="r | recipeViewLink">{{
                r.name
              }}</router-link>
            </h3>
            <div class="recipe-card-description">
              {{ r.recipeDescr }}
            </div>
          </div>
        </section>
      </div>
    </div>
    <div v-else>
      Home Page works (not authenticated)
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
    this.getAllPosts();
  },
  mixins: [recipesService],
};
</script>

<style>
a {
  color: #364d65;
  text-decoration: none !important;
}

h1 {
  text-align: center;
}
form {
  margin-top: 20px;
  margin: 20px auto;
  width: 40%;
}

fieldset {
  border-radius: 10px;
  padding: 20px;
}

input {
  flex: 0 1 100%;
  border: 1px solid;
  padding: 5px;
  /* border: 1px solid #007bff; */
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.8em 1.2em;
  width: 100%;
}

.blue-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 3px 10px;
  width: 100%;
}

i {
  border: 1px solid;
  border-right: none;
  padding: 10px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: #e9ecef;
}

.container {
  font-family: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

form .field {
  display: flex;
}

/* if error */

p.error {
  text-align: left;
  background-color: #f8d7da;
  padding: 8px;
  border-radius: 3px;
}

input.error {
  border-left-color: #a8413f;
}

.recipe-card {
  display: inline-block;
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
  height: 90px;
  overflow: hidden;
}
</style>
