<template>
  <div class="norris-categories">
    <ul class="flex">
      <li v-for="cat in this.allCategories" :class="{active: isActive(cat)}" v-bind:key="cat" class="flex-item w25">
          <router-link :to="`/jokes/${cat}`">{{cat}} <small v-if="getLikesCount(cat)">{{ getLikesCount(cat) }}♥</small></router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Categories',
  data () {
    return {
      totallikes: {}
    }
  },
  methods: {
    getLikesCount (cat) {
      return this.categoryLikes[cat] || 0
    },
    isActive (cat) {
      return this.$route.params.category === cat
    }
  },
  computed: mapGetters(['allCategories', 'allLikes', 'categoryLikes']),
  mounted () {
    this.$store.dispatch('fetchCategories')
  }
}
</script>
<style scoped>
.norris-categories {user-select: none;text-align: center;}
.norris-categories li {font-size: 120%;text-transform: capitalize;position: relative;}
.norris-categories li a {color:#338b53;text-decoration: none;padding: 5px;display: block;}
.norris-categories li.active,
.norris-categories li a:hover {background-color:#338b53;color: #fff;}
.norris-categories li.active a {color:#fff;}
</style>
