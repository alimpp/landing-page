import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path : '/' , 
    name : 'home' , 
    component : () => import('@/pages/homePage/index.vue')
  } ,
  {
    path : '/about' , 
    name : 'about' , 
    component : () => import('@/pages/aboutPage/index.vue')
  } ,
  {
    path : '/contact' , 
    name : 'contact' , 
    component : () => import('@/pages/contactPage/index.vue')
  } ,
  {
    path : '/portfolio' , 
    name : 'portfolio' , 
    component : () => import('@/pages/portfolioPage/index.vue')
  } ,
  {
    path : '/portfolio/:id' , 
    name : 'projects' , 
    component : () => import('@/pages/detailProjects/index.vue')
  } ,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
