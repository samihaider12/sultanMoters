                    //Website \\

import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Post from "@/views/Post.vue";
import Bike from '@/components/BikeModul/bike.vue';
import Car from '@/components/carModul/car.vue';
import Bus from '@/components/Bus/bus.vue';
 

const routes = [
  // Navbar\\
  { 
    path: '/', 
    component: Home 
  },
  { 
    path: '/about',
    component: About 
  },
  {
    path: '/post',
    component: Post 
  },
  {
    path: '/contact', 
    component: Contact 
  },
     //SideBar \\
  { 
    path: '/bike', 
    component: Bike
  },
  { 
    path: '/car',
    component:  Car 
  },
  {
    path: '/bus',
    component:  Bus
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router