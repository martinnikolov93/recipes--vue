<template>
  <div>
     <router-view @onAuth="isAuth = $event" :isAuth="isAuth"></router-view>
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
  name: "RecipeStart",
  beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
  methods: {
  },
  mixins: [recipesMixin],
};
</script>

<style></style>
