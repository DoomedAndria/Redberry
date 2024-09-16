import {RouterView} from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('../layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../components/Header.vue')
      }
    ]
  },
];

export default routes;