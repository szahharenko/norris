<template>
  <div id="app">
    <div class="header">
      <router-link :to="`/`"><img alt="Norris" class="logo" src="./assets/logo.jpg"></router-link>
      <h1>Facts about Chuck:</h1>
    </div>
    <router-view/>
  </div>
</template>
<script>
import VueRouter from 'vue-router'
import Norris from './components/Jokes.vue'
import store from './store/index.js'

const router = new VueRouter({
  routes: [
    // { path: '*', component: view404 },
    { path: '/', component: Norris },
    { path: '/jokes/:category', component: Norris }
  ]
})

export default {
  name: 'app',
  router: router,
  store: store
}
</script>
