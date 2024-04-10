import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AccueilView
    },
    // {
    //   path: '/metier',
    //   name: 'metier',
    //   component: () => import('../components/Metier.vue')
    // },
    // {
    //   path: '/vision',
    //   name: 'vision',
    //   component: () => import('../components/Vision.vue')
    // },
    // // {
    // //   path: '/',
    // //   name: 'metier',
    // //   component: () => import('../views/Metier.vue')
    // // },
    // {
    //   path: '/services',
    //   name: 'services',
    //   component: () => import('../components/Services.vue')
    // },
    // {
    //   path: '/sericeplus',
    //   name: 'serviceplus',
    //   component: () => import('../components/ServicePlus.vue')
    // },
    // {
    //   path: '/glossaire',
    //   name: 'glossaire',
    //   component: () => import('../components/Glossaire.vue')
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: () => import('../components/Contact.vue')
    // },
    {
      path: "/:PathMatch(.*)*",
      name: "notfound",
      component: () => import('../views/NotFoundView.vue'),
    },
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
})

export default router
