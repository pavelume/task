import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import About from './components/dataForm.vue'
import Hobbies from './components/addSubject.vue'

const routes = [
  {
    path: "/dataForm",
    name: "Data Form",
    component: Data
  },
  {
    path: "/addSubject",
    name: 'Add Subject',
    component: Subject
  }
]

const router = new VueRouter({
  routes
})

export default router