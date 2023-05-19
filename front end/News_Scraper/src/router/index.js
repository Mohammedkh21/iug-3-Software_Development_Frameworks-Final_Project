import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import NewsPage from '../views/NewsPage.vue'
import WorldNewsPage from '../views/news/WorldNews.vue'
import BusinessPage from '../views/news/BusinessNews.vue'
import AfricaPage from '../views/news/AfricaNews.vue'
import RegisterPage from '../views/auth/Register.vue'
import LoginPage from '../views/auth/Login.vue';
// import welcomePage from '../views/main/welcome.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcomePage'
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
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
