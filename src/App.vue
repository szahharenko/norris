<template>
  <div id="app">
    <div class="header">
      <a href="/"><img alt="Norris" class="logo" src="./assets/logo.jpg"></a>
      <h1>Please sid down, and be a Chuck guest!</h1>
    </div>
    <router-view/>
  </div>
</template>
<script>
import VueRouter from 'vue-router'
import AllCategories from './components/Categories.vue'
import RandomJokes from './components/RandomJokes.vue'

const router = new VueRouter({
  routes: [
    // { path: '/', component: Categories }
    // { path: '*', component: view404 },
    { path: '/', component: AllCategories },
    { path: '/jokes/:category', component: RandomJokes }
    // { path: '/profile', component: Profile },
  ]
})
export default {
  name: 'app',
  router: router,
  mounted () {},
  watch: {},
  methods: {
    name () {
    }
  }
}
</script>
<style>
* {padding:0;margin:0;}
body {font-size:14px;font-family: Sans-serif;background: #e1e1e1;}
h1 {margin: 10px 0 15px;font-size:24px;}
h2 {margin: 7px 0 12px;font-size:20px;}
h3 {margin: 5px 0 10px;font-size:18px;}
p, h4 {margin: 5px 0 8px;font-size:14px;}
ul li,
ul {list-style-type:none;margin:0;padding:0;}

#app {max-width:600px;margin:30px auto;}

.header {text-align: center;}
.header img {max-height: 320px;user-select: none;border-radius: 100%;margin-bottom: 20px;box-shadow: 0 0 380px #00000038, 0 7px 0 0px #00000038, 0 0 50px #000000a1;}

.flex {display: -webkit-box;display: -moz-box;display: -ms-flexbox;display: -webkit-flex;display: flex;flex-wrap: wrap;}
.flex.space {justify-content:space-around;}
.flex.center {justify-content: center;}
.flex.vcenter {align-items: center;}
.flex.nowrap {flex-wrap: nowrap;}
.flex.nogrow .flex-item  {flex-grow: 0;}
.flex .flex-item {flex:auto;}
.flex .flex-item.w100 {flex:1;}

@media (min-width: 769px) {
  .flex .flex-item.w50  {width:50%;}
  .flex .flex-item.w33  {width:33%;}
  .flex .flex-item.w66  {width:66%;}
  .flex .flex-item.w25  {width:25%;}
  .flex .flex-item.w20  {width:20%;}
  .flex .flex-item.w75  {width:75%;}
  .flex .flex-item.w80  {width:80%;}
  .flex .flex-item.w100 {width:100%;}
}
@media (max-width: 768px) {
  .flex .flex-item.m50 {max-width:50%;}
  .flex .flex-item.m33 {max-width:33%;}
  .flex .flex-item.m66 {max-width:66%;}
  .flex .flex-item.m25 {max-width:25%;}
  .flex .flex-item.m20 {max-width:20%;}
  .flex .flex-item.m75 {max-width:75%;}
  .flex .flex-item.m80 {max-width:80%;}
}

.heart-shape {
  position: relative;
  width: 20px;
  height: 20px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color:#999;
}
.heart-shape:before,
.heart-shape:after{
  position: absolute;
  width: 20px;
  height: 20px;
  content: '';
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  background-color:#999;
}
.heart-shape:before{
  bottom: 0px;
  left: -10px;
}
.heart-shape:after{
  top: -10px;
  right: 0px;
}
.liked .heart-shape:before,
.liked .heart-shape:after,
.liked .heart-shape,
.active.heart-shape:before,
.active.heart-shape:after,
.active.heart-shape {background-color: #338b53;}
</style>
