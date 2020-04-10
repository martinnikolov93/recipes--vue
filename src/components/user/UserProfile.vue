<template>
  <div>
    <div v-if="loader" class="loader">Loading data..</div>
    <div v-else>
      <section>
        <div class="content">
          <h1>Your profile</h1>
          <div>Email: {{ userInfo.email }}</div>
          <div>Username: {{ userInfo.displayName }}</div>

          <h3>Your recipes:</h3>
          <div v-if="userRecipes.length == 0">You don't have any recipes yet!</div>
          <div v-else>
            <div class="recipe-card" v-for="r in userRecipes" :key="r.recipeId">
              <router-link :to="r | recipeViewLink"
                ><img v-bind:src="r.recipeImg" class="recipe-card-img"
              /></router-link>
              <h3>
                <router-link
                  class="recipe-card-title"
                  :to="r | recipeViewLink"
                  >{{ r.name }}</router-link
                >
              </h3>
              <div class="recipe-card-description">
                {{ r.recipeDescr.slice(0, 130) }}...
              </div>
            </div>
          </div>
         
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import userService from "@/mixins/user-service";
import recipesService from "@/mixins/recipes-service";

export default {
  name: "UserProfile",
  props: {
    isAuth: Boolean,
  },
  data: function() {
    return {
    };
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
    const payload = {
      idToken: localStorage.getItem("token"),
    };

    this.getUserData(payload);
    this.getUserRecipes(localStorage.getItem("userId"));
  },
  methods: {},
  mixins: [userService, recipesService],
};
</script>

<style scoped>
.recipe-card {
  display: inline-block;
  height: 435px;
  width: 350px;
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
