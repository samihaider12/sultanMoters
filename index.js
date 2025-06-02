                    //Website \\

import { createRouter, createWebHistory } from 'vue-router'
// import Home from "@/views/Home.vue";
// import About from "@/views/About.vue";
// import Contact from "@/views/Contact.vue";
// import Service from '@/views/Service.vue';
// import SaleProduct from '@/views/SaleProduct.vue';
// import bike from '@/components/bike.vue';
// import bikesale from '@/components/bikesale.vue';
// import car from '@/components/car.vue';
// import carSale from '@/components/carSale.vue';
// import bus from '@/components/bus.vue';  
// import busSale from '@/components/busSale.vue';
// import car4x4 from '@/components/car4x4.vue';
// import car4x4Sale from '@/components/car4x4Sale.vue';
// import Pament from '@/components/PamentMethod/Pament.vue'; 
// import Login from '@/components/LoginData/Login.vue';
// import SignUp from '@/components/LoginData/SignUp.vue'; 
 
const routes = [
  // Navbar\\
  { 
    path: '/', 
    component:() => import ('../views/Home.vue')
  },
  { 
    path: '/about',
    component:() => import ('../views/About.vue')
  },
  {
    path: '/Service',
    component: () => import ('../views/Service.vue')
  },
  {
    path: '/contact', 
    component:() => import ('../views/Contact.vue')
  },
  {
    path:'/SaleProduct',
    component:() => import ('../views/SaleProduct.vue')
  },
     //SideBar \\
  { 
    path: '/bike', 
    component:() => import ('../components/bike.vue')
  },
  { 
    path: '/bikesale', 
    component: () => import ('../components/bikesale.vue')
  },
  { 
    path: '/car',
    component: () => import ('../components/car.vue')
  },
  {
    path:'/carSale',
    component: () => import ('../components/carSale.vue')
  },
  {
    path: '/bus',
    component: () => import ('../components/bus.vue')
  },
  {
    path:'/busSale',
    component:() => import ('../components/busSale.vue')
  },
  {
    path:'/car4x4',
    component:() => import ('../components/car4x4.vue')
  },
  {
    path:'/car4x4Sale',
    component:() => import ('../components/car4x4Sale.vue')
  },
 // pament Methods \\
{
    path: '/pament',
    component: () => import ('../components/PamentMethod/Pament.vue')
  },
  // Login & Signup Page
  {
    path: '/Login',
    component: () => import ('../components/LoginData/Login.vue')
  },
  {
   path: '/SignUp',
   component:() => import ('../components/LoginData/SignUp.vue')
  },
   
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router