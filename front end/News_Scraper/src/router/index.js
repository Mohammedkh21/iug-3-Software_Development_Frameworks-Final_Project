import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import NewsPage from '../views/NewsPage.vue'
import WorldNewsPage from '../views/news/WorldNews.vue'
import BusinessPage from '../views/news/BusinessNews.vue'
import AfricaPage from '../views/news/AfricaNews.vue'




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
      path : "/:type/:slug",
      name : "news",
      component : NewsPage,
      props: true
    },
    {
      path : "/WorldNews",
      name : "WorldNews",
      component : WorldNewsPage,
    },
    {
      path : "/Business",
      name : "Business",
      component : BusinessPage,
    },
    {
      path : "/Africa",
      name : "Africa",
      component : AfricaPage,
    },
  ]
})

export default router
