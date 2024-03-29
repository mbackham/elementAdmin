import Vue from 'vue'
import Router from 'vue-router'
import ListArtical from '../views/ListArtical.vue'
import CreateArtical from '../views/CreateArtical.vue'
import EditArtical from '../views/EditArtical.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/articles/index'
    },
    {
      path: '/articles/index',
      name: 'list-article',
      component: ListArtical
    },
    {
      path: '/articles/create',
      name: 'create-article',
      component: CreateArtical
    }, {
      path: '/articles/:id/edit',
      name: 'edit-article',
      component: EditArtical
    }
  ]
})
