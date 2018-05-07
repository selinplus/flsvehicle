import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/wxhl/welcome'
import Home from '@/components/wxhl/home'
import User from '@/components/wxhl/user'
import Dept from '@/components/wxhl/dept'
import Task from '@/components/wxhl/task'
import Callback from '@/components/wxhl/callback'
import Statis from '@/components/wxhl/statis'
import File from '@/components/wxhl/file'
import Fileback from '@/components/wxhl/fileback'

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
        }, {
          path: 'task',
          name: 'Task',
          component: Task
        }, {
          path: 'callback',
          name: 'Callback',
          component: Callback
        }, {
          path: 'statis',
          name: 'Statis',
          component: Statis
        }, {
          path: 'file',
          name: 'File',
          component: File
        }, {
          path: 'fileback',
          name: 'Fileback',
          component: Fileback
        }
      ]
    }
  ]
})
