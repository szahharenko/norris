<template>
  <div class="norris-categories">
    <ul class="flex">
      <li v-for="cat in categories" v-bind:key="cat.id" class="flex-item w25">
          <router-link :to="`/jokes/${cat}`">{{cat}}</router-link>
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
      categories: []
    }
  },
  mounted () {
    axios
      .get('https://api.chucknorris.io/jokes/categories')
      .then(response => {
        this.categories = [...response.data]
        console.log([...response.data], typeof response.data)
      })
  }
}
</script>
