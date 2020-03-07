<template>
  <div>
    <Categories></Categories>
    <Jokes></Jokes>
  </div>
</template>
<script>
import Jokes from './RandomJokes.vue'
import Categories from './Categories.vue'

export default {
  name: 'chuck',
  components: {
    Jokes,
    Categories
  }
}
</script>
