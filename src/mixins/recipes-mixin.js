import axiosDb from '@/axios-database';

export default {
    data: function() {
        return { 
            recipes: []
         }
    },
    methods: {
        async getAllPosts() {
            try {
                const res = await axiosDb.get(`recipes.json`);
                const allRecipesRes = res.data;
                for (const recipeId in allRecipesRes) {
                  this.recipes.push({
                    recipeId,
                    ...allRecipesRes[recipeId]
                  });
                }
            } catch(err) {
                console.log(err);
            }
        },
        async addRecipe(recipe) {
            try {
                await axiosDb.post(`recipes.json`, recipe).then(() => {
                    this.$router.push("/");
                });
            } catch(err) {
                console.log(err);
            }
        }
    }
}