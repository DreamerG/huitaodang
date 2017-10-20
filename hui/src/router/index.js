import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Listy from '@/components/Listy'
import Listblank from '@/components/Listblank'
import Item from '@/components/Item'
import Search from '@/components/Search'
import Popular from '@/components/Popular'
import Register from '@/components/Register'
import Common from '@/components/Common'
import Twenty from '@/components/Twenty'
import Login from '@/components/Login'


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
                  name:'Search',
                  comonent:Search
              }
          ]
      },
      {
          path:"/popular-items",
          name:"Popular",
          component:Popular
      },
      {
          path:"/register",
          name:"Register",
          component:Register
      },
      {
          path:"/9k9",
          name:"Common",
          component:Common
      },
      {
          path:"/20k",
          name:"Twenty",
          component:Twenty
      },
      {
          path:"/login",
          name:"Login",
          component:Login
      }




  ],
    scrollBehavior: function (to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 }
    }
})

