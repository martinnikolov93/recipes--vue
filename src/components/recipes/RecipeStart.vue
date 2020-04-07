<template>
  <div>
      recipe start works
     <router-view></router-view>
  </div>
</template>

<script>
import recipesService from "@/mixins/recipes-service";

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
  mixins: [recipesService],
};
</script>

<style></style>
