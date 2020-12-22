import Vue from 'vue'
import Router from 'vue-router'
import Body from '@/components/Body'
import Board from '@/components/Board'
import People from '@/components/People'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Body',
      component: Body
    },
    {
      path: '/board',
      name: 'Board',
      component: Board
    },
    {
      path: '/people',
      name: 'People',
      component: People
    }
  ]
})
