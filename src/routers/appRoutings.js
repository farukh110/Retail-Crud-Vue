import { createRouter, createWebHistory } from 'vue-router';
import Home from '../screens/Home/Home.vue';
import Signup from '../components/signup/Signup.vue';
import Login from '../components/Login/Login.vue';
import CreateRetail from '../screens/Retails/CreateRetail/CreateRetail.vue';
import UpdateRetail from '../screens/Retails/UpdateRetail//UpdateRetail.vue';

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'Singup',
        component: Signup,
        path: '/signup'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },
    {
        name: 'CreateRetail',
        component: CreateRetail,
        path: '/create-retail'
    },
    {
        name: 'UpdateRetail',
        component: UpdateRetail,
        path: '/update-retail'
    },
    {
        name: 'UpdateRetail',
        component: UpdateRetail,
        path: '/update-retail/:id'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;