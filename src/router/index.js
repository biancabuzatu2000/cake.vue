import Vue from "vue";
import VueRouter from "vue-router";
import Contact from "../views/Contact";
import Login from "../views/Login";
import About from "../views/About";
import Home from "@/views/Home";
import Cakes from "@/views/Cakes";
import Cupcakes from "@/views/Cupcakes";
import Cookies from "@/views/Cookies";
import Profile from "@/views/Profile";
import store from '../store'
import Cart from "@/views/Cart";
import Message from "@/views/Message"
import Cake1 from "@/views/Cake1";
import Cupcake1 from "@/views/Cupcake1";
import Cookie1 from "@/views/Cookie1";
import Order from "@/views/Order";

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home

  },
  {
    path: '/cake1',
    name: 'Cake1',
    component: Cake1

  },
  {
    path: '/cupcake1',
    name: 'Cupcake1',
    component: Cupcake1

  },
  {
    path: '/cookie1',
    name: 'Cookie1',
    component: Cookie1

  },

  {
    path: '/profile',
    name: 'profile',
    meta:{
      auth: true
    },
    component: Profile

  },
  {
    path: '/cakes/:id',
    name: 'Cakes',
    component: Cakes
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/cupcakes/:id',
    name: 'Cupcakes',
    component: Cupcakes
  },
  {
    path: '/cookies/:id',
    name: 'Cookies',
    component: Cookies
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/Log In',
    name: 'Log In',
    component: Login
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next) => {
  if(to.meta?.auth) {
   store.state.user?.name? next() :next('/Log In')
  } else{
    next()
  }
})

export default router

