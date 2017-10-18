import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Listy from '@/components/Listy'
import Listblank from '@/components/Listblank'
import Item from '@/components/Item'
import Search from '@/components/Search'

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
                  path: ':listname/:sort?',
                  name: 'Listy',
                  component: Listy,
              }
          ]
      },
      {
          path:"/item/:thing_id",
          name:"Item",
          component:Item
      },
      {
          path:"/search",
          name:"Search",
          component:Search,
          children:[
              {
                  path:':sear',
                  name:'Item',
                  comonent:Item
              }
          ]
      }
  ],
    scrollBehavior: function (to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 }
    }
})

