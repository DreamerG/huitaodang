import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Listy from '@/components/Listy'
import Listblank from '@/components/Listblank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
      {
          path:"/category",
          name: "Listblank",
          component:Listblank,
          children:[
              {
                  path: ':listname',
                  name: 'Listy',
                  component: Listy
              }
          ]
      }
  ]
})
