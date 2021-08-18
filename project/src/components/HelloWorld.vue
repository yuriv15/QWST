<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <ol> <li v-for="item in items" :key="item"><div><a :href="item.url"><h2>{{item.title}}</h2></a></div><div><p>{{item.score}} points by {{item.by}} {{parseInt((Date.now() - item.time*1000)/3600000)}} hours ago</p></div></li>

    </ol>
    <div>
      <p>Developed by <a id="me" href="https://github.com/yuriv15">Yuri Gonçalves</a></p>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted: function () {
    this.update_news();
  },
  data: function () {
    return {
      news: [],
      searching: true,
      error: false,
      items_page: 20,
      items_json: [],
      items: [],
  }
  },
  methods: {
    update_news: function () {
      this.searching = true;
      this.error = false;
      axios.get('https://hacker-news.firebaseio.com/v0/topstories.json'
      ).then(response => {
        this.news = response.data.splice(0, this.items_page);
        this.searching = false;
        this.update_items();
        this.get_items();
      }).catch(() => {
        this.searching = false;
        this.error = true;
      })
    },
    update_items: function () {
      for (let i = 0; i < this.news.length; i++) {
        this.items_json.push(`https://hacker-news.firebaseio.com/v0/item/${this.news[i]}.json`)
      }
    },
    get_items: function () {
      for (let i = 0; i < this.items_json.length; i++) {
        axios.get(this.items_json[i]
        ).then(response => {
          this.items.push(response.data);
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vw 1vw;
  box-sizing: border-box;
}
h1 {
  font-size: 4vh;
}
h2 {
  margin: 3vh 0;
  font-size: 3vh;
}
p {
  font-size: 2vh;
}
ol {
  /*list-style-type: none;*/
  padding: 0;

}
li {
  /*margin: 0 10px;*/
}
a {
  color: rgba(63, 195, 11, 0.89);
  text-decoration: none;
}
#me {
  color: rgba(54, 162, 12, 0.89);
}
</style>
