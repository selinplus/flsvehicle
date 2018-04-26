import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Company from '@/components/Company'
import Business from '@/components/Business'
import Service from '@/components/Service'
import About from '@/components/about'
import Special from '@/components/special'
import Voice from '@/components/voice'
import Navi from '@/components/navi'
import Reg from '@/components/reg'
import Prediction from '@/components/prediction'
import Illegal from '@/components/illegal'
import Info from '@/components/info'
import Workflow from '@/components/Workflow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    }, {
      path: '/company',
      name: 'Company',
      component: Company,
      children: [{
        path: 'about',
        name: 'About',
        component: About
      }, {
        path: 'special',
        name: 'Special',
        component: Special
      }, {
        path: 'voice',
        name: 'Voice',
        component: Voice
      }, {
        path: 'navi',
        name: 'Navi',
        component: Navi
      }
      ]
    }, {
      path: '/business',
      name: 'Business',
      component: Business,
      children: [{
        path: 'reg',
        name: 'Reg',
        component: Reg
      }, {
        path: 'prediction',
        name: 'Prediction',
        component: Prediction
      }, {
        path: 'illegal',
        name: 'Illegal',
        component: Illegal
      }]
    }, {
      path: '/service',
      name: 'Service',
      component: Service,
      children: [{
        path: 'info',
        name: 'Info',
        component: Info
      }, {
        path: 'workflow',
        name: 'Workflow',
        component: Workflow
      }]
    }
  ]
})
