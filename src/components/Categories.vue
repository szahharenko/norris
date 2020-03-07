<template>
  <div class="norris-categories">
    <ul class="flex">
      <li v-for="cat in categories" :class="{active: isActive(cat)}" v-bind:key="cat" class="flex-item w25">
          <router-link :to="`/jokes/${cat}`">{{cat}} <small v-if="getLikesCount(cat)">{{ getLikesCount(cat) }}♥</small></router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Categories',
  data () {
    return {
      totallikes: {},
      categories: []
    }
  },
  methods: {
    getLikesCount (cat) {
      const count = this.totallikes[cat]
      return count || 0
    },
    isActive (cat) {
      return this.$route.params.category === cat
    }
  },
  computed: {
    likescount () {
      return this.$store.state.likes.length
    }
  },
  watch: {
    likescount () {
      const likes = {}
      this.$store.state.likes.forEach((like) => {
        const cats = like.categories || []
        cats.forEach((cat) => {
          const count = likes[cat] || 0
          likes[cat] = (count + 1)
        })
      })
      this.totallikes = likes
    }
  },
  mounted () {
    axios
      .get('https://api.chucknorris.io/jokes/categories')
      .then(response => {
        const data = [...response.data]
        this.$store.dispatch('categories', data)
        this.categories = data
      })
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
