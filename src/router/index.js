import Vue from 'vue'
import Router from 'vue-router'
import uploads from '@/components/uploads'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'uploads',
      component: uploads
    }
  ]
})
