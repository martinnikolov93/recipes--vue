<template>
  <div>
    recipe details works
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
        
    };
  },
  name: "RecipeDetails",
  beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
  methods: {
  },
  mixins: [recipesMixin],
};
</script>

<style></style>
