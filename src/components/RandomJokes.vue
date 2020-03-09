<template>
  <div class="jokes">
    <ul>
      <template v-for="joke in jokes">
        <li v-bind:key="joke.id" @click="likeToggle(joke)" :class="{liked:joke.isliked}">
          <div class="heart-shape"></div>
          <span>{{joke.value}}</span>
        </li>
      </template>
    </ul>
    <button @click="reload()">More jokes</button>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Jokes',
  data () {
    return {
      requests: 0,
      likes: {},
      ids: {},
      jokes: []
    }
  },
  watch: {
    '$route' (to, from) {
      this.reload() // react to route changes...
    }
  },
  methods: {
    save () {
      const likeslist = []
      for (const like in this.likes) {
        likeslist.push(this.likes[like])
      }
      this.$store.dispatch('updateLikes', likeslist)
    },
    reload () {
      this.ids = {}
      this.jokes = []
      this.requests = 0
      this.load()
    },
    load () {
      const category = this.$route.params.category
      let jokesurl = 'https://api.chucknorris.io/jokes/random'
      if (category) jokesurl += `?category=${category}`
      axios
        .get(jokesurl)
        .then(response => {
          this.requests++
          const joke = response.data
          joke.isliked = this.likes[joke.id] || false
          if (!this.ids[joke.id]) { // load only uniqe jokes
            this.ids[joke.id] = joke
            this.jokes.push(joke)
            this.requests = 0
          }
          if (this.jokes.length < 3 && this.requests < 15) { // try max 15 fails to avoid endless requests
            this.load() // load more if it's still less than 3 (API does not allow to do it at once)
          }
        })
    },
    likeToggle (joke) {
      if (joke.isliked) {
        delete this.likes[joke.id]
      } else {
        this.likes[joke.id] = joke
      }
      joke.isliked = !joke.isliked
      this.save()
    }
  },
  mounted () {
    this.load()
  }
}
</script>
<style scoped>
  .jokes {user-select: none;text-align: center;margin-top: 30px}
  .jokes h2 {text-transform: capitalize;display: inline-block;padding: 10px;color: #338b53;border-top: dashed 1px #797979;}
  .jokes ul {list-style: none;margin-bottom: 20px;}
  .jokes ul li {padding: 30px;border-bottom: dashed 1px #777;position:relative;padding-left: 80px;text-align:left;cursor:pointer;}
  .jokes ul li:last-child {border: none;}
  .jokes ul li:hover {background-color:#52f88e;}
  .jokes ul li .heart-shape {position: absolute;top:50%;left:0%;margin:-10px 0 0 20px;opacity: 0.3;}
  .jokes ul li.liked {background-color: #abddbd;color: #0f4a0f;}
  .jokes ul li.liked .heart-shape {opacity: 1;}
</style>
