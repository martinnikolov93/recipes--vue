import axiosDb from '@/axios-database';

export default {
    data: function() {
        return { 
            selectedRecipe: {},
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
        },
        async getRecipe(recipeId) {
            try {
                await axiosDb.get(`recipes/${recipeId}.json`).then(res => {
                    this.selectedRecipe = res.data;
                })
            } catch(err) {
                console.log(err);
            }
        },
        async editRecipe(recipeId, recipeData) {
            try {
                console.log(recipeId, recipeData)
                await axiosDb.put(`recipes/${recipeId}.json`, recipeData).then(() => {
                    this.$router.push(`/recipe/${recipeId}`)
                })
            } catch(err) {
                console.log(err);
            }
        }
    }
}