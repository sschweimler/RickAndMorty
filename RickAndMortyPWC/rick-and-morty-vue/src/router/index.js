import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home.vue'
import Character from './../components/Character.vue'

Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', component: Home },
      { path: '/character', name: 'character', component: Character },
    ]
})