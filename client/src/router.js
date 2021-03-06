import Vue from 'vue';
import Router from 'vue-router';
import Projects from './views/Projects.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
