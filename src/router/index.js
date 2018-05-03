import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/wxhl/welcome'
import Home from '@/components/wxhl/home'
import User from '@/components/wxhl/user'
import Dept from '@/components/wxhl/dept'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'user',
          name: 'User',
          component: User
        }, {
          path: 'dept',
          name: 'Dept',
          component: Dept
        }
      ]
    }
  ]
})
