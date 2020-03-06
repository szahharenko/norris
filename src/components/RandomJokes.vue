<template>
  <div class="jokes">
    <h2>{{ this.$route.params.category }}</h2>
    <ul>
      <template v-for="joke in jokes">
        <li v-bind:key="joke.id" @click="like(joke)" :class="{liked:joke.isliked}">
          <div class="heart-shape"></div>
          <span>{{joke.value}}</span>
        </li>
      </template>
    </ul>
    <div> <!--  v-if="this.countJokes() == 3" -->
      <button @click="more()">More jokes</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Jokes',
  data () {
    return {
      limit: 3,
      likes: {},
      ids: {},
      jokes: []
    }
  },
  methods: {
    more () {
      this.ids = {}
      this.jokes = []
      this.load()
    },
    countJokes () {
      return this.jokes.length
    },
    load () {
      const category = this.$route.params.category
      let jokesurl = 'https://api.chucknorris.io/jokes/random'
      if (category) {
        jokesurl += `?category=${category}`
      }
      //
      let i = 0
      while (i !== this.limit) {
        i++
        axios
          .get(jokesurl)
          .then(response => {
            const joke = response.data
            joke.isliked = this.likes[joke.id] || false
            if (!this.ids[joke.id]) { // only uniqe jokes
              this.ids[joke.id] = joke
              this.jokes.push(joke)
            }
          })
      }
    },
    like: function (joke) {
      if (joke.isliked) {
        this.likes[joke.id] = false
        joke.isliked = false
      } else {
        this.likes[joke.id] = joke
        joke.isliked = true
      }
      console.log(joke)
    }
  },
  mounted () {
    this.load()
  }
}
</script>
<style scoped>
  .jokes {user-select: none;text-align: center;}
  .jokes h2 {text-transform: capitalize;display: inline-block;padding: 10px;color: #338b53;border-top: dashed 1px #797979;}
  .jokes ul {list-style: none;}
  .jokes ul li {padding: 30px;border-bottom: dashed 1px #777;position:relative;padding-left: 80px;text-align:left;cursor:pointer;}
  .jokes ul li:hover {background-color:#52f88e;}
  .jokes ul li .heart-shape {position: absolute;top:50%;left:0%;margin:-10px 0 0 20px;opacity: 0.3;}
  .jokes ul li.liked {background-color: #abddbd;color: #0f4a0f;}
  .jokes ul li.liked .heart-shape {opacity: 1;}
</style>
