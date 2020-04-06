import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';
import SignIn from '@/components/auth/SignIn.vue';
import SignUp from '@/components/auth/SignUp.vue';
import NotFound from '@/components/shared/NotFound.vue';
import AddRecipe from '@/components/recipes/AddRecipe.vue';
import RecipeDetails from '@/components/recipes/RecipeDetails.vue';
import RecipeStart from '@/components/recipes/RecipeStart.vue';


Vue.use(VueRouter);

function anonymousGuard(to, from, next) {
    if (localStorage.getItem('token') !== null) {
        next('/');
    } else {
        next();
    }
}

function authGuard(to, from, next) {
    if (localStorage.getItem('token') === null) {
        next('/sign-in');
    } else {
        next();
    }
}


const routes = [
    { path: '/', component: Home },
    {
        path: '/sign-in', component: SignIn, beforeEnter: anonymousGuard
    },
    {
        path: '/sign-up', component: SignUp, beforeEnter: anonymousGuard
    },
    {
        path: '/recipe', component: RecipeStart, beforeEnter: authGuard, children: [
            {
                path: ':id', component: RecipeDetails
            },
            {
                path: 'add-recipe', component: AddRecipe
            }
        ]
    },
    {
        path: '*', component: NotFound
    }
];

export default new VueRouter({
    mode: 'history',
    routes
});