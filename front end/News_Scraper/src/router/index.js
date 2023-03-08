import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import NewsPage from '../views/NewsPage.vue'
import PoliticPage from '../views/news/PoliticsNews.vue'
import SportPage from '../views/news/SportsNews.vue'
import EconomyPage from '../views/news/EconomyNews.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path : "/",
      name : "news",
      component : NewsPage,
    },
    {
      path : "/Politic",
      name : "Politic",
      component : PoliticPage,
    },
    {
      path : "/Sport",
      name : "Sport",
      component : SportPage,
    },
    {
      path : "/Economy",
      name : "Economy",
      component : EconomyPage,
    },
  ]
})

export default router
