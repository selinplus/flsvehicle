import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/flsvehicle/Welcome'
import Company from '@/components/flsvehicle/Company'
import Business from '@/components/flsvehicle/Business'
import Service from '@/components/flsvehicle/Service'
import About from '@/components/flsvehicle/about'
import Special from '@/components/flsvehicle/special'
import Voice from '@/components/flsvehicle/voice'
import Navi from '@/components/flsvehicle/navi'
import Reg from '@/components/flsvehicle/reg'
import Prediction from '@/components/flsvehicle/prediction'
import Illegal from '@/components/flsvehicle/illegal'
import Info from '@/components/flsvehicle/info'
import Workflow from '@/components/flsvehicle/Workflow'

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
